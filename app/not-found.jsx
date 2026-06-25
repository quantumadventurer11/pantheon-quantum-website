import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-4xl flex-col items-start justify-center px-6 py-24">
      <p className="text-sm uppercase tracking-[0.28em] text-zinc-400">404</p>
      <h1 className="mt-4 text-4xl font-semibold text-white md:text-6xl">Page not found</h1>
      <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-300">
        The page you requested is not available. Return to the main site to continue exploring the company roadmap.
      </p>
      <Link className="focus-ring mt-8 rounded-sm border border-white/20 px-5 py-3 text-sm font-medium text-white hover:bg-white hover:text-black" href="/">
        Return Home
      </Link>
    </section>
  );
}
