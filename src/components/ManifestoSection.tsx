import React from 'react';
import { MANIFESTO_STATEMENTS } from '../data/content';

export const ManifestoSection: React.FC = () => {
  return (
    <section id="manifesto" className="py-36 md:py-52 bg-black text-white px-6 md:px-12 border-b border-white/10 relative overflow-hidden">
      {/* Background grain */}
      <div className="absolute inset-0 bg-grain opacity-30 pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center space-y-20 relative z-10">
        
        {/* Header */}
        <div className="space-y-4">
          <span className="text-[11px] font-sans-clean tracking-[0.4em] text-neutral-500 uppercase block">
            EXHIBITION III — DECLARATION OF INTENT
          </span>
          <h2 className="font-serif-display text-4xl sm:text-6xl md:text-7xl text-white font-normal tracking-tight">
            THE MANIFESTO
          </h2>
        </div>

        <div className="w-16 h-[1px] bg-neutral-800 mx-auto" />

        {/* Statement List — One sentence per line */}
        <div className="space-y-8 sm:space-y-10 font-serif-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-none select-none">
          {MANIFESTO_STATEMENTS.map((statement, idx) => {
            const isChoice = statement.startsWith('We choose');
            return (
              <p
                key={idx}
                className={`transition-all duration-700 hover:scale-[1.01] cursor-default ${
                  isChoice
                    ? 'text-white font-normal'
                    : 'text-neutral-500 font-light italic'
                }`}
              >
                {statement}
              </p>
            );
          })}
        </div>

        <div className="pt-16 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-[10px] font-sans-clean tracking-[0.3em] uppercase text-neutral-500 gap-4">
          <span>ANTISTOIC CREDO</span>
          <span>•</span>
          <span>EST. MMXXVI</span>
        </div>

      </div>
    </section>
  );
};

