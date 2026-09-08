import React from 'react';

interface KeepQuestioningProps {
  currentRoute: '/feel-lost-in-life' | '/feel-behind-in-life' | '/afraid-to-start-over';
}

export const KeepQuestioning: React.FC<KeepQuestioningProps> = ({ currentRoute }) => {
  const essays = [
    {
      route: '/feel-lost-in-life',
      label: 'FEELING LOST IN LIFE',
      dek: 'Why you may not need more clarity—and the hidden cost of waiting for certainty.',
    },
    {
      route: '/feel-behind-in-life',
      label: 'FEELING BEHIND IN LIFE',
      dek: 'Behind whom? Interrogating the timeline and separating other people’s milestones from your own.',
    },
    {
      route: '/afraid-to-start-over',
      label: 'AFRAID TO START OVER',
      dek: 'Counting the two costs: what leaving costs today versus what staying costs over five years.',
    },
  ];

  const related = essays.filter((e) => e.route !== currentRoute);

  return (
    <section
      aria-labelledby="heading-keep-questioning"
      className="my-16 md:my-24 pt-12 border-t border-white/10"
    >
      <div className="flex items-center justify-between mb-8">
        <span
          id="heading-keep-questioning"
          className="text-[10px] font-sans-clean tracking-[0.35em] text-neutral-500 uppercase block"
        >
          RELATED INQUIRIES &middot; KEEP QUESTIONING
        </span>
        <a
          href="/what-is-antistoic"
          className="text-[10px] font-sans-clean tracking-[0.25em] uppercase text-neutral-500 hover:text-white transition-colors border-b border-neutral-800 hover:border-white pb-0.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white"
        >
          THE PHILOSOPHY &rarr;
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {related.map((item) => (
          <a
            key={item.route}
            href={item.route}
            className="p-6 sm:p-7 border border-white/10 hover:border-white/40 bg-neutral-950/60 hover:bg-neutral-950 transition-all duration-300 group block focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white"
          >
            <span className="text-[9px] font-sans-clean tracking-[0.25em] text-neutral-500 uppercase block mb-2 group-hover:text-neutral-300 transition-colors">
              ESSAY &middot; READ
            </span>
            <h3 className="font-serif-display text-2xl text-white font-normal mb-2 group-hover:translate-x-0.5 transition-transform">
              {item.label} &rarr;
            </h3>
            <p className="font-serif-editorial text-base text-neutral-400 font-light leading-relaxed">
              {item.dek}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
};
export default KeepQuestioning;
