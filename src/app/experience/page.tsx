"use client";

import PageShell from "@/components/PageShell";
import { useEffect, useRef, useState } from "react";

const EXPERIENCE = [
  {
    title: "AI in Cybersecurity Intern",
    company: "ESPRIT TECH",
    period: "Jul – Aug 2025",
    summary:
      "Conducted applied research on network traffic analysis using deep learning for real-time DDoS attack detection.",
    highlights: [
      "Designed and trained a Transformer-based model to classify DDoS vs. normal traffic patterns",
      "Deployed real-time pipeline with TShark for live traffic capture, normalization, and inference",
      "Added AI explainability layer to identify the most influential traffic features per detection",
      "Followed full CRISP-DM methodology from data understanding through deployment",
    ],
    tags: ["Deep Learning", "Transformers", "TShark", "XAI", "CRISP-DM"],
    index: 0,
  },
  {
    title: "Human & Social Training Intern",
    company: "CLINISYS",
    period: "Jun 2023",
    summary:
      "Supported cross-functional IT and HR operations, gaining exposure to enterprise systems and team workflows.",
    highlights: [
      "Database management tasks using SQL for record maintenance",
      "Assisted with IT hardware procurement processes",
      "Gained exposure to HR operations and organisational workflows",
    ],
    tags: ["SQL", "IT Operations", "HR", "Database Management"],
    index: 1,
  },
];

function ExperienceCard({ item }: { item: (typeof EXPERIENCE)[0] }) {
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
        transition: `opacity 0.7s ease ${item.index * 0.18}s, transform 0.7s ease ${item.index * 0.18}s`,
        fontFamily: "'DM Sans', sans-serif",
      }}
      className="relative pl-14 md:pl-20 group"
    >
      {/* Timeline dot */}
      <div className="absolute left-0 md:left-2 top-6 flex items-center justify-center">
        <div className="relative w-9 h-9">
          <div className="absolute inset-0 rounded-full border border-sky-400/30 group-hover:border-sky-400/60 transition-colors duration-500" />
          <div className="absolute inset-[3px] rounded-full bg-slate-900 border border-sky-400/50 group-hover:border-sky-400 transition-colors duration-300" />
          {/* Gradient dot core — matches education's timeline-dot */}
          <div
            className="absolute inset-[7px] rounded-full group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: "linear-gradient(135deg, #63b3ed, #9f7aea)",
              boxShadow: hovered ? "0 0 10px rgba(99,179,237,0.55)" : "none",
              transition: "box-shadow 0.3s ease",
            }}
          />
          <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-[10px] font-mono text-slate-600">
            {String(item.index + 1).padStart(2, "0")}
          </span>
        </div>
      </div>

      {/* Card */}
      <div
        className="relative rounded-xl border border-white/10 bg-slate-900/60 backdrop-blur-sm p-6 md:p-7 overflow-hidden shadow-2xl"
        style={{
          background: "linear-gradient(135deg, rgba(15,20,40,0.97) 0%, rgba(10,14,30,0.99) 100%)",
          borderColor: hovered ? "rgba(99,179,237,0.25)" : "rgba(255,255,255,0.08)",
          transition: "border-color 0.4s ease",
        }}
      >
        {/* Scan line — top edge */}
        <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-sky-400/40 to-transparent" />

        {/* Hover accent line — matches education card's decorative line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 24,
            width: hovered ? "72px" : "32px",
            height: "2px",
            background: "linear-gradient(90deg, #63b3ed, #9f7aea)",
            borderRadius: "999px",
            transition: "width 0.4s ease",
          }}
        />

        {/* Top row */}
        <div className="flex flex-wrap items-start justify-between gap-3 mb-1 mt-2">
          <h2
            className="text-lg md:text-xl font-bold text-white leading-snug"
            style={{ letterSpacing: "-0.01em", fontFamily: "'Playfair Display', serif" }}
          >
            {item.title}
          </h2>
          {/* Period badge — matches education's calendar badge style */}
          <span
            className="shrink-0 flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full"
            style={{
              background: "rgba(99,179,237,0.13)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(99,179,237,0.3)",
              color: "#90cdf4",
            }}
          >
            {item.period}
          </span>
        </div>

        {/* Company */}
        <p
          className="text-xs font-mono tracking-[0.22em] uppercase mb-4"
          style={{ color: "rgba(99,179,237,0.8)" }}
        >
          ◈ {item.company}
        </p>

        {/* Summary */}
        <p className="text-sm leading-relaxed mb-5" style={{ color: "#94a3b8" }}>
          {item.summary}
        </p>

        {/* Highlights */}
        {item.highlights && (
          <ul className="space-y-2.5 mb-5">
            {item.highlights.map((h) => (
              <li key={h} className="flex gap-3 text-sm" style={{ color: "#cbd5e1" }}>
                <span
                  className="shrink-0 mt-[6px] block w-1.5 h-1.5 rounded-sm rotate-45"
                  style={{ background: "rgba(99,179,237,0.6)" }}
                />
                <span className="leading-relaxed">{h}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Tags */}
        {item.tags && (
          <div
            className="flex flex-wrap gap-2 pt-4"
            style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
          >
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-mono px-2.5 py-1 rounded"
                style={{
                  color: "rgba(125,211,252,0.75)",
                  background: "rgba(8,47,73,0.4)",
                  border: "1px solid rgba(99,179,237,0.15)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function ExperiencePage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,600;0,9..40,700&family=Playfair+Display:wght@600;700&display=swap');

        .exp-bg-grid {
          background-image:
            linear-gradient(rgba(99,179,237,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99,179,237,0.04) 1px, transparent 1px);
          background-size: 48px 48px;
        }

        .timeline-dot-glow {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: linear-gradient(135deg, #63b3ed, #9f7aea);
          flex-shrink: 0;
          box-shadow: 0 0 10px rgba(99,179,237,0.5);
        }
      `}</style>

      <PageShell>
        <section className="exp-bg-grid min-h-screen py-24 px-4 sm:px-6 relative overflow-hidden">
          {/* Ambient glow blobs — same as education page */}
          <div
            className="pointer-events-none absolute"
            style={{
              top: "-10%",
              right: "-5%",
              width: "480px",
              height: "480px",
              background: "radial-gradient(circle, rgba(99,179,237,0.07) 0%, transparent 70%)",
              filter: "blur(60px)",
            }}
          />
          <div
            className="pointer-events-none absolute"
            style={{
              bottom: "10%",
              left: "-8%",
              width: "400px",
              height: "400px",
              background: "radial-gradient(circle, rgba(159,122,234,0.06) 0%, transparent 70%)",
              filter: "blur(60px)",
            }}
          />

          <div className="max-w-5xl mx-auto relative">
            {/* Header */}
            <div className="mb-14">
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.7rem",
                  fontWeight: 600,
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  color: "#63b3ed",
                }}
                className="mb-3"
              >
                Career Journey
              </p>
              <h1
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 700,
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  color: "#f1f5f9",
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                }}
              >
                Experience
              </h1>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  color: "#64748b",
                  fontSize: "0.95rem",
                  lineHeight: 1.6,
                  maxWidth: "38ch",
                }}
                className="mt-4"
              >
                Roles and research that defined my technical edge.
              </p>

              {/* Decorative divider — matches education page exactly */}
              <div className="mt-8 flex items-center gap-3">
                <div
                  style={{
                    height: "1px",
                    width: "48px",
                    background: "linear-gradient(90deg, #63b3ed, transparent)",
                  }}
                />
                <div className="timeline-dot-glow" />
                <div
                  style={{
                    height: "1px",
                    flex: 1,
                    background: "linear-gradient(90deg, rgba(99,179,237,0.3), transparent 60%)",
                  }}
                />
              </div>
            </div>

            {/* Timeline */}
            <div className="relative">
              {/* Vertical rail */}
              <div
                className="absolute left-4 md:left-6 top-0 bottom-0 w-px"
                style={{
                  background: "linear-gradient(to bottom, rgba(99,179,237,0.35) 0%, rgba(99,179,237,0.08) 70%, transparent 100%)",
                }}
              />

              <div className="space-y-10">
                {EXPERIENCE.map((item) => (
                  <ExperienceCard key={item.title} item={item} />
                ))}
              </div>
            </div>

            {/* Bottom credits line — matches education page */}
            <div
              className="mt-16 flex items-center gap-3"
              style={{ opacity: 0.35 }}
            >
              <div
                style={{
                  height: "1px",
                  flex: 1,
                  background: "linear-gradient(90deg, transparent, rgba(148,163,184,0.4))",
                }}
              />
              <span
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.7rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#64748b",
                }}
              >
                
              </span>
              <div
                style={{
                  height: "1px",
                  flex: 1,
                  background: "linear-gradient(90deg, rgba(148,163,184,0.4), transparent)",
                }}
              />
            </div>
          </div>
        </section>
      </PageShell>
    </>
  );
}