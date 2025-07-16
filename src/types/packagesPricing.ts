export interface PackagesPricingPlan {
  name: string;
  description: string;
  price: number;
  pricePerClass?: number;
  priceText?: string;
  features: string[];
  popular: boolean;
  cta: string;
  type: "one-time" | "subscription";
}

export interface PackagesPricingData {
  sectionTitle: string;
  sectionDescription: string;
  pricingPlans: PackagesPricingPlan[];
  isActive: boolean;
}
