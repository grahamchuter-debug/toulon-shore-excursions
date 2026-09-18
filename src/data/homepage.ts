import type { ExperienceCard, FAQ, VisitorType } from "./types";

export const homepageTagline = "Authentic Provence by the Sea";

export const homepageSubheading =
  "Enjoy an authentic Provençal city at your own pace, or use Toulon as a gateway to Cassis, Bandol and Provence beyond — two excellent ways to spend a cruise day, and neither is the only correct answer.";

export const homepageDestinationLine =
  "Historic Harbour · Mont Faron · Cassis · Bandol · Provence";

export const visitorTypes: VisitorType[] = [
  {
    id: "port-day",
    label: "I'm visiting Toulon for the day on a cruise",
    shortLabel: "Port day",
    description:
      "Match your hours ashore to historic Toulon, Mont Faron viewpoints, or a Provence day beyond the city — with a proper return buffer.",
    href: "/shore-excursions",
    cta: "Plan my port day",
  },
  {
    id: "first-time",
    label: "It's my first time in Toulon",
    shortLabel: "First visit",
    description:
      "Compare walking the harbour independently, our Editor's Choice Cassis day, or venturing into inland Provence before you choose.",
    href: "/shore-excursions/discover-cassis-calanques-provence-wine-tasting",
    cta: "See first-time picks",
  },
  {
    id: "independent",
    label: "I prefer to explore independently",
    shortLabel: "Independent",
    description:
      "Toulon is one of the Mediterranean's most rewarding cruise ports to explore on foot — markets, naval heritage and waterfront cafés close to the ship.",
    href: "/guides/explore-independently",
    cta: "Walk It Yourself",
  },
  {
    id: "planner",
    label: "I want help choosing my day",
    shortLabel: "Cruise planner",
    description:
      "Tell us your port times, interests, mobility and pace for a tailored Toulon and Provence plan.",
    href: "/cruise-planner",
    cta: "Use the planner",
  },
];

export interface HomeSection {
  slug: string;
  number: string;
  title: string;
  description: string;
  href: string;
  cta: string;
}

export const coreSections: HomeSection[] = [
  {
    slug: "excursions",
    number: "01",
    title: "Shore excursions",
    description:
      "Carefully selected experiences across Cassis, Bandol, Luberon villages and Provence beyond Toulon — designed around cruise timing.",
    href: "/shore-excursions",
    cta: "Browse excursions",
  },
  {
    slug: "guides",
    number: "02",
    title: "Port & city guides",
    description:
      "Honest advice on walking from the cruise port, historic Toulon, Mont Faron, markets and when an organised tour actually helps.",
    href: "/guides",
    cta: "Read the guides",
  },
  {
    slug: "schedules",
    number: "03",
    title: "Cruise ship schedule",
    description:
      "Ship call data for Toulon will appear here once confirmed schedules are available for publication.",
    href: "/ship-schedules",
    cta: "View schedules",
  },
];

export const spiritOfPlace = {
  title: "Provence by the sea. Effortlessly French.",
  body: [
    "Toulon is not Cannes or Saint-Tropez — and that is precisely its appeal. France's great naval harbour still feels lived-in: colourful market stalls at Cours Lafayette, café terraces facing the Mediterranean, and a waterfront shaped by centuries of maritime life rather than yacht-club glamour.",
    "We write like an independent cruise concierge: fewer recommendations, clearer trade-offs, and always a plan that protects your return to the ship. Many guests happily spend the day inside the city; others use Toulon as the most underrated gateway on the Riviera to Cassis, Bandol and the Calanques. Both are excellent choices.",
  ],
};

export const honestAdvicePoints = [
  {
    title: "Toulon rewards independence",
    body: "If you enjoy relaxed French cities, cafés, markets and local life, Toulon is genuinely excellent on your own — not a consolation prize, but a first-class Provençal day ashore.",
  },
  {
    title: "Provence beyond the city needs planning",
    body: "Organised excursions to Cassis, Aix-en-Provence, Bandol and surrounding villages provide greater variety when you want coastline, wine country or hill villages within a cruise window.",
  },
  {
    title: "All-aboard beats published departure",
    body: "Plan from the moment you must be aboard, then add a buffer. The ship will not wait for one more harbour photograph or market stall.",
  },
];

export function getHomepageFaqs(): FAQ[] {
  return [
    {
      question: "Can I explore Toulon without an excursion?",
      answer:
        "Yes. Toulon is one of the Mediterranean's most rewarding cruise ports for independent exploration. Many visitors walk into the historic harbour, browse Cours Lafayette market and enjoy waterfront cafés with a sensible return buffer. An organised excursion becomes especially useful for Cassis, the Calanques, Bandol wine country or inland Provence villages.",
    },
    {
      question: "How far is the city centre from the cruise port?",
      answer:
        "Typically a walkable distance from the passenger terminals into the historic harbour and Old Town — often around 10–20 minutes depending on berth, pace and route. Exact timing varies; follow port signage and allow extra time if mobility is limited.",
    },
    {
      question: "Should I book a tour?",
      answer:
        "Book a tour when you want Provence beyond the city — coastal villages, Calanques scenery, wine tastings or hilltop Luberon villages — or when you prefer guided structure and transport. Stay independent when you enjoy relaxed French city life, markets and harbour cafés at your own pace.",
    },
    {
      question: "What is your Editor's Choice excursion?",
      answer:
        "Discover Cassis, Calanques & Provence Wine Tasting — our strongest overall cruise day beyond Toulon, combining village harbour charm, dramatic coastline and a Côte de Provence tasting.",
    },
  ];
}

export const featuredExperienceCards: ExperienceCard[] = [
  {
    slug: "discover-cassis-calanques-provence-wine-tasting",
    type: "guided",
    title: "Editor's Choice",
    eyebrow: "Editor's pick",
    description: "Discover Provence Beyond Toulon",
    href: "/shore-excursions/discover-cassis-calanques-provence-wine-tasting",
    cta: "View Editor's Choice",
    imageKey: "coast",
  },
  {
    slug: "explore-independently",
    type: "walk-it-yourself",
    title: "Walk It Yourself",
    eyebrow: "Free self-guided route",
    description: "Historic Toulon",
    href: "/guides/explore-independently",
    cta: "Open the walking guide",
    imageKey: "walking",
    duration: "2.5–4 hours",
    distance: "Approximately 3–5 km",
    difficulty: "Easy to moderate",
    idealFor: "Independent cruise passengers",
  },
  {
    slug: "coastal-villages",
    type: "nature",
    title: "Coast & Villages",
    description: "Bandol, Cassis & Sanary",
    href: "/shore-excursions/discover-cassis-calanques-provence-wine-tasting",
    cta: "Explore the coast",
    imageKey: "coast",
  },
  {
    slug: "food-wine",
    type: "food-wine",
    title: "Food & Wine",
    description: "Markets, Provençal cuisine & vineyards",
    href: "/guides/food-guide",
    cta: "Taste Provence",
    imageKey: "food",
  },
  {
    slug: "scenic-views",
    type: "photography",
    title: "Scenic Views",
    description: "Mont Faron & Mediterranean coastline",
    href: "/guides/best-viewpoints",
    cta: "Find viewpoints",
    imageKey: "photography",
  },
];

export const experienceCards: ExperienceCard[] = [
  {
    slug: "discover-cassis-calanques-provence-wine-tasting",
    type: "guided",
    title: "Editor's Choice",
    eyebrow: "Editor's pick",
    description: "Cassis harbour, Calanques drama and Provence wine — the strongest overall day beyond Toulon.",
    href: "/shore-excursions/discover-cassis-calanques-provence-wine-tasting",
    cta: "View Editor's Choice",
    imageKey: "coast",
  },
  {
    slug: "explore-independently",
    type: "walk-it-yourself",
    title: "Walk It Yourself",
    eyebrow: "Free self-guided route",
    description: "Historic harbour, Old Town lanes and Cours Lafayette market at your own pace.",
    href: "/guides/explore-independently",
    cta: "Walk It Yourself",
    imageKey: "walking",
    duration: "2.5–4 hours",
    distance: "3–5 km",
    difficulty: "Easy to moderate",
    idealFor: "Independent explorers",
  },
  {
    slug: "history",
    type: "history",
    title: "History",
    description: "Naval heritage, the historic harbour and Provençal streets that still feel authentically French.",
    href: "/guides/old-town-guide",
    cta: "Explore historic Toulon",
    imageKey: "historic",
  },
  {
    slug: "coastal-villages",
    type: "nature",
    title: "Coast & Villages",
    description: "Bandol, Cassis and Sanary — fishing harbours and Provençal colour along the Mediterranean.",
    href: "/shore-excursions/discover-cassis-calanques-provence-wine-tasting",
    cta: "See coastal villages",
    imageKey: "coast",
  },
  {
    slug: "food-wine",
    type: "food-wine",
    title: "Food & Wine",
    description: "Market flavours, Provençal cuisine and Bandol vineyard country nearby.",
    href: "/guides/food-guide",
    cta: "Taste Provence",
    imageKey: "food",
  },
  {
    slug: "photography",
    type: "photography",
    title: "Scenic Views",
    description: "Mont Faron panoramas, Mediterranean light and colourful harbour façades.",
    href: "/guides/best-viewpoints",
    cta: "Find viewpoints",
    imageKey: "photography",
  },
  {
    slug: "luberon-villages",
    type: "nature",
    title: "Inland Provence",
    description: "Luberon hill villages, ochre cliffs and the classic Provençal countryside beyond the coast.",
    href: "/shore-excursions/charming-villages-luberon-valley",
    cta: "Discover Luberon",
    imageKey: "wine",
  },
  {
    slug: "culinary-toulon",
    type: "food-wine",
    title: "Culinary Toulon",
    description: "Guided tastings through seasonal Provençal flavours and street-food favourites near the harbour.",
    href: "/shore-excursions/toulon-traditional-cuisine-street-food",
    cta: "Taste Toulon",
    imageKey: "food",
  },
  {
    slug: "families",
    type: "families",
    title: "Families",
    description: "Harbour walks, market browsing and coastal village days with sensible cruise pacing.",
    href: "/shore-excursions/private-bandol-country",
    cta: "Plan a family day",
    imageKey: "family",
  },
  {
    slug: "private",
    type: "private",
    title: "Private Experiences",
    description: "Flexible private pacing when your party wants Bandol, Cassis or the Riviera shaped around you.",
    href: "/shore-excursions/private-bandol-country",
    cta: "Browse private options",
    imageKey: "private",
  },
];

/** Homepage hero — destination copy (components stay generic). */
export const homepageHero = {
  eyebrow: "Toulon Shore Excursions",
  headline: homepageTagline,
  subheading: homepageSubheading,
  destinationLine: homepageDestinationLine,
  primaryCta: { href: "/shore-excursions", label: "Explore Shore Excursions" },
  secondaryCta: { href: "/guides/explore-independently", label: "Walk It Yourself" },
} as const;

export interface ChooseYourDayCard {
  slug: string;
  emoji: string;
  title: string;
  tagline: string;
  highlights: readonly string[];
  cta: string;
  href: string;
  imageKey: string;
  wide?: boolean;
}

export const chooseYourDay = {
  eyebrow: "Choose Your Day",
  title: "How would you like to experience Toulon?",
  subtitle:
    "Stay for an authentic Provençal city, discover Provence beyond the harbour, or choose our Editor's Choice coastal adventure — three clear paths shaped around your hours ashore.",
  cards: [
    {
      slug: "explore-toulon",
      emoji: "🚶",
      title: "Explore Toulon",
      tagline:
        "Historic harbour, colourful markets, naval heritage and waterfront cafés — a complete Provençal city day at your own pace.",
      highlights: [
        "Walkable distance from many berths",
        "Cours Lafayette market and Old Town lanes",
        "Naval harbour and Mediterranean waterfront",
        "Local café recommendations, not tourist traps",
        "Ideal when you want authentic French city life",
      ],
      cta: "Open Walk It Yourself",
      href: "/guides/explore-independently",
      imageKey: "walking",
      wide: true,
    },
    {
      slug: "discover-provence",
      emoji: "🍷",
      title: "Discover Provence",
      tagline:
        "Bandol vineyards, Luberon hill villages and inland Provençal scenery — when your port call supports travel beyond the city.",
      highlights: [
        "Bandol wine country and coastal character",
        "Luberon villages and ochre landscapes",
        "Aix-en-Provence and Marseille within reach",
        "Best on a fuller, unhurried call",
        "Honest trade-off versus city time",
      ],
      cta: "See Provence excursions",
      href: "/shore-excursions/charming-villages-luberon-valley",
      imageKey: "wine",
      wide: true,
    },
    {
      slug: "editors-choice-adventure",
      emoji: "⛵",
      title: "Editor's Choice Adventure",
      tagline:
        "Cassis harbour light, Calanques drama and a Côte de Provence wine tasting — our strongest overall cruise day beyond Toulon.",
      highlights: [
        "Editor's Choice for first-time visitors",
        "Cassis village and Mediterranean coastline",
        "Calanques scenery and Cap Canaille viewpoints",
        "Included Provence wine tasting",
        "Cruise-timed return from the port",
      ],
      cta: "View Editor's Choice",
      href: "/shore-excursions/discover-cassis-calanques-provence-wine-tasting",
      imageKey: "coast",
      wide: false,
    },
  ] as const satisfies readonly ChooseYourDayCard[],
};

export const honestAdviceContent = {
  eyebrow: "Honest advice",
  title: "Do You Need a Shore Excursion in Toulon?",
  subtitle:
    "The honest answer: Toulon offers two excellent ways to spend a cruise day, and neither is the only correct choice. If you enjoy relaxed French cities, cafés, markets and local life, Toulon is genuinely excellent independently. If you wish to experience Provence beyond the city, organised excursions to Cassis, Aix-en-Provence or surrounding villages provide greater variety within your hours ashore.",
  independent: {
    title: "You can explore Toulon independently — and many passengers do",
    body: "Toulon's historic harbour sits a walkable distance from the cruise terminals, making a flexible, authentic Provençal day realistic for most guests:",
    items: [
      "Cours Lafayette market and colourful stalls",
      "Naval harbour and Old Town lanes",
      "Waterfront cafés and Mediterranean promenade",
      "Mont Faron cable car for panoramic views",
    ],
    note: "Set a 60–90 minute return buffer and confirm your all-aboard time. The ship will not wait.",
  },
  organised: {
    title: "When a guided day is the better choice",
    body: "Organised commentary and transport matter when you want Provence beyond the walkable city core — or when you prefer structure over self-navigation:",
    items: [
      {
        label: "Cassis & Calanques",
        detail: "coastal villages, cliff scenery and wine tasting in one balanced cruise day",
      },
      {
        label: "Bandol country",
        detail: "vineyard landscapes and fishing harbours at a private or small-group pace",
      },
      {
        label: "Luberon villages",
        detail: "hilltop Provençal character and ochre landscapes inland",
      },
      {
        label: "Aix-en-Provence",
        detail: "elegant boulevards and market squares when your call supports the road time",
      },
    ],
  },
  links: [
    { href: "/compare/tour-or-independent", label: "Tour or independent?" },
    { href: "/guides/explore-independently", label: "Walk It Yourself" },
    { href: "/guides/walking-from-port", label: "Walking from the cruise port" },
  ],
} as const;

export const featuredSectionCopy = {
  eyebrow: "When you're ready",
  title: "Featured shore excursions",
  subtitle:
    "Curated Toulon experiences planned around your cruise day. Live booking opens once EUR selling prices and fulfilment routes are verified.",
} as const;
