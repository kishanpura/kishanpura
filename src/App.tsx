/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { LiveTicker } from './components/LiveTicker';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { InteractiveMap } from './components/InteractiveMap';
import { HeritageTimeline } from './components/HeritageTimeline';
import { AgrarianHeartland } from './components/AgrarianHeartland';
import { CultureTraditions } from './components/CultureTraditions';
import { PublicDirectory } from './components/PublicDirectory';
import { PhotoGallery } from './components/PhotoGallery';
import { VillageFAQ } from './components/VillageFAQ';
import { VisitorGuide } from './components/VisitorGuide';
import { Footer } from './components/Footer';

export default function App() {
  const [currentLang, setCurrentLang] = useState<'en' | 'hi'>('en');
  const [activeSection, setActiveSection] = useState<string>('overview');
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  const toggleLanguage = () => {
    setCurrentLang((prev) => (prev === 'en' ? 'hi' : 'en'));
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'overview',
        'map',
        'heritage',
        'agriculture',
        'culture',
        'directory',
        'gallery',
        'faq',
        'visitor',
      ];
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 84;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-500 flex flex-col font-sans relative ${
        theme === 'dark'
          ? 'bg-[#090D16] text-[#F1F5F9] bg-modern-grid selection:bg-emerald-500/30 selection:text-emerald-300'
          : 'bg-[#F8FAFC] text-[#0F172A] bg-modern-light-grid selection:bg-emerald-500/20 selection:text-emerald-700'
      }`}
    >
      {/* Scroll Progress Bar at the absolute top */}
      <ScrollProgressBar />

      {/* Navigation Header */}
      <Navbar
        currentLang={currentLang}
        onToggleLang={toggleLanguage}
        activeSection={activeSection}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      {/* Live Marquee Ticker right under Navbar */}
      <div className="pt-18">
        <LiveTicker currentLang={currentLang} theme={theme} />
      </div>

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section & Identity */}
        <HeroSection
          currentLang={currentLang}
          onExploreMap={() => scrollToSection('map')}
          onExploreHeritage={() => scrollToSection('heritage')}
          theme={theme}
        />

        {/* Interactive Geographical Map & POIs */}
        <InteractiveMap currentLang={currentLang} theme={theme} />

        {/* 100-Year Centennial Heritage Chronicle (1926-2026) */}
        <HeritageTimeline currentLang={currentLang} theme={theme} />

        {/* Agrarian Heartland: Canal Network & Kinnow Groves */}
        <AgrarianHeartland currentLang={currentLang} theme={theme} />

        {/* Culture, Chaupal & Community Life */}
        <CultureTraditions currentLang={currentLang} theme={theme} />

        {/* Public Services Directory & Healthcare/Panchayat (PIN 335062) */}
        <PublicDirectory currentLang={currentLang} theme={theme} />

        {/* Visual Archive & Photo Gallery */}
        <PhotoGallery currentLang={currentLang} theme={theme} />

        {/* SEO Village Knowledge Hub & Structured FAQ */}
        <VillageFAQ currentLang={currentLang} theme={theme} />

        {/* Visitor Guide, Connectivity & Diaspora Guestbook */}
        <VisitorGuide currentLang={currentLang} theme={theme} />
      </main>

      {/* Footer */}
      <Footer currentLang={currentLang} theme={theme} />
    </div>
  );
}
