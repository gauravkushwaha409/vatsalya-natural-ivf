export interface IHowWeWorkRoot {
  status: string;
  statusCode: number;
  message: string;
  data: IHowWeWorkData;
}

export interface IHowWeWorkData {
  object: string;
  id: string;
  title: string;
  subtitle: string;
  HowWorksDetails: IHowWeWorkHowWorksDetail[];
  createdAt: string;
  updatedAt: string;
}

export interface IHowWeWorkHowWorksDetail {
  object: string;
  id: string;
  icon: string;
  title: string;
  detail: string;
  howWork: string;
  createdAt: string;
  updatedAt: string;
}
