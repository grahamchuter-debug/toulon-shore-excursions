import type { Comparison } from "./types";

export const comparisons: Comparison[] = [
  {
    slug: "tour-or-independent",
    title: "Tour or Independent?",
    seoTitle: "Toulon Tour or Independent? Honest Cruise Advice",
    metaDescription:
      "Should you book a Toulon shore excursion or explore the harbour and Old Town independently? Honest comparison for cruise passengers.",
    kind: "versus",
    optionA: "Independent",
    optionB: "Guided tour",
    summary:
      "Toulon is one of the Riviera’s most walkable cruise ports. Independence wins for flexible harbour days; a guided tour wins for culinary context, mobility support and days beyond the city to Cassis, Bandol or the Luberon.",
    verdict:
      "Choose independence when the historic harbour and Old Town are your priority and you enjoy self-paced wandering. Choose a tour when you want local narrative, structured pacing, or destinations such as Cassis, Bandol, Luberon villages or Marseille.",
    overview: [
      "Many guests walk from the passenger terminals into the Vieille Darse and Old Town without an organised excursion.",
      "Guided food and walking formats add Provençal context while still leaving free time afterwards.",
      "Beyond-city days almost always need organised transport to protect return timing.",
    ],
    comparisonTable: [
      { category: "Best for", optionA: "Flexible harbour and Old Town wandering", optionB: "History narrative or Provence beyond the city" },
      { category: "Cost", optionA: "Lower", optionB: "Higher" },
      { category: "Walking", optionA: "Self-paced paving stones", optionB: "Guided pace on city lanes and village paths" },
      { category: "Return timing", optionA: "Your responsibility", optionB: "Cruise-aware operator planning" },
      { category: "Beyond Toulon", optionA: "Harder without transport", optionB: "Practical with organised routing" },
    ],
    faqs: [
      {
        question: "Can I explore Toulon without an excursion?",
        answer:
          "Yes. Independent harbour and Old Town days are common and often excellent.",
      },
      {
        question: "When is a tour clearly better?",
        answer:
          "When you want culinary or historical context, limited-mobility support, or Cassis, Bandol, Luberon or Marseille within limited hours.",
      },
    ],
    relatedSlugs: ["first-time-toulon-day", "best-shore-excursions", "city-or-provence"],
    imageKey: "compare",
  },
  {
    slug: "city-or-provence",
    title: "Toulon City or Provence?",
    seoTitle: "Toulon City or Provence Beyond — Cassis, Bandol & Villages?",
    metaDescription:
      "Compare a Toulon city day with Provence beyond — Cassis, Calanques, Bandol and Luberon villages. Honest cruise-day trade-offs and timing.",
    kind: "versus",
    optionA: "Toulon city",
    optionB: "Provence beyond",
    summary:
      "Toulon delivers authentic Provençal harbour life beside the ship. Cassis, Bandol and hilltop villages reward longer calls with coastal drama and vineyard country — at the cost of road time.",
    verdict:
      "First-time visitors should prioritise Toulon unless you deliberately want Provence beyond the city. Add Cassis or Bandol when you have a solid half day or more remaining, or when coastal villages matter more than another harbour stroll.",
    overview: [
      "The historic harbour and Old Town need no long transfer.",
      "Cassis, Bandol and Luberon days require organised transport and a generous return buffer.",
      "Trying both deeply on a short call creates unnecessary stress.",
    ],
    comparisonTable: [
      { category: "Headline", optionA: "Harbour, market and Old Town", optionB: "Cassis, Bandol or Luberon villages" },
      { category: "From port", optionA: "Often walkable", optionB: "Road transfer required" },
      { category: "Atmosphere", optionA: "Working naval port, lived-in Provençal city", optionB: "Fishing harbours, cliffs, vineyards and hilltops" },
      { category: "Best for", optionA: "First-time Toulon", optionB: "Coastal drama and wine country" },
    ],
    faqs: [
      {
        question: "Can I do both on one cruise day?",
        answer:
          "A light city morning plus a short organised outing is possible on a long call. On shorter calls, choose Toulon or Provence — not both deeply.",
      },
      {
        question: "Is Cassis worth missing Toulon time?",
        answer:
          "Only if coastal Provence is your priority. Toulon’s harbour and market are genuinely rewarding — skipping them entirely is a deliberate choice, not a default.",
      },
    ],
    relatedSlugs: ["tour-or-independent", "first-time-toulon-day", "best-shore-excursions"],
    imageKey: "private",
  },
  {
    slug: "best-shore-excursions",
    title: "Best Shore Excursions",
    seoTitle: "Best Toulon Shore Excursions for Cruise Passengers",
    metaDescription:
      "Best Toulon shore excursions compared: Cassis and Calanques, Provence wine tasting, Bandol country, Luberon villages and Toulon food experiences.",
    kind: "guide",
    summary:
      "Start with Discover Cassis, Calanques & Provence Wine Tasting for first-timers who want Provence beyond the city. Choose food tours for city depth, Bandol or Luberon for longer calls, and stay in Toulon on shorter ones.",
    verdict:
      "Editor’s Choice remains the clearest first-time pick beyond the harbour. Match everything else to hours ashore and appetite for walking versus road time.",
    overview: [
      "City experiences stay close to the ship and protect timing.",
      "Coastal and inland Provence days need honest clock management.",
    ],
    guideItems: [
      {
        name: "Discover Cassis, Calanques & Provence Wine Tasting",
        slug: "discover-cassis-calanques-provence-wine-tasting",
        href: "/shore-excursions/discover-cassis-calanques-provence-wine-tasting",
        reason: "Editor’s Choice — coastal villages, Calanques drama and wine in one balanced day.",
        topExcursion: "Discover Cassis, Calanques & Provence Wine Tasting",
        returnConfidence: "High with cruise-timed transport",
        walkingDifficulty: "Moderate",
      },
      {
        name: "Best of Toulon's Traditional Cuisine & Street Food",
        slug: "toulon-traditional-cuisine-street-food",
        href: "/shore-excursions/toulon-traditional-cuisine-street-food",
        reason: "Provençal flavours close to the ship without a long transfer.",
        topExcursion: "Best of Toulon's Traditional Cuisine & Street Food",
        returnConfidence: "Very high",
        walkingDifficulty: "Relaxed–moderate",
      },
      {
        name: "Charming Villages of the Luberon Valley",
        slug: "charming-villages-luberon-valley",
        href: "/shore-excursions/charming-villages-luberon-valley",
        reason: "Hilltop Provençal character when your call is long enough.",
        topExcursion: "Charming Villages of the Luberon Valley",
        returnConfidence: "Good with generous buffer",
        walkingDifficulty: "Moderate",
      },
    ],
    faqs: [
      {
        question: "What is Editor's Choice?",
        answer:
          "Discover Cassis, Calanques & Provence Wine Tasting — selected for first-time cruise visitors who want Provence beyond Toulon with a composed return to the ship.",
      },
    ],
    relatedSlugs: ["first-time-toulon-day", "tour-or-independent", "city-or-provence"],
    imageKey: "historic",
  },
  {
    slug: "first-time-toulon-day",
    title: "First-Time Toulon Day",
    seoTitle: "First Time in Toulon on a Cruise — How to Spend the Day",
    metaDescription:
      "First-time Toulon cruise day plan: harbour, Old Town and markets — plus when to stay independent versus book Provence beyond the city.",
    kind: "guide",
    summary:
      "First-timers should anchor the day in the historic harbour, Cours Lafayette market and Old Town lanes. Add Mont Faron or Cassis only when hours remain.",
    verdict:
      "Do not try to see all of Provence. See Toulon well — then decide if a future call deserves Cassis, Bandol or the Luberon.",
    overview: [
      "Walk or take a short taxi from the terminals toward the Vieille Darse and Old Town.",
      "Use Place de la Liberté and Cours Lafayette for orientation, then drift toward harbour cafés.",
      "Consider Editor’s Choice if Provence beyond the city is your priority on a long call.",
    ],
    guideItems: [
      {
        name: "Old Town",
        slug: "old-town",
        href: "/guides/old-town-guide",
        reason: "The essential first Toulon experience — Provençal lanes beside the harbour.",
        topExcursion: "Best of Toulon's Traditional Cuisine & Street Food",
        returnConfidence: "Very high on foot with buffer",
        walkingDifficulty: "Moderate",
      },
      {
        name: "Historic Harbour",
        slug: "historic-harbour",
        href: "/guides/historic-harbour",
        reason: "Naval heritage, waterfront light and the city’s natural orientation point.",
        topExcursion: "Walk It Yourself",
        returnConfidence: "Very high",
        walkingDifficulty: "Easy–moderate",
      },
      {
        name: "Independent plan",
        slug: "explore-independently",
        href: "/guides/explore-independently",
        reason: "Walk It Yourself routes when you prefer flexibility.",
        topExcursion: "Best of Toulon's Traditional Cuisine & Street Food",
        returnConfidence: "Your discipline",
        walkingDifficulty: "Self-paced",
      },
    ],
    faqs: [
      {
        question: "Should first-timers book a tour?",
        answer:
          "Optional for the city. Book for culinary context or Provence beyond Toulon; explore independently if you prefer market browsing and flexible harbour time.",
      },
    ],
    relatedSlugs: ["best-shore-excursions", "tour-or-independent", "city-or-provence"],
    imageKey: "historic",
  },
];

export function getComparisonBySlug(slug: string): Comparison | undefined {
  return comparisons.find((c) => c.slug === slug);
}

export function getComparisonDisplayTitle(c: Comparison): string {
  if (c.kind === "versus" && c.optionA && c.optionB) {
    return `${c.optionA} or ${c.optionB}?`;
  }
  return c.title;
}

export function getAllComparisonSlugs(): string[] {
  return comparisons.map((c) => c.slug);
}
