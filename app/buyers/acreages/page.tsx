import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Calgary Acreages & Rural Properties | Chan Kawaguchi",
  description:
    "Looking for an acreage near Calgary? Chan Kawaguchi specializes in rural and semi-rural properties in Rocky View County, Foothills, and surrounding areas.",
};

const considerations = [
  {
    icon: "💧",
    title: "Well & Septic Systems",
    body: "Acreages typically rely on private wells and septic systems. Chan ensures proper inspection of both before you commit, so there are no costly surprises after possession.",
  },
  {
    icon: "🛣️",
    title: "Road Access & Maintenance",
    body: "Not all rural roads are maintained by the municipality. Chan identifies road maintenance agreements and seasonal access issues that could affect your daily life.",
  },
  {
    icon: "📐",
    title: "Land Use & Zoning",
    body: "Want to add a shop, run a home business, or keep horses? Chan reviews Rocky View and Foothills County zoning bylaws so your land use goals are achievable.",
  },
  {
    icon: "🔌",
    title: "Utilities & Connectivity",
    body: "Power, natural gas, and internet access vary widely across rural properties. Chan helps you understand what's available and what it costs to get connected.",
  },
];

const areas = [
  { name: "Rocky View County", note: "Closest to Calgary, most serviced acreages" },
  { name: "Foothills County (MD)", note: "Scenic, horse properties, open range feel" },
  { name: "Bearspaw / Springbank", note: "Premium acreages, minutes from NW Calgary" },
  { name: "Cochrane area", note: "Town + acreage lifestyle, booming community" },
  { name: "Priddis / Bragg Creek", note: "Mountain proximity, heavily treed, stunning" },
  { name: "Okotoks / De Winton", note: "SE Calgary access, growing infrastructure" },
];

export default function AcreagesPage() {
  return (
    <div className="bg-neutral-light min-h-screen">
      {/* Header */}
      <div className="bg-primary text-white py-14 px-6">
        <div className="max-w-6xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            Acreages &amp; Rural Properties
          </span>
          <h1 className="text-4xl font-bold mt-2 mb-3">
            Space, Privacy & the Alberta Lifestyle
          </h1>
          <p className="text-stone-400 text-lg max-w-2xl">
            Just beyond Calgary&apos;s city limits lies a world of acreages,
            hobby farms, and rural retreats. Chan helps buyers find the right
            property with the right land, the right infrastructure, and no
            hidden surprises.
          </p>
        </div>
      </div>

      {/* Body content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Intro */}
        <div className="max-w-3xl mb-14">
          <h2 className="text-2xl font-bold text-primary mb-4">
            Why Buy an Acreage Near Calgary?
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            For many Calgarians, the dream isn&apos;t a bigger house in a
            suburb. It&apos;s a few acres of land, a detached shop, room for
            horses or a garden, and the sound of nothing but the wind. Rocky
            View County and the Municipal District of Foothills make that dream
            surprisingly attainable, often within a 30–45 minute drive from
            downtown Calgary.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Bearspaw and Springbank in the west offer some of Alberta&apos;s
            most prestigious acreage properties, with paved roads, natural gas,
            and high-speed internet. Further out, Priddis and Bragg Creek
            provide a true rural experience with mountain proximity and heavily
            treed lots. To the south, the Okotoks and De Winton corridor is
            growing quickly with good highway access and strong community
            amenities.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Buying an acreage requires a different kind of due diligence than
            urban or suburban real estate. Chan has specific experience in rural
            transactions, from well water testing to septic inspections,
            right-of-way issues, and county zoning, so you can buy with
            confidence.
          </p>
        </div>

        {/* Considerations grid */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-primary mb-8">
            What Chan Watches For on Every Acreage
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {considerations.map((c) => (
              <div
                key={c.title}
                className="bg-white rounded-xl p-6 border border-neutral-mid shadow-sm flex gap-4"
              >
                <span className="text-2xl flex-shrink-0">{c.icon}</span>
                <div>
                  <h3 className="text-sm font-semibold text-primary mb-1">
                    {c.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {c.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Area guide */}
        <div className="bg-white rounded-2xl border border-neutral-mid p-8 mb-16">
          <h2 className="text-xl font-bold text-primary mb-2">
            Popular Acreage Areas Around Calgary
          </h2>
          <p className="text-sm text-gray-500 mb-6">
            Each area has a distinct character and price range. Chan helps you
            find the one that fits your lifestyle and budget.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {areas.map((a) => (
              <div
                key={a.name}
                className="flex items-start gap-3 p-3 rounded-lg bg-neutral-light border border-neutral-mid"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-2" />
                <div>
                  <p className="text-sm font-semibold text-primary">{a.name}</p>
                  <p className="text-xs text-gray-500">{a.note}</p>
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
                Find Your Acreage With Chan
              </h2>
              <p className="text-gray-500 text-sm">
                REMAX Complete Realty Agent · Calgary, AB
              </p>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Ready to start your acreage search? Chan is happy to discuss your
              wishlist, budget, and the areas that make the most sense for your
              lifestyle.
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
              Tell Chan what you&apos;re looking for in an acreage and he&apos;ll be in touch within 24 hours.
            </p>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
