import React from 'react';
import { 
  Download, 
  FileText, 
  CheckCircle2, 
  Sparkles, 
  ExternalLink,
  ShieldCheck 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/personalInfo';

export const ResumeCTA = () => {
  const triggerCelebration = () => {
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#06b6d4', '#3b82f6', '#10b981', '#ffffff']
      });
    } catch (e) {
      // Graceful fallback if canvas is not supported
    }
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-4xl mx-auto">
        <div className="relative rounded-3xl p-1 bg-gradient-to-r from-cyan-500/30 via-blue-600/30 to-indigo-600/30 shadow-2xl shadow-cyan-950/40">
          <div className="bg-dark-900/95 rounded-[22px] p-8 sm:p-12 text-center backdrop-blur-xl relative overflow-hidden">
            {/* Background glow circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-4">
              <FileText className="w-3.5 h-3.5" />
              <span>Recruiter Quick Action</span>
            </div>

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
              Interested in working together?
            </h3>

            <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
              Download my resume to learn more about my skills, projects and experience.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={personalInfo.resumeUrl}
                download="Naveen_Kumar_Resume.pdf"
                onClick={triggerCelebration}
                className="px-8 py-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-cyan-600 via-cyan-500 to-blue-600 hover:from-cyan-500 hover:to-blue-500 transition-all shadow-xl shadow-cyan-900/40 hover:shadow-cyan-500/30 active:scale-95 flex items-center gap-2.5 group"
              >
                <Download className="w-4 h-4 text-white group-hover:translate-y-0.5 transition-transform" />
                <span>Download Resume</span>
              </a>

              <a
                href="#contact"
                className="px-6 py-4 rounded-xl font-semibold text-sm text-slate-200 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 hover:border-cyan-500/50 hover:text-white transition-all active:scale-95"
              >
                <span>Get In Touch</span>
              </a>
            </div>

            {/* Helper note */}
            <p className="text-[11px] font-mono text-slate-500 mt-5">
              Resume file path: <code className="text-slate-400">public/resume.pdf</code>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
