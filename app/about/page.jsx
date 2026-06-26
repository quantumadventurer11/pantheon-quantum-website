import { PageShell } from "../../components/PageShell";

export const metadata = {
  title: "About",
  description: "Mission, vision, philosophy, and staged company approach for Pantheon Quantum."
};

const projectExamples = [
  {
    partner: "Airbus",
    title: "Quantum Solvers: Enhancing Predictive Aerodynamic Modelling",
    description:
      "Benjamin and Vidhi built a Team Pantheon hybrid quantum-classical QLBM solver for the Airbus 2D Convecting Taylor-Green Vortex benchmark through the Global Quantum + AI Challenge 2026. The versioned prototype includes analytical validation, a pseudo-spectral classical baseline, a Qiskit quantum streaming circuit, a VQC collision prototype, benchmark plots and results, and 98 tests.",
    href: "https://github.com/quantumadventurer11/airbus-quantum-tgv-solver"
  },
  {
    partner: "Volkswagen Group",
    title: "Quantum-Enhanced Vision-Language-Action Models in Autonomous Driving and Robotics",
    description:
      "Benjamin and Vidhi are exploring quantum-enhanced Vision-Language-Action Model architectures for autonomous driving and robotics through the Global Quantum + AI Challenge 2026, including quantum feature maps, quantum kernel methods, and quantum-assisted model compression."
  }
];

const founders = [
  {
    name: "Vidhi Jain",
    role: "Co-Founder and CEO",
    description:
      "Leads Pantheon Quantum's executive direction, partnerships, and company-building work as the corporation develops practical quantum applications."
  },
  {
    name: "Benjamin Charles Brumm",
    role: "Co-Founder and President",
    description:
      "Leads Pantheon Quantum's research translation, technical strategy, and applied project development across quantum, AI, and space systems."
  }
];

export default function AboutPage() {
  return (
    <PageShell
      eyebrow="About"
      title="A practical quantum company built for the long arc."
      text="Pantheon Quantum is beginning with services, software, and applied research support before moving toward applications, platform workflows, and infrastructure partnerships."
      image={{
        src: "/images/quantum-hero-field.png",
        alt: "Abstract quantum field with graphite orbital lines",
        label: "Practical First"
      }}
    >
      <div className="grid gap-6 md:grid-cols-2">
        {[
          ["Mission", "To make quantum technology usable for organizations before the market reaches full hardware maturity."],
          ["Vision", "To become a quantum applications and infrastructure company supporting secure computation, advanced simulation, and future space-based communications systems."],
          ["Philosophy", "Commercial credibility comes from useful work. The company starts with practical services, honest technical assessment, and disciplined research translation."],
          ["Starting Point", "Pantheon Quantum does not need to claim ownership of quantum hardware to create value today. It can help teams use existing tools, cloud providers, and hybrid methods responsibly."]
        ].map(([title, text]) => (
          <article className="metal-panel rounded-lg p-7" key={title}>
            <h2 className="text-2xl font-semibold text-white">{title}</h2>
            <p className="mt-4 text-sm leading-7 text-zinc-300">{text}</p>
          </article>
        ))}
      </div>
      <section className="mt-10">
        <h2 className="text-3xl font-semibold text-white">Project Examples</h2>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-zinc-300">
          Benjamin and Vidhi are applying Pantheon Quantum's practical research approach to challenge work with aerospace and automotive use cases.
        </p>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {projectExamples.map((project) => (
            <article className="metal-panel rounded-lg p-7" key={project.partner}>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-400">{project.partner}</p>
              <h3 className="mt-4 text-2xl font-semibold text-white">{project.title}</h3>
              <p className="mt-4 text-sm leading-7 text-zinc-300">{project.description}</p>
              {project.href ? (
                <a
                  className="focus-ring mt-6 inline-flex rounded-sm border border-white/25 px-4 py-2 text-sm font-semibold text-white transition duration-300 hover:border-white/60 hover:bg-white/10"
                  href={project.href}
                  rel="noreferrer"
                  target="_blank"
                >
                  View GitHub Repository
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </section>
      <div className="mt-10">
        <h2 className="text-3xl font-semibold text-white">Founding Team</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {founders.map((founder) => (
            <div className="metal-panel rounded-lg p-6" key={founder.name}>
              <div className="h-24 rounded-sm border border-white/10 bg-gradient-to-br from-zinc-700/40 to-black" />
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.28em] text-zinc-400">{founder.role}</p>
              <h3 className="mt-3 text-2xl font-semibold text-white">{founder.name}</h3>
              <p className="mt-4 text-sm leading-7 text-zinc-300">{founder.description}</p>
            </div>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
