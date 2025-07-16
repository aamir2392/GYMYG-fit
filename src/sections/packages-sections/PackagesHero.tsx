"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { useScrollTrigger } from "@/hooks/useScrollTrigger";
import PromoModal from "@/components/PromoModal";
import { client } from "@/sanity/lib/client";
import { packagesHeroQuery } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { PackagesHeroData } from "@/types/packagesHero";

// Client component for the animated content
function AnimatedHeroContent({ data }: { data: PackagesHeroData | null }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Fallback data only when there's an error
  const fallbackData = {
    title: "Find Your Perfect",
    highlightedWord: "Fitness",
    subtitle:
      "Flexible options designed to fit your lifestyle. Join thousands of members who have transformed their fitness journey with GYMYG.",
    primaryButton: {
      text: "Explore Packages",
      link: "/packages",
    },
    secondaryButton: {
      text: "Book a Demo",
      link: "/join-gymyg",
    },
  };

  // Use data if available, otherwise use fallback data
  const content = data || fallbackData;

  // If no data and no error, return null (this shouldn't happen since we handle loading state)
  if (!content) return null;

  return (
    <div
      className={cn(
        "max-w-3xl mx-auto text-center transform transition-all duration-1000",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      )}
    >
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
        {content.title}{" "}
      </h1>
      <p className="text-lg md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto">
        {content.subtitle}
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Button
          className="bg-primary hover:bg-primary-100 text-white text-lg py-6 px-8 rounded-full group"
          size="lg"
          onClick={() => {
            const link = content.primaryButton.link;
            if (link) {
              window.location.href = link;
            }
          }}
        >
          {content.primaryButton.text}
          <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
        </Button>
        <Button
          variant="outline"
          className="border-white bg-transparent text-white hover:text-white hover:bg-white/10 text-lg py-6 px-8 rounded-full"
          size="lg"
          onClick={() => {
            const link = content.secondaryButton.link;
            if (link) {
              window.location.href = link;
            }
          }}
        >
          {content.secondaryButton.text}
        </Button>
      </div>
    </div>
  );
}

// Loading skeleton component
function HeroLoadingSkeleton() {
  return (
    <div className="max-w-3xl mx-auto text-center">
      <div className="animate-pulse">
        {/* Title skeleton */}
        <div className="mb-6">
          <div className="h-12 md:h-16 lg:h-20 bg-white/20 rounded-lg w-full mb-2"></div>
          <div className="h-12 md:h-16 lg:h-20 bg-white/20 rounded-lg w-3/4 mx-auto"></div>
        </div>

        {/* Subtitle skeleton */}
        <div className="mb-10">
          <div className="h-6 md:h-8 bg-white/15 rounded-lg w-full mb-2"></div>
          <div className="h-6 md:h-8 bg-white/15 rounded-lg w-5/6 mx-auto mb-2"></div>
          <div className="h-6 md:h-8 bg-white/15 rounded-lg w-4/6 mx-auto"></div>
        </div>

        {/* Buttons skeleton */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <div className="h-14 bg-white/25 rounded-full w-48 mx-auto sm:mx-0"></div>
          <div className="h-14 bg-white/15 rounded-full w-48 mx-auto sm:mx-0"></div>
        </div>
      </div>
    </div>
  );
}

// Main server component
export default function PackagesHero() {
  const [data, setData] = useState<PackagesHeroData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const showPromoModal = useScrollTrigger("packages-hero-section");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await client.fetch(packagesHeroQuery);
        setData(result);
      } catch (error) {
        console.error("Error fetching packages hero data:", error);
        // Don't set hasError, just let it use fallback data
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  // Determine background image based on state
  const getBackgroundImage = () => {
    if (isLoading) {
      return null; // No image during loading
    }
    if (data?.backgroundImage) {
      return urlFor(data.backgroundImage).url();
    }
    // Use fallback image when no data from Sanity or on error
    return "/assets/packages-hero-section.jpg";
  };

  const backgroundImage = getBackgroundImage();

  return (
    <section
      id="packages-hero-section"
      className="relative py-24 md:py-32 lg:py-48 2 h-full overflow-hidden"
    >
      {/* Background with gradient overlay */}
      <div className="absolute h-full inset-0 bg-gradient-to-br from-black to-gray-900 opacity-70 z-0"></div>

      {/* Background image or placeholder */}
      <div className="absolute z-[-1] w-full h-full inset-0">
        {isLoading ? (
          // Loading placeholder background
          <div className="w-full h-full bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 animate-pulse" />
        ) : backgroundImage ? (
          <Image
            src={backgroundImage}
            fill
            alt="Packages Hero Section"
            className="object-fill md:object-cover"
          />
        ) : (
          // Fallback gradient when no image is available
          <div className="w-full h-full bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900" />
        )}
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 lg:px-8">
        {isLoading ? (
          <HeroLoadingSkeleton />
        ) : (
          <AnimatedHeroContent data={data} />
        )}
      </div>
      {showPromoModal && <PromoModal />}
    </section>
  );
}
