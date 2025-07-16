import EvolutionSection from "@/sections/home-sections/Evolution";
// import HomeCTA from "@/sections/home-sections/HomeCTA";
import TestimonialSection from "@/sections/home-sections/TestimonialSection";
import TeamSection from "@/sections/home-sections/TeamSection";
import HomePricingSection from "@/sections/home-sections/HomePricingSection";
import FeaturesSection from "@/sections/home-sections/FeaturesSection";
import HomeHeroSection from "@/sections/home-sections/HomeHeroSection";
import TrainerMapSection from "@/sections/home-sections/TrainerMapSection";
import HumanConnection from "@/sections/home-sections/HumanConnection";
import JoinCTA from "@/components/JoinCTA";
import { client } from "@/sanity/lib/client";
import { homeJoinCTAQuery } from "@/sanity/lib/queries";
import type { JoinCTAData } from "@/types/joinCTA";

export default async function Home() {
  // Fetch join CTA data from Sanity
  const joinCTAData: JoinCTAData | null = await client.fetch(homeJoinCTAQuery);

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <HomeHeroSection />
        <EvolutionSection />
        <FeaturesSection />
        <TrainerMapSection />
        <HumanConnection />
        <TeamSection />
        <HomePricingSection />
        <TestimonialSection />
        <JoinCTA
          data={joinCTAData}
          // Legacy fallback props
          imgSrcDesktop="/assets/group-fitness.jpg"
          imgSrcMobile="/assets/girl-lifting-dumbels.jpg"
          isTrainer={false}
          containerClassName="max-sm:py-24"
        />
      </main>
    </div>
  );
}
