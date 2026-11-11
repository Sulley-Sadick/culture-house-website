import listingsData from "@/data/listings.json";
import type { Listing } from "@/types/listing";

export const listings: Listing[] = listingsData as Listing[];

export function getListingBySlug(slug: string): Listing | undefined {
  return listings.find((l) => l.slug === slug);
}

export function getFeaturedListings(): Listing[] {
  return listings.filter((l) => l.featured);
}
