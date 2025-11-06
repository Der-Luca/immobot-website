// components/Contact.jsx
"use client";
import Link from "next/link";
import Image from "next/image";

const MailIcon = (props) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2zm0 2l8 5 8-5" fill="none" stroke="currentColor" strokeWidth="2"/>
  </svg>
);
const PhoneIcon = (props) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.7.6 2.6a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.5-1.1a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6A2 2 0 0 1 22 16.9z" fill="none" stroke="currentColor" strokeWidth="2"/>
  </svg>
);
const PinIcon = (props) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path d="M12 22s7-5.3 7-12a7 7 0 0 0-14 0c0 6.7 7 12 7 12z" fill="none" stroke="currentColor" strokeWidth="2"/>
    <circle cx="12" cy="10" r="3" fill="none" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

export default function Contact() {
  const onSubmit = (e) => {
    e.preventDefault();
    // hier später API-Aufruf einbauen
    alert("Danke! Wir melden uns bei dir.");
  };

  return (
    <main className="bg-neutral-50">
      {/* HERO */}
      <section className="border-b border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="text-sm font-semibold text-neutral-700">Kontakt</p>
              <h1 className="mt-2 text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl">
                Kontaktiere uns
              </h1>
            </div>
            <div className="max-w-xl lg:ml-auto">
              <p className="text-sm text-neutral-700">
                Wir sind dein direkter Draht zum immobot.pro&nbsp;Support. Schnell,
                unkompliziert und persönlich.
              </p>
              <div className="mt-3 flex gap-2">
                <Link
                  href="#form"
                  className="rounded-lg bg-sky-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-sky-700"
                >
                  Senden
                </Link>
                <Link
                  href="/"
                  className="rounded-lg bg-neutral-200 px-3 py-1.5 text-xs font-semibold text-neutral-900 hover:bg-neutral-300"
                >
                  Zurück
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DETAILS */}
      <section className="bg-neutral-50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-neutral-700">Details</p>
          <h2 className="mt-2 text-3xl font-semibold text-neutral-900">Unsere Kontaktdaten</h2>
          <p className="mt-2 max-w-2xl text-sm text-neutral-700">
            Wir sind für euch erreichbar und unterstützen gerne. Meist reicht eine kurze Nachricht –
            viele Antworten findest du auch in unseren Video-Guides.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[360px_1fr]">
            {/* left: info list */}
            <div className="space-y-8">
              <div className="flex items-start gap-3">
                <MailIcon className="mt-1 h-6 w-6 text-neutral-900" />
                <div>
                  <h3 className="text-base font-semibold text-neutral-900">E-Mail</h3>
                  <p className="text-sm text-neutral-600">E-Mail Kundenservice</p>
                  <p className="mt-1 font-medium text-neutral-900">support@immobot.pro</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <PhoneIcon className="mt-1 h-6 w-6 text-neutral-900" />
                <div>
                  <h3 className="text-base font-semibold text-neutral-900">Telefon</h3>
                  <p className="text-sm text-neutral-600">+49 30 901820</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <PinIcon className="mt-1 h-6 w-6 text-neutral-900" />
                <div>
                  <h3 className="text-base font-semibold text-neutral-900">Adresse</h3>
                  <p className="text-sm text-neutral-600">Beispielstraße 1, 10115 Berlin</p>
                  <Link href="/anfahrt" className="mt-1 inline-block text-sm font-medium text-neutral-900 underline-offset-4 hover:underline">
                    Anfahrt
                  </Link>
                </div>
              </div>
            </div>

            {/* right: map / image */}
            <div className="rounded-2xl bg-neutral-200/80 p-4 sm:p-6">
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl">
                <Image
                  src="/images/contact-map.jpg" // Bild/Map austauschen
                  alt="Büro / Karte"
                  fill
                  className="object-cover"
                  sizes="(max-width:1024px) 100vw, 800px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FORM */}
      <section id="form" className="bg-white py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[360px_1fr]">
            {/* left heading + quick info */}
            <div>
              <p className="text-sm font-semibold text-neutral-700">Nachricht</p>
              <h3 className="mt-2 text-3xl font-semibold text-neutral-900">Kontakt aufnehmen</h3>
              <p className="mt-2 text-sm text-neutral-700">
                Sende uns Fragen oder Anregungen.
              </p>

              <ul className="mt-6 space-y-3 text-sm text-neutral-800">
                <li className="flex items-center gap-2">
                  <MailIcon className="h-5 w-5" />
                  kontakt@immobot.pro
                </li>
                <li className="flex items-center gap-2">
                  <PhoneIcon className="h-5 w-5" />
                  +49 ………
                </li>
                <li className="flex items-center gap-2">
                  <PinIcon className="h-5 w-5" />
                  Beispiel-Adresse
                </li>
              </ul>
            </div>

            {/* right: form fields */}
            <form onSubmit={onSubmit} className="rounded-2xl border border-neutral-200 p-6 sm:p-8">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label className="text-xs font-medium text-neutral-700">Vorname</label>
                  <input className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-sky-500" required />
                </div>
                <div>
                  <label className="text-xs font-medium text-neutral-700">Nachname</label>
                  <input className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-sky-500" required />
                </div>
                <div>
                  <label className="text-xs font-medium text-neutral-700">E-Mail</label>
                  <input type="email" className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-sky-500" required />
                </div>
                <div>
                  <label className="text-xs font-medium text-neutral-700">Telefonnummer</label>
                  <input type="tel" className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-sky-500" />
                </div>

                <div className="sm:col-span-2">
                  <label className="text-xs font-medium text-neutral-700">Wählen Sie ein Thema</label>
                  <select className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-sky-500">
                    <option>Bitte auswählen</option>
                    <option>Support</option>
                    <option>Partnerschaft</option>
                    <option>Presse</option>
                    <option>Sonstiges</option>
                  </select>
                </div>

                <fieldset className="sm:col-span-2">
                  <legend className="text-xs font-medium text-neutral-700">Wie können wir Ihnen helfen?</legend>
                  <div className="mt-2 grid grid-cols-2 gap-3 sm:grid-cols-3">
                    {["Privatkunde","Makler","Partner","Investor","Medien","Andere"].map((l) => (
                      <label key={l} className="flex items-center gap-2 text-sm">
                        <input type="checkbox" className="h-4 w-4 rounded border-neutral-300 text-sky-600 focus:ring-sky-500" />
                        {l}
                      </label>
                    ))}
                  </div>
                </fieldset>

                <div className="sm:col-span-2">
                  <label className="text-xs font-medium text-neutral-700">Nachricht</label>
                  <textarea rows={5} className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-sky-500" placeholder="Schreiben Sie uns hier ..." />
                </div>

                <label className="sm:col-span-2 flex items-center gap-2 text-xs text-neutral-700">
                  <input type="checkbox" required className="h-4 w-4 rounded border-neutral-300 text-sky-600 focus:ring-sky-500" />
                  Ich akzeptiere die Nutzungsbedingungen
                </label>

                <div className="sm:col-span-2">
                  <button type="submit" className="rounded-lg bg-sky-600 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-700">
                    Absenden
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
