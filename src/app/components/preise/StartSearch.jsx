// components/StartSearch.jsx
import Link from "next/link";

export default function StartSearch({
  title = (
    <>
      Starte deine Suche:<br />
      Finde deine<br />
      Traumimmobilie
    </>
  ),
  subtitle = "Entdecke die einfachste Art, deine perfekte Immobilie zu finden. Keine versteckten Kosten.",
  primaryHref = "/app",
  secondaryHref = "/features",
  primaryLabel = "Starten",
  secondaryLabel = "Mehr erfahren",
}) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-24">
        <h1 className="mx-auto max-w-5xl text-5xl font-semibold leading-[0.95] text-neutral-900 sm:text-6xl md:text-7xl">
          {title}
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-neutral-700 sm:text-lg">
          {subtitle}
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
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
    </section>
  );
}
