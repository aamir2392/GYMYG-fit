"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { trainerHeroSectionQuery } from "@/sanity/lib/queries";
import { TrainerHeroSectionData } from "@/types/trainerHeroSection";
import { getIcon } from "@/lib/iconMap";
import Badge from "@/components/Badge";

interface TrainerHeroSectionProps {
  data?: TrainerHeroSectionData | null;
  isLoading?: boolean;
}

export default function TrainerHero({
  data: propData,
  isLoading = false,
}: TrainerHeroSectionProps = {}) {
  const [data, setData] = useState<TrainerHeroSectionData | null>(null);
  const [loading, setLoading] = useState(true);

  // Fallback data for when Sanity is not available (original data)
  const fallbackData: TrainerHeroSectionData = {
    _id: "fallback",
    _type: "trainerHeroSection",
    sectionId: "trainer-hero",
    isActive: true,
    badgeText: "For Fitness Professionals",
    mainTitle: "FOR TRAINERS",
    highlightedWord: "GYMYG",
    description:
      "Elevate your fitness career with our premium platform designed exclusively for professional trainers. Connect with clients, grow your business, and transform lives.",
    primaryButton: {
      text: "Apply Now",
      link: "https://4rejngh79zj.typeform.com/to/dMK1ZSn2",
    },
    secondaryButton: {
      text: "Learn More",
      link: "/packages#FAQs-trainers",
    },
    heroImage: {
      asset: null,
      alt: "GYMYG Trainers",
    },
    trustBadge: {
      title: "Trusted Platform",
      description: "Verified clients & secure payments",
      icon: "Key",
    },
  };

  useEffect(() => {
    // If data is provided via props (from parent), use it
    if (propData !== undefined) {
      setData(propData);
      setLoading(isLoading);
      return;
    }

    // Otherwise fetch from Sanity
    const fetchData = async () => {
      try {
        const result = await client.fetch(trainerHeroSectionQuery);
        setData(result);
      } catch (error) {
        console.error("Error fetching trainer hero data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [propData, isLoading]);

  // Use Sanity data if available, otherwise use fallback data
  const content = data || fallbackData;

  // Show loading state
  if (loading) {
    return (
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/30 pt-24 pb-16 md:pt-32 md:pb-24">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent"></div>

        <div className="container relative">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-8">
              {/* Badge skeleton */}
              <div className="h-8 w-48 bg-gray-200 rounded-full animate-pulse"></div>

              {/* Title skeleton */}
              <div className="space-y-2">
                <div className="h-8 md:h-10 lg:h-12 w-full bg-gray-200 rounded animate-pulse"></div>
                <div className="h-8 md:h-10 lg:h-12 w-3/4 bg-gray-200 rounded animate-pulse"></div>
              </div>

              {/* Description skeleton */}
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
              </div>

              {/* Buttons skeleton */}
              <div className="flex gap-4">
                <div className="h-12 w-32 bg-gray-200 rounded-full animate-pulse"></div>
                <div className="h-12 w-32 bg-gray-200 rounded-full animate-pulse"></div>
              </div>
            </div>

            {/* Image skeleton */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <div className="w-full h-96 bg-gray-200 animate-pulse"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 rounded-2xl bg-background p-2 md:p-3 shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 bg-gray-200 rounded-full animate-pulse"></div>
                  <div className="space-y-1">
                    <div className="h-4 w-24 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-3 w-32 bg-gray-200 rounded animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Get hero image URL
  let heroImageSrc = "/assets/gymyg-for-trainers.jpg";

  try {
    if (content.heroImage?.asset?.url) {
      heroImageSrc = content.heroImage.asset.url;
    } else if (content.heroImage) {
      const urlForResult = urlFor(content.heroImage).url();
      if (urlForResult) {
        heroImageSrc = urlForResult;
      }
    }
  } catch (error) {
    console.warn("Error processing hero image:", error);
    // Keep default image
  }

  // Get trust badge icon
  const TrustBadgeIcon = getIcon(content.trustBadge.icon);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/30 pt-24 pb-16 md:pt-32 md:pb-24">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent"></div>

      <div className="container relative">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-8">
            <div>
              <div className="lg:hidden">
                <Badge text={content.badgeText} position="center" showDots />
              </div>
              <div className="hidden lg:block">
                <Badge text={content.badgeText} position="left" showDots />
              </div>
            </div>

            <h1 className="text-2xl font-bold text-center lg:text-left tracking-tight md:text-3xl lg:text-4xl">
              <span className="text-primary">{content.highlightedWord}</span>{" "}
              {content.mainTitle}
            </h1>

            <p className="lg:max-w-lg text-center lg:text-left text-base text-muted-foreground md:text-xl">
              {content.description}
            </p>

            <div className="flex justify-center lg:justify-start gap-4 w-full">
              <Button
                size="lg"
                className="bg-primary text-white hover:bg-primary/90 max-sm:w-full rounded-full transition-all"
                onClick={() => {
                  window.open(content.primaryButton.link, "_blank");
                }}
              >
                {content.primaryButton.text}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/20 hover:text-primary max-sm:w-full rounded-full transition-all"
                onClick={() => {
                  if (content.secondaryButton.link.startsWith("http")) {
                    window.open(content.secondaryButton.link, "_blank");
                  } else {
                    window.location.href = content.secondaryButton.link;
                  }
                }}
              >
                {content.secondaryButton.text}
              </Button>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src={heroImageSrc}
                alt={content.heroImage?.alt || "GYMYG Trainers"}
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>

            <div className="absolute -bottom-6 -right-6 rounded-2xl bg-background p-2 md:p-3 shadow-xl">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-primary/10 p-2 md:p-3">
                  <TrustBadgeIcon className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">
                    {content.trustBadge.title}
                  </p>
                  <p className="text-xs text-muted-foreground break-words  leading-snug">
                    {content.trustBadge.description}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
