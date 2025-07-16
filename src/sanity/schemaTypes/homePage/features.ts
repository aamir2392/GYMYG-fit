import { defineField, defineType } from "sanity";

export default defineType({
  name: "features",
  title: "Features Section",
  type: "document",
  fields: [
    defineField({
      name: "sectionTitle",
      title: "Section Title (Optional)",
      type: "string",
      description: "Optional title for the features section",
      validation: (Rule) =>
        Rule.max(60).error("Section title must be 60 characters or less"),
    }),
    defineField({
      name: "sectionDescription",
      title: "Section Description (Optional)",
      type: "text",
      description: "Optional description for the features section",
      validation: (Rule) =>
        Rule.max(250).error(
          "Section description must be 250 characters or less"
        ),
    }),
    defineField({
      name: "featureCards",
      title: "Feature Cards",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Card Title",
              type: "string",
              validation: (Rule) =>
                Rule.required()
                  .min(1)
                  .max(50)
                  .error(
                    "Card title is required and must be between 1-50 characters"
                  ),
            }),
            defineField({
              name: "description",
              title: "Card Description",
              type: "text",
              validation: (Rule) =>
                Rule.required()
                  .min(1)
                  .max(300)
                  .error(
                    "Card description is required and must be between 1-300 characters"
                  ),
            }),
            defineField({
              name: "image",
              title: "Card Image",
              type: "image",
              options: {
                hotspot: true,
              },
              validation: (Rule) =>
                Rule.required().error("Card image is required"),
            }),
            defineField({
              name: "imageAlt",
              title: "Image Alt Text",
              type: "string",
              validation: (Rule) =>
                Rule.required()
                  .min(1)
                  .max(100)
                  .error(
                    "Image alt text is required and must be between 1-100 characters"
                  ),
            }),
          ],
          preview: {
            select: {
              title: "title",
              media: "image",
            },
            prepare(selection) {
              const { title } = selection;
              return {
                title: title || "Untitled Card",
                media: selection.media,
              };
            },
          },
        },
      ],
      validation: (Rule) =>
        Rule.required()
          .min(2)
          .max(2)
          .error("Exactly 2 feature cards are required."),
    }),
    defineField({
      name: "isActive",
      title: "Is Active",
      type: "boolean",
      description:
        "Only one features section should be active at a time. This determines which features section appears on the website.",
      initialValue: false,
      validation: (Rule) =>
        Rule.required().error("Activation status is required"),
    }),
  ],
  preview: {
    select: {
      title: "sectionTitle",
      subtitle: "featureCards.0.title",
      isActive: "isActive",
    },
    prepare(selection) {
      const { title, subtitle, isActive } = selection;
      const activeStatus = isActive ? "✅ Active" : "⚫ Inactive";
      return {
        title: title || "Features Section",
        subtitle: `${activeStatus} • ${subtitle ? `First card: ${subtitle}` : "No cards configured"}`,
      };
    },
  },
});
