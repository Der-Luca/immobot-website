// src/app/components/Testimonials.jsx
export default function Testimonials() {
  const testimonials = [
    {
      name: "Anna Müller",
      role: "Erstkäuferin, München",
      text: "Die tägliche E-Mail mit passenden Angeboten spart mir so viel Zeit. Absolute Empfehlung!",
    },
    {
      name: "Thomas Weber",
      role: "Kapitalanleger, Hamburg",
      text: "Dank der präzisen Filter habe ich genau die Wohnung gefunden, die ich gesucht habe.",
    },
    {
      name: "Julia Hoffmann",
      role: "Mieterin, Köln",
      text: "Endlich muss ich nicht mehr 10 verschiedene Portale durchsuchen. Immobot macht alles auf einmal!",
    },
    {
      name: "Markus Bauer",
      role: "Familienvater, Frankfurt",
      text: "Innerhalb von 2 Wochen hatte ich meine Traumwohnung gefunden. Die Benachrichtigungen waren Gold wert.",
    },
    {
      name: "Sarah Klein",
      role: "Studentin, Berlin",
      text: "Super einfach zu bedienen und die Ergebnisse sind immer top. Kann ich nur weiterempfehlen!",
    },
    {
      name: "Peter Schneider",
      role: "Immobilieninvestor, Stuttgart",
      text: "Als Investor spare ich mit Immobot jeden Tag mehrere Stunden Recherchearbeit.",
    },
  ];

  return (
    <section className="bg-neutral-50 py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-semibold leading-[0.95] text-neutral-900 sm:text-6xl">
          Was unsere Nutzer sagen
        </h2>
        <p className="text-neutral-600 mt-3 mb-12">
          Echte Erfahrungen von Menschen, die immobot.pro nutzen
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-200 text-left"
            >
              <div className="flex mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="text-yellow-500 text-xl">★</span>
                ))}
              </div>
              <p className="text-neutral-800 mb-4">„{t.text}"</p>
              <div>
                <p className="font-semibold text-neutral-900">{t.name}</p>
                <p className="text-sm text-neutral-600">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
