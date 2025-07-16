import { defineField, defineType } from "sanity";

export default defineType({
  name: "homePricing",
  title: "Home Pricing Section",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Section Title",
      type: "string",
      validation: (Rule) =>
        Rule.required()
          .min(1)
          .max(60)
          .error(
            "Section title is required and must be between 1-60 characters"
          ),
    }),
    defineField({
      name: "description",
      title: "Section Description",
      type: "text",
      validation: (Rule) =>
        Rule.required()
          .min(1)
          .max(300)
          .error(
            "Section description is required and must be between 1-300 characters"
          ),
    }),
    defineField({
      name: "quote",
      title: "Featured Quote",
      type: "text",
      validation: (Rule) =>
        Rule.required()
          .min(1)
          .max(300)
          .error(
            "Featured quote is required and must be between 1-300 characters"
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
            'URL or page path (e.g., "/join-gymyg", "https://external-site.com")',
          validation: (Rule) =>
            Rule.required().min(1).error("Button link is required"),
        }),
      ],
      validation: (Rule) => Rule.required().error("Primary button is required"),
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
          description: 'URL or page path (e.g., "/packages", "/about")',
          validation: (Rule) =>
            Rule.required().min(1).error("Button link is required"),
        }),
      ],
      validation: (Rule) =>
        Rule.required().error("Secondary button is required"),
    }),
    defineField({
      name: "pricingImages",
      title: "Pricing Images",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "image",
              title: "Image",
              type: "image",
              options: {
                hotspot: true,
              },
              validation: (Rule) =>
                Rule.required().error("Pricing image is required"),
            }),
            defineField({
              name: "alt",
              title: "Alt Text",
              type: "string",
              validation: (Rule) =>
                Rule.required()
                  .min(1)
                  .max(100)
                  .error(
                    "Alt text is required and must be between 1-100 characters"
                  ),
            }),
          ],
          preview: {
            select: {
              title: "alt",
              media: "image",
            },
            prepare(selection) {
              const { title, media } = selection;
              return {
                title: title || "Untitled Image",
                media: media,
              };
            },
          },
        },
      ],
      validation: (Rule) =>
        Rule.required()
          .min(1)
          .max(4)
          .error(
            "At least 1 pricing image is required, maximum 4 images allowed"
          ),
    }),
    defineField({
      name: "isActive",
      title: "Is Active",
      type: "boolean",
      description:
        "Only one home pricing section should be active at a time. This determines which home pricing section appears on the website.",
      initialValue: false,
      validation: (Rule) =>
        Rule.required().error("Activation status is required"),
    }),
  ],
  preview: {
    select: {
      title: "title",
      isActive: "isActive",
      imageCount: "pricingImages",
    },
    prepare(selection) {
      const { title, isActive, imageCount } = selection;
      const count = imageCount ? imageCount.length : 0;
      const activeStatus = isActive ? "✅ Active" : "⚫ Inactive";
      return {
        title: title || "Home Pricing Section",
        subtitle: `${activeStatus} • ${count} image${count !== 1 ? "s" : ""}`,
      };
    },
  },
});
