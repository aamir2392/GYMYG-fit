import { defineType, defineField } from "sanity";

export const packagesHero = defineType({
  name: "packagesHero",
  title: "Packages Hero Section",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Main Title",
      type: "string",
      description:
        "The main heading text (e.g., 'Find Your Perfect Fitness Package')",
      validation: (Rule) =>
        Rule.required()
          .min(1)
          .max(50)
          .error("Title is required and must be between 1-50 characters"),
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "text",
      description: "The subtitle text below the main title",
      validation: (Rule) =>
        Rule.required()
          .min(1)
          .max(250)
          .error("Subtitle is required and must be between 1-250 characters"),
    }),
    defineField({
      name: "primaryButton",
      title: "Primary Button",
      type: "object",
      fields: [
        defineField({
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
        }),

        defineField({
          name: "link",
          title: "Button Link",
          type: "string",
          description: "URL or path to navigate to when clicked",
          validation: (Rule) =>
            Rule.required().min(1).error("Button link is required"),
        }),
      ],
    }),
    defineField({
      name: "secondaryButton",
      title: "Secondary Button",
      type: "object",
      fields: [
        defineField({
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
        }),
        defineField({
          name: "link",
          title: "Button Link",
          type: "string",
          description: "URL or path to navigate to when clicked",
          validation: (Rule) =>
            Rule.required().min(1).error("Button link is required"),
        }),
      ],
    }),
    defineField({
      name: "backgroundImage",
      title: "Background Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) =>
        Rule.required().error("Background image is required"),
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
    defineField({
      name: "isActive",
      title: "Is Active",
      type: "boolean",
      description: "Toggle to show/hide this section",
      initialValue: true,
      validation: (Rule) => Rule.required().error("Active status is required"),
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "subtitle",
      media: "backgroundImage",
      isActive: "isActive",
    },
    prepare(selection) {
      const { title, media, isActive } = selection;
      return {
        title: title || "Packages Hero Section",
        subtitle: isActive ? "✅ Active" : "⚫ Inactive",
        media,
      };
    },
  },
});
