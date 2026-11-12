import { listingsData } from "@/data/listings";
import type { Listing, ListingHomeTeaser } from "@/types/listing";
import { listingTypeLabels } from "@/types/listing";

export const listings: Listing[] = listingsData;

export function getListingBySlug(slug: string): Listing | undefined {
  return listings.find((l) => l.slug === slug);
}

export function getFeaturedListings(): Listing[] {
  return listings.filter((l) => l.featured);
}

export type FeaturedShowcase = {
  slug: string;
  label: string;
  title: string;
  summary: string;
  image: string;
  imageAlt: string;
};

function teaserForListing(listing: Listing): ListingHomeTeaser {
  if (listing.homeTeaser) return listing.homeTeaser;

  return {
    label: listingTypeLabels[listing.type].toUpperCase(),
    title: listing.title,
    summary: listing.description,
    imageAlt: listing.title,
  };
}

/** Featured rows on the home page — always derived from `listings` so prices stay in sync. */
export function getFeaturedShowcases(): FeaturedShowcase[] {
  return getFeaturedListings().map((listing) => {
    const teaser = teaserForListing(listing);
    return {
      slug: listing.slug,
      image: listing.image,
      ...teaser,
    };
  });
}
