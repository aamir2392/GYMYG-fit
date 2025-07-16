import { defineField, defineType } from "sanity";

export default defineType({
  name: "homeJoinCTA",
  title: "Home Join CTA Section",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Main Title",
      type: "string",
      description: "The main headline text (e.g., 'JOIN TODAY')",
      initialValue: "JOIN TODAY",
      validation: (Rule) =>
        Rule.required()
          .min(1)
          .max(60)
          .error("Title is required and must be between 1-60 characters"),
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "text",
      description: "The subtitle text with discount information",
      initialValue: "NEW MEMBERS GET 40% OFF OF THEIR FIRST PACKAGE PURCHASE",
      validation: (Rule) =>
        Rule.required()
          .min(1)
          .max(300)
          .error("Subtitle is required and must be between 1-300 characters"),
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
              validation: (Rule) =>
                Rule.max(50).error("Alt text must not exceed 50 characters"),
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
              validation: (Rule) =>
                Rule.max(50).error("Alt text must not exceed 50 characters"),
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
          initialValue: "Get Started Now",
          validation: (Rule) =>
            Rule.required()
              .min(1)
              .max(60)
              .error(
                "Form title is required and must be between 1-60 characters"
              ),
        },
        {
          name: "formDescription",
          title: "Form Description",
          type: "text",
          description: "Description text below the form title",
          initialValue:
            "Enter your email to receive your special discount code.",
          validation: (Rule) =>
            Rule.required()
              .min(1)
              .max(300)
              .error(
                "Form description is required and must be between 1-300 characters"
              ),
        },
        {
          name: "emailPlaceholder",
          title: "Email Placeholder",
          type: "string",
          description: "Placeholder text for the email input field",
          initialValue: "Your email address",
          validation: (Rule) =>
            Rule.required()
              .min(1)
              .max(50)
              .error(
                "Email placeholder is required and must be between 1-50 characters"
              ),
        },
        {
          name: "buttonText",
          title: "Submit Button Text",
          type: "string",
          description: "Text for the form submit button",
          initialValue: "Claim Discount",
          validation: (Rule) =>
            Rule.required()
              .min(1)
              .max(25)
              .error(
                "Button text is required and must be between 1-25 characters"
              ),
        },
        {
          name: "privacyText",
          title: "Privacy Text",
          type: "text",
          description: "Privacy notice below the form",
          initialValue:
            "By submitting, you agree to receive marketing emails from GYMYG. You can unsubscribe at any time.",
          validation: (Rule) =>
            Rule.max(500).error("Privacy text must not exceed 500 characters"),
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
          initialValue: "Thank You!",
          validation: (Rule) =>
            Rule.required()
              .min(1)
              .max(60)
              .error(
                "Success title is required and must be between 1-60 characters"
              ),
        },
        {
          name: "message",
          title: "Success Message",
          type: "text",
          description: "Message shown after successful email submission",
          initialValue:
            "Your discount code has been sent to {email}. Check your inbox to claim your 40% off.",
          validation: (Rule) =>
            Rule.required()
              .min(1)
              .max(300)
              .error(
                "Success message is required and must be between 1-300 characters"
              ),
        },
        {
          name: "buttonText",
          title: "Success Button Text",
          type: "string",
          description: "Text for the button in success state",
          initialValue: "Send Another Code",
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
    }),
    defineField({
      name: "termsText",
      title: "Terms & Conditions",
      type: "text",
      description: "Terms and conditions text at the bottom",
      initialValue:
        "Only valid for your first purchase. Not applicable for single classes purchased in the app. Cannot be combined with any other promotions.",
      validation: (Rule) =>
        Rule.max(300).error("Terms text must not exceed 300 characters"),
    }),

    defineField({
      name: "isActive",
      title: "Is Active",
      type: "boolean",
      description: "Toggle to show or hide this CTA section on the website",
      initialValue: false,
      validation: (Rule) =>
        Rule.required().error("Activation status is required"),
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
      const { title, subtitle, isActive } = selection;
      return {
        title: title || "Join CTA Section",
        subtitle: `${isActive ? "✅ Active" : "⚫ Inactive"} - ${subtitle?.substring(0, 60)}...`,
      };
    },
  },
});
