import Image from "next/image";
export default function Vision() {

  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Überschrift */}
        <p className="text-sm font-medium text-neutral-800 mb-3">Vision</p>
        <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Zeit sparen und Immobilien finden,<br />
          die wirklich interessant sind.
        </h2>
        <p className="text-neutral-600 max-w-2xl mx-auto mb-10">
          Wir machen die Immobiliensuche einfach und effizient. 
          Täglich erhalten unsere Nutzer maßgeschneiderte Angebote direkt in ihr Postfach.
        </p>

        {/* Logos */}
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 mb-10">
          {["Webflow", "Relume", "Webflow", "Relume"].map((logo, i) => (
            <div
              key={i}
              className="h-10 w-28 bg-neutral-100 border rounded-lg grid place-items-center text-sm text-neutral-500"
            >
              {logo}
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <a
            href="/funktionen"
            className="px-5 py-2.5 bg-neutral-900 text-white rounded-xl font-medium hover:bg-neutral-800 transition"
          >
            Mehr erfahren
          </a>
          <a
            href="/kontakt"
            className="px-5 py-2.5 bg-neutral-100 text-black rounded-xl font-medium hover:bg-neutral-200 transition flex items-center gap-2"
          >
            Kontaktieren
            <span className="text-lg">›</span>
          </a>
        </div>

        {/* Platzhalter-Bild */}
        <div className="w-full ">
          <img src="/ueberunsfotos/ue1.jpg" className="rounded-xl" />
        </div>
      </div>
    </section>
  );
}
