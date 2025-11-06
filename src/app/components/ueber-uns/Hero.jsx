// src/app/ueber-uns/components/Hero.jsx
export default function Hero() {
  return (
    <section className="bg-neutral-50 py-24">
      <div className="w-full mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Textbereich */}
        <div>
          <p className="text-sm font-medium text-neutral-800 mb-3">Mission</p>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Über uns – <br /> digitale Immobiliensuche
          </h1>

          <p className="text-neutral-700 text-lg mb-8">
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
              className="px-5 py-2.5 bg-neutral-100 text-black rounded-xl font-medium hover:bg-neutral-200 transition"
            >
              Kontakt
            </a>
          </div>
        </div>

        {/* Optionales Bild */}
        <div className="flex justify-center md:justify-end">
          <img
            src="/about-hero.svg"
            alt="Digitale Immobiliensuche"
            className="w-full max-w-md"
          />
        </div>
      </div>
    </section>
  );
}
