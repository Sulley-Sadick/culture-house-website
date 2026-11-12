import type { Metadata } from "next";
import { ContactActionPanel } from "@/components/contact/ContactActionPanel";
import { ContactConnect } from "@/components/contact/ContactConnect";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Reach ${siteConfig.name} — ${siteConfig.address}`,
};

export default function ContactPage() {
  return (
    <>
      <Reveal as="section">
        <ContactActionPanel
          as="h1"
          whatsappMessage="Hello, I'd like to get in touch about a property."
          showPhoneList
        />
      </Reveal>

      <ContactConnect />
    </>
  );
}
