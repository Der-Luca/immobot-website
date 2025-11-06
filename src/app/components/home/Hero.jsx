"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="px-4 pt-12 pb-20 md:pt-20 bg-white">
      <div className="mx-auto max-w-7xl grid md:grid-cols-2 gap-10 items-center">
        {/* ───── Textblock ───── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-neutral-50 rounded-2xl p-8 md:p-10"
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Hör auf, nach Immobilien zu suchen!
          </h1>
          <p className="mt-5 text-neutral-700 text-base md:text-lg">
            Erhalte täglich automatisch die besten Immobilienangebote aus über 40 Portalen
            direkt in dein Postfach.
          </p>

          <div className="mt-8 flex gap-3">
            <Link
              href="/starten"
              className="rounded-xl px-5 py-3 bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors"
            >
              Starten
            </Link>
            <Link
              href="/demo"
              className="rounded-xl px-5 py-3 bg-neutral-100 text-sm font-medium hover:bg-neutral-200 transition-colors"
            >
              Demo
            </Link>
          </div>
        </motion.div>

        {/* ───── Bild ───── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="w-full h-full flex justify-center md:justify-end"
        >
          <div className="relative w-full aspect-[4/3] md:aspect-[5/4] rounded-2xl overflow-hidden border bg-neutral-100">
            <Image
              src="/placeholder.svg"
              alt="Hero Bild – Immobilien-Suche"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </motion.div>
      </div>

      {/* ───── Logos ───── */}
      <div className="mt-12 md:mt-16 text-center">
        <p className="text-sm md:text-base text-neutral-600 mb-6">
          Wir suchen für dich nach deiner perfekten Immobilie, auf 40+ Plattformen mit tausenden Inseraten, z. B.
        </p>
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 items-center">
          {["immo-scout24", "immowelt", "sz", "sparkasse", "kleinanzeigen", "wohnglueck"].map(
            (logo) => (
              <div
                key={logo}
                className="h-10 w-28 bg-neutral-100 border rounded-lg grid place-items-center text-xs text-neutral-500"
              >
                {logo}
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
