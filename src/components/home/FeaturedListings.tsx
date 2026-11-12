import Image from "next/image";
import Link from "next/link";
import { withBasePath } from "@/lib/paths";
import { getFeaturedShowcases } from "@/lib/listings";
import { inquireAboutListing } from "@/lib/whatsapp";
import { Reveal } from "@/components/ui/Reveal";

export function FeaturedListings() {
  const featuredShowcases = getFeaturedShowcases();

  return (
    <Reveal as="section" className="bg-culture-sand px-6 py-14 md:px-16 md:py-20">
      <div className="mb-8 flex flex-col gap-4 md:mb-10 md:flex-row md:items-start md:gap-20">
        <div className="flex flex-1 flex-col gap-3.5">
          <p className="text-[11px] font-bold tracking-[0.12em] text-culture-brown">
            FIND YOUR NEXT PLACE
          </p>
          <h2 className="font-display text-[36px] font-bold leading-[1.12] text-culture-brown-dark md:text-[48px]">
            Featured listings
          </h2>
        </div>
        <p className="text-sm leading-[1.55] text-culture-brown md:w-[355px] md:text-[15px]">
          Listing examples to guide your search.
          <br />
          Ask us about current availability.
        </p>
      </div>

      <div className="flex flex-col gap-9 md:flex-row md:gap-7">
        {featuredShowcases.map((listing, index) => (
          <Reveal
            key={listing.slug}
            as="article"
            delayMs={100 + index * 90}
            className="flex min-w-0 flex-1 flex-col gap-4"
          >
            <Link
              href={`/listings/${listing.slug}`}
              className="relative block h-60 overflow-hidden md:h-[278px]"
            >
              <Image
                src={withBasePath(listing.image)}
                alt={listing.imageAlt}
                fill
                className="object-cover transition-transform duration-500 hover:scale-[1.03]"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </Link>
            <div className="flex flex-col gap-2.5">
              <p className="text-[10px] font-bold tracking-[0.08em] text-culture-brown">
                {listing.label}
              </p>
              <h3 className="font-display text-[25px] font-bold leading-[1.12] text-culture-brown-dark md:text-[27px]">
                <Link href={`/listings/${listing.slug}`} className="hover:underline">
                  {listing.title}
                </Link>
              </h3>
              <p className="text-sm leading-[1.55] text-culture-brown">{listing.summary}</p>
              <a
                href={inquireAboutListing(listing.title, listing.slug)}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] font-bold leading-[1.55] text-culture-brown-dark hover:underline"
              >
                Enquire about this →
              </a>
            </div>
          </Reveal>
        ))}
      </div>
    </Reveal>
  );
}
