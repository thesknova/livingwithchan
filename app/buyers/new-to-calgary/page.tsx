import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "New to Calgary Real Estate | Chan Kawaguchi",
  description:
    "Relocating to Calgary? Chan Kawaguchi helps newcomers from other provinces and countries navigate Calgary's real estate market, neighbourhoods, and buying process.",
};

const tips = [
  {
    icon: "🗺️",
    title: "Understanding Calgary's Quadrants",
    body: "Calgary is divided into NW, NE, SW, and SE — each with distinct communities, price points, and lifestyles. Chan maps this out clearly so you can narrow your search quickly.",
  },
  {
    icon: "🏫",
    title: "Schools & Family Amenities",
    body: "Families relocating with kids need the right school district. Chan helps you identify communities served by the top public, Catholic, and private schools.",
  },
  {
    icon: "🚗",
    title: "Commute & Connectivity",
    body: "Whether you work downtown, in the airport corridor, or remotely, Chan helps you find a community that minimizes your commute and maximizes your lifestyle.",
  },
  {
    icon: "📋",
    title: "The Alberta Buying Process",
    body: "Real estate rules vary by province. Chan walks you through Alberta's purchase contract, conditions, title insurance, and possession process step by step.",
  },
];

const communities = [
  { name: "Tuscany (NW)", note: "Family-friendly, mountain views, top schools" },
  { name: "Evanston (NW)", note: "New builds, affordable, young families" },
  { name: "Cranston (SE)", note: "Master-planned, amenities, Fish Creek Park" },
  { name: "Auburn Bay (SE)", note: "Lake community, modern homes, great value" },
  { name: "Mahogany (SE)", note: "Award-winning lake community, luxury feel" },
  { name: "Aspen Woods (SW)", note: "Executive homes, top private schools" },
  { name: "Cougar Ridge (SW)", note: "Views, trails, close to WinSport" },
  { name: "Inglewood (inner-city)", note: "Vibrant, walkable, arts district" },
];

export default function NewToCalgaryPage() {
  return (
    <div className="bg-neutral-light min-h-screen">
      {/* Header */}
      <div className="bg-primary text-white py-14 px-6">
        <div className="max-w-6xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            Relocating to Calgary
          </span>
          <h1 className="text-4xl font-bold mt-2 mb-3">
            New to Calgary? Welcome.
          </h1>
          <p className="text-stone-400 text-lg max-w-2xl">
            Relocating to a new city is exciting — and overwhelming. Chan helps
            newcomers from across Canada and around the world find the right
            Calgary community to call home.
          </p>
        </div>
      </div>

      {/* Body content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Intro */}
        <div className="max-w-3xl mb-14">
          <h2 className="text-2xl font-bold text-primary mb-4">
            Calgary Is Growing — And For Good Reason
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Calgary is one of Canada&apos;s fastest-growing cities, attracting
            newcomers from BC, Ontario, Quebec, and internationally. Lower
            taxes, no provincial sales tax, strong job market, and a
            world-class outdoor lifestyle make it an increasingly popular
            destination for families, young professionals, and retirees alike.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            But Calgary is a big city with a huge range of communities —
            from brand-new suburban builds in the north to established
            inner-city neighbourhoods with century-old character homes. Without
            local knowledge, it&apos;s easy to end up in the wrong area for
            your lifestyle.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Chan has helped dozens of families relocate to Calgary from other
            provinces and abroad. He offers virtual tours, video walkthroughs,
            and community orientation sessions so you can make a confident
            decision — even before you arrive.
          </p>
        </div>

        {/* Tips grid */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-primary mb-8">
            How Chan Makes Your Relocation Easier
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
            Popular Communities for Newcomers
          </h2>
          <p className="text-sm text-gray-500 mb-6">
            A quick snapshot of Calgary communities that consistently attract
            relocating families.
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
                Plan Your Calgary Move
              </h2>
              <p className="text-gray-500 text-sm">
                REMAX Real Estate Agent · Calgary, AB
              </p>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Virtual consultations available. Chan can walk you through Calgary
              communities via video call before you ever set foot on a plane.
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
              Tell Chan where you&apos;re moving from and what you&apos;re looking for — he&apos;ll get back to you within 24 hours.
            </p>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
