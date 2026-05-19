"use client";

import PageShell from "@/components/PageShell";
import { EDUCATION } from "@/lib/constants";
import { useEffect, useRef, useState } from "react";

// Augment EDUCATION items with photo + location
const EDUCATION_ENHANCED = [
  {
    institution: "ESPRIT School of Engineering",
    period: "2022 — Present",
    detail: "Engineering degree in Computer Science & Software Engineering",
    photo: "https://www.esprit.tn/wp-content/uploads/2025/01/ESPRIT-School-of-Engineering-ESE-image.jpg",
    location: "Pôle Technologique, 1, 2 rue André Ampère, 2088 Ariana, Tunisia",
    tag: "Engineering",
    index: 0,
  },
  {
    institution: "Lycée Abou El Kacem Chebbi",
    period: "2018 — 2022",
    detail: "Baccalaureate in Experimental Sciences",
    photo: "https://plurielle.tn/pro/wp-content/uploads/2022/06/photo-75243.jpeg",
    location: "Sfax, Tunisia",
    tag: "High School",
    index: 1,
  },
];

function PinIcon() {
  return (
    <svg
      width="13"
      height="16"
      viewBox="0 0 13 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="flex-shrink-0"
    >
      <path
        d="M6.5 0C2.91 0 0 2.91 0 6.5C0 10.925 6.5 16 6.5 16C6.5 16 13 10.925 13 6.5C13 2.91 10.09 0 6.5 0ZM6.5 8.875C5.19 8.875 4.125 7.81 4.125 6.5C4.125 5.19 5.19 4.125 6.5 4.125C7.81 4.125 8.875 5.19 8.875 6.5C8.875 7.81 7.81 8.875 6.5 8.875Z"
        fill="currentColor"
      />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1" y="2.5" width="12" height="10.5" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
      <path d="M1 5.5H13" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M4.5 1V4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M9.5 1V4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function EducationCard({ item, reversed }: { item: (typeof EDUCATION_ENHANCED)[0]; reversed?: boolean }) {
  const [hovered, setHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
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
        transform: visible
          ? "translateY(0)"
          : `translateY(${reversed ? "-32px" : "32px"})`,
        transition: `opacity 0.7s ease ${item.index * 0.18}s, transform 0.7s ease ${item.index * 0.18}s`,
        fontFamily: "'DM Sans', sans-serif",
      }}
      className="group relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
    >
      {/* Photo */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={item.photo}
          alt={item.institution}
          className="w-full h-full object-cover"
          style={{
            transform: hovered ? "scale(1.07)" : "scale(1)",
            transition: "transform 0.6s cubic-bezier(0.25,0.46,0.45,0.94)",
            filter: "brightness(0.82) saturate(1.1)",
          }}
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(6,9,20,0.05) 0%, rgba(6,9,20,0.35) 60%, rgba(6,9,20,0.95) 100%)",
          }}
        />
        {/* Tag badge */}
        <div className="absolute top-4 left-4">
          <span
            className="text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full"
            style={{
              background: "rgba(255,255,255,0.12)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.2)",
              color: "#e2e8f0",
              letterSpacing: "0.15em",
            }}
          >
            {item.tag}
          </span>
        </div>
        {/* Floating period badge */}
        <div
          className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs"
          style={{
            background: "rgba(99,179,237,0.18)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(99,179,237,0.35)",
            color: "#90cdf4",
            fontWeight: 600,
          }}
        >
          <CalendarIcon />
          {item.period}
        </div>
      </div>

      {/* Content */}
      <div
        className="px-6 pt-5 pb-6 relative"
        style={{
          background:
            "linear-gradient(135deg, rgba(15,20,40,0.97) 0%, rgba(10,14,30,0.99) 100%)",
          borderTop: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        {/* Decorative line accent */}
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

        <h2
          className="mt-3 text-xl font-bold text-white leading-snug"
          style={{ letterSpacing: "-0.01em" }}
        >
          {item.institution}
        </h2>

        <p
          className="mt-2 text-sm leading-relaxed"
          style={{ color: "#94a3b8" }}
        >
          {item.detail}
        </p>

        {/* Location */}
        <div
          className="mt-4 flex items-center gap-2 text-xs"
          style={{ color: "#64748b" }}
        >
          <span
            style={{
              color: "#63b3ed",
              display: "flex",
              alignItems: "center",
            }}
          >
            <PinIcon />
          </span>
          <span style={{ color: "#94a3b8" }}>{item.location}</span>
        </div>
      </div>
    </div>
  );
}

export default function EducationPage() {
  return (
    <>
      {/* Google Font */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,600;0,9..40,700;1,9..40,300&family=Playfair+Display:wght@600;700&display=swap');

        .edu-section-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #63b3ed;
        }

        .edu-title {
          font-family: 'Playfair Display', serif;
          font-weight: 700;
          font-size: clamp(2rem, 4vw, 3rem);
          color: #f1f5f9;
          line-height: 1.1;
          letter-spacing: -0.02em;
        }

        .edu-subtitle {
          font-family: 'DM Sans', sans-serif;
          color: #64748b;
          font-size: 0.95rem;
          line-height: 1.6;
          max-width: 38ch;
        }

        /* Subtle grid background */
        .edu-bg-grid {
          background-image:
            linear-gradient(rgba(99,179,237,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99,179,237,0.04) 1px, transparent 1px);
          background-size: 48px 48px;
        }

        /* Timeline dot */
        .timeline-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: linear-gradient(135deg, #63b3ed, #9f7aea);
          flex-shrink: 0;
          box-shadow: 0 0 10px rgba(99,179,237,0.5);
        }
      `}</style>

      <PageShell>
        <section className="edu-bg-grid min-h-screen py-24 px-4 sm:px-6 relative overflow-hidden">
          {/* Ambient glow blobs */}
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
              <p className="edu-section-label mb-3">Academic Journey</p>
              <h1 className="edu-title">Education</h1>
              <p className="edu-subtitle mt-4">
                Institutions that shaped my thinking, skills, and curiosity.
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
                <div className="timeline-dot" />
                <div
                  style={{
                    height: "1px",
                    flex: 1,
                    background:
                      "linear-gradient(90deg, rgba(99,179,237,0.3), transparent 60%)",
                  }}
                />
              </div>
            </div>

            {/* Cards grid */}
            <div className="grid md:grid-cols-2 gap-7">
              {EDUCATION_ENHANCED.map((item, i) => (
                <EducationCard key={item.institution} item={item} reversed={i % 2 === 1} />
              ))}
            </div>

            {/* Bottom credits line */}
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
                Tunisia
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