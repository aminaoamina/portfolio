"use client";

import PageShell from "@/components/PageShell";
import { useEffect, useRef, useState } from "react";

// ─── SVG Icons ────────────────────────────────────────────────────────────────

const ICONS: Record<string, string> = {
  // AI/ML concepts
  "Machine Learning": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><circle cx="4" cy="6" r="2"/><circle cx="20" cy="6" r="2"/><circle cx="4" cy="18" r="2"/><circle cx="20" cy="18" r="2"/><line x1="6" y1="6" x2="10" y2="11"/><line x1="18" y1="6" x2="14" y2="11"/><line x1="6" y1="18" x2="10" y2="13"/><line x1="18" y1="18" x2="14" y2="13"/></svg>`,
  "Deep Learning": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="5" cy="5" r="1.5"/><circle cx="5" cy="12" r="1.5"/><circle cx="5" cy="19" r="1.5"/><circle cx="12" cy="5" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="12" cy="19" r="1.5"/><circle cx="19" cy="8" r="1.5"/><circle cx="19" cy="16" r="1.5"/><line x1="6.5" y1="5" x2="10.5" y2="5"/><line x1="6.5" y1="12" x2="10.5" y2="12"/><line x1="6.5" y1="19" x2="10.5" y2="19"/><line x1="13.5" y1="5" x2="17.5" y2="8"/><line x1="13.5" y1="12" x2="17.5" y2="8"/><line x1="13.5" y1="12" x2="17.5" y2="16"/><line x1="13.5" y1="19" x2="17.5" y2="16"/></svg>`,
  "Transformers": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="4" height="4" rx="1"/><rect x="10" y="3" width="4" height="4" rx="1"/><rect x="17" y="3" width="4" height="4" rx="1"/><rect x="6" y="17" width="4" height="4" rx="1"/><rect x="14" y="17" width="4" height="4" rx="1"/><line x1="5" y1="7" x2="8" y2="17"/><line x1="12" y1="7" x2="8" y2="17"/><line x1="12" y1="7" x2="16" y2="17"/><line x1="19" y1="7" x2="16" y2="17"/></svg>`,
  "LLMs": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><line x1="8" y1="9" x2="16" y2="9"/><line x1="8" y1="13" x2="13" y2="13"/></svg>`,
  "RAG": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5"/><path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3"/></svg>`,
  "Fine Tuning": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>`,
  "NLP": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z"/><path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>`,
  "CNN": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="5" height="12" rx="1"/><rect x="9.5" y="4" width="5" height="16" rx="1"/><rect x="17" y="8" width="5" height="8" rx="1"/><line x1="7" y1="12" x2="9.5" y2="12"/><line x1="14.5" y1="12" x2="17" y2="12"/></svg>`,
  "LSTM": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="7" width="10" height="10" rx="2"/><path d="M12 3v4"/><path d="M12 17v4"/><path d="M3 12h4"/><path d="M17 12h4"/><circle cx="12" cy="12" r="2" fill="currentColor" stroke="none" opacity="0.5"/></svg>`,
  "XGBoost": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
  "Anomaly Detection": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,

  // Cybersecurity tools
  "Wazuh": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>`,
  "Shuffle": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 3 21 3 21 8"/><line x1="4" y1="20" x2="21" y2="3"/><polyline points="21 16 21 21 16 21"/><line x1="15" y1="15" x2="21" y2="21"/><line x1="4" y1="4" x2="9" y2="9"/></svg>`,
  "TheHive": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 19 6 19 14 12 18 5 14 5 6"/><polygon points="12 6 16 8.5 16 13 12 15.5 8 13 8 8.5"/></svg>`,
  "Cortex": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3"/><path d="M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12"/></svg>`,
  "MISP": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><line x1="12" y1="22" x2="12" y2="12"/><path d="M3.27 6.96L12 12.01l8.73-5.05"/></svg>`,
  "Zabbix": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/><polyline points="6 9 9 12 13 8 17 11"/></svg>`,
  "Keycloak": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/></svg>`,
  "Active Directory": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  "MidPoint": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/><path d="M8 12h4"/></svg>`,

  // Design tools without devicons
  "CapCut": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"/><line x1="19" y1="3" x2="19" y2="21"/></svg>`,
};

// ─── Skill data ───────────────────────────────────────────────────────────────

type Skill =
  | { kind: "icon"; name: string; icon: string; color: string }
  | { kind: "custom"; name: string; color: string };

const SKILL_GROUPS: { category: string; accent: string; skills: Skill[] }[] = [
  {
    category: "Languages",
    accent: "#63b3ed",
    skills: [
      { kind: "icon", name: "C",          icon: "c",         color: "#A8B9CC" },
      { kind: "icon", name: "C++",        icon: "cplusplus", color: "#00599C" },
      { kind: "icon", name: "Java",       icon: "java",      color: "#f89820" },
      { kind: "icon", name: "C#",         icon: "csharp",    color: "#9B4F96" },
      { kind: "icon", name: "Python",     icon: "python",    color: "#3776AB" },
      { kind: "icon", name: "PHP",        icon: "php",       color: "#777BB4" },
      { kind: "icon", name: "SQL",        icon: "mysql",     color: "#4479A1" },
    ],
  },
  {
    category: "AI & Machine Learning",
    accent: "#9f7aea",
    skills: [
      { kind: "custom", name: "Machine Learning",  color: "#a78bfa" },
      { kind: "custom", name: "Deep Learning",     color: "#818cf8" },
      { kind: "custom", name: "Transformers",      color: "#c084fc" },
      { kind: "custom", name: "LLMs",              color: "#e879f9" },
      { kind: "custom", name: "RAG",               color: "#f472b6" },
      { kind: "custom", name: "Fine Tuning",       color: "#a78bfa" },
      { kind: "custom", name: "NLP",               color: "#818cf8" },
      { kind: "custom", name: "CNN",               color: "#c084fc" },
      { kind: "custom", name: "LSTM",              color: "#e879f9" },
      { kind: "custom", name: "XGBoost",           color: "#f472b6" },
      { kind: "custom", name: "Anomaly Detection", color: "#a78bfa" },
    ],
  },
  {
    category: "Web & Frameworks",
    accent: "#63b3ed",
    skills: [
      { kind: "icon",   name: "Spring Boot", icon: "spring",      color: "#6DB33F" },
      { kind: "icon",   name: "Symfony",     icon: "symfony",     color: "#aaaaaa" },
      { kind: "icon",   name: ".NET",        icon: "dot-net",     color: "#512BD4" },
      { kind: "icon",   name: "React",       icon: "react",       color: "#61DAFB" },
      { kind: "icon",   name: "Next.js",     icon: "nextjs",      color: "#aaaaaa" },
      { kind: "icon",   name: "NestJS",      icon: "nestjs",      color: "#E0234E" },
      { kind: "icon",   name: "FastAPI",     icon: "fastapi",     color: "#009688" },
      { kind: "icon",   name: "Flask",       icon: "flask",       color: "#aaaaaa" },
    ],
  },
  {
    category: "Cybersecurity",
    accent: "#63b3ed",
    skills: [
      { kind: "custom", name: "Wazuh",            color: "#006aff" },
      { kind: "custom", name: "Shuffle",          color: "#f97316" },
      { kind: "custom", name: "TheHive",          color: "#facc15" },
      { kind: "custom", name: "Cortex",           color: "#a78bfa" },
      { kind: "custom", name: "MISP",             color: "#f87171" },
      { kind: "custom", name: "Zabbix",           color: "#d4222a" },
      { kind: "custom", name: "Keycloak",         color: "#4D9D47" },
      { kind: "custom", name: "Active Directory", color: "#0078d4" },
      { kind: "custom", name: "MidPoint",         color: "#6366f1" },
    ],
  },
  {
    category: "Design",
    accent: "#ec4899",
    skills: [
      { kind: "icon",   name: "Figma",       icon: "figma",       color: "#F24E1E" },
      { kind: "icon",   name: "Photoshop",   icon: "photoshop",   color: "#31A8FF" },
      { kind: "icon",   name: "Illustrator", icon: "illustrator", color: "#FF9A00" },
      { kind: "custom", name: "CapCut",                           color: "#000000" },
      { kind: "icon",   name: "Canva",       icon: "canva",       color: "#00C4CC" },
    ],
  },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

const PLAIN_VARIANTS = new Set([
  "flask", "fastapi", "scikitlearn", "nextjs", "github",
  "photoshop", "illustrator", "aftereffects", "premierepro", "canva",
  "symfony", "dot-net",
]);

function getIconUrl(slug: string) {
  const variant = PLAIN_VARIANTS.has(slug) ? "plain" : "original";
  return `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${slug}/${slug}-${variant}.svg`;
}

function hexToRgb(hex: string): string {
  const clean = hex.replace("#", "");
  if (clean.length !== 6) return "150,150,150";
  const n = parseInt(clean, 16);
  return `${(n >> 16) & 255},${(n >> 8) & 255},${n & 255}`;
}

// ─── Custom SVG Chip (AI/ML + Cybersec + CapCut) ─────────────────────────────

function CustomChip({ skill }: { skill: Extract<Skill, { kind: "custom" }> }) {
  const [hovered, setHovered] = useState(false);
  const rgb = hexToRgb(skill.color);
  const svgStr = ICONS[skill.name];

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex flex-col items-center gap-2 p-3 rounded-xl cursor-default select-none"
      style={{
        minWidth: "76px",
        background: hovered ? `rgba(${rgb}, 0.12)` : "rgba(255,255,255,0.04)",
        border: `1px solid ${hovered ? `rgba(${rgb}, 0.45)` : "rgba(255,255,255,0.08)"}`,
        boxShadow: hovered ? `0 0 20px rgba(${rgb}, 0.18)` : "none",
        transition: "all 0.22s ease",
      }}
    >
      <div
        style={{
          width: 38,
          height: 38,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: hovered ? skill.color : `rgba(${rgb}, 0.65)`,
          transform: hovered ? "scale(1.1)" : "scale(1)",
          transition: "color 0.22s ease, transform 0.22s ease",
        }}
        dangerouslySetInnerHTML={{ __html: svgStr ?? `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="8"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>` }}
      />
      <span
        className="text-[11px] font-mono text-center leading-tight"
        style={{
          color: hovered ? "#e2e8f0" : "#94a3b8",
          transition: "color 0.22s ease",
          maxWidth: "68px",
        }}
      >
        {skill.name}
      </span>
    </div>
  );
}

// ─── Devicon Chip ─────────────────────────────────────────────────────────────

function IconChip({ skill }: { skill: Extract<Skill, { kind: "icon" }> }) {
  const [hovered, setHovered] = useState(false);
  const [imgErr, setImgErr] = useState(false);
  const rgb = hexToRgb(skill.color);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex flex-col items-center gap-2 p-3 rounded-xl cursor-default select-none"
      style={{
        minWidth: "76px",
        background: hovered ? `rgba(${rgb}, 0.12)` : "rgba(255,255,255,0.04)",
        border: `1px solid ${hovered ? `rgba(${rgb}, 0.45)` : "rgba(255,255,255,0.08)"}`,
        boxShadow: hovered ? `0 0 20px rgba(${rgb}, 0.18)` : "none",
        transition: "all 0.22s ease",
      }}
    >
      <div
        style={{
          width: 38,
          height: 38,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          filter: hovered ? "none" : "grayscale(5%) brightness(1.6)",
          transform: hovered ? "scale(1.1)" : "scale(1)",
          transition: "filter 0.22s ease, transform 0.22s ease",
        }}
      >
        {!imgErr ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={getIconUrl(skill.icon)}
            alt={skill.name}
            width={38}
            height={38}
            style={{ objectFit: "contain", display: "block" }}
            onError={() => setImgErr(true)}
          />
        ) : (
          <span className="text-xs font-mono font-bold" style={{ color: skill.color }}>
            {skill.name.slice(0, 2).toUpperCase()}
          </span>
        )}
      </div>
      <span
        className="text-[11px] font-mono text-center leading-tight"
        style={{
          color: hovered ? "#e2e8f0" : "#94a3b8",
          transition: "color 0.22s ease",
          maxWidth: "68px",
        }}
      >
        {skill.name}
      </span>
    </div>
  );
}

function SkillChip({ skill }: { skill: Skill }) {
  if (skill.kind === "icon")   return <IconChip   skill={skill} />;
  if (skill.kind === "custom") return <CustomChip skill={skill} />;
  return null;
}

// ─── Group Card ───────────────────────────────────────────────────────────────

function SkillGroup({ group, delay }: { group: (typeof SKILL_GROUPS)[0]; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.08 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.65s ease ${delay}s, transform 0.65s ease ${delay}s`,
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <div
        className="relative rounded-xl border p-6 overflow-hidden h-full"
        style={{
          background: "linear-gradient(135deg, rgba(15,20,40,0.97) 0%, rgba(10,14,30,0.99) 100%)",
          borderColor: "rgba(255,255,255,0.08)",
        }}
      >
        <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-sky-400/20 to-transparent" />
        <div style={{ position: "absolute", top: 0, left: 24, width: "40px", height: "2px", background: `linear-gradient(90deg, ${group.accent}, transparent)`, borderRadius: "999px" }} />

        <h2 className="text-base font-bold text-white mb-5 mt-1" style={{ fontFamily: "'Playfair Display', serif", letterSpacing: "-0.01em" }}>
          {group.category}
        </h2>

        <div className="flex flex-wrap gap-2">
          {group.skills.map((skill) => (
            <SkillChip key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function SkillsPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,600;0,9..40,700&family=Playfair+Display:wght@600;700&display=swap');
        .skills-bg-grid {
          background-image:
            linear-gradient(rgba(99,179,237,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99,179,237,0.04) 1px, transparent 1px);
          background-size: 48px 48px;
        }
        .timeline-dot-glow {
          width: 10px; height: 10px; border-radius: 50%;
          background: linear-gradient(135deg, #63b3ed, #9f7aea);
          flex-shrink: 0; box-shadow: 0 0 10px rgba(99,179,237,0.5);
        }
      `}</style>

      <PageShell>
        <section className="skills-bg-grid min-h-screen py-24 px-4 sm:px-6 relative overflow-hidden">
          <div className="pointer-events-none absolute" style={{ top: "-10%", right: "-5%", width: "480px", height: "480px", background: "radial-gradient(circle, rgba(99,179,237,0.07) 0%, transparent 70%)", filter: "blur(60px)" }} />
          <div className="pointer-events-none absolute" style={{ bottom: "10%", left: "-8%", width: "400px", height: "400px", background: "radial-gradient(circle, rgba(159,122,234,0.06) 0%, transparent 70%)", filter: "blur(60px)" }} />

          <div className="max-w-5xl mx-auto relative">
            <div className="mb-14">
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.25em", textTransform: "uppercase", color: "#63b3ed" }} className="mb-3">Toolkit</p>
              <h1 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "clamp(2rem, 4vw, 3rem)", color: "#f1f5f9", lineHeight: 1.1, letterSpacing: "-0.02em" }}>Skills</h1>
              <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#64748b", fontSize: "0.95rem", lineHeight: 1.6, maxWidth: "40ch" }} className="mt-4">
                Technologies and tools I work with across AI, web, security, and design.
              </p>
              <div className="mt-8 flex items-center gap-3">
                <div style={{ height: "1px", width: "48px", background: "linear-gradient(90deg, #63b3ed, transparent)" }} />
                <div className="timeline-dot-glow" />
                <div style={{ height: "1px", flex: 1, background: "linear-gradient(90deg, rgba(99,179,237,0.3), transparent 60%)" }} />
              </div>
            </div>

            <div className="space-y-5">
              {/* Row 1: Languages + Design */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                <SkillGroup group={SKILL_GROUPS[0]} delay={0} />
                <SkillGroup group={SKILL_GROUPS[4]} delay={0.08} />
              </div>
              {/* Row 2: AI/ML full width */}
              <SkillGroup group={SKILL_GROUPS[1]} delay={0.16} />
              {/* Row 3: Web + Cybersec */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                <SkillGroup group={SKILL_GROUPS[2]} delay={0.24} />
                <SkillGroup group={SKILL_GROUPS[3]} delay={0.32} />
              </div>
            </div>

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