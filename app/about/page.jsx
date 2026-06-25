import { PageShell } from "../../components/PageShell";

export const metadata = {
  title: "About",
  description: "Mission, vision, philosophy, and staged company approach for Pantheon Quantum."
};

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
      <div className="mt-10">
        <h2 className="text-3xl font-semibold text-white">Founding Team</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {["Founder / CEO", "Technical Advisor", "Research Lead"].map((role) => (
            <div className="metal-panel rounded-lg p-6" key={role}>
              <div className="h-24 rounded-sm border border-white/10 bg-gradient-to-br from-zinc-700/40 to-black" />
              <h3 className="mt-5 text-lg font-semibold text-white">{role}</h3>
              <p className="mt-2 text-sm text-zinc-400">Profile placeholder</p>
            </div>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
