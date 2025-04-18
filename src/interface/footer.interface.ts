export interface IFooterRoot {
  object: string;
  id: string;
  phoneNumber: string[];
  location: string;
  mapUrl: string;
  copyRight: string;
  email: string[];
  openingHours: string;
  openingDays: string;
  socialMedia: IFooterSocialMedia;
  footerLogo: string;
  footerDescription: string;
  Faq: IFooterFaq[];
  created_date: string;
  updated_date: string;
}

export interface IFooterSocialMedia {
  name?: string;
  href?: string;
  icon?: string;
  facebook: string;
  instagram: string;
  linkedin: string;
  twitter: string;
}

export interface IFooterFaq {
  object: string;
  id: string;
  question: string;
  answer: string;
  home?: string;
  setting: string;
  created_date: string;
  updated_date: string;
}
