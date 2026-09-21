import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ScrollReveal";
import SoldCard from "@/components/SoldCard";
import { fetchSoldPosts } from "@/lib/sold";

// Matches the data's own cache (lib/sold.ts) so a newly published sale shows
// up within ten minutes.
export const revalidate = 600;

export const metadata: Metadata = {
  alternates: { canonical: "/sold" },
  title: "Recently Sold Calgary Homes | Chan Kawaguchi, REMAX",
  description:
    "Calgary homes Chan Kawaguchi of REMAX Complete Realty has helped her clients buy and sell, and the story behind each one. Thinking of selling? Call 403-681-0107.",
  openGraph: {
    title: "Recently Sold | Chan Kawaguchi, REMAX Complete Realty",
    description:
      "Calgary homes Chan has helped her clients buy and sell, and the story behind each one.",
  },
};

export default async function SoldPage() {
  const posts = await fetchSoldPosts();

  return (
    <div className="bg-neutral-light min-h-screen">
      <div className="bg-primary text-white py-14 px-6">
        <div className="max-w-6xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            Calgary Real Estate
          </span>
          <h1 className="font-display text-4xl sm:text-5xl mt-3 mb-3">Recently Sold</h1>
          <p className="text-stone-400 text-lg max-w-2xl">
            Every sale is somebody&apos;s next chapter. Here are a few of the homes Chan has
            helped her clients buy and sell, in her own words.
          </p>
        </div>
      </div>

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          {posts.length > 0 ? (
            <ScrollReveal direction="up" stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post, i) => (
                <SoldCard key={post.id} post={post} priority={i < 3} />
              ))}
            </ScrollReveal>
          ) : (
            <p className="text-center text-text-muted py-12">
              Recent sales are on their way. In the meantime, Chan would love to hear about yours.
            </p>
          )}
        </div>
      </section>

      <section className="bg-primary-dark text-white py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl sm:text-4xl">Your home could be next</h2>
          <p className="text-stone-400 mt-4 mb-8">
            Whether you&apos;re selling, buying, or just wondering what your home is worth, it
            starts with a conversation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/sell">Sell with Chan</Button>
            <Button href="/buyers" variant="outline">
              Buy with Chan
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
