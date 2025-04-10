import { ApiResponse } from "@/interface/api.interface";

export interface IAboutUsRoot {
  status: string;
  statusCode: number;
  message: string;
  data: IAboutUsData;
}

export interface IAboutUsData {
  object: string;
  id: string;
  title: string;
  subtitle: string;
  description: string;
  images: string[];
  AboutusMission: IAboutUsAboutusMission[];
  Family: IAboutUsFamily[];
  Gallery: IAboutUsGallery[];
  seo: IAboutUsSeo;
  created_date: string;
  updated_date: string;
}

export interface IAboutUsAboutusMission {
  object: string;
  id: string;
  title: string;
  subtitle: string;
  description: string;
  images: string[];
  aboutus: string;
  created_date: string;
  updated_date: string;
}

export interface IAboutUsFamily {
  object: string;
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  aboutus: string;
  created_date: string;
  updated_date: string;
}

export interface IAboutUsGallery {
  object: string;
  id: string;
  title: string;
  subtitle: string;
  description: string;
  images: string[];
  aboutus: string;
  createdAt: string;
  updatedAt: string;
}

export interface IAboutUsSeo {
  metaTitle: string;
  metaDescription: string;
  ogTitle: string;
  ogDescription: string;
  canonicalUrl: string;
}

export type IAboutUsResponse = ApiResponse<IAboutUsData>;
