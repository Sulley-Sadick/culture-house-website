import { ContactActionPanel } from "@/components/contact/ContactActionPanel";
import { Reveal } from "@/components/ui/Reveal";

export function ContactCta() {
  return (
    <Reveal as="section">
      <ContactActionPanel as="h2" />
    </Reveal>
  );
}
