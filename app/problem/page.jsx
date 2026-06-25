import { PageShell } from "../../components/PageShell";

export const metadata = {
  title: "Problem",
  description: "The quantum adoption challenges facing organizations, from expertise gaps to cybersecurity transition risk."
};

const problems = [
  "Technical uncertainty",
  "Lack of internal quantum expertise",
  "High cost of quantum hardware",
  "Difficulty identifying practical use cases",
  "Cybersecurity transition risk",
  "Gap between quantum research and commercial deployment"
];

export default function ProblemPage() {
  return (
    <PageShell
      eyebrow="Problem"
      title="The opportunity is real, but the adoption path is unclear."
      text="Most organizations do not need hype. They need a disciplined way to understand where quantum technologies matter, where they do not, and what can be tested today."
      image={{
        src: "/images/graphite-wave-lattice.png",
        alt: "Abstract graphite wave lattice",
        label: "Adoption Complexity"
      }}
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {problems.map((problem) => (
          <article className="metal-panel rounded-lg p-6" key={problem}>
            <h2 className="text-xl font-semibold text-white">{problem}</h2>
            <p className="mt-4 text-sm leading-7 text-zinc-300">
              Pantheon Quantum helps frame this risk in business terms, then translates it into realistic technical roadmaps and testable projects.
            </p>
          </article>
        ))}
      </div>
    </PageShell>
  );
}
