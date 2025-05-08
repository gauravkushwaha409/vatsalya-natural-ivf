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
  tags: [];
  faqs: IArticleFaq[];
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

export interface IArticleFaq {
  object: string;
  id: string;
  question: string;
  answer: string;
  article: string;
  seo: IArticleSeo;
  created_date: string;
  updated_date: string;
}
