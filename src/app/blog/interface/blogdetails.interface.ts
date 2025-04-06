import { IBlogAuthor, IBlogSeo } from "./blog.interface";

export interface IBlogDetailsRoot {
  status: string;
  statusCode: number;
  message: string;
  data: IBlogDetailsData;
}

export interface IBlogDetailsData {
  blog: IBlogDetailsBlog;
  relatedBlogs: IBlogDetailsRelatedBlog[];
}

export interface IBlogDetailsBlog {
  object: string;
  id: string;
  title: string;
  slug: string;
  readTime: string;
  category: string;
  author: string;
  image: string;
  caroselImages: string[];
  description: string;
  favorites: number;
  comments: [];
  seo: IBlogDetailsSeo;
  created_date: string;
  updated_date: string;
  tags: string[];
}

export interface IBlogDetailsSeo {
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string[];
  ogTitle: string;
  ogDescription: string;
}

export interface IBlogDetailsRelatedBlog {
  object: string;
  id: string;
  title: string;
  readTime: string;
  slug: string;
  category: string;
  author: IBlogAuthor;
  image: string;
  description: string;
  favorites: number;
  comments: [];
  tags: string[];
  seo: IBlogSeo;
  created_date: string;
  updated_date: string;
}

export interface IBlogDetailsComment {
  comment: string;
  name: string;
  email: string;
  _id: string;
}

export interface IBlogDetailsSeo2 {
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string[];
  ogTitle: string;
  ogDescription: string;
}
