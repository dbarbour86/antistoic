import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Menu, X } from 'lucide-react';

interface NavigationProps {
  onNavigate: (sectionId: string) => void;
  isAudioPlaying: boolean;
  toggleAudio: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  onNavigate,
  isAudioPlaying,
  toggleAudio
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Why', id: 'why' },
    { label: 'Reflection', id: 'reflection' },
    { label: 'Principles', id: 'principles' },
    { label: 'Manifesto', id: 'manifesto' },
    { label: 'Join', id: 'study' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-black/90 backdrop-blur-md py-4 border-b border-white/10'
          : 'bg-transparent py-6 md:py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand */}
        <button
          onClick={() => handleLinkClick('hero')}
          className="text-left group cursor-pointer"
        >
          <span className="font-serif-display text-xl md:text-2xl tracking-tight text-white font-medium group-hover:opacity-80 transition-opacity block">
            AntiStoic
          </span>
          <span className="block text-[9px] tracking-[0.3em] text-neutral-400 uppercase font-sans-clean mt-0.5">
            Think Differently.
          </span>
        </button>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center space-x-12 text-[11px] tracking-[0.25em] font-sans-clean uppercase text-neutral-400">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleLinkClick(item.id)}
              className="hover:text-white transition-colors duration-300 cursor-pointer relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-white hover:after:w-full after:transition-all after:duration-300"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Ambient Audio Switch */}
        <div className="hidden md:flex items-center space-x-6">
          <button
            onClick={toggleAudio}
            title={isAudioPlaying ? 'Mute ambient tone' : 'Enable ambient tone'}
            className="flex items-center space-x-2.5 text-[10px] tracking-[0.2em] font-sans-clean uppercase text-neutral-400 hover:text-white transition-colors cursor-pointer border border-white/10 hover:border-white/30 px-3.5 py-1.5 rounded-full"
          >
            {isAudioPlaying ? <Volume2 size={12} /> : <VolumeX size={12} />}
            <span>{isAudioPlaying ? 'SOUND ON' : 'SOUND OFF'}</span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center space-x-4 md:hidden">
          <button
            onClick={toggleAudio}
            className="p-2 text-neutral-400 hover:text-white border border-white/10 rounded-full"
          >
            {isAudioPlaying ? <Volume2 size={14} /> : <VolumeX size={14} />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-white hover:opacity-80 transition-opacity"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[65px] bg-black/95 backdrop-blur-xl z-40 px-8 py-12 flex flex-col justify-between border-t border-white/10">
          <div className="flex flex-col space-y-8 text-xl font-serif-display tracking-wider">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleLinkClick(item.id)}
                className="text-left text-neutral-300 hover:text-white py-3 border-b border-white/10 flex justify-between items-center"
              >
                <span>{item.label}</span>
              </button>
            ))}
          </div>

          <div className="pt-8 border-t border-white/10">
            <p className="text-[10px] text-neutral-500 font-sans-clean text-center tracking-[0.3em] uppercase">
              AntiStoic — Ancient Philosophy for Modern Lives
            </p>
          </div>
        </div>
      )}
    </nav>
  );
};

