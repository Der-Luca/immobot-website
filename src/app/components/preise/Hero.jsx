// components/PricingHero.jsx
import Link from "next/link";

export default function Hero({
  kicker = "Preise",
  title = (
    <>
      Einfache und<br />transparente<br />Preisgestaltung
    </>
  ),
  blurb = "Finde deine Traumimmobilie ohne versteckte Kosten. Wir machen die Suche einfach und direkt.",
  primaryHref = "/app",
  secondaryHref = "/pricing#details",
  primaryLabel = "Starten",
  secondaryLabel = "Details",
}) {
  return (
    <section className="bg-neutral-50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start">
          {/* Left: Headline */}
          <div>
            <p className="text-sm font-semibold text-neutral-700">{kicker}</p>
            <h1 className="mt-4 text-5xl font-semibold leading-[0.95] text-neutral-900 sm:text-6xl md:text-7xl lg:text-8xl">
              {title}
            </h1>
          </div>

          {/* Right: copy + CTAs */}
          <div className="max-w-2xl">
            <p className="text-lg leading-8 text-neutral-800 sm:text-xl">
              {blurb}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href={primaryHref}
                className="inline-flex items-center rounded-2xl bg-sky-600 px-5 py-3 text-sm font-semibold text-white hover:bg-sky-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
              >
                {primaryLabel}
              </Link>
              <Link
                href={secondaryHref}
                className="inline-flex items-center rounded-2xl bg-neutral-200 px-5 py-3 text-sm font-semibold text-neutral-900 hover:bg-neutral-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400"
              >
                {secondaryLabel}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
