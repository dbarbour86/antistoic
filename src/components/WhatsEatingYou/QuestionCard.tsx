import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Question, QuestionChoice } from '../../data/whatsEatingYouData';

interface QuestionCardProps {
  question: Question;
  selectedAnswer?: string;
  onAnswerChoice: (answerId: string) => void;
  onAnswerText: (text: string) => void;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  selectedAnswer,
  onAnswerChoice,
  onAnswerText,
}) => {
  const [activeChoiceId, setActiveChoiceId] = useState<string | null>(selectedAnswer || null);
  const [inputValue, setInputValue] = useState<string>(selectedAnswer || '');

  const handleChoiceClick = (choice: QuestionChoice) => {
    if (activeChoiceId) return;
    setActiveChoiceId(choice.id);
    // Intentional stillness pause before auto-advancing
    setTimeout(() => {
      onAnswerChoice(choice.id);
    }, 340);
  };

  const handleTextSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    onAnswerText(inputValue.trim());
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleTextSubmit();
    }
  };

  return (
    <motion.div
      key={question.id}
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -14 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="w-full max-w-2xl mx-auto px-4 sm:px-6 py-8 md:py-12 flex flex-col items-center"
    >
      {/* Step Tag */}
      <span className="text-[10px] sm:text-[11px] font-sans-clean tracking-[0.35em] text-neutral-500 uppercase block text-center mb-4">
        QUERY {String(question.stepNumber).padStart(2, '0')}
      </span>

      {/* Headline */}
      <h2 className="font-serif-display text-3xl sm:text-5xl md:text-6xl text-white text-center font-normal tracking-tight leading-[1.05] max-w-2xl">
        {question.headline}
      </h2>

      {/* Subheading */}
      {question.subheading && (
        <p className="mt-4 font-serif-editorial text-lg sm:text-xl md:text-2xl text-neutral-400 font-light text-center max-w-xl leading-relaxed">
          {question.subheading}
        </p>
      )}

      <div className="w-12 h-[1px] bg-neutral-800 my-8" />

      {/* Choice Type Question: Tactile Cards, Auto-Advancing */}
      {question.type === 'choice' && question.options && (
        <div className="w-full space-y-3 pt-2">
          {question.options.map((opt, idx) => {
            const isSelected = activeChoiceId === opt.id;
            const keyShortcut = idx + 1;

            return (
              <button
                key={opt.id}
                onClick={() => handleChoiceClick(opt)}
                disabled={activeChoiceId !== null}
                aria-label={`Option ${keyShortcut}: ${opt.label}`}
                className={`w-full text-left p-5 sm:p-6 border transition-all duration-300 relative group cursor-pointer select-none rounded-none flex items-center justify-between focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white ${
                  isSelected
                    ? 'border-white bg-white/10 text-white'
                    : 'border-white/10 hover:border-white/40 bg-black/50 hover:bg-neutral-950 text-neutral-300 hover:text-white'
                }`}
              >
                <div className="flex items-baseline space-x-4 pr-4">
                  <span className="text-[10px] font-sans-clean tracking-[0.2em] text-neutral-500 group-hover:text-neutral-400">
                    [ {String(keyShortcut).padStart(2, '0')} ]
                  </span>
                  <span className="font-serif-editorial text-xl sm:text-2xl font-normal leading-snug">
                    {opt.label}
                  </span>
                </div>

                <div
                  className={`w-3 h-3 border border-white/20 transition-all flex items-center justify-center shrink-0 ${
                    isSelected ? 'border-white bg-white' : 'group-hover:border-white/60'
                  }`}
                >
                  {isSelected && <div className="w-1.5 h-1.5 bg-black" />}
                </div>
              </button>
            );
          })}
        </div>
      )}

      {/* Text Type Question: Minimalist Monastic Field with Deliberate Continue */}
      {question.type === 'text' && (
        <form onSubmit={handleTextSubmit} className="w-full space-y-6 pt-2">
          <div className="relative">
            <label htmlFor="query-response-input" className="sr-only">
              {question.headline}
            </label>
            <input
              id="query-response-input"
              type="text"
              autoFocus
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={question.placeholder || 'Type your raw response...'}
              className="w-full bg-neutral-950 border border-white/15 focus:border-white p-5 sm:p-6 text-lg sm:text-xl font-serif-editorial text-white placeholder:text-neutral-600 focus:outline-none focus-visible:ring-1 focus-visible:ring-white transition-colors duration-300 rounded-none tracking-wide"
            />
          </div>

          <div className="flex items-center justify-between pt-2">
            <button
              type="button"
              onClick={() => onAnswerText('')}
              className="text-[10px] font-sans-clean tracking-[0.3em] uppercase text-neutral-500 hover:text-neutral-300 transition-colors py-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white"
            >
              [ SKIP QUERY ]
            </button>

            <button
              type="submit"
              className="px-8 py-3 bg-white text-black hover:bg-neutral-200 transition-colors font-sans-clean text-[10px] tracking-[0.3em] uppercase font-medium cursor-pointer rounded-none focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white"
            >
              CONTINUE &rarr;
            </button>
          </div>
        </form>
      )}
    </motion.div>
  );
};
