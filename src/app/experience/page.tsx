import PageShell from "@/components/PageShell";
import { EXPERIENCE } from "@/lib/constants";

export default function ExperiencePage() {
  return (
    <PageShell>
      <section className="max-w-6xl mx-auto py-20 px-4 sm:px-6">
        <h1 className="text-2xl md:text-3xl font-semibold text-white">Experience</h1>
        <div className="mt-8 grid lg:grid-cols-2 gap-6">
          {EXPERIENCE.map((item) => (
            <div key={item.title} className="glass-effect-lg p-6">
              <div className="flex items-center justify-between gap-3">
                <h2 className="text-lg font-semibold text-white">{item.title}</h2>
                <span className="text-sm text-slate-400">{item.period}</span>
              </div>
              <p className="mt-2 text-sm uppercase tracking-[0.2em] text-slate-400">
                {item.company}
              </p>
              <p className="mt-4 text-slate-300 leading-relaxed">{item.summary}</p>
              {item.highlights && (
                <ul className="mt-4 space-y-2 text-sm text-slate-300">
                  {item.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-gradient-to-r from-sky-400 to-cyan-300" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
