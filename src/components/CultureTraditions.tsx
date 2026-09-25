import React from 'react';
import { motion } from 'motion/react';
import { Heart, Coffee, Users, UtensilsCrossed, Sparkles } from 'lucide-react';
import { VILLAGE_CULTURE_ITEMS } from '../data/villageData';

interface CultureTraditionsProps {
  currentLang: 'en' | 'hi';
  theme: 'dark' | 'light';
}

export const CultureTraditions: React.FC<CultureTraditionsProps> = ({ currentLang, theme }) => {
  const localDishes = [
    {
      name: { en: 'Bajre ki Roti & Sarson Saag', hi: 'बाजरे की रोटी और सरसों का साग' },
      detail: { en: 'Cooked slowly over clay chulhas with fresh yellow mustard leaves and unrefined jaggery.', hi: 'मिट्टी के चूल्हे पर सिकी सोंधी रोटी, ताजा सरसों का साग और गुड़।' },
    },
    {
      name: { en: 'Freshly Churned White Butter', hi: 'ताजा बिलोया हुआ सफेद मक्खन' },
      detail: { en: 'Hand-churned in traditional clay matkas from pure Rathi and Sahiwal cow milk.', hi: 'देशी गाय के दूध की मलाई से पारंपरिक मथानी द्वारा निकाला मक्खन।' },
    },
    {
      name: { en: 'Kishanpura Cold Kinnow Nectar', hi: 'किशनपुरा का ताजा किन्नू रस' },
      detail: { en: 'Unsweetened, freshly squeezed citrus juice straight from orchard fruit.', hi: 'बिना किसी मिलावट के बाग से सीधे तोड़े गए रसीले किन्नू का प्राकृतिक रस।' },
    },
    {
      name: { en: 'Rajasthani Choorma & Kair-Sangri', hi: 'चूरमा और कैर-सांगरी की सब्जी' },
      detail: { en: 'Festive delicacy made with pure desi ghee and wild desert berry treasures.', hi: 'शुद्ध देशी घी में बना चूरमा और पारंपरिक मारवाड़ी कैर-सांगरी।' },
    },
  ];

  return (
    <motion.section
      id="culture"
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
            <Heart className="w-4 h-4 text-rose-400" />
            <span>
              {currentLang === 'en'
                ? 'Community Life & Living Heritage'
                : 'ग्रामीण जनजीवन, चौपाल व परंपराएं'}
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display-modern text-white">
            {currentLang === 'en' ? 'The Soul of Kishanpura' : 'चौपाल की छांव, स्वाद और अपनापन'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-2">
            {currentLang === 'en'
              ? 'Where doors remain unbolted, neighbors are like family, and every guest is welcomed with overflowing warm hospitality.'
              : 'जहाँ आज भी घरों के दरवाजे खुले रहते हैं, बुजुर्गों का आशीर्वाद जीवन की शक्ति है और हर आने वाले का स्वागत दिल खोलकर किया जाता है।'}
          </p>
        </motion.div>

        {/* Culture Pillars 4-Grid with Staggered Motion */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {VILLAGE_CULTURE_ITEMS.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -6, borderColor: 'rgba(249, 115, 22, 0.4)' }}
              className="bg-slate-900/80 backdrop-blur-xl rounded-3xl p-6 border border-white/10 shadow-xl flex flex-col justify-between transition-all"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-orange-500/15 text-orange-400 flex items-center justify-center mb-4 border border-orange-500/30">
                  {idx === 0 && <Coffee className="w-6 h-6" />}
                  {idx === 1 && <Sparkles className="w-6 h-6 text-amber-400" />}
                  {idx === 2 && <UtensilsCrossed className="w-6 h-6 text-emerald-400" />}
                  {idx === 3 && <Users className="w-6 h-6 text-cyan-400" />}
                </div>
                <h3 className="text-base font-bold text-white">
                  {item.title[currentLang]}
                </h3>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  {item.desc[currentLang]}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/10 text-[11px] font-mono font-semibold text-emerald-400">
                {currentLang === 'en' ? '// LIVING TRADITION' : '// जीवंत परंपरा'}
              </div>
            </motion.div>
          ))}
        </div>

        {/* The Chaupal & Culinary Dual Spotlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-900/80 backdrop-blur-2xl rounded-3xl p-6 sm:p-9 border border-white/15 shadow-2xl"
        >
          {/* Left Column: Traditional Dishes */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400 font-mono">
              <UtensilsCrossed className="w-4 h-4" />
              <span>{currentLang === 'en' ? 'Flavors of the Farmland' : 'सरहदी थाली की सुगंध'}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold font-display-modern text-white">
              {currentLang === 'en' ? 'The Authentic Village Rasoi' : 'गाँव की रसोई: शुद्ध, सात्विक और पौष्टिक'}
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              {currentLang === 'en'
                ? 'Cooking in Kishanpura is deeply tied to the land and the seasons. Dairy is unadulterated, flours are freshly milled from our own grain, and clay chulhas impart unmatched earthy aroma.'
                : 'यहाँ का भोजन खेतों की ताजी उपज और देशी गाय के घी-दूध से तैयार होता है। मिट्टी के चूल्हे का सोंधापन हर कौर को अमृत बना देता है।'}
            </p>

            <div className="space-y-3 pt-2">
              {localDishes.map((dish, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.01, x: 4 }}
                  className="p-3.5 rounded-2xl bg-white/5 border border-white/10 transition-all backdrop-blur-md"
                >
                  <div className="text-xs font-bold text-white flex items-center justify-between">
                    <span>{dish.name[currentLang]}</span>
                    <span className="text-[10px] text-emerald-400 font-mono bg-emerald-500/15 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                      Farm Fresh
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1">{dish.detail[currentLang]}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Visual of Village Chaupal */}
          <div className="lg:col-span-6 space-y-4">
            <div className="rounded-3xl overflow-hidden aspect-[4/3] bg-slate-800 border border-white/15 group relative shadow-2xl">
              <motion.img
                whileHover={{ scale: 1.06 }}
                transition={{ duration: 0.6 }}
                src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80"
                alt="Village Elders and Community Life"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-md">
              <div className="text-xs font-bold text-white mb-1 font-mono">
                {currentLang === 'en' ? '// THE CHAUPAL ETHOS' : '// चौपाल की मर्यादा'}
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {currentLang === 'en'
                  ? 'In Kishanpura, differences melt away at the central chaupal. Whether discussing canal turns or wedding preparations, decisions are made with mutual consensus and deep respect for elders.'
                  : 'गाँव की चौपाल केवल बैठने का स्थान नहीं, बल्कि लोकतंत्र और सामाजिक समरसता की पाठशाला है। यहाँ हर समस्या का समाधान मिल-बैठकर होता है।'}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};
