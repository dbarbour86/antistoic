import React, { useEffect } from 'react';
import { KeepQuestioning } from './KeepQuestioning';

export const FeelBehindInLifePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const previousTitle = document.title;
    document.title = 'Feeling Behind in Life? Behind Whom? | AntiStoic';

    const descMeta = document.querySelector('meta[name="description"]');
    const previousDesc = descMeta?.getAttribute('content') || '';
    if (descMeta) {
      descMeta.setAttribute(
        'content',
        "If you feel behind in life, the timeline you're measuring yourself against may deserve more scrutiny than you do. Examine comparison, expectations, and what actually matters next."
      );
    }

    const canonicalLink = document.querySelector('link[rel="canonical"]');
    const previousCanonical = canonicalLink?.getAttribute('href') || '';
    if (canonicalLink) {
      canonicalLink.setAttribute('href', 'https://antistoic.com/feel-behind-in-life');
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
            ESSAY &middot; PERSPECTIVE
          </span>

          <h1
            id="article-title"
            className="font-serif-display text-5xl sm:text-7xl md:text-8xl text-white font-normal tracking-tight uppercase leading-[0.95]"
          >
            FEELING BEHIND IN LIFE?
          </h1>

          <p className="font-serif-editorial text-2xl sm:text-3xl text-neutral-300 font-light leading-relaxed max-w-2xl pt-2">
            The timeline you are measuring yourself against may deserve more scrutiny than you do.
          </p>

          {/* Quick Answer Callout */}
          <div className="mt-8 p-6 sm:p-8 border border-white/20 bg-neutral-950/80 relative">
            <div className="absolute top-0 left-0 w-2 h-2 bg-white" />
            <span className="text-[9px] font-sans-clean tracking-[0.3em] uppercase text-neutral-500 block mb-3">
              QUICK SUMMARY
            </span>
            <p className="font-serif-editorial text-xl sm:text-2xl text-white font-normal leading-relaxed">
              Why do you feel behind? You feel behind because your brain runs comparison math against an
              idealized, composite peer—someone with the career of your most ambitious colleague, the relationship
              of your happiest friend, and the savings of someone who inherited capital. There is no master
              calendar for existence. You cannot be late to an arbitrary race you never signed up to run.
            </p>
          </div>
        </section>

        {/* SECTION 1 */}
        <section aria-labelledby="heading-composite" className="space-y-6 my-16 border-t border-white/10 pt-16">
          <div className="space-y-2">
            <span className="text-[10px] font-sans-clean tracking-[0.3em] text-neutral-500 uppercase block">
              01 &middot; THE METRIC
            </span>
            <h2
              id="heading-composite"
              className="font-serif-display text-3xl sm:text-4xl md:text-5xl text-white font-normal tracking-tight uppercase leading-snug"
            >
              THE COMPOSITE PEER: AN IMPOSSIBLE YARDSTICK
            </h2>
          </div>

          <div className="space-y-6 font-serif-editorial text-xl sm:text-2xl text-neutral-300 font-light leading-relaxed">
            <p>
              When people say they feel behind, they are rarely comparing themselves to a real human being.
              They are comparing their complete, unedited private reality—their debts, self-doubt, family
              tensions, and wasted afternoons—to a composite fiction stitched together from social feeds and
              cultural expectations.
            </p>
            <p>
              You look at one person’s career velocity, another person’s marital harmony, a third person’s
              home purchase, and a fourth person’s physical conditioning. In your mind, these separate
              achievements merge into a single standard: someone who has mastered every domain by thirty-two.
            </p>
            <p>
              That person does not exist. Everyone is triage. Everyone is trading off something vital to
              preserve something visible.
            </p>
          </div>
        </section>

        {/* SECTION 2: THE CENTRAL QUESTION (MAJOR EDITORIAL MOMENT) */}
        <section
          aria-labelledby="heading-central-question"
          className="my-16 md:my-24 p-8 sm:p-14 border border-white/20 bg-neutral-950/90 text-center space-y-6"
        >
          <span className="text-[10px] font-sans-clean tracking-[0.35em] text-neutral-400 uppercase block">
            THE INTERROGATION
          </span>

          <h2
            id="heading-central-question"
            className="font-serif-display text-4xl sm:text-6xl md:text-7xl text-white font-normal uppercase tracking-tight leading-tight"
          >
            BEHIND WHOM?
          </h2>

          <div className="w-16 h-[1px] bg-neutral-700 mx-auto" />

          <p className="font-serif-editorial text-2xl sm:text-4xl text-neutral-200 font-light italic max-w-xl mx-auto leading-relaxed">
            And did you actually choose their destination?
          </p>
        </section>

        {/* SECTION 3: THE CRUCIAL DISTINCTION */}
        <section aria-labelledby="heading-distinction" className="space-y-6 my-16 border-t border-white/10 pt-16">
          <div className="space-y-2">
            <span className="text-[10px] font-sans-clean tracking-[0.3em] text-neutral-500 uppercase block">
              02 &middot; THE REAL MEASUREMENT
            </span>
            <h2
              id="heading-distinction"
              className="font-serif-display text-3xl sm:text-4xl md:text-5xl text-white font-normal tracking-tight uppercase leading-snug"
            >
              BEHIND SOMEONE ELSE VS. BEHIND YOUR OWN INTENTIONS
            </h2>
          </div>

          <div className="space-y-6 font-serif-editorial text-xl sm:text-2xl text-neutral-300 font-light leading-relaxed">
            <p>
              We will not patronize you with empty slogans like “everyone is running their own special race.”
              Sometimes, you genuinely are behind.
            </p>
            <p>
              The difference lies entirely in the reference point:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6 text-base sm:text-lg">
              <div className="p-6 border border-white/10 bg-neutral-950">
                <span className="text-[10px] font-sans-clean tracking-[0.2em] text-neutral-500 block mb-2">
                  CATEGORY A: THE SOCIAL FICTION
                </span>
                <h3 className="font-serif-display text-xl text-white mb-2">
                  Behind Someone Else
                </h3>
                <p className="text-neutral-400 font-light leading-relaxed">
                  Measuring against mortgages, job titles, or wedding dates you never prioritized.
                  This anxiety is pure ego, driven by fear of being judged by spectators who are not
                  living your consequences.
                </p>
              </div>

              <div className="p-6 border border-white/20 bg-neutral-950">
                <span className="text-[10px] font-sans-clean tracking-[0.2em] text-neutral-300 block mb-2">
                  CATEGORY B: THE UNCOMFORTABLE FACT
                </span>
                <h3 className="font-serif-display text-xl text-white mb-2">
                  Behind Your Own Intentions
                </h3>
                <p className="text-neutral-300 font-light leading-relaxed">
                  Knowing that you had a financial goal, a physical standard, or creative work you
                  deliberately promised yourself to pursue—and surrendered months to avoidance and distraction.
                </p>
              </div>
            </div>

            <p>
              If your anxiety belongs to Category A, discard it. If it belongs to Category B, stop mourning
              the deficit. Admit it plainly, without self-pity or theatrical self-loathing, and look at
              what catching up actually requires.
            </p>
          </div>
        </section>

        {/* SECTION 4: WHAT CATCHING UP REQUIRES */}
        <section aria-labelledby="heading-catching-up" className="space-y-6 my-16 border-t border-white/10 pt-16">
          <div className="space-y-2">
            <span className="text-[10px] font-sans-clean tracking-[0.3em] text-neutral-500 uppercase block">
              03 &middot; THE ARITHMETIC
            </span>
            <h2
              id="heading-catching-up"
              className="font-serif-display text-3xl sm:text-4xl md:text-5xl text-white font-normal tracking-tight uppercase leading-snug"
            >
              WHAT WOULD CATCHING UP ACTUALLY REQUIRE?
            </h2>
          </div>

          <div className="space-y-6 font-serif-editorial text-xl sm:text-2xl text-neutral-300 font-light leading-relaxed">
            <p>
              Catching up on your own standards does not require an overnight miracle or a dramatic montage.
              It requires ruthless subtraction.
            </p>
            <p>
              Look straight at the math: You cannot catch up on savings while financing consumer convenience.
              You cannot catch up on focused labor while consuming four hours of algorithmic feeds every
              evening. You cannot build genuine depth while accepting every invitation out of politeness.
            </p>
            <p className="text-white">
              The feeling of being behind is often the mind’s clumsy way of saying: “You cannot afford your
              current distractions.”
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
            STOP MEASURING AGAINST GHOSTS.
          </h2>

          <p className="font-serif-editorial text-xl sm:text-2xl text-neutral-300 font-light max-w-xl mx-auto leading-relaxed">
            Diagnose whether you are actually lagging behind your own standards or merely torturing yourself
            over someone else’s milestones. Run the 4-step reflection.
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
        <KeepQuestioning currentRoute="/feel-behind-in-life" />

        {/* SOURCING */}
        <section aria-labelledby="heading-sources" className="space-y-4 my-16 pt-12 border-t border-white/10 text-neutral-400">
          <span className="text-[10px] font-sans-clean tracking-[0.3em] text-neutral-500 uppercase block">
            SOURCES &amp; CONTEXTUAL REFERENCES
          </span>
          <ul className="space-y-2 font-serif-editorial text-base sm:text-lg">
            <li>
              &bull; <strong className="text-neutral-300 font-normal">Leon Festinger, “A Theory of Social Comparison Processes” (1954)</strong> — foundational research in social psychology demonstrating the human drive to evaluate oneself against external reference groups.
            </li>
            <li>
              &bull; <strong className="text-neutral-300 font-normal">Seneca, <em>De Brevitate Vitae</em> (On the Shortness of Life)</strong> — on how people squander time living according to borrowed scripts while complaining of life’s briefness.
            </li>
            <li>
              &bull; <strong className="text-neutral-300 font-normal">Marcus Aurelius, <em>Meditations</em> (Book IV)</strong> — on the absurdity of living for the praise or benchmarks of spectators who do not live with your mind.
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
export default FeelBehindInLifePage;
