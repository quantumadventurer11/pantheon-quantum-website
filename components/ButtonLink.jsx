import Link from "next/link";

const variants = {
  primary:
    "border-zinc-300/70 bg-[linear-gradient(135deg,#0b0c0f,#1a1d22)] text-white shadow-[inset_0_1px_0_rgba(255,255,255,.18),0_18px_36px_rgba(0,0,0,.32)] hover:border-white hover:bg-[linear-gradient(135deg,#15181d,#242832)]",
  secondary: "border-white/25 bg-white/5 text-white hover:border-white/60 hover:bg-white/10"
};

export function ButtonLink({ href, children, variant = "primary" }) {
  return (
    <Link
      className={`focus-ring inline-flex items-center justify-center rounded-sm border px-5 py-3 text-sm font-semibold transition duration-300 ${variants[variant]}`}
      href={href}
    >
      {children}
    </Link>
  );
}
