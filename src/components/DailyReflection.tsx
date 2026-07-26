import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import reflectionsData from '../data/antistoic-reflections.json';

interface ReflectionItem {
  id: number;
  category: string;
  text: string;
}

export const DailyReflection: React.FC = () => {
  const [copyStatus, setCopyStatus] = useState<'COPY' | 'COPIED'>('COPY');
  const [shareStatus, setShareStatus] = useState<'SHARE' | 'COPIED'>('SHARE');

  const reflections: ReflectionItem[] = reflectionsData;

  // Deterministic daily index selection using calendar date
  const today = new Date();
  const index = (today.getFullYear() * 365 + today.getMonth() * 31 + today.getDate()) % reflections.length;
  const reflection = reflections[index];

  // Zero-padded ID (e.g. 042)
  const formattedId = String(reflection.id).padStart(3, '0');

  // Format copied/shared text exactly as specified
  const getFormattedText = () => {
    return `"${reflection.text}"\n\n— AntiStoic\nantistoic.com`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(getFormattedText()).then(() => {
      setCopyStatus('COPIED');
      setTimeout(() => setCopyStatus('COPY'), 2000);
    });
  };

  const handleShare = () => {
    const textToShare = getFormattedText();
    if (navigator.share) {
      navigator.share({
        title: 'AntiStoic Today\'s Reflection',
        text: textToShare,
        url: 'https://antistoic.com'
      }).catch((err) => {
        console.log('Share failed or cancelled:', err);
      });
    } else {
      navigator.clipboard.writeText(textToShare).then(() => {
        setShareStatus('COPIED');
        setTimeout(() => setShareStatus('SHARE'), 2000);
      });
    }
  };

  // Respect prefers-reduced-motion
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const listener = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  return (
    <section id="reflection" className="py-36 md:py-52 bg-black text-white px-6 md:px-12 border-b border-white/10 relative overflow-hidden select-none">
      {/* Background grain */}
      <div className="absolute inset-0 bg-grain opacity-30 pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center space-y-16 relative z-10">
        <div className="space-y-4">
          <span className="text-[11px] font-sans-clean tracking-[0.4em] text-neutral-500 uppercase block">
            EXHIBITION I.V — THE LIVING HEARTBEAT
          </span>
          <h2 className="font-serif-display text-4xl sm:text-6xl md:text-7xl text-white font-normal tracking-tight">
            TODAY'S REFLECTION
          </h2>
        </div>

        <div className="w-16 h-[1px] bg-neutral-800 mx-auto" />

        {/* Curator text container with subtle crossfade */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: prefersReducedMotion ? 0 : 1.2, ease: 'easeOut' }}
          className="space-y-10"
        >
          {/* Main reflection content - serif-display, no quotes, no italic */}
          <p className="font-serif-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-light leading-snug max-w-3xl mx-auto text-balance">
            {reflection.text}
          </p>

          {/* Metadata */}
          <div className="text-[11px] font-sans-clean tracking-[0.3em] uppercase text-neutral-500 pt-4">
            REFLECTION {formattedId} — {reflection.category}
          </div>

          {/* Interactions */}
          <div className="space-y-4 pt-6">
            <div className="flex justify-center items-center space-x-8 text-[11px] font-sans-clean tracking-[0.35em] text-neutral-400">
              <button
                onClick={handleCopy}
                className="hover:text-white cursor-pointer transition-colors duration-300 focus:outline-none uppercase"
              >
                {copyStatus}
              </button>
              <span className="text-neutral-800">•</span>
              <button
                onClick={handleShare}
                className="hover:text-white cursor-pointer transition-colors duration-300 focus:outline-none uppercase"
              >
                {shareStatus}
              </button>
            </div>
            
            {/* Midnight reset text */}
            <span className="block text-[9px] font-sans-clean tracking-[0.25em] uppercase text-neutral-600">
              Changes at midnight.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default DailyReflection;
