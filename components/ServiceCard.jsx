export function ServiceCard({ title, description }) {
  return (
    <article className="metal-panel rounded-lg p-6">
      <div className="mb-5 h-px w-16 bg-gradient-to-r from-white to-transparent" />
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-zinc-300">{description}</p>
    </article>
  );
}
