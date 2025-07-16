import { defineField, defineType } from "sanity";

export default defineType({
  name: "teamSection",
  title: "Team Section",
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
      name: "teamMembers",
      title: "Team Members",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "name",
              title: "Full Name",
              type: "string",
              validation: (Rule) =>
                Rule.required()
                  .min(1)
                  .max(50)
                  .error(
                    "Full name is required and must be between 1-50 characters"
                  ),
            }),
            defineField({
              name: "role",
              title: "Role/Position",
              type: "string",
              validation: (Rule) =>
                Rule.required()
                  .min(1)
                  .max(50)
                  .error(
                    "Role/Position is required and must be between 1-50 characters"
                  ),
            }),
            defineField({
              name: "bio",
              title: "Biography",
              type: "text",
              validation: (Rule) =>
                Rule.required()
                  .min(1)
                  .max(500)
                  .error(
                    "Biography is required and must be between 1-500 characters"
                  ),
            }),
            defineField({
              name: "image",
              title: "Profile Image",
              type: "image",
              options: {
                hotspot: true,
              },
              validation: (Rule) =>
                Rule.required().error("Profile image is required"),
              fields: [
                {
                  name: "alt",
                  type: "string",
                  title: "Alternative Text",
                  description:
                    "Important for SEO and accessibility. Describe what the image shows.",
                  validation: (Rule) =>
                    Rule.max(100).error(
                      "Alt text must not exceed 100 characters"
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
            defineField({
              name: "isCEO",
              title: "Is CEO",
              type: "boolean",
              description:
                "Mark as CEO for special featured display (only one CEO allowed)",
              initialValue: false,
              validation: (Rule) =>
                Rule.custom((value, context) => {
                  // Only validate if trying to set isCEO to true
                  if (value !== true) {
                    return true;
                  }

                  // Get the document and current member info
                  const document = context.document as {
                    teamMembers?: Array<{ _key?: string; isCEO?: boolean }>;
                  };
                  const teamMembers = document?.teamMembers || [];
                  const currentMemberKey = (context.parent as { _key?: string })
                    ?._key;

                  // Count CEOs excluding the current member being edited
                  const otherCEOsCount = teamMembers.filter(
                    (member) =>
                      member._key !== currentMemberKey && member.isCEO === true
                  ).length;

                  // If there are other CEOs, prevent this selection
                  if (otherCEOsCount > 0) {
                    return "Only one team member can be marked as CEO. Please unmark the current CEO first.";
                  }

                  return true;
                }),
            }),
          ],
          preview: {
            select: {
              title: "name",
              role: "role",
              media: "image",
              isCEO: "isCEO",
            },
            prepare(selection) {
              const { title, role, media, isCEO } = selection;
              return {
                title: title || "Untitled Member",
                subtitle: `${role || "No role"}${isCEO ? " (CEO)" : ""}`,
                media: media,
              };
            },
          },
        },
      ],
      validation: (Rule) =>
        Rule.required()
          .min(1)
          .max(10)
          .error(
            "At least 1 team member is required, maximum 10 members allowed"
          ),
    }),
    defineField({
      name: "isActive",
      title: "Is Active",
      type: "boolean",
      description:
        "Only one team section should be active at a time. This determines which team section appears on the website.",
      initialValue: false,
      validation: (Rule) =>
        Rule.required().error("Activation status is required"),
    }),
  ],
  preview: {
    select: {
      title: "sectionTitle",
      isActive: "isActive",
      memberCount: "teamMembers",
    },
    prepare(selection) {
      const { title, isActive, memberCount } = selection;
      const count = memberCount ? memberCount.length : 0;
      const activeStatus = isActive ? "✅ Active" : "⚫ Inactive";
      return {
        title: title || "Team Section",
        subtitle: `${activeStatus} • ${count} member${count !== 1 ? "s" : ""}`,
      };
    },
  },
});
