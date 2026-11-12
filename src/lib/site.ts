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
  socialConnectTagline: "Connect with us to get more details about our services.",
  socials: [
    { label: "Instagram" as const, href: "https://instagram.com/" },
    { label: "Twitter" as const, href: "https://x.com/" },
    { label: "WhatsApp" as const, href: "whatsapp" },
    { label: "TikTok" as const, href: "https://tiktok.com/" },
  ],
  nav: [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/listings", label: "Listings" },
    { href: "/contact", label: "Contact" },
  ],
} as const;
