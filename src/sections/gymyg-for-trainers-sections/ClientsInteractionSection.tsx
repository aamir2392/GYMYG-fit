"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { PortableText } from "@portabletext/react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { clientsInteractionQuery } from "@/sanity/lib/queries";
import { ClientsInteractionData } from "@/types/clientsInteraction";

interface ClientSectionProps {
  data?: ClientsInteractionData | null;
  isLoading?: boolean;
}

export default function ClientSection({
  data: propData,
  isLoading = false,
}: ClientSectionProps = {}) {
  const [data, setData] = useState<ClientsInteractionData | null>(null);
  const [loading, setLoading] = useState(true);

  const [section1Ref, section1InView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [section2Ref, section2InView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // Fallback data for when Sanity is not available
  const fallbackData: ClientsInteractionData = {
    _id: "fallback",
    _type: "clientsInteraction",
    sectionId: "clients-interaction",
    isActive: true,
    firstBlock: {
      title: "CLIENTS COME TO YOU",
      description: [
        {
          _type: "block",
          _key: "fallback1",
          children: [
            {
              _type: "span",
              _key: "fallback1-1",
              text: "If you're a new trainer, GYMYG can serve as some of your early training experience without having to wait until you have clients of your own.",
              marks: [],
            },
          ],
          markDefs: [],
          style: "normal",
        },
        {
          _type: "block",
          _key: "fallback2",
          children: [
            {
              _type: "span",
              _key: "fallback2-1",
              text: "Already established trainers sometimes have inefficient gaps in their day while in between clients. GYMYG is the perfect place to earn some supplemental income in that downtime.",
              marks: [],
            },
          ],
          markDefs: [],
          style: "normal",
        },
      ],
      image: {
        asset: null,
      },
      imageAlt: "Trainer using laptop",
    },
    secondBlock: {
      title: "OUR CLIENTS ARE YOUR CLIENTS",
      description: [
        {
          _type: "block",
          _key: "fallback3",
          children: [
            {
              _type: "span",
              _key: "fallback3-1",
              text: "If you find clients through GYMYG who want to train more with you outside of our classes, ",
              marks: [],
            },
            {
              _type: "span",
              _key: "fallback3-2",
              text: "we encourage that to happen",
              marks: ["strong"],
            },
            {
              _type: "span",
              _key: "fallback3-3",
              text: ".",
              marks: [],
            },
          ],
          markDefs: [],
          style: "normal",
        },
        {
          _type: "block",
          _key: "fallback4",
          children: [
            {
              _type: "span",
              _key: "fallback4-1",
              text: "If a client lives near you and you want to train them in person, by all means— do so! If you still need to train clients virtually, we offer our platform, which allows you to still use our technology in your one-on-one sessions. You set the session rate and pay us a small flat fee to use our platform. (Coming soon!)",
              marks: [],
            },
          ],
          markDefs: [],
          style: "normal",
        },
      ],
      image: {
        asset: null,
      },
      imageAlt: "Trainer using laptop",
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
        const result = await client.fetch(clientsInteractionQuery);
        setData(result);
      } catch (error) {
        console.error("Error fetching clients interaction data:", error);
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
      <section className="w-full overflow-hidden bg-gradient-to-b from-white to-gray-50">
        {/* First Content Block Skeleton */}
        <div className="container mx-auto px-4 py-8 lg:py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Image Skeleton */}
            <div className="order-2 lg:order-1">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <div className="h-[300px] md:h-[500px] w-full bg-gray-200 animate-pulse"></div>
              </div>
            </div>

            {/* Text Skeleton */}
            <div className="order-1 lg:order-2 lg:max-w-xl w-full max-lg:container">
              <div className="h-8 md:h-10 bg-gray-200 rounded-lg mb-3 md:mb-4 lg:mb-6 animate-pulse"></div>
              <div className="space-y-3">
                <div className="h-5 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-5 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-5 bg-gray-200 rounded w-3/4 animate-pulse"></div>
              </div>
              <div className="mt-6 space-y-3">
                <div className="h-5 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-5 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-5 bg-gray-200 rounded w-2/3 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mx-auto px-4">
          <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
        </div>

        {/* Second Content Block Skeleton */}
        <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Text Skeleton */}
            <div className="lg:max-w-xl max-lg:container">
              <div className="h-8 md:h-10 bg-gray-200 rounded-lg mb-3 md:mb-4 lg:mb-6 animate-pulse"></div>
              <div className="space-y-3">
                <div className="h-5 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-5 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-5 bg-gray-200 rounded w-4/5 animate-pulse"></div>
              </div>
              <div className="mt-6 space-y-3">
                <div className="h-5 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-5 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-5 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-5 bg-gray-200 rounded w-3/4 animate-pulse"></div>
              </div>
            </div>

            {/* Image Skeleton */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <div className="relative h-[300px] md:h-[500px] w-full bg-gray-200 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Don't render anything if no content is available
  if (!content) {
    return null;
  }

  // Get image URLs - use fallback images if Sanity images are not available
  const firstBlockImageSrc: string = content.firstBlock?.image?.asset
    ? "url" in content.firstBlock.image.asset
      ? (content.firstBlock.image.asset.url as string)
      : urlFor(content.firstBlock.image).url()
    : "/assets/trainer-feedback.jpg";

  const secondBlockImageSrc: string = content.secondBlock?.image?.asset
    ? "url" in content.secondBlock.image.asset
      ? (content.secondBlock.image.asset.url as string)
      : urlFor(content.secondBlock.image).url()
    : "/assets/training-alone.jpg";

  return (
    <section className="w-full overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* First Content Block */}

      <div ref={section1Ref} className="container mx-auto px-4  py-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 items-center ">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={section1InView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <div className="h-[300px] md:h-[500px] w-full">
                <Image
                  src={firstBlockImageSrc}
                  alt={content.firstBlock?.imageAlt || "Trainer using laptop"}
                  fill
                  className="object-cover object-center transform transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={section1InView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="order-1 lg:order-2 lg:max-w-xl  w-full max-lg:container"
          >
            <h2 className="text-xl md:text-3xl text-center font-extrabold tracking-tight mb-3 md:mb-4 lg:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700">
              {content.firstBlock?.title}
            </h2>
            <div className="text-base lg:text-xl text-gray-700 leading-relaxed prose prose-lg max-w-none">
              <PortableText value={content.firstBlock?.description || []} />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Divider */}
      <div className="  mx-auto px-4">
        <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
      </div>

      {/* Second Content Block */}
      <div
        ref={section2Ref}
        className="container mx-auto px-4 py-16 md:py-24 lg:py-32"
      >
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={section2InView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className=" lg:max-w-xl max-lg:container"
          >
            <h2 className="text-xl md:text-3xl text-center font-extrabold tracking-tight mb-3 md:mb-4 lg:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700">
              {content.secondBlock?.title}
            </h2>
            <div className="text-base text-left lg:text-xl text-gray-700 leading-relaxed prose prose-lg max-w-none">
              <PortableText value={content.secondBlock?.description || []} />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={section2InView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl shadow-2xl transform transition-all duration-500">
              <div className="relative h-[300px] md:h-[500px] w-full">
                <Image
                  src={secondBlockImageSrc}
                  alt={content.secondBlock?.imageAlt || "Trainer using laptop"}
                  fill
                  className="object-cover object-center transform transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
