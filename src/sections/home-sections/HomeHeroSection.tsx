/**
 * Home Hero Section Component - Sanity CMS Integrated
 *
 * This component renders the main hero section of the homepage using content
 * managed through Sanity CMS. It fetches data from Sanity on component mount
 * and provides graceful fallbacks for error states.
 *
 * Features:
 * - Real-time content management through Sanity Studio
 * - Loading states and error handling
 * - Fallback to default content if Sanity is unavailable
 * - Type-safe data handling with TypeScript interfaces
 * - Dynamic icon rendering based on Sanity selections
 * - Responsive design with Framer Motion animations
 *
 * Data Flow:
 * 1. Component mounts and triggers useEffect
 * 2. Fetches active hero section from Sanity using GROQ query
 * 3. Updates local state with fetched data
 * 4. Renders content based on data availability
 * 5. Falls back to hardcoded content if Sanity fails
 */

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronRight, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import PromoModal from "@/components/PromoModal";
import { useScrollTrigger } from "@/hooks/useScrollTrigger";

// Sanity integration imports
import { client } from "@/sanity/lib/client";
import { homeHeroSectionQuery } from "@/sanity/lib/queries";
import { HeroSectionData } from "@/types/heroSection";
import { getIcon } from "@/lib/iconMap";

interface HomeHeroSectionProps {
  data?: HeroSectionData | null;
  isLoading?: boolean;
}

export default function HomeHeroSection({
  data: propData,
  isLoading = false,
}: HomeHeroSectionProps = {}) {
  // Animation state for entrance effects
  const [isVisible, setIsVisible] = useState(false);

  // Sanity data management states
  const [data, setData] = useState<HeroSectionData | null>(null);
  const [loading, setLoading] = useState(true);

  // Hook which decides when to show the promo modal
  const showPromoModal = useScrollTrigger("home-hero");

  // Fallback data for when Sanity is not available (original data)
  const fallbackData: HeroSectionData = {
    _id: "fallback",
    title: "YOUR GYM. YOUR IMAGE.",
    subtitle:
      "The next evolution in virtual fitness. Real trainers. Real connections. Real results.",
    logo: {
      asset: {
        _id: "fallback-logo",
        url: "/assets/gymyg-logo.png",
      },
      alt: "GYMYG Logo",
    },
    backgroundVideo: {
      backgroundVideo: {
        asset: {
          _id: "fallback-video",
          url: "https://res.cloudinary.com/dltznxrsa/video/upload/v1747469482/gymyg-hero-section-video_vre48e.mp4",
        },
      },
    },
    primaryButton: {
      text: "Start Your Journey",
      link: "/join-gymyg",
    },
    secondaryButton: {
      text: "Learn More",
      link: "/packages",
    },
    features: [
      { icon: "users", text: "10,000+ members" },
      { icon: "dumbbell", text: "Expert trainers" },
      { icon: "globe", text: "Worldwide community" },
    ],
    scrollText: "Scroll to explore",
    _updatedAt: new Date().toISOString(),
  };

  /**
   * Effect: Fetch Hero Data from Sanity
   *
   * Runs on component mount to:
   * 1. Trigger entrance animations
   * 2. Fetch active hero section data from Sanity
   * 3. Handle loading states and errors gracefully
   */
  useEffect(() => {
    setIsVisible(true);

    // If data is provided via props (from parent), use it
    if (propData !== undefined) {
      setData(propData);
      setLoading(isLoading);
      return;
    }

    // Otherwise fetch from Sanity
    const fetchHeroData = async () => {
      try {
        // Execute GROQ query to get active hero section
        const result =
          await client.fetch<HeroSectionData>(homeHeroSectionQuery);
        setData(result);
      } catch (error) {
        console.error("Error fetching home hero data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHeroData();
  }, [propData, isLoading]);

  // Use Sanity data if available, otherwise use fallback data
  const content = data || fallbackData;

  /**
   * Loading State Render
   *
   * Shows skeleton components while fetching data from Sanity.
   * Maintains the same layout structure to prevent layout shifts.
   */
  if (loading) {
    return (
      <section
        id="home-hero"
        className="relative py-24 md:py-44 h-full lg:min-h-screen flex items-center overflow-hidden"
      >
        {/* Background skeleton */}
        <div className="absolute lg:h-screen lg:scale-150 h-full inset-0 bg-gradient-to-br from-black to-gray-900 opacity-70 z-0"></div>

        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="flex justify-center items-center">
            <div className="text-white space-y-8 flex flex-col items-center">
              {/* Logo skeleton - matches fallback logo size */}
              <div className="max-md:mt-4 flex justify-center items-center">
                <div className="w-[250px] h-[200px] bg-gray-200 rounded animate-pulse"></div>
              </div>

              {/* Title skeleton - matches "YOUR GYM. YOUR IMAGE." structure */}
              <div className="text-center space-y-2">
                <div className="h-12 md:h-16 lg:h-20 w-96 md:w-[500px] bg-gray-200 rounded animate-pulse mx-auto"></div>
                <div className="h-12 md:h-16 lg:h-20 w-80 md:w-[450px] bg-gray-200 rounded animate-pulse mx-auto"></div>
              </div>

              {/* Subtitle skeleton - matches fallback subtitle length */}
              <div className="space-y-2 max-w-3xl w-full">
                <div className="h-6 md:h-8 w-full bg-gray-200 rounded animate-pulse"></div>
                <div className="h-6 md:h-8 w-4/5 bg-gray-200 rounded animate-pulse mx-auto"></div>
                <div className="h-6 md:h-8 w-3/5 bg-gray-200 rounded animate-pulse mx-auto"></div>
              </div>

              {/* Buttons skeleton - matches "Start Your Journey" + "Learn More" */}
              <div className="flex gap-4 w-full justify-center">
                <div className="h-[56px] w-[180px] md:w-[200px] bg-gray-200 rounded-full animate-pulse"></div>
                <div className="h-[56px] w-[140px] md:w-[160px] bg-gray-200 rounded-full animate-pulse"></div>
              </div>

              {/* Features skeleton - matches 3 feature items layout */}
              <div className="mt-8 grid grid-cols-2 justify-center gap-2 md:gap-4 sm:grid-cols-3 w-full max-w-2xl">
                {[1, 2, 3].map((index) => (
                  <div
                    key={index}
                    className={cn(
                      "flex items-center justify-center space-x-2 rounded-lg bg-white/5 p-1.5 md:p-3 backdrop-blur-sm",
                      index === 3 &&
                        "col-span-2 flex justify-center sm:col-span-1 md:col-span-1"
                    )}
                  >
                    {/* Icon skeleton */}
                    <div className="rounded-full bg-gradient-to-r from-pink-500/20 to-rose-400/20 p-2">
                      <div className="w-5 h-5 bg-gray-200 rounded animate-pulse"></div>
                    </div>
                    {/* Text skeleton */}
                    <div className="h-4 w-20 md:w-24 bg-gray-200 rounded animate-pulse"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator skeleton - matches "Scroll to explore" */}
        <div className="absolute max-sm:bottom-4 bottom-20 left-1/2 transform -translate-x-1/2 text-center">
          <div className="h-4 w-32 bg-gray-200 rounded animate-pulse mb-2 mx-auto"></div>
          <div className="h-6 w-6 bg-gray-200 rounded animate-pulse mx-auto"></div>
        </div>
      </section>
    );
  }

  /**
   * Main Render - Data Driven (Sanity or Fallback)
   *
   * Renders the hero section using data from Sanity CMS or fallback data.
   * All content is dynamically populated from the data source.
   */
  return (
    <section
      id="home-hero"
      className="relative py-24 md:py-44 h-full lg:min-h-screen flex items-center overflow-hidden"
    >
      {/* Background gradient overlay */}
      <div className="absolute lg:h-screen lg:scale-150 h-full inset-0 bg-gradient-to-br from-black to-gray-900 opacity-70 z-0"></div>

      {/* 
        Dynamic Background Media
        Priority: Data video URL > Data fallback image > Default video
      */}
      <div className="absolute inset-0 z-[-1] h-full lg:h-screen w-full">
        {content.backgroundVideo?.backgroundVideo?.asset?.url ? (
          // Use video file from data
          <video
            src={content.backgroundVideo.backgroundVideo.asset.url}
            autoPlay
            muted
            loop
            className="h-full lg:h-full w-full object-cover scale-150"
          />
        ) : content.backgroundVideo?.fallbackImage?.asset?.url ? (
          // Use fallback image from data
          <Image
            src={content.backgroundVideo.fallbackImage.asset.url}
            alt="Hero background"
            fill
            className="object-cover"
            priority
          />
        ) : (
          // Default fallback video
          <video
            src="https://res.cloudinary.com/dltznxrsa/video/upload/v1747469482/gymyg-hero-section-video_vre48e.mp4"
            autoPlay
            muted
            loop
            className="h-full lg:h-full w-full object-cover scale-150"
          />
        )}
      </div>

      {/* Main content container */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="flex justify-center items-center">
          <div
            className={cn(
              "text-white space-y-8 flex flex-col items-center transform transition-all duration-1000",
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            )}
          >
            {/* Dynamic headline with optional logo */}
            <h1 className="max-md:mt-4 text-5xl md:text-6xl text-center lg:text-6xl font-bold leading-tight">
              {/* Conditionally render logo if provided in data */}
              {content.logo?.asset?.url && (
                <div className="flex justify-center items-center mb-4">
                  <Image
                    src={content.logo.asset.url}
                    alt={content.logo.alt || "Logo"}
                    width={250}
                    height={200}
                  />
                </div>
              )}
              {/* Dynamic title from data */}
              {content.title}
            </h1>

            {/* Dynamic subtitle from data */}
            <p className="text-lg md:text-2xl max-w-3xl text-center">
              {content.subtitle}
            </p>

            {/* Dynamic Call-to-Action buttons */}
            <div className="flex gap-4">
              {/* Primary CTA button */}
              <Button
                onClick={() => {
                  window.location.href = content.primaryButton.link;
                }}
                className="w-full bg-primary hover:bg-primary-100 text-white text-lg max-sm:text-sm max-md:py-5 max-md:px-4 py-6 px-8 group"
              >
                {content.primaryButton.text}
                <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>

              {/* Secondary CTA button */}
              <Button
                variant="outline"
                onClick={() => {
                  window.location.href = content.secondaryButton.link;
                }}
                className="w-full bg-transparent text-white hover:bg-white/5 hover:text-white text-lg max-sm:text-sm max-md:py-5 max-md:px-4 py-6 px-8"
              >
                {content.secondaryButton.text}
              </Button>
            </div>

            {/* 
              Dynamic Feature Stats
              Only renders if features exist in data
            */}
            {content.features && content.features.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="mt-8 grid grid-cols-2 justify-center gap-2 md:gap-4 sm:grid-cols-3"
              >
                {content.features.map((item, index) => {
                  // Dynamically get icon component based on data selection
                  const IconComponent = getIcon(item.icon);

                  return (
                    <div
                      key={index}
                      className={cn(
                        "flex items-center justify-center space-x-2 rounded-lg bg-white/5 p-1.5 md:p-3 backdrop-blur-sm",
                        index === 2 &&
                          "col-span-2 flex justify-center sm:col-span-1 md:col-span-1"
                      )}
                    >
                      {/* Dynamic icon from icon mapping */}
                      <div className="rounded-full bg-gradient-to-r from-pink-500/20 to-rose-400/20 p-2 text-primary">
                        <IconComponent className="h-5 w-5" />
                      </div>
                      {/* Dynamic feature text */}
                      <span className="text-xs md:text-sm font-medium text-white">
                        {item.text}
                      </span>
                    </div>
                  );
                })}
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Scroll indicator with dynamic text */}
      <div className="absolute max-sm:bottom-4 bottom-20 left-1/2 transform -translate-x-1/2 text-white text-center">
        <p className="mb-2 text-sm uppercase tracking-wider">
          {/* Use data scroll text or fallback */}
          {content.scrollText || "Scroll to explore"}
        </p>
        <div className="animate-bounce flex justify-center">
          <ArrowRight className="h-6 w-6 transform rotate-90" />
        </div>
      </div>

      {/* Promo modal (not managed by Sanity) */}
      {showPromoModal && <PromoModal />}
    </section>
  );
}
