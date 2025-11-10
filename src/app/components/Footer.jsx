"use client";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Youtube, X } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo + Branding */}
        <div>
          <Link href="/" className="flex items-center gap-2 text-blue-700 font-semibold text-lg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
              <path d="M12 3 3 10v10a1 1 0 0 0 1 1h5v-6h6v6h5a1 1 0 0 0 1-1V10l-9-7z" />
            </svg>
            <span>immobot.pro</span>
          </Link>
        </div>

        {/* Produkt */}
        <div>
          <h4 className="font-semibold mb-3">Produkt</h4>
          <ul className="space-y-2 text-sm text-neutral-700">
            <li><Link href="/funktionen" className="hover:text-black">Funktionen</Link></li>
            <li><Link href="/preise" className="hover:text-black">Preise</Link></li>
            <li><Link href="/demo" className="hover:text-black">Demo</Link></li>
            <li><Link href="/ueber-uns" className="hover:text-black">Über uns</Link></li>
          </ul>
        </div>

        {/* Unternehmen */}
        <div>
          <h4 className="font-semibold mb-3">Unternehmen</h4>
          <ul className="space-y-2 text-sm text-neutral-700">
            <li><Link href="/kontakt" className="hover:text-black">Kontakt</Link></li>
            <li><Link href="/rechtliches" className="hover:text-black">Rechtliches</Link></li>
          </ul>
        </div>

        {/* Support / Newsletter */}
        <div>
          <h4 className="font-semibold mb-3">Support</h4>
          <ul className="space-y-2 text-sm text-neutral-700 mb-6">
            <li><Link href="/faq" className="hover:text-black">FAQ</Link></li>
          </ul>

          



        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-200">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between px-4 py-4 gap-3 text-sm text-neutral-600">
          <p>© {new Date().getFullYear()} immobot.pro. Alle Rechte vorbehalten.</p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/datenschutz" className="hover:text-black">Datenschutz</Link>
            <Link href="/nutzungsbedingungen" className="hover:text-black">Nutzungsbedingungen</Link>
            <Link href="/cookies" className="hover:text-black">Cookie-Einstellungen</Link>
          </div>

          <div className="flex items-center gap-4">
            <Link href="https://facebook.com" aria-label="Facebook" className="hover:text-black"><Facebook size={18} /></Link>
            <Link href="https://instagram.com" aria-label="Instagram" className="hover:text-black"><Instagram size={18} /></Link>
            <Link href="https://x.com" aria-label="X / Twitter" className="hover:text-black"><X size={18} /></Link>
            <Link href="https://linkedin.com" aria-label="LinkedIn" className="hover:text-black"><Linkedin size={18} /></Link>
            <Link href="https://youtube.com" aria-label="YouTube" className="hover:text-black"><Youtube size={18} /></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
