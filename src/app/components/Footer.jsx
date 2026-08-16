import Link from "next/link";
import { Mail, RotateCcw } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo + Branding */}
        <div>
          <Link href="/" className="flex items-center gap-2 text-blue-700 font-semibold text-lg">
              <img src="/logo.png" alt="Immobotlogo" className="w-1/2" />
          </Link>
        </div>

        {/* Produkt */}
        <div>
          <h4 className="font-semibold mb-3">Produkt</h4>
          <ul className="space-y-2 text-sm text-neutral-700">
            <li><Link href="/funktionen" className="hover:text-black">Funktionen</Link></li>
            <li><Link href="/preise" className="hover:text-black">Preise</Link></li>
            <li><Link href="/ueber-uns" className="hover:text-black">Über uns</Link></li>
          </ul>
        </div>

        {/* Unternehmen */}
        <div>
          <h4 className="font-semibold mb-3">Unternehmen</h4>
          <ul className="space-y-2 text-sm text-neutral-700">
            <li><Link href="/impressum" className="hover:text-black">Kontakt</Link></li>
          </ul>
        </div>

        {/* Support / Newsletter */}
        <div>
          <h4 className="font-semibold mb-3">Support</h4>
          <ul className="space-y-2 text-sm text-neutral-700 mb-6">
            <li><Link href="/#faq" className="hover:text-black">FAQ</Link></li>
          </ul>
          <Link
            href="/kuendigung"
            className="inline-flex items-center gap-2 rounded-lg border border-neutral-300 px-3 py-2 text-sm font-medium text-neutral-700 transition-colors hover:border-neutral-500 hover:bg-neutral-50 hover:text-black"
          >
            <Mail size={16} aria-hidden="true" />
            Verträge hier kündigen
          </Link>
          <a
            href="https://app.immobot.pro/widerruf"
            className="mt-3 inline-flex items-center gap-2 rounded-lg border border-blue-200 bg-blue-50 px-3 py-2 text-sm font-medium text-blue-800 transition-colors hover:border-blue-300 hover:bg-blue-100 hover:text-blue-950"
          >
            <RotateCcw size={16} aria-hidden="true" />
            Vertrag widerrufen
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-200">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between px-4 py-4 gap-3 text-sm text-neutral-600">
          <p>© {new Date().getFullYear()} immobot.pro. Alle Rechte vorbehalten.</p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/impressum" className="hover:text-black">Impressum</Link>
            <Link href="/datenschutz" className="hover:text-black">Datenschutzhinweis</Link>
            <Link href="/nutzungsbedingungen" className="hover:text-black">AGB</Link>
            <Link href="/widerruf" className="hover:text-black">Widerruf</Link>
            <Link href="/cookies" className="hover:text-black">Cookie-Einstellungen</Link>
          </div>

          {/* Social-Media-Links vorerst ausgeblendet.
          <div className="flex items-center gap-4">
            <Link href="https://facebook.com" aria-label="Facebook" className="hover:text-black"><Facebook size={18} /></Link>
            <Link href="https://instagram.com" aria-label="Instagram" className="hover:text-black"><Instagram size={18} /></Link>
            <Link href="https://x.com" aria-label="X / Twitter" className="hover:text-black"><X size={18} /></Link>
            <Link href="https://linkedin.com" aria-label="LinkedIn" className="hover:text-black"><Linkedin size={18} /></Link>
            <Link href="https://youtube.com" aria-label="YouTube" className="hover:text-black"><Youtube size={18} /></Link>
          </div>
          */}
        </div>
      </div>

    </footer>
  );
}
