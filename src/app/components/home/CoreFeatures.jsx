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
    img: "/ph-feature1.jpg",
  },
  {
    tag: "Filter",
    title: "Individuelle Suchkriterien",
    desc: "Definiere einfach deine Wunschimmobilie mit präzisen Filtern.",
    href: "/funktionen/filter",
    img: "/ph-feature2.jpg",
  },
  {
    tag: "Updates",
    title: "Tägliche Aktualisierungen",
    desc: "Erhalte täglich neue Immobilienangebote ohne manuelle Suche.",
    href: "/funktionen/updates",
    img: "/ph-feature3.jpg",
  },
];

export default function CoreFeatures() {
  return (
    <section className="px-4 py-20 bg-white">
      <div className="mx-auto max-w-7xl text-center">
        <p className="text-sm font-semibold text-neutral-500">Vorteile</p>
        <h2 className="text-3xl md:text-5xl font-bold mt-1">Unsere Kernfunktionen</h2>
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
              {/* Bild mit Placeholder */}
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

              {/* Text overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-left text-white">
                {f.tag && <p className="text-sm font-semibold mb-1">{f.tag}</p>}
                <h3 className="text-2xl font-semibold leading-snug">{f.title}</h3>
                <p className="mt-1 text-sm text-white/90 max-w-[32ch]">{f.desc}</p>

                <Link
                  href={f.href}
                  className="mt-3 inline-flex items-center gap-1 text-sm font-medium hover:underline"
                >
                  Details →
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
