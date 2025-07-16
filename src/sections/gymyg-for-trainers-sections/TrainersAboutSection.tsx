"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { trainersAboutQuery } from "@/sanity/lib/queries";
import { TrainersAboutData } from "@/types/trainersAbout";

interface TrainersAboutSectionProps {
  data?: TrainersAboutData | null;
  isLoading?: boolean;
}

export default function TrainersAboutSection({
  data: propData,
  isLoading = false,
}: TrainersAboutSectionProps = {}) {
  const [data, setData] = useState<TrainersAboutData | null>(null);
  const [loading, setLoading] = useState(true);

  // Fallback data for when Sanity is not available
  const fallbackData: TrainersAboutData = {
    _id: "fallback",
    _type: "trainersAbout",
    sectionId: "trainers-about",
    isActive: true,
    sectionTitle: "Grow Your Fitness Business",
    sectionDescription:
      "GYMYG provides the tools and platform you need to succeed as a fitness professional",
    featureCards: [
      {
        title: "Elevate Your Training Career",
        description:
          "GYMYG connects passionate fitness trainers with clients who are ready to transform their lives. Our platform provides you with the tools, resources, and community to grow your business and impact.",
        image: {
          asset: null,
        },
        imageAlt: "Fitness trainer working with laptop",
      },
      {
        title: "Train On Your Schedule",
        description:
          "One of the most frustrating parts of being a trainer is when clients late cancel. With GYMYG, that never happens. No set schedule allows for optimal flexibility and freedom to fit your lifestyle.",
        image: {
          asset: null,
        },
        imageAlt: "Mobile app showing schedule availability",
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
        const result = await client.fetch(trainersAboutQuery);
        setData(result);
      } catch (error) {
        console.error("Error fetching trainers about data:", error);
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
      <section className="w-full py-12 lg:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <div className="h-8 md:h-10 bg-gray-200 rounded-lg mb-4 w-80 animate-pulse"></div>
            <div className="h-5 bg-gray-200 rounded w-96 animate-pulse"></div>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
            {[1, 2].map((i) => (
              <Card key={i} className="overflow-hidden border-none shadow-lg">
                <div className="relative h-[300px] lg:h-[500px] w-full bg-gray-200 animate-pulse"></div>
                <CardHeader className="pb-2">
                  <div className="h-6 lg:h-7 bg-gray-200 rounded animate-pulse mb-2"></div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
                  </div>
                </CardContent>
              </Card>
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
    <section className="w-full py-12 lg:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-xl md:text-3xl font-bold tracking-tight">
            {content.sectionTitle}
          </h2>
          <p className="mt-4 text-base lg:text-xl text-muted-foreground max-w-3xl">
            {content.sectionDescription}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
          {content.featureCards?.map((card, index) => {
            // Get image URL - use fallback images if Sanity images are not available
            const imageSrc: string = card.image?.asset
              ? "url" in card.image.asset
                ? (card.image.asset.url as string)
                : urlFor(card.image).url()
              : index === 0
                ? "/assets/trainer-about.jpg"
                : "/assets/gymyg-trainers-mobile-mockup.png";

            return (
              <Card
                key={index}
                className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-[300px] lg:h-[500px] w-full overflow-hidden">
                  <Image
                    src={imageSrc}
                    alt={card.imageAlt}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl lg:text-2xl">
                    {card.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base lg:text-lg text-foreground/80">
                    {card.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
