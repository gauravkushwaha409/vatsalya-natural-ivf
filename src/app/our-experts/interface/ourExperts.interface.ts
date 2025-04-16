export interface IOurExpertsRoot {
  status: string;
  statusCode: number;
  message: string;
  data: IOurExpertsData;
}

export interface IOurExpertsData {
  records: IOurExpertsRecord[];
  totalRecords: number;
  perPage: number;
  totalPages: number;
  currentPage: number;
  pagingCounter: number;
  hasPrevious: boolean;
  hasNext: boolean;
  recordShown: number;
}

export interface IOurExpertsRecord {
  object: string;
  id: string;
  slug: string;
  image: string;
  name: string;
  position: string;
  experience: number;
  education: string;
  description: string;
  center: IOurExpertsCenter;
  service: IOurExpertsService[];
  seo: IOurExpertsSeo2;
  created_date: string;
  updated_date: string;
}

export interface IOurExpertsCenter {
  object: string;
  id: string;
  name: string;
  icon: string;
  location: string;
  phone: string[];
  created_date: string;
  updated_date: string;
}

export interface IOurExpertsService {
  object: string;
  id: string;
  name: string;
  tagLine: string;
  videoUrl: string;
  slug: string;
  description: string;
  icon: string;
  seo: IOurExpertsSeo;
  created_date: string;
  updated_date: string;
}

export interface IOurExpertsSeo {
  metaTitle: string;
  metaDescription: string;
  ogTitle: string;
  ogDescription: string;
  canonicalUrl: string;
}

export interface IOurExpertsSeo2 {
  metaTitle?: string;
  metaDescription?: string;
  ogTitle?: string;
  ogDescription?: string;
  canonicalUrl?: string;
}
