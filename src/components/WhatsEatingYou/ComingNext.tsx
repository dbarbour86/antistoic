import React from 'react';
import { motion } from 'motion/react';
import { CategoryOption, CATEGORIES } from '../../data/whatsEatingYouData';

interface ComingNextProps {
  category: CategoryOption;
  onSelectCategory: (category: CategoryOption) => void;
  onStartOver: () => void;
}

export const ComingNext: React.FC<ComingNextProps> = ({
  category,
  onSelectCategory,
  onStartOver,
}) => {
  const activeCategories = CATEGORIES.filter((c) => c.status === 'active');

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -14 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="w-full max-w-2xl mx-auto px-4 sm:px-6 py-12 md:py-16 flex flex-col items-center text-center"
    >
      {/* Category Tag */}
      <span className="text-[10px] sm:text-[11px] font-sans-clean tracking-[0.35em] text-neutral-500 uppercase block mb-4">
        INQUIRY &middot; {category.label.toUpperCase()}
      </span>

      {/* Main Headline */}
      <h2 className="font-serif-display text-4xl sm:text-6xl text-white font-normal tracking-tight uppercase leading-none">
        FORTHCOMING.
      </h2>

      {/* Editorial explanation */}
      <div className="mt-6 space-y-4 font-serif-editorial text-xl sm:text-2xl text-neutral-300 font-light leading-relaxed max-w-lg mx-auto">
        <p>
          This path of inquiry is currently being forged with the required rigor. Rather than
          offering shallow platitudes or hurried advice, we keep this door closed until the work is
          complete.
        </p>
        <p className="text-neutral-500 text-lg">
          In the meantime, confront what is already open:
        </p>
      </div>

      <div className="w-12 h-[1px] bg-neutral-800 my-8" />

      {/* Direct alternatives */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-3">
        {activeCategories.map((act) => (
          <button
            key={act.id}
            onClick={() => onSelectCategory(act)}
            className="p-5 border border-white/10 hover:border-white/40 bg-black/60 hover:bg-neutral-950 text-left transition-all duration-300 group cursor-pointer rounded-none"
          >
            <span className="text-[9px] font-sans-clean tracking-[0.25em] uppercase text-neutral-500 block mb-1">
              OPEN NOW
            </span>
            <span className="font-serif-display text-xl text-white block group-hover:translate-x-0.5 transition-transform">
              {act.label} &rarr;
            </span>
          </button>
        ))}
      </div>

      {/* Reset button */}
      <div className="mt-12">
        <button
          onClick={onStartOver}
          className="text-[10px] font-sans-clean tracking-[0.3em] uppercase text-neutral-500 hover:text-white transition-colors border-b border-neutral-800 hover:border-white pb-1"
        >
          &larr; CHOOSE ANOTHER TOPIC
        </button>
      </div>
    </motion.div>
  );
};
