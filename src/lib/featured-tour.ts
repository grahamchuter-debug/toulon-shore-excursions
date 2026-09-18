/**
 * Featured-tour helpers — Editor's Choice Cassis day used for homepage cards / schema.
 */
import { getBookableProduct } from "@/data/bookable-products";

const flagship = getBookableProduct("discover-cassis-calanques-provence-wine-tasting");

export const featuredTour = flagship
  ? {
      slug: flagship.slug,
      path: flagship.path,
      bookingPath: flagship.bookingPath,
      cardName: flagship.name,
      fullName: flagship.experienceName,
    }
  : {
      slug: "discover-cassis-calanques-provence-wine-tasting",
      path: "/shore-excursions/discover-cassis-calanques-provence-wine-tasting",
      bookingPath: "/book/discover-cassis-calanques-provence-wine-tasting",
      cardName: "Discover Cassis, Calanques & Provence Wine Tasting",
      fullName: "Discover Cassis, Calanques & Provence Wine Tasting",
    };
