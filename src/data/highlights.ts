import type { AttractionPage } from "./types";

export const highlights: AttractionPage[] = [
  {
    slug: "historic-harbour",
    title: "Historic Harbour",
    seoTitle: "Toulon Historic Harbour from the Cruise Port",
    metaDescription:
      "Visit Toulon’s Vieille Darse and historic harbour from the cruise port — naval heritage, waterfront cafés and how long you need ashore.",
    attractionName: "Toulon Historic Harbour",
    tagline: "A working Mediterranean naval port where Provençal harbour life begins a short walk from the ship.",
    overview:
      "Toulon’s historic harbour is the natural heart of a cruise call: warships and yachts share the Vieille Darse, waterfront promenades frame the Old Town, and the city’s naval character explains why Toulon feels authentic rather than resort-performed.",
    body: [
      "The Vieille Darse anchors orientation — follow the water’s edge toward Old Town lanes and Place de la Liberté.",
      "Many cruise guests reach the harbour on foot from the passenger terminals within roughly 10–20 minutes.",
      "Morning light on the water is calmer than mid-afternoon coach peaks; harbour cafés suit an unhurried pause.",
      "A guided food tour adds Provençal context; independent strolling along the quays is equally valid.",
    ],
    distanceFromPort: "Walkable from most passenger berths",
    travelTime: "Often 10–20 minutes on foot",
    timeNeeded: "1–3 hours for a harbour loop; longer with Old Town and market time",
    gettingThere: [
      {
        method: "Walk",
        detail: "Follow terminal signage toward the city centre and Vieille Darse rather than cutting through the working port.",
        time: "10–20 min typical",
        cost: "Free",
      },
      {
        method: "Taxi",
        detail: "Short hop if mobility, weather or time pressure matter.",
        time: "5–10 min",
        cost: "Low–moderate",
      },
    ],
    highlights: [
      "Vieille Darse waterfront",
      "Naval heritage and harbour atmosphere",
      "Old Town access from the water’s edge",
      "Harbour cafés and Mediterranean light",
    ],
    tips: [
      "Wear shoes suited to paving stones",
      "Protect a return buffer before all-aboard",
      "Respect working-port areas beyond the passenger zone",
    ],
    faqs: [
      {
        question: "Can I see the harbour without a tour?",
        answer:
          "Yes. Many passengers explore independently. Book a tour when you want culinary narrative or structured pacing.",
      },
    ],
    relatedAttractionSlugs: ["old-town", "place-de-la-liberte", "cours-lafayette-market"],
  },
  {
    slug: "old-town",
    title: "Old Town",
    seoTitle: "Toulon Old Town from the Cruise Port",
    metaDescription:
      "Explore Toulon’s Old Town from the cruise port — Provençal lanes, naval heritage, harbour edge and realistic timing for cruise passengers.",
    attractionName: "Toulon Old Town",
    tagline: "A lived-in Provençal city of harbour light, naval history and unhurried lanes.",
    overview:
      "Toulon’s Old Town spreads inland from the Vieille Darse — local shops, squares and Provençal streets that reward walking rather than checklist sightseeing.",
    body: [
      "The Old Town connects naturally to the historic harbour and Cours Lafayette market.",
      "Naval heritage runs through the city; the harbour context explains Toulon’s character better than any single monument.",
      "You can explore independently or join a guided culinary experience for deeper local context.",
    ],
    distanceFromPort: "Walkable from most passenger berths via the harbour",
    travelTime: "Often 10–25 minutes on foot depending on route",
    timeNeeded: "2–4 hours for highlights; a full day for market, Mont Faron and café time",
    gettingThere: [
      {
        method: "Walk via harbour",
        detail: "Enter from the Vieille Darse and follow lanes toward Place de la Liberté and Cours Lafayette.",
        time: "10–25 min",
        cost: "Free",
      },
      {
        method: "Taxi",
        detail: "Useful for limited mobility or when heat makes walking uncomfortable.",
        time: "5–10 min",
        cost: "Low–moderate",
      },
    ],
    highlights: [
      "Provençal Old Town lanes",
      "Historic harbour atmosphere",
      "Naval heritage context",
      "Walkable from the cruise port",
    ],
    tips: [
      "Visit Cours Lafayette market in the morning for the fullest stall selection",
      "Paving stones are uneven — choose footwear carefully",
    ],
    faqs: [
      {
        question: "Can I see the Old Town without a tour?",
        answer:
          "Yes. Many passengers explore independently. Book a food tour when you want curated tastings and local commentary.",
      },
    ],
    relatedAttractionSlugs: ["historic-harbour", "cours-lafayette-market", "mont-faron"],
    relatedExcursionSlug: "toulon-traditional-cuisine-street-food",
  },
  {
    slug: "cours-lafayette-market",
    title: "Cours Lafayette Market",
    seoTitle: "Cours Lafayette Market Toulon — Cruise Day Guide",
    metaDescription:
      "Toulon’s Cours Lafayette market for cruise visitors — Provençal produce, street-food energy and morning timing tips. Practical cruise-day advice.",
    attractionName: "Cours Lafayette Market",
    tagline: "The Provençal market pulse — olives, herbs, seasonal produce and local street-food energy.",
    overview:
      "Cours Lafayette is Toulon’s essential market street. Morning stalls deliver the fullest selection of Mediterranean produce, cheeses, olives and seasonal specialities before the day heats up.",
    body: [
      "Arrive in the morning for the best stall selection and liveliest atmosphere.",
      "The market sits within easy walking distance of the harbour and Old Town — a natural anchor for an independent day.",
      "Pair browsing with a guided food experience when you want commentary rather than choosing alone.",
    ],
    distanceFromPort: "Inside the Old Town walk from the port",
    travelTime: "Included in harbour and Old Town walk",
    timeNeeded: "45–90 minutes, or longer with tastings and lunch nearby",
    gettingThere: [
      {
        method: "Walk via Old Town",
        detail: "Reach Cours Lafayette from the Vieille Darse or Place de la Liberté approaches.",
        time: "Part of Old Town stroll",
        cost: "Free",
      },
    ],
    highlights: [
      "Seasonal Provençal produce",
      "Olives, herbs and Mediterranean specialities",
      "Morning market atmosphere",
      "Natural link to food tours",
    ],
    tips: ["Visit before midday for the fullest selection", "Carry small notes for stall purchases"],
    faqs: [
      {
        question: "Is the market worth lingering?",
        answer:
          "Yes as a morning anchor — then explore harbour cafés, Old Town lanes or Mont Faron for depth.",
      },
    ],
    relatedAttractionSlugs: ["old-town", "historic-harbour", "place-de-la-liberte"],
    relatedExcursionSlug: "toulon-traditional-cuisine-street-food",
  },
  {
    slug: "mont-faron",
    title: "Mont Faron",
    seoTitle: "Mont Faron Toulon — Viewpoints for Cruise Guests",
    metaDescription:
      "Visit Mont Faron from Toulon cruise port: cable-car panoramas, walking tips, timing advice and how to include the city’s best viewpoint on a port day.",
    attractionName: "Mont Faron",
    tagline: "The ridge above Toulon — cable-car panoramas and the classic harbour overview.",
    overview:
      "Mont Faron crowns Toulon. The téléphérique delivers one of the Riviera’s most rewarding city panoramas — harbour, naval base and sea in a single sweep — when your hours ashore and the operating schedule allow.",
    body: [
      "The cable car ascends from near the city centre; allow time for the ride, viewpoints and descent.",
      "Treat Mont Faron as optional enrichment on an independent city day, not a requirement — the harbour loop alone is complete.",
      "Pair the summit with Old Town and market time rather than rushing both as a checklist.",
    ],
    distanceFromPort: "Short urban transfer or walk from Old Town",
    travelTime: "Additional 20–40 minutes from harbour depending on route",
    timeNeeded: "1.5–2.5 hours including cable car and viewpoints",
    gettingThere: [
      {
        method: "Walk or taxi to téléphérique",
        detail: "Reach the cable-car base from the Old Town area; confirm operating hours on arrival.",
        time: "20–40 min from harbour",
        cost: "Cable-car fare applies",
      },
    ],
    highlights: [
      "Classic Toulon panorama",
      "Cable-car ascent",
      "Mediterranean and harbour views",
      "Strong photography light",
    ],
    tips: [
      "Check téléphérique hours on arrival — schedules vary seasonally",
      "Allow time for queues when several ships are in port",
      "Carry a light layer — breezes are stronger at the summit",
    ],
    faqs: [
      {
        question: "Is Mont Faron realistic on a cruise day?",
        answer:
          "Yes on a call of five or more usable hours, when the cable car is running and you protect a generous return buffer. Skip it on short calls.",
      },
    ],
    relatedAttractionSlugs: ["historic-harbour", "old-town"],
  },
  {
    slug: "place-de-la-liberte",
    title: "Place de la Liberté",
    seoTitle: "Place de la Liberté Toulon — Cruise Visitor Guide",
    metaDescription:
      "Place de la Liberté for Toulon cruise passengers — grand boulevard orientation, fountain setting and links to market and Old Town. Practical timing advice.",
    attractionName: "Place de la Liberté",
    tagline: "Toulon’s grand civic square — orientation point between harbour, market and Old Town lanes.",
    overview:
      "Place de la Liberté is Toulon’s natural navigation anchor: wide boulevards, the fountain setting and connections toward Cours Lafayette and the historic harbour.",
    body: [
      "Use the square as a meeting point and orientation landmark between harbour and market browsing.",
      "It can be busy at peak hours — morning market runs feel calmer before coach groups concentrate.",
      "Combine with Cours Lafayette and harbour cafés for a coherent independent loop.",
    ],
    distanceFromPort: "Walkable via harbour and Old Town",
    travelTime: "Included in city walk — often 15–25 minutes from terminal",
    timeNeeded: "20–45 minutes, or longer as part of a wider city loop",
    gettingThere: [
      {
        method: "Walk from harbour",
        detail: "Follow lanes inland from the Vieille Darse toward the square and Cours Lafayette.",
        time: "Part of Old Town stroll",
        cost: "Free",
      },
    ],
    highlights: [
      "Grand boulevard setting",
      "Fountain and civic architecture",
      "Orientation between harbour and market",
      "Easy meeting point",
    ],
    tips: ["Keep valuables secure in crowded moments"],
    faqs: [
      {
        question: "Is Place de la Liberté worth a stop?",
        answer:
          "Yes as an orientation point — then explore Cours Lafayette market and harbour cafés for depth.",
      },
    ],
    relatedAttractionSlugs: ["cours-lafayette-market", "old-town", "historic-harbour"],
  },
  {
    slug: "cassis",
    title: "Cassis",
    seoTitle: "Cassis from Toulon Cruise Port — Shore Excursion Guide",
    metaDescription:
      "Plan Cassis from Toulon with road times, harbour walking, Calanques scenery, excursion options and ship-return planning.",
    attractionName: "Cassis",
    tagline: "One of the Mediterranean’s most photogenic fishing harbours — coastal drama within a cruise-timed day.",
    overview:
      "Cassis sits east of Toulon along the Var coast, reached by roads that reward organised transport. The harbour village, Calanques coastline and Cap Canaille viewpoints deliver Provence beyond the city at its most memorable.",
    body: [
      "The harbour square, pastel façades and village lanes deliver iconic coastal Provence.",
      "Road time from Toulon typically runs 30–45 minutes each way — organised excursions handle parking and return timing better than most independent attempts.",
      "Editor’s Choice combines Cassis, Calanques scenery and a Côte de Provence tasting in one balanced shore day.",
      "Treat Cassis as a deliberate anchor — not an add-on after a full Toulon city morning on a short call.",
    ],
    distanceFromPort: "Roughly 25–35 km from Toulon cruise port by road",
    travelTime: "Usually 30–45 minutes each way, traffic dependent",
    timeNeeded: "Allow 2–3 hours in Cassis, plus transfers",
    gettingThere: [
      {
        method: "Organised shore excursion",
        detail: "The most reliable option — handles routing, timing and return to Toulon.",
        time: "Half to full day",
        cost: "Tour price in EUR",
      },
      {
        method: "Private driver",
        detail: "Flexible but still subject to coastal traffic and village parking limits.",
        time: "Half to full day",
        cost: "Premium",
      },
    ],
    highlights: [
      "Fishing-harbour village atmosphere",
      "Calanques coastal scenery",
      "Cap Canaille viewpoints",
      "Optional boat perspective where conditions allow",
      "Cruise-first return planning",
    ],
    tips: [
      "Book ahead in summer — coastal days fill quickly",
      "Wear secure footwear for village lanes and viewpoint paths",
      "Confirm boat options and free time versus drive-only stops",
    ],
    faqs: [
      {
        question: "Is Cassis worth it from Toulon?",
        answer:
          "On a call with enough usable hours, yes for passengers who want coastal Provence beyond the harbour. See our city-or-Provence comparison for candid trade-offs.",
      },
      {
        question: "Can Cassis and Toulon combine on one day?",
        answer:
          "A light city morning plus Cassis is possible on a long call. On shorter calls, choose one anchor.",
      },
    ],
    relatedAttractionSlugs: ["bandol", "historic-harbour"],
    relatedExcursionSlug: "discover-cassis-calanques-provence-wine-tasting",
  },
  {
    slug: "bandol",
    title: "Bandol",
    seoTitle: "Bandol from Toulon Cruise Port — Wine Country Guide",
    metaDescription:
      "Plan Bandol from Toulon — vineyard landscapes, fishing harbour charm, road times and cruise-day excursion advice for Provence wine country.",
    attractionName: "Bandol",
    tagline: "Provençal wine country meets Mediterranean harbour — vineyards, rosé and coastal village calm.",
    overview:
      "Bandol offers a different Provence rhythm from Cassis: terraced vineyards, rosé heritage and a quieter fishing harbour. Excursions from Toulon often combine coastal scenery with wine-country stops at a private or small-group pace.",
    body: [
      "Bandol’s vineyards and harbour suit guests who want wine country without the Luberon’s longest inland transfer.",
      "Road time from Toulon is typically 30–45 minutes each way — plan for a half-day minimum once transfers are included.",
      "Private formats adapt pacing for tasting stops and harbour free time within port-hour limits.",
    ],
    distanceFromPort: "Roughly 20–30 km from Toulon cruise port by road",
    travelTime: "Usually 30–45 minutes each way, traffic dependent",
    timeNeeded: "Allow 2–3 hours in Bandol country, plus transfers",
    gettingThere: [
      {
        method: "Private Bandol Country excursion",
        detail: "Curated vineyard and harbour routing with cruise-timed return from Toulon.",
        time: "Half to full day",
        cost: "Tour price in EUR",
      },
      {
        method: "Private driver",
        detail: "Tailored stops for one party within port-hour limits.",
        time: "Half to full day",
        cost: "Premium",
      },
    ],
    highlights: [
      "Bandol rosé and vineyard landscapes",
      "Fishing harbour character",
      "Quieter pace than headline Riviera ports",
      "Wine tasting woven into coastal scenery",
    ],
    tips: [
      "Confirm tasting inclusions before booking",
      "Protect your return buffer on wine-country days",
      "Compare with Cassis if coastal drama matters more than vineyards",
    ],
    faqs: [
      {
        question: "Bandol or Cassis for a first Provence day?",
        answer:
          "Cassis for harbour drama and Calanques scenery; Bandol for wine-country character and a gentler harbour rhythm. Editor’s Choice Cassis day suits most first-timers.",
      },
      {
        question: "Can I visit Bandol independently?",
        answer:
          "Possible on a long call with confident transport planning, but organised excursions handle timing and tastings more reliably for cruise passengers.",
      },
    ],
    relatedAttractionSlugs: ["cassis", "historic-harbour"],
    relatedExcursionSlug: "discover-cassis-calanques-provence-wine-tasting",
  },
];

export function getHighlightBySlug(slug: string): AttractionPage | undefined {
  return highlights.find((h) => h.slug === slug);
}

export function getAllHighlightSlugs(): string[] {
  return highlights.map((h) => h.slug);
}
