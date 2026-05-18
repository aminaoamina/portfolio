// Site Configuration
export const SITE_CONFIG = {
  name: process.env.NEXT_PUBLIC_AUTHOR_NAME || "Amina Bayoudh",
  title:
    process.env.NEXT_PUBLIC_AUTHOR_TITLE ||
    "Network Infrastructure and Data Security Engineering Student",
  description:
    "IT engineering student focused on secure systems, AI-driven security, and modern web experiences.",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://example.com",
};

// Social Links
export const SOCIAL_LINKS = {
  github: process.env.NEXT_PUBLIC_GITHUB_URL || "#",
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || "#",
  twitter: process.env.NEXT_PUBLIC_TWITTER_URL || "#",
  email: process.env.NEXT_PUBLIC_EMAIL || "your.email@example.com",
};

// Navigation Items
export const NAV_ITEMS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Education", href: "/education" },
  { name: "Projects", href: "/projects" },
  { name: "Experience", href: "/experience" },
  { name: "Skills", href: "/skills" },
  { name: "Certificates", href: "/certificates" },
  { name: "Contact", href: "/contact" },
];

export const ABOUT_SUMMARY =
  "Second-year IT engineering student (4th year at ESPRIT) passionate about secure systems, software development, and AI-driven security. Focused on network infrastructure, data security, and building reliable, high-impact products.";

export const EDUCATION = [
  {
    period: "2023 - Present",
    institution: "ESPRIT (Private Higher School of Engineering and Technology)",
    detail: "Network Infrastructure and Data Security Engineering",
  },
  {
    period: "2019 - 2022",
    institution: "Abu Kassem Chebbi Secondary School",
    detail: "Baccalaureate",
  },
];

export const PROJECTS = [
  {
    title: "ENIGMA - Next-Generation SOC for the Banking Sector",
    period: "Nov 2025 - May 2026",
    description:
      "Automated open-source SOC for banking: real-time threat detection, AI-assisted incident analysis, automated response, and IAM lifecycle management with fully automated attack scenarios.",
    highlights: [
      "Four-zone network segmentation (WAN, DMZ, LAN, SOC)",
      "Wazuh SIEM/XDR with custom correlation rules",
      "SOAR workflows covering DDoS, brute-force, malware, privilege escalation, phishing",
      "AI DDoS detection with Transformer on live TShark captures",
      "LLM-assisted alert analysis and remediation recommendations",
    ],
    metrics: "MTTD < 1s, MTTR 2-3 min, PingCastle score 70 to 20",
    technologies:
      "Wazuh, Shuffle, TheHive, Cortex, MISP, LLaMA 3.1 8B, Transformer, CrewAI, XGBoost, Flask, AD, MidPoint IGA, Keycloak, pfSense, OPNsense, Zabbix, Docker, Ubuntu",
  },
  {
    title: "LotusAura - Medical Centre Platform for Women and Children",
    period: "Nov - Dec 2025",
    role: "Branding and UI/UX Designer, Full-Stack and AI Integration Lead",
    description:
      "AI-powered healthcare platform supporting family health management, medical education, and empathetic AI assistance for Tunisian families.",
    highlights: [
      "Family hub with secure, role-based access",
      "Emotion-aware breast cancer awareness assistant",
      "Game-based child monitoring for ADHD/autism indicators",
      "Multilingual conversational AI (Darija, French, English)",
      "RAG architecture grounded in curated medical knowledge",
    ],
    technologies:
      "Next.js, NestJS, PostgreSQL, Prisma, JWT, FastAPI, Flask, LangChain, FAISS/Qdrant, Whisper, NLP Transformers, OpenAI/Groq APIs",
    metrics: "4th Place Winner - IEEE TSYP13 EMBS CIS WIE Challenge",
  },
  {
    title: "EZGO - Smart and Inclusive Urban Mobility App",
    period: "Jan - May 2025",
    role: "Branding, Interface Designer, Accessibility Module Developer",
    description:
      "Inclusive smart transportation platform for Tunisia with real-time tracking, ride-hailing, and car rental focused on accessibility.",
    highlights: [
      "Role-based user management (User, Admin, Driver)",
      "Two-factor authentication via face recognition or SMS",
      "AI accessibility tools: sign language recognition and virtual keyboard",
    ],
    technologies: "Java, Symfony, PHP, phpMyAdmin",
  },
  {
    title: "AzulTunes - Travel and Tourism Website",
    period: "2024",
    role: "Branding and UI Designer, User Assistance Module Developer",
    description:
      "Responsible travel platform highlighting Tunisian culture, personalized itineraries, and AI trip planning.",
    highlights: [
      "AzulBot travel assistant for personalized trips",
      "Offers, reservations, and recommendation system",
      "Community forums and event management",
    ],
    technologies: "HTML, CSS, JavaScript, PHP",
    metrics: "Top 10 university projects",
  },
];

export const EXPERIENCE = [
  {
    title: "Internship - AI in Cybersecurity",
    company: "CliniSys",
    period: "Jul - Aug 2025",
    summary:
      "Applied research on network traffic analysis using deep learning for real-time DDoS detection.",
    highlights: [
      "Transformer-based model for DDoS detection",
      "Live pipeline with TShark capture and inference",
      "Explainability to surface influential traffic features",
      "CRISP-DM applied across the research pipeline",
    ],
  },
  {
    title: "Human and Social Training Internship",
    company: "ESPRIT TECH",
    period: "Jun 2023",
    summary:
      "Database management tasks, soft skills development, and exposure to HR and IT procurement practices.",
  },
];

export const SKILLS = [
  {
    category: "Programming and Development",
    items: [
      "Python",
      "Java",
      "C",
      "C++",
      "PHP",
      "JavaScript",
      "HTML",
      "CSS",
      "Symfony",
      "Spring Boot",
      ".NET",
      "React",
      "Next.js",
    ],
  },
  {
    category: "Databases",
    items: ["SQL"],
  },
  {
    category: "Cybersecurity and Networking",
    items: [
      "Wazuh (SIEM/XDR)",
      "Shuffle (SOAR automation)",
      "Zabbix (monitoring)",
      "TheHive (case management)",
      "Cortex (IOC analysis)",
      "MISP (threat intelligence)",
      "Active Directory",
      "MidPoint IGA",
      "Keycloak",
    ],
  },
  {
    category: "AI and Data",
    items: [
      "Fundamentals of Deep Learning",
      "Rapid Application Development with LLMs",
      "Generative AI with Diffusion Models",
    ],
  },
];

export const LANGUAGES = [
  { name: "Arabic", level: "Native" },
  { name: "English", level: "B2" },
  { name: "French", level: "B2" },
];

export const CERTIFICATES = {
  label: "All certificates are available via link",
  link: "#",
};
