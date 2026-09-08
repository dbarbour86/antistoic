import React, { useEffect } from 'react';
import { KeepQuestioning } from './KeepQuestioning';

export const FeelLostInLifePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const previousTitle = document.title;
    document.title = 'Feeling Lost in Life? You May Not Need More Clarity | AntiStoic';

    const descMeta = document.querySelector('meta[name="description"]');
    const previousDesc = descMeta?.getAttribute('content') || '';
    if (descMeta) {
      descMeta.setAttribute(
        'content',
        "Feeling lost doesn't always mean you have no direction. Learn how avoidance, too many options, fear, and waiting for certainty can keep you stuck — and what to do next."
      );
    }

    const canonicalLink = document.querySelector('link[rel="canonical"]');
    const previousCanonical = canonicalLink?.getAttribute('href') || '';
    if (canonicalLink) {
      canonicalLink.setAttribute('href', 'https://antistoic.com/feel-lost-in-life');
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
        {/* Article Intro / H1 */}
        <section aria-labelledby="article-title" className="space-y-6 mb-16 md:mb-20">
          <span className="text-[11px] font-sans-clean tracking-[0.35em] text-neutral-500 uppercase block">
            ESSAY &middot; DIRECTION
          </span>

          <h1
            id="article-title"
            className="font-serif-display text-5xl sm:text-7xl md:text-8xl text-white font-normal tracking-tight uppercase leading-[0.95]"
          >
            FEELING LOST IN LIFE?
          </h1>

          <p className="font-serif-editorial text-2xl sm:text-3xl text-neutral-300 font-light leading-relaxed max-w-2xl pt-2">
            You may not need more clarity. You may simply need to stop waiting for certainty.
          </p>

          {/* Quick Answer Callout */}
          <div className="mt-8 p-6 sm:p-8 border border-white/20 bg-neutral-950/80 relative">
            <div className="absolute top-0 left-0 w-2 h-2 bg-white" />
            <span className="text-[9px] font-sans-clean tracking-[0.3em] uppercase text-neutral-500 block mb-3">
              QUICK SUMMARY
            </span>
            <p className="font-serif-editorial text-xl sm:text-2xl text-white font-normal leading-relaxed">
              Why do you feel lost? Feeling lost rarely means you lack an internal compass. More often,
              it means you have outgrown an old life chapter without committing to the discomfort of a new
              one, you have too many acceptable choices and fear choosing wrong, or you are demanding
              guarantees before taking a first step. Clarity is produced by motion, not contemplation.
            </p>
          </div>
        </section>

        {/* SECTION 1 */}
        <section aria-labelledby="heading-sec1" className="space-y-6 my-16 border-t border-white/10 pt-16">
          <div className="space-y-2">
            <span className="text-[10px] font-sans-clean tracking-[0.3em] text-neutral-500 uppercase block">
              01 &middot; THE PARADOX
            </span>
            <h2
              id="heading-sec1"
              className="font-serif-display text-3xl sm:text-4xl md:text-5xl text-white font-normal tracking-tight uppercase leading-snug"
            >
              WHY YOU CAN FEEL LOST EVEN WHEN NOTHING IS “WRONG”
            </h2>
          </div>

          <div className="space-y-6 font-serif-editorial text-xl sm:text-2xl text-neutral-300 font-light leading-relaxed">
            <p>
              On paper, your life may look completely functional. Bills are paid, obligations are met,
              and there is no immediate catastrophe. Yet you wake up with a persistent, low-frequency
              dread—a feeling of standing in the center of an empty room without knowing which door to open.
            </p>
            <p>
              This happens because competence and fulfillment are entirely different metrics. You can
              become exceptionally good at sustaining a routine you never deliberately chose. When the
              novelty wears off, you are left holding a life built from inertia, social expectations, and
              accidental compromises.
            </p>
            <p>
              Feeling lost in this state is not a malfunction. It is your mind signaling that the current
              script has run out of runway.
            </p>
          </div>
        </section>

        {/* SECTION 2 */}
        <section aria-labelledby="heading-sec2" className="space-y-6 my-16 border-t border-white/10 pt-16">
          <div className="space-y-2">
            <span className="text-[10px] font-sans-clean tracking-[0.3em] text-neutral-500 uppercase block">
              02 &middot; THE ILLUSION
            </span>
            <h2
              id="heading-sec2"
              className="font-serif-display text-3xl sm:text-4xl md:text-5xl text-white font-normal tracking-tight uppercase leading-snug"
            >
              CLARITY IS OFTEN A RESULT, NOT A PREREQUISITE
            </h2>
          </div>

          <div className="space-y-6 font-serif-editorial text-xl sm:text-2xl text-neutral-300 font-light leading-relaxed">
            <p>
              The most common trap of people who feel lost is believing they must first find their
              “true passion” or a 10-year master blueprint before taking a step.
            </p>
            <p>
              This gets the causal relationship backward. You do not think your way into purposeful
              action; you act your way into purposeful thinking. Waiting for complete clarity while sitting
              motionless in a chair is like waiting for a car’s headlights to illuminate thirty miles of
              highway before shifting out of park.
            </p>
            <p>
              Headlights only reveal the next twenty yards. You only learn what energizes or deadens you
              by colliding with reality—by writing the bad draft, starting the project, or testing the role.
            </p>
          </div>
        </section>

        {/* SECTION 3 */}
        <section aria-labelledby="heading-sec3" className="space-y-6 my-16 border-t border-white/10 pt-16">
          <div className="space-y-2">
            <span className="text-[10px] font-sans-clean tracking-[0.3em] text-neutral-500 uppercase block">
              03 &middot; THE DEAD END
            </span>
            <h2
              id="heading-sec3"
              className="font-serif-display text-3xl sm:text-4xl md:text-5xl text-white font-normal tracking-tight uppercase leading-snug"
            >
              THE COST OF WAITING FOR CERTAINTY
            </h2>
          </div>

          <div className="space-y-6 font-serif-editorial text-xl sm:text-2xl text-neutral-300 font-light leading-relaxed">
            <p>
              Certainty is an expensive fantasy. What most people call “waiting for the right time” is
              simply fear trying to negotiate with risk.
            </p>
            <p>
              Every year you spend researching, surveying opinions, and reading self-help manuals is not
              neutral time. It is paid in the irrecoverable currency of your life. The risk of choosing a
              direction and discovering it is wrong is real, but it carries a crucial benefit: you get an
              immediate answer. The risk of choosing nothing is quiet, invisible, and permanent.
            </p>
          </div>
        </section>

        {/* SECTION 4 */}
        <section aria-labelledby="heading-sec4" className="space-y-6 my-16 border-t border-white/10 pt-16">
          <div className="space-y-2">
            <span className="text-[10px] font-sans-clean tracking-[0.3em] text-neutral-500 uppercase block">
              04 &middot; THE UNCOMFORTABLE TRUTH
            </span>
            <h2
              id="heading-sec4"
              className="font-serif-display text-3xl sm:text-4xl md:text-5xl text-white font-normal tracking-tight uppercase leading-snug"
            >
              WHEN “I DON’T KNOW” REALLY MEANS “I DON’T WANT TO CHOOSE”
            </h2>
          </div>

          <div className="space-y-6 font-serif-editorial text-xl sm:text-2xl text-neutral-300 font-light leading-relaxed">
            <p>
              Be honest with yourself for thirty seconds. Do you truly have zero idea what you want to do?
              Or do you know precisely what choice is sitting in front of you—and dread the social friction,
              financial risk, or personal embarrassment required to pursue it?
            </p>
            <p>
              Saying “I don’t know” is socially acceptable. It earns sympathy and buys time. Saying
              “I know what I need to do, but I am terrified of looking foolish” requires raw accountability.
              Recognizing that distinction is where real direction begins.
            </p>
          </div>
        </section>

        {/* SECTION 5 */}
        <section aria-labelledby="heading-sec5" className="space-y-6 my-16 border-t border-white/10 pt-16">
          <div className="space-y-2">
            <span className="text-[10px] font-sans-clean tracking-[0.3em] text-neutral-500 uppercase block">
              05 &middot; THE ACTION
            </span>
            <h2
              id="heading-sec5"
              className="font-serif-display text-3xl sm:text-4xl md:text-5xl text-white font-normal tracking-tight uppercase leading-snug"
            >
              A SMALLER QUESTION: WHAT CAN YOU TEST FOR 25 MINUTES?
            </h2>
          </div>

          <div className="space-y-6 font-serif-editorial text-xl sm:text-2xl text-neutral-300 font-light leading-relaxed">
            <p>
              Stop asking what your 30-year legacy should be. Shrink the horizon down to what you can touch
              today.
            </p>
            <p>
              Pick one idea you have been curious about or dodging. Open a document, draft the message,
              sketch the outline, or make the phone call. Set a timer for twenty-five minutes. No music,
              no open social tabs, no second-guessing. Produce something rough before the alarm rings.
            </p>
            <p className="text-white">
              You do not need to solve your entire trajectory tonight. You simply need to break the spell
              of stillness.
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
            STOP THINKING IN CIRCLES.
          </h2>

          <p className="font-serif-editorial text-xl sm:text-2xl text-neutral-300 font-light max-w-xl mx-auto leading-relaxed">
            If you are stuck between options, waiting on motivation, or dreading five more years in the
            same chair, run the 4-step Direction audit.
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
        <KeepQuestioning currentRoute="/feel-lost-in-life" />

        {/* SOURCING */}
        <section aria-labelledby="heading-sources" className="space-y-4 my-16 pt-12 border-t border-white/10 text-neutral-400">
          <span className="text-[10px] font-sans-clean tracking-[0.3em] text-neutral-500 uppercase block">
            SOURCES &amp; CONTEXTUAL REFERENCES
          </span>
          <ul className="space-y-2 font-serif-editorial text-base sm:text-lg">
            <li>
              &bull; <strong className="text-neutral-300 font-normal">Epictetus, <em>Discourses</em></strong> — on choice (*prohairesis*), examining unexamined impressions (*phantasiai*), and taking responsibility for the next move.
            </li>
            <li>
              &bull; <strong className="text-neutral-300 font-normal">Barry Schwartz, <em>The Paradox of Choice</em> (2004)</strong> — on how an overabundance of options increases anxiety, second-guessing, and paralysis.
            </li>
            <li>
              &bull; <strong className="text-neutral-300 font-normal">William James, <em>The Principles of Psychology</em> (1890)</strong> — on decision-making, the momentum of habit, and the psychological cost of prolonged deliberation.
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
export default FeelLostInLifePage;
