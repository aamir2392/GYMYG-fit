"use client";
import { useState, useEffect } from "react";
import FeatureCard from "@/components/cards/FeatureCard";
import { client } from "@/sanity/lib/client";
import { type FeaturesSection as FeaturesData } from "@/types/features";

interface FeaturesSectionProps {
  data?: FeaturesData | null;
  isLoading?: boolean;
}

export default function FeaturesSection({
  data: propData,
  isLoading = false,
}: FeaturesSectionProps = {}) {
  const [data, setData] = useState<FeaturesData | null>(null);
  const [loading, setLoading] = useState(true);

  // Fallback data for when Sanity is not available (original data)
  const fallbackData: FeaturesData = {
    _id: "fallback",
    sectionTitle: undefined, // Optional field - no default title
    sectionDescription: undefined, // Optional field - no default description
    featureCards: [
      {
        title: "TRAIN LIVE. LIVE BETTER.",
        description:
          "The virtual fitness revolution is here. GYMYG brings together the best trainers from around the world to create a unique and personalized fitness experience. Our trainers are certified, experienced, and ready to help you achieve your fitness goals.",
        image: {
          asset: {
            _id: "fallback-feature-1",
            url: "/assets/train-live-better.jpg",
          },
        },
        imageAlt: "Girl Training with Trainer",
        bgColor: "bg-gray-800",
        textColor: "text-white",
      },
      {
        title: "PERSONALIZED GROUP FITNESS",
        description:
          "Our revolutionary hybrid of group fitness and personal training. Enjoy class-like energy while receiving personalized attention. Experience the benefits of both worlds with our certified trainers.",
        image: {
          asset: {
            _id: "fallback-feature-2",
            url: "/assets/gymyg-for-trainers.jpg",
          },
        },
        imageAlt: "Personalized group fitness session",
        bgColor: "bg-black",
        textColor: "text-white",
      },
    ],
    isActive: true,
    _updatedAt: new Date().toISOString(),
  };

  useEffect(() => {
    // If data is provided via props (from parent), use it
    if (propData !== undefined) {
      setData(propData);
      setLoading(isLoading);
      return;
    }

    // Otherwise fetch from Sanity
    const fetchFeaturesData = async () => {
      try {
        const query = `*[_type == "features" && isActive == true][0]{
          _id,
          sectionTitle,
          sectionDescription,
          featureCards[]{
            title,
            description,
            image {
              asset->{
                _id,
                url
              }
            },
            imageAlt,
            bgColor,
            textColor
          },
          isActive,
          _updatedAt
        }`;

        const result = await client.fetch(query);
        setData(result);
      } catch (error) {
        console.error("Error fetching features data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturesData();
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
      <section className="py-20 px-4 md:px-6 lg:px-8">
        <div className="lg:container mx-auto">
          {/* Optional Header skeleton */}
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="h-8 md:h-10 lg:h-12 bg-gray-200 rounded w-3/4 mx-auto mb-6 animate-pulse"></div>
            <div className="space-y-2">
              <div className="h-4 md:h-5 bg-gray-200 rounded w-full animate-pulse"></div>
              <div className="h-4 md:h-5 bg-gray-200 rounded w-5/6 mx-auto animate-pulse"></div>
            </div>
          </div>

          {/* Cards skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map((index) => (
              <div
                key={index}
                className="h-96 bg-gray-200 rounded-lg animate-pulse"
              ></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-4 md:px-6 lg:px-8">
      <div className="lg:container mx-auto">
        {/* Optional Section Header */}
        {(content.sectionTitle || content.sectionDescription) && (
          <div className="text-center mb-16 max-w-3xl mx-auto">
            {content.sectionTitle && (
              <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-6">
                {content.sectionTitle}
              </h2>
            )}
            {content.sectionDescription && (
              <p className="text-sm md:text-base lg:text-xl leading-relaxed text-gray-700">
                {content.sectionDescription}
              </p>
            )}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {content.featureCards.map((card, index) => (
            <FeatureCard
              key={index}
              title={card.title}
              description={card.description}
              imageUrl={card.image.asset.url}
              imageAlt={card.imageAlt}
              bgColor={card.bgColor}
              textColor={card.textColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
