import type { Metadata } from "next";
import { HeroSection } from "@/components/home/HeroSection";
import { PhotoProvider } from "@/components/home/PhotoProvider";
import { PhotoStrip } from "@/components/home/PhotoStrip";
import { SeoSection } from "@/components/home/SeoSection";
import { BannerGrid } from "@/components/home/BannerGrid";
import { BestSellers } from "@/components/home/BestSellers";
import { DeliverySection } from "@/components/home/DeliverySection";
import { DeliveryZones } from "@/components/home/DeliveryZones";
import { Gallery } from "@/components/home/Gallery";
import { GoogleReviews } from "@/components/home/GoogleReviews";
import { ContactSection } from "@/components/home/ContactSection";
import { generateHeroVideoSchema, generateAggregateRatingSchema } from "@/lib/schema";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateHeroVideoSchema()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateAggregateRatingSchema()) }}
      />
      <PhotoProvider>
        <HeroSection />
        <PhotoStrip />
        <SeoSection />
        <BannerGrid />
        <BestSellers />
        <DeliverySection />
        <DeliveryZones />
        <Gallery />
        <GoogleReviews />
        <ContactSection />
      </PhotoProvider>
    </>
  );
}
