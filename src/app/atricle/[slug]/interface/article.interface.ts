export interface IArticleRoot {
  status: string;
  statusCode: number;
  message: string;
  data: IArticleData;
}

export interface IArticleData {
  object: string;
  id: string;
  title: string;
  slug: string;
  image: string;
  description: string;
  readTime: string;
  author: IArticleAuthor;
  tags: any[];
  seo: IArticleSeo;
  created_date: string;
  updated_date: string;
}

export interface IArticleAuthor {
  object: string;
  id: string;
  name: string;
  email: string;
  role: string;
  created_date: string;
  updated_date: string;
}

export interface IArticleSeo {
  metaTitle: string;
  metaDescription: string;
}
