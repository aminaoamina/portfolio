import PageShell from "@/components/PageShell";
import { ABOUT_SUMMARY, LANGUAGES } from "@/lib/constants";

export default function AboutPage() {
  return (
    <PageShell>
      <section className="max-w-6xl mx-auto py-20 px-4 sm:px-6">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-6 md:gap-10">
          <div className="glass-effect-lg p-8">
            <h1 className="text-2xl md:text-3xl font-semibold text-white">About</h1>
            <p className="mt-4 text-slate-300 leading-relaxed">{ABOUT_SUMMARY}</p>
            <p className="mt-4 text-slate-300 leading-relaxed">
              I focus on network infrastructure, data security, and AI-driven systems that improve detection,
              automation, and decision-making. I love combining rigorous engineering with thoughtful UX to
              deliver products that feel as good as they perform.
            </p>
          </div>
          <div className="glass-effect-lg p-8">
            <h2 className="text-xl font-semibold text-white">Languages</h2>
            <div className="mt-4 flex flex-wrap gap-3">
              {LANGUAGES.map((language) => (
                <span
                  key={language.name}
                  className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-slate-200"
                >
                  {language.name} - {language.level}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
