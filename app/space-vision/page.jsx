import { PageShell } from "../../components/PageShell";

export const metadata = {
  title: "Space Vision",
  description: "Pantheon Quantum's long-term research interest in quantum-secure communications, quantum networking, and space-based information infrastructure."
};

export default function SpaceVisionPage() {
  return (
    <PageShell
      eyebrow="Space Vision"
      title="Toward a Quantum-Secure Internet for Earth, the Moon, and Beyond."
      text="Pantheon Quantum’s long-term research interest is secure quantum communications, quantum networking, and space-based information infrastructure for future lunar and Martian settlements."
      image={{
        src: "/images/space-communications-grid.png",
        alt: "Abstract space communications grid linking Earth, Moon, and a distant Mars point",
        label: "Research Frontier"
      }}
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
        <article className="metal-panel rounded-lg p-8">
          <h2 className="text-3xl font-semibold text-white">Ambitious, but scientifically careful.</h2>
          <p className="mt-5 text-sm leading-7 text-zinc-300">
            Quantum communications research may support future security models for high-value terrestrial, orbital, cislunar, and planetary information systems. This work concerns security, key distribution, networking architectures, and resilient infrastructure design.
          </p>
          <p className="mt-5 text-sm leading-7 text-zinc-300">
            Pantheon Quantum does not claim that quantum teleportation enables instant communication across space. Signal transmission remains constrained by established physics, and practical space-based quantum networks require long-term research, engineering, and institutional collaboration.
          </p>
        </article>
        <div className="grid gap-5">
          {["Quantum-secure communications", "Quantum networking research", "Cislunar information infrastructure", "Future lunar and Martian settlement support"].map((item) => (
            <div className="metal-panel rounded-lg p-6" key={item}>
              <p className="text-lg font-semibold text-white">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
