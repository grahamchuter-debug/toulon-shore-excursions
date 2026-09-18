import { SIGNATURE_EXPERIENCE_PATH, signatureToulonExperience } from "./signature-experience";

export interface PlannerInput {
  arrivalTime?: string;
  departureTime?: string;
  adults: number;
  children: number;
  interests: string[];
  mobility: "full" | "some" | "limited";
  budget: "budget" | "mid" | "premium";
  travelStyle: "diy" | "guided";
}

export interface PlannerLink {
  label: string;
  href: string;
  why: string;
}

export interface PlannerResult {
  headline: string;
  summary: string;
  excursions: PlannerLink[];
  transfers: PlannerLink[];
  stay: PlannerLink[];
  logistics: PlannerLink[];
  dayPlan: { time: string; text: string }[];
}

export const PLANNER_VISITOR_TYPES = [
  {
    id: "independent",
    label: "Independent Toulon explorer",
    description: "A low-risk city day using walking, market browsing, cafés and your own return buffer.",
  },
  {
    id: "cassis",
    label: "First-time Cassis & Calanques visitor",
    description: "Editor’s Choice Provence beyond the city — coastal villages, cliffs and wine tasting.",
  },
  {
    id: "food",
    label: "Food & wine traveller",
    description: "Provençal flavours in Toulon or on a curated tasting day beyond the harbour.",
  },
  {
    id: "villages",
    label: "Provence villages traveller",
    description: "Bandol country or Luberon hilltops when your port call supports the road time.",
  },
] as const;

export const INTEREST_OPTIONS = [
  { id: "old-town", label: "Toulon Old Town" },
  { id: "harbour", label: "Historic harbour" },
  { id: "cassis", label: "Cassis & Calanques" },
  { id: "food", label: "Food & wine" },
  { id: "villages", label: "Provence villages" },
  { id: "bandol", label: "Bandol country" },
  { id: "photography", label: "Photography & scenery" },
  { id: "family", label: "Family-friendly" },
  { id: "independent", label: "Independent travel" },
];

type PlanKey = "independent" | "cassis" | "food" | "villages";

export const TOULON_DAY_PLANS: Record<
  PlanKey,
  { headline: string; summary: string; minimumHours: number; links: PlannerLink[]; dayPlan: PlannerResult["dayPlan"] }
> = {
  independent: {
    headline: "Independent Toulon harbour & Old Town",
    summary:
      "The most flexible choice: walk from the terminals toward the Vieille Darse, Cours Lafayette market, Place de la Liberté and harbour cafés.",
    minimumHours: 4,
    links: [
      {
        label: "Walking from Toulon Port",
        href: "/guides/walking-from-port",
        why: "Walking route, timing and return-to-ship advice.",
      },
      {
        label: "Walk It Yourself",
        href: "/guides/explore-independently",
        why: "DIY harbour and Old Town plan without an organised tour.",
      },
    ],
    dayPlan: [
      { time: "Morning", text: "Walk from the cruise port into the historic harbour and Old Town lanes." },
      { time: "Late morning", text: "Browse Cours Lafayette market and pause at Place de la Liberté." },
      { time: "Afternoon", text: "Harbour cafés, optional Mont Faron if time allows — then return with a buffer." },
    ],
  },
  cassis: {
    headline: "Cassis, Calanques & Provence wine",
    summary:
      "Editor’s Choice beyond Toulon — fishing-harbour light, coastal drama and a Côte de Provence tasting in one carefully paced shore day.",
    minimumHours: 6,
    links: [
      {
        label: "Discover Cassis, Calanques & Provence Wine Tasting",
        href: "/shore-excursions/discover-cassis-calanques-provence-wine-tasting",
        why: "Editor’s Choice introduction for first-time cruise visitors who want Provence beyond the city.",
      },
      {
        label: "Toulon City or Provence?",
        href: "/compare/city-or-provence",
        why: "Honest trade-offs before you leave the harbour behind.",
      },
    ],
    dayPlan: [
      { time: "Meet", text: "Join your guide near the passenger terminal and confirm timing against all-aboard." },
      { time: "Coastal transfer", text: "Drive toward Cassis with commentary on the Var coast and Calanques." },
      { time: "Cassis & wine", text: "Harbour village time, coastal viewpoints and a Provence tasting before returning." },
    ],
  },
  food: {
    headline: "Toulon food & Provençal flavours",
    summary:
      "Seasonal produce, street-food favourites and harbour-side tastings — close to the ship or woven into a longer Provence day.",
    minimumHours: 4,
    links: [
      {
        label: "Best of Toulon's Traditional Cuisine & Street Food",
        href: "/shore-excursions/toulon-traditional-cuisine-street-food",
        why: "Guided tastings through Toulon’s Provençal flavours without a long transfer.",
      },
      {
        label: "Toulon Food Guide",
        href: "/guides/food-guide",
        why: "Independent lunch and market stops when you prefer DIY pacing.",
      },
    ],
    dayPlan: [
      { time: "Morning", text: "Market browsing at Cours Lafayette or a guided tasting circuit near the harbour." },
      { time: "Midday", text: "Provençal lunch — bouillabaisse, tapenade or seasonal produce depending on the season." },
      { time: "Afternoon", text: "Café time and Old Town lanes before the return buffer." },
    ],
  },
  villages: {
    headline: "Provence beyond Toulon",
    summary:
      "Bandol vineyards, Luberon hilltops or combined coastal villages — only when your usable hours support the road time.",
    minimumHours: 7,
    links: [
      {
        label: "Private Bandol Country",
        href: "/shore-excursions/private-bandol-country",
        why: "Vineyard landscapes and fishing harbours at a private or small-group pace.",
      },
      {
        label: "Charming Villages of the Luberon Valley",
        href: "/shore-excursions/charming-villages-luberon-valley",
        why: "Hilltop Provençal character for long, unhurried port calls.",
      },
    ],
    dayPlan: [
      { time: "Depart", text: "Leave the Toulon port area with cruise-aware transport." },
      { time: "Experience", text: "Bandol country, Luberon lanes or village stops as chosen." },
      { time: "Return", text: "Drive back with a generous all-aboard buffer." },
    ],
  },
};

function parseHour(value?: string): number | null {
  if (!value) return null;
  const m = value.match(/^(\d{1,2}):(\d{2})$/);
  if (!m) return null;
  return Number(m[1]) + Number(m[2]) / 60;
}

function usableHours(input: PlannerInput): number {
  const arrival = parseHour(input.arrivalTime);
  const departure = parseHour(input.departureTime);
  if (arrival == null || departure == null) return 8;
  let hours = departure - arrival;
  if (hours <= 0) hours += 24;
  return Math.max(1, hours - 1.5);
}

function selectPlan(input: PlannerInput, hours: number): PlanKey {
  const interests = input.interests;
  if (
    input.travelStyle === "diy" ||
    input.mobility === "limited" ||
    interests.includes("independent") ||
    interests.includes("old-town") ||
    interests.includes("harbour") ||
    hours < 6
  ) {
    if (input.travelStyle === "guided" && hours >= 6 && !interests.includes("independent")) {
      if (interests.includes("cassis") || interests.includes("photography")) return "cassis";
      if (interests.includes("food")) return "food";
    }
    return "independent";
  }
  if (interests.includes("villages") || interests.includes("bandol")) return "villages";
  if (interests.includes("cassis") || interests.includes("photography")) return "cassis";
  if (interests.includes("food") && hours < 7) return "food";
  return hours >= 6 ? "cassis" : "independent";
}

/** @deprecated Compatibility alias */
export const SAVONA_DAY_PLANS = TOULON_DAY_PLANS;

/** @deprecated Compatibility alias */
export const TALLINN_DAY_PLANS = TOULON_DAY_PLANS;

export function generateToulonPlan(input: PlannerInput): PlannerResult {
  const hours = usableHours(input);
  const key = selectPlan(input, hours);
  const plan = TOULON_DAY_PLANS[key];
  const partySize = input.adults + input.children;
  const excursions = [...plan.links];

  if (input.budget === "premium") {
    excursions.push({
      label: signatureToulonExperience.title,
      href: SIGNATURE_EXPERIENCE_PATH,
      why: "Future maximum-eight-guest Provence concept — in preparation and not bookable.",
    });
  }

  if (input.interests.includes("food") && key === "independent") {
    excursions.push({
      label: "Best of Toulon's Traditional Cuisine & Street Food",
      href: "/shore-excursions/toulon-traditional-cuisine-street-food",
      why: "Central tastings without a road day.",
    });
  }

  return {
    headline: plan.headline,
    summary: `${plan.summary} Your call provides about ${hours.toFixed(1)} usable hours for ${partySize} guest${partySize === 1 ? "" : "s"}. ${hours < plan.minimumHours ? `This is shorter than the ${plan.minimumHours}-hour minimum we recommend for this style, so prefer Toulon on foot.` : ""}`.trim(),
    excursions,
    transfers: [
      {
        label: "Toulon Cruise Port Guide",
        href: "/cruise-port-guide",
        why: "Terminal walking times, taxis and city access.",
      },
    ],
    stay: [],
    logistics: [
      {
        label: "Toulon Ship Schedule",
        href: "/ship-schedules/toulon",
        why: "Recheck the published arrival and departure for your call.",
      },
      {
        label: "Compare Toulon options",
        href: "/compare",
        why: "Review honest trade-offs before booking a long Provence day.",
      },
    ],
    dayPlan: [
      ...plan.dayPlan,
      {
        time: "Return buffer",
        text: "Reach the Toulon terminal 60–90 minutes before all-aboard; Cassis, Bandol and Luberon days require additional road traffic contingency.",
      },
    ],
  };
}

/** @deprecated Compatibility aliases */
export function generateSavonaPlan(input: PlannerInput): PlannerResult {
  return generateToulonPlan(input);
}

export function generateSplitPlan(input: PlannerInput): PlannerResult {
  return generateToulonPlan(input);
}
