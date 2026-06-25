import { ButtonLink } from "../../components/ButtonLink";
import { PageShell } from "../../components/PageShell";
import { revenueModel } from "../../lib/siteData";

export const metadata = {
  title: "Investors",
  description: "Investor overview for Pantheon Quantum, including market opportunity, revenue model, why now, and infrastructure upside."
};

const investorSections = [
  ["Market Opportunity", "Quantum computing, post-quantum security, simulation, optimization, and advanced communications are becoming strategic priorities across industry and government."],
  ["Why Now", "Organizations need credible readiness work before full hardware maturity. Early education, assessment, and prototypes create commercial value today."],
  ["Why Start With Services", "Services create revenue, client insight, partnerships, and repeatable workflows that can evolve into software products and managed access layers."],
  ["Infrastructure Upside", "The long-term opportunity is not limited to consulting. Applications, SaaS tools, licensing, cloud workflow layers, and future infrastructure access can compound over time."],
  ["Partnership Opportunities", "Pantheon Quantum is positioned to partner with institutions, cloud providers, hardware companies, cybersecurity firms, space organizations, and enterprise clients."]
];

export default function InvestorsPage() {
  return (
    <PageShell
      eyebrow="Investors"
      title="A revenue-first quantum company with infrastructure-scale ambition."
      text="Pantheon Quantum is designed to enter the market through practical services, then expand into applications, platform workflows, licensing, and future infrastructure opportunities."
      cta={false}
      image={{
        src: "/images/quantum-hero-field.png",
        alt: "Abstract quantum field suggesting infrastructure-scale opportunity",
        label: "Infrastructure Upside"
      }}
    >
      <div className="grid gap-5 md:grid-cols-2">
        {investorSections.map(([title, text]) => (
          <article className="metal-panel rounded-lg p-7" key={title}>
            <h2 className="text-2xl font-semibold text-white">{title}</h2>
            <p className="mt-4 text-sm leading-7 text-zinc-300">{text}</p>
          </article>
        ))}
      </div>
      <section className="mt-10 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <h2 className="text-3xl font-semibold text-white">Revenue Model</h2>
          <p className="mt-4 text-sm leading-7 text-zinc-300">
            The model begins with professional services and research support, then expands into repeatable software and managed access products.
          </p>
          <div className="mt-7">
            <ButtonLink href="/contact">Investor Inquiry</ButtonLink>
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {revenueModel.map((item) => (
            <div className="metal-panel rounded-lg p-5" key={item}>
              <p className="text-sm font-semibold text-white">{item}</p>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
