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
      className="py-20 relative overflow-hidden border-t border-white/10"
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
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400 mb-1 font-mono">
              <Building2 className="w-4 h-4" />
              <span>
                {currentLang === 'en'
                  ? 'Citizen Services & Civic Directory'
                  : 'लोक सेवाएँ, ग्राम पंचायत व जनसुविधाएं'}
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display-modern text-white">
              {currentLang === 'en' ? 'Village Public Directory' : 'किशनपुरा नागरिक सेवा निर्देशिका'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-xl">
              {currentLang === 'en'
                ? 'Direct access to local governance, healthcare, post office (PIN 335062), veterinary services, and education institutions.'
                : 'ग्राम पंचायत, प्राथमिक स्वास्थ्य केंद्र, डाकघर, विद्यालय और कृषि सेवा केंद्र की प्रामाणिक जानकारी व समय सारिणी।'}
            </p>
          </div>

          {/* Modern Glass Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={currentLang === 'en' ? 'Search service or office...' : 'सेवा या विभाग खोजें...'}
              className="w-full pl-10 pr-4 py-2.5 text-xs rounded-xl bg-white/5 border border-white/15 focus:outline-none focus:ring-2 focus:ring-emerald-400/40 text-white placeholder-slate-500 backdrop-blur-md shadow-inner"
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
                    : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10'
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
                className="bg-slate-900/80 backdrop-blur-2xl rounded-3xl p-6 border border-white/10 shadow-xl flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-emerald-400">
                      {contact.contactType === 'panchayat' && <Building2 className="w-6 h-6 text-emerald-400" />}
                      {contact.contactType === 'medical' && <Stethoscope className="w-6 h-6 text-rose-400" />}
                      {contact.contactType === 'education' && <GraduationCap className="w-6 h-6 text-amber-400" />}
                      {contact.contactType === 'postal' && <Mail className="w-6 h-6 text-cyan-400" />}
                      {contact.contactType === 'agriculture' && <Tractor className="w-6 h-6 text-lime-400" />}
                    </div>
                    <span className="text-[10px] font-mono uppercase text-slate-400 bg-white/5 px-2.5 py-1 rounded-full border border-white/10">
                      {contact.contactType}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-white">
                      {contact.role[currentLang]}
                    </h3>
                    <p className="text-xs text-emerald-400 font-semibold mt-0.5">
                      {contact.name[currentLang]}
                    </p>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {contact.service[currentLang]}
                  </p>

                  <div className="space-y-1.5 text-xs text-slate-400 pt-2 border-t border-white/10 font-mono">
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 shrink-0 text-slate-500" />
                      <span className="truncate">{contact.timing}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-500" />
                      <span className="truncate">{contact.location[currentLang]}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500 font-medium flex items-center gap-1 font-mono">
                    <ShieldCheck className="w-3 h-3 text-emerald-400" />
                    <span>Public Civic Office</span>
                  </span>
                  <span className="text-xs font-semibold text-emerald-400">
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
          className="bg-slate-900/80 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 border border-white/15 shadow-2xl"
        >
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-400 mb-4 font-mono">
            <PhoneCall className="w-4 h-4" />
            <span>{currentLang === 'en' ? 'Essential & Emergency Helplines' : 'आपातकालीन सहायता नंबर'}</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono">
            <motion.div whileHover={{ scale: 1.02 }} className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <span className="font-bold text-white block">Medical Ambulance</span>
              <span className="text-xl font-extrabold text-rose-400 block mt-1">108 / 102</span>
              <span className="text-[10px] text-slate-400">Govt Emergency Response</span>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <span className="font-bold text-white block">Police Helpline</span>
              <span className="text-xl font-extrabold text-cyan-400 block mt-1">112</span>
              <span className="text-[10px] text-slate-400">Sadulshahar Circle</span>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <span className="font-bold text-white block">Kisan Advisory</span>
              <span className="text-lg font-extrabold text-emerald-400 block mt-1 truncate">1800-180-1551</span>
              <span className="text-[10px] text-slate-400">Mandi & Crop Support</span>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <span className="font-bold text-white block">Postal Code</span>
              <span className="text-xl font-extrabold text-amber-400 block mt-1">335062</span>
              <span className="text-[10px] text-slate-400">Kishanpura Utrada B.O.</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};
