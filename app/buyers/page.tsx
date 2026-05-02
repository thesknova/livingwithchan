import type { Metadata } from "next";
import Link from "next/link";
import BuyerForm from "@/components/BuyerForm";

export const metadata: Metadata = {
  title: "Buying a Home in Calgary | Chan Kawaguchi, REMAX",
  description:
    "Whether you're a first-time buyer, moving up, or investing, Chan Kawaguchi guides Calgary home buyers through every step. Find your path to homeownership.",
};

const segments = [
  {
    href: "/buyers/first-time",
    label: "First-Time Buyers",
    description: "From pre-approval to possession — Chan makes the process simple and stress-free for first-time buyers.",
    icon: "🏠",
  },
  {
    href: "/buyers/move-up",
    label: "Move-Up Buyers",
    description: "Ready for more space? Chan coordinates buying and selling so you never feel stuck in the middle.",
    icon: "⬆️",
  },
  {
    href: "/buyers/luxury",
    label: "Luxury Homes",
    description: "Discerning buyers deserve discreet, expert guidance. Chan specialises in Calgary's premium properties.",
    icon: "✨",
  },
  {
    href: "/buyers/investors",
    label: "Investors",
    description: "Cash flow, appreciation, or both? Chan helps investors find the right Calgary properties for their strategy.",
    icon: "📈",
  },
  {
    href: "/buyers/acreages",
    label: "Acreages",
    description: "Space, privacy, and fresh air — Chan knows the Calgary-area acreage market inside and out.",
    icon: "🌾",
  },
  {
    href: "/buyers/downsizing",
    label: "Downsizing",
    description: "The next chapter should feel like a relief. Chan helps you find the right-sized home for this stage of life.",
    icon: "🌿",
  },
  {
    href: "/buyers/new-construction",
    label: "New Construction",
    description: "Buying new has real advantages — and real risks. Chan represents your interests so builders don't cut corners.",
    icon: "🏗️",
  },
  {
    href: "/buyers/new-to-calgary",
    label: "New to Calgary",
    description: "Relocating to Calgary? Chan knows every neighbourhood and makes settling in feel easy.",
    icon: "📍",
  },
];

export default function BuyersPage() {
  return (
    <div className="bg-neutral-light min-h-screen">
      {/* Header */}
      <div className="bg-primary text-white py-14 px-6">
        <div className="max-w-6xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            Buying in Calgary
          </span>
          <h1 className="text-4xl font-bold mt-2 mb-3">
            Find Your Path to Homeownership
          </h1>
          <p className="text-stone-400 text-lg max-w-2xl">
            Every buyer's situation is different. Chan works with first-time buyers,
            families moving up, investors, and everyone in between — always with
            honest advice and zero pressure.
          </p>
        </div>
      </div>

      {/* Segment cards */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {segments.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="group bg-white rounded-2xl border border-neutral-mid shadow-sm hover:shadow-md transition-shadow p-7 flex flex-col gap-3"
            >
              <span className="text-3xl">{s.icon}</span>
              <h2 className="text-lg font-bold text-primary group-hover:text-accent transition-colors">
                {s.label}
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed flex-1">
                {s.description}
              </p>
              <span className="text-sm font-semibold text-accent group-hover:underline mt-1">
                Learn more →
              </span>
            </Link>
          ))}
        </div>

        {/* Contact form */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl font-bold text-primary mb-3">
              Tell Chan About Your Search
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Share a few details and Chan will reach out with honest advice
              tailored to your situation — no pressure, no obligation.
            </p>
            <ul className="space-y-3 text-sm text-gray-600">
              {[
                "Personalised neighbourhood recommendations",
                "Current market conditions explained simply",
                "Guidance on mortgage pre-approval",
                "Answers to any questions you have",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-accent font-bold mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-2xl border border-neutral-mid shadow-sm p-8">
            <BuyerForm />
          </div>
        </div>
      </div>
    </div>
  );
}
