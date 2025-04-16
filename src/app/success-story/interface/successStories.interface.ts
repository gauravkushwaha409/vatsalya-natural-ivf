import { ApiResponseWithPagination } from "@/interface/api.interface";

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
  prev: number;
  next: number;
  recordShown: number;
}

export interface IsuccessStoriesRecord {
  object: string;
  id: string;
  quoteContent: string;
  storyContent: string;
  videoUrl: string;
  image: string;
  isMain: boolean;
  characterName: string;
  successStoryMetaInfo: string;
  createdAt: string;
  updatedAt: string;
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

export type ISuccessStoriesResponse =
  ApiResponseWithPagination<IsuccessStoriesData>;
