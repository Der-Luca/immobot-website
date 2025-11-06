// src/app/ueber-uns/components/History.jsx
"use client";

const milestones = [
  {
    year: "2025",
    title: "Start von immobot",
    text:
      "Wir starteten mit der Vision, die Immobiliensuche zu revolutionieren. Unser erstes Konzept entstand in einer kleinen Garage.",
    ctas: [{ label: "Button", href: "/funktionen" }, { label: "Button", href: "/kontakt", arrow: true }],
  },
  {
    year: "2025",
    title: "Erste Nutzer",
    text:
      "Wir gewannen unsere ersten 100 Nutzer und sammelten wertvolles Feedback für unsere Plattform.",
    ctas: [{ label: "Button", href: "/preise" }, { label: "Button", href: "/demo", arrow: true }],
  },
  {
    year: "2025",
    title: "Erweiterung der Plattformen",
    text:
      "Unser Netzwerk wuchs auf über 40 Immobilienportale. Die Suche wurde noch einfacher und umfassender.",
    ctas: [{ label: "Button", href: "/funktionen" }, { label: "Button", href: "/status", arrow: true }],
  },
  {
    year: "2026",
    title: "Kontinuierliche Innovation",
    text:
      "Wir entwickeln unsere KI-Technologie weiter, um noch präzisere Suchergebnisse zu liefern.",
    ctas: [{ label: "Button", href: "/blog" }, { label: "Button", href: "/kontakt", arrow: true }],
  },
];

export default function History() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <p className="text-sm font-medium text-neutral-800">Geschichte</p>
        <h2 className="mt-2 text-4xl md:text-5xl font-bold leading-tight">
          Unsere Reise und wichtige <br className="hidden md:block" />
          Meilensteine
        </h2>
        <p className="mt-4 text-neutral-600 max-w-3xl">
          Die Geschichte von immobot.pro ist geprägt von Innovation und Leidenschaft
          für digitale Lösungen.
        </p>

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
