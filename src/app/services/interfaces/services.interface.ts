import { ApiResponse } from "@/interface/api.interface";

export interface IserviceData {
  records: IserviceRecord[];
  totalRecords: number;
  perPage: number;
  totalPages: number;
  currentPage: number;
  pagingCounter: number;
  hasPrevious: boolean;
  hasNext: boolean;
  prev: any;
  next: number;
  recordShown: number;
}

export interface IserviceRecord {
  object: string;
  id: string;
  name: string;
  tagLine: string;
  videoUrl: string;
  slug: string;
  description: string;
  icon: string;
  seo: IserviceSeo;
  created_date: string;
  updated_date: string;
}

export interface IserviceSeo {
  metaTitle: string;
  metaDescription: string;
  ogTitle: string;
  ogDescription: string;
  canonicalUrl: string;
}

export type IServiceResponse = ApiResponse<IserviceRecord>;
