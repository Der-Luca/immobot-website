// components/FAQ.jsx
import Link from "next/link";

const DEFAULT_FAQS = [
  {
    q: "Question text goes here",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
  },
  {
    q: "Question text goes here",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
  },
  {
    q: "Question text goes here",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
  },
  {
    q: "Question text goes here",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
  },
  {
    q: "Question text goes here",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
  },
];

export default function FAQ({
  title = "FAQs",
  subtitle = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  faqs = DEFAULT_FAQS,
  ctaTitle = "Still have questions?",
  ctaSubtitle = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  ctaHref = "/contact",
  ctaLabel = "Contact",
}) {
  return (
    <section className="bg-neutral-50 py-16 sm:py-20">
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl">
            {title}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-neutral-600">
            {subtitle}
          </p>
        </div>

        {/* FAQ list */}
        <div className="mt-12 space-y-10">
          {faqs.map((item, i) => (
            <div key={i} className="text-neutral-800">
              <h3 className="text-sm font-semibold text-neutral-900">
                {item.q}
              </h3>
              <p className="mt-3 text-[15px] leading-7 text-neutral-700">
                {item.a}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 rounded-2xl bg-white p-8 text-center ring-1 ring-black/5">
          <h4 className="text-2xl font-semibold text-neutral-900">
            {ctaTitle}
          </h4>
          <p className="mt-2 text-sm text-neutral-600">{ctaSubtitle}</p>
          <Link
            href={ctaHref}
            className="mt-5 inline-flex items-center rounded-xl border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-neutral-50"
          >
            {ctaLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
