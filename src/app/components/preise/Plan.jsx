// components/Plan.jsx
import Link from "next/link";

export default function Plan({
  kicker = "Preise",
  title = "Unser Plan",
  subtitle = "Alle Immobilienangebote in einer einfachen Lösung",
  checkoutHref = "https://app.immobot.pro/register",
}) {
  return (
    <section className="bg-neutral-50 py-16">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <p className="text-sm font-semibold text-neutral-700">{kicker}</p>
        <h2 className="mt-4 text-5xl font-semibold leading-[0.95] text-neutral-900 sm:text-6xl">
          {title}
        </h2>
        <p className="mt-2 text-neutral-600">{subtitle}</p>

        {/* Card */}
        <div className="mx-auto mt-8 w-full rounded-2xl bg-white p-6 text-left ring-1 ring-black/5 sm:p-8">
          <div className="text-neutral-900">
            <div className="text-base font-semibold">Standard plan</div>
            <div className="text-sm text-neutral-600">Perfekt für Immobiliensucher</div>
          </div>

          <hr className="my-6 border-neutral-200" />

          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="flex flex-wrap items-end gap-x-2 gap-y-1">
                <span className="text-5xl font-semibold tracking-tight text-neutral-900 sm:text-6xl">
                  14,99 €
                </span>
                <span className="pb-1 text-sm font-semibold text-neutral-700">
                  / Monat, inkl. USt.
                </span>
              </div>
              <p className="mt-2 text-sm text-neutral-600">
                Zahlungsarten: Kreditkarte, Apple Pay, Klarna, Amazon Pay, PayPal.
              </p>
            </div>

            <Link
              href={checkoutHref}
              className="inline-flex w-full items-center justify-center rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-700 sm:w-auto"
            >
              Jetzt loslegen
            </Link>
          </div>

          <hr className="my-6 border-neutral-200" />

          <ul className="space-y-3 text-sm text-neutral-800">
            {[
              "Über 40 Plattformen",
              "Tägliche E-Mail-Updates",
              "Individuelle Filter",
              "Keine versteckten Gebühren",
              "Einfache Kündigung",
            ].map((f) => (
              <li key={f} className="flex items-start gap-2">
                <svg
                  className="mt-0.5 h-4 w-4 flex-none text-sky-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path d="M20 6 9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <span>{f}</span>
              </li>
            ))}
          </ul>

          <div className="mt-4 text-xs text-neutral-500">
            Monatlich kündbar. Keine versteckten Gebühren.
          </div>
        </div>
      </div>
    </section>
  );
}
