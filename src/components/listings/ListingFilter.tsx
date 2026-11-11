"use client";

import { useMemo, useState } from "react";
import type { Listing, ListingType } from "@/types/listing";
import { listingTypeLabels } from "@/types/listing";
import { PropertyCard } from "@/components/listings/PropertyCard";

const filters: Array<{ value: "all" | ListingType; label: string }> = [
  { value: "all", label: "All" },
  { value: "room", label: listingTypeLabels.room },
  { value: "self-contain", label: listingTypeLabels["self-contain"] },
  { value: "land-sale", label: listingTypeLabels["land-sale"] },
  { value: "land-lease", label: listingTypeLabels["land-lease"] },
];

interface ListingFilterProps {
  listings: Listing[];
}

export function ListingFilter({ listings }: ListingFilterProps) {
  const [active, setActive] = useState<"all" | ListingType>("all");

  const filtered = useMemo(() => {
    if (active === "all") return listings;
    return listings.filter((l) => l.type === active);
  }, [active, listings]);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f.value}
            type="button"
            onClick={() => setActive(f.value)}
            className={`rounded px-4 py-2 text-sm font-bold transition-colors ${
              active === f.value
                ? "bg-culture-brown text-culture-cream"
                : "bg-culture-cream text-culture-brown ring-1 ring-culture-brown/20 hover:bg-culture-cream/80"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((listing) => (
          <PropertyCard key={listing.slug} listing={listing} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-10 text-center text-culture-brown/70">
          No listings in this category yet. Contact us — we may have options offline.
        </p>
      )}
    </div>
  );
}
