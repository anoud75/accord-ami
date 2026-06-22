export type SectorKey = "healthcare" | "fintech" | "environment" | "ai-inclusion" | "brand";

export interface Sector {
  key: SectorKey;
  slug: string;
  label: string;
  shortLabel: string;
  description: string;
  accentVar: string; // tailwind class: text-sector-*
  accentClass: string;
}

export const sectors: Sector[] = [
  {
    key: "healthcare",
    slug: "/healthcare",
    label: "Healthcare & Health Intelligence",
    shortLabel: "Healthcare",
    description:
      "Designing population-health, clinical, operational, and AI-enabled healthcare products.",
    accentVar: "--sector-health",
    accentClass: "text-sector-health",
  },
  {
    key: "fintech",
    slug: "/fintech",
    label: "Fintech & Digital Trust",
    shortLabel: "Fintech",
    description:
      "Designing financial products where speed, usability, risk, and trust need to work together.",
    accentVar: "--sector-fintech",
    accentClass: "text-sector-fintech",
  },
  {
    key: "environment",
    slug: "/environment",
    label: "Environmental Intelligence",
    shortLabel: "Environment",
    description:
      "Building data-driven products for agriculture, climate resilience, ecosystems, and marine monitoring.",
    accentVar: "--sector-env",
    accentClass: "text-sector-env",
  },
  {
    key: "ai-inclusion",
    slug: "/ai-inclusion",
    label: "Human-Centred AI & Inclusion",
    shortLabel: "AI & Inclusion",
    description:
      "Using AI to make communication, information, and services more accessible and inclusive.",
    accentVar: "--sector-ai",
    accentClass: "text-sector-ai",
  },
  {
    key: "brand",
    slug: "/brand",
    label: "Brand & Experience Systems",
    shortLabel: "Brand",
    description:
      "Creating identities, public experiences, learning systems, and visual storytelling that make ideas memorable.",
    accentVar: "--sector-brand",
    accentClass: "text-sector-brand",
  },
];

export const getSector = (key: SectorKey) => sectors.find((s) => s.key === key)!;
