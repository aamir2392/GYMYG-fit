export interface PromoModal {
  _id: string;
  _type: "promoModal";
  isActive: boolean;
  badge: string;
  title: string;
  highlight: string;
  description: string;
  buttonText: string;
  image: {
    asset: {
      _ref: string;
      _type: "reference";
    };
    alt?: string;
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
  imageBadge?: string;
  imageCaption?: string;
  emailPlaceholder: string;
  termsText?: string;
  successTitle: string;
  successMessage: string;
  successButtonText: string;
}

export interface PromoModalQuery {
  promoModal: PromoModal | null;
}
