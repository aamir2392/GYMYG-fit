/**
 * Hero Section TypeScript Interfaces
 *
 * These interfaces define the shape of data returned from Sanity for hero sections.
 * They provide type safety when working with hero section data in React components.
 *
 * Benefits:
 * - Type safety: Catch errors at compile time
 * - IntelliSense: Better autocomplete in IDEs
 * - Documentation: Clear contract for data structure
 * - Refactoring: Safe renaming and restructuring
 *
 * Note: These interfaces should match the structure returned by the GROQ query
 * in src/sanity/lib/queries.ts
 */

/**
 * Complete Hero Section Data Structure
 *
 * This interface represents the full data structure returned from Sanity
 * for a hero section document. It includes all fields and nested objects.
 */
export interface HeroSectionData {
  _id: string; // Sanity document ID (required)
  title: string; // Main headline text (required)
  subtitle: string; // Description/tagline (required)

  // Logo image (optional - may not be set)
  logo?: {
    asset: {
      _id: string; // Sanity asset ID
      url: string; // CDN URL for the image
    };
    alt?: string; // Alt text for accessibility (optional)
  };

  // Background video configuration (optional)
  backgroundVideo?: {
    backgroundVideo?: {
      // Background video file (optional)
      asset: {
        _id: string;
        url: string; // CDN URL for video file
      };
    };
    fallbackImage?: {
      // Image to show if video fails (optional)
      asset: {
        _id: string;
        url: string; // CDN URL for fallback image
      };
    };
  };

  // Call-to-action buttons (both required)
  primaryButton: {
    text: string; // Button label (required)
    link: string; // Button destination URL (required)
  };

  secondaryButton: {
    text: string; // Button label (required)
    link: string; // Button destination URL (required)
  };

  // Feature stats array (required, but can be empty)
  features: Array<{
    icon: string; // Icon name (maps to Lucide icons)
    text: string; // Feature description
  }>;

  scrollText?: string; // Scroll indicator text (optional)
  _updatedAt: string; // Last modification timestamp (ISO string)
}

/**
 * Individual Hero Feature Interface
 *
 * Represents a single feature/stat item in the hero section.
 * Used for type safety when mapping over the features array.
 *
 * Example usage:
 * const feature: HeroFeature = { icon: 'users', text: '10,000+ members' }
 */
export interface HeroFeature {
  icon: string; // Icon identifier (must match iconMap keys)
  text: string; // Display text for the feature
}
