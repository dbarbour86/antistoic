import React, { useEffect } from 'react';
import { motion } from 'motion/react';

export const WhatIsAntiStoicPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Dynamic metadata update for client-side navigation
    const previousTitle = document.title;
    document.title = 'What Is AntiStoic? A Different Approach to Self-Reflection';

    const descMeta = document.querySelector('meta[name="description"]');
    const previousDesc = descMeta?.getAttribute('content') || '';
    if (descMeta) {
      descMeta.setAttribute(
        'content',
        "AntiStoic is self-reflection without emotional suppression or motivational clichés. Feel what's happening, question the story, control what's yours, and make the next move."
      );
    }

    const canonicalLink = document.querySelector('link[rel="canonical"]');
    const previousCanonical = canonicalLink?.getAttribute('href') || '';
    if (canonicalLink) {
      canonicalLink.setAttribute('href', 'https://antistoic.com/what-is-antistoic');
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

  const comparisonRows = [
    {
      performative: '“Don’t let it affect you.”',
      antistoic: 'Notice that it affected you. Figure out why.',
    },
    {
      performative: '“Ignore what you can’t control.”',
      antistoic: 'Accept what you can’t control without pretending you don’t care.',
    },
    {
      performative: '“Be disciplined.”',
      antistoic: 'Be disciplined enough to stop lying to yourself.',
    },
    {
      performative: '“Endure everything silently.”',
      antistoic: 'Change what violates your integrity. Endure only what cannot be altered.',
    },
    {
      performative: '“Suppress vulnerability.”',
      antistoic: 'Acknowledge reality directly, without melodrama or denial.',
    },
  ];

  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-neutral-800 selection:text-white flex flex-col justify-between">
      {/* Top Header */}
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
              href="/whats-eating-you"
              className="text-[10px] font-sans-clean tracking-[0.25em] uppercase text-neutral-400 hover:text-white transition-colors border border-white/15 hover:border-white/40 px-3.5 py-1.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white"
            >
              REALITY CHECK &rarr;
            </a>
          </div>
        </div>
      </header>

      {/* Main Editorial Article */}
      <main className="flex-1 w-full max-w-4xl mx-auto px-6 md:px-12 py-16 md:py-24">
        {/* HERO / OPENING */}
        <section aria-labelledby="hero-title" className="space-y-6 mb-16 md:mb-24">
          <span className="text-[11px] font-sans-clean tracking-[0.35em] text-neutral-500 uppercase block">
            THE IDEA
          </span>

          <h1
            id="hero-title"
            className="font-serif-display text-5xl sm:text-7xl md:text-8xl text-white font-normal tracking-tight uppercase leading-[0.95]"
          >
            WHAT IS ANTISTOIC?
          </h1>

          <p className="font-serif-editorial text-2xl sm:text-3xl md:text-4xl text-neutral-300 font-light leading-relaxed max-w-2xl pt-2">
            Strength isn’t the absence of feeling.
          </p>

          {/* Standalone Canonical Definition Callout */}
          <div className="mt-10 p-6 sm:p-8 border border-white/20 bg-neutral-950/80 relative">
            <div className="absolute top-0 left-0 w-2 h-2 bg-white" />
            <span className="text-[9px] font-sans-clean tracking-[0.3em] uppercase text-neutral-500 block mb-3">
              CORE DEFINITION
            </span>
            <p className="font-serif-editorial text-xl sm:text-2xl text-white font-normal leading-relaxed">
              AntiStoic is an approach to self-reflection built around feeling what is actually
              happening, questioning the stories you tell yourself, separating what you can change
              from what you cannot, and taking a concrete next action.
            </p>
          </div>
        </section>

        {/* SECTION 1: NOT STOICISM. THE COSTUME. */}
        <section aria-labelledby="heading-costume" className="space-y-8 my-16 md:my-24 border-t border-white/10 pt-16">
          <div className="space-y-2">
            <span className="text-[10px] font-sans-clean tracking-[0.3em] text-neutral-500 uppercase block">
              SECTION 01 &middot; THE DISTINCTION
            </span>
            <h2
              id="heading-costume"
              className="font-serif-display text-3xl sm:text-5xl text-white font-normal tracking-tight uppercase leading-none"
            >
              NOT STOICISM. THE COSTUME.
            </h2>
          </div>

          <div className="space-y-6 font-serif-editorial text-xl sm:text-2xl text-neutral-300 font-light leading-relaxed">
            <p>
              AntiStoic is not fighting Marcus Aurelius, Epictetus, Seneca, or ancient Hellenistic logic.
              Classical Stoicism was a demanding, intellectually rich philosophy of civic duty, logic,
              and ethical coherence.
            </p>
            <p>
              AntiStoic pushes against the modern caricature: the internet subculture that stripped
              classical philosophy down to gym-bro aphorisms, emotional suppression, and performative
              invulnerability.
            </p>

            <blockquote className="my-8 pl-6 border-l-2 border-white/30 italic text-neutral-200">
              “I don’t care.” &middot; “It doesn’t affect me.” &middot; “I just keep grinding.” &middot; “I don’t need anyone.”
            </blockquote>

            <p>
              Repeating these slogans does not produce resilience; it produces numbness. Clenching your jaw
              and pretending that exhaustion, grief, jealousy, or resentment do not exist is not emotional
              regulation—it is emotional denial. Suppressing a tremor doesn’t prove you are solid; it only
              proves you are holding your breath.
            </p>
            <p>
              AntiStoic exists as a practical counterweight to avoidance masquerading as discipline.
            </p>
          </div>
        </section>

        {/* SECTION 2: THE FOUR MOVEMENTS */}
        <section aria-labelledby="heading-four-movements" className="space-y-12 my-16 md:my-24 border-t border-white/10 pt-16">
          <div className="space-y-2">
            <span className="text-[10px] font-sans-clean tracking-[0.3em] text-neutral-500 uppercase block">
              SECTION 02 &middot; THE PRACTICE
            </span>
            <h2
              id="heading-four-movements"
              className="font-serif-display text-3xl sm:text-5xl text-white font-normal tracking-tight uppercase leading-none"
            >
              THE FOUR DISCIPLINES
            </h2>
          </div>

          {/* Discipline 1: Feel It */}
          <div className="space-y-4 p-6 sm:p-8 border border-white/10 bg-neutral-950/40">
            <div className="flex items-center justify-between text-[10px] font-sans-clean tracking-[0.25em] uppercase text-neutral-500">
              <span>01 / RECOGNITION</span>
              <span>DATA &ne; MANDATE</span>
            </div>
            <h3 className="font-serif-display text-2xl sm:text-3xl text-white font-normal">
              FEEL IT.
            </h3>
            <div className="space-y-4 font-serif-editorial text-lg sm:text-xl text-neutral-300 font-light leading-relaxed">
              <p>
                An emotion contains information without automatically being correct. Sensation is data,
                not a command.
              </p>
              <ul className="space-y-2 pl-4 border-l border-white/15 text-neutral-400 text-base sm:text-lg">
                <li><strong className="text-white font-normal">Anger</strong> often reveals a crossed boundary or an unmet standard.</li>
                <li><strong className="text-white font-normal">Fear</strong> often highlights uncalculated risk or exposure.</li>
                <li><strong className="text-white font-normal">Jealousy</strong> often identifies an unadmitted desire or insecure foundation.</li>
                <li><strong className="text-white font-normal">Sadness</strong> often marks an unacknowledged loss.</li>
                <li><strong className="text-white font-normal">Resentment</strong> almost always signals an agreement you never wanted to make.</li>
              </ul>
              <p>
                Feeling something does not require obeying it. But burying it guarantees you will never
                understand what triggered it.
              </p>
            </div>
          </div>

          {/* Discipline 2: Question It */}
          <div className="space-y-4 p-6 sm:p-8 border border-white/10 bg-neutral-950/40">
            <div className="flex items-center justify-between text-[10px] font-sans-clean tracking-[0.25em] uppercase text-neutral-500">
              <span>02 / EXAMINATION</span>
              <span>NARRATIVE AUDIT</span>
            </div>
            <h3 className="font-serif-display text-2xl sm:text-3xl text-white font-normal">
              QUESTION IT.
            </h3>
            <div className="space-y-4 font-serif-editorial text-lg sm:text-xl text-neutral-300 font-light leading-relaxed">
              <p>
                AntiStoic does not treat feelings as infallible gospel. Once an emotion is felt, the next
                task is ruthlessly interrogating the story built around it.
              </p>
              <p className="italic text-neutral-400">
                “They deliberately disrespected me.” &middot; “I have wasted my entire life.” &middot; “Everyone else is five years ahead of me.” &middot; “If I fail, my reputation is ruined.”
              </p>
              <p>
                Ask the uncomfortable questions: What part of this is verifiable fact, and what part is
                ego, wounded pride, or projection? What would remain of this crisis if you stopped
                comparing your private life to public stagecraft?
              </p>
            </div>
          </div>

          {/* Discipline 3: Control What's Yours */}
          <div className="space-y-4 p-6 sm:p-8 border border-white/10 bg-neutral-950/40">
            <div className="flex items-center justify-between text-[10px] font-sans-clean tracking-[0.25em] uppercase text-neutral-500">
              <span>03 / BOUNDARIES</span>
              <span>AGENCY VS OUTCOME</span>
            </div>
            <h3 className="font-serif-display text-2xl sm:text-3xl text-white font-normal">
              CONTROL WHAT’S YOURS.
            </h3>
            <div className="space-y-4 font-serif-editorial text-lg sm:text-xl text-neutral-300 font-light leading-relaxed">
              <p>
                Here AntiStoic honors the central insight of the classical Stoa—what Epictetus called the
                dichotomy of control.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-2 text-base sm:text-lg">
                <div className="p-4 border border-white/10 bg-black/60">
                  <span className="text-[10px] font-sans-clean tracking-[0.2em] text-neutral-500 block mb-2">
                    BEYOND YOUR REACH
                  </span>
                  <ul className="space-y-1 text-neutral-400">
                    <li>&bull; Another person’s mood or opinion</li>
                    <li>&bull; The irreversibility of the past</li>
                    <li>&bull; Universal approval or respect</li>
                    <li>&bull; Economic or environmental luck</li>
                  </ul>
                </div>
                <div className="p-4 border border-white/20 bg-black/90">
                  <span className="text-[10px] font-sans-clean tracking-[0.2em] text-neutral-300 block mb-2">
                    WITHIN YOUR REALM
                  </span>
                  <ul className="space-y-1 text-white">
                    <li>&bull; What you choose to say next</li>
                    <li>&bull; What you refuse to spend today</li>
                    <li>&bull; Whether you initiate the conversation</li>
                    <li>&bull; Whether you begin or continue</li>
                  </ul>
                </div>
              </div>
              <p>
                The AntiStoic distinction is refusal: we refuse to use “I can’t control it” as an excuse to
                emotionally disengage from everything that matters.
              </p>
            </div>
          </div>

          {/* Discipline 4: Then Move */}
          <div className="space-y-4 p-6 sm:p-8 border border-white/10 bg-neutral-950/40">
            <div className="flex items-center justify-between text-[10px] font-sans-clean tracking-[0.25em] uppercase text-neutral-500">
              <span>04 / RESOLUTION</span>
              <span>THE PHYSICAL VERDICT</span>
            </div>
            <h3 className="font-serif-display text-2xl sm:text-3xl text-white font-normal">
              THEN MOVE.
            </h3>
            <div className="space-y-4 font-serif-editorial text-lg sm:text-xl text-neutral-300 font-light leading-relaxed">
              <p>
                Philosophy without execution is intellectual cowardice. Introspection that never yields an
                action is merely anxiety dressed in academic clothing.
              </p>
              <p>
                The action does not need to solve your entire life. It needs to be the next honest move:
              </p>
              <p className="text-white text-lg sm:text-xl">
                Send the email. Open the bank balance and look at the raw number. Speak the sentence you have
                rehearsed for three weeks. Cancel the subscription. Put in twenty-five uninterrupted minutes
                of work. Admit plainly that you no longer want what you used to chase.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3: EDITORIAL COMPARISON TABLE */}
        <section aria-labelledby="heading-comparison" className="space-y-8 my-16 md:my-24 border-t border-white/10 pt-16">
          <div className="space-y-2">
            <span className="text-[10px] font-sans-clean tracking-[0.3em] text-neutral-500 uppercase block">
              SECTION 03 &middot; CONTRAST
            </span>
            <h2
              id="heading-comparison"
              className="font-serif-display text-3xl sm:text-5xl text-white font-normal tracking-tight uppercase leading-none"
            >
              PERFORMATIVE STOICISM VS. ANTISTOIC
            </h2>
            <p className="text-xs sm:text-sm font-sans-clean text-neutral-500 tracking-wider uppercase pt-1">
              Note: “Performative Stoicism” refers to the popularized internet caricature, not the nuanced breadth of classical antiquity.
            </p>
          </div>

          <div className="w-full border-t border-white/20 mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 text-[11px] font-sans-clean tracking-[0.25em] uppercase py-3 text-neutral-500 border-b border-white/10 hidden md:grid">
              <div>PERFORMATIVE STOICISM</div>
              <div>ANTISTOIC</div>
            </div>

            {comparisonRows.map((row, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 md:grid-cols-2 py-6 border-b border-white/10 gap-4 md:gap-8 items-start hover:bg-neutral-950/40 transition-colors"
              >
                <div>
                  <span className="text-[9px] font-sans-clean tracking-[0.2em] uppercase text-neutral-600 block mb-1 md:hidden">
                    PERFORMATIVE STOICISM
                  </span>
                  <p className="font-serif-editorial text-lg sm:text-xl text-neutral-400 font-light">
                    {row.performative}
                  </p>
                </div>
                <div>
                  <span className="text-[9px] font-sans-clean tracking-[0.2em] uppercase text-neutral-400 block mb-1 md:hidden">
                    ANTISTOIC
                  </span>
                  <p className="font-serif-editorial text-lg sm:text-xl text-white font-normal">
                    {row.antistoic}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 4: CONNECT TO REALITY CHECK */}
        <section
          aria-labelledby="heading-cta"
          className="my-16 md:my-24 p-8 sm:p-12 border border-white/30 bg-neutral-950 relative text-center space-y-6"
        >
          <div className="absolute top-0 left-0 w-3 h-3 bg-white" />
          <span className="text-[10px] sm:text-[11px] font-sans-clean tracking-[0.35em] text-neutral-400 uppercase block">
            ENOUGH THEORY.
          </span>

          <h2
            id="heading-cta"
            className="font-serif-display text-4xl sm:text-6xl text-white font-normal tracking-tight uppercase leading-none"
          >
            WHAT’S EATING YOU?
          </h2>

          <p className="font-serif-editorial text-xl sm:text-2xl text-neutral-300 font-light max-w-xl mx-auto leading-relaxed">
            You probably already know what has been taking up space in your head.
            The harder question is why. Put the theory through a practical audit.
          </p>

          <div className="pt-4">
            <a
              href="/whats-eating-you"
              className="inline-block px-8 sm:px-10 py-4 bg-white text-black hover:bg-neutral-200 transition-colors font-sans-clean text-[11px] tracking-[0.3em] uppercase font-medium rounded-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white"
            >
              TAKE THE REALITY CHECK &rarr;
            </a>
          </div>
        </section>

        {/* SECTION 5: SOURCING & FURTHER READING */}
        <section aria-labelledby="heading-sources" className="space-y-6 my-16 pt-12 border-t border-white/10 text-neutral-400">
          <span className="text-[10px] font-sans-clean tracking-[0.3em] text-neutral-500 uppercase block">
            SOURCES &amp; CONTEXTUAL REFERENCES
          </span>
          <p className="font-serif-editorial text-base sm:text-lg leading-relaxed text-neutral-400">
            AntiStoic distinguishes its critique by grounding its understanding of the ancient Stoa in authoritative primary texts and academic scholarship:
          </p>
          <ul className="space-y-3 font-serif-editorial text-base sm:text-lg">
            <li className="flex items-baseline space-x-2">
              <span className="text-[10px] font-sans-clean text-neutral-600 shrink-0">[ 01 ]</span>
              <span>
                <strong className="text-neutral-300 font-normal">Epictetus, <em>Discourses and Enchiridion</em></strong> — on the division of things attributable to personal agency (*ta eph’ hemin*) versus external fortune (*ta ouk eph’ hemin*).
              </span>
            </li>
            <li className="flex items-baseline space-x-2">
              <span className="text-[10px] font-sans-clean text-neutral-600 shrink-0">[ 02 ]</span>
              <span>
                <strong className="text-neutral-300 font-normal">Marcus Aurelius, <em>Meditations</em></strong> — on the examination of internal impressions, mortality, and the refusal to outsource ethical responsibility.
              </span>
            </li>
            <li className="flex items-baseline space-x-2">
              <span className="text-[10px] font-sans-clean text-neutral-600 shrink-0">[ 03 ]</span>
              <span>
                <strong className="text-neutral-300 font-normal">Seneca, <em>Epistulae Morales ad Lucilium</em> (Letters from a Stoic)</strong> — on avoiding theatrical austerity and acknowledging the reality of grief without surrender.
              </span>
            </li>
            <li className="flex items-baseline space-x-2">
              <span className="text-[10px] font-sans-clean text-neutral-600 shrink-0">[ 04 ]</span>
              <span>
                <a
                  href="https://plato.stanford.edu/entries/stoicism/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-300 hover:text-white underline underline-offset-4 decoration-neutral-700 hover:decoration-white transition-colors"
                >
                  Stanford Encyclopedia of Philosophy: Stoicism
                </a>{' '}
                — peer-reviewed scholarly analysis of Hellenistic cognitive theories of emotion and virtue ethics.
              </span>
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
            <a href="/" className="hover:text-white transition-colors">
              Manifesto
            </a>
            <a href="/whats-eating-you" className="hover:text-white transition-colors">
              Reality Check
            </a>
            <a href="https://antistoic.com" className="hover:text-white transition-colors">
              antistoic.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default WhatIsAntiStoicPage;
