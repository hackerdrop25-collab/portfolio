export const skillCategories = [
  {
    id: "cybersecurity",
    title: "Cybersecurity & Blue Team",
    icon: "ShieldAlert",
    description: "Threat hunting, SOC operations, defensive security, forensics, and OS hardening.",
    skills: [
      { name: "MITRE ATT&CK", level: "Framework", highlight: true },
      { name: "Incident Response", level: "Automated Actions", highlight: true },
      { name: "Networking & Protocols", level: "Packet Analysis", highlight: true },
      { name: "Ethical Hacking", level: "PenTesting", highlight: true },
      { name: "OS Hardening", level: "Windows & Linux", highlight: true },
      { name: "Digital Forensics", level: "USB & Artifacts", highlight: true },
      { name: "Vulnerability Analysis", level: "Assessment" },
      { name: "OWASP Top 10", level: "Web Defense" },
    ]
  },
  {
    id: "security-tools",
    title: "Security & Monitoring Tools",
    icon: "Activity",
    description: "Industry-standard telemetry collectors, SIEM pipelines, and network sniffers.",
    skills: [
      { name: "Sysmon", level: "Endpoint Telemetry", highlight: true },
      { name: "ELK Stack", level: "SIEM / Log Analysis", highlight: true },
      { name: "Wireshark", level: "Packet Inspection", highlight: true },
      { name: "PyWin32 (API Hooks)", level: "Windows Telemetry", highlight: true },
      { name: "Burp Suite", level: "Web App Security" },
      { name: "Splunk", level: "Log Monitoring" },
    ]
  },
  {
    id: "programming",
    title: "Programming Languages",
    icon: "Code2",
    description: "Languages used across cybersecurity scripting, AI/NLP tools, and systems engineering.",
    skills: [
      { name: "Python", level: "Advanced / Core", highlight: true },
      { name: "C", level: "Foundational & Systems", highlight: true },
      { name: "JavaScript", level: "ES6+ / Full Stack", highlight: true },
      { name: "SQL", level: "Database Querying", highlight: true },
      { name: "Java", level: "Object Oriented" },
    ]
  },
  {
    id: "web-dev",
    title: "Web Development & APIs",
    icon: "Globe",
    description: "Creating responsive frontends and resilient Python REST services.",
    skills: [
      { name: "Flask", level: "Backend Core", highlight: true },
      { name: "React", level: "Frontend Framework", highlight: true },
      { name: "REST APIs", level: "Microservices", highlight: true },
      { name: "NLP Pipelines", level: "Document Parsing", highlight: true },
      { name: "HTML5 / CSS3", level: "Tailwind UI" },
      { name: "Tkinter GUI", level: "Desktop Tools" },
    ]
  },
  {
    id: "databases",
    title: "Databases & Storage",
    icon: "Database",
    description: "Relational and document-oriented databases for structured logging and web platforms.",
    skills: [
      { name: "MySQL", level: "Relational", highlight: true },
      { name: "MongoDB", level: "NoSQL", highlight: true },
      { name: "JSON Evidence Stores", level: "Forensic Records", highlight: true },
    ]
  },
  {
    id: "tools",
    title: "DevOps & Environment",
    icon: "Cpu",
    description: "Version control, Linux terminal administration, and deployment tools.",
    skills: [
      { name: "Git", level: "Version Control", highlight: true },
      { name: "GitHub", level: "Collaboration & CI/CD", highlight: true },
      { name: "Linux", level: "CLI & System Admin", highlight: true },
      { name: "Docker", level: "Containerization" },
    ]
  }
];
