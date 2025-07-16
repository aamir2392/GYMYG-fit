import JoinCTA from "@/components/JoinCTA";
import AppDownloadSection from "@/sections/join-gymyg-sections/AppDownloadSection";
import JoinGymygHeroSection from "@/sections/join-gymyg-sections/JoinGymygHeroSection";
import { client } from "@/sanity/lib/client";
import { joinGymygPageQuery } from "@/sanity/lib/queries";
import type { AppDownloadSectionData } from "@/types/appDownloadSection";
import type { JoinGymygCTAData } from "@/types/joinGymygCTA";

import { defaultMetadata } from "@/seo/metadata";
import { Metadata } from "next";

export const metadata: Metadata = {
  ...defaultMetadata,
  title: "Start Your Fitness Journey",
  description:
    "Join GYMYG's virtual fitness community. Download our app, connect with certified trainers, and start your fitness journey today.",
  openGraph: {
    ...defaultMetadata.openGraph,
    title: "Join GYMYG | Start Your Virtual Fitness Journey",
    description:
      "Take the first step towards a healthier lifestyle with GYMYG. Download our app, connect with certified trainers, and join our virtual fitness community.",
  },
  twitter: {
    ...defaultMetadata.twitter,
    title: "Join GYMYG 💪",
    description:
      "Ready to transform your fitness journey? Download the GYMYG app, connect with certified trainers, and join our virtual fitness community today! 🏋️‍♀️",
  },
};

const JoinGymygPage = async () => {
  // Fetch all page data from Sanity in a single optimized query
  const pageData: {
    appDownloadSection: AppDownloadSectionData | null;
    joinGymygCTA: JoinGymygCTAData | null;
  } | null = await client.fetch(joinGymygPageQuery);

  return (
    <>
      <JoinGymygHeroSection />
      <AppDownloadSection data={pageData?.appDownloadSection} />
      {/* <JoinGymygSection /> */}
      <JoinCTA data={pageData?.joinGymygCTA} isTrainer={true} />
    </>
  );
};

export default JoinGymygPage;
