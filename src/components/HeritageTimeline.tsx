import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { History, Award, BookOpen, ChevronRight, Sparkles } from 'lucide-react';
import { VILLAGE_TIMELINE } from '../data/villageData';

interface HeritageTimelineProps {
  currentLang: 'en' | 'hi';
  theme: 'dark' | 'light';
}

export const HeritageTimeline: React.FC<HeritageTimelineProps> = ({ currentLang, theme }) => {
  const [selectedMilestone, setSelectedMilestone] = useState(0);

  return (
    <motion.section
      id="heritage"
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
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-400 mb-2 bg-orange-500/10 px-3.5 py-1 rounded-full border border-orange-500/20">
            <History className="w-4 h-4" />
            <span>
              {currentLang === 'en'
                ? 'Centennial Heritage & Chronicle'
                : 'शताब्दी गाथा एवं ऐतिहासिक पड़ाव'}
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display-modern text-white">
            {currentLang === 'en' ? 'A Century of Resilience (1926–2026)' : '100 वर्षों की गौरवशाली यात्रा'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-2">
            {currentLang === 'en'
              ? 'From early desert borderlands and the founding of our historic school in 1926, to the life-giving canal networks and today’s premier horticulture capital.'
              : '1926 में विद्यालय की नींव से लेकर नहरी क्रांति, हरित क्रांति और आज के आधुनिक बागवानी केंद्र बनने की अविस्मरणीय कहानी।'}
          </p>
        </motion.div>

        {/* Centennial School Special Spotlight Banner with Glowing Cyber Aesthetics */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mb-14 p-6 sm:p-9 rounded-3xl bg-gradient-to-r from-emerald-950/80 via-slate-900 to-teal-950/80 text-white shadow-2xl relative overflow-hidden border border-emerald-500/40"
        >
          {/* Animated Ambient Light Shimmer */}
          <motion.div
            animate={{ x: ['-100%', '200%'] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
            className="absolute top-0 bottom-0 w-72 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 pointer-events-none"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-emerald-300">
                <Award className="w-4 h-4 text-amber-400" />
                <span>
                  {currentLang === 'en'
                    ? '1926–2026: 100-Year Milestone'
                    : '1926–2026: 100 गौरवशाली वर्ष'}
                </span>
                <span className="bg-amber-400/20 text-amber-300 text-[10px] px-2.5 py-0.5 rounded-full font-bold border border-amber-400/30">
                  CENTENNIAL BEACON
                </span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-extrabold font-display-modern tracking-tight text-white">
                {currentLang === 'en'
                  ? 'GSSS Kishanpura Uttaradha · A Century of Enlightening Minds'
                  : 'राजकीय उच्च माध्यमिक विद्यालय किशनपुरा (उतरादा) · ज्ञान की एक सदी'}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed max-w-2xl">
                {currentLang === 'en'
                  ? 'Founded in 1926, GSSS Kishanpura Uttaradha stands as a living testament to our ancestors’ visionary belief in education. It has provided free, accessible schooling for over five generations, producing teachers, military leaders, doctors, and progressive agriculturists.'
                  : '1926 में स्थापित यह विद्यालय गाँव के पूर्वजों की दूरदर्शिता का जीवंत प्रमाण है। पाँच से अधिक पीढ़ियों को शिक्षित कर इस प्रांगण ने देश को सैनिक, शिक्षक, चिकित्सक और प्रगतिशील नेतृत्व प्रदान किया है।'}
              </p>
            </div>

            <div className="lg:col-span-4 bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-emerald-500/30 text-center relative shadow-lg">
              <motion.div
                animate={{ scale: [1, 1.06, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="text-6xl font-extrabold font-display-modern text-amber-400 flex items-center justify-center gap-2"
              >
                <span>100</span>
                <Sparkles className="w-7 h-7 text-amber-300" />
              </motion.div>
              <div className="text-xs uppercase font-bold tracking-wider text-emerald-300 mt-1">
                {currentLang === 'en' ? 'Years of Continuous Education' : 'वर्षों की सतत शिक्षा'}
              </div>
              <div className="text-[11px] text-slate-400 mt-2 border-t border-white/10 pt-2 font-mono">
                {currentLang === 'en'
                  ? 'Est. 1926 · Sadulshahar Circle'
                  : 'सादुलशहर अंचल का ऐतिहासिक शिक्षा केंद्र'}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Interactive Chronological Timeline Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Era Navigation Buttons */}
          <div className="lg:col-span-4 space-y-2.5">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 font-mono">
              {currentLang === 'en' ? '// CHRONOLOGICAL CHAPTERS' : '// ऐतिहासिक अध्याय'}
            </div>
            {VILLAGE_TIMELINE.map((item, idx) => {
              const isSelected = selectedMilestone === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setSelectedMilestone(idx)}
                  className={`w-full text-left p-4 rounded-2xl transition-all border flex items-center justify-between group relative cursor-pointer ${
                    isSelected
                      ? 'bg-slate-900 border-emerald-500/50 shadow-[0_0_20px_rgba(16,185,129,0.2)]'
                      : 'bg-white/5 border-white/10 hover:bg-white/10 text-slate-300'
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="activeTimelinePill"
                      className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-emerald-400 to-teal-400 rounded-l-2xl shadow-[0_0_10px_#10B981]"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  <div className="pl-1">
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-sm font-bold font-mono ${
                          isSelected ? 'text-emerald-400' : 'text-slate-400'
                        }`}
                      >
                        {item.year}
                      </span>
                      <span aria-hidden="true" className="text-slate-600">·</span>
                      <span className="text-xs font-semibold text-white">
                        {item.era[currentLang]}
                      </span>
                    </div>
                    <div className="text-xs text-slate-400 mt-1 font-medium line-clamp-1">
                      {item.title[currentLang]}
                    </div>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${
                      isSelected
                        ? 'text-emerald-400 translate-x-1'
                        : 'text-slate-600 group-hover:translate-x-0.5'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Active Era Expanded Reader with AnimatePresence */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedMilestone}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="bg-slate-900/90 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 border border-white/15 shadow-2xl space-y-5"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-5">
                  <div>
                    <span className="text-xs font-bold text-orange-400 uppercase tracking-wider font-mono">
                      {VILLAGE_TIMELINE[selectedMilestone].era[currentLang]}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold font-display-modern text-white mt-1">
                      {VILLAGE_TIMELINE[selectedMilestone].title[currentLang]}
                    </h3>
                  </div>
                  <div className="px-4 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 font-mono font-bold text-xl text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                    {VILLAGE_TIMELINE[selectedMilestone].year}
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                  {VILLAGE_TIMELINE[selectedMilestone].summary[currentLang]}
                </p>

                <div className="p-4 bg-emerald-500/10 rounded-2xl border border-emerald-500/25">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-400 uppercase tracking-wider mb-1 font-mono">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>{currentLang === 'en' ? 'Lasting Significance' : 'गाँव के लिए महत्व'}</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-normal">
                    {VILLAGE_TIMELINE[selectedMilestone].significance[currentLang]}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
