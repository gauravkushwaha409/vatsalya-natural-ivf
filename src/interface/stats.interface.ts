import { ApiResponse } from "./api.interface";
export interface IStatsRoot {
  status: string;
  statusCode: number;
  message: string;
  data: IStatsData;
}

export interface IStatsData {
  object: string;
  id: string;
  title: string;
  subtitle: string;
  description: string;
  statsImage: string;
  caringforFamilies: number;
  successfulIVFTreatments: number;
  expertSpecialists: number;
  created_date: string;
  updated_date: string;
  caringforFamiliesIcon: string;
  successfulIVFTreatmentsIcon: string;
  expertSpecialistsIcon: string;
}

export type IStatsResponse = ApiResponse<IStatsRoot>;
