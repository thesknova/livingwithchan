import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { listings } from "@/lib/listings";
import ContactForm from "@/components/ContactForm";

type Props = { params: Promise<{ id: string }> };

export async function generateStaticParams() {
  return listings.map((l) => ({ id: l.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const listing = listings.find((l) => l.id === id);
  if (!listing) return {};
  return {
    title: `${listing.address} | Chan Kawaguchi`,
    description: listing.description,
  };
}

function formatPrice(price: number) {
  return new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD",
    maximumFractionDigits: 0,
  }).format(price);
}

export default async function ListingDetailPage({ params }: Props) {
  const { id } = await params;
  const listing = listings.find((l) => l.id === id);
  if (!listing) notFound();

  return (
    <div className="bg-neutral-light min-h-screen">
      {/* Hero image */}
      <div className="relative h-72 sm:h-96 w-full overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={listing.imageUrl}
          alt={listing.address}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-6 left-6">
          <Link
            href="/listings"
            className="text-xs font-semibold uppercase tracking-widest text-white/80 hover:text-white transition-colors"
          >
            ← Back to Listings
          </Link>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Left — listing details */}
          <div className="lg:col-span-2 space-y-8">

            {/* Price + address */}
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <span className="bg-accent text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {listing.type}
                </span>
                {listing.featured && (
                  <span className="bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Featured
                  </span>
                )}
              </div>
              <h1 className="text-3xl font-bold text-primary mb-1">
                {formatPrice(listing.price)}
              </h1>
              <p className="text-lg font-semibold text-gray-800">{listing.address}</p>
              <p className="text-gray-500">
                {listing.community} · {listing.city}, {listing.province}
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { label: "Bedrooms", value: listing.beds, icon: "🛏" },
                { label: "Bathrooms", value: listing.baths, icon: "🚿" },
                { label: "Square Feet", value: listing.sqft.toLocaleString(), icon: "📐" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white rounded-xl border border-neutral-mid p-4 text-center"
                >
                  <span className="text-2xl block mb-1">{stat.icon}</span>
                  <p className="text-xl font-bold text-primary">{stat.value}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Description */}
            {listing.description && (
              <div className="bg-white rounded-2xl border border-neutral-mid p-6">
                <h2 className="text-lg font-bold text-primary mb-3">About This Property</h2>
                <p className="text-gray-600 leading-relaxed">{listing.description}</p>
              </div>
            )}

            {/* Community */}
            <div className="bg-white rounded-2xl border border-neutral-mid p-6">
              <h2 className="text-lg font-bold text-primary mb-3">Neighbourhood</h2>
              <p className="text-gray-600 leading-relaxed">
                Located in <strong>{listing.community}</strong>, one of Calgary&apos;s sought-after
                communities. Contact Chan for a full neighbourhood overview, recent comparable sales,
                and any questions about the area.
              </p>
            </div>
          </div>

          {/* Right — contact sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-neutral-mid shadow-sm p-6 sticky top-24">
              <h2 className="text-lg font-bold text-primary mb-1">Interested in This Property?</h2>
              <p className="text-sm text-gray-500 mb-5">
                Send Chan a message and she&apos;ll get back to you within 24 hours.
              </p>
              <ContactForm />
              <div className="mt-5 pt-5 border-t border-neutral-mid space-y-3">
                <a
                  href="tel:4036810107"
                  className="flex items-center gap-3 text-sm font-medium text-primary hover:text-accent transition-colors"
                >
                  <span className="text-xl">📞</span> 403-681-0107
                </a>
                <a
                  href="mailto:hello@livingwithchan.com"
                  className="flex items-center gap-3 text-sm font-medium text-primary hover:text-accent transition-colors"
                >
                  <span className="text-xl">✉️</span> hello@livingwithchan.com
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
