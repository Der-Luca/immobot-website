// components/home/HeroFixedLayer.jsx  (KEIN "use client")
import Link from "next/link";
import Image from "next/image";

export default function HeroFixedLayer({
  imageUrl = "/shutterstock_2580032997.png",
  title = "Hör auf, nach Immobilien zu suchen!",
  subtitle = "Lass die Objekte zu dir kommen – mit Immobot.",
  kicker = "IMMOBOT",
  ctaPrimary,
  ctaSecondary,
  children,
}) {
  return (
    <section className="relative">
      
      {/* FIXED Hintergrund – aber performant */}
      <div aria-hidden className="fixed-bg fixed inset-0 -z-10">
        <Image
          src={imageUrl}
          alt=""
          fill
          priority
          quality={80}
          className="object-cover"
          draggable={false}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Verlauf nach unten */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      {/* Hero-Viewport */}
      <div className="min-h-[90vh] flex items-center justify-center px-4 pt-24">
        <div className="max-w-3xl mx-auto text-center">

          {/* Logo */}
          <img
            src="/logo.jpg"
            alt=""
            className="h-28 w-28 m-auto"
            draggable={false}
          />

          {/* Kicker */}
          {kicker && (
            <p className="mt-4 text-xs font-semibold tracking-[0.2em] text-white/70 uppercase">
              {kicker}
            </p>
          )}

          {/* Titel */}
          <h1 className="mt-3 text-white text-4xl md:text-6xl font-bold leading-tight">
            {title}
          </h1>

          {/* Untertitel */}
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
                  className="inline-flex items-center justify-center rounded-xl border border-white/40 bg-transparent px-5 py-3 font-medium text-white hover:bg-white/10 transition"
                >
                  {ctaSecondary.label}
                </Link>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Folgecontent – scrollt sauber über dem Bild */}
      <div className="mx-auto max-w-4xl px-4 py-16 space-y-8">
        {children}
      </div>
    </section>
  );
}
