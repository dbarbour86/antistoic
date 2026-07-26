import React from 'react';
import { PRINCIPLES } from '../data/content';

export const PrinciplesSection: React.FC = () => {
  return (
    <section id="principles" className="bg-black text-white border-b border-white/10 relative">
      {/* Section Header */}
      <div className="py-24 px-6 md:px-12 border-b border-white/10 max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-3">
          <span className="text-[11px] font-sans-clean tracking-[0.4em] text-neutral-500 uppercase block">
            EXHIBITION II — FIVE PILLARS
          </span>
          <h2 className="font-serif-display text-4xl sm:text-6xl md:text-7xl tracking-tight text-white font-normal">
            THE FIVE PRINCIPLES
          </h2>
        </div>
        <p className="font-serif-editorial text-xl text-neutral-400 max-w-md font-light leading-relaxed">
          Timeless anchors for sovereign judgment and daily fortitude.
        </p>
      </div>

      {/* Five Large Editorial Panels */}
      <div className="divide-y divide-white/10">
        {PRINCIPLES.map((p, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div key={p.id} className="py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto relative overflow-hidden">
              {/* Massive Subtle Background Number */}
              <div className="absolute right-4 md:right-12 top-12 font-serif-display text-[18vw] leading-none font-normal text-neutral-900/40 select-none pointer-events-none">
                0{idx + 1}
              </div>

              <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10 ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                
                {/* Text Content Block */}
                <div className={`lg:col-span-6 space-y-8 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="space-y-2">
                    <span className="text-[11px] font-sans-clean tracking-[0.35em] text-neutral-500 uppercase block">
                      PRINCIPLE 0{idx + 1} • {p.latinTag}
                    </span>
                    <h3 className="font-serif-display text-5xl sm:text-7xl md:text-8xl tracking-tight text-white font-normal leading-none">
                      {p.title}
                    </h3>
                  </div>

                  <p className="font-serif-display text-2xl sm:text-3xl md:text-4xl text-neutral-100 font-normal leading-snug italic border-l-2 border-white/20 pl-6 py-1">
                    "{p.shortQuote}"
                  </p>

                  <p className="font-serif-editorial text-lg sm:text-xl text-neutral-400 font-light leading-relaxed max-w-lg">
                    {p.description}
                  </p>

                  <div className="pt-4 flex items-center space-x-6 text-[10px] font-sans-clean tracking-[0.25em] text-neutral-500 uppercase">
                    <span>DISCIPLINE</span>
                    <span>•</span>
                    <span>SOVEREIGNTY</span>
                    <span>•</span>
                    <span>ACTION</span>
                  </div>
                </div>

                {/* Oversized Classical Artwork Frame */}
                <div className={`lg:col-span-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="relative border border-white/10 p-3 sm:p-4 bg-neutral-950 group">
                    <div className="aspect-[4/5] sm:aspect-[3/4] overflow-hidden bg-neutral-900 relative">
                      <img
                        src={p.imageUrl}
                        alt={p.imageAlt}
                        className="w-full h-full object-cover mono-sculpture transform scale-[1.04] group-hover:scale-[1.09] transition-transform duration-1000 grayscale contrast-125"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70" />
                      
                      <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end text-[10px] font-sans-clean tracking-[0.25em] text-neutral-400 uppercase">
                        <div>
                          <span className="block text-white font-serif-display text-sm">{p.title}</span>
                          <span className="text-neutral-500">EXHIBIT 0{idx + 1}</span>
                        </div>
                        <span className="text-neutral-600">ROMAN/GREEK ARCHIVE</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

