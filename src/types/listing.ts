export type ListingType = "room" | "self-contain" | "land-sale" | "land-lease";

/** Optional copy for the home-page featured grid (marketing titles vs formal listing titles). */
export interface ListingHomeTeaser {
  label: string;
  title: string;
  summary: string;
  imageAlt: string;
}

export interface Listing {
  slug: string;
  title: string;
  type: ListingType;
  location: string;
  price: string;
  priceNote?: string;
  description: string;
  featured?: boolean;
  image: string;
  gallery?: string[];
  homeTeaser?: ListingHomeTeaser;
}

export const listingTypeLabels: Record<ListingType, string> = {
  room: "Single room",
  "self-contain": "Self-contain",
  "land-sale": "Land for sale",
  "land-lease": "Land for lease",
};
