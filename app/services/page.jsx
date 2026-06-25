import { PageShell } from "../../components/PageShell";
import { ServiceCard } from "../../components/ServiceCard";
import { services } from "../../lib/siteData";

export const metadata = {
  title: "Services",
  description: "Quantum readiness consulting, workshops, prototypes, optimization, cybersecurity transition planning, and cloud workflow support."
};

export default function ServicesPage() {
  return (
    <PageShell
      eyebrow="Services"
      title="Practical quantum services for organizations preparing now."
      text="The first stage of Pantheon Quantum is revenue-first: focused engagements that help clients build knowledge, test useful workflows, and make informed strategic decisions."
      image={{
        src: "/images/quantum-cloud-workflows.png",
        alt: "Abstract managed quantum cloud workflow layers",
        label: "Service Layer"
      }}
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </PageShell>
  );
}
