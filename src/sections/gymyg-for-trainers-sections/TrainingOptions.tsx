"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";
import Badge from "@/components/Badge";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { trainingOptionsQuery } from "@/sanity/lib/queries";
import { TrainingOptionsData } from "@/types/trainingOptions";
import { getIconComponent } from "@/lib/iconMap";

export default function TrainingOptions() {
  const [data, setData] = useState<TrainingOptionsData | null>(null);
  const [loading, setLoading] = useState(true);

  // Refs for scroll animations
  const [sectionRef, isInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Hover states
  const [hoverTrainer, setHoverTrainer] = useState(false);
  const [hoverEvent, setHoverEvent] = useState(false);

  // Fallback data for when Sanity is not available
  const fallbackData: TrainingOptionsData = {
    _id: "fallback",
    _type: "trainingOptions",
    isActive: true,
    sectionTitle: "Two ways to train on GYMYG",
    sectionDescription:
      "Choose your path and elevate your fitness journey with our premium training options",
    trainerCard: {
      badgeText: "Become a Pro",
      title: "BECOME A GYMYG TRAINER",
      description:
        "Join our elite team of fitness professionals and build your client base while accessing premium resources and support.",
      buttonText: "TAKE THE ASSESSMENT",
      buttonLink: "https://4rejngh79zj.typeform.com/to/dMK1ZSn2",
      image: {
        asset: null,
      },
      imageAlt: "Trainer working on laptop",
      icon: "Award",
    },
    eventCard: {
      badgeText: "Host an Event",
      title: "TEACH A SPECIAL EVENT",
      description:
        "Share your expertise through specialized workshops, classes, or seminars. Perfect for guest instructors and special programs.",
      buttonText: "FILL OUT THE FORM",
      buttonLink: "https://forms.gle/eiYfbbVTFb4RNaoc9",
      image: {
        asset: null,
      },
      imageAlt: "Fitness instructor teaching a class",
      icon: "Calendar",
    },
  };

  // Animation will be handled by motion.div directly based on isInView

  useEffect(() => {
    // Fetch from Sanity
    const fetchData = async () => {
      try {
        const result = await client.fetch(trainingOptionsQuery);
        setData(result);
      } catch (error) {
        console.error("Error fetching training options data:", error);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Use fallback data only when not loading and no data from Sanity
  const content = !loading && !data ? fallbackData : data;

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  const cardVariants = {
    hover: { scale: 1.02, transition: { duration: 0.3 } },
    tap: { scale: 0.98 },
  };

  // Show loading state
  if (loading) {
    return (
      <section className="lg:py-12 pb-8 px-4 overflow-hidden bg-gradient-to-b from-white to-gray-50">
        <div className="lg:container mx-auto text-center mb-8 lg:mb-16">
          <div className="h-8 md:h-10 bg-gray-200 rounded-lg mb-2 w-80 mx-auto animate-pulse"></div>
          <div className="h-5 bg-gray-200 rounded w-96 mx-auto animate-pulse"></div>
        </div>
        <div className="lg:container mx-auto grid md:grid-cols-2 gap-8 lg:gap-12">
          {[1, 2].map((i) => (
            <div
              key={i}
              className="relative h-[500px] rounded-2xl p-8 bg-gray-200 animate-pulse"
            />
          ))}
        </div>
      </section>
    );
  }

  // Don't render anything if no content is available
  if (!content) {
    return null;
  }

  // Get image URLs - use fallback images if Sanity images are not available
  const getImageUrl = (
    imageField: { asset: { url?: string } | null } | null,
    fallbackUrl: string
  ): string => {
    if (!imageField?.asset) {
      return fallbackUrl;
    }

    // Check if asset has url property (from GROQ query expansion)
    if (imageField.asset.url) {
      return imageField.asset.url;
    }

    // Otherwise use urlFor helper
    try {
      return urlFor(imageField).url();
    } catch (error) {
      console.warn("Error generating image URL, using fallback:", error);
      return fallbackUrl;
    }
  };

  const trainerImageSrc = getImageUrl(
    content.trainerCard?.image,
    "/assets/no-programming.jpg"
  );
  const eventImageSrc = getImageUrl(
    content.eventCard?.image,
    "/assets/girl-lifting-dumbels.jpg"
  );

  return (
    <section
      ref={sectionRef}
      className="relative lg:py-12 pb-8 px-4 overflow-hidden bg-gradient-to-b from-white to-gray-50"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, ease: "easeOut" as const }}
        className="lg:container mx-auto text-center mb-8 lg:mb-16"
      >
        <h2 className="text-xl md:text-3xl font-extrabold tracking-tight mb-2">
          <span className="inline-block relative">
            <span className="">{content.sectionTitle}</span>
            <motion.span
              className="absolute bottom-2 left-0 w-full h-3 rounded-full opacity-75"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />
          </span>
        </h2>
        <motion.p
          className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {content.sectionDescription}
        </motion.p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="lg:container mx-auto grid md:grid-cols-2 gap-8 lg:gap-12"
      >
        {/* Trainer Card */}
        <motion.div
          variants={itemVariants}
          whileHover="hover"
          onHoverStart={() => setHoverTrainer(true)}
          onHoverEnd={() => setHoverTrainer(false)}
          className="group relative cursor-pointer"
        >
          <motion.div variants={cardVariants} className="relative h-[500px]">
            <div className="absolute inset-0 rounded-2xl overflow-hidden">
              <Image
                src={trainerImageSrc}
                alt={
                  content.trainerCard?.imageAlt || "Trainer working on laptop"
                }
                width={800}
                height={600}
                className="w-full h-full object-cover lg:object-center transition-transform duration-700 ease-out scale-100 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30" />
            </div>

            <div className="relative h-[500px]  rounded-2xl p-8 flex flex-col justify-end border border-white/10 shadow-2xl transition-all duration-500 group-hover:border-purple-500/30 group-hover:shadow-purple-500/20">
              <motion.div
                className="absolute top-8 right-8 bg-primary rounded-full p-2 shadow-lg"
                animate={{ rotate: hoverTrainer ? 360 : 0 }}
                transition={{ duration: 0.8 }}
              >
                {(() => {
                  const IconComponent = getIconComponent(
                    content.trainerCard?.icon || "Award"
                  );
                  return <IconComponent className="w-6 h-6 text-white" />;
                })()}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="space-y-6"
              >
                <div>
                  <motion.div whileHover={{ y: -3 }}>
                    <Badge
                      text={content.trainerCard?.badgeText || "Become a Pro"}
                      position="left"
                      showDots
                    />
                  </motion.div>
                  <h3 className="text-xl md:text-3xl font-bold text-white mb-4 tracking-tight">
                    {content.trainerCard?.title}
                  </h3>
                  <p className="text-gray-300 mb-8 max-w-md">
                    {content.trainerCard?.description}
                  </p>
                </div>

                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="w-fit"
                >
                  <Link
                    href={
                      content.trainerCard?.buttonLink ||
                      "https://4rejngh79zj.typeform.com/to/dMK1ZSn2"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 bg-gradient-to-r from-primary-100 to-primary-200 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/30"
                  >
                    {content.trainerCard?.buttonText}
                    <motion.div
                      animate={{ x: hoverTrainer ? 5 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {(() => {
                        const IconComponent = getIconComponent("ArrowRight");
                        return <IconComponent className="w-5 h-5" />;
                      })()}
                    </motion.div>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Event Card */}
        <motion.div
          variants={itemVariants}
          whileHover="hover"
          onHoverStart={() => setHoverEvent(true)}
          onHoverEnd={() => setHoverEvent(false)}
          className="group relative cursor-pointer"
        >
          <motion.div variants={cardVariants} className="relative h-[500px]">
            <div className="absolute inset-0 rounded-2xl overflow-hidden">
              <Image
                src={eventImageSrc}
                alt={
                  content.eventCard?.imageAlt ||
                  "Fitness instructor teaching a class"
                }
                width={800}
                height={600}
                className="w-full h-full object-cover lg:object-center transition-transform duration-700 ease-out scale-100 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30" />
            </div>

            <div className="relative h-[500px] rounded-2xl p-8 flex flex-col justify-end border border-white/10 shadow-2xl transition-all duration-500 group-hover:border-teal-500/30 group-hover:shadow-teal-500/20">
              <motion.div
                className="absolute top-8 right-8 bg-primary rounded-full p-2 shadow-lg"
                animate={{ rotate: hoverEvent ? 360 : 0 }}
                transition={{ duration: 0.8 }}
              >
                {(() => {
                  const IconComponent = getIconComponent(
                    content.eventCard?.icon || "Calendar"
                  );
                  return <IconComponent className="w-6 h-6 text-white" />;
                })()}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="space-y-6"
              >
                <div>
                  <motion.div whileHover={{ y: -3 }}>
                    <Badge
                      text={content.eventCard?.badgeText || "Host an Event"}
                      position="left"
                      showDots
                    />
                  </motion.div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
                    {content.eventCard?.title}
                  </h3>
                  <p className="text-gray-300 mb-8 max-w-md">
                    {content.eventCard?.description}
                  </p>
                </div>

                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="w-fit"
                >
                  <Link
                    href={
                      content.eventCard?.buttonLink ||
                      "https://forms.gle/eiYfbbVTFb4RNaoc9"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex  items-center gap-2 bg-gradient-to-r from-primary-100 to-primary-200 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/30"
                  >
                    {content.eventCard?.buttonText}
                    <motion.div
                      animate={{ x: hoverEvent ? 5 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {(() => {
                        const IconComponent = getIconComponent("ArrowRight");
                        return <IconComponent className="w-5 h-5" />;
                      })()}
                    </motion.div>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
