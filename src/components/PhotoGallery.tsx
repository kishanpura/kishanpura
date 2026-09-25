import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { VILLAGE_GALLERY, GalleryItem } from '../data/villageData';

interface PhotoGalleryProps {
  currentLang: 'en' | 'hi';
  theme: 'dark' | 'light';
}

export const PhotoGallery: React.FC<PhotoGalleryProps> = ({ currentLang, theme }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activePhoto, setActivePhoto] = useState<GalleryItem | null>(null);

  const categories = [
    { id: 'all', label: { en: 'All Photos', hi: 'सभी चित्र' } },
    { id: 'farming', label: { en: 'Kinnow & Farming', hi: 'किन्नू व खेती' } },
    { id: 'nature', label: { en: 'Mustard & Canals', hi: 'सरसों व नहरें' } },
    { id: 'heritage', label: { en: 'Centennial Heritage', hi: 'विरासत व स्कूल' } },
    { id: 'community', label: { en: 'Village Folks & Chaupal', hi: 'ग्रामीण व चौपाल' } },
  ];

  const filteredPhotos = selectedCategory === 'all'
    ? VILLAGE_GALLERY
    : VILLAGE_GALLERY.filter((p) => p.category === selectedCategory);

  const handleNext = () => {
    if (!activePhoto) return;
    const currentIndex = filteredPhotos.findIndex((p) => p.id === activePhoto.id);
    const nextIndex = (currentIndex + 1) % filteredPhotos.length;
    setActivePhoto(filteredPhotos[nextIndex]);
  };

  const handlePrev = () => {
    if (!activePhoto) return;
    const currentIndex = filteredPhotos.findIndex((p) => p.id === activePhoto.id);
    const prevIndex = (currentIndex - 1 + filteredPhotos.length) % filteredPhotos.length;
    setActivePhoto(filteredPhotos[prevIndex]);
  };

  return (
    <motion.section
      id="gallery"
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
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <div className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider mb-2 px-3.5 py-1 rounded-full border font-mono ${
            theme === 'dark'
              ? 'text-orange-400 bg-orange-500/10 border-orange-500/20'
              : 'text-orange-600 bg-orange-50 border-orange-200'
          }`}>
            <Camera className="w-4 h-4" />
            <span>
              {currentLang === 'en'
                ? 'Visual Archive & Photo Chronicles'
                : 'चित्र वीथिका एवं दृश्य दस्तावेज़'}
            </span>
          </div>
          <h2 className={`text-3xl sm:text-5xl font-extrabold font-display-modern ${
            theme === 'dark' ? 'text-white' : 'text-slate-950'
          }`}>
            {currentLang === 'en' ? 'Glimpses of Kishanpura' : 'किशनपुरा की मनमोहक छवियाँ'}
          </h2>
          <p className={`text-xs sm:text-sm mt-2 ${
            theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
          }`}>
            {currentLang === 'en'
              ? 'Capturing the seasonal hues of yellow mustard, orange kinnow orchards, gushing canal water, and heartwarming smiles.'
              : 'सरसों के पीले रंग, किन्नू के सुनहरे बाग, नहरी पानी की कलकल और गाँव के अपनों की मुस्कान को संजोती तस्वीरें।'}
          </p>
        </motion.div>

        {/* Category Tabs with Animated Pill */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`relative px-4 py-2 text-xs font-semibold rounded-xl shrink-0 transition-all cursor-pointer ${
                  isSelected
                    ? 'text-white'
                    : theme === 'dark'
                    ? 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10'
                    : 'bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 shadow-xs'
                }`}
              >
                {isSelected && (
                  <motion.div
                    layoutId="activeGalleryTab"
                    className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl shadow-[0_0_15px_rgba(16,185,129,0.4)]"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat.label[currentLang]}</span>
              </button>
            );
          })}
        </div>

        {/* Photo Grid with layout animations */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredPhotos.map((photo) => (
              <motion.div
                layout
                key={photo.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -6, borderColor: 'rgba(16, 185, 129, 0.4)' }}
                onClick={() => setActivePhoto(photo)}
                className={`group cursor-pointer rounded-3xl overflow-hidden backdrop-blur-xl border shadow-xl flex flex-col justify-between ${
                  theme === 'dark'
                    ? 'bg-slate-900/80 border-white/10'
                    : 'bg-white border-slate-200 shadow-md'
                }`}
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-800">
                  <img
                    src={photo.image}
                    alt={photo.title[currentLang]}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-xs">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-12 h-12 rounded-2xl bg-emerald-500/90 text-white flex items-center justify-center shadow-lg border border-emerald-300/40"
                    >
                      <Eye className="w-6 h-6" />
                    </motion.div>
                  </div>
                </div>

                <div className={`p-5 ${theme === 'dark' ? 'bg-slate-900/90' : 'bg-white'}`}>
                  <div className={`text-[10px] font-mono uppercase mb-1 font-bold ${
                    theme === 'dark' ? 'text-emerald-400' : 'text-emerald-700'
                  }`}>
                    {photo.category}
                  </div>
                  <h3 className={`text-base font-bold ${
                    theme === 'dark' ? 'text-white' : 'text-slate-900'
                  }`}>
                    {photo.title[currentLang]}
                  </h3>
                  <p className={`text-xs mt-1 line-clamp-2 ${
                    theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
                  }`}>
                    {photo.caption[currentLang]}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal with AnimatePresence */}
        <AnimatePresence>
          {activePhoto && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4"
            >
              <button
                onClick={() => setActivePhoto(null)}
                className="absolute top-5 right-5 text-white/80 hover:text-white p-2.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer border border-white/10"
                aria-label="Close photo preview"
              >
                <X className="w-6 h-6" />
              </button>

              <button
                onClick={handlePrev}
                className="absolute left-5 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-3.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer border border-white/10"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-5 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-3.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer border border-white/10"
                aria-label="Next photo"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                className="max-w-4xl w-full bg-slate-900 rounded-3xl overflow-hidden border border-white/20 shadow-2xl"
              >
                <div className="max-h-[70vh] flex items-center justify-center bg-black">
                  <img
                    src={activePhoto.image}
                    alt={activePhoto.title[currentLang]}
                    className="max-h-[70vh] w-auto max-w-full object-contain"
                  />
                </div>

                <div className="p-6 text-white bg-slate-900/95 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-white/10">
                  <div>
                    <div className="text-xs text-orange-400 font-mono font-semibold uppercase tracking-wider">
                      {activePhoto.category}
                    </div>
                    <h3 className="text-xl font-bold font-display-modern mt-0.5">
                      {activePhoto.title[currentLang]}
                    </h3>
                    <p className="text-xs text-slate-300 mt-1 max-w-xl">
                      {activePhoto.caption[currentLang]}
                    </p>
                  </div>

                  <div className="text-xs text-emerald-400 shrink-0 font-mono bg-emerald-500/10 px-3 py-1.5 rounded-xl border border-emerald-500/30">
                    Kishanpura · 335062
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
};
