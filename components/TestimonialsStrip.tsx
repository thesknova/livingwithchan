import Link from "next/link";

const testimonials = [
  {
    name: "Sarah & Mike T.",
    community: "Tuscany",
    quote:
      "Chan made buying our first home an absolute breeze. She was patient, knowledgeable, and always available. We couldn't be happier!",
    stars: 5,
  },
  {
    name: "David L.",
    community: "Inglewood",
    quote:
      "I've bought and sold three properties with Chan. Her market knowledge is unmatched and she always gets top dollar.",
    stars: 5,
  },
  {
    name: "The Nguyen Family",
    community: "Cranston",
    quote:
      "Relocating from Vancouver was stressful, but Chan made the Calgary real estate process completely seamless.",
    stars: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 mb-4">
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4 text-accent fill-accent"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsStrip() {
  return (
    <section className="bg-primary py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            Client Stories
          </span>
          <h2 className="text-3xl font-bold text-white mt-2">
            What Calgary Families Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white/8 border border-white/10 rounded-2xl p-6"
            >
              <StarRating count={t.stars} />
              <p className="text-white/80 text-sm leading-relaxed mb-5 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <p className="text-white font-semibold text-sm">{t.name}</p>
                <p className="text-white/50 text-xs">{t.community}, Calgary</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/about#testimonials"
            className="text-sm text-accent hover:text-white font-semibold transition-colors"
          >
            Read more client stories →
          </Link>
        </div>
      </div>
    </section>
  );
}
