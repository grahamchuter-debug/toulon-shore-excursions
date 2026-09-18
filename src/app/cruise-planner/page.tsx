import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { CruisePlanner } from "@/components/CruisePlanner";

const path = "/cruise-planner";
const description =
  "Build a personalised Toulon cruise plan. Enter your port times, party size, interests, mobility, budget and travel style for tailored Provence recommendations.";

export const metadata = buildMetadata({
  title: "Toulon Cruise Planner — Provence Port Day Itinerary",
  description,
  path,
  keywords: ["Toulon cruise planner", "Provence cruise day plan", "Toulon port day itinerary", "Cassis from Toulon planner"],
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Toulon Cruise Planner", path },
];

export default function CruisePlannerPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema(breadcrumbs), webPageSchema({ title: "Toulon Cruise Planner", description, path })]} />
      <PageHero
        title="Toulon Cruise Planner"
        subtitle="Tell us your ship's hours ashore, who is travelling and what you enjoy — get editorial recommendations for historic Toulon, Cassis, Bandol and independent days."
        compact
      />
      <section className="section-padding">
        <div className="container-wide max-w-3xl">
          <Breadcrumbs items={breadcrumbs} />
          <div className="mt-8">
            <CruisePlanner />
          </div>
        </div>
      </section>
    </>
  );
}
