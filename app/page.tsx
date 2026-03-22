import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import ListingGrid from "@/components/ListingGrid";
import AgentBio from "@/components/AgentBio";
import Button from "@/components/ui/Button";
import { featuredListings } from "@/lib/listings";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />

      {/* Featured Listings */}
      <section className="bg-neutral-light py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-accent">
                Just Listed
              </span>
              <h2 className="text-3xl font-bold text-primary mt-1">
                Featured Properties
              </h2>
            </div>
            <Button href="/listings" variant="outline" size="sm">
              See All Listings →
            </Button>
          </div>
          <ListingGrid listings={featuredListings} />
        </div>
      </section>

      {/* Agent Bio teaser */}
      <AgentBio compact />

      {/* Contact CTA banner */}
      <section className="bg-primary py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Make Your Move?
          </h2>
          <p className="text-blue-200 text-lg mb-8 leading-relaxed">
            Whether you&apos;re buying, selling, or just exploring your
            options — Chan is here to guide you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" size="lg">
              Contact Chan Today
            </Button>
            <a
              href="tel:4036810107"
              className="inline-flex items-center justify-center font-semibold rounded-full px-8 py-4 text-lg border-2 border-white text-white hover:bg-white hover:text-primary transition-all duration-200"
            >
              📞 403-681-0107
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
