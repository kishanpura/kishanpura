import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Building2,
  Stethoscope,
  GraduationCap,
  Mail,
  Tractor,
  Clock,
  MapPin,
  PhoneCall,
  Search,
  ShieldCheck,
} from 'lucide-react';
import { DIRECTORY_CONTACTS } from '../data/villageData';

interface PublicDirectoryProps {
  currentLang: 'en' | 'hi';
  theme: 'dark' | 'light';
}

export const PublicDirectory: React.FC<PublicDirectoryProps> = ({ currentLang, theme }) => {
  const [filterType, setFilterType] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filterTabs = [
    { id: 'all', label: { en: 'All Services', hi: 'सभी सेवाएँ' } },
    { id: 'panchayat', label: { en: 'Panchayat & Civic', hi: 'पंचायत प्रशासन' } },
    { id: 'medical', label: { en: 'Health & Hospital', hi: 'स्वास्थ्य केंद्र' } },
    { id: 'education', label: { en: 'Schools & Education', hi: 'शिक्षा व स्कूल' } },
    { id: 'postal', label: { en: 'Postal (335062)', hi: 'डाकघर (335062)' } },
    { id: 'agriculture', label: { en: 'Krishi & Cooperative', hi: 'कृषि व सहकारी' } },
  ];

  const filteredContacts = DIRECTORY_CONTACTS.filter((contact) => {
    const matchesFilter = filterType === 'all' || contact.contactType === filterType;
    const matchesSearch =
      searchQuery.trim() === '' ||
      contact.role[currentLang].toLowerCase().includes(searchQuery.toLowerCase()) ||
      contact.name[currentLang].toLowerCase().includes(searchQuery.toLowerCase()) ||
      contact.service[currentLang].toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <motion.section
      id="directory"
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
          className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4"
        >
          <div>
            <div className={`flex items-center gap-2 text-xs font-bold uppercase tracking-wider mb-1 font-mono ${
              theme === 'dark' ? 'text-emerald-400' : 'text-emerald-700'
            }`}>
              <Building2 className="w-4 h-4" />
              <span>
                {currentLang === 'en'
                  ? 'Citizen Services & Civic Directory'
                  : 'लोक सेवाएँ, ग्राम पंचायत व जनसुविधाएं'}
              </span>
            </div>
            <h2 className={`text-3xl sm:text-5xl font-extrabold font-display-modern ${
              theme === 'dark' ? 'text-white' : 'text-slate-950'
            }`}>
              {currentLang === 'en' ? 'Village Public Directory' : 'किशनपुरा नागरिक सेवा निर्देशिका'}
            </h2>
            <p className={`text-xs sm:text-sm mt-1 max-w-xl ${
              theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
            }`}>
              {currentLang === 'en'
                ? 'Direct access to local governance, healthcare, post office (PIN 335062), veterinary services, and education institutions.'
                : 'ग्राम पंचायत, प्राथमिक स्वास्थ्य केंद्र, डाकघर, विद्यालय और कृषि सेवा केंद्र की प्रामाणिक जानकारी व समय सारिणी।'}
            </p>
          </div>

          {/* Modern Glass Search Box */}
          <div className="relative w-full md:w-80">
            <Search className={`w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 ${
              theme === 'dark' ? 'text-slate-400' : 'text-slate-500'
            }`} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={currentLang === 'en' ? 'Search service or office...' : 'सेवा या विभाग खोजें...'}
              className={`w-full pl-10 pr-4 py-2.5 text-xs rounded-xl border focus:outline-none focus:ring-2 focus:ring-emerald-400/40 backdrop-blur-md shadow-inner transition-colors ${
                theme === 'dark'
                  ? 'bg-white/5 border-white/15 text-white placeholder-slate-500'
                  : 'bg-white border-slate-300 text-slate-900 placeholder-slate-400 shadow-xs'
              }`}
            />
          </div>
        </motion.div>

        {/* Animated Filter Buttons */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 scrollbar-none">
          {filterTabs.map((tab) => {
            const isSelected = filterType === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setFilterType(tab.id)}
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
                    layoutId="activeDirectoryTab"
                    className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl shadow-[0_0_15px_rgba(16,185,129,0.4)]"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab.label[currentLang]}</span>
              </button>
            );
          })}
        </div>

        {/* Contacts Cards Grid with AnimatePresence */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <AnimatePresence>
            {filteredContacts.map((contact) => (
              <motion.div
                layout
                key={contact.role.en}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -5, borderColor: 'rgba(16, 185, 129, 0.4)' }}
                className={`backdrop-blur-2xl rounded-3xl p-6 border shadow-xl flex flex-col justify-between ${
                  theme === 'dark'
                    ? 'bg-slate-900/80 border-white/10'
                    : 'bg-white border-slate-200 shadow-lg'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center ${
                      theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-slate-100 border-slate-200'
                    }`}>
                      {contact.contactType === 'panchayat' && <Building2 className="w-6 h-6 text-emerald-500" />}
                      {contact.contactType === 'medical' && <Stethoscope className="w-6 h-6 text-rose-500" />}
                      {contact.contactType === 'education' && <GraduationCap className="w-6 h-6 text-amber-500" />}
                      {contact.contactType === 'postal' && <Mail className="w-6 h-6 text-cyan-500" />}
                      {contact.contactType === 'agriculture' && <Tractor className="w-6 h-6 text-lime-600 dark:text-lime-400" />}
                    </div>
                    <span className={`text-[10px] font-mono uppercase px-2.5 py-1 rounded-full border ${
                      theme === 'dark'
                        ? 'text-slate-400 bg-white/5 border-white/10'
                        : 'text-slate-600 bg-slate-100 border-slate-200 font-semibold'
                    }`}>
                      {contact.contactType}
                    </span>
                  </div>

                  <div>
                    <h3 className={`text-base font-bold ${
                      theme === 'dark' ? 'text-white' : 'text-slate-900'
                    }`}>
                      {contact.role[currentLang]}
                    </h3>
                    <p className={`text-xs font-semibold mt-0.5 ${
                      theme === 'dark' ? 'text-emerald-400' : 'text-emerald-700'
                    }`}>
                      {contact.name[currentLang]}
                    </p>
                  </div>

                  <p className={`text-xs leading-relaxed ${
                    theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
                  }`}>
                    {contact.service[currentLang]}
                  </p>

                  <div className={`space-y-1.5 text-xs pt-2 border-t font-mono ${
                    theme === 'dark' ? 'text-slate-400 border-white/10' : 'text-slate-500 border-slate-200'
                  }`}>
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                      <span className="truncate">{contact.timing}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                      <span className="truncate">{contact.location[currentLang]}</span>
                    </div>
                  </div>
                </div>

                <div className={`mt-5 pt-3 border-t flex items-center justify-between ${
                  theme === 'dark' ? 'border-white/10' : 'border-slate-200'
                }`}>
                  <span className={`text-[11px] font-medium flex items-center gap-1 font-mono ${
                    theme === 'dark' ? 'text-slate-500' : 'text-slate-500'
                  }`}>
                    <ShieldCheck className="w-3 h-3 text-emerald-500" />
                    <span>Public Civic Office</span>
                  </span>
                  <span className={`text-xs font-semibold ${
                    theme === 'dark' ? 'text-emerald-400' : 'text-emerald-700'
                  }`}>
                    {currentLang === 'en' ? 'Open for Citizens' : 'नागरिकों हेतु उपलब्ध'}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Emergency & Key Helplines Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`backdrop-blur-2xl rounded-3xl p-6 sm:p-8 border shadow-2xl ${
            theme === 'dark'
              ? 'bg-slate-900/80 border-white/15'
              : 'bg-white border-slate-200 shadow-xl'
          }`}
        >
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-500 dark:text-orange-400 mb-4 font-mono">
            <PhoneCall className="w-4 h-4" />
            <span>{currentLang === 'en' ? 'Essential & Emergency Helplines' : 'आपातकालीन सहायता नंबर'}</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono">
            <motion.div whileHover={{ scale: 1.02 }} className={`p-4 rounded-2xl border ${
              theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-slate-50 border-slate-200'
            }`}>
              <span className={`font-bold block ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Medical Ambulance</span>
              <span className="text-xl font-extrabold text-rose-500 dark:text-rose-400 block mt-1">108 / 102</span>
              <span className={`text-[10px] ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>Govt Emergency Response</span>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} className={`p-4 rounded-2xl border ${
              theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-slate-50 border-slate-200'
            }`}>
              <span className={`font-bold block ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Police Helpline</span>
              <span className="text-xl font-extrabold text-cyan-600 dark:text-cyan-400 block mt-1">112</span>
              <span className={`text-[10px] ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>Sadulshahar Circle</span>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} className={`p-4 rounded-2xl border ${
              theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-slate-50 border-slate-200'
            }`}>
              <span className={`font-bold block ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Kisan Advisory</span>
              <span className="text-lg font-extrabold text-emerald-600 dark:text-emerald-400 block mt-1 truncate">1800-180-1551</span>
              <span className={`text-[10px] ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>Mandi & Crop Support</span>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} className={`p-4 rounded-2xl border ${
              theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-slate-50 border-slate-200'
            }`}>
              <span className={`font-bold block ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Postal Code</span>
              <span className="text-xl font-extrabold text-amber-500 dark:text-amber-400 block mt-1">335062</span>
              <span className={`text-[10px] ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>Kishanpura Utrada B.O.</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};
