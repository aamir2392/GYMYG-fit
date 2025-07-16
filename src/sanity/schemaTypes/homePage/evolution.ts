import { defineField, defineType } from "sanity";

export default defineType({
  name: "evolution",
  title: "Evolution Section",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Section Title",
      type: "string",
      validation: (Rule) =>
        Rule.required()
          .min(1)
          .max(50)
          .error(
            "Section title is required and must be between 1-50 characters"
          ),
    }),
    defineField({
      name: "description",
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
      name: "evolutionCards",
      title: "Evolution Cards",
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
                  .max(40)
                  .error(
                    "Card title is required and must be between 1-40 characters"
                  ),
            }),
            defineField({
              name: "description",
              title: "Card Description",
              type: "text",
              validation: (Rule) =>
                Rule.required()
                  .min(1)
                  .max(150)
                  .error(
                    "Card description is required and must be between 1-150 characters"
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
              fields: [
                {
                  name: "alt",
                  type: "string",
                  title: "Alternative Text",
                  description:
                    "Important for SEO and accessibility. Describe what the image shows.",
                  validation: (Rule) =>
                    Rule.max(50).error(
                      "Alt text must not exceed 50 characters"
                    ),
                },
              ],
            }),

            defineField({
              name: "iconType",
              title: "Icon Type",
              type: "string",
              options: {
                list: [
                  { title: "Video", value: "video" },
                  { title: "Users", value: "users" },
                  { title: "Message Circle", value: "messageCircle" },
                ],
              },
              validation: (Rule) =>
                Rule.required().error("Icon type selection is required"),
            }),
          ],
        },
      ],
      validation: (Rule) =>
        Rule.required()
          .min(1)
          .max(6)
          .error(
            "Evolution cards are required, minimum 1 and maximum 6 cards allowed"
          ),
    }),
    defineField({
      name: "featuredTitle",
      title: "Featured Section Title",
      type: "string",
      validation: (Rule) =>
        Rule.required()
          .min(1)
          .max(50)
          .error(
            "Featured title is required and must be between 1-50 characters"
          ),
    }),
    defineField({
      name: "featuredDescription",
      title: "Featured Section Description",
      type: "text",
      validation: (Rule) =>
        Rule.required()
          .min(1)
          .max(300)
          .error(
            "Featured description is required and must be between 1-300 characters"
          ),
    }),
    defineField({
      name: "featuredQuote",
      title: "Featured Quote",
      type: "text",
      validation: (Rule) =>
        Rule.required()
          .min(1)
          .max(200)
          .error(
            "Featured quote is required and must be between 1-200 characters"
          ),
    }),
    defineField({
      name: "featuredImage",
      title: "Featured Section Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required().error("Featured image is required"),
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
      name: "iosDownloadUrl",
      title: "iOS Download URL",
      type: "url",
      validation: (Rule) =>
        Rule.required()
          .uri({
            scheme: ["http", "https"],
          })
          .error("iOS download URL is required and must be a valid URL"),
    }),
    defineField({
      name: "androidDownloadUrl",
      title: "Android Download URL",
      type: "url",
      validation: (Rule) =>
        Rule.required()
          .uri({
            scheme: ["http", "https"],
          })
          .error("Android download URL is required and must be a valid URL"),
    }),
    defineField({
      name: "communityTitle",
      title: "Community Section Title",
      type: "string",
      validation: (Rule) =>
        Rule.required()
          .min(1)
          .max(50)
          .error(
            "Community title is required and must be between 1-50 characters"
          ),
    }),
    defineField({
      name: "communityDescription",
      title: "Community Section Description",
      type: "string",
      validation: (Rule) =>
        Rule.required()
          .min(1)
          .max(150)
          .error(
            "Community description is required and must be between 1-150 characters"
          ),
    }),

    // ACTIVATION TOGGLE
    defineField({
      name: "isActive",
      title: "Is Active",
      type: "boolean",
      description:
        "Only one evolution section should be active at a time. This determines which evolution section appears on the website.",
      initialValue: false,
      validation: (Rule) =>
        Rule.required().error("Activation status is required"),
    }),
  ],
  preview: {
    select: {
      title: "title",
      isActive: "isActive",
    },
    prepare({ title, isActive }) {
      return {
        title: title || "Untitled Evolution Section",
        subtitle: isActive ? "✅ Active" : "⚫ Inactive",
      };
    },
  },
});
