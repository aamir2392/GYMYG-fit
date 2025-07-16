import { defineType, defineField } from "sanity";

export const noProgramming = defineType({
  name: "noProgramming",
  title: "No Programming Section",
  type: "document",
  fields: [
    defineField({
      name: "badgeText",
      title: "Badge Text",
      type: "string",
      description: "Text displayed in the badge (e.g., 'Simplified Workflow')",
      validation: (Rule) =>
        Rule.required()
          .min(1)
          .max(30)
          .error("Badge text is required and must be between 1-30 characters"),
    }),
    defineField({
      name: "sectionTitle",
      title: "Section Title",
      type: "string",
      description: "Main title for the section",
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
      description: "Description text below the section title",
      validation: (Rule) =>
        Rule.required()
          .min(1)
          .max(200)
          .error(
            "Section description is required and must be between 1-200 characters"
          ),
    }),
    defineField({
      name: "backgroundImage",
      title: "Background Image",
      type: "image",
      description: "Background image for the section",
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: "alt",
          title: "Alt Text",
          type: "string",
          description: "Alternative text for accessibility",
          validation: (Rule) => Rule.required().error("Alt text is required"),
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "featureCards",
      title: "Feature Cards",
      type: "array",
      of: [
        defineField({
          name: "featureCard",
          title: "Feature Card",
          type: "object",
          fields: [
            defineField({
              name: "icon",
              title: "Icon",
              type: "string",
              description: "Choose an icon for this feature",
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
              name: "title",
              title: "Card Title",
              type: "string",
              validation: (Rule) =>
                Rule.required()
                  .min(1)
                  .max(20)
                  .error(
                    "Card title is required and must be between 1-20 characters"
                  ),
            }),
            defineField({
              name: "description",
              title: "Card Description",
              type: "text",
              validation: (Rule) =>
                Rule.required()
                  .min(1)
                  .max(100)
                  .error(
                    "Card description is required and must be between 1-100 characters"
                  ),
            }),
          ],
          preview: {
            select: {
              title: "title",
              description: "description",
              icon: "icon",
            },
            prepare(selection) {
              const { title, description, icon } = selection;
              return {
                title: title || "Untitled Card",
                subtitle: `${icon || "No icon"} - ${description ? `${description.slice(0, 50)}...` : "No description"}`,
              };
            },
          },
        }),
      ],
      validation: (Rule) =>
        Rule.required()
          .min(3)
          .max(9)
          .error("There must be between 3-9 feature cards"),
    }),
    defineField({
      name: "benefits",
      title: "Benefits List",
      type: "array",
      of: [
        defineField({
          name: "benefit",
          title: "Benefit",
          type: "string",
          validation: (Rule) =>
            Rule.required()
              .min(1)
              .max(30)
              .error("Benefit is required and must be between 1-30 characters"),
        }),
      ],
      validation: (Rule) =>
        Rule.required()
          .min(6)
          .max(10)
          .error("There must be between 6-10 benefits"),
    }),
    defineField({
      name: "isActive",
      title: "Is Active",
      type: "boolean",
      description:
        "Only one no programming section should be active at a time. This determines which no programming section appears on the website.",
      initialValue: true,
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
        title: title || "No Programming Section",
        subtitle: isActive ? "✅ Active" : "⚫ Inactive",
      };
    },
  },
});
