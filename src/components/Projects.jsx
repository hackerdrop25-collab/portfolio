import React, { useState } from 'react';
import { 
  FolderCode, 
  Github, 
  ExternalLink, 
  ShieldAlert, 
  Lock, 
  FileText, 
  Sparkles, 
  CheckCircle2, 
  Layers, 
  Activity, 
  Terminal,
  Maximize2
} from 'lucide-react';
import { projects, projectCategories } from '../data/projects';
import { ProjectModal } from './ProjectModal';

export const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  const featuredProject = projects.find(p => p.featured);
  const regularProjects = filteredProjects.filter(p => !p.featured || activeCategory !== 'all');

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-3">
            <FolderCode className="w-3.5 h-3.5" />
            <span>Featured Engineering Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Security & Software <span className="cyber-accent-text">Projects</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
            Practical applications spanning Blue Team SOC defense, applied cryptography, and full stack web tooling.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {projectCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                activeCategory === cat.id
                  ? 'bg-cyan-500 text-dark-950 font-bold shadow-md shadow-cyan-500/30'
                  : 'bg-dark-900/80 text-slate-300 border border-slate-800 hover:border-slate-700 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* FEATURED SPOTLIGHT: Unified Blue Team Threat Detection & Alert System */}
        {activeCategory === 'all' && featuredProject && (
          <div className="mb-12">
            <div className="relative rounded-3xl p-1 bg-gradient-to-r from-cyan-500/40 via-blue-600/40 to-indigo-600/30 shadow-2xl shadow-cyan-950/50">
              <div className="bg-dark-900/95 rounded-[22px] p-6 sm:p-8 lg:p-10 backdrop-blur-xl">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  
                  {/* Left Column: Details (7 cols) */}
                  <div className="lg:col-span-7">
                    <div className="flex flex-wrap items-center gap-2.5 mb-4">
                      <span className="px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-semibold flex items-center gap-1.5">
                        <Activity className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                        <span>Major Security Project</span>
                      </span>
                      <span className="px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-mono">
                        SOC Blue Team
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 tracking-tight">
                      {featuredProject.title}
                    </h3>

                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                      {featuredProject.summary}
                    </p>

                    {/* Key Capabilities Preview */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
                      {featuredProject.features.slice(0, 6).map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {featuredProject.technologies.map((tech, idx) => (
                        <span key={idx} className="tech-badge">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-wrap items-center gap-3">
                      <button
                        onClick={() => setSelectedProject(featuredProject)}
                        className="px-5 py-2.5 rounded-xl font-semibold text-xs text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 transition-all flex items-center gap-2 shadow-md shadow-cyan-900/30 cursor-pointer"
                      >
                        <Maximize2 className="w-4 h-4" />
                        <span>View Architecture & Details</span>
                      </button>

                      <a
                        href={featuredProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2.5 rounded-xl font-semibold text-xs text-slate-200 bg-slate-800/80 hover:bg-slate-700 border border-slate-700 transition-all flex items-center gap-2"
                      >
                        <Github className="w-4 h-4" />
                        <span>GitHub</span>
                      </a>
                    </div>
                  </div>

                  {/* Right Column: Visual SOC Radar Preview Card (5 cols) */}
                  <div className="lg:col-span-5">
                    <div className="rounded-2xl bg-dark-950/80 border border-slate-800 p-5 shadow-inner relative overflow-hidden">
                      {/* Terminal header */}
                      <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800 text-xs font-mono text-slate-400">
                        <div className="flex items-center gap-2">
                          <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                          <span className="text-slate-300 ml-1">soc-telemetry.live</span>
                        </div>
                        <span className="text-emerald-400 text-[10px] uppercase tracking-wider">● Monitoring</span>
                      </div>

                      {/* Mock SOC Dashboard Cards */}
                      <div className="space-y-3 font-mono text-xs">
                        <div className="p-2.5 rounded-lg bg-slate-900/80 border border-cyan-500/30 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <ShieldAlert className="w-4 h-4 text-cyan-400" />
                            <span className="text-slate-200">MITRE T1110: Brute Force</span>
                          </div>
                          <span className="px-2 py-0.5 rounded bg-rose-500/20 text-rose-400 text-[10px] font-bold">
                            ALERT TRIGGERED
                          </span>
                        </div>

                        <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Activity className="w-4 h-4 text-blue-400" />
                            <span className="text-slate-300">Sysmon Event ID 1: Process</span>
                          </div>
                          <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 text-[10px]">
                            SUSPICIOUS
                          </span>
                        </div>

                        <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Terminal className="w-4 h-4 text-indigo-400" />
                            <span className="text-slate-300">USB Storage Event Hook</span>
                          </div>
                          <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 text-[10px]">
                            MONITORED
                          </span>
                        </div>

                        {/* SOC Telemetry Metrics */}
                        <div className="pt-2 grid grid-cols-2 gap-2 text-center text-[11px]">
                          <div className="p-2 rounded bg-slate-900/50 border border-slate-800/80">
                            <span className="text-slate-400 block text-[10px]">ELK Pipeline</span>
                            <span className="text-cyan-300 font-bold">Ingesting Logs</span>
                          </div>
                          <div className="p-2 rounded bg-slate-900/50 border border-slate-800/80">
                            <span className="text-slate-400 block text-[10px]">Auto Containment</span>
                            <span className="text-emerald-400 font-bold">Armed</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        )}

        {/* Regular Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {regularProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card p-6 sm:p-7 rounded-2xl flex flex-col justify-between group hover:border-cyan-500/50 transition-all"
            >
              <div>
                {/* Header & Badges */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-slate-800/90 text-cyan-300 text-xs font-mono border border-slate-700 flex items-center gap-1.5">
                    {project.category === 'cybersecurity' ? (
                      <Lock className="w-3.5 h-3.5 text-cyan-400" />
                    ) : (
                      <FileText className="w-3.5 h-3.5 text-blue-400" />
                    )}
                    <span>{project.badge}</span>
                  </span>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-slate-800 transition-colors"
                    title="View Details"
                    aria-label={`View details for ${project.title}`}
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>

                <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>

                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-5">
                  {project.summary}
                </p>

                {/* Key Features (Preview 3 items) */}
                <div className="space-y-1.5 mb-6">
                  {project.features.slice(0, 3).map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-badge text-[11px] py-0.5 px-2">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1.5"
                >
                  <span>View Details</span>
                  <Sparkles className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-500/40 hover:text-cyan-400 text-slate-300 transition-all"
                    aria-label={`GitHub code for ${project.title}`}
                    title="GitHub Repository"
                  >
                    <Github className="w-4 h-4" />
                  </a>

                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500 hover:text-dark-950 transition-all"
                      aria-label={`Live demo for ${project.title}`}
                      title="Live Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </section>
  );
};
