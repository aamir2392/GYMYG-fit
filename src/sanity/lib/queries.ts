/**
 * Sanity GROQ Queries
 *
 * This file contains GROQ (Graph-Relational Object Queries) for fetching
 * data from Sanity. GROQ is Sanity's powerful query language.
 *
 * Query Structure:
 * - Uses array notation to filter documents: *[_type == "documentType"]
 * - Projections define which fields to return: { field1, field2 }
 * - References are resolved using ->: asset->{ url }
 * - Arrays are handled with []: features[]{ icon, text }
 *
 * Learn more: https://www.sanity.io/docs/groq
 */

import { groq } from "next-sanity";

/**
 * Home Hero Section Query
 *
 * Fetches the currently active home hero section with all required data.
 *
 * Query breakdown:
 * - *[_type == "homeHeroSection" && isActive == true] : Find all home hero sections where isActive is true
 * - [0] : Take only the first result (should only be one active)
 * - { ... } : Project (select) specific fields to return
 * - asset->{ _id, url } : Resolve image asset references to get actual URLs
 * - features[]{ icon, text } : Get all items in features array with specified fields
 *
 * Returns: HeroSectionData object or null if no active hero section exists
 */
export const homeHeroSectionQuery = groq`
  *[(_type == "homeHeroSection") && isActive == true][0] {
    _id,                    // Unique document identifier
    title,                  // Main headline text
    subtitle,               // Description/tagline text
    logo {                  // Logo image object
      asset->{              // Resolve asset reference
        _id,                // Asset ID
        url                 // Actual image URL
      },
      alt                   // Alt text for accessibility
    },
    backgroundVideo {       // Background media object
      backgroundVideo {     // Background video file
        asset->{
          _id,
          url
        }
      },
      fallbackImage {       // Fallback image for video
        asset->{
          _id,
          url
        }
      }
    },
    primaryButton {         // Main CTA button
      text,                 // Button label
      link                  // Button destination
    },
    secondaryButton {       // Secondary CTA button
      text,
      link
    },
    features[] {            // Array of feature stats
      icon,                 // Icon name (maps to Lucide icons)
      text                  // Feature description
    },
    scrollText,             // Text for scroll indicator
    _updatedAt              // Last modified timestamp (useful for caching)
  }
`;

/**
 * Trainer Map Section Query
 *
 * Fetches the currently active trainer map section with all required data.
 *
 * Query breakdown:
 * - *[_type == "trainerMapSection" && isActive == true] : Find active trainer map sections
 * - [0] : Take only the first result (should only be one active)
 * - { ... } : Project (select) specific fields to return
 * - asset->{ _id, url } : Resolve image asset references to get actual URLs
 * - trainers[]{ ... } : Get all items in trainers array with specified fields (optional)
 *
 * Returns: TrainerMapSectionData object or null if no active section exists
 */
export const trainerMapSectionQuery = groq`
  *[_type == "trainerMapSection" && isActive == true][0] {
    _id,                    // Unique document identifier
    title,                  // Section title
    description,            // Section description
    mapImage {              // Map image object
      asset->{              // Resolve asset reference
        _id,                // Asset ID
        url                 // Actual image URL
      },
      alt                   // Alt text for accessibility
    },
    trainers[] {            // Array of trainers (optional)
      name,                 // Trainer name
      location,             // Trainer location
      position {            // Position on map
        top,                // Top percentage
        left                // Left percentage
      },
      profileImage {        // Optional profile image
        asset->{
          _id,
          url
        },
        alt
      }
    },
    _updatedAt              // Last modified timestamp
  }
`;

/**
 * Human Connection Section Query
 *
 * Fetches the currently active human connection section with all required data.
 */
export const humanConnectionQuery = groq`
  *[_type == "humanConnection" && isActive == true][0] {
    _id,
    title,
    description1,
    description2,
    mainImage {
      asset->{
        _id,
        url
      }
    },
    mainImageAlt,
    features[] {
      icon,
      title,
      description
    },
    _updatedAt
  }
`;

/**
 * Team Section Query
 *
 * Fetches the currently active team section with all team members.
 */
export const teamSectionQuery = groq`
  *[_type == "teamSection" && isActive == true][0] {
    _id,
    sectionTitle,
    sectionDescription,
    teamMembers[] {
      name,
      role,
      bio,
      image {
        asset->{
          _id,
          url
        }
      },
      imageAlt,
      isCEO
    },
    _updatedAt
  }
`;

/**
 * Home Pricing Section Query
 *
 * Fetches the currently active home pricing section with all pricing data.
 */
export const homePricingQuery = groq`
  *[_type == "homePricing" && isActive == true][0] {
    _id,
    title,
    description,
    quote,
    primaryButton {
      text,
      link
    },
    secondaryButton {
      text,
      link
    },
    pricingImages[] {
      image {
        asset->{
          _id,
          url
        }
      },
      alt
    },
    _updatedAt
  }
`;

/**
 * Clients Interaction Section Query
 *
 * Fetches the currently active clients interaction section with all content blocks.
 */
export const clientsInteractionQuery = groq`
  *[_type == "clientsInteraction" && isActive == true][0] {
    _id,
    sectionId,
    firstBlock {
      title,
      description,
      image {
        asset->{
          _id,
          url
        }
      },
      imageAlt
    },
    secondBlock {
      title,
      description,
      image {
        asset->{
          _id,
          url
        }
      },
      imageAlt
    },
    _updatedAt
  }
`;

/**
 * Trainers About Section Query
 *
 * Fetches the currently active trainers about section with all feature cards.
 */
export const trainersAboutQuery = groq`
  *[_type == "trainersAbout" && isActive == true][0] {
    _id,
    sectionId,
    sectionTitle,
    sectionDescription,
    featureCards[] {
      title,
      description,
      image {
        asset->{
          _id,
          url
        }
      },
      imageAlt
    },
    _updatedAt
  }
`;

/**
 * Trainer Benefits Section Query
 *
 * Fetches the currently active trainer benefits section with all benefits.
 */
export const trainerBenefitsQuery = groq`
  *[_type == "trainerBenefits" && isActive == true][0] {
    _id,
    sectionId,
    sectionTitle,
    sectionDescription,
    benefits[] {
      title,
      description,
      icon
    },
    _updatedAt
  }
`;

/**
 * Training Options Section Query
 *
 * Fetches the currently active training options section with trainer and event cards.
 *
 * Note: Images are fully expanded with URLs for better performance and reliability.
 */
export const trainingOptionsQuery = groq`
  *[_type == "trainingOptions" && isActive == true][0] {
    _id,
    sectionTitle,
    sectionDescription,
    trainerCard {
      badgeText,
      title,
      description,
      buttonText,
      buttonLink,
      image {
        asset->{
          _id,
          url
        }
      },
      imageAlt,
      icon
    },
    eventCard {
      badgeText,
      title,
      description,
      buttonText,
      buttonLink,
      image {
        asset->{
          _id,
          url
        }
      },
      imageAlt,
      icon
    },
    _updatedAt
  }
`;

/**
 * No Programming Section Query
 *
 * Fetches the currently active no programming section with all feature cards and benefits.
 */
export const noProgrammingQuery = groq`
  *[_type == "noProgramming" && isActive == true][0] {
    _id,
    sectionId,
    badgeText,
    sectionTitle,
    highlightedWord,
    sectionDescription,
    backgroundImage {
      asset->{
        _id,
        url
      },
      alt,
      hotspot,
      crop
    },
    featureCards[] {
      icon,
      title,
      description,
      delay
    },
    benefits,
    _updatedAt
  }
`;

/**
 * Trainer Hero Section Query
 *
 * Fetches the currently active trainer hero section with all content data.
 */
export const trainerHeroSectionQuery = groq`
  *[_type == "trainerHeroSection" && isActive == true][0] {
    _id,
    sectionId,
    badgeText,
    mainTitle,
    highlightedWord,
    description,
    primaryButton {
      text,
      link
    },
    secondaryButton {
      text,
      link
    },
    heroImage {
      asset->{
        _id,
        url
      },
      alt,
      hotspot,
      crop
    },
    trustBadge {
      title,
      description,
      icon
    },
    _updatedAt
  }
`;

/**
 * Testimonial Section Query
 *
 * Fetches the currently active testimonial section with all testimonials.
 */
export const testimonialSectionQuery = groq`
  *[_type == "testimonialSection" && isActive == true][0] {
    _id,
    sectionTitle,
    sectionDescription,
    testimonials[] {
      name,
      position,
      content,
      rating,
      image {
        asset->{
          _id,
          url
        }
      },
      imageAlt
    },
    _updatedAt
  }
`;

/**
 * Promo Modal Query
 *
 * Fetches the currently active promo modal with all required data.
 */
export const promoModalQuery = groq`
  *[_type == "promoModal" && isActive == true][0] {
    _id,
    isActive,
    badge,
    title,
    highlight,
    description,
    buttonText,
    image {
      asset->{
        _id,
        url
      },
      alt
    },
    imageBadge,
    imageCaption,
    emailPlaceholder,
    termsText,
    successTitle,
    successMessage,
    successButtonText,
    _updatedAt
  }
`;

/**
 * Join CTA Section Query
 *
 * Fetches the currently active join CTA section with all required data.
 */
export const homeJoinCTAQuery = groq`
  *[_type == "homeJoinCTA" && isActive == true][0] {
    _id,
    title,
    subtitle,
    discountText,
    backgroundImages {
      desktop {
        asset->{
          _id,
          url
        },
        alt
      },
      mobile {
        asset->{
          _id,
          url
        },
        alt
      }
    },
    emailForm {
      formTitle,
      formDescription,
      emailPlaceholder,
      buttonText,
      privacyText
    },
    successState {
      title,
      message,
      buttonText
    },
    termsText,
    trainerFeatures[] {
      title,
      description
    },
    _updatedAt
  }
`;

/**
 * Packages Join CTA Section Query
 *
 * Fetches the currently active packages page join CTA section with all required data.
 */
export const packagesJoinCTAQuery = groq`
  *[_type == "packagesJoinCTA" && isActive == true][0] {
    _id,
    title,
    subtitle,
    discountText,
    backgroundImages {
      desktop {
        asset->{
          _id,
          url
        },
        alt
      },
      mobile {
        asset->{
          _id,
          url
        },
        alt
      }
    },
    emailForm {
      formTitle,
      formDescription,
      emailPlaceholder,
      buttonText,
      privacyText
    },
    successState {
      title,
      message,
      buttonText
    },
    termsText,
    packageBenefits[] {
      title,
      description
    },
    showPackageBenefits,
    _updatedAt
  }
`;

/**
 * Packages Hero Section Query
 *
 * Fetches the currently active packages hero section with all required data.
 */
export const packagesHeroQuery = groq`
  *[_type == "packagesHero" && isActive == true][0] {
    _id,
    title,
    highlightedWord,
    subtitle,
    primaryButton {
      text,
      link
    },
    secondaryButton {
      text,
      link
    },
    backgroundImage {
      asset->{
        _id,
        url
      }
    },
    _updatedAt
  }
`;

/**
 * Packages Pricing Section Query
 *
 * Fetches the currently active packages pricing section with all pricing plans.
 */
export const packagesPricingQuery = groq`
  *[_type == "packagesPricing" && isActive == true][0] {
    _id,
    sectionTitle,
    sectionDescription,
    pricingPlans[] {
      name,
      description,
      price,
      pricePerClass,
      priceText,
      features,
      popular,
      cta,
      type
    },
    _updatedAt
  }
`;

/**
 * Packages FAQ Section Query
 *
 * Fetches the currently active packages FAQ section with all categories and FAQs.
 */
export const packagesFAQQuery = groq`
  *[_type == "packagesFAQ" && isActive == true][0] {
    _id,
    sectionTitle,
    highlightedWord,
    sectionDescription,
    faqCategories[] {
      id,
      label,
      faqs[] {
        question,
        answer
      }
    },
    _updatedAt
  }
`;

/**
 * Join Gymyg Hero Section Query
 *
 * Fetches the currently active join gymyg hero section with all required data.
 */
export const joinGymygHeroQuery = groq`
  *[_type == "joinGymygHero" && isActive == true][0] {
    _id,
    title,
    primaryColorTitle,
    subtitle,
    primaryButton {
      text,
      action,
      link,
      openInNewTab
    },
    secondaryButton {
      text,
      action,
      link,
      openInNewTab
    },
    backgroundImage {
      asset->{
        _id,
        url
      },
      alt
    },
    enableParticles,
    isActive,
    _updatedAt
  }
`;

/**
 * App Download Section Query
 *
 * Fetches the currently active app download section with all required data.
 */
export const appDownloadSectionQuery = groq`
  *[_type == "appDownloadSection" && isActive == true][0] {
    _id,
    badgeText,
    title,
    primaryColorTitle,
    subtitle,
    mockupImages {
      iosMockup {
        asset->{
          _id,
          url
        },
        alt
      },
      androidMockup {
        asset->{
          _id,
          url
        },
        alt
      }
    },
    contentSections[] {
      title,
      description
    },
    downloadSection {
      downloadTitle,
      appStoreLink,
      playStoreLink
    },
    _updatedAt
  }
`;

/**
 * Join GYMYG CTA Section Query
 *
 * Fetches the currently active join GYMYG CTA section with all required data.
 */
export const joinGymygCTAQuery = groq`
  *[_type == "joinGymygCTA" && isActive == true][0] {
    _id,
    title,
    subtitle,
    discountText,
    backgroundImages {
      desktop {
        asset->{
          _id,
          url
        },
        alt
      },
      mobile {
        asset->{
          _id,
          url
        },
        alt
      }
    },
    emailForm {
      formTitle,
      formDescription,
      emailPlaceholder,
      buttonText,
      privacyText
    },
    successState {
      title,
      message,
      buttonText
    },
    termsText,
    trainerFeatures[] {
      title,
      description
    },
    showTrainerFeatures,
    _updatedAt
  }
`;

/**
 * Join Gymyg Page Query
 *
 * Fetches all data needed for the Join Gymyg page in a single query for optimal performance.
 */
export const joinGymygPageQuery = groq`
{
  "joinGymygHero": *[_type == "joinGymygHero" && isActive == true][0] {
    _id,
    title,
    primaryColorTitle,
    subtitle,
    primaryButton {
      text,
      action,
      link,
      openInNewTab
    },
    secondaryButton {
      text,
      action,
      link,
      openInNewTab
    },
    backgroundImage {
      asset->{
        _id,
        url
      },
      alt
    },
    enableParticles,
    _updatedAt
  },
  "appDownloadSection": *[_type == "appDownloadSection" && isActive == true][0] {
    _id,
    badgeText,
    title,
    primaryColorTitle,
    subtitle,
    mockupImages {
      iosMockup {
        asset->{
          _id,
          url
        },
        alt
      },
      androidMockup {
        asset->{
          _id,
          url
        },
        alt
      }
    },
    contentSections[] {
      title,
      description
    },
    downloadSection {
      downloadTitle,
      appStoreLink,
      playStoreLink
    },
    _updatedAt
  },
  "joinGymygCTA": *[_type == "joinGymygCTA" && isActive == true][0] {
    _id,
    title,
    subtitle,
    discountText,
    backgroundImages {
      desktop {
        asset->{
          _id,
          url
        },
        alt
      },
      mobile {
        asset->{
          _id,
          url
        },
        alt
      }
    },
    emailForm {
      formTitle,
      formDescription,
      emailPlaceholder,
      buttonText,
      privacyText
    },
    successState {
      title,
      message,
      buttonText
    },
    termsText,
    trainerFeatures[] {
      title,
      description
    },
    showTrainerFeatures,
    _updatedAt
  }
}`;

/**
 * Contact Us Section Query
 *
 * Fetches the currently active contact us section with all required data.
 */
export const contactUsSectionQuery = groq`
  *[_type == "contactUsSection" && isActive == true][0] {
    _id,
    heroContent {
      title,
      primaryDescription,
      secondaryDescription,
      helpText
    },
    backgroundImage {
      asset->{
        _id,
        url
      },
      alt
    },
    faqLink {
      text,
      url
    },
    socialLinks[] {
      platform,
      url,
      isActive
    },
    formConfiguration {
      formTitle,
      successMessage {
        title,
        description,
        buttonText
      },
      submitButtonText,
      loadingText
    },
    _updatedAt
  }
`;

// Example of how to add more queries:
// export const allHeroSectionsQuery = groq`
//   *[_type == "heroSection"] | order(_createdAt desc) {
//     _id,
//     title,
//     isActive,
//     _createdAt
//   }
// `;
