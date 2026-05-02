import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Luxury Homes Calgary | Chan Kawaguchi",
  description:
    "Searching for a luxury home in Calgary? Chan Kawaguchi specializes in premium properties in Aspen Woods, Elbow Park, Mount Royal, Britannia, and beyond.",
};

const highlights = [
  {
    icon: "🏆",
    title: "Discretion & Privacy",
    body: "High-value transactions require confidentiality. Chan handles luxury purchases with the professionalism and discretion that premium buyers expect.",
  },
  {
    icon: "🔍",
    title: "Off-Market Access",
    body: "Many of Calgary's finest homes never hit MLS. Chan's network surfaces exclusive opportunities before they're publicly listed.",
  },
  {
    icon: "📐",
    title: "Expert Eye for Quality",
    body: "From custom millwork to mechanical systems, Chan knows what separates a truly premium home from an overpriced one and will tell you the difference.",
  },
  {
    icon: "💼",
    title: "Skilled Negotiation",
    body: "Luxury deals involve more variables: inclusions, possession timelines, conditions. Chan's patient and precise negotiation style protects your investment.",
  },
];

export default function LuxuryPage() {
  return (
    <div className="bg-neutral-light min-h-screen">
      {/* Header */}
      <div className="bg-primary text-white py-14 px-6">
        <div className="max-w-6xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            Luxury Real Estate
          </span>
          <h1 className="text-4xl font-bold mt-2 mb-3">
            Calgary&apos;s Finest Homes
          </h1>
          <p className="text-stone-400 text-lg max-w-2xl">
            From prestigious inner-city estates to executive communities in the
            SW, Chan helps discerning buyers find and secure Calgary&apos;s most
            exceptional properties.
          </p>
        </div>
      </div>

      {/* Body content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Intro */}
        <div className="max-w-3xl mb-14">
          <h2 className="text-2xl font-bold text-primary mb-4">
            A Different Kind of Real Estate Experience
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Buying a luxury home is about far more than square footage and
            finishes. It&apos;s about finding a property that fits your
            lifestyle: the right neighbourhood, the right orientation, the
            right privacy. Chan understands that at this price point,
            every detail matters.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Calgary&apos;s luxury market is concentrated in a handful of
            exceptional communities: the tree-lined streets of Elbow Park and
            Britannia, the executive estates of Aspen Woods and West Springs,
            the historic prestige of Mount Royal, and the river valley views of
            Roxboro and Erlton. Each community has its own character, pricing
            dynamics, and buyer profile. Chan knows them all.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Chan also works with luxury sellers, bringing professional
            marketing, high-quality photography, and a targeted approach to
            reaching qualified buyers locally, nationally, and
            internationally.
          </p>
        </div>

        {/* Why Chan grid */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-primary mb-8">
            The Chan Difference at the Luxury Level
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((h) => (
              <div
                key={h.title}
                className="bg-white rounded-xl p-6 border border-neutral-mid shadow-sm flex gap-4"
              >
                <span className="text-2xl flex-shrink-0">{h.icon}</span>
                <div>
                  <h3 className="text-sm font-semibold text-primary mb-1">
                    {h.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {h.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top luxury communities */}
        <div className="bg-white rounded-2xl border border-neutral-mid p-8 mb-16">
          <h2 className="text-xl font-bold text-primary mb-4">
            Calgary&apos;s Premier Luxury Communities
          </h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              "Elbow Park",
              "Britannia",
              "Mount Royal",
              "Aspen Woods",
              "West Springs",
              "Pump Hill",
              "Roxboro",
              "Bel-Aire",
              "Eau Claire (condos)",
            ].map((community) => (
              <li
                key={community}
                className="flex items-center gap-2 text-sm text-gray-700"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                {community}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact section */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-5">
            <div>
              <h2 className="text-xl font-bold text-primary mb-1">
                Start Your Luxury Search
              </h2>
              <p className="text-gray-500 text-sm">
                REMAX Complete Realty Agent · Calgary, AB
              </p>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Ready to explore Calgary&apos;s finest properties? Chan offers
              confidential, no-pressure consultations for buyers at any stage of
              the process.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <span className="text-xl">📞</span>
                <a
                  href="tel:4036810107"
                  className="text-sm font-medium text-primary hover:text-accent transition-colors"
                >
                  403-681-0107
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-xl">✉️</span>
                <a
                  href="mailto:hello@livingwithchan.com"
                  className="text-sm font-medium text-primary hover:text-accent transition-colors"
                >
                  hello@livingwithchan.com
                </a>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-3 bg-white rounded-2xl shadow-sm border border-neutral-mid p-8">
            <h2 className="text-xl font-bold text-primary mb-1">
              Send a Message
            </h2>
            <p className="text-sm text-gray-500 mb-6">
              Tell Chan about your ideal home and she&apos;ll be in touch within 24 hours.
            </p>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
