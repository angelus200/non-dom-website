import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "NON DOM Group – Der #1 Unternehmer Marktplatz",
  description: "KI-gestützte Plattformen, automatisierte Workflows und ein Netzwerk aus 32+ europäischen Unternehmen.",
  openGraph: {
    title: "NON DOM Group – Der #1 Unternehmer Marktplatz",
    description: "5 spezialisierte KI-Plattformen für den deutschen Mittelstand.",
    url: "https://non-dom.group",
    siteName: "NON DOM Group",
    locale: "de_DE",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
