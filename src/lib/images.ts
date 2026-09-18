export interface SiteImage {
  src: string;
  alt: string;
  base: string;
}

const B = "/images";

function img(base: string, alt: string): SiteImage {
  return { base, src: `${B}/${base}.jpg`, alt };
}

export const siteImages = {
  hero: img(
    "hero",
    "Toulon and the Mediterranean roadstead seen from Mont Faron — authentic Provence by the sea",
  ),
  ogDefault: img(
    "og-default",
    "Toulon harbour and Mediterranean coastline from Mont Faron",
  ),
  logo: {
    base: "logo-mark",
    src: `${B}/logo-mark.svg`,
    alt: "Toulon Shore Excursions",
  },
  port: img("cruise-port", "Toulon cruise port waterfront — gateway to Provence"),
} as const;

export const subjectImages: Record<string, SiteImage> = {
  historic: img("historic", "Toulon Old Town lanes and Provençal façades"),
  coast: img("coastal", "Mediterranean coastline near Toulon and Cassis"),
  coastal: img("coastal", "Mediterranean coastline near Toulon and Cassis"),
  walking: img("walking", "Walking Toulon’s historic harbour from the cruise port"),
  food: img("food-and-wine", "Provençal markets, cuisine and café culture in Toulon"),
  "food-and-wine": img("food-and-wine", "Provençal markets, cuisine and café culture in Toulon"),
  wine: img("food-and-wine", "Provence wine country and Bandol vineyards near Toulon"),
  private: img("private", "Private Provence shore excursion from Toulon"),
  photography: img("photography", "Mont Faron and Mediterranean viewpoints above Toulon"),
  compare: img("compare", "Comparing Toulon shore excursion options"),
  port: img("cruise-port", "Toulon cruise passenger terminal area"),
  highlights: img("historic", "Toulon harbour and Provençal highlights for cruise visitors"),
  city: img("historic", "Historic Toulon centre from the cruise port"),
  nature: img("nature", "Calanques coastline and Provençal landscape beyond Toulon"),
  family: img("family", "Family-friendly Toulon harbour and coastal day ashore"),
  "hero-home": img("hero", "Toulon harbour — authentic Provence by the sea"),
  cassis: img("cassis", "Cassis harbour and Calanques coastline from Toulon"),
  bandol: img("bandol", "Bandol wine country and coastal Provence near Toulon"),
  "mont-faron": img("mont-faron", "Mont Faron viewpoint above Toulon and the Mediterranean"),
  harbour: img("harbour", "Toulon historic harbour — Vieille Darse"),
  market: img("market", "Cours Lafayette market in Toulon"),
  viewpoints: img("photography", "Mediterranean viewpoints from Mont Faron and the Toulon coast"),
};

function pick(key: string): SiteImage {
  return subjectImages[key] ?? siteImages.ogDefault;
}

const excursionImageKeys: Record<string, string> = {
  "discover-cassis-calanques-provence-wine-tasting": "cassis",
  "toulon-traditional-cuisine-street-food": "food",
  "charming-villages-luberon-valley": "nature",
  "private-bandol-country": "bandol",
  "private-half-day-marseille": "coast",
  "private-hyeres-le-lavandou-saint-tropez": "coastal",
  "private-provence-le-castellet-cassis-marseille": "cassis",
};

export function getExcursionImage(slug: string): SiteImage {
  return pick(excursionImageKeys[slug] ?? "highlights");
}

export const excursionsHubImage = pick("cassis");

const highlightImageKeys: Record<string, string> = {
  "historic-harbour": "harbour",
  "old-town": "historic",
  "cours-lafayette-market": "market",
  "mont-faron": "mont-faron",
  "place-de-la-liberte": "historic",
  cassis: "cassis",
  bandol: "bandol",
};

const comparisonImageKeys: Record<string, string> = {
  "tour-or-independent": "compare",
  "city-or-provence": "cassis",
  "best-shore-excursions": "cassis",
  "first-time-toulon-day": "harbour",
};

export function getComparisonImage(slug: string): SiteImage {
  return pick(comparisonImageKeys[slug] ?? "compare");
}

export function getHighlightImage(slug: string): SiteImage {
  return pick(highlightImageKeys[slug] ?? "highlights");
}

export function getExperienceImage(slug: string): SiteImage {
  return pick(slug);
}

export const guidesHubImage = pick("highlights");

const guideImageKeys: Record<string, string> = {
  historic: "historic",
  walking: "walking",
  compare: "compare",
  port: "port",
  food: "food",
  private: "private",
  coast: "coast",
  coastal: "coastal",
  nature: "nature",
  photography: "photography",
};

export function getGuideImage(imageKey: string): SiteImage {
  return pick(guideImageKeys[imageKey] ?? imageKey);
}

export function getHotelImage(_slug?: string): SiteImage {
  return pick("city");
}

export function getTransferImage(_slug?: string): SiteImage {
  return pick("private");
}
