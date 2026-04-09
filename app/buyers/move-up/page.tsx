import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Move-Up Buyers Calgary | Chan Kawaguchi",
  description:
    "Ready to move up to a bigger home in Calgary? Chan Kawaguchi coordinates the sale of your current home and purchase of your next one seamlessly.",
};

const considerations = [
  {
    icon: "🔄",
    title: "Sell First or Buy First?",
    body: "The order matters, and the right answer depends on current market conditions. Chan assesses both sides and recommends the approach that protects you from carrying two mortgages or being caught without a home.",
  },
  {
    icon: "📅",
    title: "Coordinating Possessions",
    body: "Aligning your sale possession with your purchase possession is where deals get complicated. Chan negotiates both timelines simultaneously to minimize gaps, bridging costs, and temporary housing needs.",
  },
  {
    icon: "💰",
    title: "Using Your Equity",
    body: "Your current home's equity is your down payment on the next one. Chan works with your mortgage broker to structure the transaction so your equity flows smoothly from one property to the next.",
  },
  {
    icon: "🏡",
    title: "Knowing When to Upgrade",
    body: "Not every market is the right time to move up. Chan provides an honest assessment of your current home's value, what the next tier costs, and whether the numbers make sense right now.",
  },
];

export default function MoveUpBuyersPage() {
  return (
    <div className="bg-neutral-light min-h-screen">
      <div className="bg-primary text-white py-14 px-6">
        <div className="max-w-6xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            Move-Up Buyers
          </span>
          <h1 className="text-4xl font-bold mt-2 mb-3">
            Ready for More Space?
          </h1>
          <p className="text-stone-400 text-lg max-w-2xl">
            Whether your family is growing, your lifestyle has changed, or
            you&apos;ve simply outgrown your current home. Chan manages both
            sides of your move so nothing falls through the cracks.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="max-w-3xl mb-14">
          <h2 className="text-2xl font-bold text-primary mb-4">
            The Most Complex Transaction Most People Ever Do
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Selling one home and buying another at the same time is the most
            logistically complex real estate transaction most people will ever
            go through. Done right, you maximize your sale price, secure the
            right next home, and transition without stress. Done poorly, you
            end up in a hotel for three weeks or carrying two mortgages.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Chan has helped many Calgary families navigate the move-up process.
            The key is preparation: understanding your current home&apos;s
            market value, knowing exactly what the next tier of homes looks
            like, and having a clear plan before you list or make an offer.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Chan handles both your sale and your purchase, meaning he has full
            visibility into both timelines. That coordination, rarely available
            when you use separate agents, is what makes the difference between
            a smooth transition and a chaotic one.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold text-primary mb-8">
            What Chan Manages on Your Behalf
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {considerations.map((c) => (
              <div
                key={c.title}
                className="bg-white rounded-xl p-6 border border-neutral-mid shadow-sm flex gap-4"
              >
                <span className="text-2xl flex-shrink-0">{c.icon}</span>
                <div>
                  <h3 className="text-sm font-semibold text-primary mb-1">{c.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{c.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-neutral-mid p-8 mb-16">
          <h2 className="text-xl font-bold text-primary mb-2">
            Popular Move-Up Communities in Calgary
          </h2>
          <p className="text-sm text-gray-500 mb-6">
            Where Calgary families typically move when they&apos;re ready for more space.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { name: "Tuscany (NW)", note: "Established, great schools, mountain views" },
              { name: "Rocky Ridge (NW)", note: "Executive detached, quiet streets" },
              { name: "Auburn Bay (SE)", note: "Lake community, move-up detached homes" },
              { name: "Mahogany (SE)", note: "Premium lake community, larger lots" },
              { name: "Aspen Woods (SW)", note: "Top private schools, executive feel" },
              { name: "West Springs (SW)", note: "Large homes, family-oriented streets" },
              { name: "Springbank Hill (SW)", note: "Views, estate lots, upscale finishes" },
              { name: "Hamptons (NW)", note: "Mature community, golf course, large homes" },
            ].map((c) => (
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

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-5">
            <div>
              <h2 className="text-xl font-bold text-primary mb-1">
                Let&apos;s Plan Your Move Up
              </h2>
              <p className="text-gray-500 text-sm">REMAX Real Estate Agent · Calgary, AB</p>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              The first step is understanding what your current home is worth
              today. Chan provides a free, no-obligation market evaluation so
              you know exactly where you stand.
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
              Tell Chan about your current home and where you want to go next. He&apos;ll be in touch within 24 hours.
            </p>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
