export interface IOvulationRoot {
  status: string;
  statusCode: number;
  message: string;
  data: IOvulationData;
}

export interface IOvulationData {
  records: IOvulationRecord[];
  totalRecords: number;
  perPage: number;
  totalPages: number;
  currentPage: number;
  pagingCounter: number;
  hasPrevious: boolean;
  hasNext: boolean;
  recordShown: number;
}

export interface IOvulationRecord {
  object: string;
  id: string;
  description: string;
  type: string;
  seo: IOvulationSeo;
  created_date: string;
  updated_date: string;
}

export interface IOvulationSeo {
  metaTitle: string;
  metaDescription: string;
  ogTitle: string;
  ogDescription: string;
  canonicalUrl: string;
}
