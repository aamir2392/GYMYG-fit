import { defineField, defineType } from "sanity";

export const trainerHeroSection = defineType({
  name: "trainerHeroSection",
  title: "Trainer Hero Section",
  type: "document",
  fields: [
    defineField({
      name: "badgeText",
      title: "Badge Text",
      type: "string",
      description:
        "Text displayed in the badge (e.g., 'For Fitness Professionals')",
      validation: (Rule) =>
        Rule.required()
          .min(1)
          .max(30)
          .error("Badge text is required and must be between 1-30 characters"),
    }),
    defineField({
      name: "mainTitle",
      title: "Main Title",
      type: "string",
      description: "Main heading text (e.g., 'GYMYG FOR TRAINERS')",
      validation: (Rule) =>
        Rule.required()
          .min(1)
          .max(25)
          .error("Main title is required and must be between 1-25 characters"),
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
      description: "Main description paragraph below the title",
      validation: (Rule) =>
        Rule.required()
          .min(1)
          .max(200)
          .error(
            "Description is required and must be between 1-200 characters"
          ),
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
          description:
            "External URL or internal path (e.g., 'https://example.com' or '/packages')",
          validation: (Rule) =>
            Rule.required().error("Button link is required"),
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
          description:
            "External URL or internal path (e.g., 'https://example.com' or '/packages')",
          validation: (Rule) =>
            Rule.required().error("Button link is required"),
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "heroImage",
      title: "Hero Image",
      type: "image",
      description: "Main hero image displayed on the right side",
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: "alt",
          title: "Alt Text",
          type: "string",
          description: "Alternative text for accessibility",
          validation: (Rule) => Rule.required(),
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "trustBadge",
      title: "Trust Badge",
      type: "object",
      description: "Small trust indicator badge at bottom right",
      fields: [
        defineField({
          name: "title",
          title: "Badge Title",
          type: "string",
          validation: (Rule) =>
            Rule.required()
              .min(1)
              .max(30)
              .error(
                "Badge title is required and must be between 1-30 characters"
              ),
        }),
        defineField({
          name: "description",
          title: "Badge Description",
          type: "string",
          validation: (Rule) =>
            Rule.required()
              .min(1)
              .max(50)
              .error(
                "Badge description is required and must be between 1-50 characters"
              ),
        }),
        defineField({
          name: "icon",
          title: "Icon",
          type: "string",
          description: "Choose an icon for the badge",
          options: {
            list: [
              { title: "Key", value: "key" },
              { title: "Arrow Right", value: "ArrowRight" },
              { title: "Award", value: "Award" },
              { title: "Calendar", value: "Calendar" },
              { title: "Check Circle", value: "CheckCircle" },
              { title: "Clock", value: "Clock" },
              { title: "Crown", value: "Crown" },
              { title: "Dumbbell", value: "Dumbbell" },
              { title: "Fire", value: "Flame" },
              { title: "Heart", value: "Heart" },
              { title: "Lightning", value: "Zap" },
              { title: "Play", value: "Play" },
              { title: "Shield", value: "Shield" },
              { title: "Star", value: "Star" },
              { title: "Target", value: "Target" },
              { title: "Trophy", value: "Trophy" },
              { title: "Trending Up", value: "TrendingUp" },
              { title: "User", value: "User" },
              { title: "Users", value: "Users" },
              { title: "Zap", value: "Zap" },
            ],
          },
          validation: (Rule) => Rule.required(),
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "isActive",
      title: "Is Active",
      type: "boolean",
      description:
        "Only one trainer hero section should be active at a time. This determines which trainer hero section appears on the website.",
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: "heroContent.title",
      subtitle: "formConfiguration.formTitle",
      media: "backgroundImage",
      isActive: "isActive",
    },
    prepare(selection) {
      const { isActive } = selection;
      return {
        title: `Trainer Hero`,
        subtitle: isActive ? "✅ Active" : "⚫ Inactive",
      };
    },
  },
});
