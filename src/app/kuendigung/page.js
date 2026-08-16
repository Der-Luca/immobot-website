import CancelSubscriptionForm from "./CancelSubscriptionForm";

export const metadata = {
  title: "Verträge kündigen",
  description: "Immobot-Abo online kündigen.",
};

export default function CancellationPage() {
  return (
    <section className="px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
            Kündigung
          </p>
          <h1 className="mt-3 text-3xl font-bold text-neutral-950 sm:text-4xl">
            Immobot-Abo kündigen
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-neutral-700">
            Hier kannst du deine Kündigung direkt online erklären. Für die Zuordnung
            benötigen wir deine E-Mail-Adresse.
          </p>
        </div>

        <div className="mb-8 rounded-lg border border-blue-100 bg-blue-50 p-4 text-sm leading-6 text-blue-950">
          Nach dem Klick auf <strong>„Jetzt kündigen“</strong> wird deine Kündigung
          elektronisch übermittelt. Du erhältst anschließend eine Bestätigung per E-Mail.
        </div>

        <CancelSubscriptionForm />
      </div>
    </section>
  );
}
