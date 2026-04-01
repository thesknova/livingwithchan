import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Renting vs. Buying in Calgary | Chan Kawaguchi",
  description:
    "Should you rent or buy in Calgary? Chan Kawaguchi breaks down the real pros and cons of each option — including what most people get wrong about the math.",
};

export default function RentingVsBuyingPost() {
  return (
    <div className="bg-neutral-light min-h-screen">
      {/* Header */}
      <div className="bg-primary text-white py-14 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="text-xs font-semibold uppercase tracking-widest text-accent hover:text-white transition-colors mb-6 inline-block"
          >
            ← Back to Blog
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">
              Buyer Tips
            </span>
            <span className="text-stone-500 text-xs">·</span>
            <span className="text-xs text-stone-400">8 min read</span>
            <span className="text-stone-500 text-xs">·</span>
            <span className="text-xs text-stone-400">March 31, 2026</span>
          </div>
          <h1 className="text-4xl font-bold leading-tight mb-4">
            Renting vs. Buying in Calgary: An Honest Comparison
          </h1>
          <p className="text-stone-400 text-lg">
            By Chan Kawaguchi · REMAX Real Estate Agent, Calgary AB
          </p>
        </div>
      </div>

      {/* Article body */}
      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="prose prose-gray max-w-none">

          {/* Intro */}
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            &ldquo;Should I rent or buy?&rdquo; It&apos;s the most common question I get from people who are new to Calgary, early in their careers, or simply unsure about the market. And honestly, there&apos;s no single right answer — it depends on your life stage, your finances, and your goals.
          </p>
          <p className="text-gray-600 leading-relaxed mb-10">
            What I can do is cut through the noise and give you the real picture. I&apos;ve helped hundreds of Calgary families make this decision, and I&apos;ve seen what works — and what people regret. Here&apos;s what you actually need to know.
          </p>

          {/* The case for buying */}
          <div className="bg-white rounded-2xl border border-neutral-mid p-8 mb-10">
            <h2 className="text-2xl font-bold text-primary mb-6">The Case for Buying</h2>

            <div className="space-y-6">
              <div className="flex gap-4">
                <span className="text-2xl flex-shrink-0">🏠</span>
                <div>
                  <h3 className="font-semibold text-primary mb-1">You Build Equity with Every Payment</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    When you pay rent, that money is gone. When you pay a mortgage, a portion of every payment reduces your loan balance and builds ownership. Over time — especially in a market like Calgary where prices have historically trended upward — that equity becomes real wealth. A homeowner who bought a detached home in Calgary ten years ago has typically seen their net worth grow significantly just from appreciation alone.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="text-2xl flex-shrink-0">📈</span>
                <div>
                  <h3 className="font-semibold text-primary mb-1">Alberta&apos;s Tax Advantage</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Alberta has no provincial income tax on capital gains from a principal residence sale — the same federal exemption that applies everywhere. But Alberta also has no land transfer tax (unlike BC or Ontario, where buyers can pay tens of thousands at closing). This makes the cost of buying and selling in Calgary significantly lower, which means more of your equity stays in your pocket.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="text-2xl flex-shrink-0">🔒</span>
                <div>
                  <h3 className="font-semibold text-primary mb-1">Stability and Control</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Owning means nobody can raise your rent, renovict you, or sell the property out from under you. Your monthly payment is predictable (especially on a fixed mortgage), and you can renovate, paint, or get a dog without asking permission. That stability has real value — especially for families with kids in school or people who want to put down roots in a community.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="text-2xl flex-shrink-0">🛡️</span>
                <div>
                  <h3 className="font-semibold text-primary mb-1">A Hedge Against Inflation</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Real estate tends to rise with inflation over the long run. If you lock in a mortgage today, your payment stays roughly the same while rents and prices around you increase. Ten years from now, what seems like a large mortgage payment today will feel very manageable.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Cons of buying */}
          <div className="bg-white rounded-2xl border border-neutral-mid p-8 mb-10">
            <h2 className="text-2xl font-bold text-primary mb-2">The Downsides of Buying</h2>
            <p className="text-sm text-gray-500 mb-6">Being honest matters more than a sales pitch.</p>

            <div className="space-y-5">
              <div className="flex gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-2" />
                <div>
                  <p className="text-sm font-semibold text-primary mb-1">High Upfront Costs</p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    In Calgary, you&apos;ll need at minimum 5% down on homes under $500K, and 10% on the portion between $500K and $999K. Add in legal fees, home inspection, title insurance, and moving costs, and you&apos;re typically looking at $25,000–$50,000 cash to close depending on the price point. That&apos;s a real barrier for many first-time buyers.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-2" />
                <div>
                  <p className="text-sm font-semibold text-primary mb-1">You Own the Problems Too</p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Furnace breaks in January? That&apos;s your bill. Roof needs replacing after 20 years? Also yours. Homeownership carries ongoing maintenance costs that renters never think about — a common rule of thumb is budgeting 1–2% of your home&apos;s value per year for maintenance and repairs.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-2" />
                <div>
                  <p className="text-sm font-semibold text-primary mb-1">Reduced Flexibility</p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Selling a home takes time and costs money — typically 3–5% of the sale price in commissions plus closing costs. If your job situation changes or you want to move cities within two or three years, buying may not make financial sense. Generally, you need to stay in a home for at least three to five years for ownership to outperform renting financially.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-2" />
                <div>
                  <p className="text-sm font-semibold text-primary mb-1">Market Risk Is Real</p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Calgary&apos;s market is tied to Alberta&apos;s economy, which is influenced by oil prices, interest rates, and migration patterns. While the long-term trend has been positive, there have been significant downturns. Buying at the peak and needing to sell in a downturn is a painful situation that&apos;s entirely possible.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* The case for renting */}
          <div className="bg-white rounded-2xl border border-neutral-mid p-8 mb-10">
            <h2 className="text-2xl font-bold text-primary mb-6">The Case for Renting</h2>

            <div className="space-y-6">
              <div className="flex gap-4">
                <span className="text-2xl flex-shrink-0">✈️</span>
                <div>
                  <h3 className="font-semibold text-primary mb-1">Maximum Flexibility</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Renting gives you the ability to move quickly — for a new job, a new relationship, a new city, or simply because you want a different neighbourhood. For people in their 20s and early 30s who are still figuring out their career and life path, this flexibility has enormous value that&apos;s hard to put a number on.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="text-2xl flex-shrink-0">💸</span>
                <div>
                  <h3 className="font-semibold text-primary mb-1">Lower Upfront Cost</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    A damage deposit and first month&apos;s rent is all you need to move into a rental. That cash you haven&apos;t tied up in a down payment can be invested elsewhere — the stock market, your business, or your education.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="text-2xl flex-shrink-0">🔧</span>
                <div>
                  <h3 className="font-semibold text-primary mb-1">No Maintenance Responsibility</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    When something breaks, you call the landlord. That simplicity has real value — especially if you travel frequently, work long hours, or simply don&apos;t want to spend your weekends on home repairs.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="text-2xl flex-shrink-0">🧪</span>
                <div>
                  <h3 className="font-semibold text-primary mb-1">Try Before You Commit to a Neighbourhood</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    New to Calgary? Renting in a neighbourhood for a year before buying is a smart move. You&apos;ll learn which communities actually suit your commute, your lifestyle, and your personality — information that&apos;s worth a lot when you make a $500,000+ decision.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Cons of renting */}
          <div className="bg-white rounded-2xl border border-neutral-mid p-8 mb-10">
            <h2 className="text-2xl font-bold text-primary mb-2">The Downsides of Renting</h2>

            <div className="space-y-5">
              <div className="flex gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-2" />
                <div>
                  <p className="text-sm font-semibold text-primary mb-1">You&apos;re Building Someone Else&apos;s Equity</p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Every rent payment goes entirely to your landlord. Over 25 years, the difference between rent paid and mortgage paid — with zero equity to show for the rent — is massive. This is the biggest long-term financial disadvantage of renting.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-2" />
                <div>
                  <p className="text-sm font-semibold text-primary mb-1">Rent Increases Are Out of Your Control</p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Alberta has no rent control. Your landlord can raise your rent significantly at renewal, and Calgary has seen large rent increases in recent years as the city has grown rapidly. Your &ldquo;affordable&rdquo; rental today may not be affordable in three years.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-2" />
                <div>
                  <p className="text-sm font-semibold text-primary mb-1">No Personalization</p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Want to paint the walls, put up shelves, or renovate the kitchen? Most landlords say no. Renting means living in someone else&apos;s space on their terms.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-2" />
                <div>
                  <p className="text-sm font-semibold text-primary mb-1">Insecurity of Tenure</p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    A landlord can decide to sell, move in family members, or simply not renew your lease. No matter how good a tenant you are, you can be asked to leave with proper notice. That instability is stressful — particularly for families with children in schools and established routines.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* The Calgary context */}
          <div className="bg-accent/10 border border-accent/20 rounded-2xl p-8 mb-10">
            <h2 className="text-2xl font-bold text-primary mb-4">The Calgary Context</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Calgary is a unique market. The city has grown dramatically in recent years, driven by interprovincial migration, a strong job market, and relative affordability compared to Vancouver and Toronto. Average detached home prices in Calgary are still well below both of those cities, and Alberta&apos;s no-PST, no-land-transfer-tax environment reduces transaction costs significantly.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              At the same time, the rental market has tightened considerably. Calgary&apos;s rental vacancy rate has dropped sharply, and average rents for a two-bedroom apartment in desirable inner-city communities have risen to $2,200–$2,800/month. That&apos;s not far off what a mortgage payment looks like on an entry-level condo purchase with 10% down.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The practical implication: for many Calgarians, the monthly cost difference between renting and owning has narrowed — which means the equity-building advantage of owning is now more compelling than it has been in the past.
            </p>
          </div>

          {/* So what should you do? */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-primary mb-6">So What Should You Do?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Here&apos;s my honest framework. Buy if:
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "You plan to stay in Calgary for at least 3–5 years",
                "You have enough saved for a down payment and closing costs",
                "Your income is stable enough to qualify for a mortgage",
                "You want stability and the ability to build long-term wealth through real estate",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm text-gray-600">
                  <span className="text-accent font-bold flex-shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-gray-600 leading-relaxed mb-4">
              Rent if:
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "You&apos;re new to Calgary and still learning which neighbourhoods suit you",
                "Your career or life plans are uncertain in the next 1–3 years",
                "You don&apos;t have the down payment saved yet (but start saving now)",
                "The stress of homeownership would genuinely outweigh the financial benefits for your lifestyle",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm text-gray-600">
                  <span className="text-accent font-bold flex-shrink-0">✓</span>
                  <span dangerouslySetInnerHTML={{ __html: item }} />
                </li>
              ))}
            </ul>
            <p className="text-gray-600 leading-relaxed">
              And if you&apos;re renting and dreaming of buying, don&apos;t wait for the &ldquo;perfect&rdquo; time. The best time to buy was ten years ago. The second-best time is when you are financially ready and plan to stay put. Nobody has ever successfully and consistently timed the real estate market.
            </p>
          </div>

          {/* Final word */}
          <div className="border-l-4 border-accent pl-6 mb-14">
            <p className="text-gray-700 italic leading-relaxed">
              &ldquo;I&apos;ve talked to many people who waited for prices to drop and ended up paying more. I&apos;ve also talked to people who bought before they were financially ready and ended up stretched. The goal is to buy at the right time for <em>you</em> — not the market.&rdquo;
            </p>
            <p className="text-sm text-accent font-semibold mt-3">— Chan Kawaguchi, REMAX Calgary</p>
          </div>

        </div>

        {/* CTA / Contact */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 border-t border-neutral-mid pt-14">
          <div className="lg:col-span-2 space-y-5">
            <div>
              <h2 className="text-xl font-bold text-primary mb-1">
                Not Sure Where You Stand?
              </h2>
              <p className="text-gray-500 text-sm">
                REMAX Real Estate Agent · Calgary, AB
              </p>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Chan offers a no-obligation conversation to help you figure out
              whether buying makes sense for your situation right now — or what
              you need to do to get there.
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
              Whether you&apos;re ready to buy or just starting to think about it, Chan is happy to chat — no pressure, no obligation.
            </p>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
