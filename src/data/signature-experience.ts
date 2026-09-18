import type { FAQ } from "./types";

export const SIGNATURE_EXPERIENCE_PATH = "/signature-riviera-experience";

export interface SignatureBenefit {
  emoji: string;
  title: string;
  description: string;
}

export const signatureToulonExperience = {
  slug: "signature-riviera-experience",
  title: "Signature Provençal Toulon Discovery",
  seoTitle: "Signature Provençal Toulon Discovery — Future Private Day",
  metaDescription:
    "Preview a future small-group Toulon shore experience — maximum eight guests, historic harbour, markets and flexible Provence discovery. Not currently bookable.",
  tagline:
    "A future small-group journey through authentic Toulon and nearby Provence — designed around your ship, not a generic day tour.",
  overview:
    "Signature Provençal Toulon Discovery is a product concept in preparation. The proposed experience would take no more than eight guests from Toulon through the historic harbour and Old Town in a carefully paced format, with optional Mont Faron or coastal time, a local lunch and enough flexibility to respond to the group, weather and port timings. It does not currently exist as a bookable excursion.",
  comingSoon: true,
  benefits: [
    {
      emoji: "👥",
      title: "Maximum 8 guests",
      description: "A proposed small-group format intended to avoid coach-tour delays and support personal attention.",
    },
    {
      emoji: "⚓",
      title: "Authentic Toulon focus",
      description: "Historic harbour, naval heritage and Provençal markets at the heart of the concept.",
    },
    {
      emoji: "📸",
      title: "Photography stops",
      description: "Time for Mediterranean light and harbour colour rather than images through a coach window.",
    },
    {
      emoji: "🍽️",
      title: "Local lunch",
      description: "A relaxed Provençal lunch proposed as part of the experience, subject to final partner arrangements.",
    },
    {
      emoji: "🧭",
      title: "Flexible itinerary",
      description: "Room to adjust for weather, crowds and the interests of a small group.",
    },
    {
      emoji: "🚢",
      title: "Ship-first timing",
      description: "Planned backwards from all-aboard with a conservative Toulon return buffer.",
    },
  ] as SignatureBenefit[],
  faqs: [
    {
      question: "Can I book Signature Provençal Toulon Discovery now?",
      answer:
        "No. It is a future concept in preparation and is not bookable. Explore current Toulon shore excursions or enquire for updates.",
    },
    {
      question: "How is this different from Editor's Choice?",
      answer:
        "Editor’s Choice is our current recommended day beyond Toulon — Cassis, Calanques and Provence wine tasting. Signature is a future small-group flagship concept with a stricter guest limit and more flexible pacing.",
    },
  ] as FAQ[],
};

export function getSignatureEditorialRecommendation() {
  return {
    title: signatureToulonExperience.title,
    description: signatureToulonExperience.tagline,
    href: SIGNATURE_EXPERIENCE_PATH,
  };
}

/** @deprecated Compatibility alias for shared components */
export const signatureRivieraExperience = signatureToulonExperience;
