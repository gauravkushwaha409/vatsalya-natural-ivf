export interface INoticeRoot {
  status: string;
  statusCode: number;
  message: string;
  data: INoticeData;
}

export interface INoticeData {
  records: INoticeData[];
  totalINoticeDatas: number;
  perPage: number;
  totalPages: number;
  currentPage: number;
  pagingCounter: number;
  hasPrevious: boolean;
  hasNext: boolean;
  prev: any;
  next: any;
  recordShown: number;
}

export interface INoticeData {
  object: string;
  id: string;
  slug: string;
  title: string;
  image: string;
  status: boolean;
  heroImage: string;
  description: string;
  hasDetails: boolean;
  created_date: string;
  updated_date: string;
}
