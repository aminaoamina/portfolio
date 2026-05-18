import PageShell from "@/components/PageShell";
import { SKILLS } from "@/lib/constants";

export default function SkillsPage() {
  return (
    <PageShell>
      <section className="max-w-6xl mx-auto py-20 px-4 sm:px-6">
        <h1 className="text-2xl md:text-3xl font-semibold text-white">Skills</h1>
        <div className="mt-8 grid lg:grid-cols-2 gap-6">
          {SKILLS.map((group) => (
            <div key={group.category} className="glass-effect-lg p-6">
              <h2 className="text-lg font-semibold text-white">{group.category}</h2>
              <div className="mt-4 flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-slate-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
