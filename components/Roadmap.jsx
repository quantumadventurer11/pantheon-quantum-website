import { roadmap } from "../lib/siteData";

export function Roadmap() {
  return (
    <div className="relative">
      <div className="absolute left-4 top-0 hidden h-full w-px bg-white/15 md:block" />
      <div className="grid gap-5">
        {roadmap.map((item) => (
          <article className="metal-panel relative rounded-lg p-6 md:ml-12" key={item.phase}>
            <span className="absolute -left-[3.25rem] top-7 hidden h-8 w-8 rounded-full border border-white/30 bg-black md:block" />
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-400">{item.phase}</p>
            <h3 className="mt-2 text-2xl font-semibold text-white">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-zinc-300">{item.details}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
