import type { Metadata } from "next";
import { ListingFilter } from "@/components/listings/ListingFilter";
import { Reveal } from "@/components/ui/Reveal";
import { listings } from "@/lib/listings";

export const metadata: Metadata = {
  title: "Listings",
  description: "Browse rooms, self-contained units, and land for sale or lease.",
};

export default function ListingsPage() {
  return (
    <>
      <Reveal className="bg-culture-cream px-6 pb-8 pt-10 md:px-16">
        <p className="text-[11px] font-bold tracking-[0.12em] text-culture-brown">
          FIND YOUR NEXT PLACE
        </p>
        <h1 className="font-display mt-3 text-[36px] font-bold leading-[1.12] text-culture-brown-dark md:text-[48px]">
          Property listings
        </h1>
        <p className="mt-4 max-w-2xl text-[15px] leading-[1.55] text-culture-brown">
          Listing examples to guide your search. Ask us about current availability.
        </p>
      </Reveal>
      <Reveal className="bg-culture-sand px-6 py-10 md:px-16 md:py-14" delayMs={100}>
        <ListingFilter listings={listings} />
      </Reveal>
    </>
  );
}
