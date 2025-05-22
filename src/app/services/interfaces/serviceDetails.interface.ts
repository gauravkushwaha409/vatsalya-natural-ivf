export interface IServiceDetailsRoot {
  status: string;
  statusCode: number;
  message: string;
  data: IServiceDetailsData;
}

export interface IServiceDetailsData {
  service: IServiceDetailsService;
  otherServices: IServiceDetailsOtherService[];
}

export interface IServiceDetailsService {
  object: string;
  id: string;
  name: string;
  tagLine: string;
  videoUrl: string;
  slug: string;
  description: string;
  icon: string;
  seo: IServiceDetailsSeo;
  faq: IServiceDetailsFaq[];
  diagonosisList: IServiceDetailsDiagonosisList[];
  serviceDetailsListSection: IServiceDetailsServiceDetailsListSection[];
  created_date: string;
  updated_date: string;
}

export interface IServiceDetailsSeo {
  metaTitle: string;
  metaDescription: string;
  ogTitle: string;
  ogDescription: string;
  canonicalUrl: string;
}

export interface IServiceDetailsDiagonosisList {
  object: string;
  id: string;
  name: string;
  icon: string;
  service: string;
  created_date: string;
  updated_date: string;
}

export interface IServiceDetailsServiceDetailsListSection {
  object: string;
  id: string;
  title: string;
  description: string;
  listItems: ListItem[];
  createdAt: string;
  updatedAt: string;
}

export interface ListItem {
  listItemTitle: string;
  listItemDescription: string;
  _id: string;
}

export interface IServiceDetailsOtherService {
  _id: string;
  name: string;
  description: string;
  tagLine: string;
  videoUrl: string;
  icon: string;
  seo: IServiceDetailsSeo2;
  deleted: boolean;
  createdAt: string;
  updatedAt: string;
  slug: string;
  __v: number;
}

export interface IServiceDetailsSeo2 {
  metaTitle: string;
  metaDescription: string;
  ogTitle: string;
  ogDescription: string;
  canonicalUrl: string;
}

export interface IServiceDetailsFaq {
  object: string;
  id: string;
  question: string;
  answer: string;
  service: string;
  created_data: string;
  updated_data: string;
}
