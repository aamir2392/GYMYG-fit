import { defineField, defineType } from "sanity";

export default defineType({
  name: "contactUsSection",
  title: "Contact Us Section",
  type: "document",
  fields: [
    defineField({
      name: "heroContent",
      title: "Hero Content",
      type: "object",
      description: "Main content displayed on the left side",
      fields: [
        {
          name: "title",
          title: "Main Title",
          type: "string",
          description: "Main headline (e.g., 'Contact us.')",
          initialValue: "Contact us.",
          validation: (Rule) =>
            Rule.required()
              .min(1)
              .max(20)
              .error(
                "Main title is required and must be between 1-20 characters"
              ),
        },
        {
          name: "primaryDescription",
          title: "Primary Description",
          type: "string",
          description: "First description line",
          initialValue: "Questions? Inquiries? Concerns?",
          validation: (Rule) =>
            Rule.required()
              .min(1)
              .max(40)
              .error(
                "Primary description is required and must be between 1-40 characters"
              ),
        },
        {
          name: "secondaryDescription",
          title: "Secondary Description",
          type: "text",
          description: "Text before the FAQ link",
          initialValue: "Check out our",
          validation: (Rule) =>
            Rule.required()
              .min(1)
              .max(100)
              .error(
                "Secondary description is required and must be between 1-100 characters"
              ),
        },
        defineField({
          name: "faqLink",
          title: "FAQ Link",
          type: "object",
          description: "Link to FAQ section",
          fields: [
            {
              name: "text",
              title: "Link Text",
              type: "string",
              description: "Text for the FAQ link",
              initialValue: "Frequently Asked Questions",
              validation: (Rule) =>
                Rule.required()
                  .min(1)
                  .max(50)
                  .error(
                    "FAQ link text is required and must be between 1-50 characters"
                  ),
            },
            {
              name: "url",
              title: "FAQ URL",
              type: "string",
              description: "URL to the FAQ section",
              initialValue: "/packages#FAQs",
              validation: (Rule) =>
                Rule.required().error("FAQ URL is required"),
            },
          ],
          validation: (Rule) => Rule.required(),
        }),
        {
          name: "helpText",
          title: "Help Text",
          type: "text",
          description: "Bottom description text",
          initialValue:
            "If we can be of any more help, send us a message and our team will get back to you shortly.",
          validation: (Rule) =>
            Rule.required()
              .min(1)
              .max(100)
              .error(
                "Help text is required and must be between 1-100 characters"
              ),
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "backgroundImage",
      title: "Background Image",
      type: "image",
      description:
        "Background image for the contact section (recommended: 800x600px)",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
          description: "Important for SEO and accessibility",
          initialValue: "Contact us background",
          validation: (Rule) =>
            Rule.required().error(
              "Alt text is required and must be between 1-50 characters"
            ),
        },
      ],
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "socialLinks",
      title: "Social Media Links",
      type: "array",
      description: "Social media links displayed at the bottom",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "platform",
              title: "Platform",
              type: "string",
              options: {
                list: [
                  { title: "Instagram", value: "instagram" },
                  { title: "Twitter", value: "twitter" },
                  { title: "TikTok", value: "tiktok" },
                  { title: "Facebook", value: "facebook" },
                  { title: "LinkedIn", value: "linkedin" },
                  { title: "YouTube", value: "youtube" },
                ],
              },
              validation: (Rule) => Rule.required(),
            },
            {
              name: "url",
              title: "URL",
              type: "url",
              description: "Full URL to the social media profile",
              validation: (Rule) =>
                Rule.required().uri({
                  scheme: ["http", "https"],
                }),
            },
            {
              name: "isActive",
              title: "Show Link",
              type: "boolean",
              description:
                "Only one social link should be active at a time. This determines which social link appears on the website.",
              initialValue: true,
              validation: (Rule) => Rule.required(),
            },
          ],
          preview: {
            select: {
              title: "platform",
              subtitle: "url",
              isActive: "isActive",
            },
            prepare(selection) {
              const { title, subtitle, isActive } = selection;
              return {
                title: `${title} ${isActive ? "✅" : "⚫"}`,
                subtitle: subtitle,
              };
            },
          },
        },
      ],
      initialValue: [
        {
          platform: "instagram",
          url: "https://www.instagram.com/gymygfit/",
          isActive: true,
        },
        {
          platform: "twitter",
          url: "https://x.com/gymygfit",
          isActive: true,
        },
        {
          platform: "tiktok",
          url: "https://www.tiktok.com/@gymygfit",
          isActive: true,
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: "formConfiguration",
      title: "Contact Form Configuration",
      type: "object",
      description: "Settings for the contact form",
      fields: [
        {
          name: "formTitle",
          title: "Form Title",
          type: "string",
          description: "Title above the contact form",
          initialValue: "Get in touch with us",
          validation: (Rule) =>
            Rule.required()
              .min(1)
              .max(30)
              .error(
                "Form title is required and must be between 1-30 characters"
              ),
        },
        {
          name: "successMessage",
          title: "Success Message",
          type: "object",
          fields: [
            {
              name: "title",
              title: "Success Title",
              type: "string",
              description: "Title shown after successful form submission",
              initialValue: "Message sent!",
              validation: (Rule) =>
                Rule.required()
                  .min(1)
                  .max(30)
                  .error(
                    "Success title is required and must be between 1-30 characters"
                  ),
            },
            {
              name: "description",
              title: "Success Description",
              type: "text",
              description: "Description shown after successful form submission",
              initialValue:
                "Thank you for reaching out. Our team will get back to you shortly.",
              validation: (Rule) =>
                Rule.required()
                  .min(1)
                  .max(100)
                  .error(
                    "Success description is required and must be between 1-100 characters"
                  ),
            },
            {
              name: "buttonText",
              title: "Success Button Text",
              type: "string",
              description: "Button text in success state",
              initialValue: "Send another message",
              validation: (Rule) =>
                Rule.required()
                  .min(1)
                  .max(25)
                  .error(
                    "Success button text is required and must be between 1-25 characters"
                  ),
            },
          ],
          validation: (Rule) => Rule.required(),
        },
        {
          name: "submitButtonText",
          title: "Submit Button Text",
          type: "string",
          description: "Text for the form submit button",
          initialValue: "Send",
          validation: (Rule) =>
            Rule.required()
              .min(1)
              .max(25)
              .error(
                "Submit button text is required and must be between 1-25 characters"
              ),
        },
        {
          name: "loadingText",
          title: "Loading Text",
          type: "string",
          description: "Text shown while form is submitting",
          initialValue: "Sending...",
          validation: (Rule) =>
            Rule.required()
              .min(1)
              .max(25)
              .error(
                "Loading text is required and must be between 1-25 characters"
              ),
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "isActive",
      title: "Is Active",
      type: "boolean",
      description:
        "Only one contact us section should be active at a time. This determines which contact us section appears on the website.",
      initialValue: false,
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "heroContent.title",
      subtitle: "formConfiguration.formTitle",
      media: "backgroundImage",
      isActive: "isActive",
    },
    prepare(selection) {
      const { title, isActive } = selection;
      return {
        title: `Contact Us: ${title || "Untitled"}`,
        subtitle: isActive ? "✅ Active" : "⚫ Inactive",
      };
    },
  },
});
