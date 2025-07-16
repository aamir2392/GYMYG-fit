import { defineField, defineType } from "sanity";

export default defineType({
  name: "appDownloadSection",
  title: "App Download Section",
  type: "document",
  fields: [
    defineField({
      name: "badgeText",
      title: "Badge Text",
      type: "string",
      description: "The badge text displayed above the main title",
      initialValue: "Mobile Experience",
      validation: (Rule) =>
        Rule.required()
          .max(25)
          .error("Badge text should be under 25 characters."),
    }),
    defineField({
      name: "title",
      title: "Main Title",
      type: "string",
      description: "The main headline text",
      initialValue: "Download Today",
      validation: (Rule) =>
        Rule.required()
          .max(30)
          .error("Main title should be under 30 characters."),
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "text",
      description: "The description text below the main title",
      initialValue:
        "Take your fitness journey to the next level with our mobile app. Track workouts, join live classes, and connect with trainers - all from your phone.",
      validation: (Rule) =>
        Rule.required()
          .max(200)
          .error("Subtitle should be under 200 characters."),
    }),
    defineField({
      name: "mockupImages",
      title: "Mobile App Mockups",
      type: "object",
      fields: [
        {
          name: "iosMockup",
          title: "iOS App Mockup",
          type: "image",
          description: "iOS app mockup image",
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alternative Text",
              description: "Important for SEO and accessibility",
              initialValue: "GYMYG iOS App",
            },
          ],
          validation: (Rule) => Rule.required(),
        },
        {
          name: "androidMockup",
          title: "Android App Mockup",
          type: "image",
          description: "Android app mockup image",
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alternative Text",
              description: "Important for SEO and accessibility",
              initialValue: "GYMYG Android App",
            },
          ],
          validation: (Rule) => Rule.required(),
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "contentSections",
      title: "Content Sections",
      type: "array",
      description: "The feature sections displayed alongside the app mockups",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              title: "Section Title",
              type: "string",
              validation: (Rule) =>
                Rule.required()
                  .max(40)
                  .error("Section title should be under 40 characters."),
            },
            {
              name: "description",
              title: "Section Description",
              type: "text",
              validation: (Rule) =>
                Rule.required()
                  .max(200)
                  .error("Section description should be under 200 characters."),
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
          title: "Fitness at Your Fingertips",
          description:
            "Access hundreds of workout routines, track your progress, and connect with trainers - all from your mobile device.",
        },
        {
          title: "Live Classes & Community",
          description:
            "Join live workout sessions and connect with a community of fitness enthusiasts who share your passion.",
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: "downloadSection",
      title: "Download Section",
      type: "object",
      fields: [
        {
          name: "downloadTitle",
          title: "Download Title",
          type: "string",
          description: "Title for the download buttons section",
          initialValue: "Download Now",
          validation: (Rule) =>
            Rule.required()
              .max(50)
              .error("Download title should be under 50 characters."),
        },
        {
          name: "appStoreLink",
          title: "App Store Link",
          type: "url",
          description: "URL for iOS App Store download",
          initialValue:
            "https://apps.apple.com/us/app/gymyg-workout/id1660562430",
          validation: (Rule) =>
            Rule.required().uri({
              scheme: ["http", "https"],
            }),
        },
        {
          name: "playStoreLink",
          title: "Google Play Store Link",
          type: "url",
          description: "URL for Google Play Store download",
          initialValue:
            "https://play.google.com/store/apps/details?id=com.gymygclient&pcampaignid=web_share",
          validation: (Rule) =>
            Rule.required().uri({
              scheme: ["http", "https"],
            }),
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "isActive",
      title: "Is Active",
      type: "boolean",
      description:
        "Only one app download section should be active at a time. This determines which app download section appears on the website.",
      initialValue: true,
      validation: (Rule) => Rule.required().error("Active status is required"),
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "subtitle",
      media: "backgroundImage",
      isActive: "isActive",
    },
    prepare(selection) {
      const { title, media, isActive } = selection;
      return {
        title: title || "Packages Hero Section",
        subtitle: isActive ? "✅ Active" : "⚫ Inactive",
        media,
      };
    },
  },
});
