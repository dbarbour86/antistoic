import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-center sm:text-left space-y-1">
          <h2 className="font-serif-display text-2xl text-white font-normal">
            AntiStoic
          </h2>
          <p className="text-[10px] font-sans-clean tracking-[0.3em] uppercase text-neutral-400">
            Think Differently.
          </p>
        </div>

        <p className="text-[10px] font-sans-clean tracking-[0.25em] uppercase text-neutral-500">
          © {new Date().getFullYear()} AntiStoic. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

