import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown, Sparkles, MapPin, Calendar, Sprout, Landmark, Phone } from 'lucide-react';

interface VillageFAQProps {
  currentLang: 'en' | 'hi';
  theme: 'dark' | 'light';
}

interface FAQItem {
  id: string;
  icon: React.ReactNode;
  question: { en: string; hi: string };
  answer: { en: string; hi: string };
  category: string;
}

export const VillageFAQ: React.FC<VillageFAQProps> = ({ currentLang, theme }) => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const faqs: FAQItem[] = [
    {
      id: 'faq-1',
      icon: <MapPin className="w-4 h-4 text-emerald-400" />,
      category: 'Location & Geography',
      question: {
        en: 'Where is Kishanpura Utrada located and what are its coordinates?',
        hi: 'किशनपुरा (उतरादा) कहाँ स्थित है और इसके भौगोलिक निर्देशांक क्या हैं?',
      },
      answer: {
        en: 'Kishanpura (Utrada) is located in Sadulshahar Tehsil, Sri Ganganagar district (near the Hanumangarh border), Rajasthan, India with postal PIN code 335062. Its precise GPS coordinates are 29.8885° N, 74.2898° E.',
        hi: 'किशनपुरा (उतरादा) राजस्थान के श्रीगंगानगर जिले की सादुलशहर तहसील में पिन कोड 335062 के अंतर्गत स्थित है। इसके सटीक जीपीएस निर्देशांक 29.8885° N, 74.2898° E हैं।',
      },
    },
    {
      id: 'faq-2',
      icon: <Sprout className="w-4 h-4 text-orange-400" />,
      category: 'Crops & Farming',
      question: {
        en: 'What crops and agricultural produce is Kishanpura famous for?',
        hi: 'किशनपुरा किन फसलों और कृषि उत्पादों के लिए प्रसिद्ध है?',
      },
      answer: {
        en: 'Kishanpura is renowned for premium sweet Kinnow mandarin oranges, golden wheat (Kanak), yellow mustard (Sarson), white cotton (Narma), and cluster beans (Guwar). Over 1,450 hectares of land are irrigated through the disciplined canal Vara-Bandi system.',
        hi: 'किशनपुरा अपने विश्वविख्यात मीठे किन्नू के बागों, सुनहरे गेहूँ, पीली सरसों, नरमा-कपास और ग्वार की खेती के लिए जाना जाता है। यहाँ 1,450 हेक्टेयर से अधिक उपजाऊ भूमि नहरी वारा-बंदी जल वितरण से सींची जाती है।',
      },
    },
    {
      id: 'faq-3',
      icon: <Landmark className="w-4 h-4 text-amber-400" />,
      category: 'History & School',
      question: {
        en: 'When was the historic school in Kishanpura established?',
        hi: 'किशनपुरा के ऐतिहासिक राजकीय विद्यालय की स्थापना कब हुई थी?',
      },
      answer: {
        en: 'The Government Senior Secondary School (GSSS) Kishanpura Uttaradha was established in 1926. It is celebrating its 100-year Centennial (1926–2026), having educated five generations of rural scholars, officers, teachers, and defense personnel.',
        hi: 'राजकीय उच्च माध्यमिक विद्यालय (GSSS) किशनपुरा की स्थापना वर्ष 1926 में हुई थी। यह विद्यालय 2026 में अपने गौरवशाली 100 वर्ष (शताब्दी वर्ष) मना रहा है।',
      },
    },
    {
      id: 'faq-4',
      icon: <Calendar className="w-4 h-4 text-cyan-400" />,
      category: 'Tourism & Travel',
      question: {
        en: 'What is the best time of year to visit Kishanpura?',
        hi: 'किशनपुरा भ्रमण का सबसे अच्छा समय कौन सा है?',
      },
      answer: {
        en: 'The ideal visiting season is from October to March. During winter, temperatures are crisp and pleasant, blooming mustard fields carpet the countryside in bright yellow, and citrus orchards are laden with ripe, sweet Kinnows ready for harvest.',
        hi: 'गाँव आने का सबसे उत्तम समय अक्टूबर से मार्च तक का होता है। सर्दियों में मौसम सुहावना रहता है, खेत पीली सरसों से लहलहाते हैं और बागों में मीठे किन्नू की तुड़ाई चलती है।',
      },
    },
    {
      id: 'faq-5',
      icon: <Phone className="w-4 h-4 text-rose-400" />,
      category: 'Civic & Emergency',
      question: {
        en: 'What public services and emergency facilities are available in the village?',
        hi: 'गाँव में कौन-कौन सी सार्वजनिक सेवाएँ और स्वास्थ्य सुविधाएं उपलब्ध हैं?',
      },
      answer: {
        en: 'The village hosts the Gram Panchayat Bhawan, a Government Primary Health Centre (PHC) providing 24x7 medical aid, Kishanpura Branch Post Office (PIN 335062), Krishi Seva Kendra, veterinary care, and emergency response via 108/112.',
        hi: 'गाँव में ग्राम पंचायत भवन, 24 घंटे आपातकालीन सेवा वाला प्राथमिक स्वास्थ्य केंद्र, शाखा डाकघर (पिन 335062), कृषि सेवा केंद्र और 108/112 आपातकालीन सेवाएँ उपलब्ध हैं।',
      },
    },
  ];

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <motion.section
      id="faq"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="py-20 relative overflow-hidden border-t border-white/10"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2 bg-emerald-500/10 px-3.5 py-1 rounded-full border border-emerald-500/20 font-mono">
            <HelpCircle className="w-4 h-4" />
            <span>
              {currentLang === 'en'
                ? 'Frequently Asked Questions & Village Facts'
                : 'प्रायः पूछे जाने वाले प्रश्न एवं ग्राम तथ्य'}
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display-modern text-white">
            {currentLang === 'en' ? 'Village Knowledge Hub' : 'किशनपुरा ज्ञान केंद्र व सामान्य प्रश्न'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-2">
            {currentLang === 'en'
              ? 'Quick answers for visitors, researchers, agriculture partners, and diaspora tracing their roots to Kishanpura (Utrada).'
              : 'आगंतुकों, शोधकर्ताओं, कृषि खरीदारों और अपनी जड़ों से जुड़े प्रवासियों के लिए त्वरित व प्रामाणिक जानकारी।'}
          </p>
        </motion.div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`rounded-2xl transition-all border overflow-hidden backdrop-blur-xl ${
                  isOpen
                    ? 'bg-slate-900/90 border-emerald-500/40 shadow-[0_0_20px_rgba(16,185,129,0.15)]'
                    : 'bg-white/5 border-white/10 hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3.5">
                    <div className="p-2 rounded-xl bg-white/5 border border-white/10 shrink-0">
                      {faq.icon}
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-0.5">
                        {faq.category}
                      </span>
                      <h3 className="text-sm sm:text-base font-bold text-white leading-snug">
                        {faq.question[currentLang]}
                      </h3>
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-emerald-400' : ''
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-5 pb-6 sm:px-6 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 font-normal">
                        {faq.answer[currentLang]}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};
