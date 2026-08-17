import React from 'react';
import { 
  ShieldCheck, 
  Github, 
  Linkedin, 
  Mail, 
  Heart,
  ArrowUp,
  Terminal
} from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

export const Footer = () => {
  const handleScrollTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-dark-950/90 py-12 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Tagline */}
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2.5 mb-1.5">
            <div className="w-7 h-7 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <span className="font-bold text-base text-white">
              {personalInfo.name}
            </span>
          </div>
          <p className="text-xs text-slate-400 font-mono">
            Computer Science Engineer | Cybersecurity Enthusiast
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-3">
          <a
            href={personalInfo.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 hover:text-cyan-400 text-slate-400 transition-all"
            aria-label="GitHub"
            title="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>

          <a
            href={personalInfo.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 hover:text-cyan-400 text-slate-400 transition-all"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          <a
            href={`mailto:${personalInfo.socialLinks.email}`}
            className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 hover:text-cyan-400 text-slate-400 transition-all"
            aria-label="Email"
            title="Email"
          >
            <Mail className="w-4 h-4" />
          </a>

          <button
            onClick={handleScrollTop}
            className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 hover:text-cyan-400 text-slate-400 transition-all ml-2"
            aria-label="Back to top"
            title="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Copyright Notice */}
      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-slate-900 text-center text-xs font-mono text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p>© 2026 Naveen Kumar. All rights reserved.</p>
        <p className="flex items-center justify-center gap-1">
          Designed for high-impact engineering recruitment
        </p>
      </div>
    </footer>
  );
};
