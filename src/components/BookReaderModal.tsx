import React, { useState } from 'react';
import { X, BookOpen, Quote, Clock, Bookmark, ArrowLeft, ArrowRight } from 'lucide-react';
import { Book } from '../types';

interface BookReaderModalProps {
  book: Book | null;
  onClose: () => void;
}

export const BookReaderModal: React.FC<BookReaderModalProps> = ({ book, onClose }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  if (!book) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-8 overflow-y-auto">
      <div className="bg-neutral-950 border border-white/20 w-full max-w-5xl p-6 sm:p-12 relative my-auto space-y-10 text-white shadow-2xl">
        {/* Top Header Control */}
        <div className="flex items-center justify-between pb-6 border-b border-white/10">
          <div className="flex items-center space-x-4 text-xs font-sans-clean tracking-[0.25em] text-neutral-400 uppercase">
            <span>CANONICAL STUDY</span>
            <span>•</span>
            <span className="text-white font-medium">{book.year}</span>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsBookmarked(!isBookmarked)}
              className={`p-2.5 border transition-all cursor-pointer rounded-full ${
                isBookmarked
                  ? 'bg-white text-black border-white'
                  : 'text-neutral-400 border-white/10 hover:border-white/30 hover:text-white'
              }`}
              title="Bookmark book"
            >
              <Bookmark size={16} />
            </button>

            <button
              onClick={onClose}
              className="p-2.5 text-neutral-400 hover:text-white border border-white/10 hover:border-white/30 transition-all rounded-full cursor-pointer"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Hero Banner Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Cover Art */}
          <div className="lg:col-span-4 aspect-[3/4] bg-neutral-900 border border-white/10 relative overflow-hidden group">
            <img
              src={book.coverImage}
              alt={book.title}
              className="w-full h-full object-cover mono-sculpture"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-4 left-4 right-4 text-[10px] font-sans-clean tracking-[0.2em] uppercase text-neutral-400">
              <span>{book.pages} PAGES</span> • <span>{book.readTime} ESTIMATED</span>
            </div>
          </div>

          {/* Details & Quote */}
          <div className="lg:col-span-8 space-y-6">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.3em] font-sans-clean text-neutral-400">
                AUTHOR: {book.author}
              </span>
              <h2 className="font-serif-display text-4xl sm:text-5xl font-normal text-white">
                {book.title}
              </h2>
            </div>

            <p className="font-serif-editorial text-xl text-neutral-300 font-light leading-relaxed">
              {book.description}
            </p>

            {/* Quote Block */}
            <div className="p-6 bg-neutral-900/80 border-l-2 border-white space-y-2 my-4">
              <Quote size={20} className="text-neutral-500 mb-1" />
              <p className="font-serif-editorial text-xl sm:text-2xl text-white italic font-normal">
                "{book.famousQuote}"
              </p>
              <span className="block text-[10px] font-sans-clean tracking-[0.25em] text-neutral-500 uppercase pt-2">
                — {book.author}
              </span>
            </div>

            {/* Key Themes */}
            <div className="space-y-3 pt-2">
              <span className="text-xs font-sans-clean uppercase tracking-[0.25em] text-neutral-400 block">
                CORE PHILOSOPHICAL THEMES:
              </span>
              <div className="flex flex-wrap gap-2">
                {book.keyThemes.map((theme, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-black border border-white/15 text-xs font-sans-clean tracking-wider text-neutral-300 uppercase"
                  >
                    {theme}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Selected Excerpt */}
        <div className="pt-8 border-t border-white/10 space-y-4">
          <div className="flex items-center space-x-3 text-xs uppercase tracking-[0.25em] font-sans-clean text-neutral-400">
            <BookOpen size={14} />
            <span>PRIMARY EXCERPT FROM THE ARCHIVE</span>
          </div>

          <div className="p-8 bg-black border border-white/10 space-y-4">
            <p className="font-serif-editorial text-xl sm:text-2xl text-neutral-200 font-light leading-relaxed italic">
              "{book.excerpt}"
            </p>
          </div>
        </div>

        {/* Footer actions */}
        <div className="pt-6 border-t border-white/10 flex justify-between items-center text-xs font-sans-clean tracking-[0.2em] uppercase text-neutral-500">
          <span>ANTISTOIC CANONICAL LIBRARY</span>
          <button
            onClick={onClose}
            className="text-white hover:underline cursor-pointer"
          >
            Close Reader
          </button>
        </div>
      </div>
    </div>
  );
};
