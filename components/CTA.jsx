import { ButtonLink } from "./ButtonLink";
import { ScrollReveal } from "./ScrollReveal";

export function CTA({ title = "Build your quantum roadmap with practical first steps.", text = "Speak with Pantheon Quantum about consulting, partnerships, research support, or investment conversations." }) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <ScrollReveal className="metal-panel rounded-lg p-8 md:flex md:items-center md:justify-between md:gap-10 md:p-10">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-400">Inquiry</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold text-white md:text-4xl">{title}</h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-300">{text}</p>
        </div>
        <div className="mt-7 shrink-0 md:mt-0">
          <ButtonLink href="/contact">Partner With Us</ButtonLink>
        </div>
      </ScrollReveal>
    </section>
  );
}
