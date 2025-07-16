export interface PricingButton {
  text: string;
  link: string;
}

export interface PricingImage {
  image: {
    asset: {
      _ref: string;
      _type: string;
    };
    _type: string;
  };
  alt: string;
}

export interface HomePricingSection {
  _id: string;
  _type: string;
  isActive: boolean;
  title: string;
  description: string;
  quote: string;
  primaryButton: PricingButton;
  secondaryButton: PricingButton;
  pricingImages: PricingImage[];
}
