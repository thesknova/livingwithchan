import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Investment Properties Calgary | Chan Kawaguchi",
  description:
    "Looking for investment properties in Calgary? Chan Kawaguchi helps investors find cash-flow rentals, multi-family homes, and high-growth neighbourhoods.",
};

const reasons = [
  {
    icon: "📊",
    title: "Market Intelligence",
    body: "Chan tracks rental yields, vacancy rates, and price-to-rent ratios across Calgary's quadrants so you can make data-backed decisions, not guesses.",
  },
  {
    icon: "🏘️",
    title: "Neighbourhood Knowledge",
    body: "From NE Calgary's high-demand rental corridors to SW communities with strong appreciation, Chan knows where investors are finding value right now.",
  },
  {
    icon: "🤝",
    title: "Investor Network",
    body: "Access to property managers, mortgage brokers who specialize in rental financing, and tradespeople who keep your carrying costs low.",
  },
  {
    icon: "🔄",
    title: "Buy, Hold & Sell Strategy",
    body: "Whether you're building a long-term portfolio or looking for a flip, Chan tailors the strategy to your timeline and financial goals.",
  },
];

export default function InvestorsPage() {
  return (
    <div className="bg-neutral-light min-h-screen">
      {/* Header */}
      <div className="bg-primary text-white py-14 px-6">
        <div className="max-w-6xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            Investment Properties
          </span>
          <h1 className="text-4xl font-bold mt-2 mb-3">
            Investing in Calgary Real Estate
          </h1>
          <p className="text-stone-400 text-lg max-w-2xl">
            Calgary&apos;s rental market is strong and growing. Chan helps
            investors identify the right properties, in the right communities,
            at the right price.
          </p>
        </div>
      </div>

      {/* Body content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Intro */}
        <div className="max-w-3xl mb-14">
          <h2 className="text-2xl font-bold text-primary mb-4">
            Why Invest in Calgary?
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Calgary consistently ranks among Canada&apos;s top cities for real
            estate investment. A diversifying economy, strong in-migration from
            other provinces, and a relatively affordable entry point compared to
            Vancouver or Toronto make Calgary an attractive market for both
            first-time and seasoned investors.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Single-family rentals in the NE and SE quadrants often yield strong
            monthly cash flow, while inner-city condos and townhouses attract
            young professionals willing to pay premium rent for walkable
            communities. Multi-family properties in established neighbourhoods
            continue to appreciate steadily year over year.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Chan works exclusively with investors who want a clear-eyed view of
            the numbers: cap rates, cash-on-cash returns, and realistic
            appreciation forecasts. No hype, just honest guidance backed by
            local market data.
          </p>
        </div>

        {/* Why Chan grid */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-primary mb-8">
            What Chan Brings to Every Investment Deal
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {reasons.map((r) => (
              <div
                key={r.title}
                className="bg-white rounded-xl p-6 border border-neutral-mid shadow-sm flex gap-4"
              >
                <span className="text-2xl flex-shrink-0">{r.icon}</span>
                <div>
                  <h3 className="text-sm font-semibold text-primary mb-1">
                    {r.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {r.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top investment neighbourhoods */}
        <div className="bg-white rounded-2xl border border-neutral-mid p-8 mb-16">
          <h2 className="text-xl font-bold text-primary mb-4">
            Top Calgary Communities for Investors
          </h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              "Evanston (NW)",
              "Nolan Hill (NW)",
              "Skyview Ranch (NE)",
              "Redstone (NE)",
              "Cranston (SE)",
              "Auburn Bay (SE)",
              "Mahogany (SE)",
              "Cougar Ridge (SW)",
              "Inglewood (inner-city)",
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
                Talk to Chan About Investing
              </h2>
              <p className="text-gray-500 text-sm">
                REMAX Complete Realty Agent · Calgary, AB
              </p>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Whether you&apos;re analyzing your first rental or expanding an
              existing portfolio, Chan is ready to help you find the right
              opportunity in Calgary&apos;s market.
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
              Tell Chan about your investment goals and she&apos;ll get back to you within 24 hours.
            </p>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
