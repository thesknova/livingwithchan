"use client";

import { useState } from "react";
import { Listing } from "@/lib/types";
import ListingGrid from "./ListingGrid";

const PROPERTY_TYPES = ["All", "Detached", "Semi-Detached", "Condo", "Townhouse"];

const PRICE_RANGES = [
  { label: "Any Price", min: 0, max: Infinity },
  { label: "Under $500K", min: 0, max: 499999 },
  { label: "$500K – $750K", min: 500000, max: 750000 },
  { label: "$750K – $1M", min: 750001, max: 1000000 },
  { label: "$1M+", min: 1000001, max: Infinity },
];

export default function ListingsClient({ listings }: { listings: Listing[] }) {
  const [activeType, setActiveType] = useState("All");
  const [activePriceIndex, setActivePriceIndex] = useState(0);

  const { min, max } = PRICE_RANGES[activePriceIndex];

  const filtered = listings.filter((l) => {
    const typeMatch = activeType === "All" || l.type === activeType;
    const priceMatch = l.price >= min && l.price <= max;
    return typeMatch && priceMatch;
  });

  return (
    <>
      {/* Filter bar */}
      <div className="bg-white border-b border-neutral-mid sticky top-16 z-40">
        <div className="max-w-6xl mx-auto px-6 py-3 flex flex-wrap gap-3">
          {PROPERTY_TYPES.map((type) => (
            <button
              key={type}
              onClick={() => setActiveType(type)}
              className={`text-sm font-medium px-4 py-1.5 rounded-full border transition-colors ${
                activeType === type
                  ? "bg-primary text-white border-primary"
                  : "border-neutral-mid hover:border-accent hover:text-accent"
              }`}
            >
              {type}
            </button>
          ))}

          <div className="w-px bg-neutral-mid mx-1 self-stretch hidden sm:block" />

          {PRICE_RANGES.map((range, i) => (
            <button
              key={range.label}
              onClick={() => setActivePriceIndex(i)}
              className={`text-sm font-medium px-4 py-1.5 rounded-full border transition-colors ${
                activePriceIndex === i
                  ? "bg-accent text-white border-accent"
                  : "border-neutral-mid hover:border-accent hover:text-accent"
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        {filtered.length > 0 ? (
          <>
            <ListingGrid listings={filtered} />
            <p className="text-center text-sm text-gray-400 mt-10">
              Showing {filtered.length} of {listings.length} listings · Contact Chan for off-market opportunities
            </p>
          </>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg mb-2">No listings match your filters.</p>
            <p className="text-gray-400 text-sm">Try adjusting your search or contact Chan for off-market options.</p>
          </div>
        )}
      </div>
    </>
  );
}
