import type { FAQ } from "./types";

export interface Terminal {
  name: string;
  quay: string;
  usedBy: string;
  cityAccess: string;
}

export interface PortGuideSection {
  heading: string;
  paragraphs: string[];
}

export const portGuideContent = {
  title: "Toulon Cruise Port Guide",
  subtitle:
    "Terminal access, walking times to the historic harbour and Old Town, Mont Faron, markets, transport toward Cassis and Bandol, and sensible return-to-ship planning.",
  terminals: [
    {
      name: "Toulon passenger terminals",
      quay: "Cruise berths along Toulon’s Mediterranean passenger waterfront",
      usedBy: "Most cruise ships calling at Toulon on Western Mediterranean itineraries",
      cityAccess:
        "Often around 10–20 minutes on foot to the historic harbour and Old Town edge depending on berth and pace; shuttles and taxis available when assigned",
    },
    {
      name: "Alternative harbour positions",
      quay: "Occasional alternative berths within the wider port complex",
      usedBy: "Selected calls when specific berths are assigned",
      cityAccess:
        "Walking times vary — follow terminal signage and allow a conservative buffer",
    },
  ] as Terminal[],
  sections: [
    {
      heading: "Where cruise ships dock in Toulon",
      paragraphs: [
        "Cruise ships use Toulon’s passenger terminal area on the Mediterranean waterfront. Unlike Riviera ports that exist only for glamour, Toulon is a living naval city — authentic Provence by the sea, with markets, cafés and a historic harbour within realistic reach of many berths.",
        "Check the ship’s daily programme and terminal signage on arrival. Shuttle arrangements vary by line and berth; many guests walk toward the Vieille Darse and Old Town.",
        "Toulon is an excellent base for an independent city day. Cassis, Bandol, Luberon and Marseille are separate journeys requiring road time and different timing.",
      ],
    },
    {
      heading: "Walking from the port",
      paragraphs: [
        "From the main passenger terminals, follow signs toward the centre and historic harbour rather than wandering the working port.",
        "Allow roughly 10–20 minutes to reach the harbour edge in normal conditions. Routes include waterfront promenades before Old Town lanes begin; Mont Faron is a separate ascent by cable car or road.",
        "If mobility, weather or luggage are factors, take a short taxi instead of proving a point.",
      ],
    },
    {
      heading: "Historic harbour and Old Town",
      paragraphs: [
        "The historic harbour (Vieille Darse) is Toulon’s maritime heart — naval heritage, colourful façades and waterfront cafés.",
        "Old Town lanes lead toward Cours Lafayette market and Place de la Liberté. Rue des Arts adds a quieter creative corridor.",
        "You can explore independently or join a culinary walking experience for curated local flavours.",
      ],
    },
    {
      heading: "Food and Provençal flavour",
      paragraphs: [
        "Cours Lafayette market and waterfront cafés sit inside a walkable historic core — you do not need a long transfer to eat well.",
        "Build lunch into your city loop so you stay oriented toward the ship.",
        "A guided food experience helps if you want curated tastings; otherwise independent café hopping works beautifully.",
      ],
    },
    {
      heading: "Transport beyond the city",
      paragraphs: [
        "Taxis wait at or near the terminal when ships are in port. Show the driver the cruise terminal or your ship name for the return.",
        "Cassis, Bandol, Luberon villages and Marseille need operators who plan backwards from all-aboard — a best-case journey time is not an adequate return plan.",
        "The téléphérique to Mont Faron is an optional scenic addition on a city day when queues and timing allow.",
      ],
    },
    {
      heading: "A realistic independent city day",
      paragraphs: [
        "Start toward the historic harbour before coach groups concentrate on the waterfront.",
        "Wander Old Town lanes, browse Cours Lafayette if the market is open, pause at Place de la Liberté, then choose cafés or an optional Mont Faron cable car.",
        "Keep the final hour ashore oriented toward the terminal so an unexpected queue does not threaten all-aboard.",
      ],
    },
    {
      heading: "Return-to-ship planning",
      paragraphs: [
        "Confirm all-aboard time — earlier than published departure. For a Toulon city day, reach the terminal 60–90 minutes before all-aboard.",
        "For Cassis, Bandol or inland Provence drives, the operator should plan with road traffic contingency.",
        "Independent travellers are responsible for reaching the ship. If a long road trip does not leave a conservative margin, choose the city instead.",
      ],
    },
  ] as PortGuideSection[],
  faqs: [
    {
      question: "Can I walk into Toulon from the cruise terminal?",
      answer:
        "Yes. Many passengers reach the historic harbour and Old Town within roughly 10–20 minutes on foot from the main passenger terminal area.",
    },
    {
      question: "What can I see close to Toulon port?",
      answer:
        "The historic harbour, Old Town lanes, Cours Lafayette market, Place de la Liberté, naval heritage and waterfront cafés are all within a compact walking area for most guests.",
    },
    {
      question: "Do I need transport for Toulon itself?",
      answer:
        "Usually not. The city core is walkable from many berths, though Mont Faron typically needs the cable car or a road transfer.",
    },
    {
      question: "Is Cassis an easy independent trip from the port?",
      answer:
        "Possible on a long call with confident planning, but road time and return risk make an organised excursion the more realistic approach for most cruise passengers.",
    },
    {
      question: "How early should I be back?",
      answer:
        "Reach the terminal 60–90 minutes before all-aboard for a city day, with a larger road contingency for Cassis, Bandol or inland Provence.",
    },
  ] as FAQ[],
};

export const terminals = portGuideContent.terminals;
export const portGuideSections = portGuideContent.sections;
export const portGuideFaqs = portGuideContent.faqs;
