import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Intro } from './components/Intro';
import { PrinciplesSection } from './components/PrinciplesSection';
import { ManifestoSection } from './components/ManifestoSection';
import { MementoMoriBreak } from './components/MementoMoriBreak';
import { NewsletterSection } from './components/NewsletterSection';
import { Footer } from './components/Footer';
import { AmbientAudio } from './components/AmbientAudio';

export default function App() {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const toggleAudio = () => {
    setIsAudioPlaying((prev) => !prev);
  };

  return (
    <div className="bg-black text-white min-h-screen relative font-sans-clean selection:bg-neutral-800 selection:text-white">
      {/* Background grain noise layer */}
      <div className="fixed inset-0 bg-grain pointer-events-none z-30 opacity-30" />

      {/* Navigation */}
      <Navigation
        onNavigate={scrollToSection}
        isAudioPlaying={isAudioPlaying}
        toggleAudio={toggleAudio}
      />

      {/* Main Flow — 6 Sections in Exact Specified Order */}
      <main className="relative z-10">
        {/* SECTION 1: HERO */}
        <Hero onExplore={() => scrollToSection('why')} />

        {/* SECTION 2: WHY ANTISTOIC EXISTS */}
        <Intro />

        {/* SECTION 3: THE FIVE PRINCIPLES */}
        <PrinciplesSection />

        {/* SECTION 4: MANIFESTO */}
        <ManifestoSection />

        {/* SECTION 5: MEMENTO MORI */}
        <MementoMoriBreak />

        {/* SECTION 6: CLOSING */}
        <NewsletterSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Ambient sound generator */}
      <AmbientAudio isPlaying={isAudioPlaying} />
    </div>
  );
}

