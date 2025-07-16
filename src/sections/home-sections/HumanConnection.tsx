"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { getIcon } from "@/lib/iconMap";
import { type HumanConnectionSection } from "@/types/humanConnection";

export default function HumanConnection() {
  const [humanConnectionData, setHumanConnectionData] =
    useState<HumanConnectionSection | null>(null);
  const [loading, setLoading] = useState(true);

  // Static fallback data
  const staticData = {
    title: "BRINGING HUMAN CONNECTION TO VIRTUAL TRAINING",
    description1:
      "We make it our priority to provide genuine human connection in every workout. Unlike many of the platforms with fancy virtual filters and one-way communication, GYMYG is all about getting to know your trainer and fellow members.",
    description2:
      "At GYMYG, you're joining a global community of fitness enthusiasts, where trainers can address your form in real-time and fellow members can cheer you on. We're bringing back the human element that's been missing from virtual workouts.",
    mainImageAlt: "Fitness enthusiasts",
    features: [
      {
        icon: "users",
        title: "Global Community",
        description: "Connect with fitness enthusiasts worldwide",
      },
      {
        icon: "activity",
        title: "Real-time Interaction",
        description: "Two-way communication with trainers",
      },
    ],
  };

  useEffect(() => {
    const fetchHumanConnectionData = async () => {
      try {
        const query = `*[_type == "humanConnection" && isActive == true][0]{
          _id,
          title,
          description1,
          description2,
          mainImage {
            asset->{
              _id,
              url
            }
          },
          mainImageAlt,
          features[] {
            icon,
            title,
            description
          }
        }`;

        const data = await client.fetch(query);
        setHumanConnectionData(data);
      } catch (error) {
        console.error("Error fetching human connection data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHumanConnectionData();
  }, []);

  // Use Sanity data if available, otherwise fall back to static data
  const dataToRender = humanConnectionData || staticData;

  if (loading) {
    return (
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-r from-neutral-100 to-neutral-200">
        <div className="lg:container mx-auto">
          <div className="animate-pulse">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="h-8 bg-gray-200 rounded w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-2/3"></div>
              </div>
              <div className="h-96 bg-gray-200 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-r from-neutral-100 to-neutral-200">
      <div className="lg:container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-xl max-md:text-center md:text-3xl lg:text-4xl font-bold">
              {dataToRender.title.split(" ").map((word, index) =>
                word === "HUMAN" || word === "CONNECTION" ? (
                  <span key={index} className="text-primary">
                    {word}{" "}
                  </span>
                ) : (
                  word + " "
                )
              )}
            </h2>

            <p className="text-sm md:text-base lg:text-lg text-gray-700">
              {dataToRender.description1}
            </p>

            <p className="text-sm md:text-base lg:text-lg text-gray-700">
              {dataToRender.description2}
            </p>

            {dataToRender.features.map((feature, index) => {
              const IconComponent = getIcon(feature.icon);
              return (
                <div key={index} className="flex items-center gap-4 mt-8">
                  <div className="bg-primary p-3 rounded-full">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{feature.title}</h3>
                    <p className="text-gray-700 text-sm md:text-base lg:text-lg">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex justify-center lg:justify-end  lg:h-[600px]">
            <Image
              src={
                humanConnectionData?.mainImage
                  ? urlFor(humanConnectionData.mainImage).url()
                  : "/assets/fitness-enthusiasts.jpg"
              }
              alt={dataToRender.mainImageAlt}
              width={600}
              height={600}
              className="rounded-lg h-full object-cover  md:h-[650px] md:object-cover md:object-top lg:object-cover lg:object-top shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
