// components/TeamSection.jsx
import Link from "next/link";

/* ---- inline Icons ---- */
const IconLinkedIn = (props) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V23h-4V8.5zM8 8.5h3.8v2h.05c.53-.95 1.83-2 3.77-2 4.03 0 4.78 2.65 4.78 6.1V23h-4v-5.9c0-1.41-.02-3.22-1.96-3.22-1.96 0-2.26 1.53-2.26 3.12V23H8V8.5z" />
  </svg>
);
const IconX = (props) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path d="M18.9 2H22l-7.06 8.06L23.5 22h-6.9l-4.57-5.86L6.7 22H2.6l7.53-8.59L.5 2h7.1l4.12 5.44L18.9 2zm-2.4 18h1.9L7.6 4H5.7l10.8 16z" />
  </svg>
);
const IconDribbble = (props) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm6.72 6.2a8.02 8.02 0 0 1 1.77 5.04c-1.6-.33-3.76-.41-5.71-.1-.15-.38-.3-.74-.47-1.1 2.5-1.09 4.2-2.82 4.41-3.84zM12 4a8 8 0 0 1 5.06 1.78c-.16.89-1.6 2.49-3.9 3.46A29.7 29.7 0 0 0 9.7 5.14 7.96 7.96 0 0 1 12 4zM8.5 5.7a28.2 28.2 0 0 1 3.3 3.97c-2.97.83-6.84.86-8.5.8A8.02 8.02 0 0 1 8.5 5.7zM4.1 12.2c1.9.03 5.88 0 9.02-1.02.2.4.38.81.55 1.24-3.07.96-5.3 3.04-6.73 5.58A8.01 8.01 0 0 1 4.1 12.2zm7.9 7.8a8 8 0 0 1-4.09-1.14c1.31-2.36 3.28-4.27 6.06-5.17.7 1.9 1.16 4.18 1.3 6.22A7.96 7.96 0 0 1 12 20zm4.94-1.62c-.16-1.76-.58-3.76-1.17-5.38 1.7-.23 3.52-.13 4.87.13a8.02 8.02 0 0 1-3.7 5.25z" />
  </svg>
);

/* ---- dummy data ---- */
const TEAM = [
  {
    name: "Max Müller",
    role: "Gründer und CEO",
    bio: "Technologieexperte mit 15 Jahren Erfahrung in Immobilien und Softwareentwicklung.",
    links: { linkedin: "#", x: "#", dribbble: "#" },
  },
  {
    name: "Sarah Schmidt",
    role: "Technische Leiterin",
    bio: "Entwicklerin mit Fokus auf KI und maschinellem Lernen für präzise Immobiliensuchen.",
    links: { linkedin: "#", x: "#", dribbble: "#" },
  },
  {
    name: "Thomas Weber",
    role: "Produktmanager",
    bio: "Treibt die Produktentwicklung und Nutzererfahrung von immobot.pro voran.",
    links: { linkedin: "#", x: "#", dribbble: "#" },
  },
  { name: "Full name", role: "Job title", bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.", links: { linkedin: "#", x: "#", dribbble: "#" } },
  { name: "Full name", role: "Job title", bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.", links: { linkedin: "#", x: "#", dribbble: "#" } },
  { name: "Full name", role: "Job title", bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.", links: { linkedin: "#", x: "#", dribbble: "#" } },
  { name: "Full name", role: "Job title", bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.", links: { linkedin: "#", x: "#", dribbble: "#" } },
];

function Avatar() {
  return (
    <div className="h-20 w-20 rounded-full bg-blue-100/80 flex items-center justify-center ring-1 ring-black/5">
      <svg width="28" height="28" viewBox="0 0 24 24" className="opacity-70">
        <path d="M21 19v2H3v-2c0-2.8 5.3-4 9-4s9 1.2 9 4zM12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
      </svg>
    </div>
  );
}

export default function TeamSection() {
  return (
    <section className="bg-sky-50 py-16">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-medium text-slate-500">Team</p>
        <h2 className="mt-2 text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
          Unser Team
        </h2>
        <p className="mt-3 max-w-2xl text-slate-600">
          Leidenschaftliche Experten, die die Immobiliensuche neu definieren
        </p>

        {/* GRID */}
        <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 xl:grid-cols-4">
          {TEAM.map((m, i) => (
            <article
              key={i}
              className="rounded-2xl bg-white/60 p-6 ring-1 ring-black/5 backdrop-blur-sm"
            >
              <Avatar />
              <h3 className="mt-5 text-lg font-semibold text-slate-900">{m.name}</h3>
              <p className="text-sm text-slate-600">{m.role}</p>
              <p className="mt-3 text-sm leading-6 text-slate-700">{m.bio}</p>

              <div className="mt-4 flex items-center gap-4">
                {m.links?.linkedin && (
                  <Link
                    href={m.links.linkedin}
                    aria-label={`${m.name} auf LinkedIn`}
                    className="rounded-full p-2 ring-1 ring-black/10 hover:bg-slate-100 transition"
                  >
                    <IconLinkedIn className="h-4 w-4 fill-current" />
                  </Link>
                )}
                {m.links?.x && (
                  <Link
                    href={m.links.x}
                    aria-label={`${m.name} auf X (Twitter)`}
                    className="rounded-full p-2 ring-1 ring-black/10 hover:bg-slate-100 transition"
                  >
                    <IconX className="h-4 w-4 fill-current" />
                  </Link>
                )}
                {m.links?.dribbble && (
                  <Link
                    href={m.links.dribbble}
                    aria-label={`${m.name} auf Dribbble`}
                    className="rounded-full p-2 ring-1 ring-black/10 hover:bg-slate-100 transition"
                  >
                    <IconDribbble className="h-4 w-4 fill-current" />
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Hiring block */}
        <div className="mt-14 rounded-2xl p-6 backdrop-blur-sm">
          <h3 className="text-2xl font-semibold text-slate-900">Wir stellen ein</h3>
          <p className="mt-2 max-w-2xl text-slate-700">
            Verstärke unser Team und revolutioniere die Immobiliensuche mit uns.
          </p>
          <Link
            href="/jobs"
            className="mt-6 inline-flex items-center rounded-xl border border-slate-300 px-4 py-2 text-sm font-medium text-slate-900 hover:bg-slate-50"
          >
            Offene Stellen
          </Link>
        </div>
      </div>
    </section>
  );
}
