import { defineType, defineField } from "sanity";

export const packagesFAQ = defineType({
  name: "packagesFAQ",
  title: "Packages FAQ Section",
  type: "document",
  fields: [
    defineField({
      name: "sectionTitle",
      title: "Section Title",
      type: "string",
      description: "Main title for the FAQ section",
      validation: (Rule) =>
        Rule.required()
          .max(40)
          .error("Section title should be under 40 characters."),
    }),

    defineField({
      name: "sectionDescription",
      title: "Section Description",
      type: "text",
      description: "Description text below the section title",
      validation: (Rule) =>
        Rule.required()
          .max(150)
          .error("Section description should be under 150 characters."),
    }),
    defineField({
      name: "faqCategories",
      title: "FAQ Categories",
      type: "array",
      of: [
        defineField({
          name: "faqCategory",
          title: "FAQ Category",
          type: "object",
          fields: [
            defineField({
              name: "id",
              title: "Category ID",
              type: "string",
              description: "Unique identifier for the category",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "label",
              title: "Category Label",
              type: "string",
              description: "Display name for the category",
              validation: (Rule) =>
                Rule.required()
                  .max(30)
                  .error("Category label should be under 30 characters."),
            }),
            defineField({
              name: "faqs",
              title: "FAQ Items",
              type: "array",
              of: [
                defineField({
                  name: "faqItem",
                  title: "FAQ Item",
                  type: "object",
                  fields: [
                    defineField({
                      name: "question",
                      title: "Question",
                      type: "string",
                      validation: (Rule) =>
                        Rule.required()
                          .max(200)
                          .error("Question should be under 200 characters."),
                    }),
                    defineField({
                      name: "answer",
                      title: "Answer",
                      type: "text",
                      description: "Detailed answer to the question",
                      validation: (Rule) =>
                        Rule.required()
                          .max(500)
                          .error("Answer should be under 500 characters."),
                    }),
                  ],
                  preview: {
                    select: {
                      question: "question",
                      answer: "answer",
                    },
                    prepare(selection) {
                      const { question, answer } = selection;
                      return {
                        title: question || "Untitled Question",
                        subtitle: answer
                          ? `${answer.slice(0, 50)}...`
                          : "No answer",
                      };
                    },
                  },
                }),
              ],
              validation: (Rule) => Rule.required().min(1),
            }),
          ],
          preview: {
            select: {
              label: "label",
              id: "id",
              faqs: "faqs",
            },
            prepare(selection) {
              const { label, faqs } = selection;
              const faqCount = faqs ? faqs.length : 0;
              return {
                title: label || "Untitled Category",
                subtitle: `${faqCount} FAQ${faqCount !== 1 ? "s" : ""}`,
              };
            },
          },
        }),
      ],
      validation: (Rule) =>
        Rule.required()
          .min(3)
          .max(3)
          .error("There must be exactly 3 FAQ categories."),
    }),
    defineField({
      name: "isActive",
      title: "Is Active",
      type: "boolean",
      description:
        "Only one FAQ section should be active at a time. This determines which FAQ section appears on the website.",
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: "sectionTitle",
      description: "sectionDescription",
      isActive: "isActive",
      categories: "faqCategories",
    },
    prepare(selection) {
      const { title, isActive } = selection;
      return {
        title: title || "Packages FAQ Section",
        subtitle: isActive ? "✅ Active" : "⚫ Inactive",
      };
    },
  },
});
