export function SectionHeader({ eyebrow, title, text, centered = false }) {
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-400">{eyebrow}</p> : null}
      <h2 className="mt-3 text-3xl font-semibold tracking-normal text-white md:text-5xl">{title}</h2>
      {text ? <p className="mt-5 text-base leading-8 text-zinc-300 md:text-lg">{text}</p> : null}
    </div>
  );
}
