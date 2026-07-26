import React from 'react';

export const MementoMoriBreak: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen bg-black flex flex-col items-center justify-center py-24 px-4 overflow-hidden border-b border-white/10 select-none">
      {/* Background grain */}
      <div className="absolute inset-0 bg-grain opacity-30 pointer-events-none" />

      <div className="relative z-10 w-full text-center overflow-hidden px-2">
        {/* Dominant Typography Artwork */}
        <h2 className="font-serif-display text-[15vw] lg:text-[17vw] font-normal leading-[0.82] tracking-tighter text-white uppercase text-center select-none">
          MEMENTO<br />
          <span className="italic font-light text-neutral-400">MORI</span>
        </h2>
      </div>
    </section>
  );
};

