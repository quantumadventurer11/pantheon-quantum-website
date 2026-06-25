import { PageShell } from "../../components/PageShell";

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Pantheon Quantum."
};

export default function PrivacyPolicyPage() {
  return (
    <PageShell
      eyebrow="Privacy"
      title="Privacy Policy"
      text="This policy is a launch-ready placeholder and should be reviewed by qualified counsel before production use."
      cta={false}
      image={{
        src: "/images/graphite-wave-lattice.png",
        alt: "Abstract graphite lattice used as a privacy page visual",
        label: "Data Care"
      }}
    >
      <div className="metal-panel rounded-lg p-8 text-sm leading-7 text-zinc-300">
        <p>Pantheon Quantum may collect contact information voluntarily submitted through this website, including name, email address, organization, inquiry type, and message content.</p>
        <p className="mt-5">Information is used to respond to inquiries, evaluate partnership opportunities, improve communications, and support legitimate business operations. Pantheon Quantum does not sell personal information.</p>
        <p className="mt-5">The website may use standard analytics, hosting logs, and security tools to understand performance, protect the site, and improve user experience.</p>
        <p className="mt-5">Users may request updates or deletion of submitted contact information by contacting the company through the contact page.</p>
      </div>
    </PageShell>
  );
}
