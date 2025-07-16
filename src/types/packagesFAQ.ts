export interface PackagesFAQItem {
  question: string;
  answer: string;
}

export interface PackagesFAQCategory {
  id: string;
  label: string;
  faqs: PackagesFAQItem[];
}

export interface PackagesFAQData {
  sectionTitle: string;
  highlightedWord: string;
  sectionDescription: string;
  faqCategories: PackagesFAQCategory[];
  isActive: boolean;
}
