import { PageShell } from "../../components/PageShell";

export const metadata = {
  title: "Terms of Use",
  description: "Terms of Use for Pantheon Quantum."
};

export default function TermsOfUsePage() {
  return (
    <PageShell
      eyebrow="Terms"
      title="Terms of Use"
      text="These terms are a launch-ready placeholder and should be reviewed by qualified counsel before production use."
      cta={false}
      image={{
        src: "/images/quantum-hero-field.png",
        alt: "Abstract quantum field used as a terms page visual",
        label: "Use Terms"
      }}
    >
      <div className="metal-panel rounded-lg p-8 text-sm leading-7 text-zinc-300">
        <p>This website provides general information about Pantheon Quantum, its services, research interests, and business roadmap. Website content does not constitute technical, legal, investment, or cybersecurity advice.</p>
        <p className="mt-5">All forward-looking statements, including platform, infrastructure, and space communications references, describe intended research or business directions and are not guarantees of future performance or availability.</p>
        <p className="mt-5">Users agree not to misuse the website, attempt unauthorized access, or rely on public materials as a substitute for a formal engagement or written agreement.</p>
        <p className="mt-5">All site content, branding, and materials are owned by Pantheon Quantum or its licensors unless otherwise stated.</p>
      </div>
    </PageShell>
  );
}
