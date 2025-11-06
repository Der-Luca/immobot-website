// src/app/layout.js
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://immobot.pro"),
  title: {
    default: "Immobot – Immobilien-Suche automatisieren",
    template: "%s | Immobot",
  },
  description: "Erhalte täglich automatisch die besten Immobilienangebote aus 40+ Portalen.",
  openGraph: {
    type: "website",
    siteName: "Immobot",
    images: ["/og-default.png"],
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "/" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
