import { defineField, defineType } from "sanity";

export default defineType({
  name: "trainerBenefits",
  title: "Trainer Benefits Section",
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
      name: "benefits",
      title: "Benefits",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Benefit Title",
              type: "string",
              validation: (Rule) =>
                Rule.required()
                  .min(1)
                  .max(30)
                  .error(
                    "Benefit title is required and must be between 1-30 characters"
                  ),
            }),
            defineField({
              name: "description",
              title: "Benefit Description",
              type: "text",
              validation: (Rule) =>
                Rule.required()
                  .min(1)
                  .max(150)
                  .error(
                    "Benefit description is required and must be between 1-150 characters"
                  ),
            }),
            defineField({
              name: "icon",
              title: "Icon",
              type: "string",
              options: {
                list: [
                  { title: "Users", value: "Users" },
                  { title: "Calendar", value: "Calendar" },
                  { title: "Award", value: "Award" },
                  { title: "Dumbbell", value: "Dumbbell" },
                  { title: "Arrow Right", value: "ArrowRight" },
                  { title: "Heart", value: "Heart" },
                  { title: "Target", value: "Target" },
                  { title: "Trophy", value: "Trophy" },
                  { title: "Star", value: "Star" },
                  { title: "Shield", value: "Shield" },
                  { title: "Zap", value: "Zap" },
                  { title: "Trending Up", value: "TrendingUp" },
                ],
              },
              validation: (Rule) => Rule.required(),
              description: "Choose an icon for this benefit",
            }),
          ],
          preview: {
            select: {
              title: "title",
              subtitle: "description",
              icon: "icon",
            },
            prepare(selection) {
              const { title, subtitle, icon } = selection;
              return {
                title: title || "Benefit",
                subtitle: subtitle || "No description",
                media: () => `📦 ${icon}`,
              };
            },
          },
        },
      ],
      validation: (Rule) =>
        Rule.required()
          .min(3)
          .max(9)
          .error("There must be between 3-9 benefits"),
    }),
    defineField({
      name: "isActive",
      title: "Is Active",
      type: "boolean",
      initialValue: true,
      description:
        "Only one trainer benefits section should be active at a time. This determines which trainer benefits section appears on the website.",
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
        title: title || "Trainer Benefits Section",
        subtitle: isActive ? "✅ Active" : "⚫ Inactive",
      };
    },
  },
});
