import PageShell from "@/components/PageShell";
import { PROJECTS } from "@/lib/constants";

export default function ProjectsPage() {
  return (
    <PageShell>
      <section className="max-w-6xl mx-auto py-20 px-4 sm:px-6">
        <h1 className="text-2xl md:text-3xl font-semibold text-white">Selected Projects</h1>
        <div className="mt-8 space-y-6">
          {PROJECTS.map((project) => (
            <article key={project.title} className="glass-effect-lg p-8">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h2 className="text-xl font-semibold text-white">{project.title}</h2>
                <span className="text-sm text-slate-400">{project.period}</span>
              </div>
              {project.role && (
                <p className="mt-2 text-sm uppercase tracking-[0.2em] text-slate-400">
                  {project.role}
                </p>
              )}
              <p className="mt-4 text-slate-300 leading-relaxed">{project.description}</p>
              <div className="mt-5 grid lg:grid-cols-[1.1fr_0.9fr] gap-6">
                <ul className="space-y-2 text-sm text-slate-300">
                  {project.highlights?.map((highlight) => (
                    <li key={highlight} className="flex gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-gradient-to-r from-sky-400 to-cyan-300" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
                <div className="space-y-3">
                  {project.metrics && (
                    <p className="text-sm text-slate-300">
                      <span className="text-slate-400">Impact:</span> {project.metrics}
                    </p>
                  )}
                  <p className="text-sm text-slate-300">
                    <span className="text-slate-400">Technologies:</span> {project.technologies}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
