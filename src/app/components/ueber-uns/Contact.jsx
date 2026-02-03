// components/Contact.jsx
import Link from "next/link";
import Image from "next/image";

const MailIcon = (props) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2zm0 2l8 5 8-5" fill="none" stroke="currentColor" strokeWidth="2"/>
  </svg>
);
const PhoneIcon = (props) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.08 4.2 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.88.32 1.74.6 2.56a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.52-1.13a2 2 0 0 1 2.11-.45c.82.28 1.68.48 2.56.6A2 2 0 0 1 22 16.92z" fill="none" stroke="currentColor" strokeWidth="2"/>
  </svg>
);
const PinIcon = (props) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path d="M12 22s7-5.33 7-12a7 7 0 0 0-14 0c0 6.67 7 12 7 12z" fill="none" stroke="currentColor" strokeWidth="2"/>
    <circle cx="12" cy="10" r="3" fill="none" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

export default function Contact() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold text-neutral-700">Kontakt</p>
        <h2 className="mt-4 text-5xl font-semibold leading-[0.95] text-neutral-900 sm:text-6xl">
          Kontaktiere uns
        </h2>
        <p className="mt-3 max-w-2xl text-neutral-600">
          Wir freuen uns auf deine Nachricht und helfen dir gerne weiter
        </p>

        {/* content grid */}
        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[420px_1fr] lg:items-start">
          {/* left column */}
          <div className="space-y-10">
            {/* Mail */}
            <div className="flex items-start gap-4">
              <MailIcon className="mt-1 h-7 w-7 text-neutral-900" />
              <div>
                <h3 className="text-lg font-semibold text-neutral-900">E-Mail</h3>
                <p className="mt-1 text-neutral-600">Schreibe uns eine Nachricht</p>
                <p className="mt-3 font-medium text-neutral-900">cd@immobot.pro</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <PhoneIcon className="mt-1 h-7 w-7 text-neutral-900" />
              <div>
                <h3 className="text-lg font-semibold text-neutral-900">Telefon</h3>
                <p className="mt-1 text-neutral-600">Sprich direkt mit unserem Team</p>
                <p className="mt-3 font-medium text-neutral-900">0156/78315679</p>
              </div>
            </div>

          </div>

          {/* right column image / map placeholder */}
          <div className="rounded-2xl sm:p-6 lg:p-8">
          </div>
        </div>
      </div>
    </section>
  );
}
