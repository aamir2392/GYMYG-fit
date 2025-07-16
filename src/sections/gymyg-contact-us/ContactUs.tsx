"use client";

import Link from "next/link";
import Image from "next/image";
import { ContactForm } from "@/components/ContactUsForm";

import type { ContactUsSectionData } from "@/types/contactUsSection";

// Social media icon components
const getSocialIcon = (platform: string) => {
  switch (platform) {
    case "instagram":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6"
        >
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      );
    case "twitter":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6"
        >
          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
        </svg>
      );
    case "tiktok":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6"
        >
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
        </svg>
      );
    case "facebook":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6"
        >
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6"
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      );
    case "youtube":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
        </svg>
      );
    default:
      return null;
  }
};

interface ContactUsProps {
  data?: ContactUsSectionData | null;
  isLoading?: boolean;
}

export default function ContactUs({ data, isLoading = false }: ContactUsProps) {
  // Fallback data when Sanity is not available
  const fallbackData: ContactUsSectionData = {
    _id: "fallback",
    _type: "contactUsSection",
    heroContent: {
      title: "Contact us.",
      primaryDescription: "Questions? Inquiries? Concerns?",
      secondaryDescription: "Check out our",
      helpText:
        "If we can be of any more help, send us a message and our team will get back to you shortly.",
    },
    backgroundImage: {
      asset: undefined,
    } as unknown as ContactUsSectionData["backgroundImage"],
    faqLink: null,
    socialLinks: [
      {
        platform: "instagram",
        url: "https://www.instagram.com/gymygfit/",
        isActive: true,
      },
      {
        platform: "twitter",
        url: "https://x.com/gymygfit",
        isActive: true,
      },
      {
        platform: "tiktok",
        url: "https://www.tiktok.com/@gymygfit",
        isActive: true,
      },
    ],
    formConfiguration: {
      formTitle: "Get in touch with us",
      successMessage: {
        title: "Message sent!",
        description:
          "Thank you for reaching out. Our team will get back to you shortly.",
        buttonText: "Send another message",
      },
      submitButtonText: "Send",
      loadingText: "Sending...",
    },
    isActive: true,
  };

  // Use fallback data only when not loading and no data from Sanity
  const content = !isLoading && !data ? fallbackData : data;

  // Don't render anything if loading or no content
  if (isLoading || !content) {
    return (
      <div className="bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="container mx-auto px-4 py-32 md:py-36 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 overflow-hidden rounded-2xl shadow-2xl bg-white">
            {/* Loading skeleton */}
            <div className="relative h-[500px] lg:h-full w-full">
              <div className="absolute inset-0 bg-gray-200 animate-pulse" />
            </div>
            <div className="p-8 lg:p-12">
              <div className="space-y-4">
                <div className="h-8 w-64 bg-gray-200 rounded animate-pulse" />
                <div className="space-y-2">
                  <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
                  <div className="h-4 w-5/6 bg-gray-200 rounded animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Get image URL with proper null checks
  let backgroundImageSrc = "/assets/download-join-us.jpg";

  try {
    if (content?.backgroundImage?.asset?.url) {
      backgroundImageSrc = content.backgroundImage.asset.url;
    }
  } catch (error) {
    console.warn("Error accessing background image URL:", error);
    // Keep default image
  }

  // Filter active social links
  const activeSocialLinks =
    content.socialLinks?.filter((link) => link.isActive) || [];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-32 md:py-36 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 overflow-hidden rounded-2xl shadow-2xl bg-white">
          {/* Left side with image and content */}
          <div className="relative flex flex-col h-full">
            <div className="relative h-[500px] lg:h-full w-full">
              <Image
                src={backgroundImageSrc}
                alt={content.backgroundImage?.alt || "Contact us"}
                fill
                className="object-cover object-top"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/60 to-gray-900/30 flex flex-col justify-end p-4 lg:p-8 text-white">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                  {content.heroContent.title}
                </h1>
                <p className="text-lg md:text-xl opacity-90 mb-2">
                  {content.heroContent.primaryDescription}
                </p>
                <p className="text-base md:text-lg opacity-80 mb-6">
                  {content.heroContent.secondaryDescription}{" "}
                  {content.faqLink && (
                    <Link
                      href={content.faqLink.url}
                      className="text-primary-200 hover:text-primary-300 transition-colors underline underline-offset-4"
                    >
                      {content.faqLink.text}
                    </Link>
                  )}
                </p>
                <p className="text-base md:text-lg opacity-80 mb-8">
                  {content.heroContent.helpText}
                </p>

                {/* Social Links */}
                <div className="flex space-x-5 mt-auto">
                  {activeSocialLinks.map((link, index) => (
                    <Link
                      key={`${link.platform}-${index}`}
                      href={link.url}
                      className="text-white hover:text-rose-300 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="sr-only">{link.platform}</span>
                      {getSocialIcon(link.platform)}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right side with form */}
          <div className="p-8 lg:p-12">
            <div className="mx-auto">
              <h2 className="text-2xl font-semibold text-gray-900 mb-8">
                {content.formConfiguration.formTitle}
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
