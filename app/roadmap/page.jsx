import { PageShell } from "../../components/PageShell";
import { Roadmap } from "../../components/Roadmap";

export const metadata = {
  title: "Roadmap",
  description: "Pantheon Quantum's six-phase roadmap from foundation and revenue services to applications, platform workflows, infrastructure expansion, and space communications research."
};

export default function RoadmapPage() {
  return (
    <PageShell
      eyebrow="Roadmap"
      title="A staged path from revenue services to long-term infrastructure."
      text="The roadmap is intentionally sequenced. Near-term services fund learning and credibility while the company develops reusable applications, cloud workflow capabilities, and future infrastructure partnerships."
      image={{
        src: "/images/quantum-cloud-workflows.png",
        alt: "Abstract layered quantum workflow architecture",
        label: "Staged Growth"
      }}
    >
      <Roadmap />
    </PageShell>
  );
}
