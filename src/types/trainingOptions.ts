export interface TrainingOptionsCard {
  badgeText: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  image: {
    asset: {
      _ref?: string;
      _type?: string;
      url?: string;
    } | null;
  } | null;
  imageAlt: string;
  icon: string;
}

export interface TrainingOptionsData {
  _id: string;
  _type: "trainingOptions";
  sectionTitle: string;
  sectionDescription: string;
  trainerCard: TrainingOptionsCard;
  eventCard: TrainingOptionsCard;
  isActive: boolean;
}
