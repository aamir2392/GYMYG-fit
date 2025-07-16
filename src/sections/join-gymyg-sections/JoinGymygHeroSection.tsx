"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedParticles from "@/components/AnimatedParticles";
import { client } from "@/sanity/lib/client";
import { joinGymygHeroQuery } from "@/sanity/lib/queries";
import { JoinGymygHeroData, JoinGymygHeroButton } from "@/types/joinGymygHero";
import { urlFor } from "@/sanity/lib/image";

// Skeleton Loading Component
const HeroSkeleton = () => (
  <section className="relative w-full flex justify-center h-full lg:h-[95vh] max-sm:pb-28 lg:pt-4 overflow-hidden">
    {/* Background skeleton */}
    <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 animate-pulse"></div>

    {/* Overlay skeleton */}
    <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-gray-900/50 to-black/60"></div>

    <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between h-full container mx-auto px-6 py-12">
      <div className="w-full flex flex-col items-center text-white space-y-6 pt-16 lg:pt-0">
        <div className="text-center space-y-4 animate-pulse">
          {/* Title skeleton */}
          <div className="space-y-3">
            <div className="h-12 md:h-16 lg:h-20 bg-gray-600/50 rounded w-80 md:w-96 mx-auto"></div>
            <div className="h-12 md:h-16 lg:h-20 bg-gray-600/50 rounded w-72 md:w-80 mx-auto"></div>
            <div className="h-12 md:h-16 lg:h-20 bg-gray-500/50 rounded w-96 md:w-[28rem] mx-auto"></div>
          </div>

          {/* Description skeleton */}
          <div className="mt-8 space-y-2">
            <div className="h-6 bg-gray-500/50 rounded w-80 md:w-96 mx-auto"></div>
            <div className="h-6 bg-gray-500/50 rounded w-72 md:w-80 mx-auto"></div>
          </div>

          {/* Buttons skeleton */}
          <div className="flex flex-col sm:flex-row gap-4 pt-8 justify-center">
            <div className="h-14 lg:h-16 bg-gray-500/50 rounded-full w-40 md:w-48"></div>
            <div className="h-14 lg:h-16 bg-gray-600/50 rounded-full w-40 md:w-48"></div>
          </div>
        </div>
      </div>
    </div>

    <AnimatedParticles />
  </section>
);

export default function JoinGymygHeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState<JoinGymygHeroData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Fallback data
  const fallbackData: JoinGymygHeroData = {
    _id: "fallback",
    title: "Train Smarter.\nMove Better.", // max 200 chars
    primaryColorTitle: "Unlock Your Potential.", // max 100 chars
    subtitle:
      "Personalized training programs designed by elite coaches, powered by AI to adapt to your unique fitness journey.", // max 300 chars
    primaryButton: {
      text: "Download App", // max 25 chars
      action: "scroll-download",
    },
    secondaryButton: {
      text: "Explore Programs", // max 25 chars
      action: "external-link",
      link: "/packages", // max 200 chars
      openInNewTab: true,
    },
    enableParticles: true,
    isActive: true,
    _updatedAt: new Date().toISOString(),
    backgroundImage: undefined,
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await client.fetch(joinGymygHeroQuery);
        setData(result);
      } catch (error) {
        console.error("Error fetching join gymyg hero data:", error);
        // Only set fallback data if there's an error, not during loading
        setData(null);
      } finally {
        setIsLoading(false);
        setIsLoaded(true);
      }
    };

    fetchData();
  }, []);

  // Use fallback data only when not loading and no data from Sanity
  const content = !isLoading && !data ? fallbackData : data;

  // Default dark gradient overlay
  const defaultOverlayClasses =
    "bg-gradient-to-br from-black via-[#0F0B1E] to-[#1A0B2E]";

  const handleButtonClick = (button: JoinGymygHeroButton) => {
    switch (button.action) {
      case "scroll-download":
        const appDownloadSection = document.getElementById(
          "app-download-section"
        );
        appDownloadSection?.scrollIntoView({ behavior: "smooth" });
        break;
      case "external-link":
        if (button.link) {
          if (button.openInNewTab) {
            window.open(button.link, "_blank");
          } else {
            window.location.href = button.link;
          }
        }
        break;
      case "internal-link":
        if (button.link) {
          window.location.href = button.link;
        }
        break;
    }
  };

  // Function to render title with separate primary color title
  const renderTitle = () => {
    if (!content) return null;
    return (
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
        {/* Main title in white */}
        <span
          className="whitespace-pre-line block"
          title={`${content.title?.length || 0}/200`}
        >
          {content.title}
        </span>
        {/* Primary color title */}
        <span
          className="text-primary mt-8 whitespace-pre-line block"
          title={`${content.primaryColorTitle?.length || 0}/100`}
        >
          {content.primaryColorTitle}
        </span>
      </h1>
    );
  };

  if (isLoading || !content) {
    return <HeroSkeleton />;
  }

  return (
    <section
      className="relative w-full flex justify-center h-full lg:h-[95vh] max-sm:pb-28 lg:pt-4 overflow-hidden"
      style={{
        backgroundColor: content.backgroundImage?.asset
          ? "transparent"
          : "black",
      }}
    >
      {/* Background Image (only if present and has valid asset) */}
      {content.backgroundImage?.asset ? (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${urlFor(content.backgroundImage.asset).url()})`,
          }}
        />
      ) : null}

      {/* Default Overlay (always present) */}
      <div
        className={`absolute inset-0 ${defaultOverlayClasses}`}
        style={{ opacity: 0.7 }}
      />

      {/* Content container */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between h-full container mx-auto px-6 py-12">
        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : -50 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full flex flex-col items-center text-white space-y-6 pt-16 lg:pt-0"
        >
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center"
          >
            {renderTitle()}
          </motion.div>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-center"
          >
            <p
              className="text-lg md:text-xl text-zinc-300 max-w-md whitespace-pre-line"
              title={`${content.subtitle?.length || 0}/300`}
            >
              {content.subtitle}
            </p>
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 pt-4 h-14 lg:h-16"
          >
            <Button
              onClick={() => handleButtonClick(content.primaryButton)}
              size="lg"
              className="bg-primary text-white rounded-full lg:px-8 lg:py-6 px-4 py-6 text-lg font-medium transition-all duration-300 hover:bg-primary/90"
              title={`${content.primaryButton.text?.length || 0}/25`}
            >
              {content.primaryButton.text}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <Button
              onClick={() => handleButtonClick(content.secondaryButton)}
              variant="outline"
              className="border-zinc-700 hover:text-white bg-zinc-900/40 backdrop-blur-sm px-4 py-6 text-white hover:bg-zinc-800/60 rounded-full lg:px-8 lg:py-6 text-lg font-medium transition-all duration-300"
              title={`${content.secondaryButton.text?.length || 0}/25`}
            >
              {content.secondaryButton.text}
              <Play className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated Particles */}
      {content.enableParticles && <AnimatedParticles />}
    </section>
  );
}
