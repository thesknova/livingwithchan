import Image from "next/image";
import Button from "@/components/ui/Button";

interface AgentBioProps {
  compact?: boolean;
  workWithHref?: string;
}

export default function AgentBio({ compact = false, workWithHref = "/contact" }: AgentBioProps) {
  return (
    <section className={`bg-white ${compact ? "py-16" : "py-20"}`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/5] max-w-md mx-auto lg:mx-0">
              <Image
                src="/chan-headshot-color.jpg"
                alt="Chan Kawaguchi, REMAX Complete Realty Agent, Calgary"
                width={600}
                height={750}
                className="w-full h-full object-cover object-top"
                priority
              />
            </div>
            {/* Floating badge */}
            <div className="absolute bottom-6 right-6 lg:right-0 bg-primary text-white rounded-xl px-5 py-3 shadow-lg text-center">
              <p className="text-2xl font-bold text-accent">10+</p>
              <p className="text-xs text-stone-300 font-medium uppercase tracking-wide">
                Years in Calgary
              </p>
            </div>
          </div>

          {/* Bio */}
          <div>
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-accent mb-3">
              Your Calgary Agent
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-2">
              Chan Kawaguchi
            </h2>
            <p className="text-base text-gray-500 font-medium mb-6">
              REMAX Complete Realty Agent · Calgary, Alberta
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              With a deep passion for Calgary&apos;s diverse communities, Chan
              Kawaguchi has helped hundreds of families find the perfect place to
              call home. Whether you&apos;re a first-time buyer, seasoned
              investor, or looking to sell, Chan brings local expertise, honest
              guidance, and relentless dedication to every transaction.
            </p>

            {!compact && (
              <p className="text-gray-600 leading-relaxed mb-4">
                From the charming inner-city neighbourhoods of Inglewood and
                Kensington to the master-planned communities of Tuscany and
                Cranston, Chan knows Calgary inside and out. Every client
                receives personalized service and transparent communication from
                first showing to final possession.
              </p>
            )}

            <ul className="grid grid-cols-2 gap-3 my-6">
              {[
                "First-Time Buyers",
                "Investment Properties",
                "Luxury Homes",
                "Downsizing",
                "New Construction",
                "Relocation",
              ].map((specialty) => (
                <li
                  key={specialty}
                  className="flex items-center gap-2 text-sm text-gray-700"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                  {specialty}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3">
              <Button href={workWithHref}>Work With Chan</Button>
              {compact && (
                <Button href="/about" variant="outline">
                  Learn More
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
