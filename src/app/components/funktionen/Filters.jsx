// components/FeatureFilters.jsx
import Link from "next/link";
import Image from "next/image";



export default function Filters() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold text-neutral-600">Filter</p>
            <h2 className="mt-4 text-5xl font-semibold leading-[0.95] text-neutral-900 sm:text-6xl">
              Deine Suche, deine Regeln
            </h2>
            <p className="mt-3 max-w-xl text-neutral-700">
              Definiere präzise Suchkriterien und erhalte nur Angebote, die exakt
              deinen Vorstellungen entsprechen. Kein Ballast, nur Treffer.
            </p>
   

            <div className="mt-6 flex gap-3">
              <Link
                href="https://app.immobot.pro/register"
                className="inline-flex items-center rounded-xl bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800"
              >
                Starten
              </Link>
            
            </div>
          </div>

          <div className="rounded-2xl p-4 sm:p-6">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
              <Image src="/funktionenfotos/f2.jpg" alt="Filter" fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
