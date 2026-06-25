import { ButtonLink } from "../components/ButtonLink";
import { CTA } from "../components/CTA";
import { QuantumBackground } from "../components/QuantumBackground";
import { Roadmap } from "../components/Roadmap";
import { ScrollReveal } from "../components/ScrollReveal";
import { ScrollVisualPanel } from "../components/ScrollVisualPanel";
import { SectionHeader } from "../components/SectionHeader";
import { ServiceCard } from "../components/ServiceCard";
import { services } from "../lib/siteData";

export const metadata = {
  title: "Building Practical Quantum Applications Today",
  description:
    "Pantheon Quantum helps organizations prepare for, test, and deploy quantum-enabled solutions through consulting, software, applied research, and future cloud-based quantum infrastructure."
};

export default function HomePage() {
  return (
    <>
      <section className="relative flex min-h-screen items-center overflow-hidden px-6 pb-20 pt-28 lg:px-8">
        <QuantumBackground />
        <div className="relative mx-auto max-w-7xl">
          <ScrollReveal className="max-w-4xl" y={18}>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-zinc-300">Quantum applications and infrastructure</p>
            <h1 className="mt-6 text-4xl font-semibold tracking-normal text-white sm:text-5xl md:text-7xl">
              Building Practical Quantum Applications Today — Toward Quantum Infrastructure Tomorrow
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-zinc-200 md:text-xl">
              We help organizations prepare for, test, and deploy quantum-enabled solutions through consulting, software, applied research, and future cloud-based quantum infrastructure.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact">Partner With Us</ButtonLink>
              <ButtonLink href="/roadmap" variant="secondary">View Roadmap</ButtonLink>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <ScrollReveal>
            <SectionHeader
              eyebrow="The Problem"
              title="Quantum is advancing faster than most organizations can operationalize."
              text="Institutions see the strategic importance of quantum technologies, but still face uncertainty around use cases, internal expertise, security transition risk, and the cost of hardware access."
            />
          </ScrollReveal>
          <div className="grid gap-5">
            <ScrollVisualPanel
              alt="Abstract graphite wave lattice representing quantum uncertainty and adoption complexity"
              label="Readiness Gap"
              src="/images/graphite-wave-lattice.png"
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {["Technical uncertainty", "Limited internal expertise", "High hardware access cost", "Research-to-deployment gap"].map((item, index) => (
                <ScrollReveal delay={index * 0.04} key={item} y={18}>
                  <div className="metal-panel rounded-lg p-5">
                    <p className="text-sm font-semibold text-white">{item}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03] px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <SectionHeader
              centered
              eyebrow="What We Do"
              title="Revenue-first services for a market still reaching hardware maturity."
              text="Pantheon Quantum begins with practical consulting, workshops, prototypes, optimization, research support, cybersecurity planning, and managed workflows for existing cloud quantum providers."
            />
          </ScrollReveal>
          <ScrollReveal className="mt-12" y={18}>
            <ScrollVisualPanel
              alt="Abstract managed quantum cloud workflow layers with silver nodes"
              label="Managed Cloud Workflows"
              src="/images/quantum-cloud-workflows.png"
            />
          </ScrollReveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {services.slice(0, 4).map((service, index) => (
              <ScrollReveal delay={index * 0.05} key={service.title} y={20}>
                <ServiceCard {...service} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <ScrollReveal>
            <SectionHeader
              eyebrow="Roadmap Preview"
              title="A staged path from services to applications, platform workflows, and future infrastructure."
              text="The company is designed to earn trust and revenue early while building toward durable software and infrastructure opportunities."
            />
          </ScrollReveal>
          <ScrollReveal y={18}>
            <Roadmap />
          </ScrollReveal>
        </div>
      </section>

      <section className="border-y border-white/10 bg-black px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <ScrollReveal className="metal-panel rounded-lg p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-400">Investor Appeal</p>
            <h2 className="mt-4 text-3xl font-semibold text-white">A practical entry point into an infrastructure-scale market.</h2>
            <p className="mt-5 text-sm leading-7 text-zinc-300">
              The model starts with paid services and research support, then compounds into reusable applications, managed workflows, licensing, and future infrastructure access opportunities.
            </p>
          </ScrollReveal>
          <ScrollReveal className="metal-panel rounded-lg p-8" delay={0.08}>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-400">Long-Term Frontier</p>
            <h2 className="mt-4 text-3xl font-semibold text-white">Quantum-secure communications for Earth, the Moon, and beyond.</h2>
            <p className="mt-5 text-sm leading-7 text-zinc-300">
              Pantheon Quantum’s space communications vision is a long-term research direction focused on security, networking, and future settlement infrastructure, not an immediate commercial claim.
            </p>
          </ScrollReveal>
          <ScrollVisualPanel
            alt="Abstract silver orbital communications grid connecting Earth, the Moon, and a distant Mars point"
            className="lg:col-span-2"
            label="Long-Term Communications Research"
            src="/images/space-communications-grid.png"
          />
        </div>
      </section>

      <CTA />
    </>
  );
}
