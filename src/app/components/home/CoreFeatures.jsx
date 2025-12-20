// components/home/CoreFeatures.jsx
"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const features = [
  {
    tag: "Portale",
    title: "Über 40 Plattformen gebündelt",
    desc: "Wir durchsuchen die wichtigsten Immobilienportale automatisch und umfassend.",
    href: "/funktionen/portale",
    img: "/homepagefotos/s4.jpg",
    btnText: "Details",
    isBlueBtn: true,
  },
  {
    tag: "Filter",
    title: "Individuelle Suchkriterien",
    desc: "Definiere einfach deine Wunschimmobilie mit präzisen Filtern.",
    href: "/funktionen/filter",
    img: "/homepagefotos/s5.jpg",
    btnText: "Start",
    isBlueBtn: true,
  },
  {
    tag: "Updates",
    title: "Tägliche Aktualisierungen",
    desc: "Erhalte täglich neue Immobilienangebote ohne manuelle Suche.",
    href: "/funktionen/updates",
    img: "/homepagefotos/s6.jpg",
    btnText: "Start",
    isBlueBtn: true,
  },
];

export default function CoreFeatures() {
  return (
    <section className="px-4 py-20 bg-white">
      <div className="mx-auto max-w-7xl text-center">
        <p className="text-sm font-semibold text-neutral-500">Vorteile</p>
        <h2 className="mt-4 text-5xl font-semibold leading-[0.95] text-neutral-900 sm:text-6xl">
          Unsere Kernfunktionen
        </h2>
        <p className="mt-3 text-neutral-600 text-base md:text-lg">
          Intelligente Suche für deine Traumimmobilie
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {features.map((f, i) => (
            <motion.article
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-3xl group"
            >
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden">
                {f.img ? (
                  <Image
                    src={f.img}
                    alt={f.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                ) : (
                  <div className="w-full h-full bg-neutral-200" />
                )}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-6 text-left text-white">
                {f.tag && <p className="text-sm font-semibold mb-1">{f.tag}</p>}
                <h3 className="text-2xl font-semibold leading-snug">{f.title}</h3>
                <p className="mt-1 text-sm text-white/90 max-w-[32ch]">{f.desc}</p>

                {/* Button: exakt wie in Steps.jsx */}
                <div className="mt-5">
                  <Link
                    href={f.href}
                    className={`rounded-xl px-5 py-2 transition-colors backdrop-blur font-medium ${
                      f.isBlueBtn
                        ? "bg-blue-600 hover:bg-blue-700 text-white border border-transparent"
                        : "bg-white/10 hover:bg-white/20 text-white"
                    }`}
                  >
                    {f.btnText} {f.isBlueBtn ? "→" : ""}
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
