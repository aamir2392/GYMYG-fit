export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: {
    asset: {
      _ref: string;
      _type: string;
    };
    _type: string;
  };
  imageAlt: string;
  isCEO: boolean;
}

export interface TeamSectionData {
  _id: string;
  _type: string;
  isActive: boolean;
  sectionTitle: string;
  sectionDescription: string;
  teamMembers: TeamMember[];
}
