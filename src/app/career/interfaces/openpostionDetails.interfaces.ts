import { ApiResponse } from "@/interface/api.interface";

export interface IOpenPositionDetailsRoot {
  status: string;
  statusCode: number;
  message: string;
  data: IOpenPositionDetailsData;
}

export interface IOpenPositionDetailsData {
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
  application_deadline: string;
  created_date: string;
  updated_date: string;
}

export type IOpenPositionDetailsResponse =
  ApiResponse<IOpenPositionDetailsData>;
