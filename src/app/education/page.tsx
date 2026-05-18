import PageShell from "@/components/PageShell";
import { EDUCATION } from "@/lib/constants";

export default function EducationPage() {
  return (
    <PageShell>
      <section className="max-w-6xl mx-auto py-20 px-4 sm:px-6">
        <h1 className="text-2xl md:text-3xl font-semibold text-white">Education</h1>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          {EDUCATION.map((item) => (
            <div key={item.institution} className="glass-effect-lg p-6">
              <p className="text-sm uppercase tracking-[0.2em] text-slate-400">{item.period}</p>
              <h2 className="mt-3 text-lg font-semibold text-white">{item.institution}</h2>
              <p className="mt-2 text-slate-300">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
