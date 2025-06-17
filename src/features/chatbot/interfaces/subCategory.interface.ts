export interface ISubCatgoryRoot {
  links: ISubCatgoryLinks;
  total_items: number;
  total_pages: number;
  current_page: number;
  page_size: number;
  results: ISubCatgoryResult[];
}

export interface ISubCatgoryLinks {
  next: string;
  previous: string;
}

export interface ISubCatgoryResult {
  id: string;
  category: string;
  name: string;
  description: string;
  created_at: string;
  updated_at: string;
  child_categorys: ISubCatgoryChildCategory[];
}
export interface ISubCatgoryChildCategory {
  id: string;
  name: string;
  description: string;
}
