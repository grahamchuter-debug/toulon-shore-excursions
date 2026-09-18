import type { CruiseScheduleEntry } from "@/lib/cruise-schedule-types";
import { getScheduleEntries } from "@/data/schedules";
import { destinationConfig } from "@/config/destination";
import {
  selectScheduleEntryForBooking,
  toBookingShipVisit,
  type BookingShipVisit,
  type BookingShipsByDate,
} from "@/lib/booking/booking-ship-types";

export type {
  BookingShipVisit,
  BookingShipsByDate,
} from "@/lib/booking/booking-ship-types";
export {
  formatVerifiedShipTime,
  formatVerifiedShipTimingLine,
  toBookingShipVisit,
} from "@/lib/booking/booking-ship-types";

/**
 * Toulon cruise calls for booking date/ship selection.
 * Sourced from verified schedule data — empty until calls are published.
 */
function loadToulonScheduleEntries(): CruiseScheduleEntry[] {
  return getScheduleEntries(destinationConfig.port.scheduleSlug).map((entry) => ({
    date: entry.date,
    ship: entry.ship,
    arrival: entry.arrival,
    departure: entry.departure,
    cruiseLine: entry.cruiseLine,
  }));
}

export function loadAllToulonScheduleEntries(): CruiseScheduleEntry[] {
  return loadToulonScheduleEntries();
}

export function getToulonShipsOnDate(
  isoDate: string,
  entries: readonly CruiseScheduleEntry[] = loadAllToulonScheduleEntries(),
): BookingShipVisit[] {
  const byShip = new Map<string, CruiseScheduleEntry[]>();

  for (const entry of entries) {
    if (entry.date !== isoDate) continue;
    const list = byShip.get(entry.ship) ?? [];
    list.push(entry);
    byShip.set(entry.ship, list);
  }

  return [...byShip.values()]
    .map((group) => toBookingShipVisit(selectScheduleEntryForBooking(group)))
    .sort((a, b) => a.name.localeCompare(b.name, "en"));
}

export function buildBookingShipsByDate(
  entries: readonly CruiseScheduleEntry[] = loadAllToulonScheduleEntries(),
): BookingShipsByDate {
  const grouped = new Map<string, Map<string, CruiseScheduleEntry[]>>();

  for (const entry of entries) {
    const byShip = grouped.get(entry.date) ?? new Map();
    const list = byShip.get(entry.ship) ?? [];
    list.push(entry);
    byShip.set(entry.ship, list);
    grouped.set(entry.date, byShip);
  }

  const map: BookingShipsByDate = {};

  for (const [date, byShip] of grouped) {
    map[date] = [...byShip.values()]
      .map((group) => toBookingShipVisit(selectScheduleEntryForBooking(group)))
      .sort((a, b) => a.name.localeCompare(b.name, "en"));
  }

  return map;
}

/** @deprecated Compatibility aliases */
export function loadAllSavonaScheduleEntries(): CruiseScheduleEntry[] {
  return loadAllToulonScheduleEntries();
}

export function getSavonaShipsOnDate(
  isoDate: string,
  entries: readonly CruiseScheduleEntry[] = loadAllToulonScheduleEntries(),
): BookingShipVisit[] {
  return getToulonShipsOnDate(isoDate, entries);
}
