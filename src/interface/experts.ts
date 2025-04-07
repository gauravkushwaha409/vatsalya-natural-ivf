export interface Root {
  status: string;
  statusCode: number;
  message: string;
  data: Data;
}

export interface Data {
  records: IExperts[];
  totalRecords: number;
  perPage: number;
  totalPages: number;
  currentPage: number;
  pagingCounter: number;
  hasPrevious: boolean;
  hasNext: boolean;
  recordShown: number;
}

export interface IExperts {
  object: string;
  id: string;
  image: string;
  name: string;
  position: string;
  sector: string;
  experience: number;
  education: string;
  description: string;
  center: Center;
  // service: any[];
  seo: Seo;
  created_date: string;
  updated_date: string;
}

export interface Center {
  object: string;
  id: string;
  name: string;
  icon: string;
  location: string;
  phone: string[];
  created_date: string;
  updated_date: string;
}

export interface Seo {
  metaTitle: string;
  metaDescription: string;
  ogTitle: string;
  ogDescription: string;
  canonicalUrl: string;
}
