export interface IBreadCrumbRoot {
  status: string;
  statusCode: number;
  message: string;
  data: IBreadCrumbData;
}

export interface IBreadCrumbData {
  records: IBreadCrumbRecord[];
  totalRecords: number;
  perPage: number;
  totalPages: number;
  currentPage: number;
  pagingCounter: number;
  hasPrevious: boolean;
  hasNext: boolean;
  recordShown: number;
}

export interface IBreadCrumbRecord {
  object: string;
  id: string;
  title: string;
  subtitle: string;
  image: string;
  type: string;
  seo: IBreadCrumbSeo;
  created_date: string;
  updated_date: string;
}

export interface IBreadCrumbSeo {
  metaTitle: string;
  metaDescription: string;
  ogTitle: string;
  ogDescription: string;
  canonicalUrl: string;
}
