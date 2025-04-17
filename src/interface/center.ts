export interface Root {
  status: string;
  statusCode: number;
  message: string;
  data: Data;
}

export interface Data {
  records: ICenter[];
  totalRecords: number;
  perPage: number;
  totalPages: number;
  currentPage: number;
  pagingCounter: number;
  hasPrevious: boolean;
  hasNext: boolean;
  recordShown: number;
}

export interface ICenter {
  object: string;
  id: string;
  name: string;
  icon: string;
  location: string;
  phone: string[];
  created_date: string;
  updated_date: string;
  mapUrl: string;
}
