import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import SellerIntakeForm from "@/components/SellerIntakeForm";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Sell My Home in Calgary | Chan Kawaguchi, REMAX",
  description:
    "Thinking of selling your Calgary home? Chan Kawaguchi delivers proven pricing strategy, professional marketing, and hands-on support from listing day to close.",
  openGraph: {
    title: "Sell Your Calgary Home | Chan Kawaguchi, REMAX",
    description: "Proven pricing, professional marketing, and hands-on support from list day to close. Get your free home valuation.",
  },
};

const steps = [
  {
    icon: "📊",
    title: "Accurate Pricing from Day One",
    body: "Overpriced homes sit. Underpriced homes leave money on the table. Chan uses live market data and a detailed comparative analysis to price your home where it attracts serious buyers quickly.",
  },
  {
    icon: "📸",
    title: "Professional Marketing",
    body: "Professional photography, an MLS listing optimized for search, and targeted social promotion — your home gets seen by the buyers who are ready to act.",
  },
  {
    icon: "🤝",
    title: "Skilled Negotiation",
    body: "When offers come in, Chan negotiates firmly on your behalf — price, conditions, and possession date — so you walk away with the best possible outcome.",
  },
  {
    icon: "📝",
    title: "Stress-Free from List to Close",
    body: "From the first walkthrough to handing over keys, Chan coordinates every step: inspections, conditions, lawyers, and possession — so nothing falls through the cracks.",
  },
];

const faqs = [
  {
    q: "How do you determine what my home is worth?",
    a: "Chan prepares a Comparative Market Analysis (CMA) using recent sales of similar homes in your neighbourhood, current active listings, and market trend data. This gives you a realistic, defensible list price — not a guess.",
  },
  {
    q: "How long will it take to sell?",
    a: "Calgary's average days-on-market varies by community and price range. Well-priced, well-presented homes in sought-after areas regularly sell in under two weeks. Chan will give you an honest timeline based on your specific property.",
  },
  {
    q: "What do I need to do before listing?",
    a: "Usually less than you think. Chan will walk through your home and give you a prioritized list of what to fix, what to declutter, and what to leave alone — focused on return on investment, not unnecessary spend.",
  },
  {
    q: "What are the costs of selling?",
    a: "In Alberta, sellers typically pay real estate commissions and legal fees. There is no land transfer tax. Chan will walk you through a net proceeds estimate before you commit to anything.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

export default function SellPage() {
  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    <div className="bg-neutral-light min-h-screen">
      {/* Hero */}
      <div className="bg-primary text-white py-14 px-6">
        <div className="max-w-6xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            Sell Your Home
          </span>
          <h1 className="text-4xl font-bold mt-2 mb-3">
            Sell Your Calgary Home with Confidence
          </h1>
          <p className="text-stone-400 text-lg max-w-2xl">
            Chan Kawaguchi delivers honest pricing, professional marketing, and
            hands-on support so you can sell for the best price — without the
            stress.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button href="#valuation-form" size="lg">
              Get a Free Home Valuation
            </Button>
            <a
              href="tel:4036810107"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-white/30 text-white text-sm font-semibold hover:bg-white/10 transition-colors"
            >
              Call 403-681-0107
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Intro */}
        <div className="max-w-3xl mb-14">
          <h2 className="text-2xl font-bold text-primary mb-4">
            Your Home Sold — On Your Terms
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Selling a home is one of the largest financial transactions most
            people make. Chan takes that seriously. You get direct access to an
            experienced agent who knows Calgary&apos;s market deeply — not a
            team assistant or a junior rep.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Whether you&apos;re downsizing, upsizing, relocating, or selling an
            investment property, Chan builds a strategy around your specific
            timeline and goals. No cookie-cutter approach, no pressure.
          </p>
        </div>

        {/* Steps */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-primary mb-8">
            How Chan Sells Your Home
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {steps.map((s) => (
              <div
                key={s.title}
                className="bg-white rounded-xl p-6 border border-neutral-mid shadow-sm flex gap-4"
              >
                <span className="text-2xl flex-shrink-0">{s.icon}</span>
                <div>
                  <h3 className="text-sm font-semibold text-primary mb-1">
                    {s.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {s.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-primary mb-8">
            Common Seller Questions
          </h2>
          <FaqAccordion items={faqs} />
        </div>

        {/* Seller intake form */}
        <div id="valuation-form" className="mb-10">
          <h2 className="text-2xl font-bold text-primary mb-2">
            Request Your Free Home Valuation
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed max-w-2xl mb-8">
            Fill out the form below and Chan will prepare a personalized market
            analysis for your property — no obligation, no automated estimate.
            Or reach out directly at{" "}
            <a href="tel:4036810107" className="text-accent font-medium hover:underline">
              403-681-0107
            </a>{" "}
            or{" "}
            <a href="mailto:hello@livingwithchan.com" className="text-accent font-medium hover:underline">
              hello@livingwithchan.com
            </a>
            .
          </p>
          <div className="bg-white rounded-2xl shadow-sm border border-neutral-mid p-8 sm:p-10">
            <SellerIntakeForm />
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
