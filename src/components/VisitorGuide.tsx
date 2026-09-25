import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Compass, Car, Sun, Send, MessageSquareQuote, Check, MapPin, Heart } from 'lucide-react';
import { VISITOR_GUIDE, VILLAGE_INFO } from '../data/villageData';

interface VisitorGuideProps {
  currentLang: 'en' | 'hi';
  theme: 'dark' | 'light';
}

interface GuestbookEntry {
  id: string;
  name: string;
  origin: string;
  connection: string;
  message: string;
  date: string;
}

const DEFAULT_GUESTBOOK_ENTRIES: GuestbookEntry[] = [
  {
    id: 'entry-1',
    name: 'Balwant Singh Chahal',
    origin: 'Calgary, Canada (Originally Ward 3, Kishanpura)',
    connection: 'Diaspora Family',
    message: 'Proud to see our ancestral village Kishanpura on the global map! The canal banks and Kinnow orchards will always remain in my heart.',
    date: 'March 2026',
  },
  {
    id: 'entry-2',
    name: 'Dr. Anita Godara',
    origin: 'Jaipur, Rajasthan',
    connection: 'Alumna - GSSS School',
    message: 'Happy 100th anniversary to GSSS Kishanpura! Grateful to the teachers who laid the foundation for my medical career.',
    date: 'February 2026',
  },
  {
    id: 'entry-3',
    name: 'Rohan Sharma & Friends',
    origin: 'New Delhi',
    connection: 'Agri-tourism Traveler',
    message: 'Visited during the Kinnow harvest in January. The warmth of the village elders at the Chaupal and the fresh juice from the trees were unforgettable!',
    date: 'January 2026',
  },
];

export const VisitorGuide: React.FC<VisitorGuideProps> = ({ currentLang, theme }) => {
  const [entries, setEntries] = useState<GuestbookEntry[]>(() => {
    try {
      const saved = localStorage.getItem('kishanpura_guestbook');
      if (saved) return JSON.parse(saved);
    } catch {
      // fallback
    }
    return DEFAULT_GUESTBOOK_ENTRIES;
  });

  const [formName, setFormName] = useState('');
  const [formOrigin, setFormOrigin] = useState('');
  const [formConnection, setFormConnection] = useState('Diaspora / Native');
  const [formMessage, setFormMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('kishanpura_guestbook', JSON.stringify(entries));
    } catch {
      // ignore
    }
  }, [entries]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName.trim() || !formMessage.trim()) return;

    const newEntry: GuestbookEntry = {
      id: Date.now().toString(),
      name: formName.trim(),
      origin: formOrigin.trim() || (currentLang === 'en' ? 'Visitor' : 'आगंतुक'),
      connection: formConnection,
      message: formMessage.trim(),
      date: new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' }),
    };

    setEntries([newEntry, ...entries]);
    setFormName('');
    setFormOrigin('');
    setFormMessage('');
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <motion.section
      id="visitor"
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
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2 bg-emerald-500/10 px-3.5 py-1 rounded-full border border-emerald-500/20 font-mono">
            <Compass className="w-4 h-4" />
            <span>
              {currentLang === 'en'
                ? 'Traveler Guide & Diaspora Connections'
                : 'यात्रा निर्देशिका एवं प्रवासी ग्राम संवाद'}
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display-modern text-white">
            {currentLang === 'en' ? 'Visiting Kishanpura' : 'किशनपुरा पधारें एवं अपनी यादें साझा करें'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-2">
            {currentLang === 'en'
              ? 'Whether retracing your family roots or experiencing authentic Rajasthani rural culture, our doors are always open.'
              : 'चाहे आप अपनी पैतृक जड़ों की तलाश में आ रहे हों या ग्रामीण जीवन की सादगी को महसूस करने, किशनपुरा में आपका हार्दिक स्वागत है।'}
          </p>
        </motion.div>

        {/* Travel Grid: Distances & Best Season */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14">
          {/* Distance Table */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-slate-900/80 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 border border-white/15 shadow-2xl"
          >
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-400 mb-3 font-mono">
              <Car className="w-4 h-4" />
              <span>{currentLang === 'en' ? 'Connectivity & Travel Routes' : 'सड़क एवं रेल मार्ग संपर्क'}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-display-modern text-white">
              {currentLang === 'en' ? 'How to Reach Kishanpura' : 'किशनपुरा कैसे पहुँचें'}
            </h3>
            <p className="text-xs text-slate-400 mt-1 mb-5">
              {currentLang === 'en'
                ? 'Smooth national and state highway access from Sadulshahar, Sangaria, and Sri Ganganagar.'
                : 'सादुलशहर और संगरिया से पक्की सड़कों द्वारा सुगम आवागमन उपलब्ध है।'}
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-white/10 text-slate-400 uppercase font-mono font-semibold text-[10px]">
                    <th className="pb-3">{currentLang === 'en' ? 'Origin Point' : 'कहाँ से'}</th>
                    <th className="pb-3">{currentLang === 'en' ? 'Distance' : 'दूरी'}</th>
                    <th className="pb-3">{currentLang === 'en' ? 'Transit Time' : 'समय'}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {VISITOR_GUIDE.distanceList.map((row, i) => (
                    <motion.tr
                      key={i}
                      whileHover={{ backgroundColor: 'rgba(255,255,255,0.03)' }}
                      className="text-slate-300 transition-colors"
                    >
                      <td className="py-3 font-semibold text-white">{row.from}</td>
                      <td className="py-3 font-mono text-emerald-400 font-bold">{row.distance}</td>
                      <td className="py-3 text-slate-400">{row.time}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-slate-400 font-mono">
                {currentLang === 'en' ? 'Airports: Bathinda (BTI) / Jaipur (JAI)' : 'हवाई अड्डे: बठिंडा / जयपुर'}
              </span>
              <a
                href={VILLAGE_INFO.location.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-orange-400 hover:text-orange-300 flex items-center gap-1.5"
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>Google Maps Direct</span>
              </a>
            </div>
          </motion.div>

          {/* Best Time & Visiting Tips */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-4"
          >
            {/* Season Card */}
            <motion.div
              whileHover={{ y: -3, borderColor: 'rgba(249, 115, 22, 0.4)' }}
              className="bg-slate-900/80 backdrop-blur-2xl rounded-3xl p-6 border border-orange-500/25 shadow-xl"
            >
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-400 mb-2 font-mono">
                <Sun className="w-4 h-4" />
                <span>{currentLang === 'en' ? 'Optimal Visiting Window' : 'यात्रा का सर्वोत्तम समय'}</span>
              </div>
              <h4 className="text-base font-bold font-display-modern text-white">
                {currentLang === 'en' ? 'October to March (The Golden Season)' : 'अक्टूबर से मार्च: स्वर्णिम काल'}
              </h4>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                {VISITOR_GUIDE.bestSeason[currentLang]}
              </p>
            </motion.div>

            {/* Travel Tips Accordion/List */}
            <div className="bg-slate-900/80 backdrop-blur-2xl rounded-3xl p-6 border border-white/10 shadow-xl space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1 font-mono">
                {currentLang === 'en' ? '// RURAL PROTOCOL & TIPS' : '// ग्रामीण अनुभव एवं शिष्टाचार'}
              </div>
              {VISITOR_GUIDE.travelTips.map((tip, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.01 }}
                  className="p-3.5 bg-white/5 rounded-2xl border border-white/10"
                >
                  <div className="text-xs font-bold text-white">{tip.title[currentLang]}</div>
                  <p className="text-[11px] text-slate-400 mt-1 leading-normal">
                    {tip.desc[currentLang]}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Diaspora & Visitor Guestbook Registry */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-slate-900/80 backdrop-blur-2xl rounded-3xl p-6 sm:p-9 border border-white/15 shadow-2xl"
        >
          <div className="max-w-2xl mx-auto text-center mb-8">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-400 mb-2 bg-rose-500/10 px-3.5 py-1 rounded-full border border-rose-500/20 font-mono">
              <Heart className="w-4 h-4 text-rose-400 fill-current" />
              <span>{currentLang === 'en' ? 'Roots & Memories' : 'माटी की सुगंध एवं प्रवासी स्वर'}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-display-modern text-white">
              {currentLang === 'en' ? 'The Kishanpura Guestbook & Diaspora Registry' : 'किशनपुरा ग्राम संदेश पंजिका'}
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              {currentLang === 'en'
                ? 'Did your ancestors grow up here? Have you walked through our canal fields? Leave your message for the community.'
                : 'क्या आपकी जड़ें इस गाँव से जुड़ी हैं या आप यहाँ पधारे हैं? अपने स्नेह भरे विचार और यादें यहाँ अंकित करें।'}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Form */}
            <form onSubmit={handleSubmit} className="lg:col-span-5 space-y-3 bg-white/5 p-6 rounded-3xl border border-white/10 backdrop-blur-xl">
              <div className="text-xs font-bold text-white mb-1 font-mono">
                {currentLang === 'en' ? '// SIGN THE VILLAGE GUESTBOOK' : '// संदेश दर्ज करें'}
              </div>

              <AnimatePresence>
                {formSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="p-3 bg-emerald-500/20 text-emerald-300 rounded-2xl text-xs font-semibold flex items-center gap-2 border border-emerald-500/30"
                  >
                    <Check className="w-4 h-4" />
                    <span>
                      {currentLang === 'en'
                        ? 'Thank you! Your message has been saved to the registry.'
                        : 'धन्यवाद! आपका संदेश सफलतापूर्वक पंजिका में जुड़ गया है।'}
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>

              <div>
                <label className="block text-[11px] font-semibold text-slate-300 mb-1 font-mono">
                  {currentLang === 'en' ? 'Full Name' : 'पूरा नाम'} *
                </label>
                <input
                  type="text"
                  required
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
                  placeholder={currentLang === 'en' ? 'e.g. Ajay Kumar Chandora' : 'उदा. अजय कुमार'}
                  className="w-full px-3.5 py-2.5 text-xs bg-slate-900/90 text-white rounded-xl border border-white/15 focus:outline-none focus:ring-2 focus:ring-emerald-400/40"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-slate-300 mb-1 font-mono">
                  {currentLang === 'en' ? 'Current City / Country' : 'वर्तमान शहर / देश'}
                </label>
                <input
                  type="text"
                  value={formOrigin}
                  onChange={(e) => setFormOrigin(e.target.value)}
                  placeholder={currentLang === 'en' ? 'e.g. Delhi, London, Jaipur...' : 'उदा. जयपुर / दिल्ली...'}
                  className="w-full px-3.5 py-2.5 text-xs bg-slate-900/90 text-white rounded-xl border border-white/15 focus:outline-none focus:ring-2 focus:ring-emerald-400/40"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-slate-300 mb-1 font-mono">
                  {currentLang === 'en' ? 'Your Connection' : 'गाँव से संबंध'}
                </label>
                <select
                  value={formConnection}
                  onChange={(e) => setFormConnection(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs bg-slate-900 text-white rounded-xl border border-white/15 focus:outline-none focus:ring-2 focus:ring-emerald-400/40"
                >
                  <option value="Diaspora / Native">Diaspora / Ancestral Roots</option>
                  <option value="Current Resident">Current Resident / Local</option>
                  <option value="School Alumnus">GSSS School Alumnus</option>
                  <option value="Traveler / Visitor">Visitor / Traveler</option>
                  <option value="Agricultural Partner">Agri Partner / Buyer</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-slate-300 mb-1 font-mono">
                  {currentLang === 'en' ? 'Your Message or Blessing' : 'आपका संदेश या संस्मरण'} *
                </label>
                <textarea
                  required
                  rows={3}
                  value={formMessage}
                  onChange={(e) => setFormMessage(e.target.value)}
                  placeholder={currentLang === 'en' ? 'Write a few lines for Kishanpura...' : 'गाँव के लिए दो शब्द लिखें...'}
                  className="w-full px-3.5 py-2.5 text-xs bg-slate-900/90 text-white rounded-xl border border-white/15 focus:outline-none focus:ring-2 focus:ring-emerald-400/40"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(16,185,129,0.5)' }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white text-xs font-semibold transition-all flex items-center justify-center gap-2 shadow-lg cursor-pointer border border-emerald-400/30"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{currentLang === 'en' ? 'Post to Village Registry' : 'संदेश सबमिट करें'}</span>
              </motion.button>
            </form>

            {/* List of Messages with layout animation */}
            <div className="lg:col-span-7 space-y-3.5 max-h-[420px] overflow-y-auto pr-2">
              <AnimatePresence>
                {entries.map((entry) => (
                  <motion.div
                    layout
                    key={entry.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    className="p-5 rounded-2xl bg-white/5 border border-white/10 text-xs space-y-2 shadow-lg hover:border-emerald-500/30 transition-all backdrop-blur-md"
                  >
                    <div className="flex items-center justify-between">
                      <div className="font-bold text-white text-sm">{entry.name}</div>
                      <span className="text-[10px] text-slate-500 font-mono">{entry.date}</span>
                    </div>
                    <div className="text-[11px] text-emerald-400 font-semibold font-mono">
                      {entry.origin} · <span className="text-slate-400 font-normal">{entry.connection}</span>
                    </div>
                    <div className="flex items-start gap-2 text-slate-300 italic pt-2 border-t border-white/10">
                      <MessageSquareQuote className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                      <span>&quot;{entry.message}&quot;</span>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};
