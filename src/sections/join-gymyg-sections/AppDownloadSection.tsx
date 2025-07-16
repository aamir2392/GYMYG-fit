"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useInView, useAnimation } from "framer-motion";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import Link from "next/link";
import Badge from "@/components/Badge";
import { urlFor } from "@/sanity/lib/image";
import type { AppDownloadSectionData } from "@/types/appDownloadSection";

interface AppDownloadSectionProps {
  data?: AppDownloadSectionData | null;
  isLoading?: boolean;
}

export default function AppDownloadSection({
  data,
  isLoading = false,
}: AppDownloadSectionProps) {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  // Fallback data for when Sanity is not available
  const fallbackData: AppDownloadSectionData = {
    _id: "fallback",
    _type: "appDownloadSection",
    badgeText: "Mobile Experience",
    title: "Download",
    primaryColorTitle: "GYMYG",
    subtitle:
      "Take your fitness journey to the next level with our mobile app. Track workouts, join live classes, and connect with trainers - all from your phone.",
    mockupImages: {
      iosMockup: {
        _type: "image",
        asset: null,
        alt: "GYMYG iOS App",
      },
      androidMockup: {
        _type: "image",
        asset: null,
        alt: "GYMYG Android App",
      },
    },
    contentSections: [
      {
        title: "Fitness at Your Static Fingertips",
        description:
          "Access hundreds of workout routines, track your progress, and connect with trainers - all from your mobile device.",
      },
      {
        title: "Live Classes & Community",
        description:
          "Join live workout sessions and connect with a community of fitness enthusiasts who share your passion.",
      },
    ],
    downloadSection: {
      downloadTitle: "Download Now",
      appStoreLink: "https://apps.apple.com/us/app/gymyg-workout/id1660562430",
      playStoreLink:
        "https://play.google.com/store/apps/details?id=com.gymygclient&pcampaignid=web_share",
    },
  };

  // Use fallback data only when not loading and no data from Sanity
  const content = !isLoading && !data ? fallbackData : data;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8 },
    },
  };

  // Skeleton loading component
  const SkeletonLoader = () => (
    <section
      id="app-download-section"
      ref={ref}
      className="md:py-24 py-12 bg-gray-50"
    >
      <div className="container">
        {/* Header skeleton */}
        <div className="text-center mb-16 space-y-4">
          <div className="flex justify-center">
            <div className="h-8 w-40 bg-gray-200 rounded-full animate-pulse" />
          </div>
          <div className="h-12 w-80 bg-gray-200 rounded mx-auto animate-pulse" />
          <div className="space-y-2">
            <div className="h-4 w-96 bg-gray-200 rounded mx-auto animate-pulse" />
            <div className="h-4 w-72 bg-gray-200 rounded mx-auto animate-pulse" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Mockup images skeleton */}
          <div className="flex justify-center lg:justify-end relative">
            <div className="relative h-[200px] md:h-[500px] w-full">
              <div className="absolute inset-0 bg-gray-200 rounded-2xl animate-pulse" />
            </div>
            <div className="relative h-[200px] md:h-[500px] w-full">
              <div className="absolute inset-0 bg-gray-200 rounded-2xl animate-pulse" />
            </div>
          </div>

          {/* Content sections skeleton */}
          <div className="space-y-8 md:text-center lg:text-left">
            {[1, 2].map((i) => (
              <div key={i} className="space-y-4">
                <div className="h-8 w-64 bg-gray-200 rounded animate-pulse" />
                <div className="space-y-2">
                  <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
                  <div className="h-4 w-5/6 bg-gray-200 rounded animate-pulse" />
                </div>
              </div>
            ))}

            {/* Download buttons skeleton */}
            <div className="space-y-6 pt-4 w-full">
              <div className="h-6 w-32 bg-gray-200 rounded animate-pulse" />
              <div className="flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-4 w-full">
                <div className="h-12 w-48 bg-gray-200 rounded-lg animate-pulse" />
                <div className="h-12 w-48 bg-gray-200 rounded-lg animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  // Show skeleton while loading
  if (isLoading) {
    return <SkeletonLoader />;
  }

  // Don't render anything if no content is available
  if (!content) {
    return null;
  }

  // Get image URLs - use fallback images if Sanity images are not available
  const iosImageSrc = content.mockupImages?.iosMockup?.asset
    ? "url" in content.mockupImages.iosMockup.asset
      ? content.mockupImages.iosMockup.asset.url
      : urlFor(content.mockupImages.iosMockup).url()
    : "/assets/gymyg-ios-mockup.png";

  const androidImageSrc = content.mockupImages?.androidMockup?.asset
    ? "url" in content.mockupImages.androidMockup.asset
      ? content.mockupImages.androidMockup.asset.url
      : urlFor(content.mockupImages.androidMockup).url()
    : "/assets/gymyg-andriod-mockup.png";

  return (
    <section
      id="app-download-section"
      ref={ref}
      className="md:py-24 py-12 bg-gray-50"
    >
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="text-center mb-16 space-y-4"
        >
          <motion.div variants={itemVariants}>
            <Badge text={content.badgeText} showDots />
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-xl md:text-4xl font-bold text-gray-900"
          >
            {content.title}
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="max-w-2xl mx-auto text-gray-600 text-base md:text-lg"
          >
            {content.subtitle}
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex justify-center lg:justify-end relative"
          >
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 3,
                ease: "easeInOut",
              }}
              className="relative h-[200px] md:h-[500px] w-full"
            >
              <Image
                src={iosImageSrc}
                alt={content.mockupImages?.iosMockup?.alt || "GYMYG iOS App"}
                fill
                className="object-contain"
              />
            </motion.div>

            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 3.5,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="relative h-[200px] md:h-[500px] w-full"
            >
              <Image
                src={androidImageSrc}
                alt={
                  content.mockupImages?.androidMockup?.alt ||
                  "GYMYG Android App"
                }
                fill
                className="object-contain"
              />
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="space-y-8 md:text-center lg:text-left"
          >
            {content.contentSections?.map((section, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="space-y-4"
              >
                <h3 className="text-xl md:text-3xl font-bold text-gray-900">
                  {section.title}
                </h3>
                <p className="text-gray-600 text-base md:text-lg">
                  {section.description}
                </p>
              </motion.div>
            ))}

            <motion.div
              variants={itemVariants}
              className="space-y-6 pt-4 w-full"
            >
              <h3 className="text-xl font-bold text-gray-900">
                {content.downloadSection?.downloadTitle}
              </h3>
              <div className="flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-4 w-full">
                <Link
                  href={content.downloadSection?.appStoreLink || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black max-sm:w-full hover:bg-gray-900 text-white rounded-lg px-6 py-3 flex items-center justify-center gap-3 border border-gray-600 transition-all duration-200 hover:border-primary/50 group w-48"
                >
                  <FaApple className="w-6 h-6 text-white group-hover:scale-110 transition-transform flex-shrink-0" />
                  <div className="flex flex-col items-start min-w-0">
                    <span className="text-[10px] text-gray-300 leading-tight">
                      Download on
                    </span>
                    <span className="text-base font-semibold leading-tight text-white">
                      App Store
                    </span>
                  </div>
                </Link>

                <Link
                  href={content.downloadSection?.playStoreLink || "#"}
                  className="bg-black max-sm:w-full hover:bg-gray-900 text-white rounded-lg px-6 py-3 flex items-center justify-center gap-3 border border-gray-600 transition-all duration-200 hover:border-primary/50 group w-48"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGooglePlay className="w-5 h-5 text-white group-hover:scale-110 transition-transform flex-shrink-0" />
                  <div className="flex flex-col items-start min-w-0">
                    <span className="text-[10px] text-gray-300 leading-tight">
                      GET IT ON
                    </span>
                    <span className="text-base font-semibold leading-tight text-white">
                      Google Play
                    </span>
                  </div>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
