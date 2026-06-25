import Link from "next/link";
import { company, navLinks } from "../lib/siteData";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-[1.2fr_1fr_1fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white">{company.name}</p>
          <p className="mt-4 max-w-md text-sm leading-7 text-zinc-400">
            A quantum applications and infrastructure company beginning with practical services, software prototypes, applied research support, and managed workflows.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Navigation</p>
          <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-zinc-400">
            {navLinks.map((link) => (
              <Link className="hover:text-white" href={link.href} key={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Company</p>
          <div className="mt-4 grid gap-3 text-sm text-zinc-400">
            <Link className="hover:text-white" href="/contact">Contact</Link>
            <Link className="hover:text-white" href="/privacy-policy">Privacy Policy</Link>
            <Link className="hover:text-white" href="/terms-of-use">Terms of Use</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-6 py-5 text-center text-xs text-zinc-500">
        Copyright {new Date().getFullYear()} {company.name}. All rights reserved.
      </div>
    </footer>
  );
}
