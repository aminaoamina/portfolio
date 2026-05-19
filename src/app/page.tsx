import PageShell from "@/components/PageShell";
import BlurText from "@/components/BlurText";
import StarBorder from "@/components/StarBorder";
import { SITE_CONFIG } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <PageShell className="pt-0 pb-0 overflow-x-hidden">
      <section className="relative w-full flex items-center overflow-x-hidden min-h-[100svh] lg:h-[100svh]">

        {/* ── AMBIENT GLOWS ── */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 right-0 h-[600px] w-[600px] rounded-full bg-purple-600/10 blur-[120px]" />
          <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-sky-600/8 blur-[100px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[600px] rounded-full bg-violet-500/5 blur-[80px]" />
        </div>

        {/* ── DECORATIVE VERTICAL LINE — positioned at actual column split (~57%) ── */}
        <div className="pointer-events-none absolute left-[57%] top-0 bottom-0 hidden lg:block">
          <div className="h-full w-px bg-gradient-to-b from-transparent via-white/5 to-transparent" />
        </div>

        {/* ── DECORATIVE RULE TOP LEFT ── */}
        <div className="pointer-events-none absolute top-10 left-8 hidden lg:flex items-center gap-3">
          <div className="h-px w-12 bg-sky-400/30" />
          <span className="text-[10px] tracking-[0.3em] uppercase text-sky-400/40 font-mono">Welcome to My Portfolio</span>
        </div>

        {/* ── DECORATIVE RULE BOTTOM RIGHT ── */}
        <div className="pointer-events-none absolute bottom-10 right-8 hidden lg:flex items-center gap-3">
          <span className="text-[10px] tracking-[0.3em] uppercase text-purple-400/40 font-mono">Based in Tunisia</span>
          <div className="h-px w-12 bg-purple-400/30" />
        </div>

        {/* ── FLOATING SKILL TAGS — left edge ── */}
        <div className="pointer-events-none absolute left-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-3">
          {["Security", "AI", "Design"].map((tag, i) => (
            <div
              key={tag}
              className="flex items-center gap-2 opacity-0 animate-fade-in-left"
              style={{ animationDelay: `${0.6 + i * 0.15}s`, animationFillMode: "forwards" }}
            >
              <div className="h-px w-6 bg-white/20" />
              <span className="text-[11px] font-mono tracking-widest text-white/30 uppercase">{tag}</span>
            </div>
          ))}
        </div>

        {/* ── MAIN GRID ── */}
        <div className="relative max-w-7xl mx-auto w-full px-6 sm:px-10 lg:px-16 py-14 sm:py-16 lg:py-0">
          <div className="grid lg:grid-cols-[minmax(0,1fr)_420px] xl:grid-cols-[minmax(0,1fr)_460px] gap-10 lg:gap-16 items-center">

            {/* ─── LEFT COLUMN ─── */}
            <div className="space-y-6 text-center lg:text-left">

              {/* Status badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-sky-400/25 bg-sky-400/8 text-[10px] uppercase tracking-[0.25em] text-sky-300 animate-fade-up">
                <span className="h-1.5 w-1.5 rounded-full bg-sky-300 animate-pulse" />
                Open to opportunities
              </div>

              {/* Name block */}
              <div className="animate-fade-up overflow-visible" style={{ animationDelay: "0.1s" }}>
                <p className="text-[10px] font-mono tracking-[0.32em] uppercase text-white/30 mb-2 lg:text-left text-center">
                  — Hello, I'm
                </p>
                <BlurText
                  text={SITE_CONFIG.name.split(" ")[0]}
                  delay={120}
                  animateBy="words"
                  direction="top"
                  className="hero-title font-title block text-[clamp(3.1rem,7vw,6rem)] font-semibold text-white leading-[1.1] tracking-tight"
                />
                <BlurText
                  text={SITE_CONFIG.name.split(" ").slice(1).join(" ")}
                  delay={160}
                  animateBy="words"
                  direction="top"
                  className="hero-title hero-title-gradient font-title block text-[clamp(3.1rem,7vw,6rem)] font-semibold leading-[1.1] tracking-tight italic"
                />
              </div>

              {/* Discipline pills */}
              <div
                className="flex flex-wrap gap-2.5 justify-center lg:justify-start animate-fade-up"
                style={{ animationDelay: "0.25s" }}
              >
                {[
                  { label: "Network Security", icon: "🛡" },
                  { label: "AI Engineering", icon: "⚡" },
                  { label: "Graphic Design", icon: "✦" },
                ].map(({ label, icon }) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs text-white/60 backdrop-blur-sm"
                  >
                    <span className="text-[10px]">{icon}</span>
                    {label}
                  </span>
                ))}
              </div>

              {/* Description — max-w-md keeps it well clear of the center line */}
              <p
                className="text-sm sm:text-base text-white/55 max-w-xl leading-relaxed mx-auto lg:mx-0 animate-fade-up"
                style={{ animationDelay: "0.35s" }}
              >
                Engineering student at{" "}
                <span className="text-white/70 font-medium">ESPRIT</span> — on a mission
                to sit at the intersection of{" "}
                <em className="text-white/70 not-italic font-medium">cybersecurity</em>{" "}
                and{" "}
                <em className="text-white/70 not-italic font-medium">artificial intelligence</em>,
                building secure networks that think and hardening infrastructure with
                the precision of AI so threats don't stand a chance.
              </p>

              {/* CTA row */}
              <div
                className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start animate-fade-up"
                style={{ animationDelay: "0.45s" }}
              >
                <StarBorder
                  as="div"
                  color="rgba(124, 92, 255, 0.9)"
                  speed="5s"
                  thickness={2}
                  className="rounded-full"
                >
                  <Link
                    href="/projects"
                    className="block px-7 py-3 rounded-full font-semibold text-sm sm:text-base text-white"
                  >
                    View projects →
                  </Link>
                </StarBorder>
                <a
                  href="/assets/AMINA-BAYOUDH-CV.pdf"
                  download
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm sm:text-base font-medium text-white/80 border border-white/15 bg-white/5 hover:bg-white/10 hover:border-white/30 hover:text-white transition-all duration-200 backdrop-blur-sm"
                >
                  Download CV
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="7 10 12 15 17 10"/>
                    <line x1="12" y1="15" x2="12" y2="3"/>
                  </svg>
                </a>
              </div>

              {/* Stat strip */}
              <div
                className="flex gap-10 justify-center lg:justify-start pt-4 border-t border-white/5 animate-fade-up"
                style={{ animationDelay: "0.55s" }}
              >
                {[
                  { value: "3+", label: "Years building" },
                  { value: "10+", label: "Projects shipped" },
                  { value: "2027", label: "Graduating" },
                ].map(({ value, label }) => (
                  <div key={label} className="text-center lg:text-left">
                    <p className="text-xl font-semibold text-white">{value}</p>
                    <p className="text-[11px] text-white/35 tracking-wide mt-0.5">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* ─── RIGHT COLUMN — Photo ─── */}
            <div className="relative animate-fade-up mx-auto w-full max-w-[360px] sm:max-w-[420px] lg:max-w-none" style={{ animationDelay: "0.2s" }}>

              {/* Outer glow halo */}
              <div className="absolute -inset-7 rounded-[36px] bg-gradient-to-tr from-purple-500/20 via-blue-500/10 to-cyan-400/15 blur-2xl" />

              {/* Card frame */}
              <div className="glass-effect-lg relative rounded-[26px] p-3 animate-float-soft overflow-hidden">

                {/* Corner accent */}
                <div className="absolute top-5 right-5 z-10 flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-purple-400/60" />
                  <span className="h-1.5 w-1.5 rounded-full bg-sky-400/60" />
                  <span className="h-1.5 w-1.5 rounded-full bg-violet-400/60" />
                </div>

                {/* Photo */}
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[20px]">
                  <Image
                    src="/assets/images/amina-photo-no-bg.png"
                    alt="Portrait of Amina Bayoudh"
                    fill
                    sizes="(max-width: 768px) 82vw, 460px"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 rounded-[20px] bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                </div>

                {/* Floating name badge */}
                <div className="absolute bottom-5 left-4 right-4">
                  <div className="flex items-center justify-between px-3.5 py-2.5 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10">
                    <div>
                      <p className="text-xs font-semibold text-white leading-tight">{SITE_CONFIG.name}</p>
                      <p className="text-[10px] text-white/45 mt-0.5 tracking-wide">ESPRIT · Network Security</p>
                    </div>
                    <div className="h-7 w-7 rounded-full bg-gradient-to-br from-purple-400 to-sky-400 flex items-center justify-center text-[10px] font-bold text-white">
                      AB
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating accent card — top left */}
              <div className="absolute -top-4 -left-4 z-20 px-3 py-2 rounded-xl bg-black/50 backdrop-blur-md border border-white/10 hidden sm:block animate-float-soft" style={{ animationDelay: "0.4s" }}>
                <p className="text-[10px] text-white/40 tracking-widest uppercase">ESPRIT</p>
                <p className="text-xs text-white/80 font-medium mt-0.5">Eng. Student</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </PageShell>
  );
}