"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

// Sanity integration imports
import { client } from "@/sanity/lib/client";
import { trainerMapSectionQuery } from "@/sanity/lib/queries";
import { TrainerMapSectionData } from "@/types/trainerMapSection";

export default function TrainerMapSection() {
  const [isVisible, setIsVisible] = useState(false);

  // Sanity data management states
  const [trainerMapData, setTrainerMapData] =
    useState<TrainerMapSectionData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsVisible(true);

    // Async function to fetch trainer map data
    const fetchTrainerMapData = async () => {
      try {
        // Execute GROQ query to get active trainer map section
        const data = await client.fetch<TrainerMapSectionData>(
          trainerMapSectionQuery
        );

        if (data) {
          setTrainerMapData(data);
        } else {
          setError("No active trainer map section found");
        }
      } catch (err) {
        console.error("Error fetching trainer map data:", err);
        setError("Failed to load trainer map section data");
      } finally {
        setIsLoading(false);
      }
    };

    fetchTrainerMapData();

    // Intersection observer for animation
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("trainer-map-section");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  /**
   * Loading State Render
   */
  if (isLoading) {
    return (
      <section
        id="trainer-map-section"
        className="py-20 px-4 md:px-6 lg:px-8 bg-gray-100"
      >
        <div className="lg:container mx-auto">
          <div className="animate-pulse">
            {/* Title skeleton */}
            <div className="text-center mb-12">
              <div className="space-y-3 mb-4">
                <div className="h-8 md:h-10 lg:h-12 bg-gray-300 rounded-lg mx-auto max-w-2xl"></div>
                <div className="h-8 md:h-10 lg:h-12 bg-gray-300 rounded-lg mx-auto max-w-xl"></div>
              </div>
              {/* Description skeleton */}
              <div className="space-y-2 max-w-3xl mx-auto">
                <div className="h-4 md:h-5 bg-gray-300 rounded-lg"></div>
                <div className="h-4 md:h-5 bg-gray-300 rounded-lg"></div>
                <div className="h-4 md:h-5 bg-gray-300 rounded-lg mx-auto max-w-2xl"></div>
              </div>
            </div>

            {/* Map skeleton */}
            <div className="relative">
              <div className="w-full h-[250px] md:h-[400px] lg:h-[600px] bg-gray-300 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  /**
   * Error/Fallback State Render
   */
  if (error || !trainerMapData) {
    // Fallback to default content if Sanity data is not available
    return (
      <section
        id="trainer-map-section"
        className="py-20 px-4 md:px-6 lg:px-8 bg-gray-100"
      >
        <div className="lg:container mx-auto">
          <div
            className={cn(
              "text-center mb-12 transform transition-all duration-700",
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            )}
          >
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-4">
              SOME OF THE LEADING TRAINERS <br className="hidden md:block" />
              AROUND THE WORLD
            </h2>
            <p className="text-sm md:text-base lg:text-lg max-w-3xl mx-auto text-gray-700">
              Connect with the top-notch trainers of the fitness industry around
              the world. Experience a diverse range of training styles and
              expertise. Join GYMYG today and become part of a global community
              of fitness pros.
            </p>
          </div>

          <div
            className={cn(
              "relative transform transition-all duration-1000 delay-300",
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            )}
          >
            <div className="relative w-full h-[250px] md:h-[400px] lg:h-[600px]">
              <Image
                src="/assets/world-map-trainers.png"
                alt="World map with trainers"
                fill
                className="object-fill md:object-contain "
              />
            </div>
          </div>
        </div>
      </section>
    );
  }

  /**
   * Main Render with Sanity Data
   */
  return (
    <section
      id="trainer-map-section"
      className="py-20 px-4 md:px-6 lg:px-8 bg-gray-100"
    >
      <div className="lg:container mx-auto">
        <div
          className={cn(
            "text-center mb-12 transform transition-all duration-700",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          )}
        >
          <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-4">
            {trainerMapData.title.split(" ").map((word, index, array) => {
              // Split title into lines for responsive display
              const midPoint = Math.ceil(array.length / 2);
              if (index === midPoint) {
                return (
                  <span key={index}>
                    <br className="hidden md:block" />
                    {word}{" "}
                  </span>
                );
              }
              return word + " ";
            })}
          </h2>
          <p className="text-sm md:text-base lg:text-lg max-w-3xl mx-auto text-gray-700">
            {trainerMapData.description}
          </p>
        </div>

        <div
          className={cn(
            "relative transform transition-all duration-1000 delay-300",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          )}
        >
          <div className="relative w-full h-[250px] md:h-[400px] lg:h-[600px]">
            <Image
              src={trainerMapData.mapImage.asset.url}
              alt={trainerMapData.mapImage.alt || "World map with trainers"}
              fill
              className="object-fill md:object-contain "
            />

            {/* Future: Render trainer markers if available */}
            {trainerMapData.trainers && trainerMapData.trainers.length > 0 && (
              <>
                {trainerMapData.trainers.map((trainer, index) => (
                  <div
                    key={index}
                    className="absolute w-4 h-4 bg-primary rounded-full border-2 border-white shadow-lg transform -translate-x-1/2 -translate-y-1/2 hover:scale-125 transition-transform duration-200 cursor-pointer"
                    style={{
                      top: trainer.position.top,
                      left: trainer.position.left,
                    }}
                    title={`${trainer.name} - ${trainer.location}`}
                  />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
