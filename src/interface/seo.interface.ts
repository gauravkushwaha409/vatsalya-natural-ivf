export interface ISeoRoot {
  status: string;
  statusCode: number;
  message: string;
  data: ISeoData | null;
}

export interface ISeoData {
  object: string;
  id: string;
  metaTitle: string;
  metaDescription: string;
  ogTitle: string;
  ogDescription: string;
  seoFor: string;
  createdAt: string;
  updatedAt: string;
  canonicalUrl: string;
}
