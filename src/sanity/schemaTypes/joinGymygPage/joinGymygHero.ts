import { defineType, defineField } from "sanity";

export const joinGymygHero = defineType({
  name: "joinGymygHero",
  title: "Join Gymyg Hero Section",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Main Title (White Text)",
      type: "text",
      description:
        "Main heading text in white color. Use line breaks for multiple lines.",
      validation: (Rule) =>
        Rule.required()
          .max(200)
          .error("Main title should be under 200 characters."),
    }),
    defineField({
      name: "primaryColorTitle",
      title: "Primary Color Title",
      type: "text",
      description:
        "Text that will be displayed in primary color below the main title",
      validation: (Rule) =>
        Rule.required()
          .max(100)
          .error("Primary color title should be under 100 characters."),
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle/Description",
      type: "text",
      description: "Descriptive text below the main title",
      validation: (Rule) =>
        Rule.required()
          .max(300)
          .error("Subtitle should be under 300 characters."),
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
              .max(25)
              .error("Button text should be under 25 characters."),
        }),
        defineField({
          name: "action",
          title: "Button Action",
          type: "string",
          options: {
            list: [
              {
                title: "Scroll to App Download Section",
                value: "scroll-download",
              },
              { title: "External Link", value: "external-link" },
              { title: "Internal Link", value: "internal-link" },
            ],
          },
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "link",
          title: "Link URL",
          type: "string",
          description:
            'URL or page path (e.g., "/packages", "https://external-site.com"). Required when action is External Link or Internal Link.',
          hidden: ({ parent }) => parent?.action === "scroll-download",
        }),
        defineField({
          name: "openInNewTab",
          title: "Open in New Tab",
          type: "boolean",
          description: "Only applies to external links",
          hidden: ({ parent }) => parent?.action !== "external-link",
          initialValue: false,
        }),
      ],
      validation: (Rule) => Rule.required(),
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
              .max(25)
              .error("Button text should be under 25 characters."),
        }),
        defineField({
          name: "action",
          title: "Button Action",
          type: "string",
          options: {
            list: [
              {
                title: "Scroll to App Download Section",
                value: "scroll-download",
              },
              { title: "External Link", value: "external-link" },
              { title: "Internal Link", value: "internal-link" },
            ],
          },
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "link",
          title: "Link URL",
          type: "string",
          description:
            'URL or page path (e.g., "/packages", "https://external-site.com"). Required when action is External Link or Internal Link.',
          hidden: ({ parent }) => parent?.action === "scroll-download",
        }),
        defineField({
          name: "openInNewTab",
          title: "Open in New Tab",
          type: "boolean",
          description: "Only applies to external links",
          hidden: ({ parent }) => parent?.action !== "external-link",
          initialValue: false,
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "backgroundImage",
      title: "Background Image",
      type: "image",
      description: "Optional background image for the hero section",
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: "alt",
          title: "Alt Text",
          type: "string",
          description: "Alternative text for accessibility",
        }),
      ],
    }),
    defineField({
      name: "enableParticles",
      title: "Enable Animated Particles",
      type: "boolean",
      description: "Show animated particles in the background",
      initialValue: true,
    }),
    defineField({
      name: "isActive",
      title: "Is Active",
      type: "boolean",
      description:
        "Only one hero section for join GYMYG should be active at a time. This determines which hero section for join GYMYG page appears on the website.",

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
