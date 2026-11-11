import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-auto bg-culture-brown-dark px-6 pb-7 pt-9 text-culture-cream md:px-16 md:pb-8 md:pt-10">
      <div className="flex flex-col gap-5 md:flex-row md:items-start md:gap-10">
        <div className="flex flex-1 flex-col gap-[5px]">
          <p className="font-display text-[30px] font-bold leading-[1.12] md:text-[36px]">
            {siteConfig.brandFull}
          </p>
          <p className="text-[10px] tracking-[1px] text-culture-sand">
            {siteConfig.eyebrow}
          </p>
        </div>
        <div className="text-[13px] leading-[1.55] text-culture-sand md:w-[355px]">
          <p>Rooms. Homes. Land.</p>
          <p>Local guidance, every step of the way.</p>
        </div>
      </div>

      <div className="my-7 h-px w-full bg-culture-brown md:my-8" />

      <p className="text-[10px] leading-[1.55] text-culture-sand md:text-[11px]">
        © 2026 {siteConfig.name}
      </p>
    </footer>
  );
}
