import PageShell from "@/components/PageShell";
import { CERTIFICATES } from "@/lib/constants";
import Link from "next/link";

export default function CertificatesPage() {
  return (
    <PageShell>
      <section className="max-w-6xl mx-auto py-20 px-4 sm:px-6">
        <div className="glass-effect-lg p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h1 className="text-2xl font-semibold text-white">Certificates</h1>
            <p className="mt-2 text-slate-300">{CERTIFICATES.label}</p>
          </div>
          <Link
            href={CERTIFICATES.link}
            className="px-6 py-3 rounded-full border border-white/20 text-white hover:border-white/60 transition-colors"
          >
            View certificates
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
