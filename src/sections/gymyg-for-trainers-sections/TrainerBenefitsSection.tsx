"use client";

import { useEffect, useState } from "react";
import ServiceCard from "@/components/cards/ServiceCard";
import { client } from "@/sanity/lib/client";
import { trainerBenefitsQuery } from "@/sanity/lib/queries";
import { TrainerBenefitsData } from "@/types/trainerBenefits";
import { getIconComponent } from "@/lib/iconMap";

interface TrainerBenefitsSectionProps {
  data?: TrainerBenefitsData | null;
  isLoading?: boolean;
}

export default function TrainerBenefitsSection({
  data: propData,
  isLoading = false,
}: TrainerBenefitsSectionProps = {}) {
  const [data, setData] = useState<TrainerBenefitsData | null>(null);
  const [loading, setLoading] = useState(true);

  // Fallback data for when Sanity is not available
  const fallbackData: TrainerBenefitsData = {
    _id: "fallback",
    _type: "trainerBenefits",
    isActive: true,
    sectionTitle: "Benefits That Set You Apart",
    sectionDescription:
      "Join our exclusive network of fitness professionals and unlock a world of opportunities",
    benefits: [
      {
        icon: "Users",
        title: "Client Matching",
        description:
          "Our smart algorithm connects you with clients who match your expertise and training style.",
      },
      {
        icon: "Calendar",
        title: "Scheduling System",
        description:
          "Manage your calendar effortlessly with our intuitive booking and scheduling tools.",
      },
      {
        icon: "Award",
        title: "Professional Profile",
        description:
          "Showcase your certifications, specialties, and success stories to attract ideal clients.",
      },
      {
        icon: "Dumbbell",
        title: "Training Resources",
        description:
          "Access exclusive workout templates, nutrition guides, and client management tools.",
      },
      {
        icon: "ArrowRight",
        title: "Business Growth",
        description:
          "Expand your client base and increase your income with our marketing support.",
      },
      {
        icon: "Users",
        title: "Community Support",
        description:
          "Connect with fellow trainers, share insights, and grow together in our community.",
      },
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
        const result = await client.fetch(trainerBenefitsQuery);
        setData(result);
      } catch (error) {
        console.error("Error fetching trainer benefits data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [propData, isLoading]);

  // Use fallback data only when not loading and no data from Sanity
  const content = !loading && !data ? fallbackData : data;

  // Show loading state
  if (loading) {
    return (
      <section className="py-10 md:py-16 lg:py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="h-8 md:h-10 bg-gray-200 rounded-lg mb-4 w-80 mx-auto animate-pulse"></div>
            <div className="h-5 bg-gray-200 rounded w-96 mx-auto animate-pulse"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-2xl border bg-background p-6 shadow-sm"
              >
                <div className="relative space-y-4">
                  <div className="inline-flex rounded-xl bg-gray-200 p-3 animate-pulse w-12 h-12"></div>
                  <div className="h-6 bg-gray-200 rounded animate-pulse w-3/4"></div>
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-4 bg-gray-200 rounded animate-pulse w-5/6"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Don't render anything if no content is available
  if (!content) {
    return null;
  }

  return (
    <section className="py-10 md:py-16 lg:py-20">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xl md:text-3xl font-bold tracking-tight">
            {content.sectionTitle}
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            {content.sectionDescription}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.benefits?.map((benefit, index) => {
            const IconComponent = getIconComponent(benefit.icon);
            return (
              <ServiceCard
                key={index}
                icon={
                  <IconComponent className="h-5 w-5 md:h-6 md:w-6 lg:h-10 lg:w-10 text-primary" />
                }
                title={benefit.title}
                description={benefit.description}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
