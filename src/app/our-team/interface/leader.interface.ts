export interface ILeaderRoot {
  status: string;
  statusCode: number;
  message: string;
  data: ILeaderData;
}

export interface ILeaderData {
  object: string;
  id: string;
  leaderTitle: string;
  leaderName: string;
  leaderPosition: string;
  leaderImage: string;
  leaderMessage: string;
  description: string;
  aboutUs: string;
  seo: ILeaderSeo;
  created_data: string;
  updated_data: string;
}

export interface ILeaderSeo {
  metaTitle: string;
  metaDescription: string;
  ogTitle: string;
  ogDescription: string;
}
