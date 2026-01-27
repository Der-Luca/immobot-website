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
  primaryHref = "https://app.immobot.pro/register",
  secondaryHref = "/funktionen",
  primaryLabel = "Starten",
  secondaryLabel = "Mehr erfahren",
}) {
  return (
    <section
      className="relative"
      style={{
        backgroundImage: "url(/preisefotos/p1.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center top",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <p className="text-sm font-semibold text-neutral-100">{kicker}</p>

        <div className="mt-6 grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
          {/* Headline */}
          <h1 className="text-5xl font-semibold leading-[0.95] text-white sm:text-6xl md:text-7xl lg:text-8xl">
            {title}
          </h1>

          {/* Copy + CTAs */}
          <div className="max-w-2xl">
            <p className="text-lg leading-8 text-neutral-100 sm:text-xl">
              {blurb}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href={primaryHref}
                className="inline-flex items-center rounded-2xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                {primaryLabel}
              </Link>
              <Link
                href={secondaryHref}
                className="inline-flex items-center rounded-2xl bg-white/90 px-5 py-3 text-sm font-semibold text-neutral-900 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-200"
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
