// components/FunktionenHero.jsx
import Link from "next/link";

export default function FunktionenHero() {
  return (
    <section className="relative bg-neutral-50">
      {/* linke Akzentlinie wie im Mockup */}
      <span className="pointer-events-none absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-sky-500 to-indigo-500" />

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <p className="text-sm font-semibold text-neutral-700">Funktionen</p>

        <div className="mt-6 grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
          {/* Headline */}
          <h1 className="text-5xl font-semibold leading-[0.95] text-neutral-900 sm:text-6xl md:text-7xl lg:text-8xl">
            Unsere<br />Funktionen
          </h1>

          {/* Copy + CTAs */}
          <div className="max-w-2xl">
            <p className="text-lg leading-8 text-neutral-800 sm:text-xl">
              Entdecke die wahrscheinlich intelligente Lösung für deine Immobiliensuche.
              Spare Zeit und finde genau das Objekt, das zu dir passt.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/app"
                className="inline-flex items-center rounded-2xl bg-sky-600 px-5 py-3 text-sm font-semibold text-white hover:bg-sky-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
              >
                Starten
              </Link>

              <Link
                href="#features"
                className="inline-flex items-center rounded-2xl bg-neutral-200 px-5 py-3 text-sm font-semibold text-neutral-900 hover:bg-neutral-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400"
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
