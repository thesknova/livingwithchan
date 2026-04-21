import type { Metadata } from "next";
import Image from "next/image";
import AgentBio from "@/components/AgentBio";
import StatsBar from "@/components/StatsBar";
import TrustedPartners from "@/components/TrustedPartners";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About Chan",
  description:
    "Learn about Chan Kawaguchi, a trusted REMAX Complete Realty Agent serving Calgary, Alberta with 10+ years of local expertise.",
};

const testimonials = [
  {
    name: "Sarah & Mike T.",
    community: "Tuscany",
    stars: 5,
    quote:
      "Chan made buying our first home an absolute breeze. She was patient, knowledgeable, and always available to answer our questions. We couldn't be happier with our home in Tuscany!",
  },
  {
    name: "David L.",
    community: "Inglewood",
    stars: 5,
    quote:
      "I've bought and sold three properties with Chan over the years. Her market knowledge is unmatched and she always gets top dollar. I wouldn't use anyone else.",
  },
  {
    name: "The Nguyen Family",
    community: "Cranston",
    stars: 5,
    quote:
      "Relocating from Vancouver was stressful, but Chan made the Calgary real estate process seamless. She found us exactly what we needed within our budget.",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 mb-3">
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

export default function AboutPage() {
  return (
    <>
      <AgentBio />
      <StatsBar />

      {/* Credentials section */}
      <section className="bg-neutral-light py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">
              Why Chan
            </span>
            <h2 className="text-3xl font-bold text-primary mt-2">
              What Sets Chan Apart
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                icon: "🏙️",
                title: "Deep Calgary Knowledge",
                body: "Born and raised in Calgary, Chan knows every community from Airdrie to Okotoks and everything in between.",
              },
              {
                icon: "🤝",
                title: "Client-First Always",
                body: "Chan's business is built on referrals and repeat clients. Honest advice, even when it means waiting for a better deal.",
              },
              {
                icon: "📊",
                title: "Data-Driven Strategy",
                body: "Whether pricing a home to sell or making a competitive offer, Chan uses real-time market data to guide every decision.",
              },
              {
                icon: "📱",
                title: "Always Accessible",
                body: "Real estate doesn't stop at 5pm. Chan is reachable when it matters most: mornings, evenings, and weekends.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl p-6 shadow-sm border border-neutral-mid"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-base font-semibold text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* B&W portrait + quote */}
      <section className="bg-primary-dark py-16 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="flex-shrink-0">
            <Image
              src="/chan-headshot-bw.jpg"
              alt="Chan Kawaguchi"
              width={280}
              height={360}
              className="rounded-2xl object-cover object-top w-[280px] h-[360px]"
            />
          </div>
          <p className="text-white text-2xl sm:text-3xl font-bold leading-snug">
            Dedicated to every client, every step of the way.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">
              Client Stories
            </span>
            <h2 className="text-3xl font-bold text-primary mt-2">
              What Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-neutral-light rounded-2xl p-6 border border-neutral-mid"
              >
                <StarRating count={t.stars} />
                <p className="text-gray-600 text-sm leading-relaxed mb-5 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <p className="text-sm font-semibold text-primary">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.community}, Calgary</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TrustedPartners />

      {/* CTA */}
      <section className="bg-primary-dark py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-stone-400 mb-8">
            Ready to start your real estate journey in Calgary? Chan is here to help.
          </p>
          <Button href="/contact" size="lg">
            Get in Touch
          </Button>
        </div>
      </section>
    </>
  );
}
