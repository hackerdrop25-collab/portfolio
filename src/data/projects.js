export const projects = [
  {
    id: "blue-team-threat-detection",
    title: "Unified Blue Team Threat Detection and Alert System",
    category: "cybersecurity",
    featured: true,
    badge: "Major Security Project",
    summary: "Built a real-time security monitoring system using Python, Flask, Sysmon, and ELK Stack for automated threat detection and incident response.",
    description: "Designed and built a real-time automated Blue Team security monitoring system simulating a enterprise Security Operations Center (SOC). It ingests telemetry via Sysmon and ELK Stack, detects brute-force attacks, malware activity, unauthorized USB access, and network scans, maps events to MITRE ATT&CK techniques, computes risk scores, and triggers automated incident response actions (such as blocking malicious IPs and terminating rogue processes) visualized on a centralized threat dashboard.",
    technologies: [
      "Python",
      "Flask",
      "Sysmon",
      "ELK Stack",
      "MITRE ATT&CK",
      "Chart.js",
      "JavaScript",
      "HTML5 / CSS3"
    ],
    features: [
      "Brute-force attack detection & automated IP blocking",
      "Malware process anomaly detection & rogue process termination",
      "Unauthorized USB access monitoring & alerts",
      "Real-time network scan pattern recognition",
      "Integrated MITRE ATT&CK tactical matrix mapping",
      "Dynamic risk scoring engine based on threat severity",
      "Centralized SOC security dashboard for live log analysis",
      "Automated alert generation and incident response triggers"
    ],
    githubUrl: "https://github.com/hackerdrop25-collab/Unified-BlueTeam-Threat-Detection-and-Alert-System",
    demoUrl: null,
    metrics: [
      { label: "Architecture", value: "SOC Blue Team" },
      { label: "Mapping", value: "MITRE ATT&CK" },
      { label: "Telemetry", value: "Sysmon & ELK" },
      { label: "Mitigation", value: "Auto-Containment" }
    ]
  },
  {
    id: "usb-forensics-monitoring-toolkit",
    title: "USB Forensics & Monitoring Toolkit",
    category: "cybersecurity",
    featured: false,
    badge: "Digital Forensics & OS Hardening",
    summary: "A Python-based USB forensics toolkit to monitor USB plug/unplug events and prevent unauthorized hardware-level data theft.",
    description: "Developed a comprehensive endpoint security and digital forensics toolkit designed to identify unauthorized USB hardware usage. Employs low-level Windows API hooks via PyWin32 for instant plug/unplug detection, persists forensic logs into secure JSON evidence files with tamper-evident timestamps, and renders real-time forensic insights on an interactive Tkinter GUI dashboard.",
    technologies: [
      "Python",
      "PyWin32",
      "Tkinter GUI",
      "JSON Evidence Logging",
      "Digital Forensics",
      "Windows Security"
    ],
    features: [
      "Real-time USB insertion and removal detection via PyWin32 API",
      "Secure JSON evidence file logging with accurate forensic timestamps",
      "Tkinter GUI dashboard displaying live USB activity records",
      "Early warning identification of unauthorized USB usage & data exfiltration",
      "Historical USB audit logs for digital forensic investigation",
      "Lightweight background service architecture for minimal CPU overhead"
    ],
    githubUrl: "https://github.com/hackerdrop25-collab/USB-Forensics-and-Monitoring-Toolkit",
    demoUrl: null,
    metrics: [
      { label: "Detection Engine", value: "PyWin32 API" },
      { label: "Evidence", value: "JSON Audit Trail" },
      { label: "Interface", value: "Tkinter GUI" },
      { label: "Domain", value: "Endpoint Forensics" }
    ]
  },
  {
    id: "automated-resume-analyzer",
    title: "Automated Resume Analyzer in AI",
    category: "fullstack",
    featured: false,
    badge: "AI / NLP & Web Tool",
    summary: "Built a Flask-based web application that automatically analyzes resumes using NLP and evaluates candidate fit against job descriptions.",
    description: "Constructed an intelligent document parsing and evaluation pipeline using Python, Flask, and Natural Language Processing. Accurately extracts technical skills, educational degrees, and work history from multi-format files (PDF, DOCX), performs weighted semantic alignment against target job descriptions, identifies missing skill keywords, and generates actionable score reports.",
    technologies: [
      "Python",
      "Flask",
      "NLP",
      "PyPDF2 / DOCX",
      "JavaScript",
      "HTML5 / CSS3"
    ],
    features: [
      "Multi-format resume parsing supporting both PDF and DOCX files",
      "NLP entity extraction for technical skills, degrees, and qualifications",
      "Robust error handling and validation for corrupted or abnormal files",
      "Job description alignment algorithm with weighted semantic scoring",
      "Candidate fit score rating and detailed missing keyword suggestions",
      "Responsive, clean web UI for seamless recruiter & candidate interaction"
    ],
    githubUrl: "https://github.com/hackerdrop25-collab/automated-resume-analyser",
    demoUrl: null,
    metrics: [
      { label: "Processing", value: "PDF & DOCX" },
      { label: "Algorithm", value: "NLP Keyword Engine" },
      { label: "Backend", value: "Flask REST API" },
      { label: "Analytics", value: "Score & Gap Analysis" }
    ]
  },
  {
    id: "file-encryption-steganography",
    title: "File Encryption & Steganography System",
    category: "cybersecurity",
    featured: false,
    badge: "Applied Cryptography",
    summary: "A secure application combining AES-based cryptographic file encryption with image steganography to protect sensitive data payloads.",
    description: "Engineered a dual-layer data protection platform to guarantee data confidentiality and stealth transmission. Combines AES symmetric encryption with OpenCV least-significant-bit (LSB) image steganography to conceal encrypted payloads inside innocent image files.",
    technologies: [
      "Python",
      "Flask",
      "AES-256",
      "Cryptography",
      "OpenCV",
      "HTML5 / CSS3"
    ],
    features: [
      "Military-grade AES file encryption and authenticated decryption",
      "Password-based cryptographic key derivation (PBKDF2)",
      "Pixel-level image steganography with zero noticeable visual artifacting",
      "Cryptographic checksum verification for file tamper resistance",
      "Interactive web interface for intuitive encryption and decoding"
    ],
    githubUrl: "https://github.com/hackerdrop25-collab/File-Encryption-and-Steganography",
    demoUrl: null,
    metrics: [
      { label: "Cipher", value: "AES-256" },
      { label: "Steganography", value: "OpenCV LSB" },
      { label: "Integrity", value: "SHA-256" },
      { label: "Backend", value: "Python Flask" }
    ]
  }
];

export const projectCategories = [
  { id: "all", label: "All Projects" },
  { id: "cybersecurity", label: "Cybersecurity & SOC / Forensics" },
  { id: "fullstack", label: "Full Stack & AI / Python" },
];
