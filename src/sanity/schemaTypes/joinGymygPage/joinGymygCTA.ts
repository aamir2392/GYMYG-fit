import { defineField, defineType } from "sanity";

export default defineType({
  name: "joinGymygCTA",
  title: "Join GYMYG CTA Section",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Main Title",
      type: "string",
      description: "The main headline text for join GYMYG page",
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
      description: "The subtitle text with join-specific messaging",
      initialValue: "NEW MEMBERS GET 40% OFF OF THEIR FIRST PACKAGE PURCHASE",
      validation: (Rule) =>
        Rule.required()
          .max(150)
          .error("Subtitle should be under 150 characters."),
    }),

    defineField({
      name: "backgroundImages",
      title: "Background Images",
      type: "object",
      description: "Background images for desktop and mobile views",
      fields: [
        {
          name: "desktop",
          title: "Desktop Background Image",
          type: "image",
          description:
            "Background image for desktop view (recommended: 1920x1080px)",
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alternative Text",
              description: "Important for SEO and accessibility",
              initialValue: "GYMYG fitness background",
              validation: (Rule) =>
                Rule.required()
                  .max(100)
                  .error(
                    "Desktop image alt text should be under 100 characters."
                  ),
            },
          ],
          validation: (Rule) => Rule.required(),
        },
        {
          name: "mobile",
          title: "Mobile Background Image",
          type: "image",
          description:
            "Background image for mobile view (recommended: 375x812px)",
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alternative Text",
              description: "Important for SEO and accessibility",
              initialValue: "GYMYG mobile fitness background",
              validation: (Rule) =>
                Rule.required()
                  .max(100)
                  .error(
                    "Mobile image alt text should be under 100 characters."
                  ),
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
              .max(40)
              .error("Form title should be under 40 characters."),
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
              .max(120)
              .error("Form description should be under 120 characters."),
        },
        {
          name: "emailPlaceholder",
          title: "Email Placeholder",
          type: "string",
          description: "Placeholder text for email input",
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
          description: "Text for the submit button",
          initialValue: "Claim Discount",
          validation: (Rule) =>
            Rule.required()
              .max(30)
              .error("Button text should be under 30 characters."),
        },
        {
          name: "privacyText",
          title: "Privacy Text",
          type: "text",
          description: "Privacy disclaimer text below the form",
          initialValue:
            "By submitting, you agree to receive marketing emails from GYMYG. You can unsubscribe at any time.",
          validation: (Rule) =>
            Rule.required()
              .max(200)
              .error("Privacy text should be under 200 characters."),
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
          initialValue: "Welcome to GYMYG!",
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
            "Your discount code has been sent to {email}. Check your inbox to claim your 40% off and start your fitness journey!",
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
              .error("Success button text should be under 30 characters."),
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
        Rule.required()
          .max(250)
          .error("Terms text should be under 250 characters."),
    }),
    defineField({
      name: "trainerFeatures",
      title: "Trainer Features",
      type: "array",
      description: "Features specifically for the join GYMYG page",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              title: "Feature Title",
              type: "string",
              validation: (Rule) =>
                Rule.required()
                  .max(30)
                  .error("Feature title should be under 30 characters."),
            },
            {
              name: "description",
              title: "Feature Description",
              type: "text",
              validation: (Rule) =>
                Rule.required()
                  .max(100)
                  .error("Feature description should be under 100 characters."),
            },
          ],
          preview: {
            select: {
              title: "title",
              subtitle: "description",
            },
            prepare(selection) {
              const { title, subtitle } = selection;
              return {
                title: title || "No title",
                subtitle: subtitle
                  ? subtitle.slice(0, 50) + (subtitle.length > 50 ? "..." : "")
                  : "No description",
              };
            },
          },
        },
      ],
      initialValue: [
        {
          title: "Personal Training Sessions",
          description:
            "Connect with certified personal trainers for one-on-one virtual sessions tailored to your goals.",
        },
        {
          title: "Flexible Scheduling",
          description:
            "Book sessions that fit your lifestyle with 24/7 availability and easy rescheduling options.",
        },
        {
          title: "Progress Tracking",
          description:
            "Monitor your fitness journey with detailed analytics and personalized feedback from your trainer.",
        },
      ],
    }),
    defineField({
      name: "showTrainerFeatures",
      title: "Show Trainer Features",
      type: "boolean",
      description: "Toggle to show or hide the trainer features section",
      initialValue: true,
    }),
    defineField({
      name: "isActive",
      title: "Is Active",
      type: "boolean",
      description:
        "Only one join GYMYG CTA section should be active at a time. This determines which CTA section appears on the join GYMYG page.",
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
