export interface ICenterRoot {
  status: string;
  statusCode: number;
  message: string;
  data: ICenterData;
}

export interface ICenterData {
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
  email: string;
  description: string;
}
