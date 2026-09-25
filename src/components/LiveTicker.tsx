import React from 'react';
import { motion } from 'motion/react';
import { CloudSun, Droplet, Sparkles, Navigation, Award, Calendar } from 'lucide-react';

interface LiveTickerProps {
  currentLang: 'en' | 'hi';
  theme: 'dark' | 'light';
}

export const LiveTicker: React.FC<LiveTickerProps> = ({ currentLang, theme }) => {
  const tickerItems = [
    {
      icon: <CloudSun className="w-3.5 h-3.5 text-amber-400" />,
      text: currentLang === 'en' ? 'Weather in Sadulshahar/Kishanpura: 24°C Sunny · AQI 52 (Good)' : 'किशनपुरा मौसम: 24°C सुहावना · वायु गुणवत्ता: उत्तम (AQI 52)',
    },
    {
      icon: <Droplet className="w-3.5 h-3.5 text-cyan-400" />,
      text: currentLang === 'en' ? 'Canal Flow: Active Schedule · Vara-Bandi Distribution Active' : 'नहरी जल वितरण: सक्रिय प्रवाह · वारा-बंदी व्यवस्था सुचारू',
    },
    {
      icon: <Sparkles className="w-3.5 h-3.5 text-emerald-400" />,
      text: currentLang === 'en' ? 'Kinnow Mandarin Belt: Fruit Ripening High Sugar Index (12.4° Brix)' : 'किन्नू बागान: मीठा रसीला किन्नू फल तुड़ाई व लदान प्रगति पर',
    },
    {
      icon: <Award className="w-3.5 h-3.5 text-yellow-400" />,
      text: currentLang === 'en' ? 'Centennial Landmark: GSSS Kishanpura Uttaradha Celebrating 100 Years (1926–2026)' : 'शताब्दी गौरव: राजकीय उच्च माध्यमिक विद्यालय 100 वर्ष (1926–2026)',
    },
    {
      icon: <Navigation className="w-3.5 h-3.5 text-emerald-400" />,
      text: currentLang === 'en' ? 'Geo Coordinates: 29.8885° N, 74.2898° E · PIN 335062' : 'भू-स्थान: 29.8885° N, 74.2898° E · पिन 335062',
    },
  ];

  return (
    <div
      className={`border-b transition-colors overflow-hidden py-1.5 text-xs font-medium z-40 relative ${
        theme === 'dark'
          ? 'bg-[#080D1A]/90 border-white/5 text-slate-300'
          : 'bg-white/90 border-slate-200 text-slate-600'
      }`}
    >
      <div className="flex whitespace-nowrap animate-marquee">
        {[...tickerItems, ...tickerItems].map((item, index) => (
          <div key={index} className="flex items-center gap-2 mx-6 shrink-0">
            {item.icon}
            <span className="font-mono text-[11px] tracking-wide">{item.text}</span>
            <span className="text-slate-600 dark:text-slate-700 ml-4">/</span>
          </div>
        ))}
      </div>
    </div>
  );
};
