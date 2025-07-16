export interface TrainerHeroButton {
  text: string;
  link: string;
}

export interface TrainerHeroTrustBadge {
  title: string;
  description: string;
  icon: string;
}

export interface TrainerHeroSectionData {
  _id: string;
  _type: "trainerHeroSection";
  sectionId: string;
  isActive: boolean;
  badgeText: string;
  mainTitle: string;
  highlightedWord: string;
  description: string;
  primaryButton: TrainerHeroButton;
  secondaryButton: TrainerHeroButton;
  heroImage: {
    asset?: {
      _id: string;
      url: string;
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
  trustBadge: TrainerHeroTrustBadge;
  _updatedAt?: string;
}
