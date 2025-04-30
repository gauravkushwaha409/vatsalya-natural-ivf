export interface IStageRoot {
  status: string;
  statusCode: number;
  message: string;
  data: IStageData;
}

export interface IStageData {
  records: IStageRecord[];
  totalRecords: number;
  perPage: number;
  totalPages: number;
  currentPage: number;
  pagingCounter: number;
  hasPrevious: boolean;
  hasNext: boolean;
  prev: string;
  next: string;
  recordShown: number;
}

export interface IStageRecord {
  object: string;
  id: string;
  title: string;
  description: string;
  image: string;
  seo: IStageSeo;
  createdAt: string;
  updatedAt: string;
}

export interface IStageSeo {}
