import { defineField, defineType } from "sanity";

export default defineType({
  name: "trainersAbout",
  title: "Trainers About Section",
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
          preview: {
            select: {
              title: "title",
              media: "image",
            },
          },
        },
      ],
      validation: (Rule) =>
        Rule.required()
          .min(2)
          .max(2)
          .error("There must be exactly 2 feature cards"),
    }),
    defineField({
      name: "isActive",
      title: "Is Active",
      type: "boolean",
      initialValue: true,
      description:
        "Only one trainers about section should be active at a time. This determines which trainers about section appears on the website.",
    }),
  ],
  preview: {
    select: {
      title: "sectionTitle",
      isActive: "isActive",
      media: "featureCards.0.image",
    },
    prepare(selection) {
      const { title, isActive } = selection;
      return {
        title: title || "Trainers About Section",
        subtitle: isActive ? "✅ Active" : "⚫ Inactive",
      };
    },
  },
});
