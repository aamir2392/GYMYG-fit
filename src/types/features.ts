export interface FeatureCard {
  title: string;
  description: string;
  image: {
    asset: {
      _id: string;
      url: string;
    };
  };
  imageAlt: string;
  bgColor?: string;
  textColor?: string;
}

export interface FeaturesSection {
  _id: string;
  sectionTitle?: string;
  sectionDescription?: string;
  featureCards: FeatureCard[];
  isActive?: boolean;
  _updatedAt?: string;
}
