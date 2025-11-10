// components/home/HeroFixedLayer.jsx  (KEIN "use client" nötig)
import Link from "next/link";

export default function HeroFixedLayer({
  imageUrl = "/shutterstock_2580032997.jpg",
  title = "Hör auf, nach Immobilien zu suchen!",
  subtitle = "Lass die Objekte zu dir kommen – mit Immobot.",
  kicker = "IMMOBOT",
  ctaPrimary,   // { label: string, href: string }
  ctaSecondary, // { label: string, href: string }
  children,     // optionaler Content, der NACH dem Hero steht
}) {
  return (
    <section className="relative">
      {/* Fester Hintergrund über die ganze Seite */}
      <div aria-hidden className="fixed inset-0 -z-10">
        <img
          src={imageUrl}
          alt=""
          className="h-full w-full object-cover"
          draggable={false}
        />
        {/* dunkles Overlay für Lesbarkeit */}
        <div className="absolute inset-0 bg-black/50" />
        {/* dezenter Verlauf nach unten, damit der Folgecontent weich startet */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      {/* Hero-Viewport */}
      <div className="min-h-[90vh] flex items-center justify-center px-4 pt-24">
        <div className="max-w-3xl mx-auto text-center">

         
          {/* Titel + Subtitel in „Glass“-Card */}
          <div className="mt-4 rounded-2xl bg-black/30 backdrop-blur-sm px-6 py-8 md:px-10 md:py-12 shadow-xl ring-1 ring-white/10">
            <img
          src={"/logo.jpg"}
          alt=""
          className="h-28 w-28 m-auto"
          draggable={false}
        />
            <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-4 text-white/90 text-lg md:text-2xl">
                {subtitle}
              </p>
            )}

            {/* CTAs */}
            {(ctaPrimary || ctaSecondary) && (
              <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                {ctaPrimary && (
                  <Link
                    href={ctaPrimary.href}
                    className="inline-flex items-center justify-center rounded-xl bg-white text-black px-5 py-3 font-medium hover:bg-white/90 transition"
                  >
                    {ctaPrimary.label}
                  </Link>
                )}
                {ctaSecondary && (
                  <Link
                    href={ctaSecondary.href}
                    className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-transparent px-5 py-3 font-medium text-white hover:bg-white/10 transition"
                  >
                    {ctaSecondary.label}
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Folgecontent (scrollt über dem fixen Bild) */}
      <div className="mx-auto max-w-4xl px-4 py-16 space-y-8">
        {children}
      </div>
    </section>
  );
}
