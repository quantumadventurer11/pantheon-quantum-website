import { CTA } from "./CTA";
import { ScrollReveal } from "./ScrollReveal";
import { ScrollVisualPanel } from "./ScrollVisualPanel";
import { SectionHeader } from "./SectionHeader";

export function PageShell({ eyebrow, title, text, children, cta = true, image }) {
  return (
    <>
      <section className="relative overflow-hidden px-6 pb-14 pt-36 lg:px-8">
        <div className="quantum-grid absolute inset-0 opacity-20" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-[#08090b]/80 to-[#050506]" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
          <ScrollReveal>
            <SectionHeader eyebrow={eyebrow} title={title} text={text} />
          </ScrollReveal>
          {image ? (
            <ScrollReveal delay={0.1} y={18}>
              <ScrollVisualPanel {...image} className="hidden aspect-[4/3] lg:block" />
            </ScrollReveal>
          ) : null}
        </div>
      </section>
      <ScrollReveal className="mx-auto max-w-7xl px-6 py-12 lg:px-8">{children}</ScrollReveal>
      {cta ? <CTA /> : null}
    </>
  );
}
