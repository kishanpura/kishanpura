import React from 'react';
import { motion } from 'motion/react';
import { MapPin, ArrowUp, ExternalLink, Heart, Sparkles } from 'lucide-react';
import { VILLAGE_INFO } from '../data/villageData';

interface FooterProps {
  currentLang: 'en' | 'hi';
  theme: 'dark' | 'light';
}

export const Footer: React.FC<FooterProps> = ({ currentLang, theme }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 0.6 }}
      className="bg-[#050811] text-slate-300 pt-16 pb-12 border-t border-white/10 relative overflow-hidden"
    >
      {/* Subtle Bottom Ambient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-emerald-500/10 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/10">
          {/* Brand & Coordinates */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white flex items-center justify-center font-bold text-lg font-display-modern shadow-[0_0_20px_rgba(16,185,129,0.35)] border border-emerald-400/40">
                K
              </div>
              <div>
                <span className="font-display-modern text-xl font-bold tracking-tight text-white block">
                  {currentLang === 'en' ? 'Kishanpura (Utrada)' : 'किशनपुरा (उतरादा)'}
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  Sadulshahar Tehsil · PIN 335062 · Rajasthan
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              {currentLang === 'en'
                ? 'Official digital archive celebrating the agrarian legacy, Himalayan canal lifelines, centenary public school (Est. 1926), and kinship of Kishanpura.'
                : 'गाँव की नहरी विरासत, किन्नू बागवानी, 1926 से स्थापित शताब्दी विद्यालय और आपसी सद्भाव को समर्पित डिजिटल अभिलेखागार।'}
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs font-mono text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-300">29.8885° N, 74.2898° E</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <a
                href={VILLAGE_INFO.location.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-400 hover:text-orange-300 hover:underline flex items-center gap-1 font-semibold"
              >
                <span>Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-400 font-mono">
              {currentLang === 'en' ? '// SECTIONS' : '// अनुभाग'}
            </div>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#map" className="hover:text-emerald-400 transition-colors">
                  {currentLang === 'en' ? 'Interactive Map & POIs' : 'ग्राम मानचित्र व स्थल'}
                </a>
              </li>
              <li>
                <a href="#heritage" className="hover:text-emerald-400 transition-colors">
                  {currentLang === 'en' ? 'Centennial History (1926–2026)' : '100 वर्ष का इतिहास'}
                </a>
              </li>
              <li>
                <a href="#agriculture" className="hover:text-emerald-400 transition-colors">
                  {currentLang === 'en' ? 'Canal Waters & Kinnow Groves' : 'नहरी पानी व किन्नू बागान'}
                </a>
              </li>
              <li>
                <a href="#culture" className="hover:text-emerald-400 transition-colors">
                  {currentLang === 'en' ? 'Village Chaupal & Tradition' : 'चौपाल व संस्कृति'}
                </a>
              </li>
              <li>
                <a href="#directory" className="hover:text-emerald-400 transition-colors">
                  {currentLang === 'en' ? 'Citizen Services (PIN 335062)' : 'नागरिक सेवाएँ'}
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-emerald-400 transition-colors">
                  {currentLang === 'en' ? 'Village Knowledge Hub & FAQ' : 'ज्ञान केंद्र व प्रश्न'}
                </a>
              </li>
              <li>
                <a href="#visitor" className="hover:text-emerald-400 transition-colors">
                  {currentLang === 'en' ? 'Guestbook & Travel Roots' : 'अतिथि पंजिका व संपर्क'}
                </a>
              </li>
            </ul>
          </div>

          {/* Administrative Info */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-400 font-mono">
              {currentLang === 'en' ? '// ADMINISTRATION' : '// प्रशासनिक विवरण'}
            </div>
            <div className="space-y-1.5 text-xs text-slate-400 font-mono">
              <div>
                <span className="text-slate-500">Gram Panchayat:</span> Kishanpura Utrada
              </div>
              <div>
                <span className="text-slate-500">Tehsil:</span> Sadulshahar
              </div>
              <div>
                <span className="text-slate-500">District:</span> Sri Ganganagar / Hanumangarh Belt
              </div>
              <div>
                <span className="text-slate-500">Postal PIN:</span> 335062 (Kishanpura B.O.)
              </div>
              <div>
                <span className="text-slate-500">State / Region:</span> Rajasthan, India
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div className="flex items-center gap-1.5 text-center sm:text-left font-mono">
            <span>Built for the village of</span>
            <span className="text-slate-300 font-bold">Kishanpura</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-current inline mx-1" />
            <span>& its diaspora worldwide.</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="font-mono text-emerald-400 text-[11px]">1926–2026 CENTENNIAL</span>
            <motion.button
              whileHover={{ scale: 1.08, boxShadow: '0 0 15px rgba(16,185,129,0.4)' }}
              whileTap={{ scale: 0.92 }}
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-all flex items-center gap-1.5 border border-white/15 cursor-pointer"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-[11px] font-bold">TOP</span>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};
