/**
 * Hero Section Schema for Sanity CMS
 *
 * This file defines the content structure for the website's hero section.
 * It allows content editors to manage all hero section content through Sanity Studio
 * without needing to modify code.
 *
 * Schema Structure:
 * - Document type: 'heroSection'
 * - Multiple hero sections can exist, but only one should be active at a time
 * - Includes validation rules to ensure required content is provided
 * - Supports rich media (images, videos) with proper fallbacks
 */

import { defineType, defineField } from "sanity";

export const homeHeroSection = defineType({
  name: "homeHeroSection",
  title: "Home Hero Section",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Main Title",
      type: "string",
      description: 'The main headline text (e.g., "YOUR GYM. YOUR IMAGE.")',
      validation: (Rule) =>
        Rule.required()
          .min(1)
          .max(30)
          .error("Title is required and must be between 1-30 characters"),
    }),

    // SUBTITLE/DESCRIPTION
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "text",
      description: "The subtitle/description text below the main title",
      validation: (Rule) =>
        Rule.required()
          .min(1)
          .max(100)
          .error("Subtitle is required and must be between 1-100 characters"),
    }),

    // LOGO IMAGE
    defineField({
      name: "logo",
      title: "Logo Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required().error("Logo image is required"),
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
          description:
            "Important for SEO and accessibility. Describe what the image shows.",
          validation: (Rule) =>
            Rule.max(50).error("Alt text must not exceed 50 characters"),
        },
      ],
    }),

    // BACKGROUND MEDIA (Video with Image Fallback)
    defineField({
      name: "backgroundVideo",
      title: "Background Video",
      type: "object",
      fields: [
        {
          name: "backgroundVideo",
          title: "Background Video",
          type: "file",
          options: {
            accept: "video/*",
          },
          description: "Background video file",
        },
        {
          name: "fallbackImage",
          title: "Fallback Image",
          type: "image",

          description:
            "Image to show if video fails to load or on slower connections",
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alternative Text",
              description: "Alternative text for the fallback image",
              validation: (Rule) =>
                Rule.max(50).error("Alt text must not exceed 50 characters"),
            },
          ],
        },
      ],
    }),

    // PRIMARY CALL-TO-ACTION BUTTON
    defineField({
      name: "primaryButton",
      title: "Primary Button",
      type: "object",
      fields: [
        {
          name: "text",
          title: "Button Text",
          type: "string",
          validation: (Rule) =>
            Rule.required()
              .min(1)
              .max(25)
              .error(
                "Button text is required and must be between 1-25 characters"
              ),
        },
        {
          name: "link",
          title: "Button Link",
          type: "string",
          description:
            'URL or page path (e.g., "/join-gymyg", "https://external-site.com")',
          validation: (Rule) =>
            Rule.required().min(1).error("Button link is required"),
        },
      ],
    }),

    // SECONDARY CALL-TO-ACTION BUTTON
    defineField({
      name: "secondaryButton",
      title: "Secondary Button",
      type: "object",
      fields: [
        {
          name: "text",
          title: "Button Text",
          type: "string",
          validation: (Rule) =>
            Rule.required()
              .min(1)
              .max(25)
              .error(
                "Button text is required and must be between 1-25 characters"
              ),
        },
        {
          name: "link",
          title: "Button Link",
          type: "string",
          description: 'URL or page path (e.g., "/packages", "/about")',
          validation: (Rule) =>
            Rule.required().min(1).error("Button link is required"),
        },
      ],
    }),

    // FEATURE STATS/HIGHLIGHTS
    defineField({
      name: "features",
      title: "Feature Stats",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "icon",
              title: "Icon Name",
              type: "string",
              description:
                'Lucide icon name (e.g., "users", "dumbbell", "globe")',
              options: {
                list: [
                  { title: "Users", value: "users" },
                  { title: "Dumbbell", value: "dumbbell" },
                  { title: "Globe", value: "globe" },
                  { title: "Star", value: "star" },
                  { title: "Heart", value: "heart" },
                  { title: "Trophy", value: "trophy" },
                  { title: "Target", value: "target" },
                  { title: "Activity", value: "activity" },
                ],
              },
              validation: (Rule) =>
                Rule.required().error("Icon selection is required"),
            },
            {
              name: "text",
              title: "Feature Text",
              type: "string",
              description:
                'Text to display (e.g., "10,000+ members", "Expert trainers")',
              validation: (Rule) =>
                Rule.required()
                  .min(1)
                  .max(20)
                  .error(
                    "Feature text is required and must be between 1-20 characters"
                  ),
            },
          ],
          preview: {
            select: {
              title: "text",
              subtitle: "icon",
            },
          },
        },
      ],
      validation: (Rule) =>
        Rule.required()
          .min(3)
          .max(6)
          .error("Minimum 3 features allowed and maximum 6"),
    }),

    // SCROLL INDICATOR TEXT
    defineField({
      name: "scrollText",
      title: "Scroll Indicator Text",
      type: "string",
      description:
        'Text shown at the bottom with scroll arrow (e.g., "Scroll to explore")',
      initialValue: "Scroll to explore",
      validation: (Rule) =>
        Rule.min(1)
          .max(20)
          .error("Scroll text must be between 1-20 characters"),
    }),

    // ACTIVATION TOGGLE
    defineField({
      name: "isActive",
      title: "Is Active",
      type: "boolean",
      description:
        "Only one hero section should be active at a time. This determines which hero section appears on the website.",
      initialValue: false,
      validation: (Rule) => Rule.required().error("Active status is required"),
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "subtitle",
      media: "logo",
      isActive: "isActive",
    },
    prepare({ title, media, isActive }) {
      return {
        title: title || "Untitled Hero Section",
        subtitle: isActive ? "✅ Active" : "⚫ Inactive",
        media,
      };
    },
  },
  orderings: [
    {
      title: "Created Date",
      name: "createdDesc",
      by: [{ field: "_createdAt", direction: "desc" }],
    },
  ],
});
