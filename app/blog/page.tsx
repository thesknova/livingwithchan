import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Calgary Real Estate Blog | Chan Kawaguchi",
  description:
    "Practical Calgary real estate advice from REMAX agent Chan Kawaguchi — market insights, buyer and seller tips, neighbourhood guides, and more.",
};

const posts = [
  {
    slug: "bitcoin-real-estate-calgary",
    title: "Bitcoin and Real Estate in Calgary: How Crypto Transactions Actually Work",
    excerpt:
      "Calgary has been at the forefront of Bitcoin real estate in Canada. Chan breaks down how it works, the CRA tax implications, and includes a live BTC/CAD calculator.",
    date: "April 1, 2026",
    category: "Investor Tips",
    readTime: "12 min read",
  },
  {
    slug: "legal-vs-illegal-basement-suites-calgary",
    title: "Legal vs. Illegal Basement Suites in Calgary: What Every Landlord and Tenant Needs to Know",
    excerpt:
      "Calgary has 20,000+ registered suites — but many more aren't. Chan breaks down what makes a suite legal, the real risks of an illegal one, and how to legalize yours.",
    date: "April 1, 2026",
    category: "Investor Tips",
    readTime: "11 min read",
  },
  {
    slug: "calgary-zoning-explained",
    title: "Calgary Zoning Explained: R-CG, R-C1, M-C1, and the Blanket Rezoning That Changed Everything",
    excerpt:
      "The 2024 blanket rezoning automatically converted thousands of Calgary lots to R-CG. Here's what that means — and what the potential 2026 repeal could change again.",
    date: "April 1, 2026",
    category: "Investor Tips",
    readTime: "10 min read",
  },
  {
    slug: "renting-vs-buying",
    title: "Renting vs. Buying in Calgary: A Honest Comparison",
    excerpt:
      "Not sure whether to rent or buy? Chan breaks down the real pros and cons of each — including what most people get wrong about the math.",
    date: "March 31, 2026",
    category: "Buyer Tips",
    readTime: "8 min read",
  },
];

export default function BlogPage() {
  return (
    <div className="bg-neutral-light min-h-screen">
      {/* Header */}
      <div className="bg-primary text-white py-14 px-6">
        <div className="max-w-6xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            Real Estate Insights
          </span>
          <h1 className="text-4xl font-bold mt-2 mb-3">The Blog</h1>
          <p className="text-stone-400 text-lg max-w-2xl">
            Practical Calgary real estate advice — no fluff, no clickbait. Just
            honest guidance to help you make better decisions.
          </p>
        </div>
      </div>

      {/* Post list */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-white rounded-2xl border border-neutral-mid shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col"
            >
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-semibold uppercase tracking-widest text-accent">
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-400">{post.readTime}</span>
                </div>
                <h2 className="text-lg font-bold text-primary group-hover:text-accent transition-colors mb-3 leading-snug">
                  {post.title}
                </h2>
                <p className="text-sm text-gray-500 leading-relaxed flex-1">
                  {post.excerpt}
                </p>
                <div className="mt-5 flex items-center justify-between">
                  <span className="text-xs text-gray-400">{post.date}</span>
                  <span className="text-xs font-semibold text-accent group-hover:underline">
                    Read More →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
