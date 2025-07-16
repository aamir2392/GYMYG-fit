"use client";

import type React from "react";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import type { JoinCTAData, PackagesJoinCTAData } from "@/types/joinCTA";
import type { JoinGymygCTAData } from "@/types/joinGymygCTA";

interface JoinCTAProps {
  // Sanity CMS data (preferred)
  data?: JoinCTAData | PackagesJoinCTAData | JoinGymygCTAData | null;

  // Legacy props for backward compatibility
  imgSrcDesktop?: string;
  imgSrcMobile?: string;
  isTrainer?: boolean;
  mobileImageClassName?: string;
  desktopImageClassName?: string;
  containerClassName?: string;
}

export default function JoinCTA({
  data,
  imgSrcDesktop,
  imgSrcMobile,
  isTrainer = false,
  mobileImageClassName = "",
  desktopImageClassName = "",
  containerClassName = "",
}: JoinCTAProps) {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      // Typically send email to backend
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail("");
      }, 3000);
    }
  };

  // Helper function to check if data is PackagesJoinCTAData
  const isPackagesData = (
    data:
      | JoinCTAData
      | PackagesJoinCTAData
      | JoinGymygCTAData
      | null
      | undefined
  ): data is PackagesJoinCTAData => {
    return data?._type === "packagesJoinCTA";
  };

  // Helper function to check if data is JoinGymygCTAData
  const isJoinGymygData = (
    data:
      | JoinCTAData
      | PackagesJoinCTAData
      | JoinGymygCTAData
      | null
      | undefined
  ): data is JoinGymygCTAData => {
    return data?._type === "joinGymygCTA";
  };

  // Get features based on data type
  const getFeatures = (): Array<{ title: string; description: string }> => {
    if (isPackagesData(data)) {
      // For packages data, only return actual package benefits, no fallback
      return data.packageBenefits || [];
    }
    if (isJoinGymygData(data)) {
      // For join GYMYG data, return trainer features based on toggle
      return data.showTrainerFeatures ? data.trainerFeatures || [] : [];
    }
    if (data && "trainerFeatures" in data) {
      return data.trainerFeatures || [];
    }
    // Default fallback features (only for home page/trainer mode)
    if (isTrainer) {
      return [
        {
          title: "Personalized Plans",
          description:
            "Get a fitness plan tailored to your specific goals, fitness level, and preferences.",
        },
        {
          title: "Expert Trainers",
          description:
            "Connect with certified fitness professionals who will guide you every step of the way.",
        },
        {
          title: "Community Support",
          description:
            "Join a community of like-minded individuals who will motivate and inspire you.",
        },
      ];
    }
    // No features for non-trainer home page without data
    return [];
  };

  // Use Sanity data if available, otherwise fall back to legacy props
  const content = {
    title: data?.title || "JOIN TODAY",
    subtitle:
      data?.subtitle ||
      "NEW MEMBERS GET 40% OFF OF THEIR FIRST PACKAGE PURCHASE",
    discountText: data?.discountText || "40% OFF",
    formTitle: data?.emailForm?.formTitle || "Get Started Now",
    formDescription:
      data?.emailForm?.formDescription ||
      "Enter your email to receive your special discount code.",
    emailPlaceholder: data?.emailForm?.emailPlaceholder || "Your email address",
    buttonText: data?.emailForm?.buttonText || "Claim Discount",
    privacyText:
      data?.emailForm?.privacyText ||
      "By submitting, you agree to receive marketing emails from GYMYG. You can unsubscribe at any time.",
    successTitle: data?.successState?.title || "Thank You!",
    successMessage:
      data?.successState?.message ||
      "Your discount code has been sent to {email}. Check your inbox to claim your 40% off.",
    successButtonText: data?.successState?.buttonText || "Send Another Code",
    termsText:
      data?.termsText ||
      "Only valid for your first purchase. Not applicable for single classes purchased in the app. Cannot be combined with any other promotions.",
    features: getFeatures(),
  };

  // Image sources: prefer Sanity images, fall back to legacy props
  const mobileImageSrc = data?.backgroundImages?.mobile?.asset
    ? "url" in data.backgroundImages.mobile.asset
      ? data.backgroundImages.mobile.asset.url ||
        "/assets/girl-lifting-dumbels.jpg"
      : urlFor(data.backgroundImages.mobile).url() ||
        "/assets/girl-lifting-dumbels.jpg"
    : imgSrcMobile || "/assets/girl-lifting-dumbels.jpg";

  const desktopImageSrc = data?.backgroundImages?.desktop?.asset
    ? "url" in data.backgroundImages.desktop.asset
      ? data.backgroundImages.desktop.asset.url || "/assets/group-fitness.jpg"
      : urlFor(data.backgroundImages.desktop).url() ||
        "/assets/group-fitness.jpg"
    : imgSrcDesktop || "/assets/group-fitness.jpg";

  const mobileImageAlt = data?.backgroundImages?.mobile?.alt || "Background";
  const desktopImageAlt = data?.backgroundImages?.desktop?.alt || "Background";

  // Parse subtitle to extract parts before, after, and the discount text
  const parseSubtitle = (subtitle: string, discountText: string) => {
    const parts = subtitle.split(discountText);
    if (parts.length === 2) {
      return {
        beforeDiscount: parts[0].trim(),
        afterDiscount: parts[1].trim(),
      };
    }
    return {
      beforeDiscount: subtitle,
      afterDiscount: "",
    };
  };

  const { beforeDiscount } = parseSubtitle(
    content.subtitle,
    content.discountText
  );

  return (
    <section
      ref={ref}
      className={`relative ${containerClassName} py-12 md:py-24 overflow-hidden`}
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0">
          <Image
            src={mobileImageSrc}
            alt={mobileImageAlt}
            fill
            className={`object-cover lg:hidden ${mobileImageClassName}`}
            quality={100}
          />
          <Image
            src={desktopImageSrc}
            alt={desktopImageAlt}
            fill
            className={`object-cover object-top hidden lg:block ${desktopImageClassName}`}
            quality={100}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30" />
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10" />
      </div>

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center text-white space-y-3 md:space-y-6"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold"
          >
            {content.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl font-medium"
          >
            {beforeDiscount}{" "}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="pt-2 md:pt-6"
          >
            <div className="rounded-2xl px-8 py-4 md:p-12 max-w-3xl mx-auto">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold mb-2">
                      {content.formTitle}
                    </h3>
                    <p className="text-gray-300">{content.formDescription}</p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={content.emailPlaceholder}
                      required
                      className="flex-grow px-6 py-4 rounded-full bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    />
                    <div className="flex items-center">
                      <Button
                        type="submit"
                        className="bg-primary w-full hover:bg-primary-100 text-white rounded-full py-6 px-8 text-lg font-medium transition-transform hover:scale-[1.02] whitespace-nowrap"
                      >
                        {content.buttonText}{" "}
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </div>
                  </div>

                  <p className="text-sm text-center text-gray-400">
                    {content.privacyText}
                  </p>
                </form>
              ) : (
                <div className="text-center py-8 bg-black/50 rounded-2xl">
                  <div className="flex justify-center mb-6">
                    <CheckCircle className="h-16 w-16 text-primary-100" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">
                    {content.successTitle}
                  </h3>
                  <p className="text-gray-300 mb-6">
                    {content.successMessage.replace("{email}", email)}
                  </p>
                  <Button
                    onClick={() => setIsSubmitted(false)}
                    className="bg-primary hover:bg-primary-100 text-white rounded-full py-4 px-8 text-lg font-medium"
                  >
                    {content.successButtonText}
                  </Button>
                </div>
              )}
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 0.8 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-sm text-white/80 max-w-lg mx-auto pt-4"
          >
            {content.termsText}
          </motion.p>
        </motion.div>

        {(() => {
          // For packages data: strict toggle control
          if (isPackagesData(data)) {
            const showBenefits = data.showPackageBenefits === true;
            const hasFeatures = content.features.length > 0;
            return showBenefits && hasFeatures;
          }

          // For join GYMYG data: use showTrainerFeatures toggle
          if (isJoinGymygData(data)) {
            const showFeatures = data.showTrainerFeatures === true;
            const hasFeatures = content.features.length > 0;
            return showFeatures && hasFeatures;
          }

          // For home/trainer data: use existing logic
          return isTrainer || content.features.length > 0;
        })() && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16 container grid grid-cols-1 md:grid-cols-3 gap-8 text-white"
          >
            {content.features.map(
              (
                feature: { title: string; description: string },
                index: number
              ) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-white/80">{feature.description}</p>
                </div>
              )
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
}
