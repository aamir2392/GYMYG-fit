/**
 * Trainer Map Section Schema for Sanity CMS
 *
 * This file defines the content structure for the trainer map section.
 * It allows content editors to manage the section title, description,
 * and map image through Sanity Studio.
 *
 * Schema Structure:
 * - Document type: 'trainerMapSection'
 * - Only one active trainer map section should exist
 * - Includes validation rules for required content
 * - Supports custom map image uploads
 */

import { defineType, defineField } from "sanity";

export const trainerMapSection = defineType({
  name: "trainerMapSection",
  title: "Trainer Map Section",
  type: "document",
  fields: [
    // SECTION TITLE
    defineField({
      name: "title",
      title: "Section Title",
      type: "string",
      description: "The main title for the trainer map section",
      validation: (Rule) =>
        Rule.required()
          .min(1)
          .max(80)
          .error(
            "Section title is required and must be between 1-80 characters"
          ),
      initialValue: "SOME OF THE LEADING TRAINERS AROUND THE WORLD",
    }),

    // SECTION DESCRIPTION
    defineField({
      name: "description",
      title: "Section Description",
      type: "text",
      description: "The description text below the title",
      validation: (Rule) =>
        Rule.required()
          .min(1)
          .max(400)
          .error(
            "Section description is required and must be between 1-400 characters"
          ),
      initialValue:
        "Connect with the top-notch trainers of the fitness industry around the world. Experience a diverse range of training styles and expertise. Join GYMYG today and become part of a global community of fitness pros.",
    }),

    // WORLD MAP IMAGE
    defineField({
      name: "mapImage",
      title: "World Map Image",
      type: "image",
      description: "The world map image showing trainer locations",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
          description:
            "Alt text for the map image (important for accessibility)",
          validation: (Rule) =>
            Rule.required()
              .min(1)
              .max(100)
              .error(
                "Alt text is required and must be between 1-100 characters"
              ),
          initialValue: "World map with trainers",
        },
      ],
      validation: (Rule) => Rule.required().error("Map image is required"),
    }),

    // ACTIVATION TOGGLE
    defineField({
      name: "isActive",
      title: "Is Active",
      type: "boolean",
      description:
        "Only one trainer map section should be active at a time. This determines which trainer map section appears on the website.",
      initialValue: false,
      validation: (Rule) => Rule.required().error("Active status is required"),
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "description",
      media: "mapImage",
      isActive: "isActive",
    },
    prepare(selection) {
      const { title, subtitle, media, isActive } = selection;
      const activeStatus = isActive ? "✅ Active" : "⚫ Inactive";
      return {
        title: title || "Trainer Map Section",
        subtitle: `${activeStatus} • ${
          subtitle ? subtitle.slice(0, 50) + "..." : "No description"
        }`,
        media,
      };
    },
  },
});

export default trainerMapSection;
