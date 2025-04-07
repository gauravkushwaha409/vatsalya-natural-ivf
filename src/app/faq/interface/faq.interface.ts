export interface IFaqRoot {
  status: string;
  statusCode: number;
  message: string;
  data: IFaqData;
}

export interface IFaqData {
  data: IFaqData2;
  home: IFaqHome[];
}

export interface IFaqData2 {
  records: IFaqRecord[];
  totalRecords: number;
  perPage: number;
  totalPages: number;
  currentPage: number;
  pagingCounter: number;
  hasPrevious: boolean;
  hasNext: boolean;

  recordShown: number;
}

export interface IFaqRecord {
  object: string;
  id: string;
  question: string;
  answer?: string;
  home?: string;
  created_data: string;
  updated_data: string;
  setting?: string;
}

export interface IFaqHome {
  object: string;
  id: string;
  question: string;
  setting: string;
  created_data: string;
  updated_data: string;
}
