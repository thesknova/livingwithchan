import Link from "next/link";
import Image from "next/image";
import { Listing } from "@/lib/types";

function formatPrice(price: number) {
  return new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD",
    maximumFractionDigits: 0,
  }).format(price);
}

export default function ListingCard({ listing }: { listing: Listing }) {
  return (
    <article className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 flex flex-col">
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <Image
          src={listing.imageUrl}
          alt={`${listing.address}, ${listing.city}`}
          fill
          sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
          className="object-cover"
        />
        <span className="absolute top-3 left-3 bg-white text-primary text-xs font-semibold px-2.5 py-1 rounded-full shadow-sm">
          {listing.type}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <p className="text-2xl font-bold text-primary mb-1">
          {formatPrice(listing.price)}
        </p>
        <p className="text-sm font-semibold text-gray-800 leading-snug mb-0.5">
          {listing.address}
        </p>
        <p className="text-xs text-gray-500 mb-3">
          {listing.community} · {listing.city}, {listing.province}
        </p>

        {/* Stats badges */}
        <div className="flex gap-2 text-xs text-gray-600 mb-4">
          <span className="bg-neutral-light px-2.5 py-1 rounded-full font-medium">
            🛏 {listing.beds} Beds
          </span>
          <span className="bg-neutral-light px-2.5 py-1 rounded-full font-medium">
            🚿 {listing.baths} Baths
          </span>
          <span className="bg-neutral-light px-2.5 py-1 rounded-full font-medium">
            📐 {listing.sqft.toLocaleString()} sqft
          </span>
        </div>

        <div className="mt-auto">
          <Link
            href={`/listings/${listing.id}`}
            className="block text-center text-sm font-semibold text-accent border border-accent rounded-full px-4 py-2 hover:bg-accent hover:text-white transition-colors"
          >
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
}
