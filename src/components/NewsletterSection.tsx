import React, { useState } from 'react';
import { ArrowUpRight, Check } from 'lucide-react';

export const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setSubmitted(true);
  };

  return (
    <section id="study" className="py-36 md:py-52 bg-black text-white px-6 md:px-12 border-b border-white/10 relative">
      <div className="max-w-2xl mx-auto text-center space-y-12">
        
        {/* Heading */}
        <div className="space-y-4">
          <span className="text-[11px] font-sans-clean tracking-[0.4em] text-neutral-500 uppercase block">
            SECTION VI — CONTINUOUS PRACTICE
          </span>
          <h2 className="font-serif-display text-5xl sm:text-7xl md:text-8xl text-white font-normal tracking-tight">
            Join the Study
          </h2>
        </div>

        {/* Subheading & Small Paragraph */}
        <div className="space-y-4 font-serif-editorial text-2xl sm:text-3xl text-neutral-300 font-light">
          <p>Occasional thoughts. No noise.</p>
          <p className="text-neutral-500 text-lg sm:text-xl italic font-serif-editorial pt-2">
            The work is never finished. Neither are you.
          </p>
        </div>

        {submitted ? (
          <div className="p-8 bg-neutral-950 border border-white/20 space-y-4 max-w-md mx-auto">
            <div className="inline-flex p-3 bg-white/10 rounded-full text-white mb-2">
              <Check size={20} />
            </div>
            <h3 className="font-serif-display text-2xl text-white">Welcome to the Study.</h3>
            <p className="font-serif-editorial text-base text-neutral-400">
              You are enrolled in the dispatch archive.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4 pt-4">
            <div className="relative">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address..."
                className="w-full bg-neutral-950 border border-white/20 px-6 py-4 text-base font-serif-editorial text-white placeholder-neutral-500 focus:outline-none focus:border-white transition-colors text-center"
              />
            </div>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center space-x-3 text-xs uppercase tracking-[0.3em] font-sans-clean bg-white text-black py-4 hover:bg-neutral-200 transition-all duration-300 cursor-pointer font-medium"
            >
              <span>Join</span>
              <ArrowUpRight size={14} />
            </button>
          </form>
        )}

        <p className="text-[10px] font-sans-clean tracking-[0.3em] uppercase text-neutral-600">
          UNSUBSCRIBE AT ANY MOMENT • NO SPAM
        </p>
      </div>
    </section>
  );
};

