"use client";

import PageShell from "@/components/PageShell";
import { LANGUAGES } from "@/lib/constants";
import { useEffect, useRef, useState } from "react";

const ABOUT_CARDS = [
  {
    index: 0,
    tag: "Academic Focus",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
    iconColor: "#63b3ed",
    iconBg: "rgba(99,179,237,0.12)",
    accentFrom: "#63b3ed",
    accentTo: "#9f7aea",
    content: (
      <>
        <p style={{ fontSize: "0.92rem", color: "#94a3b8", lineHeight: 1.65, margin: 0 }}>
          I&apos;m a <strong style={{ color: "#cbd5e1", fontWeight: 600 }}>network infrastructure and data security</strong> engineering
          student driven to work at the intersection of AI and cybersecurity. I&apos;m passionate about building
          systems that solve real problems — not just for the challenge, but for the impact. My focus spans
          SOC operations, SIEM, and SOAR, while I actively sharpen my AI skills to apply them directly
          within security contexts.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap" as const, gap: "8px", marginTop: "14px" }}>
          {["Cybersecurity", "Artificial Intelligence", "Network Infrastructure", "SOC · SIEM · SOAR"].map((t, i) => {
            const colors = [
              { color: "#90cdf4", border: "rgba(99,179,237,0.3)", bg: "rgba(99,179,237,0.08)" },
              { color: "#c4b5fd", border: "rgba(167,139,250,0.3)", bg: "rgba(167,139,250,0.08)" },
              { color: "#5eead4", border: "rgba(94,234,212,0.3)", bg: "rgba(94,234,212,0.08)" },
              { color: "#fcd34d", border: "rgba(251,191,36,0.3)", bg: "rgba(251,191,36,0.08)" },
            ];
            return (
              <span key={t} style={{
                fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.08em",
                padding: "5px 11px", borderRadius: "999px", textTransform: "uppercase" as const,
                color: colors[i].color, border: `1px solid ${colors[i].border}`, background: colors[i].bg,
              }}>{t}</span>
            );
          })}
        </div>
      </>
    ),
  },
  {
    index: 1,
    tag: "IEEE Member",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    iconColor: "#a78bfa",
    iconBg: "rgba(159,122,234,0.12)",
    accentFrom: "#9f7aea",
    accentTo: "#63b3ed",
    content: (
      <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", marginTop: "4px" }}>
        <span style={{
          flexShrink: 0, fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.12em",
          padding: "5px 9px", borderRadius: "8px", textTransform: "uppercase" as const,
          background: "rgba(99,179,237,0.12)", border: "1px solid rgba(99,179,237,0.25)",
          color: "#90cdf4", marginTop: "2px",
        }}>Since 2022</span>
        <p style={{ fontSize: "0.92rem", color: "#94a3b8", lineHeight: 1.65, margin: 0 }}>
          Joined IEEE in my first university year. I&apos;ve helped organise events, led initiatives bridging
          student communities, and created opportunities for peers to grow — because I believe in
          lifting people as I climb.
        </p>
      </div>
    ),
  },
  {
    index: 2,
    tag: "Mindset & Drive",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18h6" /><path d="M10 22h4" />
        <path d="M12 2a7 7 0 0 1 7 7c0 2.5-1.5 4.5-3 6l-1 1H9l-1-1C6.5 13.5 5 11.5 5 9a7 7 0 0 1 7-7z" />
      </svg>
    ),
    iconColor: "#2dd4bf",
    iconBg: "rgba(45,212,191,0.10)",
    accentFrom: "#2dd4bf",
    accentTo: "#63b3ed",
    content: (
      <p style={{ fontSize: "0.92rem", color: "#94a3b8", lineHeight: 1.65, margin: 0 }}>
        I&apos;m always building something — a project, a skill, or an idea. I learned responsibility and
        leadership the hard way, through exposure to real challenges. I thrive on doing things that are{" "}
        <strong style={{ color: "#cbd5e1", fontWeight: 600 }}>different</strong> and that leave a mark on the
        people and communities around me.
      </p>
    ),
  },
];

function AboutCard({ card, colSpan }: { card: (typeof ABOUT_CARDS)[0]; colSpan?: boolean }) {
  const [hovered, setHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
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
        transition: `opacity 0.65s ease ${card.index * 0.12}s, transform 0.65s ease ${card.index * 0.12}s`,
        fontFamily: "'DM Sans', sans-serif",
        gridColumn: colSpan ? "1 / -1" : undefined,
      }}
      className="rounded-2xl overflow-hidden border shadow-2xl"
      style2={{ borderColor: hovered ? "rgba(99,179,237,0.25)" : "rgba(255,255,255,0.08)" }}
    >
      <div
        style={{
          padding: "22px 24px 26px",
          background: "linear-gradient(135deg, rgba(15,20,40,0.97) 0%, rgba(10,14,30,0.99) 100%)",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          position: "relative",
          height: "100%",
          boxSizing: "border-box",
          border: `1px solid ${hovered ? "rgba(99,179,237,0.25)" : "rgba(255,255,255,0.08)"}`,
          borderRadius: "16px",
          transition: "border-color 0.3s ease",
        }}
      >
        {/* Accent line */}
        <div style={{
          position: "absolute", top: 0, left: 22,
          width: hovered ? "68px" : "30px", height: "2px",
          background: `linear-gradient(90deg, ${card.accentFrom}, ${card.accentTo})`,
          borderRadius: "999px", transition: "width 0.4s ease",
        }} />

        {/* Icon */}
        <div style={{
          width: "36px", height: "36px", borderRadius: "10px",
          display: "flex", alignItems: "center", justifyContent: "center",
          background: card.iconBg, color: card.iconColor,
          marginBottom: "12px", marginTop: "10px",
        }}>
          {card.icon}
        </div>

        {/* Tag */}
        <p style={{
          fontSize: "0.82rem", fontWeight: 600, color: "#cbd5e1",
          letterSpacing: "0.06em", textTransform: "uppercase",
          marginBottom: "10px", marginTop: 0,
        }}>
          {card.tag}
        </p>

        {card.content}
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,600;0,9..40,700&family=Playfair+Display:wght@600;700&display=swap');

        .about-bg-grid {
          background-image:
            linear-gradient(rgba(99,179,237,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99,179,237,0.04) 1px, transparent 1px);
          background-size: 48px 48px;
        }
        .timeline-dot {
          width: 10px; height: 10px; border-radius: 50%;
          background: linear-gradient(135deg, #63b3ed, #9f7aea);
          flex-shrink: 0;
          box-shadow: 0 0 10px rgba(99,179,237,0.5);
        }
      `}</style>

      <PageShell>
        <section className="about-bg-grid min-h-screen py-24 px-4 sm:px-6 relative overflow-hidden">
          {/* Glow blobs */}
          <div className="pointer-events-none absolute" style={{
            top: "-10%", right: "-5%", width: "480px", height: "480px",
            background: "radial-gradient(circle, rgba(99,179,237,0.07) 0%, transparent 70%)",
            filter: "blur(60px)",
          }} />
          <div className="pointer-events-none absolute" style={{
            bottom: "10%", left: "-8%", width: "400px", height: "400px",
            background: "radial-gradient(circle, rgba(159,122,234,0.06) 0%, transparent 70%)",
            filter: "blur(60px)",
          }} />

          <div className="max-w-5xl mx-auto relative">
            {/* Header */}
            <div className="mb-14" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              <p style={{ fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.25em", textTransform: "uppercase", color: "#63b3ed", marginBottom: "10px" }}>
                Who I Am
              </p>
              <h1 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "clamp(2rem, 4vw, 3rem)", color: "#f1f5f9", lineHeight: 1.1, letterSpacing: "-0.02em", margin: "0 0 12px" }}>
                About
              </h1>
              <p style={{ color: "#64748b", fontSize: "0.95rem", lineHeight: 1.6, maxWidth: "38ch" }}>
                Engineering at the crossroads of cybersecurity, AI, and real-world impact.
              </p>
              <div className="mt-8 flex items-center gap-3">
                <div style={{ height: "1px", width: "48px", background: "linear-gradient(90deg, #63b3ed, transparent)" }} />
                <div className="timeline-dot" />
                <div style={{ height: "1px", flex: 1, background: "linear-gradient(90deg, rgba(99,179,237,0.3), transparent 60%)" }} />
              </div>
            </div>

            {/* Cards */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "18px" }}>
              {/* Academic Focus — full width */}
              <AboutCard card={ABOUT_CARDS[0]} colSpan />
              {/* IEEE + Mindset — side by side */}
              <AboutCard card={ABOUT_CARDS[1]} />
              <AboutCard card={ABOUT_CARDS[2]} />
              {/* Languages — full width */}
              <div
                style={{
                  gridColumn: "1 / -1",
                  borderRadius: "16px",
                  background: "linear-gradient(135deg, rgba(15,20,40,0.97) 0%, rgba(10,14,30,0.99) 100%)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  padding: "22px 24px 26px",
                  position: "relative",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                <div style={{
                  position: "absolute", top: 0, left: 22,
                  width: "30px", height: "2px",
                  background: "linear-gradient(90deg, #fbbf24, #f87171)",
                  borderRadius: "999px",
                }} />
                <div style={{
                  width: "36px", height: "36px", borderRadius: "10px",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  background: "rgba(251,191,36,0.10)", color: "#fbbf24",
                  marginBottom: "12px", marginTop: "10px",
                }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </div>
                <p style={{ fontSize: "0.82rem", fontWeight: 600, color: "#cbd5e1", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "12px", marginTop: 0 }}>
                  Languages
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {LANGUAGES.map((lang) => (
                    <span key={lang.name} style={{
                      fontSize: "0.8rem", padding: "6px 14px", borderRadius: "999px",
                      background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.10)",
                      color: "#e2e8f0",
                    }}>
                      {lang.name} <span style={{ color: "#64748b", marginLeft: "4px", fontSize: "0.73rem" }}>{lang.level}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </PageShell>
    </>
  );
}