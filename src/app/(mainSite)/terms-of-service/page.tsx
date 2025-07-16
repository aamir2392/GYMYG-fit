import PolicyCategories from "@/components/PolicyCategories";
import { termsOfServiceData } from "@/constants/termsOfServiceData";
import TermsOfServiceHeroSection from "@/sections/terms-of-service/TermsOfServiceHeroSection";
import React from "react";

import { Metadata } from "next";
import { defaultMetadata } from "@/seo/metadata";

export const metadata: Metadata = {
  ...defaultMetadata,
  title: "Terms of Service | Legal Guidelines & Policies",
  description:
    "Review GYMYG's terms of service to understand our legal guidelines and policies. We're committed to transparency and fair practices for all users.",
  openGraph: {
    ...defaultMetadata.openGraph,
    title: "GYMYG Terms of Service | Legal Guidelines & Policies",
    description:
      "Learn about GYMYG's terms of service and legal guidelines. We're dedicated to maintaining clear policies and fair practices for all users.",
  },
  twitter: {
    ...defaultMetadata.twitter,
    title: "GYMYG Terms of Service",
    description:
      "Read GYMYG's terms of service to understand our legal guidelines and policies. We're committed to transparency and fair practices! 📜",
  },
};

const page = () => {
  return (
    <>
      <TermsOfServiceHeroSection />
      <div className=" max-sm:pb-56">
        <PolicyCategories
          title="Terms of Service"
          description="Choose your category to learn more about our terms of service"
          data={termsOfServiceData}
        />
      </div>
    </>
  );
};

export default page;
