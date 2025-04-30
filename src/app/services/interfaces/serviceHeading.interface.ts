export interface IServiceHeadingRoot {
  status: string;
  statusCode: number;
  message: string;
  data: IServiceHeadingData;
}

export interface IServiceHeadingData {
  object: string;
  id: string;
  title: string;
  description: string;
  seo: IServiceHeadingSeo;
  created_date: string;
  updated_date: string;
}

export interface IServiceHeadingSeo {}
