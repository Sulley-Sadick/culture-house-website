export interface Service {
  number: string;
  title: string;
  summary: string;
  details: string[];
  whatsappMessage: string;
}

export const services: Service[] = [
  {
    number: "01",
    title: "Renting a single room",
    summary:
      "A comfortable place to call your own. Find a single room that suits your budget and daily routine.",
    details: [
      "Room options matched to your budget",
      "Local guidance on location and access",
      "Support arranging a viewing",
    ],
    whatsappMessage: "Hi Culture’s House, I’m interested in renting a single room.",
  },
  {
    number: "02",
    title: "Self-contained apartments",
    summary:
      "More privacy, more independence. Explore a home with your own kitchen and bathroom.",
    details: [
      "Your own kitchen and bathroom",
      "Options that fit your space and budget",
      "Guidance from viewing to move-in",
    ],
    whatsappMessage:
      "Hi Culture’s House, I’m interested in a self-contained apartment.",
  },
  {
    number: "03",
    title: "Land for sale",
    summary:
      "Make space for your future. Explore plots for a home, a project or a long-term investment.",
    details: [
      "Plots suited to your plans and budget",
      "Support arranging a site visit",
      "Guidance on documents to review",
    ],
    whatsappMessage: "Hi Culture’s House, I’m interested in land for sale.",
  },
  {
    number: "04",
    title: "Land for lease",
    summary:
      "Room for your plans, without buying. Find land to use for an agreed period and purpose.",
    details: [
      "Land options for your intended use",
      "Help understanding lease terms",
      "Support coordinating with the landowner",
    ],
    whatsappMessage: "Hi Culture’s House, I’m interested in land for lease.",
  },
];
