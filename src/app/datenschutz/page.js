export const metadata = {
  title: "Datenschutz",
  description: "Datenschutzhinweise von Immobot.",
};

export default function DatenschutzPage() {
  return (
    <section className="px-4 py-20">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-8 text-3xl font-bold text-neutral-950">Datenschutz</h1>

        <div className="space-y-8 text-sm leading-relaxed text-neutral-700">
          <div>
            <h2 className="mb-2 text-lg font-semibold text-black">Verantwortlicher</h2>
            <p>
              Christoph Denloeffel
              <br />
              Krankenhausstr. 4a
              <br />
              87634 Obergunzburg
              <br />
              E-Mail: cd@immobot.pro
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-lg font-semibold text-black">Cookies und lokale Speicherung</h2>
            <p>
              Wir nutzen technisch notwendige Speicherungen, damit die Website und die Registrierung
              funktionieren. Optionale Karten- und Komfortdienste werden erst geladen, wenn du dem
              zustimmst. Deine Auswahl kannst du jederzeit ueber die Cookie-Einstellungen aendern.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-lg font-semibold text-black">Kartenfunktionen</h2>
            <p>
              Kartenbereiche werden ohne Zustimmung nur als Bestandteil der Webseite dargestellt. Erst
              nach deiner Zustimmung werden externe Karten- und Geocoding-Dienste geladen. Dabei
              koennen technische Daten wie IP-Adresse, Browserinformationen und Standortanfragen an
              den jeweiligen Anbieter uebermittelt werden.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-lg font-semibold text-black">Kontakt</h2>
            <p>
              Bei Fragen zum Datenschutz kannst du dich jederzeit an die oben genannte E-Mail-Adresse
              wenden.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
