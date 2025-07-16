export interface NoProgrammingFeatureCard {
  icon: string;
  title: string;
  description: string;
  delay: number;
}

export interface NoProgrammingData {
  _id: string;
  _type: "noProgramming";
  sectionId: string;
  isActive: boolean;
  badgeText: string;
  sectionTitle: string;
  highlightedWord: string;
  sectionDescription: string;
  backgroundImage: {
    asset: {
      _ref: string;
      _type: "reference";
      url?: string;
    } | null;
    alt: string;
    hotspot?: {
      x: number;
      y: number;
      height: number;
      width: number;
    };
    crop?: {
      top: number;
      bottom: number;
      left: number;
      right: number;
    };
  };
  featureCards: NoProgrammingFeatureCard[];
  benefits: string[];
}
