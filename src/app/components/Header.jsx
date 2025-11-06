"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const APP_URL = "https://immobot-dc818.web.app";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-200">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-4 h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-blue-700 font-semibold text-lg">
          {/* ... */}
          <span>immobot.pro</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-neutral-800">
          <Link href="/funktionen" className="hover:text-black transition-colors">
            Funktionen
          </Link>
          <Link href="/preise" className="hover:text-black transition-colors">
            Preise
          </Link>
          <Link href="/ueber-uns" className="hover:text-black transition-colors">
            Über uns
          </Link>

          {/* Hilfe Dropdown */}
          {/* ... unverändert ... */}

          {/* Externe WebApp-Buttons (Desktop) */}
          <a
            href={`${APP_URL}/login`}
            className="rounded-xl px-4 py-2 bg-neutral-100 hover:bg-neutral-200 transition-colors"
          >
            Anmelden
          </a>
          <a
            href={APP_URL}
            className="rounded-xl px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 transition-colors"
          >
            Starten
          </a>
        </nav>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-neutral-700 hover:text-black transition-colors"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="md:hidden border-t border-neutral-200 bg-white/90 backdrop-blur-md"
          >
            <div className="flex flex-col px-4 py-3 text-sm font-medium text-neutral-800">
              <Link href="/funktionen" className="py-2 hover:text-black" onClick={() => setMenuOpen(false)}>
                Funktionen
              </Link>
              <Link href="/preise" className="py-2 hover:text-black" onClick={() => setMenuOpen(false)}>
                Preise
              </Link>
              <Link href="/ueber-uns" className="py-2 hover:text-black" onClick={() => setMenuOpen(false)}>
                Über uns
              </Link>

              {/* Hilfe Dropdown (mobile) */}
              {/* ... unverändert ... */}

              <div className="mt-3 flex flex-col gap-2">
                <a
                  href={`${APP_URL}/login`}
                  className="rounded-xl px-4 py-2 bg-neutral-100 hover:bg-neutral-200 text-center transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  Anmelden
                </a>
                <a
                  href={APP_URL}
                  className="rounded-xl px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 text-center transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  Starten
                </a>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
