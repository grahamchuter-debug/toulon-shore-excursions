import Link from "next/link";

const TOULON_LINKS = [
  {
    title: "Tour or independent?",
    description:
      "Honest comparison for Toulon cruise passengers — when to walk alone and when a guide helps.",
    href: "/compare/tour-or-independent",
  },
  {
    title: "City or Provence?",
    description:
      "Compare staying in authentic Toulon versus a Cassis, Bandol or Luberon day beyond the harbour.",
    href: "/compare/city-or-provence",
  },
  {
    title: "Best Toulon shore excursions",
    description:
      "Our curated launch collection — Editor's Choice first, with honest trade-offs for every option.",
    href: "/compare/best-shore-excursions",
  },
  {
    title: "Walking from Toulon port",
    description:
      "How far the historic harbour really is, and how to reach Old Town lanes on foot.",
    href: "/guides/walking-from-port",
  },
  {
    title: "Can you explore independently?",
    description:
      "When a flexible foot day is the better choice — and when organised transport earns its place.",
    href: "/guides/explore-independently",
  },
  {
    title: "First time in Toulon",
    description:
      "A practical first-call plan: historic Toulon, Cassis, or Provence beyond the city.",
    href: "/compare/first-time-toulon-day",
  },
  {
    title: "Toulon cruise schedules",
    description:
      "Confirmed ship-call data will appear here once schedules are ready for publication.",
    href: "/ship-schedules/toulon",
  },
];

export function DestinationQuickLinks() {
  return (
    <section className="section-padding bg-coastal-50 border-t border-coastal-100">
      <div className="container-wide">
        <p className="section-eyebrow">Keep planning</p>
        <h2 className="section-title mt-2">Your Toulon planning hub</h2>
        <p className="section-subtitle">
          Use these guides and comparisons to shape a port day that matches your ship hours, energy
          and curiosity — whether you stay in Toulon or discover Provence beyond the harbour.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TOULON_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="card-feature group">
              <h3 className="font-display text-lg font-bold text-gray-900 group-hover:text-coastal-800">
                {link.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">{link.description}</p>
            </Link>
          ))}
        </div>
        <div className="mt-6">
          <Link href="/guides" className="btn-secondary text-sm">
            All Toulon planning guides
          </Link>
        </div>
      </div>
    </section>
  );
}
