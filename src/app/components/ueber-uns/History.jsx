// src/app/ueber-uns/components/History.jsx
"use client";

const milestones = [
  {
    year: "Q4 2024",
    title: "Start von Immobot",
    text:
      "Wir starten mit einer ersten Vision, die Immobiliensuche entspannter und einfacher zu machen. Unser Konzept beginnt zu wachsen"
  },
  {
    year: "Q1-Q2 2025",
    title: "Erste Anläufe",
    text:
      "Wir entwickeln verschiedene Ansätze und Lösungen zur idealen Immobiliensuche und erstellen erste Programmierungen"
  },
  {
    year: "Q3-Q4 2025",
    title: "Systemumzug und Testphase",
    text:
      "Wir ziehen vom ersten System auf ein wesentlich charmanteres System mit deutlich mehr Möglichkeiten um und testen alle Prozesse mit ersten Testkunden, mit deren Feedback entwickeln wir kontinuierlich weiter. Unser Netzwerk wächst auf über 40 Immobilienportale."
  },
  {
    year: "Q1 2026",
    title: "Finalisierung und Go Live",
    text:
      "Die Website erreicht ihren aktuellen Stand, die Plattform wird finalisiert. Start des Marketings"
  },
];

export default function History() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <p className="text-sm font-medium text-neutral-800">Geschichte</p>
        <h2 className="mt-4 text-5xl font-semibold leading-[0.95] text-neutral-900 sm:text-6xl">
          Unsere Reise und wichtige <br className="hidden md:block" />
          Meilensteine
        </h2>
        <p className="mt-4 text-neutral-600 max-w-3xl">
          Die Geschichte von immobot.pro ist geprägt von Innovation und Leidenschaft
          für digitale Lösungen.
        </p>

        {/* Bild */}
        <div className="mt-8 rounded-2xl overflow-hidden">
          <img
            src="/ueber-uns/ue2.jpg"
            alt="Immobot Geschichte"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Timeline */}
        <div className="relative mt-12">
          {/* Vertical line */}
          <div
            aria-hidden="true"
            className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-neutral-200"
          />

          <ol className="space-y-10 md:space-y-12 relative">
            {milestones.map((m, i) => (
              <li key={i} className="relative pl-14 md:pl-20">
                {/* Dot */}
                <span
                  aria-hidden="true"
                  className="absolute left-5 md:left-7 top-8 -translate-y-1/2 h-2.5 w-2.5 rounded-full bg-neutral-900"
                />

                {/* Card */}
                <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 md:p-8">
                  <div className="text-2xl font-semibold tracking-tight">{m.year}</div>
                  <h3 className="mt-2 text-xl md:text-2xl font-semibold">{m.title}</h3>
                  <p className="mt-3 text-neutral-700">{m.text}</p>

                  {m.ctas?.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-3">
                      {m.ctas.map((c, idx) => (
                        <a
                          key={idx}
                          href={c.href}
                          className="px-3 py-1.5 rounded-lg bg-neutral-100 hover:bg-neutral-200 text-sm font-medium inline-flex items-center gap-1 transition"
                        >
                          {c.label}
                          {c.arrow && <span aria-hidden>›</span>}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
