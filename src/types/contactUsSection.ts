export interface ContactUsSectionData {
  _id: string;
  _type: "contactUsSection";
  heroContent: {
    title: string;
    primaryDescription: string;
    secondaryDescription: string;
    helpText: string;
  };
  backgroundImage: {
    asset?: {
      _id: string;
      url: string;
    } | null;
    alt?: string;
  };
  faqLink: {
    text: string;
    url: string;
  } | null;
  socialLinks: Array<{
    platform:
      | "instagram"
      | "twitter"
      | "tiktok"
      | "facebook"
      | "linkedin"
      | "youtube";
    url: string;
    isActive: boolean;
  }>;
  formConfiguration: {
    formTitle: string;
    successMessage: {
      title: string;
      description: string;
      buttonText: string;
    };
    submitButtonText: string;
    loadingText: string;
  };
  isActive: boolean;
  _updatedAt?: string;
}
