import type { FAQ } from "./types";
import { getHomepageFaqs } from "./homepage";

export const extraFaqs: FAQ[] = [
  {
    question: "Can I explore Toulon without an excursion?",
    answer:
      "Yes. If you enjoy relaxed French cities, cafés, markets and local life, Toulon is excellent to explore independently. Many visitors walk from the cruise port into the historic harbour and Old Town.",
  },
  {
    question: "How far is the Old Town from the cruise port?",
    answer:
      "Often around 10–20 minutes on foot from the passenger terminal area, depending on berth, pace and route.",
  },
  {
    question: "Should I book a tour?",
    answer:
      "Book when you want Provence beyond the city — Cassis, Calanques, Bandol wine country or inland villages. Stay independent when you prefer self-paced harbour wandering, markets and café time in Toulon itself.",
  },
  {
    question: "What is your Editor's Choice?",
    answer:
      "Discover Cassis, Calanques & Provence Wine Tasting — the strongest overall cruise day beyond Toulon, combining coastal village charm, dramatic scenery and a Provence wine tasting.",
  },
  {
    question: "Is Toulon better than staying for Cannes or Saint-Tropez glamour?",
    answer:
      "Different. Toulon offers a more authentic Provençal and maritime atmosphere. If you want Riviera resort glamour, private Riviera circuits exist — but Toulon’s own character is the reason many guests leave happily surprised.",
  },
  {
    question: "Can I visit Mont Faron on a cruise day?",
    answer:
      "Yes as an optional addition to a city day via the cable car when queues and timing allow. Do not cut your return buffer for one more panorama.",
  },
  {
    question: "How much free time should I allow before all-aboard?",
    answer:
      "Protect 60–90 minutes after sightseeing for a city day. Longer Cassis, Bandol or Luberon days need the larger end of that buffer.",
  },
  {
    question: "What currency is used?",
    answer:
      "France uses the euro (EUR). We do not convert or publish placeholder prices; live booking opens once selling prices are verified.",
  },
];

export function getAllFaqs(): FAQ[] {
  const seen = new Set<string>();
  const merged: FAQ[] = [];
  for (const faq of [...getHomepageFaqs(), ...extraFaqs]) {
    if (seen.has(faq.question)) continue;
    seen.add(faq.question);
    merged.push(faq);
  }
  return merged;
}
