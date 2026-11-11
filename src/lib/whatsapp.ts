import { siteConfig } from "@/lib/site";

export function buildWhatsAppUrl(message: string): string {
  const text = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.whatsapp}?text=${text}`;
}

export function inquireAboutListing(title: string, slug: string): string {
  return buildWhatsAppUrl(
    `Hi ${siteConfig.name}, I'm interested in: ${title} (${slug}). Please share more details.`,
  );
}
