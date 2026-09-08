import React, { useState } from 'react';
import { motion } from 'motion/react';
import { RealityCheckResult } from '../../data/whatsEatingYouData';

interface RealityCheckViewProps {
  result: RealityCheckResult;
  onStartOver: () => void;
}

export const RealityCheckView: React.FC<RealityCheckViewProps> = ({ result, onStartOver }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const formattedText = `ANTISTOIC // REALITY CHECK: ${result.categoryLabel.toUpperCase()}
${result.assessmentHeadline}

WHAT'S TRUE:
${result.whatsTrue}

WHAT YOU CAN CONTROL:
01. ${result.whatYouCanControl[0]}
02. ${result.whatYouCanControl[1]}
03. ${result.whatYouCanControl[2]}

DO THIS NEXT:
${result.doThisNext}

"${result.closingThought}"
— antistoic.com/whats-eating-you`;

    const copyWithFallback = () => {
      try {
        const textarea = document.createElement('textarea');
        textarea.value = formattedText;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      } catch (err) {
        console.warn('Clipboard copy failed:', err);
      }
    };

    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard
        .writeText(formattedText)
        .then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2500);
        })
        .catch(() => {
          copyWithFallback();
        });
    } else {
      copyWithFallback();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="w-full max-w-3xl mx-auto px-4 sm:px-6 py-10 md:py-16 flex flex-col"
    >
      {/* Top Banner Tag */}
      <div className="flex items-center justify-between border-b border-white/15 pb-4 mb-8">
        <span className="text-[10px] sm:text-[11px] font-sans-clean tracking-[0.35em] text-neutral-400 uppercase">
          [ REALITY CHECK &middot; {result.categoryLabel.toUpperCase()} ]
        </span>
        <span className="text-[10px] sm:text-[11px] font-sans-clean tracking-[0.25em] text-neutral-500 uppercase">
          VERDICT
        </span>
      </div>

      {/* Primary Assessment Headline */}
      <h1 className="font-serif-display text-4xl sm:text-6xl md:text-7xl text-white font-normal tracking-tight uppercase leading-[0.95] mb-8">
        {result.assessmentHeadline}
      </h1>

      {/* SECTION 1: WHAT'S TRUE */}
      <section className="space-y-3 mb-10" aria-labelledby="heading-whats-true">
        <h2 id="heading-whats-true" className="text-[10px] font-sans-clean tracking-[0.3em] uppercase text-neutral-500 block">
          WHAT’S TRUE
        </h2>
        <p className="font-serif-editorial text-2xl sm:text-3xl text-neutral-200 font-light leading-relaxed">
          {result.whatsTrue}
        </p>
      </section>

      {/* Divider */}
      <div className="w-full h-[1px] bg-white/10 my-4" />

      {/* SECTION 2: WHAT YOU CAN CONTROL */}
      <section className="space-y-4 my-8" aria-labelledby="heading-what-you-can-control">
        <h2 id="heading-what-you-can-control" className="text-[10px] font-sans-clean tracking-[0.3em] uppercase text-neutral-500 block">
          WHAT YOU CAN CONTROL
        </h2>

        <div className="space-y-3">
          {result.whatYouCanControl.map((point, idx) => (
            <div
              key={idx}
              className="p-5 border border-white/10 bg-neutral-950/60 flex items-start space-x-4"
            >
              <span className="text-[10px] font-sans-clean tracking-[0.2em] text-neutral-500 pt-1 shrink-0">
                [ 0{idx + 1} ]
              </span>
              <p className="font-serif-editorial text-lg sm:text-xl text-neutral-300 font-light leading-snug">
                {point}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="w-full h-[1px] bg-white/10 my-4" />

      {/* SECTION 3: DO THIS NEXT */}
      <section className="space-y-3 my-8" aria-labelledby="heading-do-this-next">
        <h2 id="heading-do-this-next" className="text-[10px] font-sans-clean tracking-[0.3em] uppercase text-neutral-400 block">
          DO THIS NEXT (TODAY)
        </h2>
        <div className="p-6 sm:p-8 border border-white/30 bg-black relative">
          <div className="absolute top-0 left-0 w-2 h-2 bg-white" />
          <p className="font-serif-editorial text-xl sm:text-2xl text-white font-normal leading-relaxed">
            {result.doThisNext}
          </p>
        </div>
      </section>

      {/* SECTION 4: CLOSING AUSTERE MANDATE */}
      <div className="my-10 text-center py-8 border-y border-white/10">
        <p className="font-serif-editorial text-2xl sm:text-3xl text-neutral-400 font-light italic leading-relaxed whitespace-pre-line max-w-xl mx-auto">
          {result.closingThought}
        </p>
      </div>

      {/* Action Footer Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
        <button
          onClick={handleCopy}
          aria-label="Copy reality check summary to clipboard"
          className="w-full sm:w-auto px-8 py-3.5 border border-white/20 hover:border-white text-white hover:bg-white hover:text-black transition-all duration-300 font-sans-clean text-[10px] tracking-[0.3em] uppercase cursor-pointer rounded-none text-center focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white"
        >
          {copied ? 'COPIED TO CLIPBOARD' : 'COPY REALITY CHECK'}
        </button>

        <div className="flex items-center space-x-6">
          <button
            onClick={onStartOver}
            aria-label="Start over with another reflection"
            className="text-[10px] font-sans-clean tracking-[0.3em] uppercase text-neutral-400 hover:text-white transition-colors border-b border-transparent hover:border-white pb-0.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white"
          >
            START OVER
          </button>
          <a
            href="/"
            aria-label="Return to AntiStoic main site"
            className="text-[10px] font-sans-clean tracking-[0.3em] uppercase text-neutral-500 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white"
          >
            RETURN TO ANTISTOIC &rarr;
          </a>
        </div>
      </div>
    </motion.div>
  );
};
