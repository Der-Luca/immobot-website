// src/app/components/Testimonials.jsx
export default function Testimonials() {
  const testimonials = [
    {
      name: "Michael Schmidt",
      role: "Immobilieninvestor, Berlin",
      text: "Ich bekomme jeden Morgen genau die Immobilien, die zu mir passen – ohne eine Plattform zu öffnen.",
      image: "/user-michael.jpg",
      stars: 5,
    },
  ];

  const logos = [
    { src: "/logos/relume.svg", alt: "Relume" },
    { src: "/logos/webflow.svg", alt: "Webflow" },
    { src: "/logos/webflow.svg", alt: "Webflow" },
    { src: "/logos/relume.svg", alt: "Relume" },
    { src: "/logos/webflow.svg", alt: "Webflow" },
    { src: "/logos/relume.svg", alt: "Relume" },
  ];

  return (
    <section className="bg-neutral-50 py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-3">
          Was unsere Nutzer sagen
        </h2>
        <p className="text-neutral-600 mb-12">
          Echte Erfahrungen von Menschen, die immobot.pro nutzen
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Haupt-Testimonial */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-200">
            <div className="flex justify-center mb-3">
              {Array.from({ length: testimonials[0].stars }).map((_, i) => (
                <span key={i} className="text-yellow-500 text-xl">★</span>
              ))}
            </div>
            <p className="text-neutral-800 mb-4">{testimonials[0].text}</p>
            <div className="flex items-center gap-3 justify-center">
              <img
                src={testimonials[0].image}
                alt={testimonials[0].name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="text-left">
                <p className="font-semibold">{testimonials[0].name}</p>
                <p className="text-sm text-neutral-600">
                  {testimonials[0].role}
                </p>
              </div>
            </div>
          </div>

          {/* Logo-Karten */}
          {logos.map((logo, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl flex items-center justify-center p-10 border border-neutral-200"
            >
              <img src={logo.src} alt={logo.alt} className="h-6" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
