import PageShell from "@/components/PageShell";
import { SOCIAL_LINKS } from "@/lib/constants";

export default function ContactPage() {
  return (
    <PageShell>
      <section className="max-w-6xl mx-auto py-20 px-4 sm:px-6">
        <div className="glass-effect-lg p-10">
          <h1 className="text-2xl md:text-3xl font-semibold text-white">Contact</h1>
          <p className="mt-4 text-slate-300">
            Want to collaborate or discuss opportunities? Reach out anytime.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href={`mailto:${SOCIAL_LINKS.email}`}
              className="px-6 py-3 rounded-full bg-white text-slate-950 font-semibold hover:bg-slate-100 transition-colors"
            >
              {SOCIAL_LINKS.email}
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              className="px-6 py-3 rounded-full border border-white/20 text-white hover:border-white/60 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={SOCIAL_LINKS.github}
              className="px-6 py-3 rounded-full border border-white/20 text-white hover:border-white/60 transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
