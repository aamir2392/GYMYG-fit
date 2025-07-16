import { PortableTextBlock } from "sanity";

export interface ClientsInteractionContentBlock {
  title: string;
  description: PortableTextBlock[];
  image: {
    asset: {
      _ref: string;
      _type: "reference";
    } | null;
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
  imageAlt: string;
}

export interface ClientsInteractionData {
  _id: string;
  _type: "clientsInteraction";
  sectionId: string;
  isActive: boolean;
  firstBlock: ClientsInteractionContentBlock;
  secondBlock: ClientsInteractionContentBlock;
}
