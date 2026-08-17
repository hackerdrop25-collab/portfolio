import React, { useState } from 'react';
import { 
  ArrowDown, 
  Download, 
  Github, 
  Linkedin, 
  Mail, 
  ShieldCheck, 
  Terminal, 
  Copy, 
  Check, 
  ExternalLink,
  Code2,
  Lock
} from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

export const Hero = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.socialLinks.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const projectsSection = document.querySelector('#projects');
    if (projectsSection) {
      const offset = 80;
      const elementPosition = projectsSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-5xl mx-auto w-full text-center relative z-10">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 backdrop-blur-md mb-8 shadow-inner hover:border-cyan-500/40 transition-colors">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-mono font-medium text-slate-300">
            Open for <span className="text-cyan-400 font-semibold">Software Engineer</span> & <span className="text-cyan-400 font-semibold">Cybersecurity</span> Roles
          </span>
        </div>

        {/* Greeting & Name */}
        <h2 className="text-slate-400 font-mono text-sm sm:text-base mb-3 font-medium tracking-wide">
          Hi, I'm
        </h2>
        
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6">
          <span className="cyber-gradient-text">Naveen Kumar .P</span>
        </h1>

        {/* Headline */}
        <div className="max-w-3xl mx-auto mb-6">
          <p className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-200 leading-relaxed">
            <span className="text-cyan-400">Computer Science Engineer</span>
            <span className="text-slate-600 mx-2">|</span>
            <span className="text-blue-400">Cybersecurity Enthusiast</span>
            <span className="text-slate-600 mx-2">|</span>
            <span className="text-indigo-300">Full Stack Developer</span>
          </p>
        </div>

        {/* Recruiter-focused Short Bio */}
        <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-slate-400 leading-relaxed mb-10 font-normal">
          {personalInfo.bio}
        </p>

        {/* Call to Actions (CTAs) */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <a
            href="#projects"
            onClick={handleScrollToProjects}
            className="px-7 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-cyan-600 via-cyan-500 to-blue-600 hover:from-cyan-500 hover:to-blue-500 transition-all shadow-lg shadow-cyan-900/30 hover:shadow-cyan-500/25 active:scale-98 flex items-center gap-2 group cursor-pointer"
          >
            <span>View My Projects</span>
            <ArrowDown className="w-4 h-4 text-white group-hover:translate-y-0.5 transition-transform" />
          </a>

          <a
            href={personalInfo.resumeUrl}
            download="Naveen_Kumar_Resume.pdf"
            className="px-7 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-slate-900/90 border border-slate-700/70 hover:border-cyan-500/50 hover:text-white hover:bg-slate-800/80 transition-all backdrop-blur-md shadow-md active:scale-98 flex items-center gap-2"
          >
            <Download className="w-4 h-4 text-cyan-400" />
            <span>Download Resume</span>
          </a>
        </div>

        {/* Social Icons and Quick Email Copy */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-slate-400">
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 hover:text-cyan-400 hover:bg-slate-800/80 transition-all"
              aria-label="GitHub Profile"
              title="GitHub Profile (Placeholder: Update in personalInfo.js)"
            >
              <Github className="w-5 h-5" />
            </a>

            <a
              href={personalInfo.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 hover:text-cyan-400 hover:bg-slate-800/80 transition-all"
              aria-label="LinkedIn Profile"
              title="LinkedIn Profile (Placeholder: Update in personalInfo.js)"
            >
              <Linkedin className="w-5 h-5" />
            </a>

            <a
              href={`mailto:${personalInfo.socialLinks.email}`}
              className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 hover:text-cyan-400 hover:bg-slate-800/80 transition-all"
              aria-label="Send Email"
              title="Send Email Directly"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <span className="hidden sm:inline text-slate-700">|</span>

          {/* Quick Copy Email Snippet */}
          <button
            onClick={handleCopyEmail}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/60 border border-slate-800/80 text-xs font-mono text-slate-300 hover:text-cyan-300 hover:border-slate-700 transition-colors"
            title="Click to copy email address"
          >
            <Mail className="w-3.5 h-3.5 text-cyan-400" />
            <span>{personalInfo.socialLinks.email}</span>
            {copied ? (
              <Check className="w-3.5 h-3.5 text-emerald-400" />
            ) : (
              <Copy className="w-3.5 h-3.5 text-slate-500" />
            )}
          </button>
        </div>

        {/* Quick Highlights Strip */}
        <div className="mt-14 pt-8 border-t border-slate-800/60 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <div className="p-3 rounded-xl bg-slate-900/40 border border-slate-800/50 text-left">
            <div className="flex items-center gap-2 text-cyan-400 mb-1">
              <ShieldCheck className="w-4 h-4" />
              <span className="text-xs font-mono font-medium">Defensive Security</span>
            </div>
            <p className="text-xs text-slate-400">Blue Team SOC & Threat Intelligence</p>
          </div>

          <div className="p-3 rounded-xl bg-slate-900/40 border border-slate-800/50 text-left">
            <div className="flex items-center gap-2 text-blue-400 mb-1">
              <Terminal className="w-4 h-4" />
              <span className="text-xs font-mono font-medium">Python Engineering</span>
            </div>
            <p className="text-xs text-slate-400">Flask APIs & Data Pipelines</p>
          </div>

          <div className="p-3 rounded-xl bg-slate-900/40 border border-slate-800/50 text-left">
            <div className="flex items-center gap-2 text-indigo-400 mb-1">
              <Code2 className="w-4 h-4" />
              <span className="text-xs font-mono font-medium">Full Stack Web</span>
            </div>
            <p className="text-xs text-slate-400">Modern React & Secure Backends</p>
          </div>

          <div className="p-3 rounded-xl bg-slate-900/40 border border-slate-800/50 text-left">
            <div className="flex items-center gap-2 text-teal-400 mb-1">
              <Lock className="w-4 h-4" />
              <span className="text-xs font-mono font-medium">Applied Crypto</span>
            </div>
            <p className="text-xs text-slate-400">AES & Data Steganography</p>
          </div>
        </div>
      </div>
    </section>
  );
};
