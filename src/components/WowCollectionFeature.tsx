import Link from "next/link";
import { subjectImages } from "@/lib/images";
import { ResponsiveImage } from "@/components/ResponsiveImage";
import { wowCollection, WOW_COLLECTION_PATH } from "@/data/wow-collection";
import { signatureToulonExperience, SIGNATURE_EXPERIENCE_PATH } from "@/data/signature-experience";

export function WowCollectionFeature() {
  const image = subjectImages.cassis;

  return (
    <section className="section-padding bg-coastal-900 text-white">
      <div className="container-wide">
        <div className="card-signature grid gap-0 overflow-hidden border-white/10 bg-white/5 lg:grid-cols-2">
          <div className="relative min-h-[280px] lg:min-h-full">
            <ResponsiveImage
              image={image}
              role="card"
              className="absolute inset-0 block h-full w-full"
              imgClassName="absolute inset-0 h-full w-full object-cover"
            />
            <div
              className="absolute inset-0 bg-gradient-to-r from-coastal-900/80 via-coastal-900/40 to-transparent lg:bg-gradient-to-t lg:from-coastal-900/70 lg:via-transparent lg:to-transparent"
              aria-hidden="true"
            />
            <span className="absolute left-6 top-6 inline-flex items-center gap-1.5 rounded-full border border-amber-400/50 bg-amber-400/10 px-3 py-1 text-xs font-semibold tracking-wide text-amber-300">
              ✨ In preparation
            </span>
          </div>

          <div className="flex flex-col justify-center bg-[#faf8f5] p-8 text-gray-900 sm:p-10 lg:p-12">
            <p className="section-eyebrow text-coastal-700">Future Provence exclusives</p>
            <h2 className="mt-1 font-display text-3xl font-semibold text-gray-900 sm:text-4xl">
              {wowCollection.title}
            </h2>
            <p className="mt-4 text-base italic leading-relaxed text-gray-700">
              &ldquo;{wowCollection.tagline}&rdquo;
            </p>
            <p className="mt-4 text-sm leading-relaxed text-gray-600">
              {wowCollection.overview}
            </p>

            <div className="mt-6 grid gap-2 sm:grid-cols-2">
              {wowCollection.plannedExperiences.slice(0, 3).map((exp) => (
                <div key={exp.title} className="flex items-start gap-2 text-sm text-gray-700">
                  <span aria-hidden="true">✨</span>
                  <span>{exp.title}</span>
                </div>
              ))}
              <div className="flex items-start gap-2 text-sm text-gray-700">
                <span aria-hidden="true">⏰</span>
                <span>Cruise-first timing and return buffers</span>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={WOW_COLLECTION_PATH} className="btn-accent">
                Explore The Wow Collection →
              </Link>
              <Link href={SIGNATURE_EXPERIENCE_PATH} className="btn-secondary">
                {signatureToulonExperience.title}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
