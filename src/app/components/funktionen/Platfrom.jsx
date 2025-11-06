// components/Platform.jsx
import Link from "next/link";
import Image from "next/image";

export default function Platform({
  kicker = "Plattformen",
  title = <>Über 40<br />Immobilienportale in<br />einem Tool</>,
  desc = "Wir durchforsten täglich die besten Immobilienportale für dich. Keine manuelle Suche mehr – nur relevante Angebote.",
  imageSrc = "/images/platforms.jpg", // ersetze durch dein Bild
  imageAlt = "Immobot Plattformen",
}) {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2">
          {/* left content */}
          <div>
            <p className="text-sm font-semibold text-neutral-700">{kicker}</p>
            <h2 className="mt-4 text-5xl font-semibold leading-[0.95] text-neutral-900 sm:text-6xl">
              {title}
            </h2>
            <p className="mt-6 max-w-xl text-neutral-700">{desc}</p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/features/platforms"
                className="inline-flex items-center rounded-2xl bg-neutral-900 px-5 py-3 text-sm font-semibold text-white hover:bg-neutral-800"
              >
                Details
              </Link>
              <Link
                href="/features"
                className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold text-neutral-900 ring-1 ring-neutral-300 hover:bg-neutral-50"
              >
                Mehr
                <svg width="16" height="16" viewBox="0 0 24 24" className="opacity-80">
                  <path d="M8 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2" />
                </svg>
              </Link>
            </div>
          </div>

          {/* right image card */}
          <div className="rounded-3xl bg-neutral-200/80 p-4 sm:p-6 lg:p-8">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover"
                priority={false}
                sizes="(max-width:1024px) 100vw, 640px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
