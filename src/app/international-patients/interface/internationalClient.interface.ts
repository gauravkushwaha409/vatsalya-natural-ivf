export interface IInternationalClientRoot {
  status: string;
  statusCode: number;
  message: string;
  data: IInternationalClientData;
}

export interface IInternationalClientData {
  records: IInternationalClientRecord[];
  totalRecords: number;
  perPage: number;
  totalPages: number;
  currentPage: number;
  pagingCounter: number;
  hasPrevious: boolean;
  hasNext: boolean;

  recordShown: number;
}

export interface IInternationalClientRecord {
  object: string;
  id: string;
  title: string;
  description: string;
  listItems: IInternationalClientListItem[];
  seo: IInternationalClientSeo;
  created_date: string;
  updated_date: string;
}

export interface IInternationalClientListItem {
  title: string;
  description: string;
}

export interface IInternationalClientSeo {
  metaTitle?: string;
  metaDescription?: string;
  ogTitle?: string;
  ogDescription?: string;
  canonicalUrl?: string;
}



