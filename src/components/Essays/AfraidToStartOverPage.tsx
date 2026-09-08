import React, { useEffect } from 'react';
import { KeepQuestioning } from './KeepQuestioning';

export const AfraidToStartOverPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const previousTitle = document.title;
    document.title = 'Afraid to Start Over? Count the Cost of Staying | AntiStoic';

    const descMeta = document.querySelector('meta[name="description"]');
    const previousDesc = descMeta?.getAttribute('content') || '';
    if (descMeta) {
      descMeta.setAttribute(
        'content',
        'Starting over can be frightening because leaving costs something. But staying costs something too. Examine both sides before deciding what your next move should be.'
      );
    }

    const canonicalLink = document.querySelector('link[rel="canonical"]');
    const previousCanonical = canonicalLink?.getAttribute('href') || '';
    if (canonicalLink) {
      canonicalLink.setAttribute('href', 'https://antistoic.com/afraid-to-start-over');
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

  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-neutral-800 selection:text-white flex flex-col justify-between">
      {/* Header */}
      <header className="border-b border-white/10 py-5 px-6 md:px-12 bg-black/80 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <a href="/" className="text-left group cursor-pointer block" aria-label="AntiStoic Home">
            <span className="font-serif-display text-xl md:text-2xl tracking-tight text-white font-medium group-hover:opacity-80 transition-opacity block">
              AntiStoic
            </span>
            <span className="block text-[9px] tracking-[0.3em] text-neutral-400 uppercase font-sans-clean mt-0.5">
              Think Differently.
            </span>
          </a>

          <div className="flex items-center space-x-6">
            <a
              href="/whats-eating-you?topic=direction"
              className="text-[10px] font-sans-clean tracking-[0.25em] uppercase text-neutral-400 hover:text-white transition-colors border border-white/15 hover:border-white/40 px-3.5 py-1.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white"
            >
              REALITY CHECK &rarr;
            </a>
          </div>
        </div>
      </header>

      {/* Main Editorial Content */}
      <main className="flex-1 w-full max-w-4xl mx-auto px-6 md:px-12 py-16 md:py-24">
        {/* Intro / H1 */}
        <section aria-labelledby="article-title" className="space-y-6 mb-16 md:mb-20">
          <span className="text-[11px] font-sans-clean tracking-[0.35em] text-neutral-500 uppercase block">
            ESSAY &middot; DECISION
          </span>

          <h1
            id="article-title"
            className="font-serif-display text-5xl sm:text-7xl md:text-8xl text-white font-normal tracking-tight uppercase leading-[0.95]"
          >
            AFRAID TO START OVER?
          </h1>

          <p className="font-serif-editorial text-2xl sm:text-3xl text-neutral-300 font-light leading-relaxed max-w-2xl pt-2">
            Starting over can be frightening because leaving costs something. But staying costs something too.
          </p>

          {/* Quick Answer Callout */}
          <div className="mt-8 p-6 sm:p-8 border border-white/20 bg-neutral-950/80 relative">
            <div className="absolute top-0 left-0 w-2 h-2 bg-white" />
            <span className="text-[9px] font-sans-clean tracking-[0.3em] uppercase text-neutral-500 block mb-3">
              QUICK SUMMARY
            </span>
            <p className="font-serif-editorial text-xl sm:text-2xl text-white font-normal leading-relaxed">
              Why is starting over terrifying? Because beginning again incurs immediate, visible costs:
              forfeiting accumulated seniority, enduring temporary financial uncertainty, and suffering
              the embarrassment of explaining yourself. But remaining in a hollow arrangement has a cost too—it
              is billed in quiet resentment, spiritual burnout, and irrecoverable years. The question is never
              whether a cost exists; it is which invoice you choose to pay.
            </p>
          </div>
        </section>

        {/* SECTION 1 */}
        <section aria-labelledby="heading-not-romantic" className="space-y-6 my-16 border-t border-white/10 pt-16">
          <div className="space-y-2">
            <span className="text-[10px] font-sans-clean tracking-[0.3em] text-neutral-500 uppercase block">
              01 &middot; THE REALITY
            </span>
            <h2
              id="heading-not-romantic"
              className="font-serif-display text-3xl sm:text-4xl md:text-5xl text-white font-normal tracking-tight uppercase leading-snug"
            >
              STARTING OVER IS NOT AUTOMATICALLY BRAVE; STAYING IS NOT AUTOMATICALLY COWARDLY
            </h2>
          </div>

          <div className="space-y-6 font-serif-editorial text-xl sm:text-2xl text-neutral-300 font-light leading-relaxed">
            <p>
              Popular internet culture romanticizes blowing up your life: quitting your job on a whim,
              abandoning relationships at the first sign of friction, moving to a distant coast, and calling
              the chaos “growth.”
            </p>
            <p>
              AntiStoic does not endorse reckless escapism. Sometimes walking away is simply a coward’s way
              of dodging hard work. Other times, staying to rebuild, repair, or endure is the highest form
              of discipline.
            </p>
            <p>
              The difference is not whether you leave or stay. The difference is whether you made the choice
              consciously, with full awareness of the accounting, or whether you stayed out of sheer
              paralysis and fear of the unknown.
            </p>
          </div>
        </section>

        {/* SECTION 2: THE TWO-COST AUDIT (MAJOR EDITORIAL MOMENT) */}
        <section
          aria-labelledby="heading-audit"
          className="my-16 md:my-24 p-8 sm:p-12 border border-white/20 bg-neutral-950 space-y-8"
        >
          <div className="space-y-2">
            <span className="text-[10px] font-sans-clean tracking-[0.3em] text-neutral-400 uppercase block">
              THE FRAMEWORK
            </span>
            <h2
              id="heading-audit"
              className="font-serif-display text-3xl sm:text-5xl text-white font-normal uppercase tracking-tight"
            >
              THE TWO-COST AUDIT
            </h2>
            <p className="font-serif-editorial text-lg sm:text-xl text-neutral-300 font-light">
              Sit down with a sheet of paper. Divide it into two columns.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-base sm:text-lg">
            <div className="p-6 border border-white/10 bg-black">
              <span className="text-[10px] font-sans-clean tracking-[0.2em] text-neutral-500 block mb-2">
                COLUMN A
              </span>
              <h3 className="font-serif-display text-xl text-white mb-2">
                The Cost of Leaving
              </h3>
              <ul className="space-y-2 text-neutral-400 font-light">
                <li>&bull; Temporary income disruption or savings burn</li>
                <li>&bull; Loss of familiar title, status, or network</li>
                <li>&bull; Awkward conversations and social judgments</li>
                <li>&bull; The initial clumsiness of being a beginner again</li>
              </ul>
            </div>

            <div className="p-6 border border-white/20 bg-black">
              <span className="text-[10px] font-sans-clean tracking-[0.2em] text-neutral-300 block mb-2">
                COLUMN B
              </span>
              <h3 className="font-serif-display text-xl text-white mb-2">
                The Cost of Staying
              </h3>
              <ul className="space-y-2 text-neutral-300 font-light">
                <li>&bull; Five more years of gradual, irreversible cynicism</li>
                <li>&bull; Quiet resentment rotting your closest relationships</li>
                <li>&bull; Wasting prime physical and intellectual capacity</li>
                <li>&bull; The soul-crushing penalty of living an alibi</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-6 space-y-3 font-serif-editorial text-lg sm:text-xl text-neutral-300 font-light">
            <p className="text-white">
              Notice the fundamental difference between the two columns:
            </p>
            <p>
              The costs of leaving are usually <strong className="text-white font-normal">temporary, front-loaded, and visible</strong>.
            </p>
            <p>
              The costs of staying are <strong className="text-white font-normal">permanent, compounding, and invisible until it is too late</strong>.
            </p>
          </div>
        </section>

        {/* SECTION 3: THE SUNK COST TRAP */}
        <section aria-labelledby="heading-sunk-cost" className="space-y-6 my-16 border-t border-white/10 pt-16">
          <div className="space-y-2">
            <span className="text-[10px] font-sans-clean tracking-[0.3em] text-neutral-500 uppercase block">
              02 &middot; THE COGNITIVE ILLUSION
            </span>
            <h2
              id="heading-sunk-cost"
              className="font-serif-display text-3xl sm:text-4xl md:text-5xl text-white font-normal tracking-tight uppercase leading-snug"
            >
              PAYING FOR YESTERDAY WITH TOMORROW
            </h2>
          </div>

          <div className="space-y-6 font-serif-editorial text-xl sm:text-2xl text-neutral-300 font-light leading-relaxed">
            <p>
              “I’ve already put seven years into this career.” &middot; “We’ve been together since university.” &middot; “I’ve spent thousands of dollars on this degree.”
            </p>
            <p>
              Those years and dollars are already gone. They will never return whether you stay or leave.
              Remaining in a dead-end situation because of how much time you previously spent is like
              insisting on finishing a poisoned meal because you already paid for the plate.
            </p>
            <p className="text-white">
              Do not sacrifice the only years you have left to honor the corpse of a decision made by a
              younger, less experienced version of yourself.
            </p>
          </div>
        </section>

        {/* SECTION 4: THE IMMEDIATE NEXT MOVE */}
        <section aria-labelledby="heading-next-move" className="space-y-6 my-16 border-t border-white/10 pt-16">
          <div className="space-y-2">
            <span className="text-[10px] font-sans-clean tracking-[0.3em] text-neutral-500 uppercase block">
              03 &middot; THE NEXT HONEST MOVE
            </span>
            <h2
              id="heading-next-move"
              className="font-serif-display text-3xl sm:text-4xl md:text-5xl text-white font-normal tracking-tight uppercase leading-snug"
            >
              THE FIRST MOVE DOES NOT REQUIRE BURNING THE SHIPS
            </h2>
          </div>

          <div className="space-y-6 font-serif-editorial text-xl sm:text-2xl text-neutral-300 font-light leading-relaxed">
            <p>
              People freeze because they believe starting over requires a cinematic leap off a cliff.
              It rarely does.
            </p>
            <p>
              The first move is usually quiet and boring:
            </p>
            <ul className="space-y-2 pl-4 border-l border-white/15 text-neutral-300 text-lg sm:text-xl">
              <li>&bull; Open a spreadsheet and calculate your exact bare-bones monthly survival burn rate.</li>
              <li>&bull; Send one honest inquiry to someone working in the field you are eyeing.</li>
              <li>&bull; Tell your partner: “I am deeply dissatisfied with our current pattern, and we need to discuss it honestly tonight.”</li>
              <li>&bull; Spend twenty-five minutes sketching out what year one of the alternative would look like.</li>
            </ul>
            <p>
              Take the small, honest step. Stop holding your breath.
            </p>
          </div>
        </section>

        {/* REALITY CHECK CTA */}
        <section
          aria-labelledby="heading-cta"
          className="my-16 md:my-24 p-8 sm:p-12 border border-white/30 bg-neutral-950 text-center space-y-6 relative"
        >
          <div className="absolute top-0 left-0 w-3 h-3 bg-white" />
          <span className="text-[10px] sm:text-[11px] font-sans-clean tracking-[0.35em] text-neutral-400 uppercase block">
            INTERACTIVE REFLECTION &middot; DIRECTION
          </span>

          <h2
            id="heading-cta"
            className="font-serif-display text-3xl sm:text-5xl text-white font-normal tracking-tight uppercase leading-none"
          >
            FIGURE OUT WHAT’S ACTUALLY HOLDING YOU HERE.
          </h2>

          <p className="font-serif-editorial text-xl sm:text-2xl text-neutral-300 font-light max-w-xl mx-auto leading-relaxed">
            Examine your fears, strip away the excuses, and discover your next non-negotiable move with
            the 4-step Direction reality check.
          </p>

          <div className="pt-4">
            <a
              href="/whats-eating-you?topic=direction"
              className="inline-block px-8 sm:px-10 py-4 bg-white text-black hover:bg-neutral-200 transition-colors font-sans-clean text-[11px] tracking-[0.3em] uppercase font-medium rounded-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              TAKE THE REALITY CHECK &rarr;
            </a>
          </div>
        </section>

        {/* KEEP QUESTIONING CLUSTER LINKS */}
        <KeepQuestioning currentRoute="/afraid-to-start-over" />

        {/* SOURCING */}
        <section aria-labelledby="heading-sources" className="space-y-4 my-16 pt-12 border-t border-white/10 text-neutral-400">
          <span className="text-[10px] font-sans-clean tracking-[0.3em] text-neutral-500 uppercase block">
            SOURCES &amp; CONTEXTUAL REFERENCES
          </span>
          <ul className="space-y-2 font-serif-editorial text-base sm:text-lg">
            <li>
              &bull; <strong className="text-neutral-300 font-normal">Daniel Kahneman &amp; Amos Tversky (1979, 1984)</strong> — seminal behavioral economics research on loss aversion and the sunk cost fallacy, showing humans irrationally value past investments over future utility.
            </li>
            <li>
              &bull; <strong className="text-neutral-300 font-normal">Epictetus, <em>Enchiridion</em></strong> — on recognizing when an external circumstance has become a master over your agency, and having the courage to withdraw assent.
            </li>
            <li>
              &bull; <strong className="text-neutral-300 font-normal">Seneca, <em>De Tranquillitate Animi</em> (On Peace of Mind)</strong> — on the misery of indecision, living under false pretenses, and the courage required to adjust course.
            </li>
          </ul>
        </section>
      </main>

      {/* Minimal Footer */}
      <footer className="border-t border-white/10 py-10 px-6 md:px-12 bg-black">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <span className="font-serif-display text-lg text-white block">AntiStoic</span>
            <p className="text-[10px] font-sans-clean tracking-[0.25em] uppercase text-neutral-500 mt-0.5">
              Think Differently About Self-Improvement.
            </p>
          </div>

          <div className="flex items-center space-x-6 text-[10px] font-sans-clean tracking-[0.25em] uppercase text-neutral-500">
            <a href="/" className="hover:text-white transition-colors">Manifesto</a>
            <a href="/what-is-antistoic" className="hover:text-white transition-colors">The Philosophy</a>
            <a href="/whats-eating-you" className="hover:text-white transition-colors">Reality Check</a>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default AfraidToStartOverPage;
