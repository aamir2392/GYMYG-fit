import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export interface PackagesHeroButton {
  text: string;
  link?: string;
}

export interface PackagesHeroData {
  title: string;
  highlightedWord: string;
  subtitle: string;
  primaryButton: PackagesHeroButton;
  secondaryButton: PackagesHeroButton;
  backgroundImage: SanityImageSource;
  isActive: boolean;
}
