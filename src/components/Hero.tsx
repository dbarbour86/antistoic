import React, { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';

interface HeroProps {
  onExplore: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExplore }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 15;
      const y = (clientY / window.innerHeight - 0.5) * 15;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen bg-black flex flex-col justify-between pt-28 pb-12 px-6 md:px-12 overflow-hidden border-b border-white/10">
      {/* Background grain */}
      <div className="absolute inset-0 bg-grain pointer-events-none opacity-30" />

      {/* Main Grid Content */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center my-auto z-10 py-8 lg:py-16">
        
        {/* Left Column: Massive Typography */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-8">
          
          <div className="inline-flex items-center space-x-3">
            <span className="w-8 h-[1px] bg-neutral-600" />
            <span className="text-[11px] font-sans-clean tracking-[0.35em] uppercase text-neutral-400">
              EXHIBITION I — NEO-CLASSICAL DISCIPLINE
            </span>
          </div>

          <div className="space-y-4">
            <h1 className="font-serif-display text-6xl sm:text-7xl md:text-8xl xl:text-[9.5rem] tracking-tight text-white font-normal leading-[0.88] select-none">
              ANTI STOIC
            </h1>
            <p className="font-serif-display text-3xl sm:text-4xl md:text-5xl italic font-light text-neutral-300 tracking-tight pt-1">
              Think Differently.
            </p>
          </div>

          <p className="font-serif-editorial text-lg md:text-2xl text-neutral-300 max-w-xl font-light leading-relaxed pt-2">
            Ancient philosophy for modern lives.
          </p>

          <div className="pt-6 flex items-center space-x-6">
            <button
              onClick={onExplore}
              className="inline-flex items-center space-x-3 text-xs uppercase tracking-[0.25em] font-sans-clean border border-white/30 hover:border-white text-white px-8 py-4 transition-all duration-300 cursor-pointer bg-neutral-950 hover:bg-white hover:text-black"
            >
              <span>Begin Exploration</span>
              <ArrowDown size={14} />
            </button>
          </div>
        </div>

        {/* Right Column: Large Marble Statue Visual */}
        <div className="lg:col-span-5 relative flex justify-center items-center">
          <div
            className="relative w-full max-w-md lg:max-w-none aspect-[3/4] border border-white/20 p-3 bg-neutral-950 transition-transform duration-700 ease-out shadow-2xl"
            style={{
              transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0)`
            }}
          >
            <div className="w-full h-full relative overflow-hidden bg-neutral-900 group">
              <img
                src="https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=1200&auto=format&fit=crop"
                alt="Classical Marble Statue in Low Key Shadow"
                className="w-full h-full object-cover mono-sculpture transform group-hover:scale-105 transition-transform duration-1000 grayscale contrast-125"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
              
              {/* Statue Details */}
              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end text-neutral-400 font-sans-clean text-[10px] tracking-[0.25em] uppercase">
                <div>
                  <span className="block text-white font-medium text-xs font-serif-display">MARCUS AURELIUS</span>
                  <span className="text-neutral-500">Parian Marble • Antonine Dynasty</span>
                </div>
                <span>EXHIBIT 01</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Hero Bottom Bar */}
      <div className="max-w-7xl mx-auto w-full flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-white/10 text-neutral-500 text-[10px] font-sans-clean tracking-[0.3em] uppercase z-10 gap-4">
        <div className="flex items-center space-x-8">
          <span>CONTROL</span>
          <span>•</span>
          <span>COURAGE</span>
          <span>•</span>
          <span>DISCIPLINE</span>
          <span>•</span>
          <span>PERSPECTIVE</span>
        </div>

        <button
          onClick={onExplore}
          className="inline-flex items-center space-x-2 text-neutral-400 hover:text-white transition-colors cursor-pointer group"
        >
          <span>Scroll</span>
          <ArrowDown size={12} className="group-hover:translate-y-1 transition-transform" />
        </button>
      </div>
    </section>
  );
};

