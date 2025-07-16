/**
 * Sanity Schema Types Registry
 *
 * This file serves as the central registry for all Sanity schema types.
 * Every schema type that should be available in Sanity Studio must be
 * imported and added to the types array.
 *
 * Usage:
 * 1. Import your schema definition from its file
 * 2. Add it to the types array
 * 3. The schema will automatically appear in Sanity Studio
 *
 * Note: The order in the types array determines the order schemas
 * appear in the Sanity Studio navigation.
 */

import { type SchemaTypeDefinition } from "sanity";
import evolution from "./homePage/evolution";
import features from "./homePage/features";
import trainerMapSection from "./homePage/trainerMapSection";

import { homeHeroSection } from "./homePage/homeHeroSection";
import teamSection from "./homePage/teamSection";
import homePricing from "./homePage/homePricing";
import testimonialSection from "./homePage/testimonialSection";
import promoModal from "./promoModal";
import homeJoinCTA from "./homePage/homeJoinCTA";
import packagesJoinCTA from "./packagesPage/packagesJoinCTA";
import { packagesHero } from "./packagesPage/packagesHero";
import { packagesPricing } from "./packagesPage/packagesPricing";
import { packagesFAQ } from "./packagesPage/packagesFAQ";
import { joinGymygHero } from "./joinGymygPage/joinGymygHero";
import appDownloadSection from "./joinGymygPage/appDownloadSection";
import joinGymygCTA from "./joinGymygPage/joinGymygCTA";
import contactUsSection from "./contactUsSection";
import { trainerHeroSection } from "./trainersPage/trainerHeroSection";
import trainersAbout from "./trainersPage/trainersAbout";
import trainerBenefits from "./trainersPage/trainerBenefits";
import clientsInteraction from "./trainersPage/clientsInteraction";
import trainingOptions from "./trainersPage/trainingOptions";
import { noProgramming } from "./trainersPage/noProgramming";
import humanConnection from "./homePage/humanConnection";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    homeHeroSection, // Home Hero section content management
    evolution, // Evolution section content management
    features, // Features section content management
    trainerMapSection, // Trainer map section content management
    humanConnection, // Human connection section content management
    teamSection, // Team section content management
    homePricing, // Home pricing section content management
    testimonialSection, // Testimonial section content management
    promoModal, // Promo modal content management
    homeJoinCTA, // Join CTA section content management
    packagesHero, // Packages hero section content management
    packagesPricing, // Packages pricing section content management
    packagesFAQ, // Packages FAQ section content management
    packagesJoinCTA, // Packages page Join CTA section content management
    joinGymygHero, // Join Gymyg hero section content management
    appDownloadSection, // App download section content management
    joinGymygCTA, // Join GYMYG page CTA section content management
    contactUsSection, // Contact Us section content management
    trainerHeroSection, // Trainer Hero section content management
    clientsInteraction, // Clients Interaction section content management
    trainersAbout, // Trainers About section content management
    trainerBenefits, // Trainer Benefits section content management
    trainingOptions, // Training Options section content management
    noProgramming, // No Programming section content management
    // Add other schema types here as they are created
    // Example: blogPost, etc.
  ],
};
