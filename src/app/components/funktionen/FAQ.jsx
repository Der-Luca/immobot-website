// components/FAQ.jsx
import Link from "next/link";

const DEFAULT_FAQS = [
  {
    q: "Welche Portale sind enthalten?",
    a: "Wir durchsuchen über 40 führende Immobilienportale wie ImmoScout24, ImmoWelt, eBay Kleinanzeigen und viele regionale Anbieter.",
  },
  {
    q: "Kann ich jederzeit kündigen?",
    a: "Ja, du kannst dein Abonnement monatlich und ohne Zusatzkosten kündigen. Keine Vertragsbindung.",
  },
  {
    q: "Wie oft werden neue Ergebnisse gesendet?",
    a: "Täglich erhältst du eine E-Mail mit den neuesten Immobilienangeboten, die deinem Suchprofil entsprechen.",
  },
  {
    q: "Wie funktioniert die Personalisierung?",
    a: "Du definierst deine Suchkriterien wie Preis, Größe, Ort, usw — und wir senden dir passende Angebote.",
  },
  {
    q: "Sind die Ergebnisse kostenlos?",
    a: "Die Nutzung unseres Tools kostet 14,99 € pro Monat. Die Immobilienangebote selbst sind kostenlos.",
  },
  {
    q: "Warum können viele Filter zu schlechteren (weniger) Ergebnissen führen?",
    a: "Die tägliche Trefferquote (Anzahl der Ergebnisse) hängt sehr stark an der Qualität des jeweiligen Angebots. Werden Angebote auf einem der bei uns angeschlossenen Portale unzureichend, z.B. mit fehlenden oder fehlerhaften Parametern eingestellt, können wir leider auch nur diese Parameter nutzen/abfragen. Je nach definierten Filtern kann dies zu weniger Treffern führen. Leider haben wir hierauf keinen Einfluss.",
  },
];

export default function FAQ({
  title = "Fragen",
  subtitle = "Häufig gestellte Fragen zu immobot.pro",
  faqs = DEFAULT_FAQS,
  ctaTitle = "Noch Fragen?",
  ctaSubtitle = "Wir helfen dir gerne weiter.",
  ctaHref = "/kontakt",
  ctaLabel = "Kontakt",
}) {
  return (
    <section className="bg-neutral-50 py-16 sm:py-20">
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6">
        {/* Header */}
        <div className="text-center">
          <h2 className="tmt-4 text-5xl font-semibold leading-[0.95] text-neutral-900 sm:text-6xl">
            {title}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-neutral-600">
            {subtitle}
          </p>
        </div>

        {/* FAQ list */}
        <div className="mt-12 space-y-10">
          {faqs.map((item, i) => (
            <div key={i} className="text-neutral-800">
              <h3 className="text-sm font-semibold text-neutral-900">
                {item.q}
              </h3>
              <p className="mt-3 text-[15px] leading-7 text-neutral-700">
                {item.a}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 rounded-2xl bg-white p-8 text-center ring-1 ring-black/5">
          <h4 className="text-2xl font-semibold text-neutral-900">
            {ctaTitle}
          </h4>
          <p className="mt-2 text-sm text-neutral-600">{ctaSubtitle}</p>
          <Link
            href={ctaHref}
            className="mt-5 inline-flex items-center rounded-xl border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-neutral-50"
          >
            {ctaLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
