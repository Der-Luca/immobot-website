import PrivacyContent from "./PrivacyContent";

export const metadata = {
  title: "Datenschutzhinweis",
  description: "Datenschutzhinweis von Immobot.pro.",
};

export default function DatenschutzPage() {
  return (
    <section className="px-4 py-20">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-3 text-3xl font-bold text-neutral-950">Datenschutzhinweis</h1>
        <p className="mb-8 text-sm text-neutral-500">Stand: 07/2026</p>
        <PrivacyContent />
      </div>
    </section>
  );
}
