export interface HumanConnectionFeature {
  icon: string;
  title: string;
  description: string;
}

export interface HumanConnectionSection {
  _id: string;
  _type: string;
  isActive: boolean;
  title: string;
  description1: string;
  description2: string;
  mainImage: {
    asset: {
      _ref: string;
      _type: string;
    };
    _type: string;
  };
  mainImageAlt: string;
  features: HumanConnectionFeature[];
}
