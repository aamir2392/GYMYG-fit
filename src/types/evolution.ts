export interface EvolutionCard {
  title: string;
  description: string;
  image: {
    asset: {
      _id: string;
      url: string;
    };
    alt?: string;
  };
  iconType: "video" | "users" | "messageCircle";
}

export interface EvolutionSection {
  _id: string;
  title: string;
  description: string;
  evolutionCards: EvolutionCard[];
  featuredTitle: string;
  featuredDescription: string;
  featuredQuote: string;
  featuredImage: {
    asset: {
      _id: string;
      url: string;
    };
    alt?: string;
  };
  iosDownloadUrl: string;
  androidDownloadUrl: string;
  communityTitle: string;
  communityDescription: string;
  isActive?: boolean;
  _updatedAt?: string;
}
