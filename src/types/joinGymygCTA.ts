import type { SanityImageObject } from "@sanity/image-url/lib/types/types";

export interface JoinGymygCTAData {
  _id: string;
  _type: "joinGymygCTA";
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
  showTrainerFeatures?: boolean;
  isActive: boolean;
  _updatedAt?: string;
}
