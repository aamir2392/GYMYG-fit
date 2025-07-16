export interface TrainerBenefit {
  title: string;
  description: string;
  icon: string;
}

export interface TrainerBenefitsData {
  _id: string;
  _type: "trainerBenefits";
  isActive: boolean;
  sectionTitle: string;
  sectionDescription: string;
  benefits: TrainerBenefit[];
}
