// components/Blog.jsx
"use client";
import { useMemo, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Blog({
  title = "Unser Blog",
  subtitle = "Expertenwissen für Immobiliensuchende – kompakt und verständlich.",
  posts = DEMO_POSTS,            // <-- später via CMS/API ersetzen
  categories: catsProp,          // optional: eigene Kategorienliste
}) {
  const categories =
    catsProp ?? ["Alle Beiträge", ...Array.from(new Set(posts.map(p => p.category)))];

  const [category, setCategory] = useState(categories[0]);

  const filtered = useMemo(() => {
    if (category === "Alle Beiträge") return posts;
    return posts.filter(p => p.category === category);
  }, [category, posts]);

  // "Neueste Beiträge" – nimm die 10 jüngsten
  const latest = useMemo(
    () => [...posts].sort((a, b) => +new Date(b.date) - +new Date(a.date)).slice(0, 10),
    [posts]
  );

  const railRef = useRef(null);
  const railScroll = (dir) => {
    const el = railRef.current;
    if (!el) return;
    const w = el.clientWidth;
    el.scrollBy({ left: dir * (w * 0.9), behavior: "smooth" });
  };

  return (
    <section className="bg-neutral-50">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <p className="text-sm font-semibold text-neutral-700">Blog</p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl">
            {title}
          </h1>
          <p className="mx-auto mt-2 max-w-2xl text-sm text-neutral-600">{subtitle}</p>
        </div>

        {/* Filter */}
        <div className="mt-8">
          <label className="sr-only" htmlFor="blog-filter">Kategorie</label>
          <select
            id="blog-filter"
            className="rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>

        {/* Post-Liste (Cards groß untereinander) */}
        <div className="mt-6 space-y-10">
          {filtered.map((post) => (
            <article key={post.id} className="rounded-2xl bg-white p-4 ring-1 ring-black/5 sm:p-6">
              {/* Bild */}
              <Link href={`/blog/${post.slug}`} className="block">
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-neutral-200">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 960px"
                    priority={false}
                  />
                </div>
              </Link>

              {/* Meta */}
              <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-neutral-600">
                {post.tags?.slice(0, 3).map((t) => (
                  <span key={t} className="rounded-md bg-neutral-100 px-2 py-1">{t}</span>
                ))}
                <span className="ml-auto">{formatDate(post.date)}</span>
              </div>

              {/* Content */}
              <h2 className="mt-2 text-xl font-semibold text-neutral-900">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>
              <p className="mt-1 text-sm text-neutral-700 line-clamp-2">{post.excerpt}</p>

              <Link
                href={`/blog/${post.slug}`}
                className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-neutral-900 underline-offset-4 hover:underline"
              >
                Mehr lesen
                <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2" />
                </svg>
              </Link>
            </article>
          ))}
        </div>

        {/* Latest rail */}
        <div className="mt-14 rounded-2xl bg-white p-5 ring-1 ring-black/5">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold text-neutral-600">Blog</p>
              <h3 className="text-xl font-semibold text-neutral-900">Neueste Beiträge</h3>
              <p className="text-sm text-neutral-600">
                Aktuelle Insights und Updates der Immobilienbranche
              </p>
            </div>

            <div className="hidden gap-2 sm:flex">
              <button
                aria-label="Zurück"
                onClick={() => railScroll(-1)}
                className="rounded-lg border border-neutral-300 px-2 py-1 text-sm hover:bg-neutral-50"
              >
                ‹
              </button>
              <button
                aria-label="Weiter"
                onClick={() => railScroll(1)}
                className="rounded-lg border border-neutral-300 px-2 py-1 text-sm hover:bg-neutral-50"
              >
                ›
              </button>
            </div>
          </div>

          <div
            ref={railRef}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {/* hide scrollbar */}
            <style jsx>{`
              div::-webkit-scrollbar { display: none; }
            `}</style>

            {latest.map((p) => (
              <Link
                key={p.id + "-rail"}
                href={`/blog/${p.slug}`}
                className="snap-start"
                style={{ minWidth: 260, maxWidth: 320, width: "72vw" }}
              >
                <div className="rounded-2xl ring-1 ring-black/5">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-t-2xl bg-neutral-200">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-cover"
                      sizes="260px"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-2 text-[11px] text-neutral-600">
                      <span className="rounded bg-neutral-100 px-2 py-0.5">{p.category}</span>
                      <span>•</span>
                      <span>{formatDate(p.date)}</span>
                    </div>
                    <h4 className="mt-2 line-clamp-2 text-sm font-semibold text-neutral-900">
                      {p.title}
                    </h4>
                    <p className="mt-1 line-clamp-2 text-xs text-neutral-600">{p.excerpt}</p>
                    <span className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-neutral-900">
                      Mehr lesen
                      <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Helpers & Demo-Content ---------- */

const formatDate = (d) =>
  new Intl.DateTimeFormat("de-DE", { year: "numeric", month: "short", day: "2-digit" }).format(
    new Date(d)
  );

const DEMO_POSTS = [
  {
    id: "1",
    slug: "immobilienmarkt-2024-strategien-fuer-kaeufer",
    title: "Immobilienmarkt 2024 – Strategien für Käufer",
    excerpt:
      "Aktuelle Entwicklungen und Prognosen für Immobilieninvestoren in Deutschland.",
    image: "/images/blog-1.jpg",
    category: "Markt",
    tags: ["Markt", "News"],
    date: "2024-11-12",
  },
  {
    id: "2",
    slug: "finanzierung-leicht-gemacht",
    title: "Finanzierung von Immobilien leicht gemacht",
    excerpt:
      "Praktische Schritte zur erfolgreichen Immobilienfinanzierung für Einsteiger.",
    image: "/images/blog-2.jpg",
    category: "Finanzen",
    tags: ["Finanzierung"],
    date: "2024-10-30",
  },
  {
    id: "3",
    slug: "checkliste-fuer-immobilienkauf",
    title: "Checkliste für Immobilienkauf",
    excerpt: "Worauf du beim Kauf einer Immobilie achten solltest.",
    image: "/images/blog-3.jpg",
    category: "Tipps",
    tags: ["How-to"],
    date: "2024-09-20",
  },
  {
    id: "4",
    slug: "renditestarke-investments",
    title: "Renditestarke Immobilieninvestments",
    excerpt: "Strategien für langfristig ertragreiche Investments.",
    image: "/images/blog-4.jpg",
    category: "Investieren",
    tags: ["Invest", "Analyse"],
    date: "2024-12-05",
  },
  {
    id: "5",
    slug: "kauf-ohne-stress",
    title: "Immobilienkauf ohne Stress",
    excerpt: "So vermeidest du typische Fehler – ein Leitfaden.",
    image: "/images/blog-5.jpg",
    category: "Tipps",
    tags: ["Guides"],
    date: "2024-11-02",
  },
];
