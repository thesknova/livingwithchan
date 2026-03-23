import Link from "next/link";

const communities = [
  {
    quadrant: "NW",
    label: "North West",
    description: "Tuscany, Rocky Ridge, Scenic Acres & more",
    imageUrl:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=85",
    href: "/search/nw",
  },
  {
    quadrant: "NE",
    label: "North East",
    description: "Evanston, Nolan Hill, Redstone & more",
    imageUrl:
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=85",
    href: "/search/ne",
  },
  {
    quadrant: "SW",
    label: "South West",
    description: "Aspen Woods, Cougar Ridge, Signal Hill & more",
    imageUrl:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=85",
    href: "/search/sw",
  },
  {
    quadrant: "SE",
    label: "South East",
    description: "Cranston, Auburn Bay, McKenzie Towne & more",
    imageUrl:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=85",
    href: "/listings?area=SE",
  },
];

export default function SearchCommunities() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            Calgary Real Estate
          </span>
          <h2 className="text-3xl font-bold text-primary mt-2">
            Search Communities
          </h2>
          <p className="text-gray-500 mt-3 max-w-md mx-auto text-sm">
            Explore homes across Calgary&apos;s four quadrants. Every
            neighbourhood has its own character — let Chan help you find yours.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {communities.map((community) => (
            <Link
              key={community.quadrant}
              href={community.href}
              className="group relative rounded-lg overflow-hidden aspect-[3/4] block"
            >
              {/* Background image */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={community.imageUrl}
                alt={`${community.label} Calgary homes`}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:brightness-110 group-hover:scale-105"
                loading="lazy"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/70 group-hover:to-black/60 transition-all duration-500" />

              {/* Text — animates up from bottom on hover */}
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-8 px-4 text-center">
                {/* Overline */}
                <span className="text-white/70 text-xs font-medium uppercase tracking-widest mb-2 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-[150ms]">
                  Calgary, AB
                </span>

                {/* Quadrant — always visible */}
                <span className="text-white font-bold text-5xl sm:text-6xl leading-none tracking-tight drop-shadow-lg">
                  {community.quadrant}
                </span>

                {/* Full name */}
                <span className="text-white/90 text-sm font-semibold mt-1 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-[100ms]">
                  {community.label}
                </span>

                {/* Description */}
                <span className="text-white/70 text-xs mt-2 leading-snug translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-[50ms]">
                  {community.description}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
