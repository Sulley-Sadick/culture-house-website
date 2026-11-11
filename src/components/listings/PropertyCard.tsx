import Image from "next/image";
import Link from "next/link";
import type { Listing } from "@/types/listing";
import { listingTypeLabels } from "@/types/listing";
import { withBasePath } from "@/lib/paths";
import { inquireAboutListing } from "@/lib/whatsapp";

interface PropertyCardProps {
  listing: Listing;
}

export function PropertyCard({ listing }: PropertyCardProps) {
  const resolvedSrc = withBasePath(listing.image);

  return (
    <article className="flex h-full flex-col gap-4">
      <Link
        href={`/listings/${listing.slug}`}
        className="relative block h-60 overflow-hidden md:h-[240px]"
      >
        <Image
          src={resolvedSrc}
          alt={listing.title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, 33vw"
          // #region agent log
          onLoad={() => {
            fetch('http://127.0.0.1:7272/ingest/ad8013c2-014f-4f11-a49c-e62bf9c3efc5',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'8faa52'},body:JSON.stringify({sessionId:'8faa52',runId:'post-fix',hypothesisId:'B',location:'PropertyCard.tsx:onLoad',message:'listing image loaded',data:{slug:listing.slug,resolvedSrc,isRemote:listing.image.startsWith('http')},timestamp:Date.now()})}).catch(()=>{});
          }}
          onError={() => {
            fetch('http://127.0.0.1:7272/ingest/ad8013c2-014f-4f11-a49c-e62bf9c3efc5',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'8faa52'},body:JSON.stringify({sessionId:'8faa52',runId:'post-fix',hypothesisId:'B',location:'PropertyCard.tsx:onError',message:'listing image FAILED',data:{slug:listing.slug,resolvedSrc,rawImage:listing.image,isRemote:listing.image.startsWith('http')},timestamp:Date.now()})}).catch(()=>{});
          }}
          // #endregion
        />
      </Link>

      <div className="flex flex-1 flex-col gap-2.5">
        <p className="text-[10px] font-bold tracking-[0.08em] text-culture-brown">
          {listingTypeLabels[listing.type].toUpperCase()}
        </p>
        <h3 className="font-display text-[25px] font-bold leading-[1.12] text-culture-brown-dark">
          <Link href={`/listings/${listing.slug}`} className="hover:underline">
            {listing.title}
          </Link>
        </h3>
        <p className="text-sm leading-[1.55] text-culture-brown">{listing.location}</p>
        <p className="text-sm font-bold text-culture-brown-dark">
          {listing.price}
          {listing.priceNote ? ` / ${listing.priceNote}` : ""}
        </p>
        <a
          href={inquireAboutListing(listing.title, listing.slug)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto text-[13px] font-bold leading-[1.55] text-culture-brown-dark hover:underline"
        >
          Enquire about this →
        </a>
      </div>
    </article>
  );
}
