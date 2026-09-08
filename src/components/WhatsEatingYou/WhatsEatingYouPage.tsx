import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import {
  CategoryOption,
  CATEGORIES,
  QUESTIONS_BY_CATEGORY,
  Question,
  RealityCheckResult,
  evaluateRealityCheck,
} from '../../data/whatsEatingYouData';
import { CategorySelection } from './CategorySelection';
import { QuestionCard } from './QuestionCard';
import { ComingNext } from './ComingNext';
import { RealityCheckView } from './RealityCheckView';

type FlowPhase = 'category' | 'questions' | 'coming_soon' | 'result';

export const WhatsEatingYouPage: React.FC = () => {
  const [phase, setPhase] = useState<FlowPhase>('category');
  const [selectedCategory, setSelectedCategory] = useState<CategoryOption | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [result, setResult] = useState<RealityCheckResult | null>(null);

  // Dynamic document title and metadata management for client-side navigation
  useEffect(() => {
    const previousTitle = document.title;
    document.title = "What's Eating You? — An Interactive Reality Check | AntiStoic";

    const descMeta = document.querySelector('meta[name="description"]');
    const previousDesc = descMeta?.getAttribute('content') || '';
    if (descMeta) {
      descMeta.setAttribute(
        'content',
        "What's taking up too much space in your head? Work through an interactive AntiStoic Reality Check about money, relationships, direction, and the things you keep avoiding."
      );
    }

    const canonicalLink = document.querySelector('link[rel="canonical"]');
    const previousCanonical = canonicalLink?.getAttribute('href') || '';
    if (canonicalLink) {
      canonicalLink.setAttribute('href', 'https://antistoic.com/whats-eating-you');
    }

    return () => {
      document.title = previousTitle;
      if (descMeta && previousDesc) {
        descMeta.setAttribute('content', previousDesc);
      }
      if (canonicalLink && previousCanonical) {
        canonicalLink.setAttribute('href', previousCanonical);
      }
    };
  }, []);

  // Scroll to top smoothly on phase or step change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [phase, currentQuestionIndex]);

  const handleSelectCategory = (cat: CategoryOption) => {
    setSelectedCategory(cat);
    setAnswers({});
    setCurrentQuestionIndex(0);

    if (cat.status === 'coming_soon') {
      setPhase('coming_soon');
    } else {
      setPhase('questions');
    }
  };

  const handleAnswer = (answerValue: string) => {
    if (!selectedCategory) return;
    const questions = QUESTIONS_BY_CATEGORY[selectedCategory.id] || [];
    const currentQ = questions[currentQuestionIndex];

    const updatedAnswers = {
      ...answers,
      [currentQ.id]: answerValue,
    };
    setAnswers(updatedAnswers);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      // Calculate personalized Reality Check
      const finalResult = evaluateRealityCheck(selectedCategory.id, updatedAnswers);
      setResult(finalResult);
      setPhase('result');
    }
  };

  const handlePrevious = () => {
    if (phase === 'questions') {
      if (currentQuestionIndex > 0) {
        setCurrentQuestionIndex((prev) => prev - 1);
      } else {
        setPhase('category');
        setSelectedCategory(null);
      }
    } else if (phase === 'coming_soon' || phase === 'result') {
      setPhase('category');
      setSelectedCategory(null);
    }
  };

  const handleStartOver = () => {
    setPhase('category');
    setSelectedCategory(null);
    setCurrentQuestionIndex(0);
    setAnswers({});
    setResult(null);
  };

  const questions: Question[] = selectedCategory
    ? QUESTIONS_BY_CATEGORY[selectedCategory.id] || []
    : [];
  const currentQuestion = questions[currentQuestionIndex];
  const totalQuestions = questions.length;

  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-neutral-800 selection:text-white flex flex-col justify-between">
      {/* Top Header */}
      <header className="border-b border-white/10 py-5 px-6 md:px-12 bg-black/80 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          {/* Brand Mark */}
          <a href="/" className="text-left group cursor-pointer block">
            <span className="font-serif-display text-xl md:text-2xl tracking-tight text-white font-medium group-hover:opacity-80 transition-opacity block">
              AntiStoic
            </span>
            <span className="block text-[9px] tracking-[0.3em] text-neutral-400 uppercase font-sans-clean mt-0.5">
              Think Differently.
            </span>
          </a>

          {/* Center: Understated Progress indicator if in questions flow */}
          {phase === 'questions' && totalQuestions > 0 && (
            <div
              role="progressbar"
              aria-valuenow={currentQuestionIndex + 1}
              aria-valuemin={1}
              aria-valuemax={totalQuestions}
              aria-label="Reflection query progress"
              className="flex items-center space-x-3 sm:space-x-4"
            >
              <span className="text-[10px] sm:text-[11px] font-sans-clean tracking-[0.25em] text-neutral-400 uppercase">
                [ 0{currentQuestionIndex + 1} / 0{totalQuestions} ]
              </span>
              <div className="w-16 sm:w-24 h-[1px] bg-neutral-800 relative hidden xs:block">
                <div
                  className="absolute left-0 top-0 h-[1px] bg-white transition-all duration-300"
                  style={{
                    width: `${((currentQuestionIndex + 1) / totalQuestions) * 100}%`,
                  }}
                />
              </div>
            </div>
          )}

          {/* Right Header Navigation Actions */}
          <div className="flex items-center space-x-4 sm:space-x-6">
            {phase !== 'category' && (
              <button
                onClick={handleStartOver}
                className="text-[10px] font-sans-clean tracking-[0.25em] uppercase text-neutral-400 hover:text-white transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white"
                title="Reset flow to beginning"
                aria-label="Reset reflection and start over"
              >
                START OVER
              </button>
            )}

            <a
              href="/"
              aria-label="Return to main site"
              className="text-[10px] font-sans-clean tracking-[0.25em] uppercase text-neutral-500 hover:text-white transition-colors cursor-pointer border-b border-neutral-800 hover:border-white pb-0.5 hidden sm:inline-block focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white"
            >
              MAIN SITE &rarr;
            </a>
          </div>
        </div>
      </header>

      {/* Under-header step navigation (Back button if deep in flow) */}
      {phase === 'questions' && (
        <div className="max-w-6xl mx-auto w-full px-6 md:px-12 pt-4">
          <button
            onClick={handlePrevious}
            aria-label="Go back to previous query"
            className="text-[10px] font-sans-clean tracking-[0.25em] uppercase text-neutral-500 hover:text-white transition-colors flex items-center space-x-1.5 cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white"
          >
            <span>&larr;</span>
            <span>BACK</span>
          </button>
        </div>
      )}

      {/* Main Flow Container */}
      <main className="flex-1 flex items-center justify-center relative z-10 py-6">
        <AnimatePresence mode="wait">
          {phase === 'category' && (
            <CategorySelection
              key="category-selection"
              onSelectCategory={handleSelectCategory}
            />
          )}

          {phase === 'questions' && currentQuestion && (
            <QuestionCard
              key={currentQuestion.id}
              question={currentQuestion}
              selectedAnswer={answers[currentQuestion.id]}
              onAnswerChoice={handleAnswer}
              onAnswerText={handleAnswer}
            />
          )}

          {phase === 'coming_soon' && selectedCategory && (
            <ComingNext
              key="coming-next"
              category={selectedCategory}
              onSelectCategory={handleSelectCategory}
              onStartOver={handleStartOver}
            />
          )}

          {phase === 'result' && result && (
            <RealityCheckView
              key="reality-check-result"
              result={result}
              onStartOver={handleStartOver}
            />
          )}
        </AnimatePresence>
      </main>

      {/* Minimal Footer */}
      <footer className="border-t border-white/10 py-8 px-6 md:px-12 bg-black">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-[10px] font-sans-clean tracking-[0.25em] uppercase text-neutral-500">
            AntiStoic &middot; What’s Eating You &middot; Experimental Reflection
          </p>
          <a
            href="/"
            className="text-[10px] font-sans-clean tracking-[0.25em] uppercase text-neutral-500 hover:text-white transition-colors"
          >
            antistoic.com
          </a>
        </div>
      </footer>
    </div>
  );
};
export default WhatsEatingYouPage;
