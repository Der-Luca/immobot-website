// components/Testimonials.jsx
import Image from "next/image";

const STARS = 5;
const LOGOS = [
  { name: "Relume",  src: "/logos/relume.svg"  },
  { name: "Webflow", src: "/logos/webflow.svg" },
  { name: "Webflow", src: "/logos/webflow.svg" },
  { name: "Relume",  src: "/logos/relume.svg"  },
  { name: "Webflow", src: "/logos/webflow.svg" },
  { name: "Relume",  src: "/logos/relume.svg"  },
  { name: "Webflow", src: "/logos/webflow.svg" },
];

function Star({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path
        d="M12 2l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.8 6.2 20.9l1.1-6.5L2.6 8.8l6.5-.9L12 2z"
        fill="currentColor"
      />
    </svg>
  );
}

function LogoCard({ name, src }) {
  return (
    <div className="flex h-36 items-center justify-center rounded-2xl bg-white ring-1 ring-black/5">
      <div className="flex items-center gap-3 text-neutral-900">
        <Image src={src} alt={`${name} Logo`} width={28} height={28} />
        <span className="text-lg font-semibold">{name}</span>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-neutral-50 py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl">
            Erfahrungen
          </h2>
          <p className="mt-2 text-sm text-neutral-600">
            Was unsere Nutzer sagen
          </p>
        </div>

        {/* Grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {/* Row 1 – links Logo (Desktop) */}
          <div className="hidden xl:block">
            <LogoCard name="Relume" src="/logos/relume.svg" />
          </div>

          {/* Featured Testimonial – spans 2 on xl, 2 on md, 1 on mobile */}
          <article className="col-span-1 md:col-span-2 xl:col-span-2 rounded-2xl bg-white p-6 ring-1 ring-black/5">
            {/* Stars */}
            <div className="flex gap-1 text-neutral-900">
              {Array.from({ length: STARS }).map((_, i) => (
                <Star key={i} />
              ))}
            </div>

            {/* Quote */}
            <p className="mt-4 text-neutral-800">
              „Dank <span className="font-semibold">immobot.pro</span> habe ich mein Traumhaus
              gefunden, ohne stundenlang im Internet suchen zu müssen.“
            </p>

            {/* Author */}
            <div className="mt-5 flex items-center gap-3">
              <div className="h-9 w-9 rounded-full bg-neutral-200 ring-1 ring-black/5" />
              <div>
                <div className="text-sm font-semibold text-neutral-900">Name Surname</div>
                <div className="text-xs text-neutral-500">Position, Company name</div>
              </div>
            </div>
          </article>

          {/* Row 1 – rechts Logo (Desktop) */}
          <div className="hidden xl:block">
            <LogoCard name="Webflow" src="/logos/webflow.svg" />
          </div>

          {/* Remaining logo cards fill the grid */}
          {LOGOS.map((l, i) => (
            <LogoCard key={`${l.name}-${i}`} name={l.name} src={l.src} />
          ))}
        </div>
      </div>
    </section>
  );
}
