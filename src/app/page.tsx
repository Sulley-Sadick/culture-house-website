import { ContactCta } from "@/components/home/ContactCta";
import { FeaturedListings } from "@/components/home/FeaturedListings";
import { Hero } from "@/components/home/Hero";
import { ServicesPreview } from "@/components/home/ServicesPreview";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <FeaturedListings />
      <ContactCta />
    </>
  );
}
