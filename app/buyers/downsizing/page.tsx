import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Downsizing in Calgary | Chan Kawaguchi",
  description:
    "Ready to downsize in Calgary? Chan Kawaguchi helps empty nesters and retirees find the perfect right-sized home: lock-and-leave condos, bungalows, and adult communities.",
};

const highlights = [
  {
    icon: "🔑",
    title: "Lock-and-Leave Lifestyle",
    body: "Condos and townhouses in Calgary's inner-city and established communities offer the freedom to travel without worrying about maintenance, snow removal, or yard work.",
  },
  {
    icon: "📦",
    title: "Navigating a Home Full of Memories",
    body: "Selling a family home you've lived in for decades is emotional. Chan understands that and provides the patience, timeline flexibility, and honest guidance the process deserves.",
  },
  {
    icon: "💵",
    title: "Maximizing Your Sale",
    body: "Your family home is likely your most valuable asset. Chan's marketing strategy and pricing approach ensure you walk away with the strongest possible result to fund your next chapter.",
  },
  {
    icon: "🏙️",
    title: "Finding the Right Fit",
    body: "Whether you want a maintenance-free condo, a bungalow near family, or an adult community with amenities, Chan helps you define what 'right-sized' actually means for your lifestyle.",
  },
];

const options = [
  { name: "Inner-city condos", note: "Walkable, vibrant, maintenance-free" },
  { name: "Eau Claire & Kensington", note: "Upscale urban condos near the river" },
  { name: "Bungalows (Tuscany, Hamptons)", note: "Single-level living in established NW communities" },
  { name: "Bungalows (Cranston, Auburn Bay)", note: "Single-level in quiet SE neighbourhoods" },
  { name: "55+ adult communities", note: "Amenity-rich, social, age-restricted options" },
  { name: "Townhouses (SW/NW)", note: "Low-maintenance with garage, smaller footprint" },
];

export default function DownsizingPage() {
  return (
    <div className="bg-neutral-light min-h-screen">
      <div className="bg-primary text-white py-14 px-6">
        <div className="max-w-6xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            Downsizing
          </span>
          <h1 className="text-4xl font-bold mt-2 mb-3">
            Your Next Chapter, Simplified
          </h1>
          <p className="text-stone-400 text-lg max-w-2xl">
            The kids have moved out. The big house served you well. Now
            it&apos;s time for a home that fits your life today: less
            maintenance, more freedom, and exactly what you need.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="max-w-3xl mb-14">
          <h2 className="text-2xl font-bold text-primary mb-4">
            Downsizing Is About More Than Square Footage
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            For most empty nesters and retirees, downsizing isn&apos;t just
            about finding a smaller home. It&apos;s about finding the right
            lifestyle. Maybe that&apos;s a condo in the Beltline so you can
            walk to restaurants and the river pathway. Maybe it&apos;s a
            bungalow close to grandchildren in Tuscany. Maybe it&apos;s a
            lock-and-leave property that lets you spend winters in Arizona.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Chan takes time to understand what the next phase of your life
            looks like before recommending a single property. The goal
            isn&apos;t just to sell your home and buy a smaller one. It&apos;s
            to position you for a genuinely better quality of life.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Selling a family home after many years is also an emotional
            process. Chan has helped many long-term homeowners through this
            transition with patience, sensitivity, and zero pressure. There
            is no rush. Only the right move at the right time.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold text-primary mb-8">
            What Chan Focuses On for Downsizers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((h) => (
              <div
                key={h.title}
                className="bg-white rounded-xl p-6 border border-neutral-mid shadow-sm flex gap-4"
              >
                <span className="text-2xl flex-shrink-0">{h.icon}</span>
                <div>
                  <h3 className="text-sm font-semibold text-primary mb-1">{h.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{h.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-neutral-mid p-8 mb-16">
          <h2 className="text-xl font-bold text-primary mb-2">
            Popular Downsizing Options in Calgary
          </h2>
          <p className="text-sm text-gray-500 mb-6">
            A range of property types and communities that suit different downsizing lifestyles.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {options.map((o) => (
              <div
                key={o.name}
                className="flex items-start gap-3 p-3 rounded-lg bg-neutral-light border border-neutral-mid"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-2" />
                <div>
                  <p className="text-sm font-semibold text-primary">{o.name}</p>
                  <p className="text-xs text-gray-500">{o.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-5">
            <div>
              <h2 className="text-xl font-bold text-primary mb-1">
                Talk to Chan About Downsizing
              </h2>
              <p className="text-gray-500 text-sm">REMAX Real Estate Agent · Calgary, AB</p>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              No timeline pressure. Chan is happy to have an exploratory
              conversation about your options, even if you&apos;re a year or
              two away from making a move.
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
              Tell Chan about your current situation and what you&apos;re hoping for. He&apos;ll be in touch within 24 hours.
            </p>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
