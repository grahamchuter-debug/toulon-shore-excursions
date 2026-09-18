import toulonSchedule from "./imported-schedules/toulon.json";
import type { ScheduleEntry, ShipSchedulePort } from "./types";
import {
  filterEntriesByMonth,
  filterEntriesByYear,
  getMonthsWithEntries,
  type ScheduleYear,
} from "@/lib/schedule-utils";

/**
 * Schedule framework is ready for Toulon.
 * Do not publish sample or fictitious ship calls as live data.
 * Keep entries empty until confirmed schedules are available.
 */
const SCHEDULE_FAQS = [
  {
    question: "How accurate are Toulon cruise ship schedules?",
    answer: "Schedules are compiled from published cruise timetables and updated periodically. Always confirm arrival, departure and all-aboard times with your cruise line.",
  },
  {
    question: "Where do cruise ships berth in Toulon?",
    answer:
      "Cruise ships use Toulon’s passenger terminal area on the Mediterranean waterfront. Walking time into the historic harbour and Old Town is typically realistic for many guests; follow terminal signage on the day.",
  },
  {
    question: "Is a Toulon call long enough for Cassis?",
    answer:
      "A solid half day or fuller call can support a cruise-timed Cassis and Calanques excursion. Shorter calls are better suited to independent Toulon walking or a nearer city experience.",
  },
];

const SCHEDULE_TIPS = [
  "Confirm all-aboard time rather than relying only on the published departure",
  "Allow a generous buffer when returning from Cassis, Bandol or inland Provence",
  "Keep a lighter Plan B (historic harbour on foot) if your call is shortened",
  "The city centre is close — independent exploration works well on shorter windows",
];

export const schedulePorts: ShipSchedulePort[] = [
  {
    slug: "toulon",
    name: "Toulon",
    country: "France",
    seoTitle: "Toulon Cruise Ship Schedule — Provence & Côte d'Azur Port Calls",
    metaDescription:
      "Toulon cruise ship schedule framework for planning historic harbour days, Cassis, Bandol and Provence shore excursions. Confirmed calls publish when verified.",
    intro:
      "Toulon is authentic Provence by the sea — a walkable historic harbour beside the cruise port, and a gateway to Cassis, Bandol and inland Provence when your hours ashore allow.",
    description:
      "Naval heritage and Provençal markets beside the Mediterranean, with access to coastal villages and vineyard country beyond the city.",
    scheduleOverview:
      "Verified published calls for this planning window. Always confirm arrival, departure and all-aboard times with your cruise line.",
    planningTips: SCHEDULE_TIPS,
    faqs: SCHEDULE_FAQS,
  },
];

const scheduleData: Record<string, ScheduleEntry[]> = {
  toulon: toulonSchedule as ScheduleEntry[],
};

export function getSchedulePortBySlug(slug: string): ShipSchedulePort | undefined {
  return schedulePorts.find((port) => port.slug === slug);
}

export function getAllSchedulePortSlugs(): string[] {
  return schedulePorts.map((port) => port.slug);
}

export function getScheduleEntries(slug: string): ScheduleEntry[] {
  return scheduleData[slug] ?? [];
}

export function getScheduleEntryCount(slug: string): number {
  return getScheduleEntries(slug).length;
}

export function getScheduleEntriesForYear(slug: string, year: ScheduleYear): ScheduleEntry[] {
  return filterEntriesByYear(getScheduleEntries(slug), year);
}

export function getScheduleEntriesForMonth(slug: string, monthKey: string): ScheduleEntry[] {
  return filterEntriesByMonth(getScheduleEntries(slug), monthKey);
}

export function getVerifiedMonthKeys(slug: string): string[] {
  return getMonthsWithEntries(getScheduleEntries(slug));
}

export function searchSchedulesByShip(query: string): { portSlug: string; entries: ScheduleEntry[] }[] {
  const normalised = query.toLowerCase().trim();
  if (!normalised) return [];

  return schedulePorts
    .map((port) => ({
      portSlug: port.slug,
      entries: getScheduleEntries(port.slug).filter(
        (entry) =>
          entry.ship.toLowerCase().includes(normalised) ||
          entry.cruiseLine.toLowerCase().includes(normalised),
      ),
    }))
    .filter((result) => result.entries.length > 0);
}

export function getTodayTomorrowEntries(slug: string): {
  today: ScheduleEntry[];
  tomorrow: ScheduleEntry[];
} {
  const entries = getScheduleEntries(slug);
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const dateKey = (date: Date) => date.toISOString().slice(0, 10);

  return {
    today: entries.filter((entry) => entry.date === dateKey(today)),
    tomorrow: entries.filter((entry) => entry.date === dateKey(tomorrow)),
  };
}
