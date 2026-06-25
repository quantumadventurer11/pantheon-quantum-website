"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { company, navLinks } from "../lib/siteData";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Link className="focus-ring flex items-center gap-3" href="/" onClick={() => setOpen(false)}>
          <span className="h-8 w-8 rounded-full border border-white/30 bg-[radial-gradient(circle_at_35%_30%,#fff,rgba(255,255,255,.12)_36%,#050506_70%)]" />
          <span className="text-sm font-semibold uppercase tracking-[0.22em] text-white">{company.name}</span>
        </Link>
        <button
          aria-expanded={open}
          aria-label="Toggle navigation"
          className="focus-ring flex h-10 w-10 items-center justify-center rounded-sm border border-white/20 text-white lg:hidden"
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          <span className="grid gap-1.5">
            <span className={`block h-px w-5 bg-white transition ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-px w-5 bg-white transition ${open ? "opacity-0" : ""}`} />
            <span className={`block h-px w-5 bg-white transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </span>
        </button>
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              className={`focus-ring rounded-sm px-3 py-2 text-xs font-medium uppercase tracking-[0.16em] transition ${
                pathname === link.href
                  ? "border border-zinc-300/60 bg-zinc-950 text-white shadow-[inset_0_1px_0_rgba(255,255,255,.16)]"
                  : "text-zinc-300 hover:bg-white/10 hover:text-white"
              }`}
              href={link.href}
              key={link.href}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
      {open ? (
        <div className="border-t border-white/10 bg-black/95 px-5 py-4 lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
            {navLinks.map((link) => (
              <Link
                className={`focus-ring rounded-sm px-3 py-3 text-sm font-medium ${
                  pathname === link.href ? "border border-zinc-300/60 bg-zinc-950 text-white" : "text-zinc-200"
                }`}
                href={link.href}
                key={link.href}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
