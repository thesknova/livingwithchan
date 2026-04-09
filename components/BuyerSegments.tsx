import Link from "next/link";

const segments = [
  {
    icon: "🏡",
    title: "First-Time Buyers",
    description:
      "New to real estate? Chan walks you through every step, from mortgage pre-approval to possession day, so nothing catches you off guard.",
    href: "/buyers/first-time",
  },
  {
    icon: "⬆️",
    title: "Move-Up Buyers",
    description:
      "Growing family, growing needs. Chan coordinates your sale and purchase so you never miss a beat and always land in the right home.",
    href: "/buyers/move-up",
  },
  {
    icon: "🔑",
    title: "Downsizing",
    description:
      "Ready to simplify? Chan helps empty nesters and retirees find the perfect lock-and-leave or right-sized home without the stress.",
    href: "/buyers/downsizing",
  },
  {
    icon: "📈",
    title: "Investors",
    description:
      "From cash-flow rentals to multi-family properties, Chan identifies the Calgary neighbourhoods and property types that deliver real returns.",
    href: "/buyers/investors",
  },
  {
    icon: "✨",
    title: "Luxury Homes",
    description:
      "Discerning buyers deserve a discerning agent. Chan specializes in Calgary's finest estates, from Aspen Woods to Elbow Park and beyond.",
    href: "/buyers/luxury",
  },
  {
    icon: "✈️",
    title: "New to Calgary",
    description:
      "Relocating from out of province or abroad? Chan helps newcomers understand Calgary's communities, schools, and market so you land in the right neighbourhood.",
    href: "/buyers/new-to-calgary",
  },
  {
    icon: "🌾",
    title: "Acreages",
    description:
      "Craving space and privacy just outside the city? Chan knows Rocky View County and Foothills acreage properties inside and out.",
    href: "/buyers/acreages",
  },
  {
    icon: "🏗️",
    title: "New Construction",
    description:
      "Buy direct from the builder with confidence. Chan negotiates upgrades, reviews contracts, and represents your interests throughout the build.",
    href: "/buyers/new-construction",
  },
];

export default function BuyerSegments() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            Who I Help
          </span>
          <h2 className="text-3xl font-bold text-primary mt-2">
            Real Estate For Every Stage of Life
          </h2>
          <p className="text-gray-500 mt-3 max-w-lg mx-auto text-sm">
            Chan works with buyers and sellers at every stage, from first-time
            purchases to luxury estates and investment properties.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {segments.map((seg) => (
            <Link
              key={seg.title}
              href={seg.href}
              className="group bg-neutral-light hover:bg-accent hover:text-white rounded-2xl p-6 border border-neutral-mid hover:border-accent transition-all duration-300 flex flex-col"
            >
              <span className="text-3xl mb-4">{seg.icon}</span>
              <h3 className="text-base font-semibold text-primary group-hover:text-white mb-2 transition-colors duration-300">
                {seg.title}
              </h3>
              <p className="text-sm text-gray-500 group-hover:text-white/85 leading-relaxed flex-1 transition-colors duration-300">
                {seg.description}
              </p>
              <span className="mt-4 text-xs font-semibold text-accent group-hover:text-white uppercase tracking-wide transition-colors duration-300">
                Learn More →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
