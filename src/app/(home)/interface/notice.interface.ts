export interface INoticeRoot {
  status: string;
  statusCode: number;
  message: string;
  data: INoticeData;
}

export interface INoticeData {
  records: INoticeRecord[];
  totalRecords: number;
  perPage: number;
  totalPages: number;
  currentPage: number;
  pagingCounter: number;
  hasPrevious: boolean;
  hasNext: boolean;
  recordShown: number;
}

export interface INoticeRecord {
  object: string;
  id: string;
  title: string;
  image: string;
  status: boolean;
  seo: INoticeSeo;
  created_date: string;
  updated_date: string;
}

export interface INoticeSeo {
  metaTitle: string;
  metaDescription: string;
  ogTitle: string;
  ogDescription: string;
  canonicalUrl: string;
}
