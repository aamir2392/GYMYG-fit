import { defineField, defineType } from "sanity";

export default defineType({
  name: "humanConnection",
  title: "Human Connection Section",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Section Title",
      type: "string",
      validation: (Rule) =>
        Rule.required()
          .min(1)
          .max(100)
          .error(
            "Section title is required and must be between 1-100 characters"
          ),
    }),
    defineField({
      name: "description1",
      title: "First Description Paragraph",
      type: "text",
      validation: (Rule) =>
        Rule.required()
          .min(1)
          .max(500)
          .error(
            "First description is required and must be between 1-500 characters"
          ),
    }),
    defineField({
      name: "description2",
      title: "Second Description Paragraph",
      type: "text",
      validation: (Rule) =>
        Rule.max(500).error(
          "Second description must be 500 characters or less"
        ),
    }),
    defineField({
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: {
        hotspot: true,
      },
      description: "Optional main image for the section",
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
          description:
            "Important for SEO and accessibility. Describe what the image shows.",
          validation: (Rule) =>
            Rule.max(100).error("Alt text must not exceed 100 characters"),
        },
      ],
    }),
    defineField({
      name: "mainImageAlt",
      title: "Main Image Alt Text (Legacy)",
      type: "string",
      description: "Legacy field - use the alt field in the image instead",
      validation: (Rule) =>
        Rule.max(150).error("Alt text must not exceed 150 characters"),
      hidden: true, // Hide this field since we have alt in the image
    }),
    defineField({
      name: "features",
      title: "Features",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "icon",
              title: "Icon",
              type: "string",
              description: "Select an icon from the available options",
              options: {
                list: [
                  { title: "Users (Community, People)", value: "users" },
                  { title: "Dumbbell (Gym, Fitness)", value: "dumbbell" },
                  { title: "Globe (Global, Worldwide)", value: "globe" },
                  { title: "Star (Excellence, Rating)", value: "star" },
                  { title: "Heart (Health, Wellness)", value: "heart" },
                  { title: "Trophy (Achievement, Success)", value: "trophy" },
                  { title: "Target (Goals, Focus)", value: "target" },
                  { title: "Activity (Fitness Tracking)", value: "activity" },
                ],
                layout: "dropdown",
              },
              validation: (Rule) =>
                Rule.required().error("Icon selection is required"),
            }),
            defineField({
              name: "title",
              title: "Feature Title",
              type: "string",
              validation: (Rule) =>
                Rule.required()
                  .min(1)
                  .max(50)
                  .error(
                    "Feature title is required and must be between 1-50 characters"
                  ),
            }),
            defineField({
              name: "description",
              title: "Feature Description",
              type: "text",
              validation: (Rule) =>
                Rule.required()
                  .min(1)
                  .max(200)
                  .error(
                    "Feature description is required and must be between 1-200 characters"
                  ),
            }),
          ],
          preview: {
            select: {
              title: "title",
              icon: "icon",
            },
            prepare(selection) {
              const { title, icon } = selection;
              return {
                title: title || "Untitled Feature",
                subtitle: `Icon: ${icon || "No icon"}`,
              };
            },
          },
        },
      ],
      validation: (Rule) =>
        Rule.required()
          .min(2)
          .max(6)
          .error("At least 1 feature is required, maximum 6 features allowed"),
    }),
    defineField({
      name: "isActive",
      title: "Is Active",
      type: "boolean",
      description:
        "Only one human connection section should be active at a time. This determines which human connection section appears on the website.",
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
    prepare(selection) {
      const { title, isActive } = selection;
      const activeStatus = isActive ? "✅ Active" : "⚫ Inactive";
      return {
        title: title || "Human Connection Section",
        subtitle: activeStatus,
      };
    },
  },
});
