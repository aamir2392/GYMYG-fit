import { CommunityGuidelines } from "@/sections/community-guidelines/CommunityGuidelines";

import { Metadata } from "next";
import { defaultMetadata } from "@/seo/metadata";

export const metadata: Metadata = {
  ...defaultMetadata,
  title: "Community Guidelines & Standards",
  description:
    "Learn about GYMYG's community guidelines and standards. We're committed to maintaining a safe, supportive, and inclusive fitness community for all members.",
  openGraph: {
    ...defaultMetadata.openGraph,
    title: "GYMYG Community Guidelines | Our Standards & Values",
    description:
      "Discover GYMYG's community guidelines and standards. We're dedicated to fostering a safe, supportive, and inclusive environment for all fitness enthusiasts.",
  },
  twitter: {
    ...defaultMetadata.twitter,
    title: "GYMYG Community Guidelines",
    description:
      "Learn about GYMYG's community standards and values. We're committed to creating a safe, supportive, and inclusive fitness community for everyone! 💪",
  },
};

const page = () => {
  return <CommunityGuidelines />;
};

export default page;
