/**
 * Trainer Map Section TypeScript Interfaces
 *
 * These interfaces define the shape of data returned from Sanity for the trainer map section.
 * They provide type safety when working with trainer map data in React components.
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
 * Individual Trainer Interface
 *
 * Represents a single trainer that can be displayed on the map.
 * Used for future interactive features where specific trainers are shown.
 */
export interface Trainer {
  name: string; // Trainer's name
  location: string; // Trainer's location/city
  position: {
    top: string; // Vertical position on map (e.g., "30%")
    left: string; // Horizontal position on map (e.g., "25%")
  };
  profileImage?: {
    // Optional profile image
    asset: {
      _id: string; // Sanity asset ID
      url: string; // CDN URL for the image
    };
    alt?: string; // Alt text for accessibility
  };
}

/**
 * Complete Trainer Map Section Data Structure
 *
 * This interface represents the full data structure returned from Sanity
 * for a trainer map section document. It includes all fields and nested objects.
 */
export interface TrainerMapSectionData {
  _id: string; // Sanity document ID (required)
  title: string; // Section title (required)
  description: string; // Section description (required)

  // Map image (required)
  mapImage: {
    asset: {
      _id: string; // Sanity asset ID
      url: string; // CDN URL for the image
    };
    alt?: string; // Alt text for accessibility
  };

  // Optional array of trainers for future interactive features
  trainers?: Trainer[];

  _updatedAt: string; // Last modification timestamp (ISO string)
}
