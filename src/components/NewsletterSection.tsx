import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import joinBg from '../assets/join_bg.png';

const getCkid = () => {
  if (typeof window === 'undefined') return '';
  const key = 'ckid';
  let val = localStorage.getItem(key);
  if (!val) {
    val = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      const r = (Math.random() * 16) | 0;
      const v = c === 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
    localStorage.setItem(key, val);
  }
  return val;
};

export const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setStatus('error');
      return;
    }

    setStatus('loading');

    try {
      const ckid = getCkid();
      // Uses new FormData(form) which automatically collects email_address from the input field
      const formData = new FormData(e.currentTarget);
      formData.append('token', '');
      formData.append('referrer', document.referrer || '');
      formData.append('host', window.location.href);
      formData.append('search', window.location.search || '');
      formData.append('user', ckid);
      formData.append('ckjs_version', '6');

      const response = await fetch('https://app.kit.com/forms/9728169/subscriptions', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json',
          'X-CKJS-Version': '6'
        }
      });

      if (!response.ok) {
        throw new Error(`Server returned HTTP status ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();
      if (data.status === 'success') {
        setStatus('success');
      } else {
        const detailMsg = data.errors?.messages?.join(' ') || 'Status check failed on subscriber registration.';
        throw new Error(detailMsg);
      }
    } catch (err: any) {
      console.error('AntiStoic subscription submission error:', err);
      setStatus('error');
    }
  };

  return (
    <section id="study" className="py-36 md:py-52 bg-black text-white px-6 md:px-12 border-b border-white/10 relative overflow-hidden">
      {/* Background Image (very faint, ~20% visibility) */}
      <div
        className="absolute inset-0 bg-no-repeat bg-cover pointer-events-none opacity-20 mix-blend-screen"
        style={{
          backgroundImage: `url(${joinBg})`,
          backgroundPosition: 'right center',
        }}
      />

      <div className="max-w-2xl mx-auto text-center space-y-12 relative z-10">
        
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

        {status === 'success' ? (
          <div className="space-y-6 pt-4">
            <h3 className="font-serif-display text-4xl sm:text-5xl md:text-6xl text-white font-normal uppercase tracking-tight">
              YOU'RE IN.
            </h3>
            <div className="font-serif-editorial text-xl sm:text-2xl text-neutral-400 font-light leading-relaxed max-w-md mx-auto space-y-2">
              <p>Now, confirm your email.</p>
              <p>The next letter will arrive when it's ready.</p>
            </div>
          </div>
        ) : (
          <div className="max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="space-y-4 pt-4">
              <div className="relative">
                <input
                  name="email_address"
                  type="email"
                  autoComplete="email"
                  required
                  disabled={status === 'loading'}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address..."
                  className="w-full bg-neutral-950 border border-white/20 px-6 py-4 text-base font-serif-editorial text-white placeholder-neutral-500 focus:outline-none focus:border-white transition-colors text-center disabled:opacity-50"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full inline-flex items-center justify-center space-x-3 text-xs uppercase tracking-[0.3em] font-sans-clean bg-white text-black py-4 hover:bg-neutral-200 transition-all duration-300 cursor-pointer font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>{status === 'loading' ? 'Processing...' : 'Join'}</span>
                <ArrowUpRight size={14} />
              </button>
            </form>

            {status === 'error' && (
              <div className="text-red-500/80 font-sans-clean text-[10px] tracking-wider uppercase pt-6 space-y-1">
                <p>Something went wrong.</p>
                <p>Try again.</p>
              </div>
            )}
          </div>
        )}

        <p className="text-[10px] font-sans-clean tracking-[0.3em] uppercase text-neutral-600">
          UNSUBSCRIBE AT ANY MOMENT • NO SPAM
        </p>
      </div>
    </section>
  );
};
