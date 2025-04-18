export interface IHeroBlogRoot {
  object: string;
  id: string;
  title: string;
  readTime: string;
  slug: string;
  category: string;
  author: IHeroBlogAuthor;
  image: string;
  description: string;
  type: "feature" | "new" | string;
  favorites: number;
  comments: string[];
  tags: string[];
  seo: IHeroBlogSeo;
  created_date: string;
  updated_date: string;
}

export interface IHeroBlogAuthor {
  object: string;
  id: string;
  name: string;
  email: string;
  role: string;
  created_date: string;
  updated_date: string;
}

export interface IHeroBlogSeo {
  canonicalUrl: string;
  metaDescription: string;
  metaTitle: string;
  ogDescription: string;
  ogTitle: string;
}
