// components/Platform.jsx
import Link from "next/link";
import Image from "next/image";

export default function Platform({
  kicker = "Plattformen",
  title = <>Über 40<br />Immobilienportale in<br />einem Tool</>,
  desc = "Wir durchforsten täglich die besten Immobilienportale für dich. Keine manuelle Suche mehr – nur relevante Angebote.",
  imageSrc = "/funktionenfotos/f1.jpg", // ersetze durch dein Bild
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
                href="https://app.immobot.pro/register"
                className="inline-flex items-center rounded-2xl bg-neutral-900 px-5 py-3 text-sm font-semibold text-white hover:bg-neutral-800"
              >
                Starten
              </Link>
             
            </div>
          </div>

          {/* right image card */}
          <div className="rounded-3xl  p-4 sm:p-6 lg:p-8">
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
