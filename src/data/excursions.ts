import type { ExcursionPage } from "./types";

const PORT_LOGISTICS =
  "Cruise ships berth at Toulon’s passenger terminals on the Mediterranean waterfront. The historic harbour and Old Town are typically a short walk or brief shuttle from the exit — often around 10–20 minutes depending on berth, pace and route. Follow terminal signage toward the centre rather than wandering the working port. For Cassis, Bandol, Luberon or Marseille days, confirm meeting instructions and plan from your ship’s all-aboard time, not merely the published departure. Aim to be back at the terminal 60–90 minutes early; longer Provence days need the larger end of that buffer.";

const SEG_SUPPLIER = {
  kind: "shore-excursions-group" as const,
  name: "Shore Excursions Group",
  notes: "Partner network — confirm availability for your sailing",
};

const RETURN_GUARANTEE =
  "Return to ship guarantee: itineraries are planned around your Toulon cruise call so you are back at the terminal with time before all-aboard. If an operational delay on our side causes you to miss the ship, we work with the local provider under the published return-to-ship assurance for that booking.";

export const excursions: ExcursionPage[] = [
  {
    slug: "discover-cassis-calanques-provence-wine-tasting",
    title: "Discover Cassis, Calanques & Provence Wine Tasting",
    seoTitle: "Cassis, Calanques & Provence Wine Tasting from Toulon | Editor's Choice",
    metaDescription:
      "Editor's Choice Toulon shore excursion to Cassis, the Calanques and Provence wine tasting — coastal scenery, village charm and cruise-timed return.",
    category: "Editor's Choice",
    tagline:
      "The strongest overall cruise day beyond Toulon — Cassis harbour light, Calanques drama and Provence wine in one carefully paced outing.",
    duration: "Approximately 6 hours",
    pace: "Moderate",
    bestFor:
      "Cruise visitors who want Provence beyond the city — coastal villages, dramatic cliffs and a wine tasting — without choosing between sea and vineyard",
    overview:
      "Unlike the polished glamour of Cannes or Saint-Tropez, Toulon’s gift is access: authentic Provence within a realistic cruise window. This Editor’s Choice day combines Cassis, the Calanques coastline and a Côte de Provence tasting — nature, village atmosphere and flavour in one balanced shore excursion.",
    body: [
      "We chose this excursion because it represents the best overall cruise experience from Toulon: Cassis remains one of the Mediterranean’s most photogenic fishing harbours, the Calanques deliver unforgettable coastal drama, and a Provence wine stop adds the region’s signature flavour without turning the day into a cellar marathon.",
      "It particularly suits guests who want Provence beyond the city rather than another harbour stroll — while still protecting a composed return to the ship.",
      "Guests who prefer markets, naval heritage and café life inside Toulon may be happier walking independently — and that is an equally good choice from this port.",
      "Expect scenic driving, moderate walking at village and viewpoint stops, and optional boat time where available. Exact sequencing flexes with traffic, weather and ship timing.",
    ],
    highlights: [
      "Cassis harbour and Provençal village atmosphere",
      "Calanques coastal scenery and Cap Canaille viewpoints",
      "Côte de Provence wine tasting",
      "Optional boat perspective on the cliffs where conditions allow",
      "Cruise-timed meeting and return from Toulon",
    ],
    itinerary: [
      {
        title: "Meet at Toulon cruise port",
        detail:
          "Join your guide near the passenger terminal and confirm timing against your all-aboard.",
      },
      {
        title: "Coastal transfer toward Cassis",
        detail:
          "Drive along the Mediterranean approaches toward Cassis, with commentary on Provence and the Var coast.",
      },
      {
        title: "Cassis & Calanques",
        detail:
          "Explore the harbour village, coastal viewpoints and Calanques scenery — with optional boat time where your voucher and conditions allow.",
      },
      {
        title: "Provence wine tasting",
        detail:
          "Pause for a Côte de Provence tasting that brings vineyard character into the cruise day without rushing the return.",
      },
      {
        title: "Return to Toulon",
        detail:
          "Drive back to the cruise port with a deliberate buffer before all-aboard.",
      },
    ],
    included: [
      "Port meeting and return planning in Toulon",
      "Air-conditioned transport",
      "English-speaking guide commentary",
      "Cassis and Calanques orientation",
      "Included wine tasting as stated on your voucher",
      "Return planned around the ship’s all-aboard",
    ],
    notIncluded: [
      "Optional boat tickets unless stated on your voucher",
      "Lunch and personal purchases beyond included tasting",
      "Gratuities",
      "Hotel or airport transfers",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Wear comfortable shoes — village lanes and viewpoint paths",
      "Bring a light layer; coastal viewpoints can be breezy",
      "If you prefer Toulon’s markets and harbour cafés only, consider Walk It Yourself instead",
      RETURN_GUARANTEE,
    ],
    faqs: [
      {
        question: "Why is this Editor's Choice?",
        answer:
          "It delivers the strongest overall cruise day beyond Toulon: Cassis village charm, Calanques scenery and Provence wine tasting — variety, atmosphere and timing that suit a Mediterranean port call.",
      },
      {
        question: "Do I need this tour, or can I stay in Toulon?",
        answer:
          "You can stay in Toulon and have an excellent independent day. Choose this tour when you want Provence beyond the city — coastal villages and wine country that are harder to stitch together alone in limited hours.",
      },
      {
        question: "Is there a boat ride into the Calanques?",
        answer:
          "Boat options depend on season, sea conditions and your voucher. Coastal viewpoints remain rewarding even when boats are limited.",
      },
    ],
    relatedExcursionSlugs: [
      "private-bandol-country",
      "charming-villages-luberon-valley",
      "private-provence-le-castellet-cassis-marseille",
    ],
    featured: true,
    bookingStatus: "comingSoon",
    returnGuarantee: RETURN_GUARANTEE,
    walkingLevel: "Moderate — village lanes and viewpoint walks",
    cruiseSuitability: "Best with a solid half day or fuller usable time ashore",
    editorChoice: true,
    whyWeChose: {
      lead: "From Toulon, the Mediterranean offers Cassis harbour light, Calanques cliffs and Provence wine within one well-timed cruise day — the rare combination that feels complete without feeling rushed.",
      whyRecommended:
        "First-time visitors often want more than a city stroll. This experience opens Provence’s coastal and vineyard character while still protecting a composed return to the ship — the cruise-day balance we look for.",
      whoItSuits:
        "Curious travellers, photographers, food-and-wine guests and anyone who wants authentic Provence beyond Toulon’s harbour.",
      whatMakesItSpecial:
        "You leave with village atmosphere, dramatic coastline and a tasting of the region — not only a single viewpoint checklist.",
      cruiseFit:
        "Stays within a realistic road radius of Toulon, which makes protecting a return buffer more practical than distant Riviera marathons.",
      theExperience:
        "You understand why Toulon is one of the Riviera’s most underrated cruise gateways — and you still walk back to the ship with composure.",
    },
    supplier: SEG_SUPPLIER,
  },
  {
    slug: "toulon-traditional-cuisine-street-food",
    title: "Best of Toulon's Traditional Cuisine & Street Food",
    seoTitle: "Toulon Traditional Cuisine & Street Food Shore Excursion",
    metaDescription:
      "Taste Toulon on a cruise-friendly culinary shore excursion — seasonal Provençal flavours, street food and local produce near the harbour.",
    category: "Food & Wine",
    tagline: "A culinary stroll through Toulon’s Provençal flavours — close to the ship.",
    duration: "Approximately 3 hours 30 minutes",
    pace: "Moderate",
    bestFor: "Food-curious guests who want Toulon’s flavours without a long transfer",
    overview:
      "Embrace Toulon’s culinary character on a guided tasting journey through seasonal produce and local street-food favourites — lovingly rooted in Mediterranean and Provençal tradition.",
    body: [
      "You do not need to leave the city to eat well in Toulon. This experience keeps you close to the harbour hinterland while tasting the season’s local produce.",
      "It suits guests who want curated flavours and commentary rather than choosing restaurants alone.",
      "If you prefer vineyards and coastal villages, compare our Cassis and Bandol days instead.",
    ],
    highlights: [
      "Guided culinary introduction to Toulon",
      "Seasonal Provençal and Mediterranean flavours",
      "Street-food and local produce context",
      "Walkable format near the cruise port",
      "Time left for independent harbour wandering",
    ],
    itinerary: [
      {
        title: "Meet near the centre",
        detail: "Join your food guide and outline the tasting route against your all-aboard.",
      },
      {
        title: "Tasting stops",
        detail: "Sample seasonal local flavours with commentary on Provençal produce and street-food culture.",
      },
      {
        title: "Finish near the harbour",
        detail: "End within easy reach of cafés, the Old Town or a return walk toward the terminal.",
      },
    ],
    included: [
      "English-speaking culinary guide",
      "Included tastings and meal elements as stated on your voucher",
      "Central Toulon routing",
    ],
    notIncluded: [
      "Additional food and drinks beyond included tastings",
      "Gratuities",
      "Alcohol for guests under local legal age",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Mention allergies when you enquire or book",
      "Wear comfortable shoes for city walking",
      RETURN_GUARANTEE,
    ],
    faqs: [
      {
        question: "Is this a full meal?",
        answer:
          "It is a culinary tasting experience with substantial samples rather than a formal restaurant reservation. Hungry guests may still want a café pause afterwards.",
      },
    ],
    relatedExcursionSlugs: [
      "discover-cassis-calanques-provence-wine-tasting",
      "private-bandol-country",
    ],
    featured: true,
    bookingStatus: "comingSoon",
    returnGuarantee: RETURN_GUARANTEE,
    walkingLevel: "Moderate — city walking between stops",
    cruiseSuitability: "Excellent on shorter or flexible port calls",
    editorChoice: false,
    supplier: SEG_SUPPLIER,
  },
  {
    slug: "charming-villages-luberon-valley",
    title: "Charming Villages of the Luberon Valley",
    seoTitle: "Luberon Valley Villages Shore Excursion from Toulon",
    metaDescription:
      "Provençal hilltop villages from Toulon — Ménerbes, Lacoste, Gordes and Roussillon ochre landscapes on a cruise-timed day.",
    category: "Coastal Villages",
    tagline: "Hilltop villages, ochre cliffs and the classic inland Provence postcard.",
    duration: "Approximately 6 hours",
    pace: "Relaxed",
    bestFor: "Guests who want inland Provençal villages and landscape rather than a coastal-only day",
    overview:
      "Journey through Provence’s most picturesque hilltop villages — Ménerbes, Lacoste, Gordes and Roussillon — for cobbled lanes, vineyard views, historic abbey country and Roussillon’s striking ochre cliffs.",
    body: [
      "Inland Provence feels different from the harbour: stone villages, vineyard ridges and ochre earth. This day is for guests who want that postcard Provence beyond Toulon’s naval waterfront.",
      "Be honest with the clock — Luberon beauty costs road time. If your call is short, stay in Toulon or choose a nearer coastal option.",
      "Guests focused on Cassis and Calanques scenery may prefer our Editor’s Choice coastal day instead.",
    ],
    highlights: [
      "Ménerbes cobbled streets and hilltop character",
      "Lacoste’s artistic stone village atmosphere",
      "Gordes views and Provençal historic setting",
      "Roussillon ochre cliffs and panoramas",
      "Cruise-timed transport from Toulon",
    ],
    itinerary: [
      {
        title: "Depart Toulon",
        detail: "Meet at the cruise port and drive inland toward the Luberon valley.",
      },
      {
        title: "Hilltop village stops",
        detail: "Visit selected Provençal villages with time for photographs and short walks.",
      },
      {
        title: "Roussillon colour",
        detail: "Experience the ochre landscapes that make Roussillon unforgettable.",
      },
      {
        title: "Return to port",
        detail: "Drive back to Toulon with a conservative buffer before all-aboard.",
      },
    ],
    included: [
      "Round-trip transport from Toulon cruise port",
      "English-speaking guide commentary",
      "Village orientation and tastings as stated on your voucher",
    ],
    notIncluded: [
      "Lunch unless stated on your voucher",
      "Entrance fees unless stated on your voucher",
      "Gratuities",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Only choose this with a solid usable day ashore",
      "Wear comfortable shoes for village lanes",
      RETURN_GUARANTEE,
    ],
    faqs: [
      {
        question: "Is Luberon better than Cassis from Toulon?",
        answer:
          "Different, not better. Cassis and the Calanques emphasise coastline; Luberon emphasises inland hill villages and ochre landscapes. Choose the mood you want.",
      },
    ],
    relatedExcursionSlugs: [
      "discover-cassis-calanques-provence-wine-tasting",
      "private-provence-le-castellet-cassis-marseille",
    ],
    featured: true,
    bookingStatus: "comingSoon",
    returnGuarantee: RETURN_GUARANTEE,
    walkingLevel: "Easy to moderate — village lanes and gentle slopes",
    cruiseSuitability: "Requires a longer usable day ashore",
    editorChoice: false,
    supplier: SEG_SUPPLIER,
  },
  {
    slug: "private-bandol-country",
    title: "Private Bandol Country",
    seoTitle: "Private Bandol Country Shore Excursion from Toulon",
    metaDescription:
      "Private Bandol wine-country day from Toulon — Cassis harbour character, coastal scenery and Bandol vineyards at your own pace.",
    category: "Private",
    tagline: "Bandol vineyards, coastal scenery and Provençal village stops — privately paced.",
    duration: "Approximately 8 hours",
    pace: "Relaxed",
    bestFor: "Parties who want a private, flexible day through Bandol country and coastal Provence",
    overview:
      "A private day through Bandol country blends coastal scenery, historic village character and the internationally celebrated Bandol wine region — shaped around your party rather than a fixed group timetable.",
    body: [
      "Private pacing suits families, friends travelling together and guests who want cellar or viewpoint time without coach-group constraints.",
      "Cassis and Bandol sit within a rewarding radius of Toulon when your hours ashore are generous.",
      "If you prefer a curated small-group coastal day, compare Discover Cassis, Calanques & Provence Wine Tasting.",
    ],
    highlights: [
      "Private vehicle and flexible pacing",
      "Bandol wine-country orientation",
      "Coastal and village scenery as timing allows",
      "Ideal for small parties and mixed interests",
      "Cruise-timed return planning",
    ],
    itinerary: [
      {
        title: "Private meet at port",
        detail: "Meet your driver-guide at Toulon cruise port and confirm priorities for the day.",
      },
      {
        title: "Bandol country & coastal stops",
        detail: "Explore vineyard country, coastal viewpoints and village atmosphere at a private pace.",
      },
      {
        title: "Return to ship",
        detail: "Return to the terminal with a buffer appropriate to your all-aboard.",
      },
    ],
    included: [
      "Private transport from Toulon cruise port",
      "English-speaking driver-guide",
      "Flexible routing within the published day framework",
    ],
    notIncluded: [
      "Lunch and personal purchases",
      "Wine purchases and entrance fees unless stated",
      "Gratuities",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Share interests in advance — wine, villages or coastline — so pacing matches your party",
      "Full-day format needs a long, unhurried call",
      RETURN_GUARANTEE,
    ],
    faqs: [
      {
        question: "Is this suitable for families?",
        answer:
          "Often yes — private pacing helps mixed ages. Confirm child seats and walking expectations when you enquire.",
      },
    ],
    relatedExcursionSlugs: [
      "discover-cassis-calanques-provence-wine-tasting",
      "private-provence-le-castellet-cassis-marseille",
    ],
    featured: true,
    bookingStatus: "comingSoon",
    returnGuarantee: RETURN_GUARANTEE,
    walkingLevel: "Easy — short walks at stops",
    cruiseSuitability: "Best on a full, unhurried port call",
    editorChoice: false,
    supplier: SEG_SUPPLIER,
  },
  {
    slug: "private-half-day-marseille",
    title: "Private Half-Day of Marseille",
    seoTitle: "Private Half-Day Marseille Shore Excursion from Toulon",
    metaDescription:
      "Private half-day Marseille from Toulon cruise port — Vieux Port, Le Panier and Notre-Dame de la Garde with personalised pacing.",
    category: "Private",
    tagline: "Marseille’s Vieux Port and historic neighbourhoods — privately guided from Toulon.",
    duration: "Approximately 5 hours",
    pace: "Relaxed",
    bestFor: "Guests who want Marseille’s highlights with private pacing and a half-day cruise fit",
    overview:
      "This private half-day takes you from Toulon to Marseille — one of France’s oldest cities — for Vieux Port atmosphere, Le Panier character and the iconic Notre-Dame de la Garde viewpoint.",
    body: [
      "Marseille is a different Mediterranean story from Toulon’s naval harbour: denser, brasher and richly historic. A private guide keeps the half-day focused.",
      "Choose this when you want a city contrast rather than coastal villages or wine country.",
      "On short calls, staying in Toulon independently may be the wiser plan.",
    ],
    highlights: [
      "Private guided Marseille highlights",
      "Vieux Port orientation",
      "Le Panier neighbourhood character",
      "Notre-Dame de la Garde viewpoints as timing allows",
      "Half-day format from Toulon",
    ],
    itinerary: [
      {
        title: "Transfer to Marseille",
        detail: "Depart Toulon cruise port for Marseille with commentary en route.",
      },
      {
        title: "Vieux Port & historic quarters",
        detail: "Explore key harbour and neighbourhood highlights with your private guide.",
      },
      {
        title: "Return to Toulon",
        detail: "Drive back with a buffer before all-aboard.",
      },
    ],
    included: [
      "Private transport from Toulon",
      "English-speaking private guide",
      "Marseille highlights orientation",
    ],
    notIncluded: [
      "Lunch and personal purchases",
      "Entrance fees unless stated on your voucher",
      "Gratuities",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Wear comfortable shoes for city walking",
      "Confirm usable hours ashore before choosing Marseille over Toulon itself",
      RETURN_GUARANTEE,
    ],
    faqs: [
      {
        question: "Is Marseille worth it from Toulon on a cruise day?",
        answer:
          "Yes when you want a major city contrast and your call supports the road time. If you prefer relaxed Provençal harbour life, stay in Toulon or choose Cassis.",
      },
    ],
    relatedExcursionSlugs: [
      "private-provence-le-castellet-cassis-marseille",
      "discover-cassis-calanques-provence-wine-tasting",
    ],
    featured: false,
    bookingStatus: "comingSoon",
    returnGuarantee: RETURN_GUARANTEE,
    walkingLevel: "Easy to moderate — city walking at stops",
    cruiseSuitability: "Works on a solid half day or more",
    editorChoice: false,
    supplier: SEG_SUPPLIER,
  },
  {
    slug: "private-hyeres-le-lavandou-saint-tropez",
    title: "Private Hyères, Le Lavandou & Saint-Tropez",
    seoTitle: "Private Hyères, Le Lavandou & Saint-Tropez from Toulon",
    metaDescription:
      "Private French Riviera day from Toulon — Hyères, Le Lavandou and Saint-Tropez seaside resort character with cruise-timed return.",
    category: "Private",
    tagline: "Riviera resort towns east of Toulon — glamour, sea light and private pacing.",
    duration: "Approximately 8 hours",
    pace: "Relaxed",
    bestFor: "Guests who want a Riviera resort circuit with private flexibility on a long call",
    overview:
      "Spend the day on the French Riviera exploring Hyères, Le Lavandou and Saint-Tropez — seaside resort towns that each offer their own taste of the Côte d’Azur.",
    body: [
      "This is the Riviera postcard many guests imagine — and it needs a long, unhurried call. Traffic toward Saint-Tropez can be real in peak season.",
      "Choose this for resort glamour; choose Cassis or Bandol for a more authentic Provençal coastal mood.",
      "Independent Toulon remains the better plan when hours are limited.",
    ],
    highlights: [
      "Private Riviera circuit from Toulon",
      "Hyères and Le Lavandou coastal character",
      "Saint-Tropez atmosphere as timing allows",
      "Flexible stops for your party",
      "Full-day cruise return planning",
    ],
    itinerary: [
      {
        title: "Eastbound along the coast",
        detail: "Depart Toulon for Hyères and the coastal resorts beyond.",
      },
      {
        title: "Resort town highlights",
        detail: "Visit selected towns with free time for photographs, cafés or browsing.",
      },
      {
        title: "Return to Toulon",
        detail: "Return with a generous traffic buffer before all-aboard.",
      },
    ],
    included: [
      "Private transport from Toulon cruise port",
      "English-speaking driver-guide",
      "Flexible Riviera routing within the day framework",
    ],
    notIncluded: [
      "Lunch and personal purchases",
      "Beach club or attraction fees",
      "Gratuities",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Peak-season traffic toward Saint-Tropez requires honest buffers",
      "Do not attempt this on a short call",
      RETURN_GUARANTEE,
    ],
    faqs: [
      {
        question: "Is Saint-Tropez realistic from a Toulon cruise call?",
        answer:
          "On a long call with private transport and a conservative buffer, yes. On a short call, choose Toulon, Cassis or Bandol instead.",
      },
    ],
    relatedExcursionSlugs: [
      "private-bandol-country",
      "discover-cassis-calanques-provence-wine-tasting",
    ],
    featured: false,
    bookingStatus: "comingSoon",
    returnGuarantee: RETURN_GUARANTEE,
    walkingLevel: "Easy — short walks in resort centres",
    cruiseSuitability: "Only with a long, unhurried port call",
    editorChoice: false,
    supplier: SEG_SUPPLIER,
  },
  {
    slug: "private-provence-le-castellet-cassis-marseille",
    title: "Private Provence: Le Castellet, Cassis & Marseille",
    seoTitle: "Private Le Castellet, Cassis & Marseille from Toulon",
    metaDescription:
      "Private Provence play day from Toulon — Le Castellet, Cassis and Marseille for village charm, coastal character and city highlights.",
    category: "Private",
    tagline: "A private Provençal play day — hill village, Cassis coast and Marseille light.",
    duration: "Approximately 8 hours",
    pace: "Relaxed",
    bestFor: "Parties who want village, coast and city variety in one private full day",
    overview:
      "Enjoy a play day in Provence with postcard-perfect stops in Le Castellet, Cassis and Marseille — coastal character, viticultural heritage and splendid Mediterranean scenery.",
    body: [
      "This private circuit stitches three Provençal moods: a hill village, a fishing harbour and a great port city. It rewards guests who want variety more than deep immersion in one place.",
      "Be selective with free time at each stop — three destinations need disciplined pacing.",
      "For a tighter coastal focus, prefer Discover Cassis, Calanques & Provence Wine Tasting.",
    ],
    highlights: [
      "Le Castellet village atmosphere",
      "Cassis coastal character",
      "Marseille highlights as timing allows",
      "Private pacing for your party",
      "Full-day return planning from Toulon",
    ],
    itinerary: [
      {
        title: "Le Castellet",
        detail: "Begin with hill-village lanes and Provençal viewpoints.",
      },
      {
        title: "Cassis",
        detail: "Continue to the harbour for coastal photographs and village atmosphere.",
      },
      {
        title: "Marseille & return",
        detail: "Add Marseille highlights if timing allows, then return to Toulon with a buffer.",
      },
    ],
    included: [
      "Private transport from Toulon",
      "English-speaking driver-guide",
      "Flexible multi-stop routing",
    ],
    notIncluded: [
      "Lunch and personal purchases",
      "Entrance fees unless stated",
      "Gratuities",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Tell your guide which stop matters most — depth beats checklist tourism",
      "Full-day format only",
      RETURN_GUARANTEE,
    ],
    faqs: [
      {
        question: "Can we skip Marseille if we prefer more Cassis time?",
        answer:
          "Private days can flex within the published framework and traffic reality. Share priorities when you enquire.",
      },
    ],
    relatedExcursionSlugs: [
      "discover-cassis-calanques-provence-wine-tasting",
      "private-half-day-marseille",
      "private-bandol-country",
    ],
    featured: true,
    bookingStatus: "comingSoon",
    returnGuarantee: RETURN_GUARANTEE,
    walkingLevel: "Easy — short walks at each stop",
    cruiseSuitability: "Requires a long usable day ashore",
    editorChoice: false,
    supplier: SEG_SUPPLIER,
  },
];

export function getFeaturedExcursions(): ExcursionPage[] {
  return excursions.filter((e) => e.featured);
}

export function getExcursionBySlug(slug: string): ExcursionPage | undefined {
  return excursions.find((e) => e.slug === slug);
}

export function getAllExcursionSlugs(): string[] {
  return excursions.map((e) => e.slug);
}

export function getEditorsChoiceExcursions(): ExcursionPage[] {
  return excursions.filter((e) => e.editorChoice === true);
}
