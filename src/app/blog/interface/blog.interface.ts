export interface IBlogRoot {
  status: string;
  statusCode: number;
  message: string;
  data: IBlogData;
}

export interface IBlogData {
  records: IBlogRecord[];
  totalRecords: number;
  perPage: number;
  totalPages: number;
  currentPage: number;
  pagingCounter: number;
  hasPrevious: boolean;
  hasNext: boolean;

  recordShown: number;
}

export interface IBlogRecord {
  object: string;
  id: string;
  title: string;
  readTime: string;
  slug: string;
  category: string;
  author: IBlogAuthor;
  image: string;
  description: string;
  favorites: number;
  comments: [];
  tags: string[];
  seo: IBlogSeo;
  created_date: string;
  updated_date: string;
}

export interface IBlogAuthor {
  object: string;
  id: string;
  name: string;
  email: string;
  role: string;
  created_date: string;
  updated_date: string;
}

export interface IBlogSeo {
  metaTitle: string;
  metaDescription: string;
  ogTitle: string;
  ogDescription: string;
}
