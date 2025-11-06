// src/app/components/FAQ.jsx
export default function FAQ() {
  const faqs = [
    {
      question: "Welche Portale sind enthalten?",
      answer:
        "Wir durchsuchen über 40 führende Immobilienportale wie ImmoScout24, ImmoWelt, eBay Kleinanzeigen und viele regionale Anbieter.",
    },
    {
      question: "Kann ich jederzeit kündigen?",
      answer:
        "Ja, du kannst dein Abonnement monatlich und ohne Zusatzkosten kündigen. Keine Vertragsbindung.",
    },
    {
      question: "Wie oft werden neue Ergebnisse gesendet?",
      answer:
        "Täglich erhältst du eine E-Mail mit den neuesten Immobilienangeboten, die deinem Suchprofil entsprechen.",
    },
    {
      question: "Wie funktioniert die Personalisierung?",
      answer:
        "Du definierst deine Suchkriterien wie Preis, Größe, Ort, usw — und wir senden dir passende Angebote.",
    },
    {
      question: "Sind die Ergebnisse kostenlos?",
      answer:
        "Die Nutzung unseres Tools kostet 6,99 € pro Monat. Die Immobilienangebote selbst sind kostenlos.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-3">Fragen</h2>
        <p className="text-neutral-600 mb-12">
          Häufig gestellte Fragen zu immobot.pro
        </p>

        <div className="space-y-8 text-left">
          {faqs.map((faq, i) => (
            <div key={i}>
              <h3 className="font-semibold text-lg mb-1">{faq.question}</h3>
              <p className="text-neutral-700">{faq.answer}</p>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-semibold mb-2">Noch Fragen?</h3>
          <p className="text-neutral-600 mb-6">
            Statt direkt selbst Immobilien suchen zu lassen kannst du dir gerne
            noch Rundgang-Videos ansehen.
          </p>
          <button className="px-5 py-2 rounded-lg bg-neutral-100 hover:bg-neutral-200 text-sm font-medium transition">
            Videos entdecken
          </button>
        </div>
      </div>
    </section>
  );
}
