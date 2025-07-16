import { defineType, defineField } from "sanity";

export default defineType({
  name: "trainingOptions",
  title: "Training Options Section",
  type: "document",
  fields: [
    defineField({
      name: "sectionTitle",
      title: "Section Title",
      type: "string",
      validation: (Rule) =>
        Rule.required()
          .min(1)
          .max(30)
          .error(
            "Section title is required and must be between 1-30 characters"
          ),
    }),
    defineField({
      name: "sectionDescription",
      title: "Section Description",
      type: "text",
      validation: (Rule) =>
        Rule.required()
          .min(1)
          .max(200)
          .error(
            "Section description is required and must be between 1-200 characters"
          ),
    }),
    defineField({
      name: "trainerCard",
      title: "Trainer Card",
      type: "object",
      fields: [
        defineField({
          name: "icon",
          title: "Card Icon",
          type: "string",
          options: {
            list: [
              { title: "Arrow Right", value: "ArrowRight" },
              { title: "Award", value: "Award" },
              { title: "Calendar", value: "Calendar" },
              { title: "Check Circle", value: "CheckCircle" },
              { title: "Clock", value: "Clock" },
              { title: "Crown", value: "Crown" },
              { title: "Dumbbell", value: "Dumbbell" },
              { title: "External Link", value: "ExternalLink" },
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
        defineField({
          name: "badgeText",
          title: "Badge Text",
          type: "string",
          validation: (Rule) =>
            Rule.required()
              .min(1)
              .max(30)
              .error(
                "Badge text is required and must be between 1-30 characters"
              ),
        }),
        defineField({
          name: "title",
          title: "Card Title",
          type: "string",
          validation: (Rule) =>
            Rule.required()
              .min(1)
              .max(30)
              .error(
                "Card title is required and must be between 1-30 characters"
              ),
        }),
        defineField({
          name: "description",
          title: "Card Description",
          type: "text",
          validation: (Rule) =>
            Rule.required()
              .min(1)
              .max(200)
              .error(
                "Card description is required and must be between 1-200 characters"
              ),
        }),
        defineField({
          name: "buttonText",
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
          name: "buttonLink",
          title: "Button Link",
          type: "string",
          validation: (Rule) =>
            Rule.required().error("Button link is required"),
        }),
        defineField({
          name: "image",
          title: "Card Image",
          type: "image",
          options: {
            hotspot: true,
          },
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "imageAlt",
          title: "Image Alt Text",
          type: "string",
          validation: (Rule) =>
            Rule.required().error("Image alt text is required"),
        }),
      ],
    }),
    defineField({
      name: "eventCard",
      title: "Event Card",
      type: "object",
      fields: [
        defineField({
          name: "icon",
          title: "Card Icon",
          type: "string",
          options: {
            list: [
              { title: "Arrow Right", value: "ArrowRight" },
              { title: "Award", value: "Award" },
              { title: "Calendar", value: "Calendar" },
              { title: "Check Circle", value: "CheckCircle" },
              { title: "Clock", value: "Clock" },
              { title: "Crown", value: "Crown" },
              { title: "Dumbbell", value: "Dumbbell" },
              { title: "External Link", value: "ExternalLink" },
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
        defineField({
          name: "badgeText",
          title: "Badge Text",
          type: "string",
          validation: (Rule) =>
            Rule.required()
              .min(1)
              .max(30)
              .error(
                "Badge text is required and must be between 1-30 characters"
              ),
        }),
        defineField({
          name: "title",
          title: "Card Title",
          type: "string",
          validation: (Rule) =>
            Rule.required()
              .min(1)
              .max(30)
              .error(
                "Card title is required and must be between 1-30 characters"
              ),
        }),
        defineField({
          name: "description",
          title: "Card Description",
          type: "text",
          validation: (Rule) =>
            Rule.required()
              .min(1)
              .max(200)
              .error(
                "Card description is required and must be between 1-200 characters"
              ),
        }),
        defineField({
          name: "buttonText",
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
          name: "buttonLink",
          title: "Button Link",
          type: "string",
          validation: (Rule) =>
            Rule.required().error("Button link is required"),
        }),
        defineField({
          name: "image",
          title: "Card Image",
          type: "image",
          options: {
            hotspot: true,
          },
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "imageAlt",
          title: "Image Alt Text",
          type: "string",
          validation: (Rule) =>
            Rule.required().error("Image alt text is required"),
        }),
      ],
    }),
    defineField({
      name: "isActive",
      title: "Is Active",
      type: "boolean",
      initialValue: true,
      description:
        "Only one training options section should be active at a time. This determines which training options section appears on the website.",
    }),
  ],
  preview: {
    select: {
      title: "sectionTitle",
      isActive: "isActive",
    },
    prepare(selection) {
      const { title, isActive } = selection;
      return {
        title: title || "Training Options Section",
        subtitle: isActive ? "✅ Active" : "⚫ Inactive",
      };
    },
  },
});
