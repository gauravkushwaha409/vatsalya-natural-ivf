export interface TermResponse {
  status: string;
  statusCode: number;
  message: string;
  data: Data;
}

export interface Data {
  object: string;
  id: string;
  title: string;
  content: string;
  seo: Seo;
  created_date: string;
  updated_date: string;
}

export interface Seo {
  metaTitle: string;
  metaDescription: string;
  ogTitle: string;
  ogDescription: string;
  canonicalUrl: string;
}
