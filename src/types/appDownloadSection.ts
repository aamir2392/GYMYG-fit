export interface AppDownloadSectionData {
  _id: string;
  _type: "appDownloadSection";
  badgeText: string;
  title: string;
  primaryColorTitle: string;
  subtitle: string;
  mockupImages: {
    iosMockup: {
      _type: "image";
      asset?:
        | {
            _ref: string;
            _type: "reference";
          }
        | {
            _id: string;
            url: string;
          }
        | null;
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
      alt?: string;
    };
    androidMockup: {
      _type: "image";
      asset?:
        | {
            _ref: string;
            _type: "reference";
          }
        | {
            _id: string;
            url: string;
          }
        | null;
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
      alt?: string;
    };
  };
  contentSections: Array<{
    title: string;
    description: string;
  }>;
  downloadSection: {
    downloadTitle: string;
    appStoreLink: string;
    playStoreLink: string;
  };
  isActive?: boolean;
  _updatedAt?: string;
}
