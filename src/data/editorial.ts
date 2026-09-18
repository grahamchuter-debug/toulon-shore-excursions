import type { EditorialCategory } from "./types";
import { SIGNATURE_EXPERIENCE_PATH } from "./signature-experience";
import { EXPLORE_INDEPENDENTLY_PATH } from "./explore-independently";

/**
 * Shared Editorial Promise — destination may override copy in this module.
 * Tone: editorial trust, never a sales pitch. Editor's Choice badge stays separate.
 */
export const editorialPromise = {
  eyebrow: "Our editorial promise",
  title: "We'll always recommend the experience we'd choose ourselves",
  lead: "We'll always recommend the experience we'd choose ourselves.",
  points: [
    "Sometimes that's one of our carefully selected Editor's Choice excursions.",
    "Sometimes it's a free self-guided experience.",
  ],
  closing: "Our goal is to help you enjoy the best possible day ashore.",
} as const;

export interface EditorialCategoryDef {
  id: EditorialCategory;
  label: string;
  shortLabel: string;
  description: string;
}

export const EDITORIAL_CATEGORIES: EditorialCategoryDef[] = [
  { id: "editors-choice", label: "Editor's Choice", shortLabel: "Editor's Choice", description: "Our strongest overall choice for a well-timed Toulon cruise day beyond the city." },
  { id: "best-historic", label: "Best Historic Experience", shortLabel: "Historic", description: "Naval heritage, historic harbour and Provençal Old Town." },
  { id: "best-independent", label: "Best Independent Experience", shortLabel: "Walk It Yourself", description: "A realistic self-guided Toulon day within easy reach of the ship — when independence is genuinely best." },
  { id: "best-coastal", label: "Best Coastal Villages", shortLabel: "Coast & Villages", description: "Cassis, Bandol and Sanary when hours ashore allow." },
  { id: "best-view", label: "Best Views", shortLabel: "Views", description: "Mont Faron panoramas and Mediterranean coastline." },
  { id: "best-got", label: "Signature Experience", shortLabel: "Signature", description: "Our future Toulon small-group flagship, currently in preparation." },
  { id: "best-families", label: "Best for Families", shortLabel: "Families", description: "Harbour walks and private coastal days with sensible pacing." },
  { id: "best-photography", label: "Best Photography", shortLabel: "Photography", description: "Harbour colour, Calanques drama and Mont Faron light." },
  { id: "best-food", label: "Best Food & Wine", shortLabel: "Food & Wine", description: "Markets, Provençal cuisine and Bandol vineyards." },
  { id: "best-luxury", label: "Best Private Tour", shortLabel: "Private", description: "Dedicated transport and flexible pacing for your own party." },
  { id: "hidden-gem", label: "Hidden Gem", shortLabel: "Hidden Gem", description: "Rue des Arts and quieter harbour corners beyond the busiest waterfront." },
  { id: "best-value", label: "Best Value", shortLabel: "Best Value", description: "A rewarding port day without unnecessary transfers or expense." },
  { id: "best-short-port", label: "Best Short Port Call", shortLabel: "Short Port", description: "Historic harbour and market highlights when usable hours are limited." },
];

export interface EditorsCollectionItem {
  id: string;
  emoji: string;
  label: string;
  description: string;
  href: string;
  cta: string;
  signature?: boolean;
  comingSoon?: boolean;
}

export const editorsCollectionItems: EditorsCollectionItem[] = [
  {
    id: "editors-choice",
    emoji: "⭐",
    label: "Editor's Choice",
    description: "Discover Cassis, Calanques & Provence Wine Tasting — the best overall day beyond Toulon.",
    href: "/shore-excursions/discover-cassis-calanques-provence-wine-tasting",
    cta: "View our top pick",
  },
  {
    id: "first-time",
    emoji: "⛵",
    label: "Best First-Time Tour",
    description: "Cassis and the Calanques for first-time visitors who want Provence beyond the harbour.",
    href: "/shore-excursions/discover-cassis-calanques-provence-wine-tasting",
    cta: "Discover Provence",
  },
  {
    id: "historic",
    emoji: "⚓",
    label: "Best City Day",
    description: "Walk It Yourself through Toulon’s historic harbour, Old Town and markets.",
    href: EXPLORE_INDEPENDENTLY_PATH,
    cta: "Explore on foot",
  },
  {
    id: "food-wine",
    emoji: "🍷",
    label: "Best Food & Wine",
    description: "Toulon cuisine tasting or Bandol country when vineyards call.",
    href: "/shore-excursions/toulon-traditional-cuisine-street-food",
    cta: "Taste Provence",
  },
  {
    id: "private",
    emoji: "🚗",
    label: "Best Beyond the City",
    description: "Luberon villages or private Bandol country when your port call supports the road time.",
    href: "/compare/city-or-provence",
    cta: "Compare city vs Provence",
  },
  {
    id: "photography",
    emoji: "📸",
    label: "Best Photography",
    description: "Mont Faron viewpoints and Cassis coastal drama for Mediterranean light.",
    href: "/guides/best-viewpoints",
    cta: "Find the views",
  },
  {
    id: "families",
    emoji: "👨‍👩‍👧",
    label: "Best for Families",
    description: "Private Bandol country keeps flexible pacing for mixed-age parties.",
    href: "/shore-excursions/private-bandol-country",
    cta: "See Bandol country",
  },
  {
    id: "independent",
    emoji: "🚶",
    label: "Walk It Yourself",
    description: "Historic Toulon from the cruise port — harbour, markets and cafés with a generous ship buffer.",
    href: EXPLORE_INDEPENDENTLY_PATH,
    cta: "Open the walking guide",
  },
  {
    id: "signature-experience",
    emoji: "✨",
    label: "Signature Provençal Toulon Discovery",
    description: "A future maximum-eight-guest Toulon and Provence day, currently in preparation and not bookable.",
    href: SIGNATURE_EXPERIENCE_PATH,
    cta: "Preview the concept",
    signature: true,
    comingSoon: true,
  },
];

export function getEditorialLabel(id: EditorialCategory): string {
  return EDITORIAL_CATEGORIES.find((category) => category.id === id)?.label ?? id;
}
