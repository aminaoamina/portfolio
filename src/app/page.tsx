import PageShell from "@/components/PageShell";
import BlurText from "@/components/BlurText";
import StarBorder from "@/components/StarBorder";
import { SITE_CONFIG } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";

const STATS = [
  { value: "<1s", label: "MTTD" },
  { value: "5+", label: "Projects" },
  { value: "4th", label: "IEEE Award" },
  { value: "4yr", label: "IEEE" },
];

const IDENTITY_CARDS = [
  {
    icon: "🛡️",
    label: "Cybersecurity",
    title: "SOC & AI Security",
    sub: "Wazuh · Shuffle · MISP",
    color: "from-violet-500/20 to-transparent",
    border: "border-violet-500/20",
  },
  {
    icon: "🤖",
    label: "AI Engineering",
    title: "LLMs & Deep Learning",
    sub: "Transformers · LangChain · RAG",
    color: "from-pink-500/20 to-transparent",
    border: "border-pink-500/20",
  },
  {
    icon: "✦",
    label: "Design",
    title: "Branding & UI/UX",
    sub: "Next.js · Human-centered",
    color: "from-sky-500/20 to-transparent",
    border: "border-sky-500/20",
  },
];

const FLOATING_TAGS = [
  { text: "AI Security",     pos: "absolute -left-8 top-12" },
  { text: "SOC Automation",  pos: "absolute -right-6 top-28" },
  { text: "UX",              pos: "absolute -left-4 bottom-10" },
];

export default function Home() {
  return (
    <PageShell className="pt-0">
      <section className="relative min-h-[75vh] md:min-h-[90vh] w-full flex items-center">

        {/* ambient glow */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 right-0 h-[600px] w-[600px] rounded-full bg-purple-600/10 blur-[120px]" />
          <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-sky-600/8 blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-[0.58fr_0.42fr] gap-12 lg:gap-20 items-center px-6 sm:px-8 lg:px-12 py-28 md:py-32">

          {/* ── LEFT ── */}
          <div className="animate-fade-up text-left space-y-6">

            {/* status badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-sky-300/30 bg-sky-300/10 text-[11px] sm:text-xs uppercase tracking-[0.25em] text-sky-200">
              <span className="h-2 w-2 rounded-full bg-sky-300 animate-pulse" />
              Open to opportunities
            </div>

            {/* name */}
            <div>
              <BlurText
                text={SITE_CONFIG.name.split(" ")[0]}
                delay={120}
                animateBy="words"
                direction="top"
                className="hero-title text-5xl sm:text-6xl md:text-7xl font-semibold text-white leading-tight"
              />
              <BlurText
                text={SITE_CONFIG.name.split(" ").slice(1).join(" ")}
                delay={120}
                animateBy="words"
                direction="top"
                className="hero-title mt-1 text-5xl sm:text-6xl md:text-7xl font-semibold leading-tight text-white italic"
              />
            </div>

            {/* subtitle */}
            <p className="text-base sm:text-lg md:text-2xl text-ink-muted font-mono tracking-wide">
              Network Security · AI Engineering · UI/UX
            </p>

            {/* description */}
            <p className="text-sm sm:text-base md:text-lg text-ink-soft max-w-xl leading-relaxed">
              Engineering student at ESPRIT building secure, intelligent systems —
              from next-gen SOC platforms to AI-powered healthcare. I care about
              both how things <em>work</em> and how they <em>feel</em>.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <StarBorder
                as="div"
                color="rgba(124, 92, 255, 0.9)"
                speed="5s"
                thickness={2}
                className="rounded-full"
              >
                <Link
                  href="/projects"
                  className="block px-8 py-3.5 rounded-full font-semibold text-white"
                >
                  View projects
                </Link>
              </StarBorder>
              <Link
                href="/assets/AMINA-BAYOUDH-CV.pdf"
                className="px-8 py-3.5 rounded-full border border-white/25 text-white hover:border-white/60 transition-colors"
              >
                Download CV
              </Link>
            </div>

            {/* stats row */}
            <div className="pt-2 grid grid-cols-4 gap-4 border-t border-white/10 max-w-md">
              {STATS.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-white">{s.value}</div>
                  <div className="text-[10px] uppercase tracking-widest text-ink-muted mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>

          </div>

          {/* ── RIGHT ── */}
          <div className="animate-fade-up space-y-4">

            {/* photo card */}
            <div className="relative mx-auto lg:mx-0 w-full max-w-md lg:max-w-lg">
              <div className="absolute -inset-8 rounded-[40px] bg-gradient-to-tr from-purple-500/30 via-blue-500/20 to-cyan-400/20 blur-2xl" />
              <div className="glass-effect-lg relative overflow-hidden rounded-[28px] p-4 animate-float-soft">
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[22px]">
                  <Image
                    src="/assets/images/amina-photo-no-bg.png"
                    alt="Portrait of Amina Bayoudh"
                    fill
                    sizes="(max-width: 768px) 90vw, 520px"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* floating tags */}
              {FLOATING_TAGS.map((tag, i) => (
                <span
                  key={tag.text}
                  style={{ animationDelay: `${i * 0.4}s` }}
                  className={`${tag.pos} animate-float-soft rounded-full border border-white/15 bg-white/5 backdrop-blur-sm px-3 py-1 text-xs text-slate-200`}
                >
                  {tag.text}
                </span>
              ))}
            </div>

            {/* identity cards */}
            <div className="space-y-3 px-1">
              {IDENTITY_CARDS.map((card) => (
                <div
                  key={card.label}
                  className={`flex items-center gap-4 rounded-2xl border ${card.border} bg-white/5 backdrop-blur-sm px-4 py-3 hover:bg-white/8 transition-all hover:translate-x-1 duration-200`}
                >
                  <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${card.color} text-xl`}>
                    {card.icon}
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] uppercase tracking-widest text-ink-muted">{card.label}</div>
                    <div className="text-sm font-semibold text-white truncate">{card.title}</div>
                    <div className="text-[11px] text-ink-soft truncate">{card.sub}</div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </PageShell>
  );
}