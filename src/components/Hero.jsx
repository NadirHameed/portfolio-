import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => (
  <section id="top" className="relative min-h-screen overflow-hidden bg-[#101722] text-white">
    <div className="pointer-events-none absolute inset-0 opacity-40" aria-hidden="true">
      <div className="absolute -right-32 top-24 h-[34rem] w-[34rem] rounded-full bg-emerald-500/15 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-teal-500/10 blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.04)_1px,transparent_0)] bg-[size:28px_28px]" />
    </div>

    <nav className="relative z-20 border-b border-white/10 bg-[#0d141e]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <a href="#top" className="text-xl font-extrabold tracking-tight text-white">NADIR<span className="text-emerald-400">.</span></a>
        <div className="hidden items-center gap-8 text-sm font-medium text-slate-300 md:flex">
          <a href="#about" className="transition hover:text-emerald-300">About</a>
          <a href="#experience" className="transition hover:text-emerald-300">Experience</a>
          <a href="#skills" className="transition hover:text-emerald-300">Skills</a>
          <a href="#projects" className="transition hover:text-emerald-300">Projects</a>
        </div>
        <a href="#contact" className="rounded-md border border-emerald-400/70 px-4 py-2 text-sm font-semibold text-emerald-300 transition hover:bg-emerald-400 hover:text-slate-950">Let's Talk</a>
      </div>
    </nav>

    <div className="relative z-10 mx-auto grid min-h-[calc(100vh-73px)] max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-2 lg:px-10 lg:py-20">
      <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .7 }} className="order-2 max-w-2xl md:order-1">
        <p className="mb-4 text-sm font-bold uppercase tracking-[.26em] text-slate-300">I'm Nadir Hameed</p>
        <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
          <span className="text-emerald-400">Penetration Tester</span><br />
          <span>Securing Your</span><br />
          <span>Digital World</span>
        </h1>
        <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">I find and validate security weaknesses across web applications, APIs, networks, and infrastructure, then provide clear guidance to help teams fix them.</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a href={process.env.PUBLIC_URL + '/Resume.pdf'} target="_blank" rel="noreferrer" className="rounded-md bg-emerald-500 px-6 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-400">View Resume</a>
          <a href="#projects" className="rounded-md border border-slate-500 px-6 py-3 text-sm font-bold text-white transition hover:border-emerald-400 hover:text-emerald-300">Explore Projects</a>
        </div>
        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-400"><span>Bagh, Azad Kashmir</span><a className="transition hover:text-emerald-300" href="mailto:nadir.hameed123@gmail.com">nadir.hameed123@gmail.com</a></div>
      </motion.div>

      <motion.div initial={{ opacity: 0, scale: .92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .8, delay: .15 }} className="relative order-1 mx-auto flex w-full max-w-md items-center justify-center md:order-2 md:max-w-none">
        <div className="absolute h-[min(78vw,28rem)] w-[min(78vw,28rem)] rounded-full bg-emerald-400/10 ring-1 ring-emerald-300/20" />
        <div className="absolute h-[min(68vw,24rem)] w-[min(68vw,24rem)] rounded-full border border-emerald-300/20" />
        <div className="absolute -right-1 top-[18%] h-12 w-12 rounded-full border border-emerald-300/50 bg-[#101722] p-3 text-emerald-300 shadow-lg shadow-emerald-500/10"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M12 3 4.5 7.2v9.6L12 21l7.5-4.2V7.2L12 3Z"/><path d="m9 12 2 2 4-4"/></svg></div>
        <div className="absolute -left-2 top-[32%] h-11 w-11 rounded-full border border-emerald-300/40 bg-[#101722] p-2.5 text-emerald-300"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M4 7h16v10H4zM8 20h8M12 17v3"/><path d="m9 12 2 2 4-4"/></svg></div>
        <div className="relative h-[min(72vw,26rem)] w-[min(72vw,26rem)] overflow-hidden rounded-full border-[5px] border-emerald-400/80 bg-slate-800 shadow-[0_0_70px_rgba(16,185,129,0.18)]">
          <img src={process.env.PUBLIC_URL + '/profile.jpg'} alt="Nadir Hameed" width="1024" height="1024" className="h-full w-full object-cover object-center" />
        </div>
        <div className="absolute bottom-[8%] right-[8%] rounded-full border border-emerald-300/50 bg-[#101722]/90 p-3 text-emerald-300 shadow-lg"><svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M12 2v3m0 14v3M4.93 4.93l2.12 2.12m9.9 9.9 2.12 2.12M2 12h3m14 0h3M4.93 19.07l2.12-2.12m9.9-9.9 2.12-2.12"/><circle cx="12" cy="12" r="5"/></svg></div>
      </motion.div>
    </div>
  </section>
);

export default Hero;
