"use client";

import PageShell from "@/components/PageShell";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

// ─── Data ────────────────────────────────────────────────────────────────────

const CERTIFICATES = [
  {
    title: "Fundamentals of Deep Learning",
    issuer: "NVIDIA",
    category: "Deep Learning · AI",
    description:
      "Core concepts of deep learning including neural network architectures, training strategies, and GPU-accelerated workflows.",
    link: "https://learn.nvidia.com/certificates?id=vvT6rs7qSMynCSWFNnFfEQ",
    index: 0,
  },
  {
    title: "Rapid Application Development with Large Language Models",
    issuer: "NVIDIA",
    category: "LLMs · Generative AI",
    description:
      "Practical techniques for building production-ready applications powered by large language models, covering prompt engineering and deployment patterns.",
    link: "https://learn.nvidia.com/certificates?id=aAjeVgLtRCSCC8_BJKWRwQ",
    index: 1,
  },
  {
    title: "Generative AI with Diffusion Models",
    issuer: "NVIDIA",
    category: "Generative AI · Diffusion",
    description:
      "Theory and practice of diffusion-based generative models, from mathematical foundations to training and inference pipelines.",
    link: "https://learn.nvidia.com/certificates?id=9-V-O63PTWqSp0uE54JbLQ",
    index: 2,
  },
];

// ─── Certificate Card ─────────────────────────────────────────────────────────

function CertCard({ item }: { item: (typeof CERTIFICATES)[0] }) {
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
          <div
            className="absolute inset-0 rounded-full border transition-colors duration-500"
            style={{ borderColor: hovered ? "rgba(99,179,237,0.6)" : "rgba(99,179,237,0.3)" }}
          />
          <div
            className="absolute inset-[3px] rounded-full border transition-colors duration-300"
            style={{ background: "#0a0e1e", borderColor: hovered ? "rgba(99,179,237,1)" : "rgba(99,179,237,0.5)" }}
          />
          <div
            className="absolute inset-[7px] rounded-full transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, #63b3ed, #9f7aea)",
              boxShadow: hovered ? "0 0 10px rgba(99,179,237,0.55)" : "none",
            }}
          />
          <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-[10px] font-mono text-slate-600">
            {String(item.index + 1).padStart(2, "0")}
          </span>
        </div>
      </div>

      {/* Card */}
      <div
        className="relative rounded-xl border p-6 md:p-7 overflow-hidden shadow-2xl"
        style={{
          background: "linear-gradient(135deg, rgba(15,20,40,0.97) 0%, rgba(10,14,30,0.99) 100%)",
          borderColor: hovered ? "rgba(99,179,237,0.25)" : "rgba(255,255,255,0.08)",
          transition: "border-color 0.4s ease",
        }}
      >
        {/* Scan line */}
        <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-sky-400/40 to-transparent" />
        {/* Accent bar */}
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

        {/* NVIDIA badge - top right */}
        <div className="absolute top-5 right-6 flex items-center gap-1.5">
          <div
            className="w-5 h-5 rounded flex items-center justify-center"
            style={{ background: "rgba(118,185,0,0.15)", border: "1px solid rgba(118,185,0,0.3)" }}
          >
            {/* NVIDIA-ish green square icon */}
            <div className="w-2.5 h-2.5 rounded-sm" style={{ background: "#76b900" }} />
          </div>
          <span className="text-[11px] font-mono font-semibold tracking-widest uppercase" style={{ color: "#76b900" }}>
            NVIDIA
          </span>
        </div>

        {/* Title */}
        <div className="mt-2 mb-1 pr-24">
          <h2
            className="text-lg md:text-xl font-bold text-white leading-snug"
            style={{ letterSpacing: "-0.01em", fontFamily: "'Playfair Display', serif" }}
          >
            {item.title}
          </h2>
        </div>

        {/* Category */}
        <p
          className="text-xs font-mono tracking-[0.22em] uppercase mb-4"
          style={{ color: "rgba(99,179,237,0.8)" }}
        >
          ◈ {item.category}
        </p>

        {/* Description */}
        <p className="text-sm leading-relaxed mb-5" style={{ color: "#94a3b8" }}>
          {item.description}
        </p>

        {/* Footer */}
        <div
          className="flex items-center justify-between pt-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <span
            className="text-[11px] font-mono px-2.5 py-1 rounded"
            style={{
              color: "rgba(125,211,252,0.75)",
              background: "rgba(8,47,73,0.4)",
              border: "1px solid rgba(99,179,237,0.15)",
            }}
          >
            Verified Certificate
          </span>
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono tracking-wider inline-flex items-center gap-1.5 transition-colors duration-200"
            style={{ color: "rgba(99,179,237,0.6)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#63b3ed")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(99,179,237,0.6)")}
          >
            View certificate
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M7 7h10v10" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function CertificatesPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,600;0,9..40,700&family=Playfair+Display:wght@600;700&display=swap');

        .cert-bg-grid {
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
        <section className="cert-bg-grid min-h-screen py-24 px-4 sm:px-6 relative overflow-hidden">
          {/* Ambient blobs */}
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
                Credentials
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
                Certificates
              </h1>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  color: "#64748b",
                  fontSize: "0.95rem",
                  lineHeight: 1.6,
                  maxWidth: "40ch",
                }}
                className="mt-4"
              >
                Industry certifications validating my expertise in AI and deep learning.
              </p>

              {/* Decorative divider */}
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
                  background:
                    "linear-gradient(to bottom, rgba(99,179,237,0.35) 0%, rgba(99,179,237,0.08) 70%, transparent 100%)",
                }}
              />
              <div className="space-y-10">
                {CERTIFICATES.map((item) => (
                  <CertCard key={item.title} item={item} />
                ))}
              </div>
            </div>

            {/* Bottom divider */}
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