import "./globals.css";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

export const metadata = {
  metadataBase: new URL("https://pantheonquantum.com"),
  title: {
    default: "Pantheon Quantum | Practical Quantum Applications",
    template: "%s | Pantheon Quantum"
  },
  description:
    "A quantum technology company helping organizations prepare for practical quantum-enabled applications through consulting, software, research support, and future infrastructure.",
  openGraph: {
    title: "Pantheon Quantum",
    description:
      "Building practical quantum applications today, toward quantum infrastructure tomorrow.",
    type: "website"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
