import type { Metadata } from "next";
import Link from "next/link";
import AssessmentCTAForm from "@/components/AssessmentCTAForm";

export const metadata: Metadata = {
  title: "Calgary Property Tax Assessment: How It Works and How to Challenge It | Chan Kawaguchi",
  description:
    "Your Calgary property assessment determines how much tax you pay. Chan Kawaguchi explains how assessments are calculated, what to do if yours is wrong, and how to challenge it through the ARB.",
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Calgary Property Tax Assessment: How It Works and How to Challenge It",
  description:
    "Your Calgary property assessment determines how much tax you pay. Chan Kawaguchi explains how assessments are calculated, what to do if yours is wrong, and how to challenge it through the ARB.",
  author: { "@type": "Person", name: "Chan Kawaguchi", url: "https://livingwithchan.com/about" },
  publisher: { "@type": "Organization", name: "Living With Chan", url: "https://livingwithchan.com" },
  datePublished: "2026-05-01",
  dateModified: "2026-05-01",
  url: "https://livingwithchan.com/blog/calgary-property-tax-assessment",
};

export default function PropertyTaxAssessmentPost() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
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
                Homeowner Tips
              </span>
              <span className="text-stone-500 text-xs">·</span>
              <span className="text-xs text-stone-400">10 min read</span>
              <span className="text-stone-500 text-xs">·</span>
              <span className="text-xs text-stone-400">May 1, 2026</span>
            </div>
            <h1 className="text-4xl font-bold leading-tight mb-4">
              Calgary Property Tax Assessment: How It Works and How to Challenge It
            </h1>
            <p className="text-stone-400 text-lg mb-6">
              By Chan Kawaguchi · REMAX Complete Realty Agent, Calgary AB
            </p>
            <a
              href="#assessment-cta"
              className="inline-block bg-accent text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-accent/90 transition-colors"
            >
              Get a Free Assessment Review ↓
            </a>
          </div>
        </div>

        {/* Article body */}
        <div className="max-w-3xl mx-auto px-6 py-16">
          <div className="prose prose-gray max-w-none">

            {/* Intro */}
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Every January, Calgary homeowners open an envelope that quietly determines how much property tax they'll pay for the year. Most people glance at the number, file it away, and assume it's correct. But assessment errors are more common than you'd think. If your assessed value is too high, you're leaving money on the table. Here's everything you need to know about how Calgary assessments work and what to do if yours doesn't look right.
            </p>

            {/* Section 1 */}
            <h2 className="text-2xl font-bold text-primary mt-10 mb-4">What Is a Property Assessment?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Your property assessment is the City of Calgary's estimate of what your home would have sold for on the open market. It's not your purchase price, your insurance value, or what your neighbour thinks it's worth. It's a calculated estimate used specifically to distribute the property tax burden fairly across the city.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The City is required by Alberta's{" "}
              <em>Municipal Government Act</em> to assess every property annually. The goal is accuracy and fairness: everyone pays their proportional share of the total tax levy based on what their property is worth relative to everyone else's.
            </p>
            <div className="bg-accent/10 border-l-4 border-accent rounded-r-xl px-6 py-4 mb-6">
              <p className="text-gray-700 text-sm leading-relaxed">
                <strong>Important distinction:</strong> A higher assessment doesn't automatically mean a higher tax bill. What matters is how your assessment changes <em>relative to the city average</em>. If your home's assessed value rises at the same rate as everyone else's, your tax bill stays roughly the same.
              </p>
            </div>

            {/* Section 2 */}
            <h2 className="text-2xl font-bold text-primary mt-10 mb-4">How the City of Calgary Calculates Your Assessment</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Calgary uses a process called <strong>mass appraisal</strong>, the same methodology used by assessment offices across Alberta and most of North America. Here's how it works for a typical residential property:
            </p>

            <h3 className="text-lg font-bold text-primary mt-6 mb-3">The Two Key Dates</h3>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-3 text-gray-700">
                <span className="text-accent font-bold mt-0.5 flex-shrink-0">→</span>
                <span><strong>July 1 (valuation date):</strong> The assessed value reflects what your property would have sold for on July 1 of the prior year. For your 2026 tax notice, that's July 1, 2025.</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <span className="text-accent font-bold mt-0.5 flex-shrink-0">→</span>
                <span><strong>December 31 (condition date):</strong> Your property's physical condition (including any renovations, additions, or damage) is captured as of December 31 of the prior year.</span>
              </li>
            </ul>

            <h3 className="text-lg font-bold text-primary mt-6 mb-3">What Assessors Look At</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              For single-family homes and most residential properties, assessors use the <strong>sales comparison approach</strong>. They analyze up to three years of actual sales data for properties similar to yours in your neighbourhood and adjust for differences. Factors they consider include:
            </p>
            <div className="grid grid-cols-2 gap-3 mb-6">
              {[
                "Location and neighbourhood",
                "Living area (square footage)",
                "Lot size",
                "Age of the home",
                "Garage type and size",
                "Basement development",
                "Renovations and additions",
                "Overall condition",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-gray-700">
                  <span className="text-accent">✓</span>
                  {item}
                </div>
              ))}
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              For commercial or income-producing properties, assessors may also use the <strong>income approach</strong> (based on rental income potential) or the <strong>cost approach</strong> (land value plus the cost to replace the building minus depreciation).
            </p>

            {/* Section 3 */}
            <h2 className="text-2xl font-bold text-primary mt-10 mb-4">Where Does Calgary Stand in 2026?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The 2026 assessment roll reflects a continued strong Calgary market:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="bg-white rounded-xl border border-neutral-mid p-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-1">Median Single Residential</p>
                <p className="text-3xl font-bold text-primary">$706,000</p>
                <p className="text-sm text-gray-500 mt-1">Up from $697,000 in 2025</p>
              </div>
              <div className="bg-white rounded-xl border border-neutral-mid p-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-1">Median Residential Condo</p>
                <p className="text-3xl font-bold text-primary">$347,000</p>
                <p className="text-sm text-gray-500 mt-1">Down from $359,000 in 2025</p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              If your single-family home's assessment increased by roughly 1–2% this year, that's broadly in line with the citywide trend and unlikely to change your relative tax burden. If it jumped significantly more than that, it's worth a closer look.
            </p>

            {/* Section 4 */}
            <h2 className="text-2xl font-bold text-primary mt-10 mb-4">5 Reasons Your Assessment Might Be Wrong</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Assessors are working with data, not walking through your home. Errors happen. Here are the most common reasons an assessment comes in too high:
            </p>
            <ol className="space-y-4 mb-6 list-none">
              {[
                {
                  n: "1",
                  title: "Incorrect property details",
                  body: "The City's records show the wrong square footage, number of bedrooms, lot size, or year built. These data errors directly inflate the assessed value.",
                },
                {
                  n: "2",
                  title: "Unrecorded depreciation or damage",
                  body: "If your home has deferred maintenance, foundation issues, or damage that wasn't visible in the data the assessor used, your condition rating may be too generous.",
                },
                {
                  n: "3",
                  title: "Poor comparable sales selection",
                  body: "If the comparable sales used in your assessment were from a different sub-neighbourhood, a different street, or homes that are meaningfully different from yours, the benchmark value may be off.",
                },
                {
                  n: "4",
                  title: "Renovations recorded incorrectly",
                  body: "A renovation permit gets pulled, but the finished value added is overstated, or a partial renovation is treated as complete.",
                },
                {
                  n: "5",
                  title: "Neighbourhood misclassification",
                  body: "In rare cases, a property ends up grouped with a higher-value neighbourhood zone, distorting the comparable sales pool used to value it.",
                },
              ].map((item) => (
                <li key={item.n} className="flex items-start gap-4">
                  <span className="w-8 h-8 rounded-full bg-accent text-white text-sm font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                    {item.n}
                  </span>
                  <div>
                    <p className="font-semibold text-primary mb-1">{item.title}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
                  </div>
                </li>
              ))}
            </ol>

            {/* Section 5 */}
            <h2 className="text-2xl font-bold text-primary mt-10 mb-4">How to Challenge Your Assessment: Step by Step</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              The City of Calgary gives every homeowner a chance to review and challenge their assessment through a formal process. Here's how it works:
            </p>

            {/* Step 1 */}
            <div className="bg-white rounded-2xl border border-neutral-mid p-6 mb-5">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center flex-shrink-0">1</span>
                <h3 className="text-lg font-bold text-primary">Review Your Assessment Notice and Check the Details</h3>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                When your notice arrives in January, don't just look at the dollar amount. Check the property details. Log in to the City's <strong>myTax portal</strong> (the access code is on your notice) to view everything the City has on file for your property:
              </p>
              <ul className="space-y-1.5 text-sm text-gray-600">
                {[
                  "Living area square footage",
                  "Lot size",
                  "Year built",
                  "Basement development (finished vs. unfinished)",
                  "Garage type (detached, attached, no garage)",
                  "Any recorded renovations",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-accent mt-0.5">→</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-gray-700 text-sm leading-relaxed mt-3">
                You can also use myTax to search comparable sales and see what nearby similar properties sold for around July 1. If the comparables used to value your home don't look like your home, that's useful evidence.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-2xl border border-neutral-mid p-6 mb-5">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center flex-shrink-0">2</span>
                <h3 className="text-lg font-bold text-primary">Contact the City During the Customer Review Period</h3>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                Before filing a formal complaint, call <strong>311</strong> and ask to speak with an assessor about your property. This is free, informal, and often resolves the issue without any paperwork. The assessor can:
              </p>
              <ul className="space-y-1.5 text-sm text-gray-600">
                {[
                  "Explain how your value was calculated",
                  "Walk you through the comparable sales they used",
                  "Correct simple data errors (square footage, lot size, etc.) on the spot",
                  "Request a physical inspection if the condition of your property differs from their records",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-accent mt-0.5">→</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-4 bg-neutral-light rounded-lg px-4 py-3">
                <p className="text-sm text-gray-600">
                  <strong>The Customer Review Period</strong> runs for 67 days after notices are mailed (typically January). For 2026 assessments, the deadline was <strong>March 23, 2026</strong>. Check your notice for the exact deadline. It appears on the front of the document.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-2xl border border-neutral-mid p-6 mb-5">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center flex-shrink-0">3</span>
                <h3 className="text-lg font-bold text-primary">File a Formal Complaint with the Assessment Review Board</h3>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                If the City won't budge and you still believe your assessment is wrong, you can file a formal complaint with the <strong>Calgary Assessment Review Board (ARB)</strong>, an independent body that reviews disputes between property owners and the City.
              </p>
              <h4 className="font-semibold text-primary text-sm mb-2">Filing Fees</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                <div className="bg-neutral-light rounded-lg px-4 py-3 text-sm">
                  <p className="font-semibold text-primary">Residential (3 units or fewer)</p>
                  <p className="text-gray-600 mt-0.5">$50 (or <strong>$40</strong> if filed before January 31)</p>
                </div>
                <div className="bg-neutral-light rounded-lg px-4 py-3 text-sm">
                  <p className="font-semibold text-primary">Residential (4+ units) or Commercial</p>
                  <p className="text-gray-600 mt-0.5">$650</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                The fee is <strong>refunded</strong> if your complaint is successful or if you reach a settlement with the City before the hearing.
              </p>
              <h4 className="font-semibold text-primary text-sm mb-2">How to File</h4>
              <ul className="space-y-1.5 text-sm text-gray-600 mb-4">
                <li className="flex items-start gap-2"><span className="text-accent mt-0.5">→</span><span><strong>Online:</strong> <a href="https://calgaryarb.ca" target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-2">calgaryarb.ca</a> (ePortal: track status and submit evidence here)</span></li>
                <li className="flex items-start gap-2"><span className="text-accent mt-0.5">→</span><span><strong>In person or by mail</strong></span></li>
                <li className="flex items-start gap-2"><span className="text-accent mt-0.5">→</span><span><strong>By phone:</strong> 403-268-5858</span></li>
              </ul>
              <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 text-sm text-amber-800">
                <strong>Keep paying your property taxes</strong> while a complaint is pending. If you win, the overpayment will be refunded to your account or issued as a cheque (for amounts over $25).
              </div>
            </div>

            {/* Evidence section */}
            <h2 className="text-2xl font-bold text-primary mt-10 mb-4">What Evidence Helps Your Case</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The ARB hears both sides and makes a decision based on evidence. The stronger your documentation, the better your chances. Here's what to gather:
            </p>
            <ul className="space-y-3 mb-6">
              {[
                {
                  title: "Comparable sales data",
                  body: "Pull recent sales (ideally 6–18 months around July 1) of homes similar to yours in the same neighbourhood. MLS data, the myTax portal, and public records are all useful sources.",
                },
                {
                  title: "Photos of your property's condition",
                  body: "If your home has deferred maintenance, structural issues, or cosmetic problems that weren't accounted for, document them with clear photos.",
                },
                {
                  title: "Corrected property measurements",
                  body: "If the City has the wrong square footage or lot size on file, a copy of your original building permit, survey, or floor plan is strong evidence.",
                },
                {
                  title: "Renovation records",
                  body: "If a renovation is over- or under-valued, permit documents, contractor invoices, and before/after photos all support your position.",
                },
                {
                  title: "An independent appraisal",
                  body: "For high-value properties or larger disputes, a certified appraisal from an AACI-designated appraiser carries significant weight with the ARB.",
                },
              ].map((item) => (
                <li key={item.title} className="flex items-start gap-3 text-gray-700">
                  <span className="text-accent font-bold mt-0.5 flex-shrink-0">✓</span>
                  <span><strong>{item.title}:</strong> {item.body}</span>
                </li>
              ))}
            </ul>

            {/* Tips */}
            <h2 className="text-2xl font-bold text-primary mt-10 mb-4">Quick Tips Before You File</h2>
            <ul className="space-y-2 mb-8">
              {[
                "Act early: the earlier you file, the better your chance of an informal resolution.",
                "Be specific: vague objections don't move the needle. Identify the exact error or comparable sale that supports your position.",
                "Don't skip the 311 call. Many assessments get corrected informally, saving everyone time and money.",
                "Bring a real estate agent. A good Calgary agent knows the local market and can pull comparable sales quickly, which is often the most useful evidence.",
                "Know your deadline: it's printed on your assessment notice. Missing it means waiting until next year.",
              ].map((tip) => (
                <li key={tip} className="flex items-start gap-2 text-gray-700 text-sm">
                  <span className="text-accent font-bold mt-0.5 flex-shrink-0">→</span>
                  {tip}
                </li>
              ))}
            </ul>

            {/* Sources */}
            <div className="bg-white rounded-xl border border-neutral-mid px-6 py-4 mb-10 text-sm text-gray-600">
              <p className="font-semibold text-primary mb-2">Sources</p>
              <ul className="space-y-1">
                <li>
                  <a href="https://www.calgary.ca/property-owners/assessment-tax.html" target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-2">
                    City of Calgary: Property Assessment and Tax
                  </a>
                </li>
                <li>
                  <a href="https://www.calgary.ca/property-owners/assessment/faq.html" target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-2">
                    City of Calgary: Assessment FAQ
                  </a>
                </li>
                <li>
                  <a href="https://www.calgary.ca/property-owners/taxes/complaints.html" target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-2">
                    City of Calgary: Before Filing a Property Assessment Complaint
                  </a>
                </li>
                <li>
                  <a href="https://newsroom.calgary.ca/2026-property-assessment-notices-have-been-sent-customer-review-period-runs-until-march-23/" target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-2">
                    City of Calgary Newsroom: 2026 Assessment Notices
                  </a>
                </li>
                <li>
                  <a href="https://www.calgary.ca/content/arb/en/home/file-complaint.html" target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-2">
                    Calgary Assessment Review Board: File a Complaint
                  </a>
                </li>
              </ul>
            </div>

          </div>

          {/* CTA */}
          <div id="assessment-cta" className="bg-primary rounded-2xl p-8 md:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div className="text-white">
                <span className="text-xs font-semibold uppercase tracking-widest text-accent">Free Service</span>
                <h2 className="text-2xl font-bold mt-2 mb-3">
                  Not Sure If Your Assessment Is Fair?
                </h2>
                <p className="text-stone-400 leading-relaxed mb-5">
                  Chan can pull recent comparable sales in your neighbourhood and give you an honest, no-obligation opinion on whether your assessed value lines up with the market. If something looks off, she'll help you understand your options.
                </p>
                <ul className="space-y-2 text-sm text-stone-300">
                  {[
                    "Comparable sales pulled from live MLS data",
                    "Plain-language explanation of your assessment",
                    "Guidance on whether to file a complaint",
                    "No cost, no pressure",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-accent mt-0.5">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6">
                <AssessmentCTAForm />
              </div>
            </div>
          </div>

          {/* Back to blog */}
          <div className="mt-10 text-center">
            <Link href="/blog" className="text-sm font-semibold text-accent hover:underline">
              ← Back to Blog
            </Link>
          </div>

        </div>
      </div>
    </>
  );
}
