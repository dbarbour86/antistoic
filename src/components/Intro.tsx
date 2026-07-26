import React from 'react';

export const Intro: React.FC = () => {
  return (
    <section id="why" className="py-36 md:py-52 bg-black text-white px-6 md:px-12 border-b border-white/10 relative">
      <div className="max-w-4xl mx-auto text-center space-y-16">
        <h2 className="text-[11px] font-sans-clean tracking-[0.4em] text-neutral-500 uppercase block font-normal">
          WHY ANTISTOIC EXISTS
        </h2>

        <div className="space-y-6 font-serif-editorial text-2xl sm:text-3xl md:text-4xl text-neutral-400 font-light leading-relaxed max-w-3xl mx-auto">
          <p>We are surrounded by endless motivation.</p>
          <p>Constant distraction.</p>
          <p>Instant gratification.</p>
        </div>

        <div className="w-16 h-[1px] bg-neutral-800 mx-auto" />

        <p className="font-serif-display text-3xl sm:text-5xl md:text-6xl text-white font-normal leading-snug max-w-3xl mx-auto">
          AntiStoic exists to remind us that discipline outlasts motivation.
        </p>

        <div className="w-16 h-[1px] bg-neutral-800 mx-auto" />

        <p className="font-serif-editorial text-xl sm:text-2xl text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto text-balance">
          AntiStoic is a modern philosophy project about discipline, courage, ownership, perspective, and mortality. It rejects recycled quotes, performative toughness, and the idea that emotional suppression is strength.
        </p>
      </div>
    </section>
  );
};

