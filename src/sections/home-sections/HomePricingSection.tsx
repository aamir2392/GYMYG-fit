"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { type HomePricingSection as HomePricingData } from "@/types/homePricing";

interface PricingImageCardProps {
  src: string;
  alt: string;
}

const pricingImages = [
  { src: "/assets/man-running.jpg", alt: "man-running" },
  { src: "/assets/training-alone.jpg", alt: "training-alone" },
];

function HomePricingImageCard({ src, alt }: PricingImageCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-xl p-1 h-64 md:h-96 border border-gray-200 hover:shadow-2xl transition-shadow">
      <Image
        src={src}
        alt={alt}
        width={500}
        height={500}
        className="h-full w-full object-cover rounded-md"
      />
    </div>
  );
}

export default function HomePricingSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [pricingData, setPricingData] = useState<HomePricingData | null>(null);
  const [loading, setLoading] = useState(true);

  // Static fallback data
  const staticData = {
    title:
      "LOWER PRICE THAN PERSONAL TRAINING, HIGHER VALUE THAN GROUP FITNESS",
    description:
      "Compare the fitness journey to traditional personal training and group fitness classes. With GYMYG, you get the best of both worlds at a price point that makes sense. Our trainers provide personalized attention in a group setting, giving you more value for your money.",
    quote:
      "Experience focused coaching in a dynamic group setting. GYMYG combines expert support with the energy of a community—helping you train smarter, not just harder. Join us for as little as $15 per class, or unlock unlimited access for just $150 per month.",
    primaryButton: {
      text: "START YOUR FREE TRIAL",
      link: "/join-gymyg",
    },
    secondaryButton: {
      text: "VIEW ALL PRICING OPTIONS",
      link: "/packages",
    },
    pricingImages: pricingImages.map((img) => ({
      image: { asset: { _ref: img.src, _type: "reference" }, _type: "image" },
      alt: img.alt,
    })),
  };

  useEffect(() => {
    const fetchPricingData = async () => {
      try {
        const query = `*[_type == "homePricing" && isActive == true][0]{
          _id,
          title,
          description,
          quote,
          primaryButton {
            text,
            link
          },
          secondaryButton {
            text,
            link
          },
          pricingImages[] {
            image {
              asset->{
                _id,
                url
              }
            },
            alt
          }
        }`;

        const data = await client.fetch(query);
        setPricingData(data);
      } catch (error) {
        console.error("Error fetching pricing data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPricingData();
  }, []);

  // Use Sanity data if available, otherwise fall back to static data
  const dataToRender = pricingData || staticData;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("pricing-section");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  if (loading) {
    return (
      <section id="pricing-section" className="py-20 px-4 md:px-6 lg:px-8">
        <div className="lg:container mx-auto">
          <div className="animate-pulse">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="h-8 bg-gray-200 rounded w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-24 bg-gray-200 rounded"></div>
                <div className="flex gap-4">
                  <div className="h-10 bg-gray-200 rounded w-32"></div>
                  <div className="h-10 bg-gray-200 rounded w-32"></div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="h-64 bg-gray-200 rounded"></div>
                <div className="h-64 bg-gray-200 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="pricing-section" className="py-20 px-4 md:px-6 lg:px-8">
      <div className="lg:container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            className={cn(
              "space-y-6 transform transition-all duration-700",
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            )}
          >
            <h2 className="text-xl max-md:text-center md:text-3xl lg:text-4xl font-bold">
              {dataToRender.title.split(" ").map((word, index) =>
                word === "LOWER" ||
                word === "PRICE" ||
                word === "HIGHER" ||
                word === "VALUE" ? (
                  <span key={index} className="text-primary">
                    {word}{" "}
                  </span>
                ) : (
                  word + " "
                )
              )}
            </h2>

            <p className="text-sm md:text-base lg:text-lg text-gray-700">
              {dataToRender.description}
            </p>

            <div className="bg-gray-50 p-6 rounded-lg shadow-md border-l-4 border-primary">
              <p className="text-sm md:text-base lg:text-lg text-gray-700">
                &quot;{dataToRender.quote}&quot;
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => {
                  window.location.href = dataToRender.primaryButton.link;
                }}
                className="bg-primary hover:bg-primary-100 text-white"
              >
                {dataToRender.primaryButton.text}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-black text-black hover:bg-black hover:text-white"
                onClick={() => {
                  window.location.href = dataToRender.secondaryButton.link;
                }}
              >
                {dataToRender.secondaryButton.text}
              </Button>
            </div>
          </div>

          <div
            className={cn(
              "grid grid-cols-1 md:grid-cols-2 gap-6 transform transition-all duration-1000 delay-300",
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            )}
          >
            {dataToRender.pricingImages.map((img, idx) => (
              <HomePricingImageCard
                key={idx}
                src={
                  pricingData && typeof img.image === "object"
                    ? urlFor(img.image).url()
                    : pricingImages[idx]?.src || ""
                }
                alt={img.alt}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
