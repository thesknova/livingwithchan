import Link from "next/link";
import Image from "next/image";

type Segment = {
  icon: string;
  title: string;
  description: string;
  href: string;
  image?: string;
};

const segments: Segment[] = [
  {
    icon: "🏡",
    title: "First-Time Buyers",
    description:
      "New to real estate? Chan walks you through every step, from mortgage pre-approval to possession day, so nothing catches you off guard.",
    href: "/buyers/first-time",
    image: "/segments/first-time-buyers.png",
  },
  {
    icon: "⬆️",
    title: "Move-Up Buyers",
    description:
      "Growing family, growing needs. Chan coordinates your sale and purchase so you never miss a beat and always land in the right home.",
    href: "/buyers/move-up",
    image: "/segments/move-up-buyers.png",
  },
  {
    icon: "🔑",
    title: "Downsizing",
    description:
      "Ready to simplify? Chan helps empty nesters and retirees find the perfect lock-and-leave or right-sized home without the stress.",
    href: "/buyers/downsizing",
    image: "/segments/downsizing.png",
  },
  {
    icon: "✨",
    title: "Luxury Homes",
    description:
      "Discerning buyers deserve a discerning agent. Chan specializes in Calgary's finest estates, from Aspen Woods to Elbow Park and beyond.",
    href: "/buyers/luxury",
    image: "/segments/luxury-homes.jpg",
  },
  {
    icon: "📈",
    title: "Investors",
    description:
      "From cash-flow rentals to multi-family properties, Chan identifies the Calgary neighbourhoods and property types that deliver real returns.",
    href: "/buyers/investors",
    image: "/segments/investors.png",
  },
  {
    icon: "✈️",
    title: "New to Calgary",
    description:
      "Relocating from out of province or abroad? Chan helps newcomers understand Calgary's communities, schools, and market so you land in the right neighbourhood.",
    href: "/buyers/new-to-calgary",
    image: "/segments/new-to-calgary.png",
  },
  {
    icon: "🌾",
    title: "Acreages",
    description:
      "Craving space and privacy just outside the city? Chan knows Rocky View County and Foothills acreage properties inside and out.",
    href: "/buyers/acreages",
    image: "/segments/acreage.png",
  },
  {
    icon: "🏗️",
    title: "New Construction",
    description:
      "Buy direct from the builder with confidence. Chan negotiates upgrades, reviews contracts, and represents your interests throughout the build.",
    href: "/buyers/new-construction",
    image: "/segments/new-construction.png",
  },
];

export default function BuyerSegments() {
  return (
    <section className="bg-neutral-light py-20 px-6">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {segments.map((seg) => (
            <Link
              key={seg.title}
              href={seg.href}
              className="group relative overflow-hidden rounded-2xl min-h-[300px] flex flex-col justify-end"
            >
              <Image
                src={seg.image!}
                alt={seg.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="relative z-10 p-6">
                <h3 className="text-base font-bold text-white mb-2">
                  {seg.title}
                </h3>
                <p className="text-sm text-white/70 leading-relaxed mb-4 line-clamp-3">
                  {seg.description}
                </p>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-accent uppercase tracking-wide group-hover:gap-2 transition-all duration-200">
                  Learn More <span>→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
