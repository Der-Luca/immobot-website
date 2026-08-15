const widerrufText = `Widerrufsbelehrung

Hinweis: Das nachfolgende Widerrufsrecht besteht nur, sofern der Kunde Verbraucher ist (§ 13 BGB).

Widerrufsrecht

Sie haben das Recht, binnen 14 Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen. Die Widerrufsfrist beträgt 14 Tage ab dem Tag des Vertragsschlusses.

Um Ihr Widerrufsrecht auszuüben, müssen Sie

Christoph Denlöffel
Krankenhausstr. 4a
87634 Obergünzburg
Telefon: 0156/78315679
E-Mail: cd@immobot.pro

mittels einer eindeutigen Erklärung (z.B. ein mit der Post versandter Brief oder E-Mail) über Ihren Entschluss, diesen Vertrag zu widerrufen, informieren. Sie können dafür das beigefügte Muster-Widerrufsformular verwenden, das jedoch nicht vorgeschrieben ist. Sie können Ihr Widerrufsrecht auch online unter www.immobot.pro ausüben. Wenn Sie diese Online-Funktion nutzen, übermitteln wir Ihnen auf einem dauerhaften Datenträger (z. B. durch eine E-Mail) unverzüglich eine Eingangsbestätigung mit Informationen zum Inhalt der Widerrufserklärung sowie dem Datum und der Uhrzeit ihres Eingangs. Zur Wahrung der Widerrufsfrist reicht es aus, dass Sie die Mitteilung über die Ausübung des Widerrufsrechts vor Ablauf der Widerrufsfrist absenden.

Folgen des Widerrufs

Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die wir von Ihnen erhalten haben einschließlich der Lieferkosten (mit Ausnahme der zusätzlichen Kosten, die sich daraus ergeben, dass Sie eine andere Art der Lieferung als die von uns angebotene, günstigste Standardlieferung gewählt haben), unverzüglich und spätestens binnen 14 Tagen ab dem Tag zurückzuzahlen, an dem die Mitteilung über Ihren Widerruf dieses Vertrags bei uns eingegangen ist. Für diese Rückzahlung verwenden wir dasselbe Zahlungsmittel, das Sie bei der ursprünglichen Transaktion eingesetzt haben, es sei denn, mit Ihnen wurde ausdrücklich etwas anderes vereinbart; in keinem Fall werden von Ihnen wegen dieser Rückzahlung Entgelte berechnet. Haben Sie verlangt, dass die Dienstleistungen während der Widerrufsfrist beginnen sollen, so haben Sie uns einen angemessenen Betrag zu zahlen, der dem Anteil der bis zu dem Zeitpunkt, zu dem Sie uns von der Ausübung des Widerrufsrechts hinsichtlich dieses Vertrags unterrichten, bereits erbrachten Dienstleistungen im Vergleich zum Gesamtumfang der im Vertrag vorgesehenen Dienstleistungen entspricht.

Besonderer Hinweis zum vorzeitigen Erlöschen des Widerrufsrechts

Das Widerrufsrecht erlischt bei einem Vertrag zur Erbringung von Dienstleistungen, wenn die Dienstleistung vollständig erbracht wurde und mit der Ausführung der Dienstleistung erst begonnen wurde, nachdem der Verbraucher dazu seine ausdrückliche Zustimmung gegeben hat und gleichzeitig seine Kenntnis davon bestätigt hat, dass er sein Widerrufsrecht bei vollständiger Vertragserfüllung durch den Unternehmer verliert.

In Kenntnis dieses Hinweises stimme ich ausdrücklich zu, dass die Ausführung der Dienstleistung(en) vor dem Ende der Widerrufsfrist beginnt.


Widerrufsformular

(Wenn Sie den Vertrag widerrufen wollen, dann füllen Sie bitte dieses Formular aus und senden Sie es zurück.)

Christoph Denlöffel
Krankenhausstr. 4a
87634 Obergünzburg
E-Mail: cd@immobot.pro

Hiermit widerrufe(n) ich/wir den von mir/uns abgeschlossenen Vertrag über die Erbringung der folgenden Dienstleistung:



Bestellt am: ___________________  erhalten am: ____________________

Name der/des Verbraucher(es): ________________________________

Anschrift der/des Verbraucher(es): ___________________________________________________________

________________________________            ____________________________
Unterschrift der/des Verbrauchers(in)        Datum`;

export const metadata = {
  title: "Widerrufsbelehrung",
  description: "Widerrufsbelehrung und Muster-Widerrufsformular von Immobot.pro.",
};

export default function WiderrufPage() {
  return (
    <section className="px-4 py-20">
      <div className="mx-auto max-w-4xl">
        <article className="rounded-lg border border-neutral-200 bg-white p-6 shadow-sm md:p-10">
          <div className="whitespace-pre-wrap text-sm leading-7 text-neutral-700">
            {widerrufText}
          </div>
        </article>
      </div>
    </section>
  );
}
