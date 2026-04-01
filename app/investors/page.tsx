import type { Metadata } from "next";
import Link from "next/link";
import CashFlowCalculator from "@/components/CashFlowCalculator";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Calgary Investment Properties | Chan Kawaguchi",
  description:
    "Invest in Calgary real estate with confidence. Browse investment properties, run cash flow analysis, and work with REMAX agent Chan Kawaguchi to build your portfolio.",
};

const stats = [
  { value: "3.2%", label: "Average cap rate, Calgary rentals" },
  { value: "1.8%", label: "Vacancy rate — near record low" },
  { value: "$2,400+", label: "Average 2BR rent, Calgary" },
  { value: "No PST", label: "Alberta tax advantage" },
];

const blogPosts = [
  {
    title: "Bitcoin and Real Estate in Calgary: How Crypto Transactions Actually Work",
    excerpt: "How to buy or sell a Calgary property with Bitcoin — the process, CRA tax rules, and a live BTC/CAD calculator.",
    href: "/blog/bitcoin-real-estate-calgary",
    category: "Investor Tips",
  },
  {
    title: "Legal vs. Illegal Basement Suites in Calgary",
    excerpt: "Permits, egress windows, fire separation, fines up to $40,000 — what makes a suite legal and why it matters for landlords and tenants.",
    href: "/blog/legal-vs-illegal-basement-suites-calgary",
    category: "Investor Tips",
  },
  {
    title: "Calgary Zoning Explained: R-CG, R-C1, M-C1, and the Blanket Rezoning",
    excerpt: "The 2024 blanket rezoning changed thousands of Calgary lots to R-CG. Learn what it means for investors — and whether the 2026 repeal will affect you.",
    href: "/blog/calgary-zoning-explained",
    category: "Investor Tips",
  },
  {
    title: "Renting vs. Buying in Calgary: An Honest Comparison",
    excerpt: "Understand the financial math behind owning vs. renting — essential reading before your first investment.",
    href: "/blog/renting-vs-buying",
    category: "Buyer Tips",
  },
];

export default function InvestorsPage() {
  return (
    <div className="bg-neutral-light min-h-screen">

      {/* Hero header */}
      <div className="bg-primary text-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            Calgary Investment Real Estate
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold mt-3 mb-4 max-w-2xl leading-tight">
            Build Wealth Through Calgary Real Estate
          </h1>
          <p className="text-stone-400 text-lg max-w-2xl mb-8">
            Strong rental demand, no provincial sales tax, and a growing economy
            make Calgary one of Canada&apos;s most compelling markets for real
            estate investors. Chan helps you find the right property and run the
            right numbers.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#calculator"
              className="bg-accent hover:bg-accent-dark text-white font-semibold px-6 py-3 rounded-full transition-colors text-sm"
            >
              Run Cash Flow Analysis
            </a>
            <a
              href="#contact"
              className="border border-white/30 hover:border-accent hover:text-accent text-white font-semibold px-6 py-3 rounded-full transition-colors text-sm"
            >
              Get Property Recommendations
            </a>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="bg-accent">
        <div className="max-w-6xl mx-auto px-6 py-5 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-2xl font-black text-white">{s.value}</p>
              <p className="text-xs text-white/75 mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16 space-y-20">

        {/* Why Calgary for investors */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">Why Calgary</span>
            <h2 className="text-3xl font-bold text-primary mt-2 mb-4">
              The Investor&apos;s Case for Calgary
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed text-sm">
              <p>
                Calgary&apos;s rental vacancy rate sits near historic lows while
                the city&apos;s population continues growing from strong
                interprovincial and international migration. Demand for rental
                housing is outpacing new supply — a fundamental driver of both
                rent growth and property appreciation.
              </p>
              <p>
                Unlike BC and Ontario, Alberta charges no provincial land
                transfer tax and no PST, dramatically reducing your transaction
                costs on both the buy and sell side. That means more of your
                capital stays invested and working for you.
              </p>
              <p>
                Entry price points remain well below Vancouver and Toronto,
                giving investors higher cap rates and better cash-on-cash
                returns — especially in the NE and SE quadrants where rental
                demand from young families and newcomers is strongest.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: "📈", title: "Appreciating Market", body: "Calgary home values have trended upward over the long term despite oil-cycle volatility." },
              { icon: "🏘️", title: "High Rental Demand", body: "Record migration into Calgary is keeping vacancy near zero and rents rising." },
              { icon: "💰", title: "Strong Cash Flow", body: "Lower purchase prices relative to rent means better monthly returns than most Canadian cities." },
              { icon: "🛡️", title: "Alberta Tax Advantage", body: "No PST, no land transfer tax. More of every dollar stays in your pocket." },
            ].map((c) => (
              <div key={c.title} className="bg-white rounded-xl p-5 border border-neutral-mid shadow-sm">
                <span className="text-2xl block mb-2">{c.icon}</span>
                <h3 className="text-sm font-bold text-primary mb-1">{c.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Cash flow calculator */}
        <div id="calculator">
          <div className="text-center mb-8">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">Tools</span>
            <h2 className="text-3xl font-bold text-primary mt-2">Cash Flow Calculator</h2>
            <p className="text-gray-500 mt-2 max-w-lg mx-auto text-sm">
              Plug in any property&apos;s numbers to instantly see monthly cash flow,
              cap rate, and cash-on-cash return.
            </p>
          </div>
          <CashFlowCalculator />
        </div>

        {/* Investment property search CTA */}
        <div className="bg-primary rounded-2xl p-10 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">Find Investment Properties</span>
          <h2 className="text-3xl font-bold text-white mt-2 mb-4">
            Looking for the Right Investment Property?
          </h2>
          <p className="text-stone-400 max-w-xl mx-auto text-sm leading-relaxed mb-8">
            Finding a true investment property requires more than a standard MLS
            search — it takes local knowledge of rental yields, tenant demand,
            and neighbourhood trajectories. Chan curates opportunities
            specifically matched to your budget and return targets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-3.5 rounded-full transition-colors text-sm"
            >
              Send Chan Your Criteria
            </a>
            <a
              href="tel:4036810107"
              className="border border-white/30 hover:border-accent hover:text-accent text-white font-semibold px-8 py-3.5 rounded-full transition-colors text-sm"
            >
              📞 403-681-0107
            </a>
          </div>
        </div>

        {/* Blog posts */}
        <div>
          <div className="mb-8">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">From the Blog</span>
            <h2 className="text-3xl font-bold text-primary mt-2">Investor Resources</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Link
                key={post.href}
                href={post.href}
                className="group bg-white rounded-2xl border border-neutral-mid shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col"
              >
                <span className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">
                  {post.category}
                </span>
                <h3 className="text-base font-bold text-primary group-hover:text-accent transition-colors mb-2 leading-snug flex-1">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">{post.excerpt}</p>
                <span className="text-xs font-semibold text-accent group-hover:underline">
                  Read More →
                </span>
              </Link>
            ))}

            {/* Coming soon placeholder */}
            <div className="bg-neutral-light rounded-2xl border border-dashed border-neutral-mid p-6 flex flex-col items-center justify-center text-center min-h-[180px]">
              <span className="text-2xl mb-3">✍️</span>
              <p className="text-sm font-semibold text-gray-400">More investor articles coming soon</p>
              <p className="text-xs text-gray-400 mt-1">Cap rates, BRRRR strategy, multi-family tips & more</p>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div id="contact" className="grid grid-cols-1 lg:grid-cols-5 gap-12 border-t border-neutral-mid pt-16">
          <div className="lg:col-span-2 space-y-5">
            <div>
              <h2 className="text-xl font-bold text-primary mb-1">
                Talk to Chan About Investing
              </h2>
              <p className="text-gray-500 text-sm">REMAX Real Estate Agent · Calgary, AB</p>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Whether you&apos;re analyzing your first rental or expanding an
              existing portfolio, Chan will run the real numbers with you and
              help you find the right opportunity in Calgary&apos;s market.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <span className="text-xl">📞</span>
                <a href="tel:4036810107" className="text-sm font-medium text-primary hover:text-accent transition-colors">
                  403-681-0107
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-xl">✉️</span>
                <a href="mailto:hello@livingwithchan.com" className="text-sm font-medium text-primary hover:text-accent transition-colors">
                  hello@livingwithchan.com
                </a>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-3 bg-white rounded-2xl shadow-sm border border-neutral-mid p-8">
            <h2 className="text-xl font-bold text-primary mb-1">Send a Message</h2>
            <p className="text-sm text-gray-500 mb-6">
              Tell Chan your budget, target return, and preferred area — he&apos;ll get back to you within 24 hours.
            </p>
            <ContactForm />
          </div>
        </div>

      </div>
    </div>
  );
}
