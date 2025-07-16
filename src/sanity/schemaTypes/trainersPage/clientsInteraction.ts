import { defineField, defineType } from "sanity";

export default defineType({
  name: "clientsInteraction",
  title: "Clients Interaction Section",
  type: "document",
  fields: [
    defineField({
      name: "firstBlock",
      title: "First Content Block",
      type: "object",
      fields: [
        defineField({
          name: "title",
          title: "Title",
          type: "string",
          validation: (Rule) =>
            Rule.required()
              .min(1)
              .max(30)
              .error("Title is required and must be between 1-30 characters"),
        }),
        defineField({
          name: "description",
          title: "Description",
          type: "array",
          of: [{ type: "block" }],
          validation: (Rule) =>
            Rule.required().custom((value) => {
              if (!value || value.length === 0) {
                return "Description is required";
              }

              // Count characters in rich text content
              const textContent = value
                .map((block: unknown) => {
                  const typedBlock = block as {
                    _type: string;
                    children?: Array<{ text?: string }>;
                  };
                  if (typedBlock._type === "block" && typedBlock.children) {
                    return typedBlock.children
                      .map((child) => child.text || "")
                      .join("");
                  }
                  return "";
                })
                .join("")
                .trim();

              if (textContent.length === 0) {
                return "Description cannot be empty";
              }

              if (textContent.length > 400) {
                return `Description must be 400 characters or less (currently ${textContent.length} characters)`;
              }

              return true;
            }),
          description:
            "Rich text content for the first block (max 400 characters)",
        }),
        defineField({
          name: "image",
          title: "Image",
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
      name: "secondBlock",
      title: "Second Content Block",
      type: "object",
      fields: [
        defineField({
          name: "title",
          title: "Title",
          type: "string",
          validation: (Rule) =>
            Rule.required()
              .min(1)
              .max(30)
              .error("Title is required and must be between 1-30 characters"),
        }),
        defineField({
          name: "description",
          title: "Description",
          type: "array",
          of: [{ type: "block" }],
          validation: (Rule) =>
            Rule.required().custom((value) => {
              if (!value || value.length === 0) {
                return "Description is required";
              }

              // Count characters in rich text content
              const textContent = value
                .map((block: unknown) => {
                  const typedBlock = block as {
                    _type: string;
                    children?: Array<{ text?: string }>;
                  };
                  if (typedBlock._type === "block" && typedBlock.children) {
                    return typedBlock.children
                      .map((child) => child.text || "")
                      .join("");
                  }
                  return "";
                })
                .join("")
                .trim();

              if (textContent.length === 0) {
                return "Description cannot be empty";
              }

              if (textContent.length > 400) {
                return `Description must be 400 characters or less (currently ${textContent.length} characters)`;
              }

              return true;
            }),
          description:
            "Rich text content for the second block (max 400 characters)",
        }),
        defineField({
          name: "image",
          title: "Image",
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
            Rule.required()

              .error(
                "Image alt text is required and must be between 1-50 characters"
              ),
        }),
      ],
    }),
    defineField({
      name: "isActive",
      title: "Is Active",
      type: "boolean",
      initialValue: true,
      description:
        "Only one clients interaction section should be active at a time. This determines which clients interaction section appears on the website.",
    }),
  ],
  preview: {
    select: {
      title: "firstBlock.title",
      isActive: "isActive",
      media: "firstBlock.image",
    },
    prepare(selection) {
      const { isActive } = selection;
      return {
        title: `Clients Interaction`,
        subtitle: isActive ? "✅ Active" : "⚫ Inactive",
      };
    },
  },
});
