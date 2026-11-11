export const siteConfig = {
  name: "Culture's House Agent & Land Selling",
  brandLine1: "Culture’s",
  brandLine2: "House",
  brandFull: "Culture’s House",
  eyebrow: "AGENT & LAND SELLING",
  tagline: "Your trusted partner for land, homes & rooms",
  description:
    "Find your next place in Ghana, with local guidance you can count on.",
  address: "Opposite Sweet FM",
  phones: [
    { label: "Call / WhatsApp", number: "+233200000000", display: "020 000 0000" },
    { label: "Office line", number: "+233240000000", display: "024 000 0000" },
  ],
  whatsapp: "233200000000",
  nav: [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/listings", label: "Listings" },
    { href: "/contact", label: "Contact" },
  ],
} as const;

export const homeServices = [
  {
    n: 1,
    title: "Rooms for rent",
    summary: "A comfortable room to call your own.",
    href: "/services",
  },
  {
    n: 2,
    title: "Self-contained for rent",
    summary: "Your own space, with everyday privacy.",
    href: "/services",
  },
  {
    n: 3,
    title: "Land for sale",
    summary: "A place to build your next chapter.",
    href: "/services",
  },
  {
    n: 4,
    title: "Land for lease",
    summary: "Land for your plans, on agreed terms.",
    href: "/services",
  },
] as const;

export const featuredShowcases = [
  {
    slug: "spintex-single-room",
    label: "ROOM FOR RENT",
    title: "A room to make your own",
    summary: "Simple, comfortable living.",
    image: "/images/listing-room.jpg",
    imageAlt: "Bright empty rental room with white walls",
  },
  {
    slug: "teshie-self-contain",
    label: "SELF-CONTAINED FOR RENT",
    title: "Space for everyday living",
    summary: "Your space. Your own facilities.",
    image: "/images/listing-self-contain.jpg",
    imageAlt: "Self-contained home exterior with tiled walls",
  },
  {
    slug: "kasoa-residential-plot",
    label: "LAND FOR SALE",
    title: "Room for your next chapter",
    summary: "Explore land for your plans.",
    image: "/images/listing-land.jpg",
    imageAlt: "Open land plot with grass and trees",
  },
] as const;
