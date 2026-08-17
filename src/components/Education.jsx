import React from 'react';
import { 
  GraduationCap, 
  Building2, 
  Award, 
  Calendar, 
  CheckCircle2, 
  ShieldCheck, 
  BookOpen,
  Sparkles,
  MapPin,
  ExternalLink,
  ShieldAlert,
  Cpu
} from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

export const Education = () => {
  const certIconMap = {
    ShieldAlert: ShieldAlert,
    Cpu: Cpu,
  };

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic & Certifications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & <span className="cyber-accent-text">Credentials</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            Formal engineering foundations in Computer Science Cyber Security and verified certifications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Education Timeline (7 cols) */}
          <div className="lg:col-span-7">
            <h3 className="text-sm font-mono uppercase tracking-wider text-slate-400 mb-6 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-cyan-400" />
              <span>Academic Timeline</span>
            </h3>

            <div className="relative pl-6 sm:pl-8 border-l-2 border-slate-800 space-y-8">
              {personalInfo.education.map((edu, idx) => (
                <div key={idx} className="relative group">
                  {/* Indicator Dot */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full bg-dark-900 border-2 border-cyan-500 flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:scale-110 transition-transform">
                    <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  </div>

                  {/* Education Card */}
                  <div className="glass-card p-6 sm:p-7 rounded-2xl group-hover:border-cyan-500/50 transition-all">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-4 border-b border-slate-800 mb-4">
                      <div>
                        <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-md bg-cyan-500/10 text-cyan-400 text-[11px] font-mono mb-2 border border-cyan-500/20">
                          <Calendar className="w-3 h-3" />
                          <span>{edu.period}</span>
                        </div>

                        <h4 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                          {edu.degree}
                        </h4>

                        <div className="flex items-center gap-1.5 text-slate-300 text-xs mt-1.5 font-medium">
                          <Building2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                          <span>{edu.institution}</span>
                        </div>

                        <div className="flex items-center gap-1 text-slate-400 text-[11px] font-mono mt-0.5">
                          <MapPin className="w-3 h-3 text-slate-500" />
                          <span>{edu.location}</span>
                        </div>
                      </div>

                      {/* Score Badge */}
                      <div className="sm:text-right shrink-0 mt-2 sm:mt-0">
                        <div className="inline-block px-3 py-2 rounded-xl bg-slate-900/90 border border-slate-700/80 shadow-inner">
                          <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                            {edu.scoreLabel}
                          </div>
                          <div className="text-xl font-extrabold text-cyan-400 font-mono">
                            {edu.scoreValue}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="space-y-1.5">
                      {edu.highlights.map((item, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications (5 cols) */}
          <div className="lg:col-span-5">
            <h3 className="text-sm font-mono uppercase tracking-wider text-slate-400 mb-6 flex items-center gap-2">
              <Award className="w-4 h-4 text-cyan-400" />
              <span>Verified Certifications</span>
            </h3>

            <div className="space-y-4">
              {personalInfo.certifications.map((cert, idx) => {
                const IconComp = certIconMap[cert.icon] || ShieldCheck;
                return (
                  <div 
                    key={idx}
                    className="glass-card p-5 rounded-2xl group hover:border-cyan-500/50 transition-all flex flex-col justify-between"
                  >
                    <div className="flex items-start gap-3.5">
                      <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform shrink-0 shadow-sm">
                        <IconComp className="w-5 h-5 text-cyan-400" />
                      </div>
                      <div>
                        <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider block">
                          {cert.issuer}
                        </span>
                        <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {cert.title}
                        </h4>
                        <p className="text-xs text-slate-400 mt-0.5">
                          {cert.type}
                        </p>
                        {cert.date && (
                          <p className="text-[11px] font-mono text-slate-500 mt-1 flex items-center gap-1">
                            <span>Completed: {cert.date}</span>
                          </p>
                        )}
                        {cert.code && (
                          <p className="text-[11px] font-mono text-slate-500">
                            Cert Code: <span className="text-slate-400">{cert.code}</span>
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between">
                      <span className="flex items-center gap-1.5 text-emerald-400 text-xs font-mono">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Completed & Verified</span>
                      </span>
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold hover:bg-cyan-500/20 hover:border-cyan-400/60 transition-all"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>View Certificate</span>
                      </a>
                    </div>
                  </div>
                );
              })}

              {/* Specialization Callout Card */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-900 to-dark-950 border border-cyan-500/20 text-slate-300">
                <div className="flex items-center gap-2 text-cyan-400 font-bold text-xs uppercase tracking-wider mb-2 font-mono">
                  <Sparkles className="w-4 h-4" />
                  <span>Key Competency</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Deeply focused on <strong className="text-white">Blue Team Security Monitoring</strong>, <strong className="text-white">Sysmon Endpoint Telemetry</strong>, and building secure full-stack Python architectures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
