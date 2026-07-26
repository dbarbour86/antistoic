import React, { useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import joinBg from '../assets/join_bg.png';

const KIT_FORM_ID = '9728169';
const KIT_FORM_UID = '357b8e3f67';

export const NewsletterSection: React.FC = () => {
  useEffect(() => {
    const existingScript = document.querySelector(
      'script[src="https://f.convertkit.com/ckjs/ck.5.js"]'
    );

    if (existingScript) {
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://f.convertkit.com/ckjs/ck.5.js';
    script.async = true;
    script.setAttribute('data-kit-script', 'true');

    document.body.appendChild(script);
  }, []);

  const kitOptions = JSON.stringify({
    settings: {
      after_subscribe: {
        action: 'message',
        success_message:
          "You're in.\n\nNow, confirm your email and the next letter will arrive when it's ready.",
        redirect_url: '',
      },
      powered_by: {
        show: true,
      },
      recaptcha: {
        enabled: false,
      },
      return_visitor: {
        action: 'custom_content',
        custom_content: "YOU'RE ALREADY IN.\nWait for the next letter.",
      },
    },
    version: '5',
  });

  return (
    <section
      id="study"
      className="py-36 md:py-52 bg-black text-white px-6 md:px-12 border-b border-white/10 relative overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-no-repeat bg-cover pointer-events-none opacity-20 mix-blend-screen"
        style={{
          backgroundImage: `url(${joinBg})`,
          backgroundPosition: 'right center',
        }}
      />

      <div className="max-w-2xl mx-auto text-center space-y-12 relative z-10">
        <div className="space-y-4">
          <span className="text-[11px] font-sans-clean tracking-[0.4em] text-neutral-500 uppercase block">
            SECTION VI — CONTINUOUS PRACTICE
          </span>

          <h2 className="font-serif-display text-5xl sm:text-7xl md:text-8xl text-white font-normal tracking-tight">
            Join the Study
          </h2>
        </div>

        <div className="space-y-4 font-serif-editorial text-2xl sm:text-3xl text-neutral-300 font-light">
          <p>Occasional thoughts. No noise.</p>

          <p className="text-neutral-500 text-lg sm:text-xl italic font-serif-editorial pt-2">
            The work is never finished. Neither are you.
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <form
            action={`https://app.kit.com/forms/${KIT_FORM_ID}/subscriptions`}
            method="post"
            className="seva-form formkit-form space-y-4 pt-4"
            data-sv-form={KIT_FORM_ID}
            data-uid={KIT_FORM_UID}
            data-format="inline"
            data-version="5"
            data-options={kitOptions}
          >
            <ul
              className="formkit-alert formkit-alert-error text-red-400 font-sans-clean text-xs"
              data-element="errors"
              data-group="alert"
            />

            <div
              data-element="fields"
              data-stacked="true"
              className="seva-fields formkit-fields space-y-4"
            >
              <div className="formkit-field">
                <input
                  className="formkit-input w-full bg-neutral-950 border border-white/20 px-6 py-4 text-base font-serif-editorial text-white placeholder-neutral-500 focus:outline-none focus:border-white transition-colors text-center"
                  name="email_address"
                  aria-label="Email Address"
                  placeholder="Enter your email address..."
                  autoComplete="email"
                  required
                  type="email"
                />
              </div>

              <button
                data-element="submit"
                type="submit"
                className="formkit-submit w-full inline-flex items-center justify-center space-x-3 text-xs uppercase tracking-[0.3em] font-sans-clean bg-white text-black py-4 hover:bg-neutral-200 transition-all duration-300 cursor-pointer font-medium"
              >
                <div className="formkit-spinner" aria-hidden="true">
                  <div />
                  <div />
                  <div />
                </div>

                <span className="inline-flex items-center justify-center gap-3">
                  Join
                  <ArrowUpRight size={14} />
                </span>
              </button>
            </div>
          </form>
        </div>

        <p className="text-[10px] font-sans-clean tracking-[0.3em] uppercase text-neutral-600">
          UNSUBSCRIBE AT ANY MOMENT • NO SPAM
        </p>
      </div>
    </section>
  );
};