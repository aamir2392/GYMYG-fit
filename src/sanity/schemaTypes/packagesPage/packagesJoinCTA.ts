import { defineField, defineType } from "sanity";

export default defineType({
  name: "packagesJoinCTA",
  title: "Packages Join CTA Section",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Main Title",
      type: "string",
      description: "The main headline text for packages page",
      initialValue: "START YOUR FITNESS JOURNEY",
      validation: (Rule) =>
        Rule.required()
          .max(40)
          .error("Main title should be under 40 characters."),
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "text",
      description: "The subtitle text with package-specific messaging",
      initialValue: "CHOOSE YOUR PACKAGE AND GET 40% OFF YOUR FIRST PURCHASE",
      validation: (Rule) =>
        Rule.required()
          .max(150)
          .error("Subtitle should be under 150 characters."),
    }),

    defineField({
      name: "backgroundImages",
      title: "Background Images",
      type: "object",
      fields: [
        {
          name: "desktop",
          title: "Desktop Image",
          type: "image",
          description: "Background image for desktop screens",
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alternative Text",
              description: "Important for SEO and accessibility",
              validation: (Rule) => Rule.required(),
            },
          ],
          validation: (Rule) => Rule.required(),
        },
        {
          name: "mobile",
          title: "Mobile Image",
          type: "image",
          description: "Background image for mobile screens",
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alternative Text",
              description: "Important for SEO and accessibility",
              validation: (Rule) => Rule.required(),
            },
          ],
          validation: (Rule) => Rule.required(),
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "emailForm",
      title: "Email Form Content",
      type: "object",
      fields: [
        {
          name: "formTitle",
          title: "Form Title",
          type: "string",
          description: "Title above the email form",
          initialValue: "Get Your Package Discount",
          validation: (Rule) =>
            Rule.required()
              .max(40)
              .error("Form title should be under 40 characters."),
        },
        {
          name: "formDescription",
          title: "Form Description",
          type: "text",
          description: "Description text below the form title",
          initialValue:
            "Enter your email to receive your exclusive package discount code.",
          validation: (Rule) =>
            Rule.required()
              .max(120)
              .error("Form description should be under 120 characters."),
        },
        {
          name: "emailPlaceholder",
          title: "Email Placeholder",
          type: "string",
          description: "Placeholder text for the email input field",
          initialValue: "Your email address",
          validation: (Rule) =>
            Rule.required()
              .max(30)
              .error("Email placeholder should be under 30 characters."),
        },
        {
          name: "buttonText",
          title: "Submit Button Text",
          type: "string",
          description: "Text for the form submit button",
          initialValue: "Get Package Discount",
          validation: (Rule) =>
            Rule.required()
              .max(30)
              .error("Button text should be under 30 characters."),
        },
        {
          name: "privacyText",
          title: "Privacy Text",
          type: "text",
          description: "Privacy notice below the form",
          initialValue:
            "By submitting, you agree to receive package updates and marketing emails from GYMYG. You can unsubscribe at any time.",
          validation: (Rule) =>
            Rule.max(200).error("Privacy text should be under 200 characters."),
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "successState",
      title: "Success State Content",
      type: "object",
      fields: [
        {
          name: "title",
          title: "Success Title",
          type: "string",
          description: "Title shown after successful email submission",
          initialValue: "Package Discount Sent!",
          validation: (Rule) =>
            Rule.required()
              .max(40)
              .error("Success title should be under 40 characters."),
        },
        {
          name: "message",
          title: "Success Message",
          type: "text",
          description: "Message shown after successful email submission",
          initialValue:
            "Your package discount code has been sent to {email}. Choose your package and save 40%!",
          validation: (Rule) =>
            Rule.required()
              .max(120)
              .error("Success message should be under 120 characters."),
        },
        {
          name: "buttonText",
          title: "Success Button Text",
          type: "string",
          description: "Text for the button in success state",
          initialValue: "Send Another Code",
          validation: (Rule) =>
            Rule.required()
              .max(30)
              .error("Button text should be under 30 characters."),
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "termsText",
      title: "Terms & Conditions",
      type: "text",
      description: "Terms and conditions text at the bottom",
      initialValue:
        "Discount valid for new package purchases only. Cannot be combined with other offers. See package details for full terms.",
      validation: (Rule) =>
        Rule.max(250).error(
          "Terms & Conditions should be under 250 characters."
        ),
    }),
    defineField({
      name: "isActive",
      title: "Is Active",
      type: "boolean",
      description:
        "Only one CTA section should be active at a time. This determines which CTA section appears on the website.",
      initialValue: false,
      validation: (Rule) => Rule.required().error("Active status is required"),
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "subtitle",
      media: "backgroundImages.desktop",
      isActive: "isActive",
    },
    prepare(selection) {
      const { title, isActive } = selection;
      return {
        title: `${title || "Join CTA Section"}`,
        subtitle: isActive ? "✅ Active" : "⚫ Inactive",
      };
    },
  },
});
