import PackagesFAQ from "@/sections/packages-sections/PackagesFAQ";
import PackagesHero from "@/sections/packages-sections/PackagesHero";
import React from "react";
import PricingSection from "@/sections/packages-sections/PricingSection";
import JoinCTA from "@/components/JoinCTA";
import { client } from "@/sanity/lib/client";
import { packagesJoinCTAQuery } from "@/sanity/lib/queries";
import type { PackagesJoinCTAData } from "@/types/joinCTA";

import { Metadata } from "next";
import { defaultMetadata } from "@/seo/metadata";

export const metadata: Metadata = {
  ...defaultMetadata,
  title: "GYMYG Packages | Choose Your Fitness Journey",
  description:
    "Discover GYMYG's fitness packages and pricing. Choose from personal training or group classes to reach your goals.",
  openGraph: {
    ...defaultMetadata.openGraph,
    title: "GYMYG Packages & Pricing | Choose Your Fitness Journey",
    description:
      "Explore GYMYG's flexible fitness packages and pricing options. From personal training to group classes, find the perfect plan to achieve your fitness goals.",
  },
  twitter: {
    ...defaultMetadata.twitter,
    title: "GYMYG Packages & Pricing 💪",
    description:
      "Find your perfect fitness package with GYMYG. Choose from personal training, group classes, and more. Start your journey today! 🏋️‍♀️",
  },
};

const PackagesPage = async () => {
  // Fetch packages-specific join CTA data from Sanity
  const packagesJoinCTAData: PackagesJoinCTAData | null =
    await client.fetch(packagesJoinCTAQuery);

  return (
    <>
      <PackagesHero />
      <PricingSection />
      <PackagesFAQ />
      <JoinCTA
        data={packagesJoinCTAData}
        // Legacy fallback props
        imgSrcMobile="/assets/gym-background.jpg"
        imgSrcDesktop="/assets/gym-background.jpg"
      />
    </>
  );
};

export default PackagesPage;
