import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import FeaturedListings from "@/components/FeaturedListings";
import SearchCommunities from "@/components/SearchCommunities";
import AgentBio from "@/components/AgentBio";
import Button from "@/components/ui/Button";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />

      <FeaturedListings />

      <SearchCommunities />

      {/* Agent Bio teaser */}
      <AgentBio compact />

      {/* Contact CTA banner */}
      <section className="bg-primary-dark py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Make Your Move?
          </h2>
          <p className="text-stone-400 text-lg mb-8 leading-relaxed">
            Whether you&apos;re buying, selling, or just exploring your
            options — Chan is here to guide you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" size="lg">
              Contact Chan Today
            </Button>
            <a
              href="tel:4036810107"
              className="inline-flex items-center justify-center font-semibold rounded-full px-8 py-4 text-lg border-2 border-stone-600 text-stone-300 hover:border-accent hover:text-accent transition-all duration-200"
            >
              📞 403-681-0107
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
