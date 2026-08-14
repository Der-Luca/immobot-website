import CookieSettingsContent from "./CookieSettingsContent";

export const metadata = {
  title: "Cookie-Einstellungen",
  description: "Cookie-Einstellungen fuer Immobot bearbeiten.",
};

export default function CookiesPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="text-3xl font-bold tracking-tight text-neutral-950 md:text-4xl">
        Cookie-Einstellungen
      </h1>
      <p className="mt-4 max-w-2xl text-neutral-600">
        Hier kannst du deine Zustimmung fuer optionale Karten- und Komfortdienste
        jederzeit anpassen.
      </p>
      <div className="mt-8">
        <CookieSettingsContent />
      </div>
    </div>
  );
}
