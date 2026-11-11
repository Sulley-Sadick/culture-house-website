import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-culture-cream px-6 py-20 text-center md:px-16">
      <p className="text-[11px] font-bold tracking-[0.12em] text-culture-brown">
        PAGE NOT FOUND
      </p>
      <h1 className="font-display mt-4 text-[36px] font-bold text-culture-brown-dark md:text-[48px]">
        This page isn’t available
      </h1>
      <p className="mx-auto mt-4 max-w-md text-[15px] text-culture-brown">
        The link may be broken, or the page may have moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex h-[54px] items-center justify-center rounded bg-culture-gold px-8 text-[15px] font-bold text-culture-brown-dark transition-colors hover:bg-culture-gold-dark"
      >
        Back to home
      </Link>
    </div>
  );
}
