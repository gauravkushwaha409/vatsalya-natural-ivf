export interface IHomeRoot {
  status: string;
  statusCode: number;
  message: string;
  data: IHomeData;
}

export interface IHomeData {
  object: string;
  id: string;
  title: string;
  subtitle: string;
  description: string;
  youTubeLink: string;
  caroselImages: string[];
  Faq: IHomeFaq[];
  mission: IHomeMission[];
  WhatWeDo: IHomeWhatWeDo[];
  WhenVisit: IHomeWhenVisit[];
  seo: IHomeSeo;
  created_data: string;
  updated_data: string;
}

export interface IHomeFaq {
  object: string;
  id: string;
  question: string;
  answer?: string;
  home: string;
  category: IFAQCategory;
  created_date: string;
  updated_date: string;
}

export interface IHomeMission {
  object: string;
  id: string;
  ourMission: string;
  home: string;
  created_date: string;
  updated_date: string;
}

export interface IHomeWhatWeDo {
  object: string;
  id: string;
  title: string;
  subtitle: string;
  image: string;
  description: string;
  home: string;
  created_date: string;
  updated_date: string;
}

export interface IHomeWhenVisit {
  object: string;
  id: string;
  title: string;
  subtitle: string;
  whenToVisitImages: string[];
  description: string;
  home: string;
  created_date: string;
  updated_date: string;
}

export interface IHomeSeo {
  metaTitle: string;
  metaDescription: string;
  ogTitle: string;
  ogDescription: string;
  canonicalUrl: string;
}

export interface IFAQCategory {
  id: string;
  name: string;
}
