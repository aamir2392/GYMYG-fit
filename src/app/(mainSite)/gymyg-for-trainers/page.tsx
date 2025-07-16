import TrainersAboutSection from "@/sections/gymyg-for-trainers-sections/TrainersAboutSection";
import TrainerHeroSection from "@/sections/gymyg-for-trainers-sections/TrainerHeroSection";
import React from "react";
import TrainerBenefitsSection from "@/sections/gymyg-for-trainers-sections/TrainerBenefitsSection";
import ClientsInteraction from "@/sections/gymyg-for-trainers-sections/ClientsInteractionSection";
import NoProgrammingSection from "@/sections/gymyg-for-trainers-sections/NoProgrammingSection";
import TrainingOptions from "@/sections/gymyg-for-trainers-sections/TrainingOptions";

import { Metadata } from "next";
import { defaultMetadata } from "@/seo/metadata";

export const metadata: Metadata = {
  ...defaultMetadata,
  title: "Become a GYMYG Trainer",
  description:
    "Join GYMYG as a certified trainer. Share your expertise, build your client base, and grow your fitness business through our virtual training platform.",
  openGraph: {
    ...defaultMetadata.openGraph,
    title: "Become a GYMYG Trainer | Join Our Virtual Fitness Platform",
    description:
      "Take your fitness career to the next level with GYMYG. Join our platform as a certified trainer, reach more clients, and grow your business through virtual training.",
  },
  twitter: {
    ...defaultMetadata.twitter,
    title: "Become a GYMYG Trainer 💪",
    description:
      "Join GYMYG's platform as a certified trainer. Share your expertise, reach more clients, and grow your fitness business through virtual training. Apply now! 🏋️‍♀️",
  },
};

const GymygForTrainersPage = () => {
  return (
    <>
      <TrainerHeroSection />
      <ClientsInteraction />
      <TrainersAboutSection />
      <TrainerBenefitsSection />
      <TrainingOptions />
      <NoProgrammingSection />
    </>
  );
};

export default GymygForTrainersPage;
