export interface IProfileRoot {
  status: string;
  statusCode: number;
  message: string;
  data: IProfileData;
}

export interface IProfileData {
  object: string;
  id: string;
  image: string;
  name: string;
  position: string;
  experience: number;
  education: string;
  description: string;
  center: IProfileCenter;
  service: IProfileService[];
  seo: IProfileSeo;
  created_date: string;
  updated_date: string;
}

export interface IProfileService {
  object: string;
  id: string;
  name: string;
  tagLine: string;
  videoUrl: string;
  slug: string;
  description: string;
  icon: string;
  seo: IProfileSeo;
  created_date: string;
  updated_date: string;
}

export interface IProfileCenter {
  object: string;
  id: string;
  name: string;
  icon: string;
  location: string;
  phone: string[];
  created_date: string;
  updated_date: string;
}

export interface IProfileSeo {
  metaTitle: string;
  metaDescription: string;
  ogTitle: string;
  ogDescription: string;
  canonicalUrl: string;
}
