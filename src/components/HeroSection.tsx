import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import {
  MapPin,
  Navigation,
  Compass,
  Calendar,
  ArrowRight,
  Sun,
  Award,
  Sparkles,
  Droplet,
  CloudSun,
  ShieldCheck,
} from 'lucide-react';
import { VILLAGE_INFO, VILLAGE_STATS } from '../data/villageData';

interface HeroSectionProps {
  currentLang: 'en' | 'hi';
  onExploreMap: () => void;
  onExploreHeritage: () => void;
  theme: 'dark' | 'light';
}

const AnimatedCounter: React.FC<{ value: string }> = ({ value }) => {
  const numericMatch = value.match(/\d+/);
  const targetNum = numericMatch ? parseInt(numericMatch[0], 10) : null;
  const suffix = value.replace(/\d+/, '');
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (targetNum === null) return;
    let start = 0;
    const duration = 1600;
    const stepTime = 30;
    const steps = duration / stepTime;
    const increment = targetNum / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= targetNum) {
        setCount(targetNum);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [targetNum]);

  if (targetNum === null) return <span>{value}</span>;

  return (
    <span>
      {targetNum > 1000 ? count.toLocaleString() : count}
      {suffix}
    </span>
  );
};

export const HeroSection: React.FC<HeroSectionProps> = ({
  currentLang,
  onExploreMap,
  onExploreHeritage,
  theme,
}) => {
  return (
    <motion.section
      id="overview"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 0.6 }}
      className="relative pt-24 sm:pt-28 pb-16 overflow-hidden"
    >
      {/* Dynamic Animated Ambient Glow Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.25, 0.45, 0.25],
          x: [0, 40, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-10 right-10 -mr-20 -mt-20 w-[480px] h-[480px] rounded-full bg-emerald-500/20 blur-[120px] pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.35, 0.2],
          y: [0, -35, 0],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute top-1/2 left-0 -ml-24 w-[420px] h-[420px] rounded-full bg-orange-500/20 blur-[130px] pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        className="absolute bottom-0 right-1/4 w-[360px] h-[360px] rounded-full bg-cyan-500/20 blur-[110px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Modern Live Pill & Geolocation Ribbon */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs mb-5 font-mono"
        >
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 backdrop-blur-md shadow-[0_0_15px_rgba(16,185,129,0.2)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-semibold">LIVE PORTFOLIO</span>
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 backdrop-blur-md">
            <Compass className="w-3.5 h-3.5 text-cyan-400 animate-spin" style={{ animationDuration: '12s' }} />
            <span>29.8885° N, 74.2898° E</span>
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 backdrop-blur-md">
            <CloudSun className="w-3.5 h-3.5 text-amber-400" />
            <span>Sadulshahar · Rajasthan 335062</span>
          </div>
        </motion.div>

        {/* Hero Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Heading & Vision */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-400 bg-orange-500/10 px-3.5 py-1 rounded-full border border-orange-500/20">
                <Award className="w-3.5 h-3.5" />
                <span>
                  {currentLang === 'en'
                    ? 'Agrarian Legacy & Cultural Archive'
                    : 'कृषि विरासत एवं सांस्कृतिक अभिलेखागार'}
                </span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08]">
                <span className="font-display-modern text-white block">
                  Kishanpura
                </span>
                <span className="text-gradient-emerald font-display-modern block mt-1">
                  {currentLang === 'en' ? 'Utrada · Rajasthan' : 'किशनपुरा (उतरादा)'}
                </span>
                <span className="text-xl sm:text-2xl font-hindi-display text-slate-400 font-normal block mt-1">
                  {currentLang === 'en' ? 'किशनपुरा · ਕਿਸ਼ਨਪੁਰਾ · PIN 335062' : 'Sadulshahar Tehsil · 335062'}
                </span>
              </h1>
            </div>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              {currentLang === 'en'
                ? 'Welcome to the digital gateway of Kishanpura (Utrada). A vibrant century-old rural sanctuary in northern Rajasthan, celebrated for its sweet Kinnow citrus orchards, pure Himalayan canal distributaries, and the historic GSSS institution educating generations since 1926.'
                : 'किशनपुरा (उतरादा) के डिजिटल द्वार पर आपका स्वागत है। उत्तर राजस्थान की उपजाऊ नहरी गोद में बसा यह गाँव अपनी मिठास भरे किन्नू के बागों, लहलहाते गेहूँ के खेतों, 1926 से ज्ञान बांटते ऐतिहासिक विद्यालय और असीम ग्रामीण आतिथ्य के लिए विख्यात है।'}
            </p>

            {/* Modern Glass Info Card with Neon Accent */}
            <motion.div
              whileHover={{ y: -3, borderColor: 'rgba(16, 185, 129, 0.5)' }}
              className="p-5 rounded-2xl bg-gradient-to-r from-emerald-950/40 via-slate-900/60 to-slate-900/40 border border-emerald-500/30 backdrop-blur-xl shadow-lg relative overflow-hidden"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/30">
                  <Sun className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-sm font-bold text-white flex items-center gap-2">
                    <span>
                      {currentLang === 'en'
                        ? 'The Granary of Rajasthan & Citrus Capital'
                        : 'राजस्थान का हरित अन्न भंडार व किन्नू की राजधानी'}
                    </span>
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  </h2>
                  <p className="text-xs text-slate-300 mt-1 leading-normal">
                    {currentLang === 'en'
                      ? 'Equitable canal "Vara-Bandi" water turns, century-old banyan chaupal councils, and generational farmers cultivating 1,450+ hectares of fertile soils.'
                      : 'अनुशासित नहरी वारा-बंदी, बरगद की चौपाल पर विचार और पीढ़ियों की अटूट मेहनत से रचा गया एक आदर्श भारतीय गाँव।'}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Glowing Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <motion.button
                whileHover={{ scale: 1.04, boxShadow: '0 0 25px rgba(16,185,129,0.5)' }}
                whileTap={{ scale: 0.96 }}
                onClick={onExploreMap}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-semibold text-sm transition-all shadow-lg flex items-center gap-2 cursor-pointer border border-emerald-400/30"
              >
                <Navigation className="w-4 h-4 animate-pulse" />
                <span>{currentLang === 'en' ? 'Explore 3D Map & POIs' : 'ग्राम मानचित्र देखें'}</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.04, borderColor: 'rgba(255,255,255,0.4)' }}
                whileTap={{ scale: 0.96 }}
                onClick={onExploreHeritage}
                className="px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-sm transition-all border border-white/20 backdrop-blur-md shadow-xs flex items-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-orange-400" />
                <span>{currentLang === 'en' ? 'Centennial Story (1926–2026)' : '100 वर्ष का इतिहास'}</span>
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.04, x: 2 }}
                href={VILLAGE_INFO.location.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3.5 rounded-xl text-xs font-semibold text-orange-400 hover:text-orange-300 hover:bg-orange-500/10 transition-colors flex items-center gap-1.5"
              >
                <MapPin className="w-4 h-4" />
                <span>Google Maps</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </motion.a>
            </div>
          </motion.div>

          {/* Right Column: High-tech 3D Visual Card Anchor */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 25 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/15 bg-slate-900/80 backdrop-blur-2xl group">
              {/* Image Frame with Zoom Effect */}
              <div className="aspect-[4/3] w-full overflow-hidden bg-slate-800 relative">
                <motion.img
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80"
                  alt="Kishanpura Farmlands and Canal Waterway"
                  className="w-full h-full object-cover"
                />

                {/* Glass HUD Overlay Badges */}
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/15 flex items-center gap-2 text-xs font-mono text-emerald-400">
                  <Droplet className="w-3.5 h-3.5 text-cyan-400 animate-bounce" />
                  <span>Canal Command Area</span>
                </div>

                <div className="absolute top-4 right-4 bg-emerald-500/20 backdrop-blur-md px-3 py-1.5 rounded-xl border border-emerald-500/40 text-xs font-bold text-emerald-300">
                  <span>1,450+ Ha</span>
                </div>
              </div>

              {/* Caption Overlay */}
              <div className="p-5 sm:p-6 bg-slate-900/90 border-t border-white/10 space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span>HIMALAYAN WATERWAYS</span>
                  <span>SADULSHAHAR BELT</span>
                </div>
                <h3 className="text-lg font-bold text-white leading-snug">
                  {currentLang === 'en'
                    ? 'Emerald Canals Transforming Northern Rajasthan'
                    : 'हिमालयी जलधारा से सींची गई पावन धरा'}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {currentLang === 'en'
                    ? 'A flourishing agrarian ecosystem of Kinnow mandarins, mustard blossoms, and golden wheat fed by historic canal feeders.'
                    : '1,450 हेक्टेयर से अधिक विस्तृत क्षेत्र में फैले किन्नू के बाग और सरसों व गेहूँ की खेती।'}
                </p>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="text-emerald-400 flex items-center gap-1.5 font-semibold">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    {currentLang === 'en' ? 'Active Season: Winter Crop' : 'स्थिति: सक्रिय कृषि काल'}
                  </span>
                  <button
                    onClick={onExploreMap}
                    className="text-orange-400 hover:text-orange-300 flex items-center gap-1 font-semibold cursor-pointer"
                  >
                    <span>{currentLang === 'en' ? 'View Landmark' : 'नक्शे पर देखें'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Modern Animated Metric Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.12 },
            },
          }}
          className="mt-14 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
        >
          {VILLAGE_STATS.map((stat, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              whileHover={{ y: -4, borderColor: 'rgba(16, 185, 129, 0.4)' }}
              className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-lg hover:shadow-[0_10px_30px_rgba(16,185,129,0.15)] transition-all"
            >
              <div className="text-3xl sm:text-4xl font-extrabold font-display-modern text-white tracking-tight">
                <AnimatedCounter value={stat.value} />
              </div>
              <div className="text-xs font-bold text-emerald-400 mt-1.5">
                {stat.label[currentLang]}
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5 font-mono">
                {stat.subtext[currentLang]}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};
