// components/home/Steps.jsx
"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const steps = [
  {
    tag: "Schritt 1",
    title: "Suchprofil erstellen",
    desc: "Definiere deine Wunschimmobilie mit präzisen Suchkriterien",
    href: "/hilfe/suchprofil",
    img: "/ph-step1.jpg", // Placeholder in /public
  },
  {
    tag: "",
    title: "Plattformen durchsuchen",
    desc: "Wir scannen automatisch 40+ Immobilienportale",
    href: "/hilfe/plattformen",
    img: "/ph-step2.jpg",
    tone: "blue",
  },
  {
    tag: "",
    title: "Tägliche Ergebnisse",
    desc: "Erhalte passende Angebote direkt in deiner E-Mail",
    href: "/hilfe/ergebnisse",
    img: "/ph-step3.jpg",
    tone: "gray",
  },
];

export default function Steps() {
  return (
    <section className="px-4 py-16 md:py-20 bg-white">
      <div className="mx-auto max-w-7xl text-center">
        <p className="text-sm text-neutral-500">Einfach</p>
        <h2 className="text-3xl md:text-5xl font-bold mt-1">So funktioniert immobot.pro</h2>
        <p className="mt-3 text-neutral-600">Drei Schritte zu deiner perfekten Immobilie</p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.06 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-3xl"
            >
              {/* Bild / Farbfläche */}
              <div className="relative aspect-[16/10] rounded-3xl overflow-hidden">
                {/* Wenn kein Bild existiert → neutrale Fläche */}
                {s.img ? (
                  <Image
                    src={s.img}
                    alt={s.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                ) : (
                  <div
                    className={`w-full h-full ${s.tone === "blue" ? "bg-blue-600" : s.tone === "gray" ? "bg-neutral-400" : "bg-neutral-800"}`}
                  />
                )}
                {/* Overlay für Lesbarkeit */}
                <div className="absolute inset-0 bg-black/30" />
              </div>

              {/* Text-Overlay */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between text-left text-white">
                <div>
                  {s.tag && <span className="text-sm font-medium">{s.tag}</span>}
                  <h3 className="mt-1 text-2xl md:text-3xl font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm md:text-base text-white/90 max-w-[40ch]">{s.desc}</p>
                </div>
                <div className="flex gap-3">
                  {i === 0 && (
                    <Link href="/details" className="rounded-xl px-4 py-2 bg-white/20 backdrop-blur hover:bg-white/30">
                      Details
                    </Link>
                  )}
                  <Link href={s.href} className="rounded-xl px-4 py-2 bg-white/10 backdrop-blur hover:bg-white/20">
                    Mehr →
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
