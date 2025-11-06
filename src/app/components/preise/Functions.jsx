// components/Functions.jsx
import Link from "next/link";
import Image from "next/image";

const DEFAULT_ITEMS = [
  {
    kicker: "Plattformen",
    title: <>Zugriff auf über<br />40 Immobilienportale</>,
    desc: "Lasse gleichzeitig die besten Immobilienplattformen ohne Zeitaufwand durchsuchen.",
    href: "/features/platforms",
    image: "/images/fn-platforms.jpg",
  },
  {
    kicker: "Profile",
    title: <>Dein Wunsch ist<br />unser Befehl</>,
    desc: "Definiere genau deine Wunschimmobilie mit präzisen Filtereinstellungen.",
    href: "/features/filters",
    image: "/images/fn-profile.jpg",
  },
  {
    kicker: "Updates",
    title: <>Tägliche E-Mail-<br />Benachrichtigungen</>,
    desc: "Erhalte die neuesten Immobilienangebote direkt in deinem Posteingang.",
    href: "/features/alerts",
    image: "/images/fn-updates.jpg",
  },
];

function Arrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" className="opacity-80">
      <path d="M8 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function FeatureCard({ kicker, title, desc, href, image }) {
  return (
    <article className="group relative overflow-hidden rounded-2xl ring-1 ring-black/10">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt=""
          fill
          priority={false}
          className="object-cover"
          sizes="(max-width: 1280px) 100vw, 420px"
        />
        <div className="absolute inset-0 bg-black/45 transition group-hover:bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative flex h-full flex-col justify-end p-6 text-white sm:p-8">
        <p className="text-sm font-semibold text-white/80">{kicker}</p>
        <h3 className="mt-2 text-3xl font-semibold leading-[1.05] sm:text-4xl">{title}</h3>
        <p className="mt-3 max-w-md text-white/80">{desc}</p>

        <Link
          href={href}
          className="mt-5 inline-flex items-center gap-2 text-white/90 underline-offset-4 hover:text-white"
        >
          Mehr <Arrow />
        </Link>
      </div>
    </article>
  );
}

export default function Functions({
  kicker = "Funktionen",
  title = "Deine Immobiliensuche wird einfach",
  subtitle = "Entdecke die intelligentesten Funktionen für deine Immobiliensuche",
  items = DEFAULT_ITEMS,
}) {
  return (
    <section className="bg-neutral-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <p className="text-sm font-semibold text-neutral-700">{kicker}</p>
          <h2 className="mt-2 text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl">
            {title}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-neutral-600">{subtitle}</p>
        </div>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {items.map((it, i) => (
            <FeatureCard key={i} {...it} />
          ))}
        </div>
      </div>
    </section>
  );
}
