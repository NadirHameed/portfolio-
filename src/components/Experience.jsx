import React from 'react';
import { motion } from 'framer-motion';

const roles = [
  { title: 'Penetration Tester', org: 'CareCloud', date: 'July 2026 – Present', bullets: [
    'Conduct Web Application, API, Internal, and External Penetration Testing to identify and validate security vulnerabilities.',
    'Assess applications against OWASP Top 10 and OWASP API Security Top 10, testing authentication, authorization, injection, XSS, IDOR, and business logic.',
    'Perform vulnerability assessments of networks, servers, and security devices using Burp Suite, Acunetix, Nessus, Nmap, and Postman.',
    'Prepare detailed VAPT reports with remediation recommendations, retest fixes, and track findings through closure.',
    'Conduct source code reviews, security research, and scripting-based assessments while meeting security and privacy requirements.'
  ]},
  { title: 'Cyber Security Engineer', org: 'MCB Bank, Lahore', date: 'July 2025 – August 2026', bullets: [
    'Conduct quarterly VAPT across banking web applications, infrastructure, and network segments to identify exploitable weaknesses and attack paths.',
    'Perform manual and automated testing with Burp Suite, Nmap, Nessus, Metasploit, Nexpose, Invicti, and Acunetix; validate an average of two findings per assessment cycle.',
    'Assess applications and infrastructure against OWASP Top 10, PCI-DSS, and State Bank of Pakistan IT security and risk management requirements.',
    'Test web and network security, review system configurations, and document issues such as SQL injection, XSS, authentication flaws, privilege escalation, and network segmentation gaps.',
    'Deliver CVSS-rated reports with proof-of-concept evidence and remediation guidance; track risks, coordinate retesting with technical teams, and support vendor reviews and audit readiness.'
  ]},
  { title: 'Independent Security Researcher — Bug Bounty & Red Teaming', org: 'HackerOne & Bugcrowd', date: '2025 – Present', bullets: [
    'Conduct independent vulnerability research and bug bounty testing, submitting vulnerability reports across web application and cloud security target assets.',
    'Apply penetration testing and red teaming methodologies to identify, validate, and responsibly disclose security flaws under live bug bounty programs.',
    'Analyze high-impact vulnerability disclosures and proof-of-concept exploitation techniques to track emerging attack patterns and exploitation methods across diverse technology stacks.',
    'Apply secure coding and vulnerability research best practices to real-world target assessments, strengthening practical exploitation, root-cause analysis, and reporting skills.'
  ]}
];

const Experience = () => <section id="experience" className="relative overflow-hidden bg-[#101722] py-20 text-white">
  <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
    <motion.div className="mb-12 text-center" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .3 }} transition={{ duration: .6 }}><h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">Professional Experience</h2><p className="mx-auto max-w-2xl text-lg text-slate-300">Vulnerability assessment, penetration testing, and red team research.</p></motion.div>
    <div className="space-y-6">{roles.map(role => <motion.article key={role.title} className="rounded-2xl border border-white/10 bg-[#172331] p-6 shadow-lg shadow-black/10 md:p-8" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .15 }} transition={{ duration: .5 }}>
      <div className="flex flex-col justify-between gap-1 sm:flex-row"><div><h3 className="text-xl font-bold md:text-2xl">{role.title}</h3><p className="mt-1 text-lg font-medium text-emerald-300">{role.org}</p></div><p className="shrink-0 text-sm font-medium text-slate-400">{role.date}</p></div>
      <ul className="mt-5 space-y-3 text-slate-300">{role.bullets.map(item => <li key={item} className="flex gap-3 leading-relaxed"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-emerald-400" aria-hidden="true" /><span>{item}</span></li>)}</ul>
    </motion.article>)}</div>
    <div className="mt-16 grid gap-6 md:grid-cols-2">
      <div className="rounded-2xl border-2 border-emerald-400/40 bg-[#172331] p-6 shadow-lg shadow-emerald-900/10 md:p-8"><div className="mb-5 flex items-center gap-3"><span className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500 text-xl font-bold text-slate-950">✓</span><h3 className="text-2xl font-bold">Certifications</h3></div><ul className="space-y-3 text-slate-200"><li className="rounded-xl bg-emerald-400/10 p-3"><b>Certified Ethical Hacker (CEH)</b><span className="block text-sm text-slate-400">EC-Council · March 2025</span></li><li className="rounded-xl bg-emerald-400/10 p-3"><b>Certified in Cybersecurity (CC)</b><span className="block text-sm text-slate-400">(ISC)² · August 2024</span></li><li><b>Ethical Hacking &amp; Penetration Testing</b> · Complete Hands-on Practical Training (Urdu)</li><li><b>Navigating Linux &amp; Essential Cybersecurity</b> · Urdu, July 2024</li></ul></div>
      <div className="rounded-2xl border border-white/10 bg-[#172331] p-6 shadow-sm md:p-8"><div className="mb-5 flex items-center gap-3"><span className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500 text-xl font-bold text-slate-950">⌂</span><h3 className="text-2xl font-bold">Education</h3></div><div className="space-y-5 text-slate-200"><div className="rounded-xl bg-white/5 p-4"><p className="font-bold">Bachelor of Computer Science (BSCS) <span className="float-right font-medium">2020 – 2024</span></p><p className="italic text-slate-400">University of Azad Kashmir, Muzaffarabad</p></div><div className="rounded-xl bg-white/5 p-4"><p className="font-bold">FSc (Pre-Engineering / ICS) <span className="float-right font-medium">2017 – 2018</span></p><p className="italic text-slate-400">Mirpur Board, Azad Jammu &amp; Kashmir</p></div></div></div>
    </div>
    <div className="mt-12 border-t border-white/10 pt-8"><h3 className="text-2xl font-bold">Additional Professional Skills</h3><ul className="mt-4 list-disc space-y-2 pl-5 text-slate-300"><li>Analytical and critical thinking, with strong attention to detail</li><li>Stakeholder coordination and cross-functional collaboration with development and infrastructure teams</li><li>Time management under audit and compliance deadlines</li></ul></div>
  </div>
</section>;

export default Experience;
