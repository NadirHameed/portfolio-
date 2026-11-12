import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const competencies = [
  'Vulnerability Assessment & Management',
  'Web Application Penetration Testing',
  'Network & Infrastructure Penetration Testing',
  'OWASP Top 10 & API Security Testing',
  'Security Misconfiguration & Weakness Identification',
  'Exploitation & Proof-of-Concept Development',
  'Security Controls Assessment & Hardening',
  'Vulnerability Prioritization & Risk Analysis',
  'Remediation Validation & Retesting',
];

const About = () => {
  const { scrollY } = useScroll(); const parallaxY = useTransform(scrollY, [0, 800], [0, 160]);
  return <section className="py-20 bg-[#101722] text-white relative overflow-hidden" id="about">
    <motion.div className="absolute inset-0 z-0 pointer-events-none" style={{ y: parallaxY, background: 'linear-gradient(120deg, rgba(15,118,110,0.05) 0%, rgba(36,74,105,0.04) 100%)', willChange: 'transform' }} aria-hidden="true" />
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.1, type: 'spring', stiffness: 120, damping: 18 }} viewport={{ once: true, amount: .3 }} className="text-center mb-16"><motion.h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-white" initial={{ opacity: 0, scale: .9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1.1, delay: .15 }} viewport={{ once: true }}>About Me</motion.h2><motion.div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-teal-300 mx-auto rounded-full" initial={{ width: 0 }} whileInView={{ width: 96 }} transition={{ duration: 1.1, delay: .3 }} viewport={{ once: true }} /></motion.div>
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1.1, type: 'spring', stiffness: 120, damping: 18 }} viewport={{ once: true, amount: .3 }} className="relative"><div className="relative"><motion.div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-400 rounded-2xl transform rotate-6" initial={{ opacity: 0, rotate: 0 }} whileInView={{ opacity: 1, rotate: 6 }} transition={{ duration: 1.1, delay: .2 }} viewport={{ once: true }} /><motion.img src={process.env.PUBLIC_URL + '/profile.jpg'} alt="Nadir Hameed" loading="lazy" width="600" height="384" className="relative w-full h-96 object-cover rounded-2xl shadow-2xl border-2 border-white/10" initial={{ opacity: 0, scale: .9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1.1, delay: .4 }} viewport={{ once: true }} whileHover={{ scale: 1.02 }} /></div><motion.div className="absolute -top-4 -right-4 bg-[#172331]/95 backdrop-blur-sm rounded-xl p-4 border border-emerald-400/30 shadow-xl" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.1, delay: .6 }} viewport={{ once: true }} whileHover={{ scale: 1.05 }}><div className="text-center"><div className="text-xl font-bold text-emerald-300">VAPT</div><div className="text-sm text-gray-300">Security Testing</div></div></motion.div></motion.div>
        <motion.div initial={{ opacity: 0, x: 60 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1.1, type: 'spring', stiffness: 120, damping: 18 }} viewport={{ once: true, amount: .3 }} className="space-y-6">
          <motion.h3 className="text-3xl font-bold mb-6 text-white" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.1, delay: .2 }} viewport={{ once: true }}>Information Security Analyst</motion.h3>
          <motion.p className="text-lg leading-relaxed text-slate-300" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.1, delay: .3 }} viewport={{ once: true }}>Information Security Analyst with hands-on experience in vulnerability assessment, penetration testing, and risk-based security testing across web applications, networks, and banking infrastructure. Skilled in identifying, validating, and reporting vulnerabilities aligned with OWASP Top 10, PCI-DSS, and State Bank of Pakistan (SBP) regulatory requirements, with active contributions to bug bounty and red team research. Focused on reducing risk exposure, strengthening security controls, and supporting audit-ready security postures through clear, actionable reporting.</motion.p>
          <motion.div className="mt-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.1, delay: .5 }} viewport={{ once: true }}><h4 className="font-bold text-emerald-300 mb-3">Core Competencies</h4><ul className="grid sm:grid-cols-2 gap-3 text-sm text-slate-200">{competencies.map(item => <li key={item} className="rounded-xl border border-white/10 bg-[#172331] p-3">{item}</li>)}</ul></motion.div>
        </motion.div>
      </div>
    </div>
  </section>;
};
export default About;
