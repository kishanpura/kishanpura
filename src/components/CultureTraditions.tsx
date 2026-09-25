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
      className={`py-20 relative overflow-hidden border-t ${
        theme === 'dark' ? 'border-white/10' : 'border-slate-200'
      }`}
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
          <div className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider mb-2 px-3.5 py-1 rounded-full border ${
            theme === 'dark'
              ? 'text-orange-400 bg-orange-500/10 border-orange-500/20'
              : 'text-orange-600 bg-orange-50 border-orange-200'
          }`}>
            <Heart className="w-4 h-4 text-rose-500" />
            <span>
              {currentLang === 'en'
                ? 'Community Life & Living Heritage'
                : 'ग्रामीण जनजीवन, चौपाल व परंपराएं'}
            </span>
          </div>
          <h2 className={`text-3xl sm:text-5xl font-extrabold font-display-modern ${
            theme === 'dark' ? 'text-white' : 'text-slate-950'
          }`}>
            {currentLang === 'en' ? 'The Soul of Kishanpura' : 'चौपाल की छांव, स्वाद और अपनापन'}
          </h2>
          <p className={`text-xs sm:text-sm mt-2 ${
            theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
          }`}>
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
              className={`backdrop-blur-xl rounded-3xl p-6 border shadow-xl flex flex-col justify-between transition-all ${
                theme === 'dark'
                  ? 'bg-slate-900/80 border-white/10'
                  : 'bg-white border-slate-200 shadow-md'
              }`}
            >
              <div>
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 border ${
                  theme === 'dark'
                    ? 'bg-orange-500/15 text-orange-400 border-orange-500/30'
                    : 'bg-orange-50 text-orange-600 border-orange-200'
                }`}>
                  {idx === 0 && <Coffee className="w-6 h-6" />}
                  {idx === 1 && <Sparkles className="w-6 h-6 text-amber-500" />}
                  {idx === 2 && <UtensilsCrossed className="w-6 h-6 text-emerald-500" />}
                  {idx === 3 && <Users className="w-6 h-6 text-cyan-500" />}
                </div>
                <h3 className={`text-base font-bold ${
                  theme === 'dark' ? 'text-white' : 'text-slate-900'
                }`}>
                  {item.title[currentLang]}
                </h3>
                <p className={`text-xs mt-2 leading-relaxed ${
                  theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  {item.desc[currentLang]}
                </p>
              </div>

              <div className={`mt-4 pt-3 border-t text-[11px] font-mono font-semibold ${
                theme === 'dark' ? 'border-white/10 text-emerald-400' : 'border-slate-200 text-emerald-700'
              }`}>
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
          className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center backdrop-blur-2xl rounded-3xl p-6 sm:p-9 border shadow-2xl ${
            theme === 'dark'
              ? 'bg-slate-900/80 border-white/15'
              : 'bg-white border-slate-200 shadow-xl'
          }`}
        >
          {/* Left Column: Traditional Dishes */}
          <div className="lg:col-span-6 space-y-4">
            <div className={`flex items-center gap-2 text-xs font-bold uppercase tracking-wider font-mono ${
              theme === 'dark' ? 'text-emerald-400' : 'text-emerald-700'
            }`}>
              <UtensilsCrossed className="w-4 h-4" />
              <span>{currentLang === 'en' ? 'Flavors of the Farmland' : 'सरहदी थाली की सुगंध'}</span>
            </div>
            <h3 className={`text-2xl sm:text-3xl font-bold font-display-modern ${
              theme === 'dark' ? 'text-white' : 'text-slate-900'
            }`}>
              {currentLang === 'en' ? 'The Authentic Village Rasoi' : 'गाँव की रसोई: शुद्ध, सात्विक और पौष्टिक'}
            </h3>
            <p className={`text-xs leading-relaxed ${
              theme === 'dark' ? 'text-slate-300' : 'text-slate-700'
            }`}>
              {currentLang === 'en'
                ? 'Cooking in Kishanpura is deeply tied to the land and the seasons. Dairy is unadulterated, flours are freshly milled from our own grain, and clay chulhas impart unmatched earthy aroma.'
                : 'यहाँ का भोजन खेतों की ताजी उपज और देशी गाय के घी-दूध से तैयार होता है। मिट्टी के चूल्हे का सोंधापन हर कौर को अमृत बना देता है।'}
            </p>

            <div className="space-y-3 pt-2">
              {localDishes.map((dish, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.01, x: 4 }}
                  className={`p-3.5 rounded-2xl border transition-all backdrop-blur-md ${
                    theme === 'dark'
                      ? 'bg-white/5 border-white/10'
                      : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <div className={`text-xs font-bold flex items-center justify-between ${
                    theme === 'dark' ? 'text-white' : 'text-slate-900'
                  }`}>
                    <span>{dish.name[currentLang]}</span>
                    <span className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full border ${
                      theme === 'dark'
                        ? 'text-emerald-400 bg-emerald-500/15 border-emerald-500/30'
                        : 'text-emerald-700 bg-emerald-50 border-emerald-200 font-semibold'
                    }`}>
                      Farm Fresh
                    </span>
                  </div>
                  <p className={`text-[11px] mt-1 ${
                    theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
                  }`}>{dish.detail[currentLang]}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Visual of Village Chaupal */}
          <div className="lg:col-span-6 space-y-4">
            <div className={`rounded-3xl overflow-hidden aspect-[4/3] bg-slate-800 border group relative shadow-2xl ${
              theme === 'dark' ? 'border-white/15' : 'border-slate-200'
            }`}>
              <motion.img
                whileHover={{ scale: 1.06 }}
                transition={{ duration: 0.6 }}
                src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80"
                alt="Village Elders and Community Life"
                className="w-full h-full object-cover"
              />
            </div>
            <div className={`p-4 rounded-2xl border backdrop-blur-md ${
              theme === 'dark'
                ? 'bg-white/5 border-white/10'
                : 'bg-emerald-50/70 border-emerald-200'
            }`}>
              <div className={`text-xs font-bold mb-1 font-mono ${
                theme === 'dark' ? 'text-white' : 'text-slate-900'
              }`}>
                {currentLang === 'en' ? '// THE CHAUPAL ETHOS' : '// चौपाल की मर्यादा'}
              </div>
              <p className={`text-xs leading-relaxed ${
                theme === 'dark' ? 'text-slate-300' : 'text-slate-700'
              }`}>
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
