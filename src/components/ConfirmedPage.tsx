import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export const ConfirmedPage: React.FC = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const listener = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 md:px-12 select-none overflow-hidden">
      {/* Background grain noise is handled globally by App.tsx, keeping this container clean */}
      
      {/* Content Container with slow fade-in and slight upward slide */}
      <motion.div
        initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: prefersReducedMotion ? 0 : 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-xl w-full text-center space-y-12 relative z-10"
      >
        {/* Category Label */}
        <span className="text-[11px] font-sans-clean tracking-[0.4em] text-neutral-500 uppercase block">
          CONFIRMED
        </span>

        {/* Large Serif Title */}
        <h1 className="font-serif-display text-6xl sm:text-8xl md:text-9xl text-white font-normal tracking-tight leading-none uppercase">
          YOU'RE IN.
        </h1>

        {/* Divider */}
        <div className="w-16 h-[1px] bg-neutral-800 mx-auto" />

        {/* Editorial Body Text */}
        <div className="space-y-4 font-serif-editorial text-xl sm:text-2xl text-neutral-300 font-light leading-relaxed max-w-md mx-auto">
          <p>The next letter will arrive when it's ready.</p>
          <p>Until then, the work remains.</p>
        </div>

        {/* Brand Credo / Final Line */}
        <p className="font-sans-clean text-[11px] tracking-[0.3em] uppercase text-neutral-400 font-normal pt-4">
          Think Differently.
        </p>

        {/* Return link */}
        <div className="pt-8">
          <a
            href="/"
            className="inline-block text-[10px] font-sans-clean tracking-[0.3em] uppercase text-neutral-500 hover:text-white transition-colors duration-300 border-b border-neutral-800 hover:border-white pb-1 focus:outline-none"
          >
            RETURN TO ANTISTOIC
          </a>
        </div>
      </motion.div>
    </div>
  );
};
export default ConfirmedPage;
