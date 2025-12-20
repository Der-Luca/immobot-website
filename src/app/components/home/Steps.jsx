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
    img: "/homepagefotos/s1.jpg",
    // Button Konfiguration für Karte 1
    btnText: "Starten",
    isBlueBtn: true, 
  },
  {
    tag: "",
    title: "Plattformen durchsuchen",
    desc: "Wir scannen automatisch 40+ Immobilienportale",
    href: "/hilfe/plattformen",
    img: "/homepagefotos/s2.jpg",
    tone: "blue",
    // Button Konfiguration für Karte 2
    btnText: "Details",
    isBlueBtn: true,
  },
  {
    tag: "",
    title: "Tägliche Ergebnisse",
    desc: "Erhalte passende Angebote direkt in deiner E-Mail",
    href: "/hilfe/ergebnisse",
    img: "/homepagefotos/s3.jpg",
    tone: "gray",
    // Button Konfiguration für Karte 3
    btnText: "Starten",
    isBlueBtn: true,
  },
];

// Einfache Liste der Begriffe
const tickerItems = [
  "Klassische Immobilienportale (Immoscout, Immonet, Immowelt...)",
  "Bankenimmobilien (Sparkassen...)",
  "Kleinanzeigen (eBay, nationale & regionale Portale...)",
  "Zeitungen",
  "Weitere Immobiliendienste & Immobilienanbieter",
];

export default function Steps() {
  return (
    <section className="px-4 py-16 md:py-20 bg-white overflow-hidden">
      
      <h2 className="mb-12 text-5xl font-semibold leading-[0.95] text-neutral-900 sm:text-6xl text-center">
        Über 40 Immobilienportale in einem Tool
      </h2>

      {/* --- START LAUFSCHRIFT --- */}
      <div className="w-full mb-16 relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
        
        <motion.div
          className="flex flex-nowrap items-center"
          initial={{ x: 0 }}
          animate={{ x: "-100%" }} 
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 160, 
          }}
        >
          {/* Wir duplizieren den Block mehrmals für den Loop */}
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center shrink-0">
              {tickerItems.map((item, index) => (
                <div key={index} className="flex items-center">
                  <span className="text-2xl md:text-3xl font-bold text-blue-600 whitespace-nowrap">
                    {item}
                  </span>
                  <span className="mx-6 text-blue-300 text-2xl">•</span>
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
      {/* --- ENDE LAUFSCHRIFT --- */}

      <div className="mx-auto max-w-7xl text-center">
        <p className="text-sm text-neutral-500">Einfach</p>
        <h2 className="mt-4 text-5xl font-semibold leading-[0.95] text-neutral-900 sm:text-6xl">
          So funktioniert immobot.pro
        </h2>
        <p className="mt-3 text-neutral-600">Drei Schritte zu deiner perfekten Immobilie</p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.06 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-3xl group"
            >
              {/* Hintergrundbild / Fläche */}
              <div className="relative aspect-[16/10] rounded-3xl overflow-hidden">
                {s.img ? (
                  <Image
                    src={s.img}
                    alt={s.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                ) : (
                  <div
                    className={`w-full h-full ${
                      s.tone === "blue"
                        ? "bg-blue-600"
                        : s.tone === "gray"
                        ? "bg-neutral-400"
                        : "bg-neutral-800"
                    }`}
                  />
                )}
                <div className="absolute inset-0 bg-black/30" />
              </div>

              {/* Text Overlay & Buttons */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between text-left text-white">
                <div>
                  {s.tag && <span className="text-sm font-medium">{s.tag}</span>}
                  <h3 className="mt-1 text-2xl md:text-3xl font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm md:text-base text-white/90 max-w-[40ch]">
                    {s.desc}
                  </p>
                </div>
                
                {/* Dynamischer Button Bereich */}
                <div className="flex gap-3">
                  <Link
                    href={s.href}
                    className={`rounded-xl px-5 py-2 transition-colors backdrop-blur font-medium ${
                      s.isBlueBtn 
                        ? "bg-blue-600 hover:bg-blue-700 text-white border border-transparent" // Blauer Button Style
                        : "bg-white/10 hover:bg-white/20 text-white" // Standard Glass Style
                    }`}
                  >
                    {s.btnText} {s.isBlueBtn ? "→" : ""}
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