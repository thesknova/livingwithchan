import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Calgary Homes for Sale | Chan Kawaguchi, REMAX",
  description:
    "Looking for your next Calgary home? Chan Kawaguchi, REMAX Complete Realty, will hand-pick current listings that match your needs, including exclusive and off-market properties. Call 403-681-0107.",
  openGraph: {
    title: "Calgary Homes for Sale | Chan Kawaguchi, REMAX",
    description:
      "Tell Chan what you're looking for and she'll hand-pick Calgary listings that match, including exclusive and off-market properties.",
  },
};

export default function ListingsPage() {
  return (
    <div className="bg-neutral-light min-h-screen">
      {/* Page header */}
      <div className="bg-primary text-white py-14 px-6">
        <div className="max-w-6xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            Calgary Real Estate
          </span>
          <h1 className="font-display text-4xl sm:text-5xl mt-3 mb-3">
            Find Your Next Home
          </h1>
          <p className="text-stone-400 text-lg max-w-2xl">
            Tell Chan what you&apos;re looking for and she&apos;ll hand-pick the
            listings that match, including exclusive and off-market properties
            you won&apos;t find online.
          </p>
        </div>
      </div>

      {/* Contact Chan */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal direction="up">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left: why reach out */}
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-accent">
                  Contact Chan
                </span>
                <h2 className="font-display text-3xl sm:text-4xl text-primary mt-3 mb-5">
                  Your search starts with a conversation
                </h2>
                <p className="text-text-dark leading-relaxed mb-4 max-w-xl">
                  Whether you want a detached family home, a downtown condo, a
                  townhouse, or an investment property, Chan knows what&apos;s on
                  the market across every Calgary community, and what&apos;s
                  about to be.
                </p>
                <ul className="space-y-3 my-7">
                  {[
                    "Hand-picked listings matched to your wishlist and budget",
                    "Access to exclusive and off-market properties",
                    "Honest advice on communities, pricing, and timing",
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-3 text-sm text-text-dark">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>

                {/* Direct lines */}
                <div className="flex items-center gap-4 rounded-2xl border border-neutral-mid bg-white p-4 max-w-md">
                  <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0 border border-neutral-mid">
                    <Image
                      src="/chan-headshot-color-new.jpg"
                      alt="Chan Kawaguchi — REMAX Complete Realty Agent, Calgary"
                      width={56}
                      height={56}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="text-sm">
                    <p className="font-semibold text-primary">Chan Kawaguchi</p>
                    <p className="text-text-muted">
                      <a href="tel:4036810107" className="hover:text-accent transition-colors">
                        403-681-0107
                      </a>
                      {" · "}
                      <a
                        href="mailto:hello@livingwithchan.com"
                        className="hover:text-accent transition-colors"
                      >
                        hello@livingwithchan.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Right: form */}
              <div className="bg-white rounded-2xl shadow-sm border border-neutral-mid p-8 sm:p-10">
                <ContactForm />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
