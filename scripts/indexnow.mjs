#!/usr/bin/env node

/**
 * AntiStoic — IndexNow Canonical URL Submission Script
 *
 * Source of truth: public/sitemap.xml
 * Protocol: https://www.indexnow.org/documentation
 * Endpoint: https://api.indexnow.org/indexnow
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const CANONICAL_HOST = 'antistoic.com';
const CANONICAL_ORIGIN = `https://${CANONICAL_HOST}`;
const SITEMAP_PATH = path.join(projectRoot, 'public', 'sitemap.xml');
const INDEXNOW_API = 'https://api.indexnow.org/indexnow';

// 1. Locate and validate verification key file
function getVerificationKey() {
  const publicDir = path.join(projectRoot, 'public');
  const files = fs.readdirSync(publicDir);

  // IndexNow keys: 8-128 hex/alphanumeric characters
  const keyFiles = files.filter(f => /^[a-fA-F0-9]{16,64}\.txt$/.test(f));

  if (keyFiles.length === 0) {
    throw new Error('No IndexNow verification key file found in public/ directory.');
  }

  if (keyFiles.length > 1) {
    throw new Error(`Multiple potential IndexNow key files found in public/: ${keyFiles.join(', ')}`);
  }

  const filename = keyFiles[0];
  const keyFromFile = filename.replace(/\.txt$/, '');
  const filePath = path.join(publicDir, filename);
  const fileContent = fs.readFileSync(filePath, 'utf8').trim();

  if (fileContent !== keyFromFile) {
    throw new Error(
      `Key file content mismatch: filename is "${keyFromFile}" but file contains "${fileContent}"`
    );
  }

  return {
    key: keyFromFile,
    filename,
    keyLocation: `${CANONICAL_ORIGIN}/${filename}`
  };
}

// 2. Parse and strictly validate canonical URLs from sitemap.xml
function getCanonicalUrls() {
  if (!fs.existsSync(SITEMAP_PATH)) {
    throw new Error(`Sitemap not found at: ${SITEMAP_PATH}`);
  }

  const xmlContent = fs.readFileSync(SITEMAP_PATH, 'utf8');
  const locRegex = /<loc>\s*(https?:\/\/[^\s<]+)\s*<\/loc>/g;
  const rawUrls = [];
  let match;

  while ((match = locRegex.exec(xmlContent)) !== null) {
    rawUrls.push(match[1]);
  }

  if (rawUrls.length === 0) {
    throw new Error('No <loc> URLs found in sitemap.xml');
  }

  const validUrls = [];
  const rejectedUrls = [];

  for (const rawUrl of rawUrls) {
    try {
      const parsed = new URL(rawUrl);

      // Strict safety checks:
      // - Must be HTTPS
      // - Hostname must strictly match antistoic.com
      // - Must NOT contain query parameters
      // - Must NOT contain hash fragments
      // - Must NOT include /confirmed or non-public administrative routes
      if (parsed.protocol !== 'https:') {
        rejectedUrls.push({ url: rawUrl, reason: 'Protocol is not HTTPS' });
        continue;
      }

      if (parsed.hostname.toLowerCase() !== CANONICAL_HOST) {
        rejectedUrls.push({ url: rawUrl, reason: `Host does not match ${CANONICAL_HOST}` });
        continue;
      }

      if (parsed.search && parsed.search.length > 0) {
        rejectedUrls.push({ url: rawUrl, reason: 'Contains query parameters' });
        continue;
      }

      if (parsed.hash && parsed.hash.length > 0) {
        rejectedUrls.push({ url: rawUrl, reason: 'Contains hash fragment' });
        continue;
      }

      if (parsed.pathname.startsWith('/confirmed')) {
        rejectedUrls.push({ url: rawUrl, reason: 'Excluded route (/confirmed)' });
        continue;
      }

      validUrls.push(parsed.toString());
    } catch (err) {
      rejectedUrls.push({ url: rawUrl, reason: `Invalid URL: ${err.message}` });
    }
  }

  return { validUrls, rejectedUrls };
}

// 3. Main execution
async function main() {
  const args = process.argv.slice(2);
  const isDryRun = args.includes('--dry-run');

  console.log('='.repeat(60));
  console.log('  AntiStoic — IndexNow URL Submission');
  console.log('='.repeat(60));

  // Step 1: Get verification key
  const { key, filename, keyLocation } = getVerificationKey();
  console.log(`\n[Key Verification]`);
  console.log(`  Key:         ${key}`);
  console.log(`  File:        public/${filename}`);
  console.log(`  KeyLocation: ${keyLocation}`);

  // Step 2: Extract & validate canonical URLs
  const { validUrls, rejectedUrls } = getCanonicalUrls();
  console.log(`\n[URL Discovery — Source of Truth: public/sitemap.xml]`);
  console.log(`  Valid Canonical URLs (${validUrls.length}):`);
  for (const url of validUrls) {
    console.log(`    ✓ ${url}`);
  }

  if (rejectedUrls.length > 0) {
    console.log(`  Rejected URLs (${rejectedUrls.length}):`);
    for (const item of rejectedUrls) {
      console.log(`    ✗ ${item.url} (${item.reason})`);
    }
  }

  // Step 3: Prepare IndexNow payload
  const payload = {
    host: CANONICAL_HOST,
    key,
    keyLocation,
    urlList: validUrls,
  };

  console.log(`\n[IndexNow Request Payload]`);
  console.log(JSON.stringify(payload, null, 2));

  if (isDryRun) {
    console.log('\n[Dry Run Mode] No network request sent to IndexNow API.');
    console.log('='.repeat(60));
    return;
  }

  // Step 4: Submit to official IndexNow API endpoint
  console.log(`\n[Submitting to ${INDEXNOW_API}...]`);

  try {
    const response = await fetch(INDEXNOW_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(payload),
    });

    const status = response.status;
    const responseText = await response.text();

    console.log(`\n[IndexNow HTTP Response: ${status}]`);

    switch (status) {
      case 200:
        console.log('  Status: 200 OK — URLs submitted successfully.');
        break;
      case 202:
        console.log('  Status: 202 Accepted — URLs received; IndexNow key validation or indexing queued.');
        break;
      case 400:
        console.log('  Status: 400 Bad Request — Invalid request format.');
        if (responseText) console.log(`  Detail: ${responseText}`);
        break;
      case 403:
        console.log('  Status: 403 Forbidden — Key not valid.');
        console.log('  Note: If this key has not yet been deployed to production Vercel, IndexNow cannot');
        console.log(`        fetch ${keyLocation} to verify ownership. Deploy first, then re-run.`);
        if (responseText) console.log(`  Detail: ${responseText}`);
        break;
      case 422:
        console.log('  Status: 422 Unprocessable Entity — URLs do not match host or key.');
        if (responseText) console.log(`  Detail: ${responseText}`);
        break;
      case 429:
        console.log('  Status: 429 Too Many Requests — Rate limit reached.');
        if (responseText) console.log(`  Detail: ${responseText}`);
        break;
      default:
        console.log(`  Status: ${status}`);
        if (responseText) console.log(`  Body: ${responseText}`);
    }
  } catch (err) {
    console.error(`\n[Submission Error]: ${err.message}`);
    process.exitCode = 1;
  }

  console.log('='.repeat(60));
}

main().catch((err) => {
  console.error(`Fatal Error: ${err.message}`);
  process.exit(1);
});
