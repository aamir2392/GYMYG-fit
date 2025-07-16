"use client";

import { testimonials } from "@/constants/testimonials";
import Image from "next/image";
import { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { type TestimonialSectionData } from "@/types/testimonialSection";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselApi,
} from "@/components/ui/carousel";

export default function TestimonialCarousel() {
  const [isLgScreen, setIsLgScreen] = useState(false);
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [testimonialData, setTestimonialData] =
    useState<TestimonialSectionData | null>(null);
  const [loading, setLoading] = useState(true);

  // Static fallback data
  const staticData = {
    sectionTitle: "What Our Clients Say",
    sectionDescription:
      "Discover why businesses trust us to deliver exceptional results and outstanding service.",
    testimonials: testimonials,
  };

  useEffect(() => {
    const fetchTestimonialData = async () => {
      try {
        const query = `*[_type == "testimonialSection" && isActive == true][0]{
          _id,
          sectionTitle,
          sectionDescription,
          testimonials[] {
            name,
            position,
            content,
            rating,
            image {
              asset->{
                _id,
                url
              }
            },
            imageAlt
          }
        }`;

        const data = await client.fetch(query);
        setTestimonialData(data);
      } catch (error) {
        console.error("Error fetching testimonial data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonialData();
  }, []);

  // Use Sanity data if available, otherwise fall back to static data
  const dataToRender = testimonialData || staticData;

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLgScreen(window.innerWidth >= 1024); // lg breakpoint is 1024px
    };

    // Check on mount
    checkScreenSize();

    // Add event listener
    window.addEventListener("resize", checkScreenSize);

    // Cleanup
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  if (loading) {
    return (
      <section className="py-20 px-4 md:py-28 bg-gray-100">
        <div className="w-full max-w-7xl mx-auto">
          <div className="animate-pulse">
            <div className="text-center mb-12">
              <div className="h-8 bg-gray-200 rounded w-1/2 mx-auto mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="h-64 bg-gray-200 rounded"></div>
              <div className="h-64 bg-gray-200 rounded"></div>
              <div className="h-64 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-4 md:py-28 bg-gray-100">
      <div className="w-full max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {dataToRender.sectionTitle}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {dataToRender.sectionDescription}
          </p>
        </div>

        <div className="px-4 md:px-12">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
              slidesToScroll: 1,
              watchDrag: !isLgScreen, // false on lg screens, true on smaller screens
            }}
            className="w-full"
          >
            <CarouselContent>
              {dataToRender.testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <TestimonialCard testimonial={testimonial} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden lg:flex" />
            <CarouselNext className="hidden lg:flex" />
          </Carousel>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index + 1 === current
                  ? "bg-primary scale-110"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              onClick={() => api?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface TestimonialCardProps {
  testimonial: {
    id?: number;
    name: string;
    position: string;
    image?:
      | string
      | {
          asset: {
            _ref: string;
            _type: string;
          };
          _type: string;
        };
    imageAlt?: string;
    content: string;
    rating: number;
  };
}

function TestimonialCard({ testimonial }: TestimonialCardProps) {
  // Determine the image source (Sanity or static)
  const imageSource = testimonial.image
    ? typeof testimonial.image === "string"
      ? testimonial.image
      : urlFor(testimonial.image).url()
    : null;

  return (
    <div className="h-full">
      <div className="bg-white rounded-xl shadow-sm h-full p-6 flex flex-col items-center text-center hover:-translate-y-1 hover:shadow-lg transition-all duration-200">
        <div className="relative w-20 h-20 rounded-full overflow-hidden mb-4 border-4 border-white shadow-md">
          {imageSource ? (
            <Image
              src={imageSource}
              alt={testimonial.imageAlt || testimonial.name}
              fill
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full bg-primary/10 flex items-center justify-center">
              <span className="text-primary font-semibold text-xl">
                {testimonial.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")
                  .toUpperCase()}
              </span>
            </div>
          )}
        </div>

        <h3 className="font-bold text-lg mb-1">{testimonial.name}</h3>
        <p className="text-gray-500 text-sm mb-4">{testimonial.position}</p>
        <p className="text-gray-600 mb-4 text-sm flex-grow">
          {testimonial.content}
        </p>

        <div className="flex">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <svg
              key={i}
              className="w-5 h-5 text-primary fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          ))}
        </div>
      </div>
    </div>
  );
}
