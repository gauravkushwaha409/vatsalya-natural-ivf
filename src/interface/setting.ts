export interface Root {
  status: string;
  statusCode: number;
  message: string;
  data: ISetting;
}

export interface ISetting {
  object: string;
  id: string;
  phoneNumber: string[];
  location: string;
  mapUrl: string;
  copyRight: string;
  email: string[];
  openingHours: string;
  openingDays: string;
  contactTime: string;
  socialMedia: SocialMedia;
  footerLogo: string;
  footerDescription: string;
  Faq: Faq[];
  created_date: string;
  updated_date: string;
}

export interface SocialMedia {
  facebook: string;
  instagram: string;
  linkedin: string;
  twitter: string;
}

export interface Faq {
  object: string;
  id: string;
  question: string;
  answer: string;
  setting: string;
  created_data: string;
  updated_data: string;
}
