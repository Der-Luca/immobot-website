export const metadata = {
  title: "Impressum",
  description: "Impressum von Immobot – Angaben gemäß § 5 DDG",
};

export default function ImpressumPage() {
  return (
    <section className="py-20 px-4">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold mb-8">Impressum</h1>

        <div className="space-y-6 text-neutral-700">
          <div>
            <h2 className="text-lg font-semibold text-black mb-2">
              Angaben gemäß § 5 DDG i.V.m. § 18 MStV
            </h2>
            <p>
              Christoph Denlöffel<br />
              Krankenhausstr. 4a<br />
              87634 Obergünzburg
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-black mb-2">
              Kontaktmöglichkeiten
            </h2>
            <p>
              Telefon: 0156/78315679<br />
              E-Mail: cd@immobot.pro
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-black mb-2">
              Umsatzsteuer-Identifikationsnummer
            </h2>
            <p>
              gemäß § 27a UStG: DE402662980
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-black mb-2">
              Informationspflicht nach § 36 VSBG
            </h2>
            <p>
              Wir sind weder verpflichtet noch bereit, am Streitbeilegungsverfahren teilzunehmen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
