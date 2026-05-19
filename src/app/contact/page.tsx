"use client";

import PageShell from "@/components/PageShell";
import { useState, useRef, useEffect } from "react";

const CONTACT_EMAIL = "amina.bayoudh@ieee.org";
const LINKEDIN_URL = "https://www.linkedin.com/in/aminabayoudh/";
const GITHUB_URL = "https://github.com/aminabayoudh";

type FormState = "idle" | "sending" | "sent";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formState, setFormState] = useState<FormState>("idle");
  const [focused, setFocused] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    setFormState("sending");
    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nFrom: ${email}\n\n${message}`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setTimeout(() => setFormState("sent"), 900);
  };

  const reset = () => {
    setName(""); setEmail(""); setMessage(""); setFormState("idle");
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,600;0,9..40,700&family=Playfair+Display:wght@600;700&display=swap');

        .contact-bg-grid {
          background-image:
            linear-gradient(rgba(99,179,237,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99,179,237,0.04) 1px, transparent 1px);
          background-size: 48px 48px;
        }

        .c-input {
          width: 100%;
          background: rgba(255,255,255,0.025);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 12px;
          padding: 13px 16px;
          color: #f1f5f9;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.9rem;
          outline: none;
          transition: border-color 0.3s ease, background 0.3s ease, box-shadow 0.3s ease;
          resize: none;
        }
        .c-input::placeholder { color: #334155; }
        .c-input:focus {
          border-color: rgba(99,179,237,0.5);
          background: rgba(99,179,237,0.03);
          box-shadow: 0 0 0 3px rgba(99,179,237,0.07);
        }

        .send-btn {
          position: relative;
          display: flex; align-items: center; justify-content: center; gap: 9px;
          width: 100%; padding: 14px 24px; border-radius: 12px; border: none;
          font-family: 'DM Sans', sans-serif; font-size: 0.95rem; font-weight: 600;
          cursor: pointer; overflow: hidden;
          background: linear-gradient(135deg, #63b3ed 0%, #9f7aea 100%);
          color: #fff;
          transition: transform 0.2s ease, opacity 0.2s ease, box-shadow 0.2s ease;
        }
        .send-btn::before {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 60%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .send-btn:hover:not(:disabled)::before { opacity: 1; }
        .send-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 8px 32px rgba(99,179,237,0.25), 0 4px 12px rgba(159,122,234,0.2);
        }
        .send-btn:active:not(:disabled) { transform: translateY(0); }
        .send-btn:disabled { opacity: 0.55; cursor: default; }

        /* Social cards */
        .social-card {
          display: flex; align-items: center; gap: 16px;
          padding: 18px 22px; border-radius: 16px;
          border: 1px solid rgba(255,255,255,0.07);
          background: linear-gradient(135deg, rgba(15,20,40,0.9) 0%, rgba(10,14,30,0.95) 100%);
          text-decoration: none; flex: 1; min-width: 0;
          transition: border-color 0.35s ease, transform 0.3s ease, box-shadow 0.3s ease;
          position: relative; overflow: hidden;
        }
        .social-card::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(to right, transparent, rgba(99,179,237,0.3), transparent);
        }
        .social-card:hover {
          border-color: rgba(99,179,237,0.35);
          transform: translateY(-3px);
          box-shadow: 0 12px 40px rgba(99,179,237,0.1), 0 4px 16px rgba(0,0,0,0.3);
        }
        .social-card:hover .social-icon-wrap { border-color: rgba(99,179,237,0.5); background: rgba(99,179,237,0.12); }
        .social-card:hover .social-arrow { opacity: 1; transform: translate(0, 0); }
        .social-card:hover .social-accent-bar { width: 56px; }

        .social-icon-wrap {
          width: 44px; height: 44px; border-radius: 12px; flex-shrink: 0;
          display: flex; align-items: center; justify-content: center;
          background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08);
          transition: border-color 0.3s ease, background 0.3s ease;
          color: #90cdf4;
        }

        .social-arrow {
          margin-left: auto; flex-shrink: 0;
          opacity: 0; transform: translate(-4px, 4px);
          transition: opacity 0.3s ease, transform 0.3s ease;
          color: #63b3ed;
        }

        .social-accent-bar {
          position: absolute; top: 0; left: 22px;
          height: 2px; width: 28px;
          background: linear-gradient(90deg, #63b3ed, #9f7aea);
          border-radius: 999px;
          transition: width 0.4s ease;
        }

        .timeline-dot-glow {
          width: 10px; height: 10px; border-radius: 50%;
          background: linear-gradient(135deg, #63b3ed, #9f7aea);
          flex-shrink: 0; box-shadow: 0 0 10px rgba(99,179,237,0.5);
        }

        @keyframes checkPop {
          0%   { transform: scale(0) rotate(-15deg); opacity: 0; }
          65%  { transform: scale(1.2) rotate(4deg);  opacity: 1; }
          100% { transform: scale(1)   rotate(0deg);  opacity: 1; }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        .check-pop   { animation: checkPop 0.55s cubic-bezier(0.34,1.56,0.64,1) forwards; }
        .fade-up-1   { animation: fadeUp 0.6s ease 0.1s both; }
        .fade-up-2   { animation: fadeUp 0.6s ease 0.25s both; }
        .fade-up-3   { animation: fadeUp 0.6s ease 0.35s both; }

        .sent-title {
          background: linear-gradient(135deg, #63b3ed, #9f7aea, #63b3ed);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 3s linear infinite;
        }

        .reset-btn {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 9px 20px; border-radius: 999px;
          border: 1px solid rgba(99,179,237,0.25);
          background: transparent;
          color: #64748b; font-family: 'DM Sans', sans-serif;
          font-size: 0.8rem; font-weight: 600; cursor: pointer;
          transition: border-color 0.3s, color 0.3s;
        }
        .reset-btn:hover { border-color: rgba(99,179,237,0.5); color: #90cdf4; }

        .field-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.7rem; font-weight: 600;
          letter-spacing: 0.18em; text-transform: uppercase; color: #475569;
        }
      `}</style>

      <PageShell>
        <section
          ref={sectionRef}
          className="contact-bg-grid min-h-screen py-24 px-4 sm:px-6 relative overflow-hidden"
        >
          {/* Ambient blobs */}
          <div className="pointer-events-none absolute" style={{ top: "-10%", right: "-5%", width: "500px", height: "500px", background: "radial-gradient(circle, rgba(99,179,237,0.07) 0%, transparent 70%)", filter: "blur(70px)" }} />
          <div className="pointer-events-none absolute" style={{ bottom: "5%", left: "-8%", width: "420px", height: "420px", background: "radial-gradient(circle, rgba(159,122,234,0.07) 0%, transparent 70%)", filter: "blur(70px)" }} />

          <div
            className="max-w-2xl mx-auto relative"
            style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(24px)", transition: "opacity 0.7s ease, transform 0.7s ease" }}
          >

            {/* ── Header ── */}
            <div className="mb-12">
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.25em", textTransform: "uppercase", color: "#63b3ed" }} className="mb-3">
                Get in touch
              </p>
              <h1 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "clamp(2rem, 4vw, 3rem)", color: "#f1f5f9", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
                Contact
              </h1>
              <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#64748b", fontSize: "0.95rem", lineHeight: 1.6, maxWidth: "38ch" }} className="mt-4">
                Want to collaborate or discuss opportunities? I'd love to hear from you.
              </p>
              <div className="mt-8 flex items-center gap-3">
                <div style={{ height: "1px", width: "48px", background: "linear-gradient(90deg, #63b3ed, transparent)" }} />
                <div className="timeline-dot-glow" />
                <div style={{ height: "1px", flex: 1, background: "linear-gradient(90deg, rgba(99,179,237,0.3), transparent 60%)" }} />
              </div>
            </div>

            {/* ── Social cards ── */}
            <div style={{ display: "flex", gap: 14, marginBottom: 28 }}>
              {/* LinkedIn */}
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="social-card">
                <div className="social-accent-bar" />
                <div className="social-icon-wrap">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <div style={{ minWidth: 0 }}>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, color: "#f1f5f9", fontSize: "0.9rem", marginBottom: 3 }}>LinkedIn</p>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#475569", fontSize: "0.75rem", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                    /in/aminabayoudh
                  </p>
                </div>
                <div className="social-arrow">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7M7 7h10v10"/>
                  </svg>
                </div>
              </a>

              {/* GitHub */}
              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="social-card">
                <div className="social-accent-bar" />
                <div className="social-icon-wrap">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
                <div style={{ minWidth: 0 }}>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, color: "#f1f5f9", fontSize: "0.9rem", marginBottom: 3 }}>GitHub</p>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#475569", fontSize: "0.75rem", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                    /aminabayoudh
                  </p>
                </div>
                <div className="social-arrow">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7M7 7h10v10"/>
                  </svg>
                </div>
              </a>
            </div>

            {/* ── Email form card ── */}
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{ border: "1px solid rgba(255,255,255,0.07)", background: "linear-gradient(135deg, rgba(15,20,40,0.97) 0%, rgba(10,14,30,0.99) 100%)" }}
            >
              <div className="absolute top-0 left-6 right-6 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(99,179,237,0.35), transparent)" }} />
              <div style={{ position: "absolute", top: 0, left: 24, width: "72px", height: "2px", background: "linear-gradient(90deg, #63b3ed, #9f7aea)", borderRadius: "999px" }} />

              <div className="p-7 md:p-9">

                {formState === "sent" ? (
                  /* ── Success state ── */
                  <div style={{ padding: "40px 0", display: "flex", flexDirection: "column", alignItems: "center", gap: 20, textAlign: "center" }}>
                    <div
                      className="check-pop"
                      style={{ width: 72, height: 72, borderRadius: "50%", background: "rgba(99,179,237,0.08)", border: "1px solid rgba(99,179,237,0.25)", display: "flex", alignItems: "center", justifyContent: "center" }}
                    >
                      {/* Outer ring pulse */}
                      <div style={{ position: "relative" }}>
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="url(#checkGrad)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <defs>
                            <linearGradient id="checkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#63b3ed"/>
                              <stop offset="100%" stopColor="#9f7aea"/>
                            </linearGradient>
                          </defs>
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                      </div>
                    </div>

                    <div className="fade-up-1">
                      <p className="sent-title" style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>
                        Message sent!
                      </p>
                      <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#475569", fontSize: "0.875rem", lineHeight: 1.6, maxWidth: "30ch", margin: "0 auto" }}>
                        Your email client opened with the message ready. I'll reply soon.
                      </p>
                    </div>

                    <div className="fade-up-2">
                      <button onClick={reset} className="reset-btn">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                          <polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-4.95"/>
                        </svg>
                        Send another
                      </button>
                    </div>
                  </div>
                ) : (
                  /* ── Form ── */
                  <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                      <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                        <label className="field-label">Name</label>
                        <input
                          className="c-input"
                          type="text"
                          placeholder="Your name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          onFocus={() => setFocused("name")}
                          onBlur={() => setFocused(null)}
                          required
                        />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                        <label className="field-label">Email</label>
                        <input
                          className="c-input"
                          type="email"
                          placeholder="your@email.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          onFocus={() => setFocused("email")}
                          onBlur={() => setFocused(null)}
                          required
                        />
                      </div>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                      <label className="field-label">Message</label>
                      <textarea
                        className="c-input"
                        rows={5}
                        placeholder="Tell me about the project or opportunity…"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onFocus={() => setFocused("message")}
                        onBlur={() => setFocused(null)}
                        required
                      />
                    </div>

                    <button type="submit" className="send-btn" disabled={formState === "sending"}>
                      {formState === "sending" ? (
                        <>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" style={{ animation: "spin 0.8s linear infinite" }}>
                            <path d="M12 2a10 10 0 0 1 10 10" opacity="0.3"/><path d="M12 2a10 10 0 0 1 10 10"/>
                          </svg>
                          Opening email client…
                        </>
                      ) : (
                        <>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                          </svg>
                          Send message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* ── Footer line ── */}
            <div className="mt-14 flex items-center gap-3" style={{ opacity: 0.35 }}>
              <div style={{ height: "1px", flex: 1, background: "linear-gradient(90deg, transparent, rgba(148,163,184,0.4))" }} />
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#64748b" }}>
                Tunisia
              </span>
              <div style={{ height: "1px", flex: 1, background: "linear-gradient(90deg, rgba(148,163,184,0.4), transparent)" }} />
            </div>

          </div>
        </section>
      </PageShell>
    </>
  );
}