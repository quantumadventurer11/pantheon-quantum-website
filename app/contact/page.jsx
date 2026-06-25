import { PageShell } from "../../components/PageShell";
import { company } from "../../lib/siteData";

export const metadata = {
  title: "Contact",
  description: "Contact Pantheon Quantum for investor, partner, client, research, or general inquiries."
};

export default function ContactPage() {
  return (
    <PageShell
      eyebrow="Contact"
      title="Start a conversation with Pantheon Quantum."
      text="Use the form for investor, partner, client, research, or general inquiries. The form is prepared for integration with a future CRM, email, or server action workflow."
      cta={false}
      image={{
        src: "/images/graphite-wave-lattice.png",
        alt: "Abstract graphite communication wave lattice",
        label: "Inquiry"
      }}
    >
      <div className="grid gap-10 lg:grid-cols-[1fr_0.7fr]">
        <form className="metal-panel grid gap-5 rounded-lg p-7">
          <label className="grid gap-2 text-sm font-medium text-white">
            Inquiry Type
            <select className="focus-ring rounded-sm border border-white/15 bg-black px-4 py-3 text-zinc-200">
              {["Investor", "Partner", "Client", "Research", "General"].map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </label>
          <div className="grid gap-5 md:grid-cols-2">
            <label className="grid gap-2 text-sm font-medium text-white">
              Name
              <input className="focus-ring rounded-sm border border-white/15 bg-black px-4 py-3 text-zinc-200" placeholder="Your name" type="text" />
            </label>
            <label className="grid gap-2 text-sm font-medium text-white">
              Email
              <input className="focus-ring rounded-sm border border-white/15 bg-black px-4 py-3 text-zinc-200" placeholder="you@example.com" type="email" />
            </label>
          </div>
          <label className="grid gap-2 text-sm font-medium text-white">
            Organization
            <input className="focus-ring rounded-sm border border-white/15 bg-black px-4 py-3 text-zinc-200" placeholder="Organization name" type="text" />
          </label>
          <label className="grid gap-2 text-sm font-medium text-white">
            Message
            <textarea className="focus-ring min-h-40 rounded-sm border border-white/15 bg-black px-4 py-3 text-zinc-200" placeholder="Tell us about the opportunity, challenge, or partnership." />
          </label>
          <button className="focus-ring rounded-sm border border-zinc-300/70 bg-[linear-gradient(135deg,#0b0c0f,#1a1d22)] px-5 py-3 text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,.18),0_18px_36px_rgba(0,0,0,.32)] transition hover:border-white hover:bg-[linear-gradient(135deg,#15181d,#242832)]" type="button">
            Submit Inquiry
          </button>
        </form>
        <aside className="metal-panel rounded-lg p-7">
          <h2 className="text-2xl font-semibold text-white">Direct Contact</h2>
          <p className="mt-4 text-sm leading-7 text-zinc-300">
            Placeholder email: <span className="text-white">{company.email}</span>
          </p>
          <p className="mt-4 text-sm leading-7 text-zinc-300">
            LinkedIn placeholder: <span className="text-white">{company.linkedin}</span>
          </p>
          <div className="metal-line mt-8 h-px" />
          <p className="mt-8 text-sm leading-7 text-zinc-400">
            For production, connect this form to a secure server action, transactional email provider, CRM, or Vercel-compatible form endpoint.
          </p>
        </aside>
      </div>
    </PageShell>
  );
}
