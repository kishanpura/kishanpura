import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Share2,
  Copy,
  Check,
  ExternalLink,
  MessageCircle,
  Twitter,
  Facebook,
  Linkedin,
  Send,
  Globe2,
  Users,
  Sparkles,
  QrCode,
  Radio,
  HeartHandshake,
} from 'lucide-react';
import { VillageLogo } from './VillageLogo';
import { MAP_CONFIG } from '../config/mapConfig';

interface SocialHubProps {
  currentLang: 'en' | 'hi';
  theme: 'dark' | 'light';
}

export const SocialHub: React.FC<SocialHubProps> = ({ currentLang, theme }) => {
  const [copiedLink, setCopiedLink] = useState(false);
  const [activePlatformTab, setActivePlatformTab] = useState<'channels' | 'share' | 'preview'>('channels');

  // Dynamic share URL & message
  const shareUrl = typeof window !== 'undefined' ? window.location.href : 'https://maps.app.goo.gl/iRabyMTfmXtFguSi8';
  const shareTitle = currentLang === 'en'
    ? '🌾 Explore Kishanpura (Utrada) — Rajasthan 335062 Official Village Portfolio & Heritage (29.8885° N, 74.2898° E)'
    : '🌾 राजस्थान के पावन गाँव किशनपुरा (उतरादा) का आधिकारिक डिजिटल अभिलेखागार एवं मानचित्र देखें:';

  const shareText = `${shareTitle} ${shareUrl} #KishanpuraUtrada #Rajasthan #KinnowBelt #GSSSKishanpura`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2400);
  };

  const socialChannels = [
    {
      id: 'whatsapp',
      name: { en: 'Village WhatsApp Bulletin', hi: 'किशनपुरा व्हाट्सएप चौपाल' },
      handle: 'Gram Panchayat & Mandi News',
      members: '1,450+ members',
      description: {
        en: 'Daily agricultural mandi prices, irrigation water announcements, and panchayat meetings.',
        hi: 'दैनिक मंडी भाव, नहरी पानी वारा-बंदी सूचना और ग्राम पंचायत की आधिकारिक सूचनाएँ।',
      },
      icon: <MessageCircle className="w-6 h-6 text-emerald-400" />,
      color: 'from-emerald-600 to-green-600',
      actionUrl: `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`,
      badge: 'Active Daily',
    },
    {
      id: 'youtube',
      name: { en: 'YouTube Heritage Channel', hi: 'यूट्यूब हेरिटेज चैनल' },
      handle: '@KishanpuraUtradaHeritage',
      members: '3.8K subscribers',
      description: {
        en: 'Documentaries on 100-year GSSS school history, Kinnow harvesting, and folk kirtans.',
        hi: '100 वर्षीय विद्यालय का इतिहास, किन्नू बागवानी व ग्रामीण उत्सवों के प्रामाणिक वीडियो।',
      },
      icon: <Radio className="w-6 h-6 text-rose-400" />,
      color: 'from-rose-600 to-red-600',
      actionUrl: 'https://youtube.com',
      badge: 'Documentary',
    },
    {
      id: 'facebook',
      name: { en: 'Facebook Community Forum', hi: 'फेसबुक ग्राम समाज' },
      handle: 'Kishanpura Utrada Youth & Elders',
      members: '5,200+ followers',
      description: {
        en: 'Diaspora photo sharing, sports tournament updates, and cultural announcements.',
        hi: 'प्रवासी परिवारों का संवाद, खेलकूद प्रतियोगिताएं और गाँव के पुराने संस्मरण।',
      },
      icon: <Facebook className="w-6 h-6 text-blue-400" />,
      color: 'from-blue-600 to-indigo-600',
      actionUrl: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      badge: 'Community',
    },
    {
      id: 'telegram',
      name: { en: 'Telegram Canal Notice Board', hi: 'टेलीग्राम नहरी सूचना बोर्ड' },
      handle: '@KishanpuraCanalAlerts',
      members: '890+ farmers',
      description: {
        en: 'Real-time Himalayan canal discharge notifications and seasonal water schedules.',
        hi: 'गंग नहर से छोड़े जाने वाले पानी की मात्रा व डिग्गी भराव का तात्कालिक अलर्ट।',
      },
      icon: <Send className="w-6 h-6 text-cyan-400" />,
      color: 'from-cyan-600 to-teal-600',
      actionUrl: `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`,
      badge: 'Irrigation',
    },
  ];

  const quickShareButtons = [
    {
      name: 'WhatsApp',
      icon: <MessageCircle className="w-4 h-4 text-emerald-400" />,
      url: `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`,
      bg: 'hover:bg-emerald-500/20 hover:border-emerald-500/40',
    },
    {
      name: 'X (Twitter)',
      icon: <Twitter className="w-4 h-4 text-cyan-400" />,
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareTitle)}&url=${encodeURIComponent(shareUrl)}`,
      bg: 'hover:bg-cyan-500/20 hover:border-cyan-500/40',
    },
    {
      name: 'Facebook',
      icon: <Facebook className="w-4 h-4 text-blue-400" />,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      bg: 'hover:bg-blue-500/20 hover:border-blue-500/40',
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-4 h-4 text-sky-400" />,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      bg: 'hover:bg-sky-500/20 hover:border-sky-500/40',
    },
    {
      name: 'Telegram',
      icon: <Send className="w-4 h-4 text-teal-400" />,
      url: `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`,
      bg: 'hover:bg-teal-500/20 hover:border-teal-500/40',
    },
  ];

  return (
    <motion.section
      id="social"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`py-20 relative overflow-hidden border-t ${
        theme === 'dark' ? 'border-white/10' : 'border-slate-200'
      }`}
    >
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <div className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider mb-2 px-3.5 py-1 rounded-full border font-mono ${
            theme === 'dark'
              ? 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20'
              : 'text-cyan-700 bg-cyan-50 border-cyan-200'
          }`}>
            <Share2 className="w-4 h-4" />
            <span>
              {currentLang === 'en'
                ? 'Social Networking & Diaspora Connect'
                : 'सोशल नेटवर्किंग एवं प्रवासी समाज नेटवर्क'}
            </span>
          </div>
          <h2 className={`text-3xl sm:text-5xl font-extrabold font-display-modern ${
            theme === 'dark' ? 'text-white' : 'text-slate-950'
          }`}>
            {currentLang === 'en' ? 'Connect With Kishanpura' : 'किशनपुरा से जुड़े व गर्व से साझा करें'}
          </h2>
          <p className={`text-xs sm:text-sm mt-2 ${
            theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
          }`}>
            {currentLang === 'en'
              ? 'Join our community broadcast channels, share our village portfolio worldwide, and stay connected with our agrarian roots.'
              : 'गाँव के आधिकारिक सूचना चैनलों से जुड़ें, देश-विदेश में बसे प्रवासियों के साथ अपनी विरासत साझा करें।'}
          </p>
        </motion.div>

        {/* Feature Tabs: Channels vs 1-Click Share vs Live Preview */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className={`p-1.5 rounded-2xl border backdrop-blur-xl flex items-center gap-1 ${
            theme === 'dark'
              ? 'bg-slate-900/90 border-white/15'
              : 'bg-white border-slate-200 shadow-md'
          }`}>
            <button
              onClick={() => setActivePlatformTab('channels')}
              className={`relative px-4 py-2 text-xs font-semibold rounded-xl transition-all cursor-pointer ${
                activePlatformTab === 'channels'
                  ? 'text-white'
                  : theme === 'dark'
                  ? 'text-slate-400 hover:text-white'
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              {activePlatformTab === 'channels' && (
                <motion.div
                  layoutId="activeSocialTab"
                  className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl shadow-md"
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5" />
                <span>{currentLang === 'en' ? 'Community Channels' : 'सोशल चैनल'}</span>
              </span>
            </button>

            <button
              onClick={() => setActivePlatformTab('share')}
              className={`relative px-4 py-2 text-xs font-semibold rounded-xl transition-all cursor-pointer ${
                activePlatformTab === 'share'
                  ? 'text-white'
                  : theme === 'dark'
                  ? 'text-slate-400 hover:text-white'
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              {activePlatformTab === 'share' && (
                <motion.div
                  layoutId="activeSocialTab"
                  className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl shadow-md"
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-1.5">
                <Share2 className="w-3.5 h-3.5" />
                <span>{currentLang === 'en' ? '1-Click Share' : 'शेयर करें'}</span>
              </span>
            </button>

            <button
              onClick={() => setActivePlatformTab('preview')}
              className={`relative px-4 py-2 text-xs font-semibold rounded-xl transition-all cursor-pointer ${
                activePlatformTab === 'preview'
                  ? 'text-white'
                  : theme === 'dark'
                  ? 'text-slate-400 hover:text-white'
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              {activePlatformTab === 'preview' && (
                <motion.div
                  layoutId="activeSocialTab"
                  className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl shadow-md"
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-1.5">
                <Globe2 className="w-3.5 h-3.5" />
                <span>{currentLang === 'en' ? 'Social Card Preview' : 'कार्ड प्रीव्यू'}</span>
              </span>
            </button>
          </div>
        </div>

        {/* Tab Content with AnimatePresence */}
        <AnimatePresence mode="wait">
          {activePlatformTab === 'channels' && (
            <motion.div
              key="channels"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
            >
              {socialChannels.map((channel) => (
                <motion.div
                  key={channel.id}
                  whileHover={{ y: -4, borderColor: 'rgba(16, 185, 129, 0.4)' }}
                  className={`p-6 rounded-3xl backdrop-blur-2xl border shadow-xl flex flex-col justify-between transition-all relative overflow-hidden ${
                    theme === 'dark'
                      ? 'bg-slate-900/80 border-white/10'
                      : 'bg-white border-slate-200 shadow-md'
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center ${
                        theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-slate-100 border-slate-200'
                      }`}>
                        {channel.icon}
                      </div>
                      <span className={`text-[10px] font-mono uppercase px-2.5 py-1 rounded-full border font-bold ${
                        theme === 'dark'
                          ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                          : 'bg-emerald-50 text-emerald-700 border-emerald-200'
                      }`}>
                        {channel.badge}
                      </span>
                    </div>

                    <div>
                      <h3 className={`text-lg font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                        {channel.name[currentLang]}
                      </h3>
                      <div className={`flex items-center gap-2 text-xs font-mono mt-0.5 ${
                        theme === 'dark' ? 'text-slate-400' : 'text-slate-500'
                      }`}>
                        <span className={theme === 'dark' ? 'text-emerald-400' : 'text-emerald-700 font-semibold'}>{channel.handle}</span>
                        <span>·</span>
                        <span>{channel.members}</span>
                      </div>
                    </div>

                    <p className={`text-xs leading-relaxed ${
                      theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
                    }`}>
                      {channel.description[currentLang]}
                    </p>
                  </div>

                  <div className={`pt-5 mt-4 border-t flex items-center justify-between ${
                    theme === 'dark' ? 'border-white/10' : 'border-slate-200'
                  }`}>
                    <span className={`text-[11px] font-mono ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
                      PIN 335062 · Sadulshahar
                    </span>
                    <a
                      href={channel.actionUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all shadow-sm cursor-pointer ${
                        theme === 'dark'
                          ? 'bg-white/10 hover:bg-white/20 text-white'
                          : 'bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200'
                      }`}
                    >
                      <span>Join & Share</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activePlatformTab === 'share' && (
            <motion.div
              key="share"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className={`max-w-3xl mx-auto backdrop-blur-2xl rounded-3xl p-6 sm:p-8 border shadow-2xl mb-12 ${
                theme === 'dark'
                  ? 'bg-slate-900/90 border-white/15'
                  : 'bg-white border-slate-200 shadow-xl'
              }`}
            >
              <div className="text-center mb-6">
                <div className="flex justify-center mb-3">
                  <VillageLogo size="lg" variant="emblem" theme={theme} />
                </div>
                <h3 className={`text-xl font-bold font-display-modern ${
                  theme === 'dark' ? 'text-white' : 'text-slate-900'
                }`}>
                  {currentLang === 'en'
                    ? 'Share Kishanpura With Family & Friends'
                    : 'किशनपुरा का लिंक सीधे सोशल मीडिया पर साझा करें'}
                </h3>
                <p className={`text-xs mt-1 max-w-md mx-auto ${
                  theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  {currentLang === 'en'
                    ? 'Spread the word about northern Rajasthan’s premier citrus capital and centennial heritage.'
                    : 'गाँव की पहचान, किन्नू बागवानी और 100 वर्षीय गौरवशाली इतिहास को दुनिया भर में पहुँचाएं।'}
                </p>
              </div>

              {/* Quick 1-click platform buttons */}
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-6">
                {quickShareButtons.map((btn) => (
                  <motion.a
                    key={btn.name}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    href={btn.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center justify-center gap-2 text-xs font-semibold text-white transition-all cursor-pointer ${btn.bg}`}
                  >
                    {btn.icon}
                    <span>{btn.name}</span>
                  </motion.a>
                ))}
              </div>

              {/* Copy Link Input Bar */}
              <div className={`p-3 rounded-2xl border flex items-center justify-between gap-3 ${
                theme === 'dark' ? 'bg-black/60 border-white/10' : 'bg-slate-100 border-slate-200'
              }`}>
                <span className={`text-xs font-mono truncate pl-2 ${
                  theme === 'dark' ? 'text-slate-400' : 'text-slate-700'
                }`}>
                  {shareUrl}
                </span>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleCopyLink}
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-semibold flex items-center gap-1.5 shrink-0 shadow-md cursor-pointer transition-all"
                >
                  {copiedLink ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedLink ? 'Copied Link!' : 'Copy Link'}</span>
                </motion.button>
              </div>
            </motion.div>
          )}

          {activePlatformTab === 'preview' && (
            <motion.div
              key="preview"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className={`max-w-2xl mx-auto backdrop-blur-2xl rounded-3xl p-6 sm:p-8 border shadow-2xl mb-12 ${
                theme === 'dark'
                  ? 'bg-slate-900/90 border-white/15'
                  : 'bg-white border-slate-200 shadow-xl'
              }`}
            >
              <div className={`text-xs font-mono font-bold uppercase mb-3 flex items-center gap-2 ${
                theme === 'dark' ? 'text-emerald-400' : 'text-emerald-700'
              }`}>
                <Sparkles className="w-4 h-4" />
                <span>OPENGRAPH & SOCIAL SHARE CARD SIMULATOR</span>
              </div>

              {/* Card Container simulating WhatsApp/Facebook rich snippet */}
              <div className={`rounded-2xl overflow-hidden border shadow-xl ${
                theme === 'dark' ? 'border-white/15 bg-black/60' : 'border-slate-200 bg-slate-50'
              }`}>
                {/* Banner / Visual */}
                <div className="relative aspect-[16/9] w-full bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 flex flex-col items-center justify-center p-6 text-center border-b border-white/10">
                  <VillageLogo size="xl" variant="emblem" theme="dark" />
                  <div className="mt-3">
                    <span className="text-lg font-extrabold font-display-modern text-white block">
                      Kishanpura (Utrada) · Rajasthan
                    </span>
                    <span className="text-xs font-mono text-emerald-300">
                      29.8885° N, 74.2898° E · PIN 335062
                    </span>
                  </div>
                </div>

                {/* Card Meta Content */}
                <div className="p-4 space-y-1.5">
                  <div className="text-[11px] font-mono uppercase text-slate-500">
                    KISHANPURA-UTRADA.VILLAGE
                  </div>
                  <h4 className={`text-sm font-bold leading-snug ${
                    theme === 'dark' ? 'text-white' : 'text-slate-900'
                  }`}>
                    Kishanpura Utrada - Village Portfolio & Heritage (Est. 1926)
                  </h4>
                  <p className={`text-xs line-clamp-2 ${
                    theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
                  }`}>
                    Official digital archive of Kishanpura (Utrada), Rajasthan 335062. Celebrating a century of resilient education (GSSS 1926), sweet Kinnow orchards, and canal lifelines.
                  </p>
                </div>
              </div>

              <div className={`mt-4 flex items-center justify-between text-xs font-mono ${
                theme === 'dark' ? 'text-slate-400' : 'text-slate-500'
              }`}>
                <span>Schema: Place · EducationalOrg · WebSite</span>
                <button
                  onClick={handleCopyLink}
                  className={`font-semibold cursor-pointer ${
                    theme === 'dark' ? 'text-emerald-400 hover:text-emerald-300' : 'text-emerald-700 hover:text-emerald-800'
                  }`}
                >
                  {copiedLink ? 'Link Copied!' : 'Copy Share URL'}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Global Diaspora Registry Highlight Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className={`p-6 sm:p-8 rounded-3xl border flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-2xl ${
            theme === 'dark'
              ? 'bg-gradient-to-r from-emerald-950/70 via-slate-900/90 to-cyan-950/70 border-emerald-500/30 text-white'
              : 'bg-gradient-to-r from-emerald-50 via-teal-50 to-cyan-50 border-emerald-300 text-slate-900 shadow-lg'
          }`}
        >
          <div className="space-y-2 max-w-xl">
            <div className={`flex items-center gap-2 text-xs font-semibold uppercase tracking-wider font-mono ${
              theme === 'dark' ? 'text-emerald-300' : 'text-emerald-800'
            }`}>
              <HeartHandshake className="w-4 h-4 text-amber-500" />
              <span>Global Diaspora Connect</span>
            </div>
            <h3 className={`text-xl sm:text-2xl font-bold font-display-modern ${
              theme === 'dark' ? 'text-white' : 'text-slate-950'
            }`}>
              {currentLang === 'en'
                ? 'Are you a native or descendant of Kishanpura living abroad?'
                : 'क्या आप या आपके पूर्वज किशनपुरा से हैं और बाहर निवासरत हैं?'}
            </h3>
            <p className={`text-xs leading-relaxed ${
              theme === 'dark' ? 'text-slate-300' : 'text-slate-700'
            }`}>
              {currentLang === 'en'
                ? 'Join our worldwide registry. Share stories, support village infrastructure, and stay connected with community milestones.'
                : 'गाँव की अतिथि पंजिका में अपना संदेश दर्ज करें और अपनी मिट्टी से सदा जुड़े रहें।'}
            </p>
          </div>

          <a
            href="#visitor"
            className="px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-semibold text-xs transition-all shadow-lg flex items-center gap-2 shrink-0 cursor-pointer self-start md:self-auto border border-emerald-400/30"
          >
            <Users className="w-4 h-4" />
            <span>{currentLang === 'en' ? 'Leave Guestbook Note' : 'पंजिका में संदेश लिखें'}</span>
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};
