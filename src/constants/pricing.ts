export type PricingPlan = {
  name: string;
  description: string;
  price: number;
  pricePerClass?: number;
  priceText?: string;
  features: string[];
  popular: boolean;
  cta: string;
  type: "one-time" | "subscription";
};

// Pricing plans data
export const pricingPlans: PricingPlan[] = [
  {
    name: "10 Pack of GYMYG Classes",
    description: "10 pre-purchased GYMYG classes.",
    price: 120,
    pricePerClass: 12,
    features: [
      "10 GYMYG classes",
      "Book classes in advance",
      "Access to all class types",
      "No expiration date",
      "Pre-purchased, one-time payment",
      "Flexible scheduling",
    ],
    popular: false,
    cta: "Pay Now",
    type: "one-time",
  },
  {
    name: "20 Pack of GYMYG Classes",
    description: "20 pre-purchased GYMYG classes.",
    price: 200,
    pricePerClass: 10,
    features: [
      "20 GYMYG classes",
      "Book classes in advance",
      "Access to all class types",
      "No expiration date",
      "Pre-purchased, one-time payment",
      "Best value per class",
    ],
    popular: true,
    cta: "Pay Now",
    type: "one-time",
  },
  {
    name: "Monthly Unlimited",
    description: "Unlimited GYMYG classes for the month.",
    price: 150,
    priceText: "/month",
    features: [
      "Unlimited GYMYG classes",
      "Book classes in advance",
      "Access to all class types",
      "Recurring subscription",
      "Cancel anytime",
      "Best for frequent attendees",
    ],
    popular: false,
    cta: "Subscribe",
    type: "subscription",
  },
];
