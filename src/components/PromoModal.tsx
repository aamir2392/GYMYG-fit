"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { X, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion, AnimatePresence } from "framer-motion";
import { z } from "zod";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { promoModalQuery } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import type { PromoModal } from "@/types/promoModal";

// Fallback data with modal content matching the hardcoded JSX
const fallbackPromoData: PromoModal = {
  _id: "fallback-promo-modal",
  _type: "promoModal",
  badge: "Exclusive Offer",
  title: "Elevate your training with",
  highlight: "40% off",
  description:
    "Join our community of dedicated fitness enthusiasts and unlock premium virtual training sessions designed to transform your routine.",
  buttonText: "Claim Your Discount",
  image: {
    asset: {
      _ref: "fallback-promo-image",
      _type: "reference",
    },
    alt: "Laptop showing virtual fitness class participants",
  },
  imageBadge: "Premium Experience",
  imageCaption: "Transform your fitness journey",
  emailPlaceholder: "Email Address",
  termsText:
    "Valid for first purchase only. Cannot be combined with other promotions.",
  successTitle: "Thank You!",
  successMessage:
    "Your discount code has been sent to {email}. Check your inbox to claim your 40% off.",
  successButtonText: "Send Another Code",
  isActive: true,
};

interface PromoModalProps {
  data?: PromoModal | null;
}

export default function PromoModal({ data }: PromoModalProps = {}) {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [validationError, setValidationError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [promoData, setPromoData] = useState<PromoModal | null>(data || null);

  const emailSchema = z
    .string()
    .email("Please enter a valid email address")
    .min(1, "Email is required");

  // Loading state
  const [isLoading, setIsLoading] = useState(!data);

  // Fetch promo modal data from Sanity if not provided via props
  useEffect(() => {
    if (data) {
      setPromoData(data);
      setIsLoading(false);
      if (data.isActive) {
        setIsOpen(true);
      }
      return;
    }

    const fetchPromoData = async () => {
      try {
        const fetchedData = await client.fetch<PromoModal>(promoModalQuery);
        if (fetchedData && fetchedData.isActive) {
          setPromoData(fetchedData);
          setIsOpen(true);
        } else {
          setPromoData(fallbackPromoData);
          setIsOpen(true);
        }
      } catch (error) {
        console.error("Failed to fetch promo modal data:", error);
        // Use fallback data on fetch error
        setPromoData(fallbackPromoData);
        setIsOpen(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPromoData();
  }, [data]);

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    try {
      emailSchema.parse(email);
      // Handle form submission
      setIsSubmitted(true);
      setValidationError("");
    } catch (error) {
      if (error instanceof z.ZodError) {
        setValidationError(error.errors[0].message);
      }
    }
  };

  // Use fallback data if no promo data available
  const activePromoData = promoData || fallbackPromoData;

  /**
   * Loading State Render
   *
   * Shows a skeleton loading modal while fetching data from Sanity.
   */
  if (isLoading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
        <div className="relative mx-4 flex w-full max-w-4xl overflow-hidden rounded-2xl bg-white shadow-2xl">
          {/* Left side skeleton */}
          <div className="hidden w-1/2 bg-zinc-200 md:block animate-pulse">
            <div className="h-full w-full bg-gradient-to-br from-zinc-300 to-zinc-400"></div>
          </div>

          {/* Right side skeleton */}
          <div className="flex w-full flex-col justify-between p-6 md:w-1/2 md:p-10">
            <div className="space-y-6">
              {/* Badge skeleton */}
              <div className="h-6 w-24 bg-zinc-200 rounded-full animate-pulse"></div>

              {/* Title skeleton */}
              <div className="space-y-3">
                <div className="h-8 bg-zinc-200 rounded animate-pulse"></div>
                <div className="h-8 w-3/4 bg-zinc-200 rounded animate-pulse"></div>
              </div>

              {/* Description skeleton */}
              <div className="space-y-2">
                <div className="h-4 bg-zinc-200 rounded animate-pulse"></div>
                <div className="h-4 w-5/6 bg-zinc-200 rounded animate-pulse"></div>
              </div>

              {/* Input skeleton */}
              <div className="h-14 bg-zinc-200 rounded animate-pulse"></div>

              {/* Button skeleton */}
              <div className="h-14 bg-zinc-200 rounded animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /**
   * Don't render if modal is not active
   */
  if (!activePromoData.isActive) {
    return null;
  }

  // Get image URL - use urlFor for Sanity images, direct URL for fallback
  const getImageUrl = () => {
    // Check if this is fallback data
    if (activePromoData._id === "fallback-promo-modal") {
      return "/assets/modal-laptop-image.jpg";
    }
    // Sanity image
    return urlFor(activePromoData.image.asset).url();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative mx-4 flex w-full max-w-4xl overflow-hidden rounded-2xl bg-white shadow-2xl"
          >
            {/* Left side - Image */}
            <div className="hidden w-1/2 bg-zinc-900 md:block">
              <div className="relative h-full w-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-black/30 to-transparent"></div>
                <Image
                  fill
                  src={getImageUrl()}
                  alt={activePromoData.image.alt || "Promo image"}
                  className="h-full w-full object-cover"
                />
                <div className="absolute bottom-8 left-8 max-w-xs">
                  <span className="mb-2 inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
                    {activePromoData.imageBadge || "Premium Experience"}
                  </span>
                  <h3 className="text-2xl font-bold text-white">
                    {activePromoData.imageCaption ||
                      "Transform your fitness journey"}
                  </h3>
                </div>
              </div>
            </div>

            {/* Right side - Content */}
            <div className="flex w-full flex-col justify-between p-6 md:w-1/2 md:p-10">
              <button
                onClick={closeModal}
                className="absolute right-6 top-6 flex h-8 w-8 items-center justify-center rounded-full bg-zinc-100 text-zinc-500 transition-colors hover:bg-zinc-200 hover:text-zinc-700"
                aria-label="Close modal"
              >
                <X className="h-4 w-4" />
              </button>

              {!isSubmitted ? (
                <>
                  <div className="mb-8 mt-6 md:mt-0">
                    <div className="mb-2 inline-block rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-800">
                      {activePromoData.badge}
                    </div>
                    <h2 className="mb-4 font-serif text-2xl max-sm:text-center font-bold tracking-tight text-zinc-900 md:text-4xl">
                      {activePromoData.title}
                      <span className="relative ml-2 inline-block">
                        <span className="relative z-10 text-primary">
                          {activePromoData.highlight}
                        </span>
                      </span>
                    </h2>
                    <p className="text-zinc-600">
                      {activePromoData.description}
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="relative">
                      <label
                        htmlFor="email"
                        className={`absolute left-4 transition-all duration-200 ${
                          isEmailFocused || email
                            ? "-top-2 text-xs font-medium text-zinc-500 rounded-full bg-white px-1"
                            : "top-1/2 -translate-y-1/2 text-zinc-400"
                        }`}
                      >
                        {activePromoData.emailPlaceholder}
                      </label>
                      <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          setValidationError("");
                        }}
                        onFocus={() => setIsEmailFocused(true)}
                        onBlur={() => setIsEmailFocused(false)}
                        className={`h-14 border-zinc-200 bg-white px-4 text-base ${
                          validationError ? "border-red-500" : ""
                        }`}
                        required
                      />
                      {validationError && (
                        <p className="mt-1 text-xs text-red-500">
                          {validationError}
                        </p>
                      )}
                    </div>

                    <div className="space-y-4">
                      <Button
                        type="submit"
                        className="group relative h-14 w-full overflow-hidden bg-primary text-white transition-all hover:bg-primary/90"
                      >
                        <span className="relative z-10 flex items-center justify-center gap-2 font-medium uppercase tracking-wide">
                          {activePromoData.buttonText}
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </span>
                        <span className="absolute bottom-0 left-0 h-1 w-0 bg-primary-400 transition-all duration-300 group-hover:w-full"></span>
                      </Button>

                      <p className="text-center text-xs text-zinc-500">
                        {activePromoData.termsText}
                        <br />
                        By continuing, you agree to our{" "}
                        <Link
                          href="/terms-of-service"
                          className="underline text-primary hover:text-primary-100"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Terms
                        </Link>{" "}
                        and{" "}
                        <Link
                          href="/privacy-policy"
                          className="underline text-primary hover:text-primary-100"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Privacy Policy
                        </Link>
                        .
                      </p>
                    </div>
                  </form>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col items-center justify-center py-8 text-center"
                >
                  <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                    <CheckCircle className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="mb-2 text-2xl font-bold text-zinc-900">
                    {activePromoData.successTitle}
                  </h3>
                  <p className="mb-6 text-zinc-600">
                    {activePromoData.successMessage.replace("{email}", email)}
                  </p>
                  <Button
                    onClick={() => {
                      setIsSubmitted(false);
                      setEmail("");
                      setValidationError("");
                    }}
                    className="bg-primary hover:bg-primary/90 text-white"
                  >
                    {activePromoData.successButtonText}
                  </Button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
