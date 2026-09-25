import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sprout, Droplets, Sun, Sparkles, CheckCircle2, Waves } from 'lucide-react';
import { CROP_SEASONS } from '../data/villageData';

interface AgrarianHeartlandProps {
  currentLang: 'en' | 'hi';
  theme: 'dark' | 'light';
}

export const AgrarianHeartland: React.FC<AgrarianHeartlandProps> = ({ currentLang, theme }) => {
  const [activeSeasonIdx, setActiveSeasonIdx] = useState(0);
  const activeSeason = CROP_SEASONS[activeSeasonIdx];

  return (
    <motion.section
      id="agriculture"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="py-20 relative overflow-hidden border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2 bg-emerald-500/10 px-3.5 py-1 rounded-full border border-emerald-500/20">
            <Sprout className="w-4 h-4" />
            <span>
              {currentLang === 'en'
                ? 'Agrarian Heartland & Kinnow Groves'
                : 'राजस्थान का अन्नदाता व किन्नू का नंदनवन'}
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display-modern text-white">
            {currentLang === 'en' ? 'Bountiful Soils & Canal Waters' : 'उपजाऊ धरती, नहरी पानी और मीठा किन्नू'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-2">
            {currentLang === 'en'
              ? 'Fed by Himalayan canal tributaries, Kishanpura yields premium Kinnow mandarin oranges, golden wheat, and winter mustard oilseeds that feed families across India.'
              : 'हिमालय से निकलने वाली नहरों के पानी से सिंचित किशनपुरा के खेत हर साल लाखों टन उत्तम किन्नू, गेहूं और सरसों पैदा करते हैं।'}
          </p>
        </motion.div>

        {/* Feature Cards Grid: The Canal Miracle & The Kinnow Phenomenon */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Card 1: Canal Lifeline with Animated Water Flow Indicator */}
          <motion.div
            whileHover={{ y: -4, borderColor: 'rgba(6, 182, 212, 0.4)' }}
            transition={{ duration: 0.3 }}
            className="bg-slate-900/80 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-cyan-500/25 shadow-xl flex flex-col justify-between relative overflow-hidden"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/15 text-cyan-400 flex items-center justify-center border border-cyan-500/30">
                  <Waves className="w-6 h-6 animate-pulse" />
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-mono font-semibold text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/30">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                  <span>Vara-Bandi Hydrology</span>
                </div>
              </div>

              <div>
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider font-mono">
                  {currentLang === 'en' ? 'Hydrological Lifeline' : 'जल जीवनधारा'}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-display-modern text-white mt-1">
                  {currentLang === 'en'
                    ? 'The Canal Network & Disciplined Vara-Bandi'
                    : 'नहरी तंत्र एवं अनुशासित वारा-बंदी प्रणाली'}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {currentLang === 'en'
                  ? 'Kishanpura thrives on an ingenious gravitational canal network. Water turns are regulated through the historic "Vara-Bandi" system, where every acre receives water on fixed timed schedules day or night, ensuring equitable abundance without conflict.'
                  : 'गाँव की समृद्धि का आधार यहाँ की नहरी सिंचाई व्यवस्था है। "वारा-बंदी" के तहत हर किसान को उसकी जमीन के अनुपात में तय समय पर पानी मिलता है, जो दशकों से आपसी विश्वास और निष्पक्षता का सर्वोत्तम उदाहरण है।'}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 grid grid-cols-2 gap-4 text-xs">
              <div>
                <span className="font-bold text-white block">100% Gravity Flow</span>
                <span className="text-slate-400">{currentLang === 'en' ? 'Natural slope distribution' : 'प्राकृतिक बहाव द्वारा सिंचाई'}</span>
              </div>
              <div>
                <span className="font-bold text-white block">Pure Himalayan Silt</span>
                <span className="text-slate-400">{currentLang === 'en' ? 'Rich mineral soil replenishment' : 'खनिजों से भरपूर उपजाऊ गाद'}</span>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Kinnow Mandarin Royalty */}
          <motion.div
            whileHover={{ y: -4, borderColor: 'rgba(249, 115, 22, 0.4)' }}
            transition={{ duration: 0.3 }}
            className="bg-slate-900/80 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-orange-500/25 shadow-xl flex flex-col justify-between relative overflow-hidden"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-orange-500/15 text-orange-400 flex items-center justify-center border border-orange-500/30">
                  <Sun className="w-6 h-6 animate-spin" style={{ animationDuration: '16s' }} />
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-mono font-semibold text-orange-400 bg-orange-500/10 px-3 py-1 rounded-full border border-orange-500/30">
                  <span>Sweet Citrus Gold</span>
                </div>
              </div>

              <div>
                <span className="text-xs font-bold text-orange-400 uppercase tracking-wider font-mono">
                  {currentLang === 'en' ? 'Horticulture Excellence' : 'बागवानी का सिरमौर'}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-display-modern text-white mt-1">
                  {currentLang === 'en'
                    ? 'The Sweet Kinnow of Kishanpura'
                    : 'किशनपुरा का विश्वविख्यात मीठा किन्नू'}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {currentLang === 'en'
                  ? 'Known as the "Golden Fruit of the North", Kishanpura’s Kinnow mandarins are beloved for their glossy rind, high juice content, and sweet-tangy balance. Winter harvest from November to February brings buyers from Delhi, Mumbai, and the Middle East.'
                  : 'किशनपुरा के किन्नू का छिलका चमकदार, रस प्रचुर और स्वाद अत्यंत मीठा होता है। नवंबर से फरवरी के बीच तुड़ाई के समय पूरे गाँव के बाग सुगंध से महक उठते हैं और देश की बड़ी मंडियों में ट्रकों के काफिले रवाना होते हैं।'}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 grid grid-cols-2 gap-4 text-xs">
              <div>
                <span className="font-bold text-white block">High Brix Sweetness</span>
                <span className="text-slate-400">{currentLang === 'en' ? 'Natural sun-ripened sugar' : 'प्राकृतिक मिठास व विटामिन सी'}</span>
              </div>
              <div>
                <span className="font-bold text-white block">Direct Farm Gate</span>
                <span className="text-slate-400">{currentLang === 'en' ? 'Loaded fresh from orchards' : 'बागों से सीधे ताजा लदान'}</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Seasonal Crop Calendar Section */}
        <div className="bg-slate-900/80 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 border border-white/15 shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-400 uppercase tracking-wider font-mono">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{currentLang === 'en' ? 'Village Agriculture Calendar' : 'गाँव का फसली चक्र'}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-display-modern text-white mt-1">
                {currentLang === 'en' ? 'What Grows in Kishanpura' : 'ऋतु अनुसार प्रमुख फसलें व पैदावार'}
              </h3>
            </div>

            {/* Animated Season Selector Tabs */}
            <div className="flex items-center gap-1.5 bg-black/40 p-1.5 rounded-2xl border border-white/10 shrink-0">
              {CROP_SEASONS.map((season, idx) => {
                const isSelected = activeSeasonIdx === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveSeasonIdx(idx)}
                    className={`relative px-4 py-2 text-xs font-semibold rounded-xl transition-all cursor-pointer ${
                      isSelected ? 'text-white' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {isSelected && (
                      <motion.div
                        layoutId="activeCropSeason"
                        className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl shadow-[0_0_15px_rgba(16,185,129,0.4)]"
                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{season.name[currentLang].split('(')[0]}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Season Period Banner */}
          <div className="mb-6 p-4 bg-white/5 rounded-2xl flex items-center justify-between text-xs text-slate-300 font-medium border border-white/10 font-mono">
            <span>
              <strong className="text-white">{currentLang === 'en' ? 'Active Season: ' : 'फसल चक्र: '}</strong>
              {activeSeason.name[currentLang]}
            </span>
            <span className="text-orange-400 font-bold">{activeSeason.period[currentLang]}</span>
          </div>

          {/* Crop Cards with AnimatePresence */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSeasonIdx}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {activeSeason.crops.map((crop, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -4, borderColor: 'rgba(16, 185, 129, 0.4)' }}
                  className="p-5 rounded-2xl bg-white/5 border border-white/10 transition-all flex flex-col justify-between backdrop-blur-md shadow-lg"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs mb-2">
                      <span className="font-semibold text-emerald-400 font-mono">{crop.seasonTag}</span>
                      <span className="text-slate-400 font-hindi-display text-sm">{crop.localName}</span>
                    </div>
                    <h4 className="text-base font-bold text-white">
                      {crop.title[currentLang]}
                    </h4>
                    <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                      {crop.description[currentLang]}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center gap-1.5 text-[11px] text-slate-400 font-mono">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{currentLang === 'en' ? 'Canal Irrigated & Soil Tested' : 'नहरी पानी द्वारा सिंचित'}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
};
