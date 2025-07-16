export interface Testimonial {
  name: string;
  position: string;
  content: string;
  rating: number;
  image?: {
    asset: {
      _ref: string;
      _type: string;
    };
    _type: string;
  };
  imageAlt?: string;
}

export interface TestimonialSectionData {
  _id: string;
  _type: string;
  isActive: boolean;
  sectionTitle: string;
  sectionDescription: string;
  testimonials: Testimonial[];
}
