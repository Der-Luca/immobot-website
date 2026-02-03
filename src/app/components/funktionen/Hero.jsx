// components/FunktionenHero.jsx
import Link from "next/link";

export default function FunktionenHero() {
  return (
    <section
      className="relative bg-neutral-50"
      style={{
        backgroundImage: "url(/funktionenfotos/f0.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* leichte Overlay-Ebene für bessere Lesbarkeit (optional, kannst du rauswerfen) */}
      <div className="absolute inset-0 bg-black/20" />

      {/* linke Akzentlinie wie im Mockup */}
      <span className="pointer-events-none absolute left-0 top-0 z-20 h-full w-[3px] bg-gradient-to-b from-sky-500 to-indigo-500" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <p className="text-sm font-semibold text-neutral-100">Funktionen</p>

        <div className="mt-6 grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
          {/* Headline */}
          <h1 className="text-5xl font-semibold leading-[0.95] text-white sm:text-6xl md:text-7xl lg:text-8xl">
            Unsere
            <br />
            Funktionen
          </h1>

          {/* Copy + CTAs */}
          <div className="max-w-2xl">
            <p className="text-lg leading-8 text-neutral-100 sm:text-xl">
              Entdecke die wahrscheinlich intelligente Lösung für deine Immobiliensuche.
              Spare Zeit und finde genau das Objekt, das zu dir passt.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="https://app.immobot.pro/register"
                className="inline-flex items-center rounded-2xl bg-sky-600 px-5 py-3 text-sm font-semibold text-white hover:bg-sky-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
              >
                Starten
              </Link>

              <Link
                href="#features"
                className="inline-flex items-center rounded-2xl bg-white/90 px-5 py-3 text-sm font-semibold text-neutral-900 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-200"
              >
                Mehr erfahren
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
