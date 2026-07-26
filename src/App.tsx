import React, { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Intro } from './components/Intro';
import { DailyReflection } from './components/DailyReflection';
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

  // Keyboard navigation & control accelerators
  const navigateToAdjacentSection = (direction: number) => {
    const sections = ['hero', 'why', 'reflection', 'principles', 'manifesto', 'memento-mori', 'study'];
    
    let closestIndex = 0;
    let minDistance = Infinity;

    sections.forEach((id, idx) => {
      const el = document.getElementById(id);
      if (el) {
        const rect = el.getBoundingClientRect();
        const distance = Math.abs(rect.top);
        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = idx;
        }
      }
    });

    const nextIndex = Math.max(0, Math.min(sections.length - 1, closestIndex + direction));
    scrollToSection(sections[nextIndex]);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept when user is typing in forms/inputs
      if (document.activeElement?.tagName === 'INPUT' || document.activeElement?.tagName === 'TEXTAREA') {
        return;
      }

      const key = e.key.toLowerCase();

      // Audio Toggle shortcut ('M')
      if (key === 'm') {
        e.preventDefault();
        toggleAudio();
      }

      // Section Navigation shortcuts (Arrow keys, J/K keys)
      if (key === 'arrowdown' || key === 'arrowright' || key === 'j') {
        e.preventDefault();
        navigateToAdjacentSection(1);
      } else if (key === 'arrowup' || key === 'arrowleft' || key === 'k') {
        e.preventDefault();
        navigateToAdjacentSection(-1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="bg-black text-white min-h-screen relative font-sans-clean selection:bg-neutral-800 selection:text-white">
      {/* Global static grain overlay */}
      <div className="bg-global-grain" />

      {/* Navigation */}
      <Navigation
        onNavigate={scrollToSection}
        isAudioPlaying={isAudioPlaying}
        toggleAudio={toggleAudio}
      />

      {/* Main Flow — 7 Sections in Exact Specified Order */}
      <main className="relative z-10">
        {/* SECTION 1: HERO */}
        <Hero onExplore={() => scrollToSection('why')} />

        {/* SECTION 2: WHY ANTISTOIC EXISTS */}
        <Intro />

        {/* SECTION 2.5: DAILY REFLECTION */}
        <DailyReflection />

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
