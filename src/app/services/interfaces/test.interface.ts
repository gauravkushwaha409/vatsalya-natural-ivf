export interface ITestRoot {
  status: string;
  statusCode: number;
  message: string;
  data: ITestData;
}

export interface ITestData {
  records: ITestRecord[];
  totalRecords: number;
  perPage: number;
  totalPages: number;
  currentPage: number;
  pagingCounter: number;
  hasPrevious: boolean;
  hasNext: boolean;
  prev: string;
  next: string;
  recordShown: number;
}

export interface ITestRecord {
  object: string;
  id: string;
  icon: string;
  description: string;
  testFor: string;
  seo: ITestSeo;
  created_date: string;
  updated_date: string;
}

export interface ITestSeo {
  metaTitle?: string;
  metaDescription?: string;
  ogTitle?: string;
  ogDescription?: string;
  canonicalUrl?: string;
}
