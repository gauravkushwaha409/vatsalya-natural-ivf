import { ApiResponse } from "@/interface/api.interface";

export interface ICareerRoot {
  status: string;
  statusCode: number;
  message: string;
  data: ICareerData;
}

export interface ICareerData {
  object: string;
  id: string;
  title: string;
  subtitle: string;
  careerbenefit: ICareerCareerbenefit[];
  created_date: string;
  updated_date: string;
}

export interface ICareerCareerbenefit {
  object: string;
  id: string;
  title: string;
  icon: string;
  details: string;
  career: string;
  slug: string;
  created_date: string;
  updated_date: string;
}

export type ICarreerResponse = ApiResponse<ICareerData>;
