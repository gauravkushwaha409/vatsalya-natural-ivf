import { ApiResponseWithPagination } from "@/interface/api.interface";
export interface IOpenPositionRoot {
  status: string;
  statusCode: number;
  message: string;
  data: IOpenPositionData;
}

export interface IOpenPositionData {
  records: IOpenPositionRecord[];
  totalRecords: number;
  perPage: number;
  totalPages: number;
  currentPage: number;
  pagingCounter: number;
  hasPrevious: boolean;
  hasNext: boolean;
  recordShown: number;
}

export interface IOpenPositionRecord {
  object: string;
  id: string;
  title: string;
  location: string;
  department: string;
  description: string;
  employment_type: string;
  experience_level: string;
  seats: number;
  slug: string;
  salary_range: string;
  applicants: [];
  application_deadline: string;
  created_date: string;
  updated_date: string;
}

export type IOpenPositionResponse =
  ApiResponseWithPagination<IOpenPositionData>;
