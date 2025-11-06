// components/Plan.jsx
"use client";
import { useState, useMemo } from "react";
import Link from "next/link";

/** Props:
 * monthly={6.99} yearly={59.9} (optional)
 * checkoutHref="/checkout"
 */
export default function Plan({
  kicker = "Preise",
  title = "Unser Plan",
  subtitle = "Alle Immobilienangebote in einer einfachen Lösung",
  monthly = 6.99,
  yearly = 59.9,
  checkoutHref = "/checkout",
}) {
  const [cycle, setCycle] = useState("monthly"); // "monthly" | "yearly"

  const price = useMemo(() => (cycle === "monthly" ? monthly : yearly), [cycle, monthly, yearly]);
  const label = cycle === "monthly" ? "Monatlich" : "Jährlich";

  const formatPrice = (n) =>
    new Intl.NumberFormat("de-DE", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(n);

  return (
    <section className="bg-neutral-50 py-16">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <p className="text-sm font-semibold text-neutral-700">{kicker}</p>
        <h2 className="mt-2 text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl">
          {title}
        </h2>
        <p className="mt-2 text-neutral-600">{subtitle}</p>

        {/* Toggle */}
        <div className="mt-6 inline-flex rounded-xl bg-neutral-200 p-1">
          <button
            type="button"
            onClick={() => setCycle("monthly")}
            className={`rounded-lg px-3 py-1.5 text-sm font-medium ${
              cycle === "monthly" ? "bg-white shadow text-neutral-900" : "text-neutral-700"
            }`}
          >
            Monatlich
          </button>
          <button
            type="button"
            onClick={() => setCycle("yearly")}
            className={`rounded-lg px-3 py-1.5 text-sm font-medium ${
              cycle === "yearly" ? "bg-white shadow text-neutral-900" : "text-neutral-700"
            }`}
          >
            Jährlich
          </button>
        </div>

        {/* Card */}
        <div className="mx-auto mt-8 w-full rounded-2xl bg-white p-6 text-left ring-1 ring-black/5 sm:p-8">
          <div className="text-neutral-900">
            <div className="text-base font-semibold">Standard plan</div>
            <div className="text-sm text-neutral-600">Perfekt für Immobiliensucher</div>
          </div>

          <hr className="my-6 border-neutral-200" />

          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-5xl font-semibold tracking-tight text-neutral-900 sm:text-6xl">
              {formatPrice(price)} €
            </div>

            <Link
              href={checkoutHref + (cycle ? `?cycle=${cycle}` : "")}
              className="inline-flex w-full items-center justify-center rounded-lg bg-sky-600 px-4 py-3 text-sm font-semibold text-white hover:bg-sky-700 sm:w-auto"
            >
              Jetzt beginnen
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
            {label} – jederzeit kündbar. Preise inkl. MwSt., falls anwendbar.
          </div>
        </div>
      </div>
    </section>
  );
}
