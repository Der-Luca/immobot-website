"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const steps = [
  {
    tag: "Schritt 1",
    title: "Suchprofil erstellen",
    desc: "Definiere deine Wunschimmobilie mit präzisen Suchkriterien",
    href: "https://app.immobot.pro/register",
    img: "/homepagefotos/s1.jpg",
    btnText: "Starten",
    isBlueBtn: true,
  },
  {
    tag: "Schritt 2",
    title: "Plattformen durchsuchen",
    desc: "Wir scannen automatisch 40+ Immobilienportale",
    href: "/funktionen",
    img: "/homepagefotos/s2.jpg",
    tone: "blue",
    btnText: "Details",
    isBlueBtn: true,
  },
  {
    tag: "Schritt 3",
    title: "Tägliche Ergebnisse",
    desc: "Erhalte passende Angebote direkt in deiner E-Mail",
    href: "https://app.immobot.pro/register",
    img: "/homepagefotos/s3.jpg",
    tone: "gray",
    btnText: "Starten",
    isBlueBtn: true,
  },
];

const tickerItems = [
  "Klassische Immobilienportale",
  "Immoscout, Immonet, Immowelt",
  "Bankenimmobilien & Sparkassen",
  "eBay Kleinanzeigen",
  "Regionale Portale",
  "Zeitungen & Anzeigenblätter",
  "Weitere Immobiliendienste",
];

export default function Steps() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % tickerItems.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="px-4 py-16 md:py-20 bg-white overflow-hidden">
      <h2 className="mb-6 text-5xl font-semibold leading-[0.95] text-neutral-900 sm:text-6xl text-center">
        Über 40 Immobilienportale in einem Tool
      </h2>

      {/* --- FLIP BOARD ANIMATION --- */}
      <div className="w-full mb-16 flex flex-col items-center justify-center">
        <div className="h-14 md:h-16 flex items-center justify-center" style={{ perspective: "500px" }}>
          <AnimatePresence mode="wait">
            <motion.span
              key={currentIndex}
              initial={{ rotateX: -90, opacity: 0 }}
              animate={{ rotateX: 0, opacity: 1 }}
              exit={{ rotateX: 90, opacity: 0 }}
              transition={{
                duration: 0.5,
                ease: [0.4, 0, 0.2, 1],
              }}
              className="text-2xl md:text-4xl font-bold text-blue-600 block"
            >
              {tickerItems[currentIndex]}
            </motion.span>
          </AnimatePresence>
        </div>

        {/* Progress dots */}
        <div className="flex gap-2 mt-4">
          {tickerItems.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === currentIndex
                  ? "bg-blue-600 w-6"
                  : "bg-blue-200 hover:bg-blue-300 w-2"
              }`}
            />
          ))}
        </div>
      </div>
      {/* --- ENDE FLIP BOARD --- */}

      <div className="mx-auto max-w-7xl text-center">
        <p className="text-sm text-neutral-500">Einfach</p>
        <h2 className="mt-4 text-5xl font-semibold leading-[0.95] text-neutral-900 sm:text-6xl">
          So funktioniert immobot.pro
        </h2>
        <p className="mt-3 text-neutral-600">
          Drei Schritte zu deiner perfekten Immobilie
        </p>

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

              <div className="absolute inset-0 p-6 flex flex-col justify-between text-left text-white">
                <div>
                  {s.tag && (
                    <span className="text-sm font-medium">{s.tag}</span>
                  )}
                  <h3 className="mt-1 text-2xl md:text-3xl font-semibold">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm md:text-base text-white/90 max-w-[40ch]">
                    {s.desc}
                  </p>
                </div>

                <div className="flex gap-3">
                  <Link
                    href={s.href}
                    className={`rounded-xl px-5 py-2 transition-colors backdrop-blur font-medium ${
                      s.isBlueBtn
                        ? "bg-blue-600 hover:bg-blue-700 text-white border border-transparent"
                        : "bg-white/10 hover:bg-white/20 text-white"
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
