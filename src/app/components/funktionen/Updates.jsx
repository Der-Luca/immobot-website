// components/FeatureUpdates.jsx
import Link from "next/link";
import Image from "next/image";


export default function Updates() {
  return (
    <section className="bg-sky-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          {/* Bild links */}
          <div className="order-last rounded-2xl sm:p-6 lg:order-first">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
              <Image src="/funktionenfotos/f3.jpg" alt="Updates" fill className="object-cover" />
            </div>
          </div>

          {/* Text rechts */}
          <div>
            <p className="text-sm font-semibold text-neutral-600">Zeit</p>
            <h2 className="mt-4 text-5xl font-semibold leading-[0.95] text-neutral-900 sm:text-6xl">
              Tägliche Updates ohne Aufwand
            </h2>
            <p className="mt-3 max-w-xl text-neutral-700">
              Vergiss stundenlange Recherchen. Wir liefern die besten
              Immobilienangebote direkt in dein Postfach – schnell, einfach,
              zuverlässig.
            </p>
           {/*<PartnerRow />*/ } 

            <div className="mt-6 flex gap-3">
              <Link
                href="https://app.immobot.pro/register"
                className="inline-flex items-center rounded-xl bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800"
              >
                Starten
              </Link>
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
