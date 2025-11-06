"use client";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Pricing() {
  const [yearly, setYearly] = useState(false);

  const price = useMemo(() => {
    // Basispreis pro Monat
    const monthly = 6.99;
    // Jahr: kleiner Rabatt, z. B. 2 Monate gratis → 10×
    const perMonthYearly = 5.83; // Beispiel (69,90€/Jahr)
    return yearly ? perMonthYearly : monthly;
  }, [yearly]);

  const formatted = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(price);

  return (
    <section className="px-4 py-20 bg-white">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold text-neutral-500">Preise</p>
        <h2 className="text-3xl md:text-5xl font-bold mt-1">Flexibel und transparent</h2>
        <p className="mt-3 text-neutral-600">Finde dein passendes Immobilien-Find-Abo</p>

        {/* Toggle */}
        <div
          role="tablist"
          aria-label="Abrechnungszeitraum"
          className="inline-flex items-center gap-2 mt-6 rounded-2xl bg-neutral-100 p-1"
        >
          <button
            role="tab"
            aria-selected={!yearly}
            onClick={() => setYearly(false)}
            className={`px-4 py-1.5 rounded-xl text-sm font-medium transition ${
              !yearly ? "bg-white shadow-sm" : "text-neutral-600 hover:text-neutral-900"
            }`}
          >
            Monatlich
          </button>
          <button
            role="tab"
            aria-selected={yearly}
            onClick={() => setYearly(true)}
            className={`px-4 py-1.5 rounded-xl text-sm font-medium transition ${
              yearly ? "bg-white shadow-sm" : "text-neutral-600 hover:text-neutral-900"
            }`}
          >
            Jährlich
          </button>
        </div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.35 }}
          className="mt-8 rounded-3xl  bg-white text-left shadow-sm mx-auto max-w-2xl"
        >
          <div className="p-6 md:p-8">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold">Basis-Abo</h3>
                <p className="text-sm text-neutral-600">Perfekt für Einsteiger</p>
              </div>
              {yearly && (
                <span className="rounded-full bg-blue-50 text-blue-700 text-xs font-medium px-2.5 py-1">
                  2 Monate geschenkt
                </span>
              )}
            </div>

            <hr className="my-5 border-neutral-200" />

            <div className="flex flex-col gap-4">
              <div className="flex items-baseline gap-2">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={String(yearly)}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.2 }}
                    className="text-5xl font-bold tracking-tight"
                  >
                    {formatted.replace(" €", "")} €
                  </motion.span>
                </AnimatePresence>
                <span className="text-neutral-500">
                  {yearly ? "/ Monat (jährlich abgerechnet)" : "/ Monat"}
                </span>
              </div>

              <button className="rounded-xl bg-blue-600 text-white px-5 py-3 font-medium hover:bg-blue-700 transition-colors">
                Starten
              </button>

              <p className="text-xs text-neutral-500">
                {yearly ? "69,90 € pro Jahr inkl. MwSt." : "Monatlich kündbar, inkl. MwSt."}
              </p>

              <hr className="my-4 border-neutral-200" />

              <ul className="space-y-2 text-sm text-neutral-800">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-neutral-800" />
                  Spare richtig viel Zeit (und Nerven)
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-neutral-800" />
                  Tägliches E-Mail-Update mit allen Immos
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-neutral-800" />
                  Zugang zu 40+ Portalen
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-neutral-800" />
                  Individuelle Wünsche als Filter
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-neutral-800" />
                  Keine versteckten Kosten
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
