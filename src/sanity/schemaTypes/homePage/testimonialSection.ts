import { defineField, defineType } from "sanity";

export default defineType({
  name: "testimonialSection",
  title: "Testimonial Section",
  type: "document",
  fields: [
    defineField({
      name: "sectionTitle",
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
      name: "sectionDescription",
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
      name: "testimonials",
      title: "Testimonials",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "name",
              title: "Client Name",
              type: "string",
              validation: (Rule) =>
                Rule.required()
                  .min(1)
                  .max(50)
                  .error(
                    "Client name is required and must be between 1-50 characters"
                  ),
            }),
            defineField({
              name: "position",
              title: "Position/Title",
              type: "string",
              validation: (Rule) =>
                Rule.required()
                  .min(1)
                  .max(100)
                  .error(
                    "Position/Title is required and must be between 1-100 characters"
                  ),
            }),
            defineField({
              name: "content",
              title: "Testimonial Content",
              type: "text",
              validation: (Rule) =>
                Rule.required()
                  .min(1)
                  .max(300)
                  .error(
                    "Testimonial content is required and must be between 1-300 characters"
                  ),
            }),
            defineField({
              name: "rating",
              title: "Rating",
              type: "number",
              validation: (Rule) =>
                Rule.required()
                  .min(1)
                  .max(5)
                  .error("Rating is required and must be between 1-5 stars"),
              initialValue: 5,
            }),
            defineField({
              name: "image",
              title: "Profile Image",
              type: "image",
              options: {
                hotspot: true,
              },
              description: "Optional profile image",
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
              name: "imageAlt",
              title: "Image Alt Text (Legacy)",
              type: "string",
              description:
                "Legacy field - use the alt field in the image instead",
              validation: (Rule) =>
                Rule.max(100).error("Alt text must not exceed 100 characters"),
              hidden: true, // Hide this field since we have alt in the image
            }),
          ],
          preview: {
            select: {
              title: "name",
              position: "position",
              media: "image",
              rating: "rating",
            },
            prepare(selection) {
              const { title, position, media, rating } = selection;
              return {
                title: title || "Untitled Client",
                subtitle: `${position || "No position"} • ${rating || 0}/5 stars`,
                media: media,
              };
            },
          },
        },
      ],
      validation: (Rule) =>
        Rule.required()
          .min(1)
          .max(20)
          .error(
            "At least 1 testimonial is required, maximum 20 testimonials allowed"
          ),
    }),
    defineField({
      name: "isActive",
      title: "Is Active",
      type: "boolean",
      description:
        "Only one testimonial section should be active at a time. This determines which testimonial section appears on the website.",
      initialValue: false,
      validation: (Rule) =>
        Rule.required().error("Activation status is required"),
    }),
  ],
  preview: {
    select: {
      title: "sectionTitle",
      isActive: "isActive",
      testimonialCount: "testimonials",
    },
    prepare(selection) {
      const { title, isActive, testimonialCount } = selection;
      const count = testimonialCount ? testimonialCount.length : 0;
      const activeStatus = isActive ? "✅ Active" : "⚫ Inactive";
      return {
        title: title || "Testimonial Section",
        subtitle: `${activeStatus} • ${count} testimonial${count !== 1 ? "s" : ""}`,
      };
    },
  },
});
