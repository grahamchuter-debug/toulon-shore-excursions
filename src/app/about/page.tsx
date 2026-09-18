import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";
import { businessIdentity } from "@/lib/legal/business-identity";

const path = "/about";

export const metadata = buildMetadata({
  title: "About Toulon Shore Excursions",
  description:
    "About Toulon Shore Excursions — an independent Provence cruise planning resource for passengers arriving at the Port of Toulon.",
  path,
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "About", path },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema(breadcrumbs), webPageSchema({ title: "About Toulon Shore Excursions", description: "About Toulon Shore Excursions.", path })]} />
      <PageHero title="About Toulon Shore Excursions" subtitle="An independent planning resource built for cruise passengers — authentic Provence by the sea from the Port of Toulon." compact />
      <section className="section-padding">
        <div className="container-wide max-w-3xl prose prose-gray">
          <Breadcrumbs items={breadcrumbs} />
          <div className="mt-8 space-y-4 text-gray-700 leading-relaxed">
            <p>
              {SITE.name} is an independent planning resource for cruise passengers calling at Toulon. Whether you have one day ashore or want to understand Cassis, Bandol, Mont Faron and inland Provence before you sail, our goal is to help you choose the best version of your port day — not just browse a catalogue of tours.
            </p>
            <p>
              We focus on the practical decisions that shape a good Toulon cruise day: city or Provence beyond the harbour, whether independent exploring suits your hours, when a small-group tour beats a large coach, and how to build a realistic return-to-ship buffer for coastal roads.
            </p>
            <p>
              Our guides are written for real cruise timings, not generic tourism. We highlight honest editorial comparisons, Editor&apos;s Collection recommendations for different traveller types, and future concepts such as The Wow Collection and Signature Provençal Toulon Discovery. Ship schedules and transfer times are indicative — always confirm all-aboard times with your cruise line.
            </p>
            <p>
              Questions? Email us at{" "}
              <a href={businessIdentity.primaryEmailHref} className="text-coastal-700 hover:underline">
                {businessIdentity.primaryEmail}
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
