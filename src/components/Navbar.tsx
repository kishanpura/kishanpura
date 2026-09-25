import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Volume2, VolumeX, Menu, X, ExternalLink, Globe, Sun, Moon, Sparkles, Share2 } from 'lucide-react';
import { VILLAGE_INFO } from '../data/villageData';
import { villageSoundscape } from '../utils/soundscape';
import { VillageLogo } from './VillageLogo';

interface NavbarProps {
  currentLang: 'en' | 'hi';
  onToggleLang: () => void;
  activeSection: string;
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  onToggleLang,
  activeSection,
  theme,
  onToggleTheme,
}) => {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    const status = villageSoundscape.toggle();
    setIsAudioPlaying(status);
  };

  const navLinks = [
    { id: 'overview', label: currentLang === 'en' ? 'Overview' : 'परिचय' },
    { id: 'map', label: currentLang === 'en' ? 'Live Map' : 'ग्राम मानचित्र' },
    { id: 'heritage', label: currentLang === 'en' ? 'Centennial' : '100 वर्ष' },
    { id: 'agriculture', label: currentLang === 'en' ? 'Kinnow & Fields' : 'कृषि व बागान' },
    { id: 'culture', label: currentLang === 'en' ? 'Culture' : 'संस्कृति' },
    { id: 'directory', label: currentLang === 'en' ? 'Directory' : 'नागरिक सेवाएँ' },
    { id: 'gallery', label: currentLang === 'en' ? 'Gallery' : 'चित्र वीथिका' },
    { id: 'faq', label: currentLang === 'en' ? 'FAQ' : 'प्रश्न' },
    { id: 'social', label: currentLang === 'en' ? 'Social Network' : 'सोशल नेटवर्क' },
    { id: 'visitor', label: currentLang === 'en' ? 'Visit & Roots' : 'यात्रा व संवाद' },
  ];

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 84;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        theme === 'dark'
          ? isScrolled
            ? 'bg-[#090D16]/85 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]'
            : 'bg-[#090D16]/60 backdrop-blur-md border-b border-transparent'
          : isScrolled
            ? 'bg-white/85 backdrop-blur-xl border-b border-slate-200/80 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.06)]'
            : 'bg-white/60 backdrop-blur-md border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Brand Official Village Logo */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => scrollTo('overview')}
            className="flex items-center gap-3 text-left focus:outline-none group cursor-pointer"
          >
            <VillageLogo size="md" variant="full" theme={theme} />
          </motion.button>

          {/* Desktop Navigation Links with animated active pill */}
          <nav className="hidden xl:flex items-center gap-1 bg-white/5 dark:bg-white/5 p-1 rounded-xl border border-white/10 dark:border-white/10 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`relative px-3.5 py-1.5 text-xs font-semibold tracking-wide transition-all rounded-lg cursor-pointer ${
                    isActive
                      ? 'text-white'
                      : theme === 'dark'
                      ? 'text-slate-300 hover:text-white'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavPill"
                      className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-lg shadow-[0_0_15px_rgba(16,185,129,0.4)]"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Action Hub: Theme Toggle, Sound Equalizer, Lang, Maps */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Dark / Light Mode Switcher */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onToggleTheme}
              title={theme === 'dark' ? 'Switch to Modern Light Mode' : 'Switch to Cyber Obsidian Dark Mode'}
              className="p-2 rounded-xl text-xs font-medium bg-white/10 dark:bg-white/5 hover:bg-white/15 text-slate-200 border border-white/10 transition-colors cursor-pointer"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400 hover:rotate-90 transition-transform duration-300" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700 hover:-rotate-12 transition-transform duration-300" />
              )}
            </motion.button>

            {/* Ambient Sound Equalizer Toggle */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleSound}
              title={isAudioPlaying ? 'Mute ambient rural sound' : 'Play peaceful rural soundscape'}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium flex items-center gap-2 transition-all cursor-pointer border ${
                isAudioPlaying
                  ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40 shadow-[0_0_15px_rgba(16,185,129,0.25)]'
                  : 'bg-white/5 hover:bg-white/10 text-slate-300 border-white/10'
              }`}
            >
              {isAudioPlaying ? (
                <>
                  <Volume2 className="w-4 h-4 text-emerald-400" />
                  <span className="flex items-center gap-0.5 h-3">
                    <motion.span
                      animate={{ height: ['4px', '14px', '6px', '16px', '4px'] }}
                      transition={{ repeat: Infinity, duration: 0.9, ease: 'easeInOut' }}
                      className="w-0.5 bg-emerald-400 rounded-full inline-block"
                    />
                    <motion.span
                      animate={{ height: ['12px', '4px', '16px', '8px', '12px'] }}
                      transition={{ repeat: Infinity, duration: 0.7, ease: 'easeInOut' }}
                      className="w-0.5 bg-cyan-400 rounded-full inline-block"
                    />
                    <motion.span
                      animate={{ height: ['6px', '16px', '8px', '4px', '6px'] }}
                      transition={{ repeat: Infinity, duration: 0.85, ease: 'easeInOut' }}
                      className="w-0.5 bg-emerald-400 rounded-full inline-block"
                    />
                  </span>
                  <span className="hidden md:inline text-[11px] font-semibold text-emerald-300">
                    Audio Live
                  </span>
                </>
              ) : (
                <>
                  <VolumeX className="w-4 h-4 text-slate-400" />
                  <span className="hidden md:inline text-[11px]">Audio</span>
                </>
              )}
            </motion.button>

            {/* Language Switcher */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onToggleLang}
              className="px-2.5 py-1.5 rounded-xl text-xs font-semibold bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Globe className="w-3.5 h-3.5 text-cyan-400" />
              <span>{currentLang === 'en' ? 'हिंदी' : 'EN'}</span>
            </motion.button>

            {/* Quick Share to Social Network */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollTo('social')}
              title={currentLang === 'en' ? 'Share Village Portfolio on Social Networks' : 'सोशल नेटवर्क पर शेयर करें'}
              className="p-2 rounded-xl text-xs font-semibold bg-white/10 hover:bg-white/15 text-cyan-300 border border-cyan-500/30 flex items-center gap-1.5 transition-all cursor-pointer shadow-xs"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span className="hidden lg:inline text-[11px] font-mono">Share</span>
            </motion.button>

            {/* Google Maps External Launch Pill */}
            <motion.a
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(249,115,22,0.4)' }}
              whileTap={{ scale: 0.95 }}
              href={VILLAGE_INFO.location.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-md transition-all cursor-pointer"
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>Maps</span>
              <ExternalLink className="w-3 h-3 opacity-90" />
            </motion.a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-xl bg-white/10 text-white hover:bg-white/20 cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Animated Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`xl:hidden px-4 pt-2 pb-6 space-y-2 shadow-2xl overflow-hidden border-b ${
              theme === 'dark'
                ? 'bg-[#090D16]/95 border-white/10 backdrop-blur-xl'
                : 'bg-white/95 border-slate-200 backdrop-blur-xl'
            }`}
          >
            <div className="grid grid-cols-2 gap-2 pt-2 pb-3 border-b border-white/10">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="text-left px-3 py-2 text-sm font-medium rounded-lg hover:bg-white/10 text-slate-200 cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
            </div>

            <div className="pt-2 flex items-center justify-between">
              <a
                href={VILLAGE_INFO.location.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-semibold text-orange-400 hover:underline"
              >
                <MapPin className="w-4 h-4" />
                <span>{currentLang === 'en' ? 'Open in Google Maps' : 'गूगल मैप्स पर देखें'}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <span className="text-xs text-slate-400 font-mono">PIN 335062</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
