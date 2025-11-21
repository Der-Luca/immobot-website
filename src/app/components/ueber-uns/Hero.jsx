// src/app/ueber-uns/components/Hero.jsx
export default function Hero() {
  return (
    <section
      className="relative py-24"
      style={{
        backgroundImage: "url(/ueberunsfotos/ue0.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* dunkles Overlay für Lesbarkeit */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 w-full mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Textbereich */}
        <div>
          <p className="text-sm font-medium text-neutral-100 mb-3">
            Mission
          </p>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 text-white">
            Über uns – <br /> digitale Immobiliensuche
          </h1>

          <p className="text-neutral-100/90 text-lg mb-8">
            Wir vereinfachen die Immobiliensuche mit intelligenter Technologie.
            Unsere Plattform bündelt Angebote aus über 40 Portalen.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="/funktionen"
              className="px-5 py-2.5 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition"
            >
              Entdecken
            </a>
            <a
              href="/kontakt"
              className="px-5 py-2.5 bg-white/90 text-black rounded-xl font-medium hover:bg-white transition"
            >
              Kontakt
            </a>
          </div>
        </div>

        {/* rechte Spalte nur als Spacer, falls du später was brauchst */}
        <div className="hidden md:block" />
      </div>
    </section>
  );
}
