export default function Vision() {

  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Überschrift */}
        <p className="text-sm font-medium text-neutral-800 mb-3">Vision</p>
        <h2 className="mt-4 text-5xl font-semibold leading-[0.95] text-neutral-900 sm:text-6xl">
          Zeit sparen und Immobilien finden,<br />
          die wirklich interessant sind.
        </h2>
        <p className="text-neutral-600 max-w-2xl mx-auto mb-10">
          Wir machen die Immobiliensuche einfach und effizient.
          Täglich erhalten unsere Nutzer maßgeschneiderte Angebote direkt in ihr Postfach.
        </p>

        {/* Bild */}
        <div className="mt-8 rounded-2xl overflow-hidden">
          <img
            src="/ueber-uns/ue1.jpg"
            alt="Immobot Vision"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}
