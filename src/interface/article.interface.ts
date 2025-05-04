export interface IArticleRoot {
  status: string;
  statusCode: number;
  message: string;
  data: IArticleData;
}

export interface IArticleData {
  records: IArticleRecord[];
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

export interface IArticleRecord {
  object: string;
  id: string;
  title: string;
  slug: string;
  image: string;
  description: string;
  readTime: string;
  author: IArticleAuthor;
  tags: [];
  seo: IArticleSeo;
  created_date: string;
  updated_date: string;
}

export interface IArticleAuthor {
  object: string;
  id: string;
  name: string;
  email: string;
  role: string;
  created_date: string;
  updated_date: string;
}

export interface IArticleSeo {
  metaTitle: string;
  metaDescription: string;
}
