export interface IWhyUsRoot {
  status: string;
  statusCode: number;
  message: string;
  data: IWhyUsData;
}

export interface IWhyUsData {
  object: string;
  id: string;
  title: string;
  subtitle: string;
  youtubeLink: string;
  WhyusDetail: IWhyUsWhyusDetail[];
  createdAt: string;
  updatedAt: string;
  displayName: string;
}

export interface IWhyUsWhyusDetail {
  object: string;
  id: string;
  icon: string;
  whyus: string;
  question: string;
  answer: string;
  createdAt: string;
  updatedAt: string;
}
