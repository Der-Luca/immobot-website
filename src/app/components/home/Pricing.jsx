"use client";
import { motion } from "framer-motion";

export default function Pricing() {
  return (
    <section className="px-4 py-20 bg-white">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold text-neutral-500">Preise</p>
        <h2 className="mt-4 text-5xl font-semibold leading-[0.95] text-neutral-900 sm:text-6xl">Flexibel und transparent</h2>
        <p className="mt-3 text-neutral-600">Finde dein passendes Immobilien-Find-Abo</p>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.35 }}
          className="mt-8 rounded-3xl bg-white text-left shadow-sm mx-auto max-w-2xl"
        >
          <div className="p-6 md:p-8">
            <div>
              <h3 className="text-lg font-semibold">Basis-Abo</h3>
              <p className="text-sm text-neutral-600">Perfekt für Einsteiger</p>
            </div>

            <hr className="my-5 border-neutral-200" />

            <div className="flex flex-col gap-4">
              <div>
                <div className="flex flex-wrap items-end gap-x-2 gap-y-1">
                  <span className="text-5xl font-bold tracking-tight">14,99 €</span>
                  <span className="pb-1 text-sm font-semibold text-neutral-700">
                    / Monat, inkl. USt.
                  </span>
                </div>
                <p className="mt-2 text-sm text-neutral-600">
                  Zahlungsarten: Kreditkarte, Apple Pay, Klarna, Amazon Pay, PayPal.
                </p>
              </div>

              <button className="rounded-xl bg-blue-600 text-white px-5 py-3 font-medium hover:bg-blue-700 transition-colors">
                Starten
              </button>

              <p className="text-xs text-neutral-500">Monatlich kündbar. Keine versteckten Gebühren.</p>

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
