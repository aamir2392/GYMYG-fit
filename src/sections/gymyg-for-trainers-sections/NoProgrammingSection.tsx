"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { noProgrammingQuery } from "@/sanity/lib/queries";
import { NoProgrammingData } from "@/types/noProgramming";
import { getIcon } from "@/lib/iconMap";
import Badge from "@/components/Badge";

interface NoProgrammingSectionProps {
  data?: NoProgrammingData | null;
  isLoading?: boolean;
}

export default function NoProgrammingSection({
  data: propData,
  isLoading = false,
}: NoProgrammingSectionProps = {}) {
  const [data, setData] = useState<NoProgrammingData | null>(null);
  const [loading, setLoading] = useState(true);

  // Fallback data for when Sanity is not available (original data)
  const fallbackData: NoProgrammingData = {
    _id: "fallback",
    _type: "noProgramming",
    sectionId: "no-programming",
    isActive: true,
    badgeText: "Simplified Workflow",
    sectionTitle: "NO",
    highlightedWord: "PROGRAMMING",
    sectionDescription:
      "You never have to write programs for your clients. We'll provide that for you. The workouts are designed by GYMYG's corporate team of expert trainers.",
    backgroundImage: {
      asset: null,
      alt: "Background",
    },
    featureCards: [
      {
        icon: "FileText",
        title: "Expert Design",
        description:
          "Professionally crafted workout programs designed by our team of certified fitness experts.",
        delay: 0.1,
      },
      {
        icon: "Users",
        title: "Guided Sessions",
        description:
          "Lead trainers guide the class through the workout of the day with professional instruction.",
        delay: 0.2,
      },
      {
        icon: "Code",
        title: "Custom Modifications",
        description:
          "Coaches help clients through the workout and suggest modifications when necessary.",
        delay: 0.3,
      },
    ],
    benefits: [
      "Save hours of planning time",
      "Scientifically proven workouts",
      "Regular program updates",
      "Adaptable to all fitness levels",
      "Focus on coaching, not planning",
      "Consistent client experience",
    ],
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
        const result = await client.fetch(noProgrammingQuery);
        setData(result);
      } catch (error) {
        console.error("Error fetching no programming data:", error);
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
      <section className="relative overflow-hidden bg-gradient-to-b from-zinc-800 to-zinc-900 py-8">
        {/* Background skeleton */}
        <div className="absolute inset-0 z-0 bg-gray-300 animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>

        <div className="container relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <div className="space-y-12">
              {/* Badge skeleton */}
              <div className="mx-auto h-8 w-40 bg-gray-200 rounded-full animate-pulse"></div>

              {/* Heading skeleton */}
              <div className="mx-auto h-8 md:h-12 w-80 bg-gray-200 rounded animate-pulse"></div>

              {/* Description skeleton */}
              <div className="mx-auto max-w-2xl space-y-2">
                <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto animate-pulse"></div>
              </div>

              {/* Feature cards skeleton */}
              <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
                {[1, 2, 3].map((index) => (
                  <div
                    key={index}
                    className="rounded-xl border border-zinc-700 bg-zinc-800/50 p-6 backdrop-blur"
                  >
                    <div className="space-y-4">
                      <div className="h-12 w-12 bg-gray-200 rounded-full animate-pulse"></div>
                      <div className="h-6 bg-gray-200 rounded animate-pulse"></div>
                      <div className="space-y-2">
                        <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                        <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                        <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Benefits skeleton */}
              <div className="mx-auto mt-12 max-w-2xl rounded-xl border border-zinc-700 bg-zinc-800/50 p-6 backdrop-blur">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {[1, 2, 3, 4, 5, 6].map((index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="h-6 w-6 bg-gray-200 rounded-full animate-pulse"></div>
                      <div className="h-4 bg-gray-200 rounded flex-1 animate-pulse"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Get background image URL
  const backgroundImageSrc = content.backgroundImage?.asset
    ? "url" in content.backgroundImage.asset
      ? (content.backgroundImage.asset.url as string)
      : urlFor(content.backgroundImage).url()
    : "/assets/no-programming.jpg";

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-zinc-800 to-zinc-900 py-8">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImageSrc}
          alt={content.backgroundImage?.alt || "Background"}
          fill
          className="object-cover opacity-30"
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
      </div>

      <div className="container relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <div className="space-y-12">
            <Badge text={content.badgeText} showDots />

            {/* Heading with elegant typography */}
            <h2 className="text-xl md:text-3xl font-bold tracking-tight text-white">
              {content.sectionTitle}{" "}
              <span className="text-primary">{content.highlightedWord}</span>
            </h2>

            {/* Description with refined typography */}
            <p className="mx-auto max-w-2xl text-base md:text-lg leading-relaxed text-zinc-200">
              {content.sectionDescription}
            </p>

            {/* Feature cards with elegant styling */}
            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
              {content.featureCards?.map((feature, index) => {
                const IconComponent = getIcon(feature.icon);
                return (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-xl border border-zinc-700 bg-zinc-800/50 p-6 backdrop-blur transition-all hover:border-primary/20 hover:bg-zinc-800/80"
                  >
                    <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-primary/20 opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:scale-110"></div>
                    <div className="relative space-y-4">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold text-white">
                        {feature.title}
                      </h3>
                      <p className="text-zinc-300">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Elegant list of benefits */}
            <div className="mx-auto mt-12 max-w-2xl rounded-xl border border-zinc-700 bg-zinc-800/50 p-6 backdrop-blur">
              <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {content.benefits?.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/20">
                      <Check className="h-3.5 w-3.5 text-primary" />
                    </div>
                    <span className="text-sm max-sm:text-left text-zinc-200">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Elegant decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-px w-full bg-gradient-to-r from-transparent via-zinc-600/50 to-transparent"></div>
    </section>
  );
}
