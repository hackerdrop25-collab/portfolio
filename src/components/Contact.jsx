import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  Linkedin, 
  Github, 
  MapPin, 
  CheckCircle2, 
  AlertCircle, 
  Copy, 
  Check, 
  ExternalLink,
  MessageSquare,
  ShieldCheck,
  Phone
} from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: '', message: '' });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus({
      type: 'info',
      message: 'Opening your mail client to send message to naveenpalani1712@gmail.com...'
    });

    window.location.href = `mailto:${personalInfo.socialLinks.email}?subject=Portfolio Contact from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message)}%0D%0A%0D%0AFrom: ${encodeURIComponent(formData.email)}`;
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.socialLinks.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Direct Inquiries</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let's Build Something <span className="cyber-accent-text">Secure & Scalable</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            Open to discussing Software Engineering, Cybersecurity & SOC Analyst roles, Python development, or technical collaboration.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Contact Information & Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="glass-card p-6 sm:p-7 rounded-2xl">
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-cyan-400" />
                <span>Direct Contact Channels</span>
              </h3>
              <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                Connect via email, phone, LinkedIn, or inspect my project repositories on GitHub.
              </p>

              <div className="space-y-3">
                {/* Primary Email Item */}
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-slate-400 uppercase">Primary Email</div>
                      <a 
                        href={`mailto:${personalInfo.socialLinks.email}`}
                        className="text-xs font-semibold text-slate-200 hover:text-cyan-400 transition-colors"
                      >
                        {personalInfo.socialLinks.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-slate-800 transition-colors"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone Item */}
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-slate-400 uppercase">Phone / WhatsApp</div>
                      <a 
                        href={`tel:${personalInfo.phone}`}
                        className="text-xs font-semibold text-slate-200 hover:text-emerald-400 transition-colors"
                      >
                        {personalInfo.phone}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyPhone}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-emerald-400 hover:bg-slate-800 transition-colors"
                    title="Copy Phone Number"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* LinkedIn Item */}
                <a
                  href={personalInfo.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 flex items-center justify-between group transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-slate-400 uppercase">LinkedIn Profile</div>
                      <div className="text-xs font-semibold text-slate-200 group-hover:text-cyan-400 transition-colors">
                        in/naveen-kumar-p
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                </a>

                {/* GitHub Item */}
                <a
                  href={personalInfo.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 flex items-center justify-between group transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300">
                      <Github className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-slate-400 uppercase">GitHub Profile</div>
                      <div className="text-xs font-semibold text-slate-200 group-hover:text-cyan-400 transition-colors">
                        github.com/hackerdrop25-collab
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                </a>

                {/* Location */}
                <div className="p-3.5 rounded-xl bg-slate-900/40 border border-slate-800/60 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-slate-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-slate-500 uppercase">Location</div>
                    <div className="text-xs font-medium text-slate-300">
                      {personalInfo.socialLinks.location}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Validated Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 sm:p-8 rounded-2xl">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-cyan-400" />
                  <span>Send a Direct Message</span>
                </h3>
                <span className="text-xs font-mono text-slate-400">Fast Response</span>
              </div>

              {status.message && (
                <div className="mb-6 p-4 rounded-xl bg-cyan-950/40 border border-cyan-500/30 text-xs text-cyan-200 leading-relaxed flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>{status.message}</div>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                {/* Name field */}
                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-slate-300 mb-1.5">
                    Your Name <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Recruiter / Engineering Lead"
                    className={`w-full px-4 py-3 rounded-xl bg-slate-950/80 border text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-1 transition-all ${
                      errors.name 
                        ? 'border-rose-500 focus:ring-rose-500' 
                        : 'border-slate-800 focus:border-cyan-500 focus:ring-cyan-500/50'
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-rose-400 flex items-center gap-1 font-mono">
                      <span>• {errors.name}</span>
                    </p>
                  )}
                </div>

                {/* Email field */}
                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-slate-300 mb-1.5">
                    Your Email <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. recruiter@company.com"
                    className={`w-full px-4 py-3 rounded-xl bg-slate-950/80 border text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-1 transition-all ${
                      errors.email 
                        ? 'border-rose-500 focus:ring-rose-500' 
                        : 'border-slate-800 focus:border-cyan-500 focus:ring-cyan-500/50'
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-rose-400 flex items-center gap-1 font-mono">
                      <span>• {errors.email}</span>
                    </p>
                  )}
                </div>

                {/* Message field */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label htmlFor="message" className="block text-xs font-mono text-slate-300">
                      Message <span className="text-cyan-400">*</span>
                    </label>
                    <span className="text-[11px] font-mono text-slate-500">
                      {formData.message.length} chars
                    </span>
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Discuss an open role, technical interview, or project collaboration..."
                    className={`w-full px-4 py-3 rounded-xl bg-slate-950/80 border text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-1 transition-all resize-none ${
                      errors.message 
                        ? 'border-rose-500 focus:ring-rose-500' 
                        : 'border-slate-800 focus:border-cyan-500 focus:ring-cyan-500/50'
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-rose-400 flex items-center gap-1 font-mono">
                      <span>• {errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-cyan-600 via-cyan-500 to-blue-600 hover:from-cyan-500 hover:to-blue-500 transition-all shadow-lg shadow-cyan-900/30 hover:shadow-cyan-500/25 active:scale-98 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4 text-white" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
