import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { FaShieldAlt, FaBug, FaNetworkWired, FaClipboardCheck, FaSearch, FaLock, FaCode, FaGlobe } from 'react-icons/fa';

const categories = [
  { title: 'Security Testing Tools', icon: FaBug, color: '#34D399', items: [['Burp Suite', FaSearch], ['Nessus', FaBug], ['Metasploit Framework', FaCode], ['Nmap', FaNetworkWired], ['Nexpose', FaSearch], ['Invicti', FaShieldAlt], ['Netsparker', FaShieldAlt], ['Acunetix', FaBug]] },
  { title: 'Network & Traffic Analysis', icon: FaNetworkWired, color: '#34D399', items: [['Wireshark', FaNetworkWired], ['Bettercap', FaCode]] },
  { title: 'Methodologies & Standards', icon: FaClipboardCheck, color: '#34D399', items: [['OWASP Top 10', FaShieldAlt], ['PCI-DSS', FaLock], ['CVSS Scoring', FaClipboardCheck], ['SBP IT Security Guidelines', FaGlobe], ['HIPAA', FaLock]] },
];

const TechStackCarousel = () => {
  const [activeCategory, setActiveCategory] = useState(0); const { scrollY } = useScroll(); const parallaxY = useTransform(scrollY, [0, 1000], [0, 200]);
  const active = categories[activeCategory];
  return <section className="py-20 bg-[#101722] text-white relative overflow-hidden">
    <motion.div className="absolute inset-0 z-0 pointer-events-none" style={{ y: parallaxY, background: 'linear-gradient(120deg, rgba(15,118,110,0.05) 0%, rgba(36,74,105,0.04) 100%)', willChange: 'transform' }} aria-hidden="true" />
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.1, type: 'spring', stiffness: 120, damping: 18 }} viewport={{ once: true, margin: '-100px' }} className="text-center mb-16"><motion.h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Technical Skills &amp; Tools</motion.h2><motion.p className="text-xl text-slate-300 max-w-3xl mx-auto">Security testing tools, traffic analysis, and assessment standards.</motion.p></motion.div>
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.1, delay: .4 }} viewport={{ once: true }} className="mb-12"><div className="flex flex-wrap justify-center gap-3">{categories.map((category, index) => <motion.button key={category.title} onClick={() => setActiveCategory(index)} className={`flex items-center gap-2 px-4 py-3 rounded-xl font-medium transition-all duration-300 cursor-pointer ${activeCategory === index ? 'bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 shadow-lg shadow-emerald-500/20' : 'bg-[#172331] text-slate-300 hover:bg-[#1e2d3c] border border-white/10'}`} whileHover={{ scale: 1.05 }} whileTap={{ scale: .95 }} style={{ backdropFilter: 'blur(8px)' }}><category.icon className="w-5 h-5" /><span>{category.title}</span></motion.button>)}</div></motion.div>
      <AnimatePresence mode="wait"><motion.div key={activeCategory} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -30 }} transition={{ duration: .7, type: 'spring', stiffness: 120, damping: 18 }} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">{active.items.map(([name, Icon], index) => <motion.div key={name} className="group relative bg-[#172331] rounded-2xl p-6 border border-white/10 shadow-lg hover:shadow-xl transition-all duration-300" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: index * .1 }} whileHover={{ scale: 1.05, y: -5, boxShadow: '0 20px 40px rgba(0,0,0,0.25)' }}><div className="flex flex-col items-center text-center space-y-3"><div className="w-16 h-16 rounded-xl flex items-center justify-center text-2xl" style={{ backgroundColor: `${active.color}20`, color: active.color }}><Icon className="w-8 h-8" /></div><h3 className="font-semibold text-white text-sm">{name}</h3></div><div className="absolute inset-0 rounded-2xl bg-emerald-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" /></motion.div>)}</motion.div></AnimatePresence>
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.1, delay: .6 }} viewport={{ once: true }} className="mt-12 text-center"><div className="inline-flex items-center gap-3 px-6 py-3 bg-[#172331] rounded-xl border border-white/10"><active.icon className="w-6 h-6" style={{ color: active.color }} /><span className="font-medium">{active.title}</span></div></motion.div>
    </div>
  </section>;
};
export default TechStackCarousel;
