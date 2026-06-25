import { PageShell } from "../../components/PageShell";
import { applications } from "../../lib/siteData";

export const metadata = {
  title: "Applications",
  description: "Sector-specific quantum application opportunities across aerospace, finance, pharmaceuticals, logistics, cybersecurity, government, energy, and materials."
};

export default function ApplicationsPage() {
  return (
    <PageShell
      eyebrow="Applications"
      title="Sector-specific applications built from credible near-term use cases."
      text="Pantheon Quantum evaluates application potential where simulation, optimization, security, and complex modelling create a strong reason to explore quantum or quantum-inspired approaches."
      image={{
        src: "/images/graphite-wave-lattice.png",
        alt: "Graphite wave lattice representing sector-specific quantum applications",
        label: "Applied Domains"
      }}
    >
      <div className="grid gap-5 md:grid-cols-2">
        {applications.map((item) => (
          <article className="metal-panel rounded-lg p-7" key={item.title}>
            <h2 className="text-2xl font-semibold text-white">{item.title}</h2>
            <p className="mt-4 text-sm leading-7 text-zinc-300">{item.description}</p>
          </article>
        ))}
      </div>
    </PageShell>
  );
}
