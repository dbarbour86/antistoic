import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CATEGORIES, CategoryOption } from '../../data/whatsEatingYouData';

interface CategorySelectionProps {
  onSelectCategory: (category: CategoryOption) => void;
}

export const CategorySelection: React.FC<CategorySelectionProps> = ({ onSelectCategory }) => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const handleSelect = (cat: CategoryOption) => {
    if (selectedId) return; // prevent double clicks
    setSelectedId(cat.id);
    // Intentional stillness pause before transition
    setTimeout(() => {
      onSelectCategory(cat);
    }, 320);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-16 flex flex-col items-center"
    >
      {/* Header Badge */}
      <div className="mb-4">
        <span className="text-[10px] sm:text-[11px] font-sans-clean tracking-[0.35em] text-neutral-500 uppercase block text-center">
          INQUIRY &middot; STEP 01
        </span>
      </div>

      {/* Main Headline */}
      <h1 className="font-serif-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white text-center font-normal tracking-tight uppercase leading-[0.95] max-w-3xl">
        WHAT’S EATING YOU?
      </h1>

      {/* Subheading */}
      <p className="mt-4 sm:mt-6 font-serif-editorial text-xl sm:text-2xl md:text-3xl text-neutral-300 font-light text-center max-w-xl leading-relaxed">
        Pick the thing taking up too much space in your head.
      </p>

      {/* Crawlable introductory context */}
      <p className="mt-3 text-[11px] sm:text-xs font-sans-clean text-neutral-400 text-center max-w-lg tracking-wider uppercase leading-normal">
        An interactive AntiStoic self-reflection tool examining money, relationships, direction, work, confidence, motivation, anger, and loneliness.
      </p>

      {/* Subtle Hairline Divider */}
      <div className="w-12 h-[1px] bg-neutral-800 my-8 sm:my-10" />

      {/* Interactive Category Grid */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-2">
        {CATEGORIES.map((cat, idx) => {
          const isSelected = selectedId === cat.id;
          const numLabel = String(idx + 1).padStart(2, '0');

          return (
            <button
              key={cat.id}
              onClick={() => handleSelect(cat)}
              disabled={selectedId !== null}
              aria-label={`Select category ${cat.label}: ${cat.descriptor}`}
              className={`text-left p-6 sm:p-7 border transition-all duration-300 relative group cursor-pointer select-none rounded-none focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white ${
                isSelected
                  ? 'border-white bg-white/10 text-white scale-[0.99]'
                  : 'border-white/10 hover:border-white/40 bg-black/60 hover:bg-neutral-950 text-neutral-300 hover:text-white'
              }`}
            >
              {/* Top metadata row */}
              <div className="flex items-center justify-between mb-3 text-[10px] font-sans-clean tracking-[0.25em] uppercase text-neutral-500 group-hover:text-neutral-300 transition-colors">
                <span>[ {numLabel} ]</span>
                {cat.status === 'coming_soon' ? (
                  <span className="text-neutral-600 tracking-[0.2em] text-[9px] group-hover:text-neutral-400">
                    FORTHCOMING
                  </span>
                ) : (
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity text-neutral-400">
                    ENTER &rarr;
                  </span>
                )}
              </div>

              {/* Title */}
              <h2 className="font-serif-display text-2xl sm:text-3xl font-normal tracking-wide text-white mb-2">
                {cat.label}
              </h2>

              {/* Micro-descriptor */}
              <p className="font-serif-editorial text-neutral-400 text-base sm:text-lg font-light leading-snug group-hover:text-neutral-300 transition-colors">
                {cat.descriptor}
              </p>

              {/* Hairline highlight bottom bar */}
              <div
                className={`absolute bottom-0 left-0 h-[2px] bg-white transition-all duration-300 ${
                  isSelected ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-12 group-hover:opacity-60'
                }`}
              />
            </button>
          );
        })}
      </div>

      {/* Subtle reassurance footer hint */}
      <p className="mt-12 text-[10px] font-sans-clean tracking-[0.3em] uppercase text-neutral-600 text-center">
        No account required. Your reflection leaves no record.
      </p>
    </motion.div>
  );
};
