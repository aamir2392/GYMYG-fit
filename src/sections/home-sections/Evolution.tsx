"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useInView } from "react-intersection-observer";
import { EvolutionCard } from "../../components/cards/EvolutionCard";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import { type EvolutionSection as EvolutionData } from "@/types/evolution";

interface EvolutionSectionProps {
  data?: EvolutionData | null;
  isLoading?: boolean;
}

export default function EvolutionSection({
  data: propData,
  isLoading = false,
}: EvolutionSectionProps = {}) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [data, setData] = useState<EvolutionData | null>(null);
  const [loading, setLoading] = useState(true);

  // Fallback data for when Sanity is not available (original data)
  const fallbackData: EvolutionData = {
    _id: "fallback",
    title: "The Next Step in the Evolution of Virtual Fitness",
    description:
      "Say goodbye to clunky Zoom sessions and uninspiring pre-recorded workouts. GYMYG delivers a next-gen fitness experience—combining expert personal training, real-time motivation, and the power of group energy in every session.",
    evolutionCards: [
      {
        title: "Live Interactive Training",
        description:
          "Real-time personal training with expert trainers who can see and guide you through every movement.",
        image: {
          asset: {
            _id: "fallback-card-1",
            url: "/assets/personal-training.jpg",
          },
          alt: "Personal training session",
        },
        iconType: "video",
      },
      {
        title: "Group Energy & Motivation",
        description:
          "Join live group classes with members worldwide and experience the power of community fitness.",
        image: {
          asset: {
            _id: "fallback-card-2",
            url: "/assets/group-fitness.jpg",
          },
          alt: "Group fitness class",
        },
        iconType: "users",
      },
      {
        title: "Real-Time Feedback",
        description:
          "Get instant form corrections and personalized modifications from certified trainers during your workout.",
        image: {
          asset: {
            _id: "fallback-card-3",
            url: "/assets/trainer-feedback.jpg",
          },
          alt: "Trainer providing feedback",
        },
        iconType: "messageCircle",
      },
    ],
    featuredTitle: "The Hybrid Approach to Fitness",
    featuredDescription:
      "GYMYG is the first fitness app to offer a hybrid of personal training and group fitness classes on-demand, bringing some of the best trainers from around the world into your living room.",
    featuredQuote:
      "Not only can you see and talk with your trainers and other members, they can see you and offer on-the-spot modifications, customizing your workout in real time.",
    featuredImage: {
      asset: {
        _id: "fallback-featured",
        url: "/assets/trainer-feedback.jpg",
      },
      alt: "Trainer providing real-time feedback",
    },
    iosDownloadUrl: "https://apps.apple.com/us/app/gymyg-workout/id1660562430",
    androidDownloadUrl:
      "https://play.google.com/store/apps/details?id=com.gymygclient&pcampaignid=web_share",
    communityTitle: "Join our global community",
    communityDescription:
      "Connect with like-minded fitness enthusiasts worldwide",
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
    const fetchEvolutionData = async () => {
      try {
        const query = `*[_type == "evolution" && isActive == true][0]{
          _id,
          title,
          description,
          evolutionCards[]{
            title,
            description,
            image {
              asset->{
                _id,
                url
              },
              alt
            },
            iconType
          },
          featuredTitle,
          featuredDescription,
          featuredQuote,
          featuredImage {
            asset->{
              _id,
              url
            },
            alt
          },
          iosDownloadUrl,
          androidDownloadUrl,
          communityTitle,
          communityDescription,
          isActive,
          _updatedAt
        }`;

        const result = await client.fetch(query);
        setData(result);
      } catch (error) {
        console.error("Error fetching evolution data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvolutionData();
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
      <section className="py-12 lg:py-24 px-4 pb-24 md:px-6 lg:px-8 bg-gradient-to-br from-white to-gray-50">
        <div className="lg:container mx-auto">
          {/* Header skeleton */}
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="h-8 md:h-10 lg:h-12 bg-gray-200 rounded w-3/4 mx-auto mb-6 animate-pulse"></div>
            <div className="space-y-2">
              <div className="h-4 md:h-5 bg-gray-200 rounded w-full animate-pulse"></div>
              <div className="h-4 md:h-5 bg-gray-200 rounded w-5/6 mx-auto animate-pulse"></div>
              <div className="h-4 md:h-5 bg-gray-200 rounded w-4/6 mx-auto animate-pulse"></div>
            </div>
          </div>

          {/* Cards skeleton */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {[1, 2, 3].map((index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 animate-pulse"></div>
                <div className="h-6 bg-gray-200 rounded w-3/4 mb-3 animate-pulse"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded w-full animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6 animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Featured section skeleton */}
          <div className="bg-gray-800 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="p-8 md:p-12">
                <div className="h-8 bg-gray-200 rounded w-3/4 mb-4 animate-pulse"></div>
                <div className="space-y-2 mb-6">
                  <div className="h-4 bg-gray-200 rounded w-full animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6 animate-pulse"></div>
                </div>
                <div className="bg-white/10 rounded-xl p-6 mb-6">
                  <div className="h-4 bg-gray-200 rounded w-full animate-pulse"></div>
                </div>
                <div className="space-y-4">
                  <div className="h-12 bg-gray-200 rounded-full animate-pulse"></div>
                  <div className="h-12 bg-gray-200 rounded-full animate-pulse"></div>
                </div>
              </div>
              <div className="h-64 lg:h-auto bg-gray-200 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={ref}
      className="py-12 lg:py-24 px-4 pb-24 md:px-6 lg:px-8 bg-gradient-to-br from-white to-gray-50 overflow-hidden"
    >
      <div className="lg:container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2
            className={cn(
              "text-xl md:text-3xl lg:text-4xl font-bold mb-6 transform transition-all duration-700",
              inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            )}
          >
            {content.title}
          </h2>
          <p
            className={cn(
              "text-sm md:text-base lg:text-xl leading-relaxed text-gray-700 max-w-7xl mx-auto text-center transform transition-all duration-700 delay-100",
              inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            )}
          >
            {content.description}
          </p>
        </div>

        {/* Value Proposition Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {content.evolutionCards.map((card, index) => (
            <EvolutionCard
              key={index}
              title={card.title}
              description={card.description}
              imageSrc={card.image.asset.url}
              imageAlt={card.image.alt || card.title}
              iconType={card.iconType}
              delay={200 + index * 100}
              inView={inView}
            />
          ))}
        </div>

        {/* Featured Highlight */}
        <div
          className={cn(
            "bg-gradient-to-r from-gray-900 to-black relative text-white rounded-2xl shadow-xl transform transition-all duration-700 delay-500",
            inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          )}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 relative gap-8">
            <div className="p-8 md:p-12 flex flex-col max-sm:order-2 relative justify-center md:text-center lg:text-left">
              <h3 className="text-xl md:text-3xl font-bold max-sm:text-center mb-4">
                {content.featuredTitle}
              </h3>

              <p className="text-gray-300 mb-6 max-sm:text-center">
                {content.featuredDescription}
              </p>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6">
                <p className="text-white">
                  &ldquo;{content.featuredQuote}&rdquo;
                </p>
              </div>

              <div className="flex flex-col items-start md:justify-center md:flex-row lg:items-center gap-4">
                <Button
                  size="lg"
                  onClick={() => {
                    window.open(content.iosDownloadUrl, "_blank");
                  }}
                  className="bg-primary hover:bg-primary/80 text-white w-full py-6 rounded-full flex max-sm:justify-start items-center"
                >
                  <FaApple className="mr-2 size-5" /> DOWNLOAD FOR iOS
                </Button>
                <Button
                  size="lg"
                  onClick={() => {
                    window.open(content.androidDownloadUrl, "_blank");
                  }}
                  className="bg-white py-6 text-black hover:bg-gray-200 rounded-full w-full flex max-sm:justify-start items-center"
                >
                  <FaGooglePlay className="mr-2 size-5" /> DOWNLOAD FOR ANDROID
                </Button>
              </div>
            </div>
            <div className="absolute -bottom-24 right-0 w-5/6 bg-primary-100 sm:hidden text-center text-white p-4 mb-4 rounded-xl shadow-lg">
              <p className="font-bold text-base">{content.communityTitle}</p>
              <p className="text-sm">{content.communityDescription}</p>
            </div>

            <div className="relative md:h-auto">
              <Image
                src={content.featuredImage.asset.url}
                alt={content.featuredImage.alt || "Featured image"}
                width={500}
                height={600}
                className="h-[300px] md:h-full w-full object-cover rounded-2xl"
              />
              <div className="absolute max-sm:hidden -bottom-6 -right-1 md:-right-1 md:-bottom-10 bg-primary text-white p-4 rounded-xl shadow-lg max-w-xs">
                <p className="font-bold text-lg">{content.communityTitle}</p>
                <p className="text-sm">{content.communityDescription}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
