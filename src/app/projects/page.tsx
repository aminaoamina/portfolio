"use client";

import PageShell from "@/components/PageShell";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

// ─── Data ────────────────────────────────────────────────────────────────────

const TECHNICAL_PROJECTS = [
  {
    title: "FortiFlow – DevSecOps CI/CD Pipeline",
    role: "DevSecOps · CI/CD · Application Security",
    period: "Sep – Oct 2026",
    description:
      "Secured GitLab CI/CD pipeline running on a self-hosted runner, enforcing blocking quality gates from commit to deployment.",
    highlights: [
      "Shift-left checks with pre-commit hooks and Gitleaks secret scanning",
      "SAST with Semgrep, Bandit, and SonarCloud; DAST with OWASP ZAP",
      "Trivy SCA, image scanning, and SBOM generation plus Checkov IaC scanning, with Slack alerts",
    ],
    technologies: "GitLab CI · Gitleaks · Semgrep · Bandit · SonarCloud · Trivy · Checkov · OWASP ZAP · Slack",
    links: { github: "https://gitlab.com/dev_sec_ops3/fortiflow", demo: null },
    index: 0,
  },
  {
    title: "FIN-SHIELD – Transformer Tax-Risk Engine",
    role: "Deep Learning · Risk Scoring · FinTech",
    period: "Sep 2026",
    description:
      "Two-level self-attention Transformer that ranks taxpayers' declaration histories by review priority, trained on a calibrated synthetic Tunisian tax simulator.",
    highlights: [
      "Hierarchical self-attention over declarations and taxpayer histories",
      "Calibrated synthetic simulator modelling Tunisian tax declarations",
      "82.6% accuracy and 0.92 PR-AUC on a held-out year, served through FastAPI",
    ],
    technologies: "Python · PyTorch · Transformer · FastAPI",
    links: { github: "https://github.com/aminaoamina/FIN-SHIELD-Transformer-Risk-Engine", demo: null },
    index: 1,
  },
  {
    title: "ENIGMA – Next-Generation SOC",
    role: "Security Engineering · AI · DevSecOps",
    period: "Nov 2025 – May 2026",
    description:
      "Fully automated open-source SOC for the banking sector, delivering real-time threat detection and zero-touch response across DDoS, brute force, malware, privilege escalation, and phishing.",
    highlights: [
      "Segmented network with pfSense/OPNsense, Wazuh SIEM/XDR, and Shuffle SOAR",
      "Transformer-based DDoS detection on live TShark traffic with LLM-driven alert analysis",
      "Automated phishing mitigation and end-to-end IAM via AD, MidPoint IGA, and Keycloak SSO",
    ],
    technologies: "Wazuh · Shuffle · pfSense · LLM · Keycloak · MidPoint IGA · PingCastle · Flask",
    links: { github: null, demo: null },
    index: 2,
  },
  {
    title: "Phishing Detection System",
    role: "Machine Learning · Email Security",
    period: "2025",
    description:
      "Automated Gmail monitoring that combines LLM-driven text analysis, an XGBoost URL risk model, and PhishTank enrichment to identify and quarantine suspicious emails.",
    highlights: [
      "LLM pipeline for semantic analysis of email body and headers",
      "XGBoost model scoring URL risk with PhishTank threat enrichment",
      "Automated quarantine workflow with zero manual triage",
    ],
    technologies: "Python · XGBoost · LLM · Gmail API · PhishTank",
    links: { github: "https://github.com/aminaoamina/Phishing-Project", demo: null },
    index: 3,
  },
  {
    title: "DDoS Transformer-Based Detection",
    role: "Deep Learning · Cybersecurity",
    period: "2025",
    description:
      "Real-time DDoS detection using a Transformer-based model to identify distributed denial-of-service patterns in live network flow data.",
    highlights: [
      "Transformer architecture trained on network flow features for binary classification",
      "Live traffic capture via TShark with sub-200 ms inference pipeline",
      "XAI layer identifying the most influential traffic features per detection",
    ],
    technologies: "Python · PyTorch · TShark · SHAP · CRISP-DM",
    links: { github: "https://github.com/aminaoamina/DDos-Transformer-Based-Detection", demo: null },
    index: 4,
  },
  {
    title: "LotusAura – AI Healthcare Platform",
    role: "AI · Full-Stack · Healthcare",
    period: "Nov – Dec 2025",
    description:
      "AI-powered healthcare platform for Tunisian families, integrating multilingual RAG-based assistants, emotionally aware voice AI, and secure family health management.",
    highlights: [
      "Multilingual RAG assistant with emotionally aware voice AI",
      "Secure family health record management with role-based access",
      "4th Place at IEEE TSYP13 EMBS CIS WIE Challenge",
    ],
    technologies: "Python · RAG · LLM · Voice AI · Next.js",
    links: { github: null, demo: "https://drive.google.com/file/d/1TiXYlkCCjPsfsjLUyp8gKdZ5BMAnqHff/view?usp=sharing" },
    index: 5,
  },
  {
    title: "EZGO – Smart Urban Mobility App",
    role: "Full-Stack · AI · Mobile",
    period: "Jan – May 2025",
    description:
      "Inclusive smart mobility platform modernizing urban transportation in Tunisia with real-time tracking, ride hailing, and car rental services.",
    highlights: [
      "Secure role-based access with face recognition and SMS-based 2FA",
      "AI accessibility features: sign-language recognition and virtual keyboard",
      "Real-time tracking and multi-service booking in a single platform",
    ],
    technologies: "Java · Symfony · php · AI · 2FA",
    links: { github: null, demo: null },
    index: 6,
  },
  {
    title: "AzulTunes – Travel & Tourism Platform",
    role: "Full-Stack · Web · AI",
    period: "Jan – May 2024",
    description:
      "Sustainable tourism platform for Tunisia with personalized travel experiences, cultural promotion, and an AI assistant, recognized as a Top 5 university project.",
    highlights: [
      "AzulBot AI assistant for personalized travel recommendations",
      "User profiles, bookings, community forums, and cultural content",
      "Top 5 university project recognition",
    ],
    technologies: "HTML · CSS · JavaScript · PHP · AI Chatbot",
    links: { github: null, demo: "https://www.youtube.com/watch?v=vu_uBOs_uzM" },
    index: 7,
  },
];

type DesignProject = {
  title: string;
  type: string;
  period: string;
  description: string;
  cover: string;
  link: string;
  linkLabel: string;
  index: number;
};

const DESIGN_PROJECTS: DesignProject[] = [
  {
    title: "IEEE Day",
    type: "Media Manager",
    period: "2026",
    description:
      "Celebration campaign for IEEE Day at ESPRIT, uniting every student branch chapter under one vibrant, tech-forward identity.",
    cover: "/assets/images/Media-Projects/IEEE-Day/banner.jpg",
    link: "https://www.facebook.com/events/1779675636510246",
    linkLabel: "Facebook event",
    index: 0,
  },
  {
    title: "IEEE ESPRIT Recruitment",
    type: "Media Manager",
    period: "2026",
    description:
      "Playful, retro desktop-inspired recruitment campaign welcoming new members to the IEEE ESPRIT Student Branch.",
    cover: "/assets/images/Media-Projects/Recruitment/banner.jpg",
    link: "https://www.facebook.com/IEEEESPRIT",
    linkLabel: "Facebook page",
    index: 1,
  },
  {
    title: "Pegasus Connect",
    type: "Media Team Lead",
    period: "2026",
    description:
      "A cinematic launch identity built for a campus event, balancing motion-friendly composition with elegant typography.",
    cover: "/assets/images/Media-Projects/Pegasus-connect/Banner.png",
    link: "https://www.facebook.com/events/2509842162800000",
    linkLabel: "Facebook event",
    index: 2,
  },
  {
    title: "Code2Cure 3.0",
    type: "Media Team Lead",
    period: "2026",
    description:
      "A bold hackathon identity with energetic social assets, winners announcements, and challenge-driven visuals.",
    cover: "/assets/images/Media-Projects/codecure/Banner2.jpg",
    link: "https://www.facebook.com/profile.php?id=61572627656012",
    linkLabel: "Facebook profile",
    index: 3,
  },
  {
    title: "Code2Cure 2.0",
    type: "Media Team Lead",
    period: "2025",
    description:
      "Earlier Code2Cure visuals focused on strong event storytelling, fast announcement posts, and clear call-to-action graphics.",
    cover: "/assets/images/Media-Projects/codecure/Banner.jpg",
    link: "https://www.facebook.com/profile.php?id=61572627656012",
    linkLabel: "Facebook profile",
    index: 4,
  },
  {
    title: "EZGO",
    type: "Herotopia Challenge · Campaign Visuals",
    period: "2025",
    description:
      "Smart mobility campaign visuals built around accessibility, clarity, and a more human transport experience.",
    cover: "/assets/images/Media-Projects/EZGO/Banner.png",
    link: "https://www.instagram.com/ezgo.tn/",
    linkLabel: "Instagram page",
    index: 5,
  },
  {
    title: "IEEE IAS Tunisia Annual Meeting 5.0",
    type: "Media Manager",
    period: "2025",
    description:
      "Campaign visuals, announcement graphics, and event identity work for the IEEE IAS Tunisia Annual Meeting 5.0.",
    cover: "/assets/images/Media-Projects/IASTAM5/banner.png",
    link: "https://www.facebook.com/IASTunisiaAM",
    linkLabel: "Facebook page",
    index: 6,
  },
  {
    title: "IEEE IES SYP 2.0",
    type: "Media & Communication Team Member",
    period: "2025",
    description:
      "Conference graphics and team support content designed for fast publishing and a clean, premium event look.",
    cover: "/assets/images/Media-Projects/IES-SYP-2/banner.jpg",
    link: "https://www.instagram.com/ieee_ies_syp/",
    linkLabel: "Instagram page",
    index: 7,
  },
  {
    title: "IEEE WIE ESPRIT SBAG",
    type: "Media Manager",
    period: "2023–2024",
    description:
      "Community-facing content, story covers, and social updates for the IEEE WIE ESPRIT branch SAG.",
    cover: "/assets/images/Media-Projects/Media-manager/banner2.png",
    link: "https://www.instagram.com/ieee_wie_esprit/",
    linkLabel: "Instagram page",
    index: 8,
  },
  {
    title: "IEEE ESPRIT Student Branch",
    type: "Media Manager",
    period: "2025–2026",
    description:
      "Visual identity and media management for the IEEE ESPRIT Student Branch, covering campaigns, announcements, and event content.",
    cover: "/assets/images/Media-Projects/Media-manager/banner1.png",
    link: "https://www.facebook.com/IEEEESPRIT",
    linkLabel: "Facebook page",
    index: 9,
  },
];

// ─── Technical Project Card ───────────────────────────────────────────────────

function TechCard({ item }: { item: (typeof TECHNICAL_PROJECTS)[0] }) {
  const [hovered, setHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.12 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.65s ease ${item.index * 0.14}s, transform 0.65s ease ${item.index * 0.14}s`,
        fontFamily: "'DM Sans', sans-serif",
      }}
      className="relative pl-14 md:pl-20 group"
    >
      <div className="absolute left-0 md:left-2 top-6 flex items-center justify-center">
        <div className="relative w-9 h-9">
          <div className="absolute inset-0 rounded-full border transition-colors duration-500" style={{ borderColor: hovered ? "rgba(99,179,237,0.6)" : "rgba(99,179,237,0.3)" }} />
          <div className="absolute inset-[3px] rounded-full border transition-colors duration-300" style={{ background: "#0a0e1e", borderColor: hovered ? "rgba(99,179,237,1)" : "rgba(99,179,237,0.5)" }} />
          <div className="absolute inset-[7px] rounded-full transition-opacity duration-300" style={{ background: "linear-gradient(135deg, #63b3ed, #9f7aea)", boxShadow: hovered ? "0 0 10px rgba(99,179,237,0.55)" : "none" }} />
          <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-[10px] font-mono text-slate-600">{String(item.index + 1).padStart(2, "0")}</span>
        </div>
      </div>

      <div className="relative rounded-xl border p-6 md:p-7 overflow-hidden shadow-2xl" style={{ background: "linear-gradient(135deg, rgba(15,20,40,0.97) 0%, rgba(10,14,30,0.99) 100%)", borderColor: hovered ? "rgba(99,179,237,0.25)" : "rgba(255,255,255,0.08)", transition: "border-color 0.4s ease" }}>
        <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-sky-400/40 to-transparent" />
        <div style={{ position: "absolute", top: 0, left: 24, width: hovered ? "72px" : "32px", height: "2px", background: "linear-gradient(90deg, #63b3ed, #9f7aea)", borderRadius: "999px", transition: "width 0.4s ease" }} />

        <div className="flex flex-wrap items-start justify-between gap-3 mb-1 mt-2">
          <h2 className="text-lg md:text-xl font-bold text-white leading-snug" style={{ letterSpacing: "-0.01em", fontFamily: "'Playfair Display', serif" }}>{item.title}</h2>
          <span className="shrink-0 text-xs font-semibold px-3 py-1.5 rounded-full" style={{ background: "rgba(99,179,237,0.13)", border: "1px solid rgba(99,179,237,0.3)", color: "#90cdf4" }}>{item.period}</span>
        </div>

        <p className="text-xs font-mono tracking-[0.22em] uppercase mb-4" style={{ color: "rgba(99,179,237,0.8)" }}>◈ {item.role}</p>
        <p className="text-sm leading-relaxed mb-5" style={{ color: "#94a3b8" }}>{item.description}</p>

        <ul className="space-y-2.5 mb-5">
          {item.highlights.map((h) => (
            <li key={h} className="flex gap-3 text-sm" style={{ color: "#cbd5e1" }}>
              <span className="shrink-0 mt-[6px] block w-1.5 h-1.5 rounded-sm rotate-45" style={{ background: "rgba(99,179,237,0.6)" }} />
              <span className="leading-relaxed">{h}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap items-center justify-between gap-3 pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="flex flex-wrap gap-2">
            {item.technologies.split(" · ").map((tag) => (
              <span key={tag} className="text-[11px] font-mono px-2.5 py-1 rounded" style={{ color: "rgba(125,211,252,0.75)", background: "rgba(8,47,73,0.4)", border: "1px solid rgba(99,179,237,0.15)" }}>{tag}</span>
            ))}
          </div>
          <div className="flex gap-3">
            {item.links.github && (
              <a href={item.links.github} target="_blank" rel="noopener noreferrer" className="text-xs font-mono tracking-wider flex items-center gap-1.5 transition-colors duration-200" style={{ color: "rgba(99,179,237,0.6)" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#63b3ed")} onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(99,179,237,0.6)")}>
                {item.links.github.includes("gitlab.com") ? "GitLab →" : "GitHub →"}
              </a>
            )}
            {item.links.demo && (
              <a href={item.links.demo} target="_blank" rel="noopener noreferrer" className="text-xs font-mono tracking-wider flex items-center gap-1.5 transition-colors duration-200" style={{ color: "rgba(99,179,237,0.6)" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#63b3ed")} onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(99,179,237,0.6)")}>
                Demo →
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Design Project Card ──────────────────────────────────────────────────────

function DesignCard({ item }: { item: DesignProject }) {
  const [hovered, setHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.12 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative rounded-xl border overflow-hidden shadow-2xl"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0) scale(1)" : "translateY(24px) scale(0.98)",
        transition: `opacity 0.65s ease ${item.index * 0.12}s, transform 0.65s ease ${item.index * 0.12}s, border-color 0.4s ease`,
        fontFamily: "'DM Sans', sans-serif",
        background: "linear-gradient(135deg, rgba(15,20,40,0.97) 0%, rgba(10,14,30,0.99) 100%)",
        borderColor: hovered ? "rgba(159,122,234,0.3)" : "rgba(255,255,255,0.08)",
      }}
    >
      {/* Cover image */}
      <div className="relative overflow-hidden" style={{ height: "clamp(160px, 20vw, 210px)" }}>
        <Image
          src={item.cover}
          alt={`${item.title} cover`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
          className="object-cover transition-transform duration-700"
          style={{ transform: hovered ? "scale(1.05)" : "scale(1)", objectPosition: "center top" }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, rgba(6,10,20,0.05) 0%, rgba(6,10,20,0.2) 40%, rgba(6,10,20,0.92) 100%)" }}
        />
        {/* Top badges */}
        <div className="absolute left-4 top-4 right-4 flex items-start justify-between gap-3">
          <span className="shrink-0 text-[11px] font-semibold px-2.5 py-1 rounded-full backdrop-blur-md" style={{ background: "rgba(10,14,30,0.58)", border: "1px solid rgba(255,255,255,0.08)", color: "#f8fafc" }}>
            {item.period}
          </span>
          <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full text-violet-100 backdrop-blur-md" style={{ background: "rgba(159,122,234,0.14)", border: "1px solid rgba(159,122,234,0.3)" }}>
            {item.type}
          </span>
        </div>
        {/* Bottom title inside image */}
        <div className="absolute bottom-4 left-4 right-4">
          <p className="text-[10px] uppercase tracking-[0.28em] text-slate-200/55 mb-2">Selected work</p>
          <h2 className="text-xl md:text-2xl font-bold text-white leading-tight" style={{ letterSpacing: "-0.02em", fontFamily: "'Playfair Display', serif" }}>
            {item.title}
          </h2>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-400/30 to-transparent" />
      </div>

      {/* Card body */}
      <div className="p-5">
        <div style={{ height: "2px", width: hovered ? "56px" : "24px", background: "linear-gradient(90deg, #9f7aea, #63b3ed)", borderRadius: "999px", transition: "width 0.4s ease", marginBottom: "14px" }} />
        <p className="text-[11px] font-mono tracking-[0.2em] uppercase mb-3" style={{ color: "rgba(159,122,234,0.8)" }}>◈ {item.type}</p>
        <p className="text-sm leading-relaxed mb-4" style={{ color: "#94a3b8" }}>{item.description}</p>
        <div className="pt-3" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono tracking-wider inline-flex items-center gap-1.5 transition-colors duration-200"
            style={{ color: "rgba(159,122,234,0.6)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#c4b5fd")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(159,122,234,0.6)")}
          >
            {item.linkLabel} <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

type Tab = "technical" | "design";

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState<Tab>("technical");
  const [animating, setAnimating] = useState(false);

  const switchTab = (tab: Tab) => {
    if (tab === activeTab) return;
    setAnimating(true);
    window.setTimeout(() => {
      setActiveTab(tab);
      setAnimating(false);
    }, 220);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,600;0,9..40,700&family=Playfair+Display:wght@600;700&display=swap');

        .proj-bg-grid {
          background-image:
            linear-gradient(rgba(99,179,237,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99,179,237,0.04) 1px, transparent 1px);
          background-size: 48px 48px;
        }
        .tab-btn {
          position: relative;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 22px;
          border-radius: 10px;
          border: 1px solid rgba(255,255,255,0.08);
          background: transparent;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          cursor: pointer;
          transition: border-color 0.3s ease, background 0.3s ease, color 0.3s ease;
          outline: none;
        }
        .tab-btn.active-technical {
          background: linear-gradient(135deg, rgba(99,179,237,0.15) 0%, rgba(99,179,237,0.06) 100%);
          border-color: rgba(99,179,237,0.45);
          color: #90cdf4;
          box-shadow: 0 0 24px rgba(99,179,237,0.15), inset 0 1px 0 rgba(99,179,237,0.1);
        }
        .tab-btn.active-design {
          background: linear-gradient(135deg, rgba(159,122,234,0.15) 0%, rgba(159,122,234,0.06) 100%);
          border-color: rgba(159,122,234,0.45);
          color: #c4b5fd;
          box-shadow: 0 0 24px rgba(159,122,234,0.15), inset 0 1px 0 rgba(159,122,234,0.1);
        }
        .tab-btn.inactive { color: #475569; border-color: rgba(255,255,255,0.06); }
        .tab-btn.inactive:hover { color: #94a3b8; border-color: rgba(255,255,255,0.14); }
        .tab-dot-tech {
          width: 7px; height: 7px; border-radius: 50%;
          background: linear-gradient(135deg, #63b3ed, #9f7aea); flex-shrink: 0;
        }
        .tab-dot-design {
          width: 7px; height: 7px; border-radius: 50%;
          background: linear-gradient(135deg, #9f7aea, #ec4899); flex-shrink: 0;
        }
        .timeline-dot-glow {
          width: 10px; height: 10px; border-radius: 50%;
          background: linear-gradient(135deg, #63b3ed, #9f7aea);
          flex-shrink: 0; box-shadow: 0 0 10px rgba(99,179,237,0.5);
        }
        .content-fade { transition: opacity 0.22s ease, transform 0.22s ease; }
      `}</style>

      <PageShell>
        <section className="proj-bg-grid min-h-screen py-24 px-4 sm:px-6 relative overflow-hidden">
          <div className="pointer-events-none absolute" style={{ top: "-10%", right: "-5%", width: "480px", height: "480px", background: "radial-gradient(circle, rgba(99,179,237,0.07) 0%, transparent 70%)", filter: "blur(60px)" }} />
          <div className="pointer-events-none absolute" style={{ bottom: "10%", left: "-8%", width: "400px", height: "400px", background: "radial-gradient(circle, rgba(159,122,234,0.06) 0%, transparent 70%)", filter: "blur(60px)" }} />

          <div className="max-w-5xl mx-auto relative">
            {/* Header */}
            <div className="mb-12">
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.25em", textTransform: "uppercase", color: "#63b3ed" }} className="mb-3">
                My Work
              </p>
              <h1 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "clamp(2rem, 4vw, 3rem)", color: "#f1f5f9", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
                Projects
              </h1>
              <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#64748b", fontSize: "0.95rem", lineHeight: 1.6, maxWidth: "48ch" }} className="mt-4">
                IEEE has been the space where I launched my design skills, and these are some of my most remarkable contributions in branding, media, and event storytelling.
              </p>
              <div className="mt-8 flex items-center gap-3">
                <div style={{ height: "1px", width: "48px", background: "linear-gradient(90deg, #63b3ed, transparent)" }} />
                <div className="timeline-dot-glow" />
                <div style={{ height: "1px", flex: 1, background: "linear-gradient(90deg, rgba(99,179,237,0.3), transparent 60%)" }} />
              </div>
            </div>

            {/* Toggle buttons */}
            <div className="flex items-center gap-3 mb-12 flex-wrap">
              <button onClick={() => switchTab("technical")} className={`tab-btn ${activeTab === "technical" ? "active-technical" : "inactive"}`}>
                <span className="tab-dot-tech" />
                Technical Projects
                <span className="ml-1 text-[10px] font-mono px-1.5 py-0.5 rounded" style={{ background: activeTab === "technical" ? "rgba(99,179,237,0.2)" : "rgba(255,255,255,0.05)", color: activeTab === "technical" ? "#90cdf4" : "#475569" }}>
                  {TECHNICAL_PROJECTS.length}
                </span>
              </button>

              <button onClick={() => switchTab("design")} className={`tab-btn ${activeTab === "design" ? "active-design" : "inactive"}`}>
                <span className="tab-dot-design" />
                Design Projects
                <span className="ml-1 text-[10px] font-mono px-1.5 py-0.5 rounded" style={{ background: activeTab === "design" ? "rgba(159,122,234,0.2)" : "rgba(255,255,255,0.05)", color: activeTab === "design" ? "#c4b5fd" : "#475569" }}>
                  {DESIGN_PROJECTS.length}
                </span>
              </button>
            </div>

            {/* Content */}
            <div className="content-fade" style={{ opacity: animating ? 0 : 1, transform: animating ? "translateY(8px)" : "translateY(0)" }}>

              {/* Technical - timeline */}
              {activeTab === "technical" && (
                <div className="relative">
                  <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px" style={{ background: "linear-gradient(to bottom, rgba(99,179,237,0.35) 0%, rgba(99,179,237,0.08) 70%, transparent 100%)" }} />
                  <div className="space-y-10">
                    {TECHNICAL_PROJECTS.map((item) => (
                      <TechCard key={item.title} item={item} />
                    ))}
                  </div>
                </div>
              )}

              {/* Design - card grid + CTA */}
              {activeTab === "design" && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {DESIGN_PROJECTS.map((item) => (
                      <DesignCard key={item.title} item={item} />
                    ))}
                  </div>

                  {/* Simple freelance CTA */}
                  <div
                    className="rounded-2xl border p-6 md:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
                    style={{ background: "linear-gradient(135deg, rgba(15,20,40,0.96) 0%, rgba(10,14,30,0.99) 100%)", borderColor: "rgba(159,122,234,0.2)" }}
                  >
                    <div>
                      <p className="text-[11px] font-mono tracking-[0.28em] uppercase mb-2" style={{ color: "#9f7aea" }}>Available for hire</p>
                      <h3 className="text-lg font-semibold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>Need design work done?</h3>
                      <p className="mt-1 text-sm" style={{ color: "#64748b", maxWidth: "42ch" }}>
                        Branding, social campaigns, event visuals, motion, merch. Reach out and we'll figure out the rest.
                      </p>
                    </div>
                    <Link
                      href="/contact"
                      className="shrink-0 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5"
                      style={{ background: "linear-gradient(135deg, #63b3ed 0%, #9f7aea 100%)", whiteSpace: "nowrap" }}
                    >
                      Get in touch
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M7 17L17 7M7 7h10v10" />
                      </svg>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom divider */}
            <div className="mt-16 flex items-center gap-3" style={{ opacity: 0.35 }}>
              <div style={{ height: "1px", flex: 1, background: "linear-gradient(90deg, transparent, rgba(148,163,184,0.4))" }} />
              <div style={{ height: "1px", flex: 1, background: "linear-gradient(90deg, rgba(148,163,184,0.4), transparent)" }} />
            </div>
          </div>
        </section>
      </PageShell>
    </>
  );
}