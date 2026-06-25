import { PageShell } from "../../components/PageShell";
import { partnerCategories } from "../../lib/siteData";

export const metadata = {
  title: "Partners",
  description: "Partnership opportunities with Pantheon Quantum for research institutions, government agencies, space organizations, cloud providers, hardware companies, cybersecurity firms, enterprises, and investors."
};

export default function PartnersPage() {
  return (
    <PageShell
      eyebrow="Partners"
      title="Partnerships for research translation, software pilots, and long-term infrastructure."
      text="Pantheon Quantum is building a partner ecosystem across research, cloud platforms, hardware, cybersecurity, enterprise adoption, space systems, and investment."
      image={{
        src: "/images/quantum-cloud-workflows.png",
        alt: "Abstract connected workflow layers representing partner ecosystem",
        label: "Partner Network"
      }}
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {partnerCategories.map((category) => (
          <article className="metal-panel rounded-lg p-6" key={category}>
            <h2 className="text-xl font-semibold text-white">{category}</h2>
            <p className="mt-4 text-sm leading-7 text-zinc-300">
              Explore collaboration through pilots, advisory work, applied research, commercialization support, or strategic investment.
            </p>
          </article>
        ))}
      </div>
    </PageShell>
  );
}
