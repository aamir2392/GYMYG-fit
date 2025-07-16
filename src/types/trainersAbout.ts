export interface TrainersAboutFeatureCard {
  title: string;
  description: string;
  image: {
    asset: {
      _ref: string;
      _type: "reference";
    } | null;
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
  imageAlt: string;
}

export interface TrainersAboutData {
  _id: string;
  _type: "trainersAbout";
  sectionId: string;
  isActive: boolean;
  sectionTitle: string;
  sectionDescription: string;
  featureCards: TrainersAboutFeatureCard[];
}
