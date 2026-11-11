export type ListingType = "room" | "self-contain" | "land-sale" | "land-lease";

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
}

export const listingTypeLabels: Record<ListingType, string> = {
  room: "Single room",
  "self-contain": "Self-contain",
  "land-sale": "Land for sale",
  "land-lease": "Land for lease",
};
