import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { getListingBySlug, listings } from "@/lib/listings";
import { inquireAboutListing } from "@/lib/whatsapp";
import { listingTypeLabels } from "@/types/listing";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return listings.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const listing = getListingBySlug(slug);
  if (!listing) return { title: "Listing not found" };
  return {
    title: listing.title,
    description: listing.description,
  };
}

export default async function ListingDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const listing = getListingBySlug(slug);
  if (!listing) notFound();

  return (
    <article className="bg-culture-cream px-6 py-10 md:px-16">
      <Link
        href="/listings"
        className="text-sm font-medium text-culture-brown/70 hover:text-culture-brown"
      >
        ← Back to listings
      </Link>

      <p className="mt-8 text-[10px] font-bold tracking-[0.08em] text-culture-brown">
        {listingTypeLabels[listing.type].toUpperCase()}
      </p>
      <h1 className="font-display mt-3 text-[32px] font-bold leading-[1.12] text-culture-brown-dark md:text-[48px]">
        {listing.title}
      </h1>
      <p className="mt-3 text-[15px] text-culture-brown">{listing.location}</p>

      <div className="relative mt-8 aspect-[16/10] w-full overflow-hidden md:max-w-4xl">
        <Image
          src={listing.image}
          alt={listing.title}
          fill
          className="object-cover"
          priority
          sizes="(max-width: 896px) 100vw, 896px"
        />
      </div>

      <div className="mt-8 max-w-2xl">
        <p className="text-2xl font-bold text-culture-brown-dark">
          {listing.price}
          {listing.priceNote && (
            <span className="text-base font-normal text-culture-brown/60">
              {" "}
              / {listing.priceNote}
            </span>
          )}
        </p>
        <p className="mt-4 text-[15px] leading-[1.55] text-culture-brown">
          {listing.description}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink
            href={inquireAboutListing(listing.title, listing.slug)}
            external
            variant="whatsapp"
          >
            WhatsApp →
          </ButtonLink>
          <ButtonLink href="/contact" variant="call">
            Send a message →
          </ButtonLink>
        </div>
      </div>
    </article>
  );
}
