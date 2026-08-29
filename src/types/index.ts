export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  iconName: string;
  badge?: string;
  imageSrc?: string;
  altText?: string;
}

export interface CourseItem {
  id: string;
  title: string;
  subtitle: string;
  features: string[];
  recommendedFor: string;
  priceLabel: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface EnquiryFormData {
  fullName: string;
  phone: string;
  preferredTraining: string;
  experienceLevel: string;
  preferredTime: string;
  message: string;
}
