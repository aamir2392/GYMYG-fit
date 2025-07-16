import { defineField, defineType } from "sanity";

export default defineType({
  name: "promoModal",
  title: "Promo Modal",
  type: "document",
  fields: [
    defineField({
      name: "badge",
      title: "Badge Text",
      type: "string",
      description: "Small badge text shown at the top",
      initialValue: "Exclusive Offer",
      validation: (Rule) =>
        Rule.required()
          .min(1)
          .max(30)
          .error("Badge text is required and must be between 1-30 characters"),
    }),
    defineField({
      name: "title",
      title: "Main Title",
      type: "string",
      description: "The main headline of the modal",
      validation: (Rule) =>
        Rule.required()
          .min(1)
          .max(60)
          .error("Main title is required and must be between 1-60 characters"),
    }),
    defineField({
      name: "highlight",
      title: "Highlighted Text",
      type: "string",
      description: "The highlighted portion of the title (e.g., '40% off')",
      validation: (Rule) =>
        Rule.required()
          .min(1)
          .max(25)
          .error(
            "Highlighted text is required and must be between 1-25 characters"
          ),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      description: "Description text below the title",
      validation: (Rule) =>
        Rule.required()
          .min(1)
          .max(300)
          .error(
            "Description is required and must be between 1-300 characters"
          ),
    }),
    defineField({
      name: "buttonText",
      title: "Button Text",
      type: "string",
      description: "Text for the main action button",
      initialValue: "Claim Your Discount",
      validation: (Rule) =>
        Rule.required()
          .min(1)
          .max(25)
          .error("Button text is required and must be between 1-25 characters"),
    }),
    defineField({
      name: "image",
      title: "Modal Image",
      type: "image",
      description: "Image displayed on the left side of the modal",
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
            Rule.required()
              .min(1)
              .max(50)
              .error(
                "Alt text is required and must be between 1-50 characters"
              ),
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "imageBadge",
      title: "Image Badge Text",
      type: "string",
      description: "Small badge text overlaid on the image",
      initialValue: "Premium Experience",
      validation: (Rule) =>
        Rule.max(30).error("Image badge text must not exceed 30 characters"),
    }),
    defineField({
      name: "imageCaption",
      title: "Image Caption",
      type: "string",
      description: "Caption text overlaid on the image",
      initialValue: "Transform your fitness journey",
      validation: (Rule) =>
        Rule.max(60).error("Image caption must not exceed 60 characters"),
    }),
    defineField({
      name: "emailPlaceholder",
      title: "Email Placeholder",
      type: "string",
      description: "Placeholder text for the email input field",
      initialValue: "Email Address",
      validation: (Rule) =>
        Rule.required()
          .min(1)
          .max(50)
          .error(
            "Email placeholder is required and must be between 1-50 characters"
          ),
    }),
    defineField({
      name: "termsText",
      title: "Terms Text",
      type: "text",
      description: "Terms and conditions text below the button",
      initialValue:
        "Valid for first purchase only. Cannot be combined with other promotions.",
      validation: (Rule) =>
        Rule.max(300).error("Terms text must not exceed 300 characters"),
    }),
    defineField({
      name: "successTitle",
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
    }),
    defineField({
      name: "successMessage",
      title: "Success Message",
      type: "text",
      description: "Message shown after successful email submission",
      initialValue:
        "Your discount code has been sent to your email. Check your inbox to claim your offer.",
      validation: (Rule) =>
        Rule.required()
          .min(1)
          .max(300)
          .error(
            "Success message is required and must be between 1-300 characters"
          ),
    }),
    defineField({
      name: "successButtonText",
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
    }),
    defineField({
      name: "isActive",
      title: "Is Active",
      type: "boolean",
      description:
        "Only one promo modal should be active at a time. This determines which promo modal appears on the website.",
      initialValue: false,
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "description",
      media: "image",
      isActive: "isActive",
    },
    prepare(selection) {
      const { title, subtitle, isActive } = selection;
      return {
        title: title || "Promo Modal",
        subtitle: `${isActive ? "✅ Active" : "⚫ Inactive"} - ${subtitle?.substring(0, 60)}...`,
      };
    },
  },
});
