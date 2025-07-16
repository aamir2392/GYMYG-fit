export interface JoinGymygHeroButton {
  text: string;
  action: "scroll-download" | "external-link" | "internal-link";
  link?: string;
  openInNewTab?: boolean;
}

export interface JoinGymygHeroBackgroundOverlay {
  enabled: boolean;
  opacity: number;
}

export interface JoinGymygHeroBackgroundImage {
  asset: {
    _id: string;
    url: string;
  };
  alt?: string;
}

export interface JoinGymygHeroData {
  _id: string;
  title: string;
  primaryColorTitle: string;
  subtitle: string;
  primaryButton: JoinGymygHeroButton;
  secondaryButton: JoinGymygHeroButton;
  backgroundImage?: JoinGymygHeroBackgroundImage;
  enableParticles: boolean;
  isActive: boolean;
  _updatedAt: string;
}
