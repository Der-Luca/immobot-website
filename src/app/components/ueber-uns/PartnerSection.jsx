// components/PartnersSection.jsx
import Link from "next/link";
import Image from "next/image";

const PARTNERS = [
  { name: "Webflow", logo: "/logos/webflow.svg" },
  { name: "Webflow", logo: "/logos/webflow.svg" },
  { name: "Relume",  logo: "/logos/relume.svg"  },
  { name: "Relume",  logo: "/logos/relume.svg"  },
  { name: "Webflow", logo: "/logos/webflow.svg" },
  { name: "Webflow", logo: "/logos/webflow.svg" },
  { name: "Relume",  logo: "/logos/relume.svg"  },
  { name: "Relume",  logo: "/logos/relume.svg"  },
];

export default function PartnersSection() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* 2-Spalten-Layout ab lg */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
          {/* Left: Copy + CTA */}
          <div>
            <h2 className="text-4xl font-semibold tracking-tight text-neutral-900">
              Unsere vertrauenswürdigen <br className="hidden sm:block" />
              Partner
            </h2>
            <p className="mt-6 max-w-xl text-neutral-600">
              Wir arbeiten mit führenden Immobilienplattformen zusammen,
              um dir die beste Suche zu ermöglichen.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/partners"
                className="inline-flex items-center rounded-xl bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800"
              >
                Partner entdecken
              </Link>
              <Link
                href="/about/partners"
                className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium text-neutral-900 ring-1 ring-neutral-300 hover:bg-neutral-50"
              >
                Mehr erfahren
                <svg width="16" height="16" viewBox="0 0 24 24" className="opacity-80">
                  <path d="M8 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* Right: Partner grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {PARTNERS.map((p, i) => (
              <div
                key={`${p.name}-${i}`}
                className="flex h-24 items-center justify-center rounded-2xl border border-neutral-200 bg-neutral-50 px-6 transition hover:border-neutral-300"
              >
                {/* Logo + Name */}
                <div className="flex items-center gap-3">
                  {/* Wenn du (noch) keine SVGs hast, ersetze <Image> durch ein <span> mit Text */}
                  {p.logo ? (
                    <Image
                      src={p.logo}
                      alt={`${p.name} Logo`}
                      width={28}
                      height={28}
                      className="h-7 w-7 object-contain"
                    />
                  ) : (
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-neutral-200 text-xs font-semibold">
                      {p.name[0]}
                    </span>
                  )}
                  <span className="text-lg font-semibold text-neutral-900">
                    {p.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
