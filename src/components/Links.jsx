import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin, FaPhoneAlt } from 'react-icons/fa';

const socialLinks = [
  { name: 'LinkedIn', icon: FaLinkedin, url: 'https://linkedin.com/in/nadir-hameed-80ba383a3', color: 'hover:text-emerald-300' },
  { name: 'GitHub', icon: FaGithub, url: 'https://github.com/NadirHameed', color: 'hover:text-emerald-300' },
  { name: 'Email', icon: FaEnvelope, url: 'mailto:nadir.hameed123@gmail.com', color: 'hover:text-emerald-300' },
  { name: 'Phone', icon: FaPhoneAlt, url: 'tel:+923485603538', color: 'hover:text-emerald-300' },
];

const Links = () => <section id="contact" className="py-20 relative overflow-hidden bg-[#101722] text-white">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 1.1 }}><h2 className="text-4xl md:text-5xl font-bold mb-6">Let’s Connect</h2><p className="text-xl text-slate-300 max-w-3xl mx-auto">Get in touch about vulnerability assessment, penetration testing, and red teaming.</p></motion.div>
    <motion.div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: '-100px' }} transition={{ staggerChildren: .1 }}>{socialLinks.map(({ name, icon: Icon, url, color }, index) => <motion.a key={name} href={url} target={name === 'LinkedIn' ? '_blank' : undefined} rel={name === 'LinkedIn' ? 'noopener noreferrer' : undefined} className="group relative rounded-2xl p-6 text-center bg-[#172331] border border-white/10 shadow-lg" initial={{ opacity: 0, y: 30, scale: .9 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * .1 }} whileHover={{ y: -8, scale: 1.05 }} whileTap={{ scale: .95 }}><div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#101722] flex items-center justify-center text-slate-200 text-3xl"><Icon className={color} /></div><h3 className="font-semibold text-sm">{name}</h3></motion.a>)}</motion.div>
    <motion.div className="max-w-2xl mx-auto" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: .7, delay: .3 }}><div className="rounded-2xl border border-white/10 bg-[#172331] p-8 text-center shadow-lg"><h3 className="text-2xl font-bold mb-3">Nadir Hameed</h3><p className="text-slate-300">Bagh, Azad Kashmir · <a className="text-emerald-300 underline" href="mailto:nadir.hameed123@gmail.com">nadir.hameed123@gmail.com</a></p><a href="tel:+923485603538" className="inline-block mt-5 px-8 py-4 rounded-xl font-bold text-lg text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-300 shadow-lg shadow-emerald-500/20">Call +92 348-5603538</a></div></motion.div>
    <motion.div className="text-center mt-16" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: .8 }}><p className="text-gray-400 dark:text-gray-500">© 2026 Nadir Hameed. All rights reserved.</p></motion.div>
  </div>
</section>;
export default Links;
