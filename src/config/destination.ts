/**
 * World 2.0 Destination Configuration — Toulon Shore Excursions
 *
 * Domain is the single source of truth for canonicals, sitemap, OG, JSON-LD and Worker CORS.
 * Do not hard-code the hostname elsewhere.
 */

import type { DestinationCurrencyCode } from "@/lib/commerce/currency";

export type DestinationRegion =
  | "europe"
  | "caribbean"
  | "alaska"
  | "british-isles"
  | "other";

/**
 * CENTRAL — public contact is info@wowatour.com only (default until forwarding works).
 * LOCAL — display hello@ / bookings@ / privacy@ on the destination domain.
 */
export type ContactMode = "central" | "local";

export type DestinationConfig = {
  slug: string;
  name: string;
  destination: string;
  descriptor: string;
  strapline: string;
  domain: string;
  url: string;
  description: string;
  locale: string;
  region: DestinationRegion;
  currency: DestinationCurrencyCode;
  bookingRefPrefix: string;
  pagesProject: string;
  paymentsWorkerName: string;
  d1DatabaseName: string;
  /**
   * Public contact presentation. Keep `central` until destination email
   * forwarding (hello/bookings/privacy) is configured, then switch to `local`.
   */
  contactMode: ContactMode;
  /** Destination-local addresses — used only when contactMode is `local`. */
  contact: {
    hello: string;
    bookings: string;
    privacy: string;
  };
  legal: {
    tradingName: string;
    legalCompanyName: string;
    companyNumber: string;
    registeredJurisdiction: string;
    registeredOfficeLines: string[];
    registeredOfficeFormatted: string;
  };
  port: {
    scheduleSlug: string;
    meetingPointLabel: string;
    country: string;
  };
  seo: {
    defaultKeywords: string[];
  };
  nav: readonly { href: string; label: string }[];
  experienceCategories: readonly string[];
};

export const destinationConfig = {
  slug: "toulon",
  name: "Toulon Shore Excursions",
  destination: "Toulon",
  descriptor: "Shore Excursions",
  strapline: "Authentic Provence by the Sea",
  domain: "toulonshoreexcursions.com",
  url: "https://toulonshoreexcursions.com",
  description:
    "Independent Toulon shore excursions and honest cruise-port guidance — authentic Provence, historic harbour, Cassis, Bandol and the Côte d'Azur beyond the city.",
  locale: "en_GB",
  region: "europe",
  currency: "EUR",
  bookingRefPrefix: "TL",
  pagesProject: "toulon-shore-excursions",
  paymentsWorkerName: "toulon-payments",
  d1DatabaseName: "toulon-bookings",
  contactMode: "central",
  contact: {
    hello: "hello@toulonshoreexcursions.com",
    bookings: "bookings@toulonshoreexcursions.com",
    privacy: "privacy@toulonshoreexcursions.com",
  },
  legal: {
    tradingName: "Toulon Shore Excursions",
    legalCompanyName: "Wow A Tour Ltd",
    companyNumber: "11426960",
    registeredJurisdiction: "England and Wales",
    registeredOfficeLines: [
      "Kintyre House",
      "70 High Street",
      "Fareham",
      "Hampshire",
      "United Kingdom",
      "PO16 7BB",
    ],
    registeredOfficeFormatted:
      "Kintyre House, 70 High Street, Fareham, Hampshire, United Kingdom, PO16 7BB",
  },
  port: {
    scheduleSlug: "toulon",
    meetingPointLabel: "Toulon Cruise Port",
    country: "France",
  },
  seo: {
    defaultKeywords: [
      "Toulon Shore Excursions",
      "Toulon Cruise Excursions",
      "Toulon Cruise Port Guide",
      "Cassis from Toulon",
      "Provence Shore Excursions",
      "Walk It Yourself Toulon",
      "Mont Faron",
      "Bandol Wine Tour",
    ],
  },
  nav: [
    { href: "/compare", label: "Compare" },
    { href: "/shore-excursions", label: "Excursions" },
    { href: "/guides", label: "Guides" },
    { href: "/wow-collection", label: "Wow Collection" },
    { href: "/cruise-planner", label: "Planner" },
    { href: "/cruise-port-guide", label: "Port Guide" },
  ],
  experienceCategories: [
    "Editor's Choice",
    "Coastal Villages",
    "History",
    "Food & Wine",
    "Scenic Views",
    "Private",
    "Walk It Yourself",
    "Families",
    "Photography",
  ],
} as const satisfies DestinationConfig;

export type AppDestinationConfig = typeof destinationConfig;
