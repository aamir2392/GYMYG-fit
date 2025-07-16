import type { SanityImageObject } from "@sanity/image-url/lib/types/types";

export interface JoinCTAData {
  _id: string;
  _type: "joinCTA";
  title: string;
  subtitle: string;
  discountText: string;
  backgroundImages: {
    desktop: SanityImageObject & {
      alt?: string;
    };
    mobile: SanityImageObject & {
      alt?: string;
    };
  };
  emailForm: {
    formTitle: string;
    formDescription: string;
    emailPlaceholder: string;
    buttonText: string;
    privacyText?: string;
  };
  successState: {
    title: string;
    message: string;
    buttonText: string;
  };
  termsText?: string;
  trainerFeatures?: Array<{
    title: string;
    description: string;
  }>;
  isActive: boolean;
}

export interface PackagesJoinCTAData {
  _id: string;
  _type: "packagesJoinCTA";
  title: string;
  subtitle: string;
  discountText: string;
  backgroundImages: {
    desktop: SanityImageObject & {
      alt?: string;
    };
    mobile: SanityImageObject & {
      alt?: string;
    };
  };
  emailForm: {
    formTitle: string;
    formDescription: string;
    emailPlaceholder: string;
    buttonText: string;
    privacyText?: string;
  };
  successState: {
    title: string;
    message: string;
    buttonText: string;
  };
  termsText?: string;
  packageBenefits?: Array<{
    title: string;
    description: string;
  }>;
  showPackageBenefits?: boolean;
  isActive: boolean;
}
