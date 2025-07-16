import PolicyCategories from "@/components/PolicyCategories";
import { categoriesData } from "@/constants/categoriesData";
import PrivacyPolicyHeroSection from "@/sections/privacy-policy/PrivacyPolicyHeroSection";
import React from "react";

import { Metadata } from "next";
import { defaultMetadata } from "@/seo/metadata";

export const metadata: Metadata = {
  ...defaultMetadata,
  title: "Privacy Policy | Your Data Protection Guide",
  description:
    "Read GYMYG's privacy policy to understand how we collect, use, and protect your personal information. We're committed to transparency and data security.",
  openGraph: {
    ...defaultMetadata.openGraph,
    title: "GYMYG Privacy Policy | Data Protection & Security",
    description:
      "Learn about GYMYG's privacy practices and data protection measures. We're dedicated to safeguarding your personal information and maintaining transparency.",
  },
  twitter: {
    ...defaultMetadata.twitter,
    title: "GYMYG Privacy Policy",
    description:
      "Review GYMYG's privacy policy to understand how we protect your data. We're committed to transparency and security in handling your personal information! 🔒",
  },
};

const page = () => {
  return (
    <>
      <PrivacyPolicyHeroSection />
      <div className=" max-sm:pb-56">
        <PolicyCategories
          title="Privacy Policy"
          description="Choose your category to learn more about how we handle your data"
          data={categoriesData}
        />
      </div>
    </>
  );
};

export default page;
