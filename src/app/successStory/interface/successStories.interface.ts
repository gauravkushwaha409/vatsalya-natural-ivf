import { ApiResponse } from "@/interface/api.interface";

export interface IsuccessStoriesRoot {
  status: string;
  statusCode: number;
  message: string;
  data: IsuccessStoriesData;
}

export interface IsuccessStoriesData {
  records: IsuccessStoriesRecord[];
  totalRecords: number;
  perPage: number;
  totalPages: number;
  currentPage: number;
  pagingCounter: number;
  hasPrevious: boolean;
  hasNext: boolean;

  recordShown: number;
}

export interface IsuccessStoriesRecord {
  object: string;
  id: string;
  title: string;
  readTime?: string;
  slug: string;
  category: string;
  author?: IsuccessStoriesAuthor;
  image: string;
  description: string;
  favorites: number;
  comments: any[];
  tags: any[];
  seo: IsuccessStoriesSeo;
  created_date: string;
  updated_date: string;
}

export interface IsuccessStoriesAuthor {
  object: string;
  id: string;
  name: string;
  email: string;
  role: string;
  created_date: string;
  updated_date: string;
}

export interface IsuccessStoriesSeo {
  metaTitle?: string;
  metaDescription?: string;
  ogTitle?: string;
  ogDescription?: string;
  canonicalUrl?: string;
}

export type ISuccessStoriesResponse = ApiResponse<IsuccessStoriesData>;
