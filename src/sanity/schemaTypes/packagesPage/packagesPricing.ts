import { defineType, defineField } from "sanity";

export const packagesPricing = defineType({
  name: "packagesPricing",
  title: "Packages Pricing Section",
  type: "document",
  fields: [
    defineField({
      name: "sectionTitle",
      title: "Section Title",
      type: "string",
      description: "Main title for the pricing section",
      validation: (Rule) =>
        Rule.required()
          .max(60)
          .error("Section title should be under 60 characters."),
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
      name: "pricingPlans",
      title: "Pricing Plans",
      type: "array",
      of: [
        defineField({
          name: "pricingPlan",
          title: "Pricing Plan",
          type: "object",
          fields: [
            defineField({
              name: "name",
              title: "Plan Name",
              type: "string",
              validation: (Rule) =>
                Rule.required()
                  .max(30)
                  .error("Plan name should be under 30 characters."),
            }),
            defineField({
              name: "description",
              title: "Plan Description",
              type: "text",
              validation: (Rule) =>
                Rule.required()
                  .max(100)
                  .error("Plan description should be under 100 characters."),
            }),
            defineField({
              name: "price",
              title: "Price",
              type: "number",

              validation: (Rule) =>
                Rule.required()
                  .min(0)
                  .error("Price is required and must be a non-negative number"),
            }),
            defineField({
              name: "pricePerClass",
              title: "Price Per Class",
              type: "number",
              description: "Optional price per class display",
            }),
            defineField({
              name: "priceText",
              title: "Price Text",
              type: "string",
              description:
                "Optional text to display after price (e.g., '/month')",
              validation: (Rule) =>
                Rule.max(10).error("Price text should be under 10 characters."),
            }),
            defineField({
              name: "features",
              title: "Features",
              type: "array",
              of: [
                defineField({
                  name: "feature",
                  title: "Feature",
                  type: "string",
                  validation: (Rule) =>
                    Rule.max(40).error(
                      "Feature should be under 40 characters."
                    ),
                }),
              ],
              validation: (Rule) =>
                Rule.required()
                  .min(3)
                  .max(10)
                  .error("At least 3 features are required, max 10."),
            }),
            defineField({
              name: "popular",
              title: "Popular Plan",
              type: "boolean",
              description:
                "⚠️ IMPORTANT: Mark as the most popular plan. Only ONE plan should be popular at a time. Please ensure you unmark other plans before marking this one as popular.",
              initialValue: false,
              validation: (Rule) =>
                Rule.custom((value, context) => {
                  // If this plan is not marked as popular, validation passes
                  if (!value) return true;

                  // Get all pricing plans from the document
                  const document = context.document as Record<string, unknown>;
                  const pricingPlans =
                    (document?.pricingPlans as Array<
                      Record<string, unknown>
                    >) || [];

                  // Count how many other plans are marked as popular
                  const popularPlansCount = pricingPlans.filter(
                    (plan: Record<string, unknown>) => {
                      // Skip the current plan being validated by comparing _key
                      const parent = context.parent as Record<string, unknown>;
                      if (plan._key === parent._key) return false;

                      return plan.popular === true;
                    }
                  ).length;

                  // If there are already popular plans, show error
                  if (popularPlansCount > 0) {
                    return "Only one plan can be marked as popular. Please unmark the other popular plan first.";
                  }

                  return true;
                }),
            }),
            defineField({
              name: "cta",
              title: "Call to Action Text",
              type: "string",
              description: "Text for the button",
              validation: (Rule) =>
                Rule.required()
                  .max(20)
                  .error("CTA text should be under 20 characters."),
            }),
            defineField({
              name: "type",
              title: "Plan Type",
              type: "string",
              options: {
                list: [
                  { title: "One-time Purchase", value: "one-time" },
                  { title: "Monthly Subscription", value: "subscription" },
                ],
              },
              validation: (Rule) =>
                Rule.required().error("Plan type is required"),
            }),
          ],
          preview: {
            select: {
              name: "name",
              price: "price",
              popular: "popular",
              type: "type",
            },
            prepare(selection) {
              const { name, price, popular, type } = selection;
              return {
                title: name || "Untitled Plan",
                subtitle: `$${price || 0} - ${type || "Unknown type"} ${popular ? "(Popular)" : ""}`,
              };
            },
          },
        }),
      ],
      validation: (Rule) =>
        Rule.required()
          .min(3)
          .max(3)
          .error("There must be exactly 3 pricing plans."),
    }),
    defineField({
      name: "isActive",
      title: "Is Active",
      type: "boolean",
      description:
        "Only one pricing section should be active at a time. This determines which pricing section appears on the website.",

      initialValue: true,
      validation: (Rule) => Rule.required().error("Active status is required"),
    }),
  ],
  preview: {
    select: {
      title: "sectionTitle",
      description: "sectionDescription",
      isActive: "isActive",
      plans: "pricingPlans",
    },
    prepare(selection) {
      const { title, isActive } = selection;
      return {
        title: title || "Packages Pricing Section",
        subtitle: isActive ? "✅ Active" : "⚫ Inactive",
      };
    },
  },
});
