import type { Listing } from "@/types/listing";

export const listingsData: Listing[] = [
  {
    slug: "spintex-single-room",
    title: "Bright single room — Spintex Road",
    type: "room",
    location: "Spintex, Accra",
    price: "GHS 450",
    priceNote: "per month",
    description:
      "Clean single room with shared facilities, close to main road and tro-tro stops. Water and security included.",
    featured: true,
    image: "/images/listing-room.jpg",
    homeTeaser: {
      label: "ROOM FOR RENT",
      title: "A room to make your own",
      summary: "Simple, comfortable living.",
      imageAlt: "Bright empty rental room with white walls",
    },
  },
  {
    slug: "teshie-self-contain",
    title: "New self-contain — Teshie",
    type: "self-contain",
    location: "Teshie, Accra",
    price: "GHS 1,200",
    priceNote: "per month",
    description:
      "Private bath and kitchenette, tiled floors, prepaid meter. Quiet street, parking for one bike.",
    featured: true,
    image: "/images/listing-self-contain.jpg",
    homeTeaser: {
      label: "SELF-CONTAINED FOR RENT",
      title: "Space for everyday living",
      summary: "Your space. Your own facilities.",
      imageAlt: "Self-contained home exterior with tiled walls",
    },
  },
  {
    slug: "kasoa-residential-plot",
    title: "Serviced plot — Kasoa (registered)",
    type: "land-sale",
    location: "Kasoa, Central Region",
    price: "GHS 85,000",
    description:
      "70×100 ft plot in a gated community. Road access and electricity nearby. Ideal for a family home.",
    featured: true,
    image: "/images/listing-land.jpg",
    homeTeaser: {
      label: "LAND FOR SALE",
      title: "Room for your next chapter",
      summary: "Explore land for your plans.",
      imageAlt: "Open land plot with grass and trees",
    },
  },
  {
    slug: "oyibi-lease-acre",
    title: "1-acre agricultural lease",
    type: "land-lease",
    location: "Oyibi, Accra",
    price: "GHS 3,500",
    priceNote: "per year",
    description:
      "Fertile acre with water access. Suitable for vegetables or poultry. Minimum 3-year lease.",
    featured: false,
    image: "/images/listing-land.jpg",
  },
  {
    slug: "madina-room-near-station",
    title: "Single room near Madina station",
    type: "room",
    location: "Madina, Accra",
    price: "GHS 500",
    priceNote: "per month",
    description: "Walkable to station and market. Shared bath; landlord on-site.",
    featured: false,
    image: "/images/listing-room.jpg",
  },
  {
    slug: "ashaiman-half-plot",
    title: "Half plot — Ashaiman",
    type: "land-sale",
    location: "Ashaiman",
    price: "GHS 42,000",
    description:
      "Corner half plot with documents ready. Busy neighborhood with strong rental demand nearby.",
    featured: false,
    image: "/images/listing-land.jpg",
  },
];
