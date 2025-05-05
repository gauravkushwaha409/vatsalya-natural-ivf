export interface IWhyChooseUsRoot {
  status: string;
  statusCode: number;
  message: string;
  data: IWhyChooseUsData;
}

export interface IWhyChooseUsData {
  object: string;
  id: string;
  title: string;
  description: string;
  whychooseus_detail: IWhychooseusDetail[];
  createdAt: string;
  updatedAt: string;
  displayName: string;
}

export interface IWhychooseusDetail {
  object: string;
  id: string;
  image: string;
  title: string;
  description: string;
  whychooseus: string;
  createdAt: string;
  updatedAt: string;
}
