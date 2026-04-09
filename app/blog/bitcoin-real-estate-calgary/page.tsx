import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import BitcoinCalculator from "@/components/BitcoinCalculator";

export const metadata: Metadata = {
  title: "Bitcoin and Real Estate in Calgary: How It Works | Chan Kawaguchi",
  description:
    "Can you buy or sell a home in Calgary with Bitcoin? Chan breaks down how crypto real estate transactions work in Canada, covering the process, tax implications, real Calgary examples, and a live BTC/CAD calculator.",
};

export default function BitcoinRealEstatePost() {
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
              Investor Tips
            </span>
            <span className="text-stone-500 text-xs">·</span>
            <span className="text-xs text-stone-400">12 min read</span>
            <span className="text-stone-500 text-xs">·</span>
            <span className="text-xs text-stone-400">April 1, 2026</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">
            Bitcoin and Real Estate in Calgary: How Crypto Transactions Actually Work
          </h1>
          <p className="text-stone-400 text-lg leading-relaxed">
            Bitcoin real estate transactions are legal in Canada, and Calgary has been one of the most active markets for them. Here&apos;s what both buyers and sellers need to understand, including the tax implications, the risks, and a live calculator to convert between BTC and CAD.
          </p>
        </div>
      </div>

      {/* Article body */}
      <div className="max-w-3xl mx-auto px-6 py-14 space-y-12 text-gray-700 leading-relaxed text-sm">

        {/* Intro */}
        <section className="space-y-4">
          <p>
            In October 2021, a Calgary home in the Glendale neighbourhood sold for approximately $1 million, with $800,000 of that paid in Bitcoin. It wasn&apos;t a publicity stunt. The seller specifically sought out a brokerage capable of facilitating a Bitcoin transaction because he wanted to transact in crypto. The deal closed. Title transferred. The seller&apos;s lawyer received Canadian dollars on closing day.
          </p>
          <p>
            That deal was facilitated by{" "}
            <a href="https://greaterpropertygroup.com/gpg-blog-canadas-greater-property-group-celebrates-milestone-sells-first-property-entirely-in-bitcoin/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Greater Property Group</a>,
            a Calgary-based brokerage that had already completed the first 100%-Bitcoin property sale in Canadian history earlier that year. Calgary isn&apos;t just crypto-curious. It&apos;s been at the forefront of this in Canada.
          </p>
          <p>
            So: can you buy or sell a home in Calgary with Bitcoin? Yes. Should you? That depends on your situation. This article walks through how it works, what you need to know legally and tax-wise, and where the real risks lie.
          </p>
        </section>

        {/* Live calculator */}
        <section className="space-y-4">
          <div className="text-center mb-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">Live Tool</span>
            <h2 className="text-2xl font-bold text-primary mt-1">BTC ↔ CAD Property Calculator</h2>
            <p className="text-gray-500 mt-1 text-xs">
              Pulls the live Bitcoin price and converts in both directions. Move either slider.
            </p>
          </div>
          <BitcoinCalculator />
        </section>

        {/* Is it legal */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-primary">Is It Legal in Canada?</h2>
          <p>
            Yes, purchasing real estate with Bitcoin is fully legal in Canada.{" "}
            <a href="https://www.lightspark.com/knowledge/is-crypto-legal-in-canada" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Cryptocurrency is classified as a commodity under Canadian law</a>,
            not legal tender. This means you can use it in transactions just as you would any other non-cash asset, subject to the applicable tax treatment (more on that below).
          </p>
          <p>
            What Canada does <em>not</em> have is a streamlined regulatory framework designed specifically for crypto real estate. There is no single national standard, no crypto-specific escrow law, and no regulated mechanism for lawyers to hold cryptocurrency in their trust accounts the way they hold fiat deposits. This creates friction and some risk that requires careful structuring to manage.
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 text-sm text-blue-900">
            <strong>FINTRAC compliance is mandatory.</strong> Under the{" "}
            <em>Proceeds of Crime (Money Laundering) and Terrorist Financing Act</em>,
            all parties (the buyer, the crypto exchange used, and the facilitating brokerage) must comply with anti-money laundering (AML) and know-your-customer (KYC) rules. The Bitcoin must be traceable to a FINTRAC-registered exchange with a clean transaction history. Funds from cold wallets without exchange records, or from offshore unregulated platforms, will likely be rejected by the buyer&apos;s lawyer.{" "}
            <a href="https://fintrac-canafe.canada.ca/businesses-entreprises/changes-changements-eng" target="_blank" rel="noopener noreferrer" className="underline font-semibold">FINTRAC</a>
            {" "}issued its largest-ever penalty of $177 million against a crypto exchange in 2025 for failing to file Suspicious Transaction Reports. Enforcement is real.
          </div>
        </section>

        {/* How it works */}
        <section className="space-y-5">
          <h2 className="text-2xl font-bold text-primary">How a Bitcoin Real Estate Transaction Actually Works</h2>
          <p>
            There are three structural approaches. The vast majority of Canadian deals use Method A.
          </p>

          {[
            {
              label: "Method A: Intermediary Conversion",
              tag: "Most common",
              tagColor: "bg-green-100 text-green-700",
              body: `A specialized brokerage (Greater Property Group, BTCHome.ca) acts as the bridge. The buyer sends Bitcoin to the platform, which instantly converts it to Canadian dollars and wires fiat to the seller's lawyer in trust. The seller, listing agent, and title company experience the deal as a standard real estate sale, no crypto wallet required on their end. BTCHome.ca offers a "rate freeze guarantee" that locks the BTC/CAD conversion rate the moment a payment invoice is issued, protecting both parties from price swings during the closing window.`,
              href: "https://btchome.ca/buying-real-estate-bitcoin.htm",
              hrefLabel: "BTCHome.ca: How it works",
            },
            {
              label: "Method B: Crypto Escrow",
              tag: "Higher risk",
              tagColor: "bg-yellow-100 text-yellow-700",
              body: "A neutral third-party crypto escrow holds the Bitcoin until all conditions of the sale are satisfied, then releases funds to the seller. This is closer to a traditional holdback but is largely unregulated in Canada. The buyer must transfer BTC into the escrow provider's wallet, introducing counterparty risk, a real concern given the collapses of Celsius, BlockFi, and FTX in recent years.",
              href: null,
              hrefLabel: null,
            },
            {
              label: "Method C: Direct Wallet-to-Wallet",
              tag: "Rare",
              tagColor: "bg-gray-100 text-gray-700",
              body: "Peer-to-peer transfer directly between buyer and seller wallets. Maximum control, maximum trust required. Rarely used for high-value transactions without significant additional legal scaffolding and a relationship of deep mutual trust.",
              href: null,
              hrefLabel: null,
            },
          ].map((m) => (
            <div key={m.label} className="bg-white rounded-xl border border-neutral-mid p-5">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-sm font-bold text-primary">{m.label}</h3>
                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${m.tagColor}`}>{m.tag}</span>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">{m.body}</p>
              {m.href && (
                <a href={m.href} target="_blank" rel="noopener noreferrer" className="text-xs text-accent hover:underline mt-2 inline-block">
                  {m.hrefLabel} →
                </a>
              )}
            </div>
          ))}

          <h3 className="text-base font-bold text-primary mt-4">What Goes in the Purchase Agreement</h3>
          <p>
            A standard Alberta purchase and sale agreement does not contemplate cryptocurrency. A Bitcoin deal requires custom clauses addressing:
          </p>
          <ul className="list-disc list-inside space-y-1.5 pl-2 text-sm">
            <li>Whether the price is denominated in <strong>CAD</strong> (BTC calculated at closing spot rate) or fixed in <strong>BTC</strong></li>
            <li>Exactly <em>which exchange</em>, <em>which timestamp</em>, and which averaging method sets the exchange rate</li>
            <li>How many blockchain confirmations are required before funds are considered received</li>
            <li>Fallback provisions if the BTC price moves more than a set percentage between signing and closing</li>
            <li>What happens if the deal collapses before the Bitcoin transfer completes</li>
          </ul>
          <p>
            Title transfer itself is unaffected by the payment method. It is still registered by a lawyer via a standard{" "}
            <em>Transfer of Land</em> document at the Alberta Land Titles Office.
          </p>
        </section>

        {/* NDAX section */}
        <section className="space-y-5">
          <h2 className="text-2xl font-bold text-primary">NDAX: The Exchange Chan&apos;s Brokerage Is Using</h2>
          <p>
            Not all exchanges are created equal for real estate transactions. Chan&apos;s brokerage is currently evaluating{" "}
            <a href="https://ndax.io" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">NDAX (National Digital Asset Exchange)</a>
            {" "}as its preferred platform for facilitating Bitcoin real estate deals, and there are good reasons for that.
          </p>
          <div className="bg-white rounded-2xl border border-neutral-mid overflow-hidden shadow-sm">
            <div className="bg-[#1a1a2e] px-6 py-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white text-xs font-black">N</div>
              <div>
                <h3 className="text-sm font-bold text-white">NDAX: National Digital Asset Exchange</h3>
                <p className="text-xs text-gray-400">Canadian-registered · Calgary-based · FINTRAC compliant</p>
              </div>
            </div>
            <div className="p-6 space-y-4 text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    icon: "🇨🇦",
                    title: "Canadian-Registered Exchange",
                    body: "NDAX is headquartered in Calgary and is fully registered with FINTRAC as a Money Services Business, a hard requirement for source-of-funds documentation in real estate transactions.",
                  },
                  {
                    icon: "📋",
                    title: "Full KYC/AML Compliance",
                    body: "NDAX performs thorough identity verification and maintains complete transaction records, exactly what a real estate lawyer needs to satisfy AML documentation requirements.",
                  },
                  {
                    icon: "💱",
                    title: "CAD On/Off Ramps",
                    body: "Direct CAD deposits and withdrawals via Interac e-Transfer and bank wire. For Method A deals, this makes the BTC-to-CAD conversion straightforward and fully auditable.",
                  },
                  {
                    icon: "📞",
                    title: "Dedicated Support",
                    body: "Unlike international platforms, NDAX offers phone and email support in Canadian time zones, important when a closing has a tight timeline and something needs resolving quickly.",
                  },
                ].map((item) => (
                  <div key={item.title} className="bg-neutral-light rounded-xl border border-neutral-mid p-4">
                    <span className="text-xl block mb-2">{item.icon}</span>
                    <h4 className="text-sm font-bold text-primary mb-1">{item.title}</h4>
                    <p className="text-xs text-gray-600 leading-relaxed">{item.body}</p>
                  </div>
                ))}
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-xs text-blue-900">
                <strong>Why the exchange choice matters:</strong> The buyer&apos;s lawyer will review the exchange used to source the Bitcoin. A FINTRAC-registered Canadian exchange with a clear transaction history is significantly easier to document and get approved than funds moved through offshore or unregistered platforms. Using NDAX from the start, rather than transferring from an offshore wallet at the last minute, reduces friction at closing and strengthens the source-of-funds paper trail.
              </div>
              <p className="text-xs text-gray-500">
                <a href="https://ndax.io" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">ndax.io</a>
                {" "}·{" "}
                <a href="https://fintrac-canafe.canada.ca/msb-esm/public/biz-info-eng?id=M22225443" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">FINTRAC MSB Registry: NDAX</a>
              </p>
            </div>
          </div>
        </section>

        {/* Calgary examples */}
        <section className="space-y-5">
          <h2 className="text-2xl font-bold text-primary">Real Calgary Bitcoin Real Estate Deals</h2>
          <div className="space-y-4">
            {[
              {
                year: "2021",
                title: "$1M Glendale Home: $800K Paid in Bitcoin",
                body: `A Calgary home sold for approximately $1 million, with $800,000 of that paid in Bitcoin and $200,000 in Canadian dollars. Facilitated by Greater Property Group, this became one of the most widely reported Canadian crypto real estate transactions.`,
                href: "https://storeys.com/calgary-home-purchased-bitcoin/",
                hrefLabel: "Storeys: Full Story",
              },
              {
                year: "2021",
                title: "First 100% Bitcoin Property Sale in Canada",
                body: "Greater Property Group completed the first property sold entirely in Bitcoin with no fiat component anywhere in the transaction, a Canadian first.",
                href: "https://greaterpropertygroup.com/gpg-blog-canadas-greater-property-group-celebrates-milestone-sells-first-property-entirely-in-bitcoin/",
                hrefLabel: "Greater Property Group: Press Release",
              },
              {
                year: "2019",
                title: "37 Acres Near Calgary Airport Listed for 2,800+ BTC",
                body: "Nearly 15 hectares (37 acres) of land near the Calgary airport was listed for over 2,800 BTC (approximately $32.9 million CAD at the time), demonstrating appetite for Bitcoin in Calgary commercial real estate.",
                href: "https://calgary.ctvnews.ca/calgary-real-estate-s-new-asking-price-cryptocurrency-1.4676979",
                hrefLabel: "CTV News Calgary",
              },
              {
                year: "2025",
                title: "Chan's Clients: Calgary Home Purchased Using Bitcoin",
                body: "Chan's buyers came to the table with Bitcoin and a firm intention to use it. Because no Canadian lender accepts crypto directly, the Bitcoin was converted to Canadian dollars through a FINTRAC-registered exchange before closing, a clean Method A transaction. The deal proceeded like any standard cash purchase from the seller's perspective, with fiat wired to the seller's lawyer in trust. The buyers' biggest surprise was the capital gains tax triggered at the point of conversion: the BTC had appreciated significantly since purchase, and that gain became a taxable disposal event the moment it was exchanged for CAD.",
                href: null,
                hrefLabel: null,
              },
              {
                year: "2013",
                title: "The First: Crowsnest Pass Bungalow",
                body: `Alberta was actually one of the earliest places in the world where a home was listed with Bitcoin accepted as payment: a two-bedroom bungalow in Crowsnest Pass listed at $405,000 in 2013.`,
                href: "https://www.theglobeandmail.com/news/national/alberta-man-selling-his-400000-house-for-virtual-money-rather-than-cash/article10073392/",
                hrefLabel: "Globe and Mail: Original Article",
              },
            ].map((ex) => (
              <div key={ex.title} className="bg-white rounded-xl border border-neutral-mid p-5 flex gap-4">
                <span className="text-xs font-black text-accent bg-accent/10 px-2 py-1 rounded-lg flex-shrink-0 h-fit mt-0.5">{ex.year}</span>
                <div>
                  <h3 className="text-sm font-bold text-primary mb-1">{ex.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-2">{ex.body}</p>
                  {ex.href && (
                    <a href={ex.href} target="_blank" rel="noopener noreferrer" className="text-xs text-accent hover:underline">
                      {ex.hrefLabel} →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits */}
        <section className="space-y-5">
          <h2 className="text-2xl font-bold text-primary">The Case For Bitcoin in Real Estate</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                icon: "🌏",
                title: "Borderless Transactions",
                body: "A buyer in Hong Kong, Dubai, or Europe can transfer value directly without routing through SWIFT or correspondent banks. This meaningfully expands the buyer pool for Calgary properties targeting international investors.",
              },
              {
                icon: "⚡",
                title: "Speed",
                body: "International bank wires take 1–5 business days. Bitcoin confirms in 10–60 minutes on-chain. For all-cash deals without a mortgage, closings that normally take 30–90 days can be compressed significantly.",
              },
              {
                icon: "💸",
                title: "Lower Transfer Costs",
                body: "International wire fees run 2–5% of the transaction. Bitcoin network fees are typically a flat amount (often under $50 CAD) regardless of transaction size. On a $1M deal, that difference is significant.",
              },
              {
                icon: "🔓",
                title: "No Mortgage Qualification",
                body: "No credit check, no income verification, no OSFI stress test. Crypto-wealthy buyers with unconventional income (freelancers, international nationals, business owners) can bypass the bank qualification process entirely.",
              },
              {
                icon: "🎯",
                title: "Access to Crypto-Wealthy Buyers",
                body: "Long-term Bitcoin holders have seen massive appreciation. Some prefer to use BTC directly in a property purchase rather than selling it first (which triggers capital gains). Accepting Bitcoin signals access to this demographic.",
              },
              {
                icon: "📋",
                title: "Transparent Audit Trail",
                body: "Every Bitcoin transaction is recorded permanently on the public blockchain, irreversible and auditable. This reduces certain fraud risks (no chargeback, no bounced deposit cheques).",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl border border-neutral-mid p-5">
                <span className="text-2xl block mb-2">{item.icon}</span>
                <h3 className="text-sm font-bold text-primary mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Challenges */}
        <section className="space-y-5">
          <h2 className="text-2xl font-bold text-primary">The Challenges and Risks</h2>
          <div className="space-y-4">
            {[
              {
                icon: "📉",
                title: "Price Volatility",
                body: "Between a signed offer and a 30–60 day closing, Bitcoin can swing 20–40% in either direction. If the price is denominated in BTC rather than CAD, both parties face meaningful exposure. Most Calgary crypto deals address this by pegging the price in CAD and calculating the BTC equivalent at spot rate on closing day.",
              },
              {
                icon: "🏦",
                title: "No Mortgage Financing Available",
                body: "No major Canadian bank accepts cryptocurrency as a down payment source. A buyer using Bitcoin must pay the full purchase price with no 5% down option or crypto top-up. Some alternative lenders will accept documented crypto-sourced funds that have been converted to CAD and held untouched in a Canadian bank account for 3–6 months (\"seasoning\").",
              },
              {
                icon: "📂",
                title: "Source of Funds Documentation",
                body: "Lawyers and brokerages must verify where the Bitcoin came from. The entire acquisition history must be clean, complete, and traceable: exchange statements, wallet addresses, conversion records. Funds from cold wallets without exchange records, privacy coins, or offshore unregulated exchanges will likely be refused.",
              },
              {
                icon: "⚖️",
                title: "Escrow Limitations",
                body: "Canadian lawyers generally cannot hold cryptocurrency in regulated trust accounts. Informal crypto escrow providers are unregulated. If a deal collapses after BTC is sent to an escrow provider, recovery may be slow, expensive, or impossible.",
              },
              {
                icon: "🧾",
                title: "Capital Gains Tax at Time of Use",
                body: "Using Bitcoin to buy property is a taxable disposal event. The moment you transfer BTC to purchase real estate, the CRA considers you to have sold the Bitcoin at its current fair market value, triggering capital gains tax on your profit since acquisition. This can significantly reduce purchasing power and requires advance tax planning.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-amber-50 border border-amber-200 rounded-xl p-5 flex gap-4">
                <span className="text-2xl flex-shrink-0">{item.icon}</span>
                <div>
                  <h3 className="text-sm font-bold text-primary mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CRA tax section */}
        <section className="space-y-5">
          <h2 className="text-2xl font-bold text-primary">The CRA Tax Implications: What You Must Know</h2>
          <p>
            This is the most practically important section for anyone considering a Bitcoin real estate transaction. The{" "}
            <a href="https://www.canada.ca/en/revenue-agency/programs/about-canada-revenue-agency-cra/compliance/cryptocurrency-guide/income-crypto-transactions.html" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              CRA treats cryptocurrency as a commodity, not currency
            </a>.
            {" "}Using Bitcoin to buy property is a <em>barter transaction</em>: you are disposing of a capital asset in exchange for another asset.
          </p>

          <div className="bg-white rounded-2xl border border-neutral-mid overflow-hidden shadow-sm">
            <div className="bg-primary px-6 py-4">
              <h3 className="text-sm font-bold text-white">Tax Example: Using BTC to Buy a Calgary Home</h3>
            </div>
            <div className="p-6 space-y-3 text-sm">
              {[
                ["You purchased", "10 BTC at an average cost of $5,000 CAD each → ACB = $50,000"],
                ["Today's BTC price", "$150,000 CAD (hypothetical)"],
                ["Property purchase", "You use 5 BTC to buy a $750,000 CAD home"],
                ["Your capital gain", "5 BTC × ($150,000 − $5,000) = $725,000 CAD gain"],
                ["Taxable amount (50%)", "$362,500 added to your income for the year*"],
                ["Marginal tax (est.)", "~$145,000–$170,000 owing to CRA at time of filing"],
              ].map(([label, value]) => (
                <div key={label} className="flex gap-3">
                  <span className="font-semibold text-primary w-40 flex-shrink-0">{label}</span>
                  <span className="text-gray-600">{value}</span>
                </div>
              ))}
              <p className="text-xs text-gray-400 pt-2 border-t border-neutral-mid">
                * For gains over $250,000 in a single year, the inclusion rate increases to 2/3 under rules effective January 1, 2026. Consult a Canadian accountant for your specific situation.
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-base font-bold text-primary">Key CRA Rules</h3>
            {[
              {
                rule: "Adjusted Cost Base (ACB) method",
                detail: "You must average your cost across all BTC you hold. You cannot choose specific coins. If you bought BTC at various prices, your ACB is the total cost divided by total BTC owned.",
              },
              {
                rule: "Sellers who receive BTC must report too",
                detail: "If you sell your property and accept Bitcoin as payment, you receive BTC at its fair market value on closing day. If you later sell or use that BTC and it has appreciated, that further gain is a new taxable event.",
              },
              {
                rule: "Foreign exchange reporting (T1135)",
                detail: "If you hold crypto on a foreign exchange worth over $100,000 CAD at any point in the year, you must file a T1135 Foreign Income Verification Statement.",
              },
              {
                rule: "Record-keeping is critical",
                detail: "You must document every acquisition: date, amount paid in CAD, transaction fees. The CRA can audit up to 6 years back. Poor records are not an acceptable excuse.",
              },
            ].map((item) => (
              <div key={item.rule} className="flex gap-3 text-sm bg-white rounded-xl border border-neutral-mid p-4">
                <span className="text-accent font-bold flex-shrink-0 mt-0.5">→</span>
                <div>
                  <span className="font-semibold text-primary">{item.rule}: </span>
                  <span className="text-gray-600">{item.detail}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500">
            Source:{" "}
            <a href="https://www.canada.ca/en/revenue-agency/programs/about-canada-revenue-agency-cra/compliance/cryptocurrency-guide/income-crypto-transactions.html" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              CRA: Reporting income from crypto-asset transactions
            </a>
            {" "}·{" "}
            <a href="https://koinly.io/guides/crypto-tax-canada/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              Koinly: Canada Crypto Tax Guide 2026
            </a>
          </p>
        </section>

        {/* Step by step */}
        <section className="space-y-5">
          <h2 className="text-2xl font-bold text-primary">How to Buy a Property in Calgary with Bitcoin: Step by Step</h2>
          <div className="space-y-3">
            {[
              {
                step: "1",
                title: "Find a Bitcoin-Friendly Listing or Agent",
                body: "Search BTCHome.ca, contact Greater Property Group or Len T. Wong & Associates (RE/MAX Calgary), or ask Chan to reach out to sellers who may be open to a crypto offer.",
              },
              {
                step: "2",
                title: "Move Your BTC to a FINTRAC-Registered Exchange",
                body: "Transfer from cold wallets or offshore exchanges to a registered Canadian exchange. Chan's brokerage uses NDAX (National Digital Asset Exchange), a Calgary-based, FINTRAC-registered platform that provides the full KYC/AML paper trail your lawyer will need. Compile complete acquisition records: dates, amounts paid in CAD, transaction IDs.",
              },
              {
                step: "3",
                title: "Get Your Tax Situation Assessed First",
                body: "Before making an offer, consult a Canadian accountant or crypto tax specialist. Calculate your ACB and estimate the capital gains tax triggered at the moment of purchase. This affects your real purchasing power.",
              },
              {
                step: "4",
                title: "Engage a Crypto-Experienced Real Estate Lawyer",
                body: "You need a Calgary real estate lawyer who has handled crypto transactions before. They will advise on the custom agreement clauses required, handle the Alberta Land Titles registration, and satisfy source-of-funds due diligence.",
              },
              {
                step: "5",
                title: "Structure the Transaction",
                body: "Choose your facilitation method. Agree on the price denomination (CAD, not BTC), the exchange rate mechanism (which exchange, which timestamp), and the number of blockchain confirmations required before funds are considered received.",
              },
              {
                step: "6",
                title: "Prepare Source-of-Funds Documentation",
                body: "Compile exchange account statements, wallet transaction records, bank statements showing any fiat-to-crypto conversions, and any prior tax returns showing crypto as a reported asset.",
              },
              {
                step: "7",
                title: "Transfer, Confirm, Close",
                body: "Execute the BTC transfer. Await blockchain confirmations. The intermediary converts to CAD and wires to the seller's lawyer. Standard Alberta closing proceeds from here. Your lawyer registers the Transfer of Land at the Alberta Land Titles Office.",
              },
              {
                step: "8",
                title: "Report to CRA at Tax Time",
                body: "File Schedule 3 with your T1 return, reporting the disposal of Bitcoin and your capital gain. Pay any tax owing. Keep all records for at least 6 years.",
              },
            ].map((item) => (
              <div key={item.step} className="bg-white rounded-xl border border-neutral-mid p-5 flex gap-4">
                <span className="w-8 h-8 rounded-full bg-accent text-white text-sm font-black flex items-center justify-center flex-shrink-0 mt-0.5">{item.step}</span>
                <div>
                  <h3 className="text-sm font-bold text-primary mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Resources */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-primary">Calgary Bitcoin Real Estate Resources</h2>
          <div className="bg-white rounded-2xl border border-neutral-mid p-6 space-y-3">
            {[
              { label: "NDAX: National Digital Asset Exchange (Calgary, FINTRAC-registered)", url: "https://ndax.io" },
              { label: "BTCHome.ca: Buy real estate with Bitcoin in Canada", url: "https://btchome.ca/buying-real-estate-bitcoin.htm" },
              { label: "Greater Property Group: Calgary crypto real estate brokerage", url: "https://greaterpropertygroup.com" },
              { label: "Len T. Wong & Associates: Bitcoin-Friendly RE/MAX Calgary", url: "https://www.homes-calgary.ca/bitcoin-friendly-real-estate-brokerage" },
              { label: "CRA: Reporting income from crypto-asset transactions", url: "https://www.canada.ca/en/revenue-agency/programs/about-canada-revenue-agency-cra/compliance/cryptocurrency-guide/income-crypto-transactions.html" },
              { label: "Miller Thomson: New House on the Blockchain (legal analysis)", url: "https://www.millerthomson.com/en/insights/real-estate/new-house-on-the-blockchain/" },
              { label: "FINTRAC: Requirements for virtual asset service providers", url: "https://fintrac-canafe.canada.ca/businesses-entreprises/changes-changements-eng" },
              { label: "Koinly: Canada Crypto Tax Guide 2026", url: "https://koinly.io/guides/crypto-tax-canada/" },
              { label: "Global Legal Insights: Canada Blockchain & Crypto Laws 2026", url: "https://www.globallegalinsights.com/practice-areas/blockchain-cryptocurrency-laws-and-regulations/canada/" },
            ].map((link) => (
              <div key={link.label} className="flex items-start gap-3 text-sm">
                <span className="text-accent font-bold flex-shrink-0 mt-0.5">→</span>
                <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline break-all">
                  {link.label}
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Chan quote */}
        <blockquote className="border-l-4 border-accent pl-6 py-2">
          <p className="text-base italic text-gray-700 leading-relaxed mb-3">
            &quot;Bitcoin real estate is real — it&apos;s happened in Calgary and it will keep happening. The buyers and sellers who make it work are the ones who plan for the tax implications upfront and work with professionals who have actually done it before. The technology is the easy part; the legal and tax structure is where deals succeed or fall apart.&quot;
          </p>
          <footer className="text-sm font-semibold text-primary">
            — Chan Kawaguchi, REMAX Complete Realty Agent, Calgary
          </footer>
        </blockquote>

        {/* Disclaimer */}
        <div className="bg-neutral-light rounded-xl border border-neutral-mid p-5 text-xs text-gray-500 leading-relaxed">
          <strong>Disclaimer:</strong> This article is for general informational purposes only and does not constitute legal, tax, or financial advice. Cryptocurrency regulations and CRA guidance are subject to change. The Bitcoin price data in the calculator is sourced from CoinGecko and is for informational purposes only, not a transaction quote. Always consult a qualified Canadian accountant, lawyer, and real estate professional before proceeding with a crypto property transaction.
        </div>

        {/* Back to blog */}
        <div className="pt-4">
          <Link href="/blog" className="text-sm font-semibold text-accent hover:underline">
            ← Back to all articles
          </Link>
        </div>

        {/* Contact */}
        <div className="border-t border-neutral-mid pt-12 grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-4">
            <div>
              <h2 className="text-xl font-bold text-primary mb-1">Interested in a Bitcoin Deal?</h2>
              <p className="text-gray-500 text-sm">REMAX Complete Realty Agent · Calgary, AB</p>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Whether you&apos;re a buyer looking to use crypto or a seller open to Bitcoin offers, Chan can connect you with the right professionals to make it happen.
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
              Tell Chan what you&apos;re working on. He&apos;ll get back to you within 24 hours.
            </p>
            <ContactForm />
          </div>
        </div>

      </div>
    </div>
  );
}
