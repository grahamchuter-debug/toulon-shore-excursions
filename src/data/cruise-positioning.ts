/**
 * Central cruise-positioning + Your Day Ashore experience categories.
 * Reusable World 2.0 pattern — destination copy lives here; component stays generic.
 */
export const cruisePositioning = {
  enabled: true,
  eyebrow: "Designed for Cruise Passengers",
  message: "Helping cruise passengers make every hour ashore count.",
  variantBMessage: "Everything here is built around your time in port.",
  activeVariant: "A" as "A" | "B",
  showDayAshoreSection: true,
} as const;

export function getCruiseTrustMessage(): string {
  if (cruisePositioning.activeVariant === "B") {
    return cruisePositioning.variantBMessage;
  }
  return cruisePositioning.message;
}

export interface DayAshoreItem {
  id: string;
  title: string;
  body: string;
  href?: string;
  icon: "clock" | "route" | "walk" | "sunrise" | "viewpoint" | "food" | "family" | "luxury";
}

export const dayAshoreIntro =
  "Where will your day in Toulon take you? Stay for an authentic Provençal city, or use the port as a gateway to Cassis, Bandol and Provence beyond — neither path is the only correct answer.";

export const dayAshoreItems: DayAshoreItem[] = [
  {
    id: "walk-it-yourself",
    title: "Walk It Yourself",
    body: "Historic harbour, Old Town lanes, markets and waterfront cafés — Toulon rewards a human pace.",
    href: "/guides/explore-independently",
    icon: "walk",
  },
  {
    id: "editors-choice",
    title: "Editor's Choice",
    body: "Discover Cassis, the Calanques and Provence wine tasting — our strongest overall cruise day beyond the city.",
    href: "/shore-excursions/discover-cassis-calanques-provence-wine-tasting",
    icon: "luxury",
  },
  {
    id: "history",
    title: "History",
    body: "Naval heritage, the historic harbour and Provençal streets that still feel lived-in.",
    href: "/guides/old-town-guide",
    icon: "route",
  },
  {
    id: "food-wine",
    title: "Food & Wine",
    body: "Cours Lafayette market flavours, Provençal cuisine and the Bandol vineyard country nearby.",
    href: "/guides/food-guide",
    icon: "food",
  },
  {
    id: "photography",
    title: "Photography",
    body: "Mont Faron panoramas, Mediterranean light and colourful harbour façades.",
    href: "/guides/best-viewpoints",
    icon: "viewpoint",
  },
  {
    id: "families",
    title: "Families",
    body: "Harbour walks, market browsing and coastal village days with sensible cruise pacing.",
    href: "/shore-excursions/private-bandol-country",
    icon: "family",
  },
  {
    id: "coastal-villages",
    title: "Coastal Villages",
    body: "Bandol, Cassis and Sanary — fishing harbours and Provençal colour along the coast.",
    href: "/shore-excursions/discover-cassis-calanques-provence-wine-tasting",
    icon: "sunrise",
  },
];
