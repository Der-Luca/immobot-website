// components/FeatureFilters.jsx
import Link from "next/link";
import Image from "next/image";

function PartnerRow() {
  return (
    <div className="mt-4 flex flex-wrap items-center gap-5 opacity-90">
      <span className="inline-flex items-center gap-2 text-sm text-neutral-700">
        <Image src="/logos/webflow.svg" alt="Webflow" width={18} height={18} />
        Webflow
      </span>
      <span className="inline-flex items-center gap-2 text-sm text-neutral-700">
        <Image src="/logos/relume.svg" alt="Relume" width={18} height={18} />
        Relume
      </span>
      <span className="inline-flex items-center gap-2 text-sm text-neutral-700">
        <Image src="/logos/webflow.svg" alt="Webflow" width={18} height={18} />
        Webflow
      </span>
      <span className="inline-flex items-center gap-2 text-sm text-neutral-700">
        <Image src="/logos/relume.svg" alt="Relume" width={18} height={18} />
        Relume
      </span>
    </div>
  );
}

export default function Filters() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold text-neutral-600">Filter</p>
            <h2 className="mt-2 text-3xl font-semibold text-neutral-900 sm:text-4xl">
              Deine Suche, deine Regeln
            </h2>
            <p className="mt-3 max-w-xl text-neutral-700">
              Definiere präzise Suchkriterien und erhalte nur Angebote, die exakt
              deinen Vorstellungen entsprechen. Kein Ballast, nur Treffer.
            </p>
            <PartnerRow />

            <div className="mt-6 flex gap-3">
              <Link
                href="/features/filter"
                className="inline-flex items-center rounded-xl bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800"
              >
                Anpassen
              </Link>
              <Link
                href="/features"
                className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium text-neutral-900 ring-1 ring-neutral-300 hover:bg-neutral-50"
              >
                Mehr
                <svg width="16" height="16" viewBox="0 0 24 24" className="opacity-80">
                  <path d="M8 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="rounded-2xl bg-neutral-200/80 p-4 sm:p-6">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
              <Image src="/images/feature-filters.jpg" alt="Filter" fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
