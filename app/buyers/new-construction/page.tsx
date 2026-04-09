import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "New Construction Homes Calgary | Chan Kawaguchi",
  description:
    "Buying a brand-new build in Calgary? Chan Kawaguchi represents your interests with the builder, from choosing upgrades to reviewing contracts and protecting your deposit.",
};

const tips = [
  {
    icon: "🤝",
    title: "You Need Your Own Representation",
    body: "The builder's sales rep works for the builder, not you. Having Chan on your side costs you nothing extra and ensures someone is watching out for your interests from day one.",
  },
  {
    icon: "📝",
    title: "Builder Contracts Are Not Standard",
    body: "New construction contracts are written by the builder's lawyers and heavily favour the builder. Chan reviews every clause and helps you understand what you're agreeing to.",
  },
  {
    icon: "🎨",
    title: "Upgrades & Selections Strategy",
    body: "Picking finishes and upgrades at the design centre can add tens of thousands to your price. Chan helps you prioritize the upgrades that add resale value versus the ones to skip.",
  },
  {
    icon: "🔍",
    title: "Pre-Possession Inspection",
    body: "Before you take possession, a professional inspection is essential. Chan coordinates your walkthrough and ensures every deficiency is documented and addressed before you get the keys.",
  },
];

const communities = [
  { name: "Glacier Ridge (NW)", note: "Master-planned, parks, family-focused" },
  { name: "Belmont (SW)", note: "Affordable new builds, growing community" },
  { name: "Hotchkiss (SE)", note: "New semi-detached and detached options" },
  { name: "Rangeview (SE)", note: "Urban agriculture community, unique concept" },
  { name: "Cityscape (NE)", note: "Established new-build community, good value" },
  { name: "Carrington (NW)", note: "Popular family community, quick possession homes" },
  { name: "Wolf Willow (SW)", note: "River valley access, modern builds" },
  { name: "Seton (SE)", note: "Urban district, walkable, hospital corridor" },
];

export default function NewConstructionPage() {
  return (
    <div className="bg-neutral-light min-h-screen">
      {/* Header */}
      <div className="bg-primary text-white py-14 px-6">
        <div className="max-w-6xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            New Builds in Calgary
          </span>
          <h1 className="text-4xl font-bold mt-2 mb-3">
            Buying New Construction
          </h1>
          <p className="text-stone-400 text-lg max-w-2xl">
            A brand-new home is exciting, but the process is very different
            from buying resale. Chan guides you through every step so you get
            exactly what you paid for.
          </p>
        </div>
      </div>

      {/* Body content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Intro */}
        <div className="max-w-3xl mb-14">
          <h2 className="text-2xl font-bold text-primary mb-4">
            Why New Construction Is Different
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Calgary is one of Canada&apos;s fastest-growing cities, and new
            communities are constantly being developed across every quadrant.
            Whether you&apos;re drawn to a spec home you can move into quickly
            or a build-to-order where you choose every detail, buying new
            construction comes with unique opportunities and unique risks.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Builder sales centres are professionally staffed and welcoming, but
            the people there represent the builder&apos;s interests. Prices,
            upgrades, lot premiums, and possession timelines are all
            negotiable, but only if you know what to ask for and have someone
            who knows the process in your corner.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Chan has guided many Calgary buyers through new construction
            purchases across multiple builders and communities. He knows which
            builders have strong reputations, where the best value lots are, and
            how to protect your deposit if a project gets delayed or cancelled.
          </p>
        </div>

        {/* Tips grid */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-primary mb-8">
            What Chan Does Differently
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {tips.map((t) => (
              <div
                key={t.title}
                className="bg-white rounded-xl p-6 border border-neutral-mid shadow-sm flex gap-4"
              >
                <span className="text-2xl flex-shrink-0">{t.icon}</span>
                <div>
                  <h3 className="text-sm font-semibold text-primary mb-1">
                    {t.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {t.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Community guide */}
        <div className="bg-white rounded-2xl border border-neutral-mid p-8 mb-16">
          <h2 className="text-xl font-bold text-primary mb-2">
            Active New-Build Communities in Calgary
          </h2>
          <p className="text-sm text-gray-500 mb-6">
            A snapshot of communities where new construction is currently
            active across Calgary&apos;s quadrants.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {communities.map((c) => (
              <div
                key={c.name}
                className="flex items-start gap-3 p-3 rounded-lg bg-neutral-light border border-neutral-mid"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-2" />
                <div>
                  <p className="text-sm font-semibold text-primary">{c.name}</p>
                  <p className="text-xs text-gray-500">{c.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact section */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-5">
            <div>
              <h2 className="text-xl font-bold text-primary mb-1">
                Talk to Chan Before You Visit a Showhome
              </h2>
              <p className="text-gray-500 text-sm">
                REMAX Real Estate Agent · Calgary, AB
              </p>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              The best time to bring Chan in is before you walk through a
              builder&apos;s showhome, not after. Once you&apos;ve signed with
              a builder, your options narrow considerably.
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
              Contact Us
            </h2>
            <p className="text-sm text-gray-500 mb-6">
              Tell Chan which communities or builders you&apos;re looking at. He&apos;ll share what he knows and set up a no-obligation consultation.
            </p>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
