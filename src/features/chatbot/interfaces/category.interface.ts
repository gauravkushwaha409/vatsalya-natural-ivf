export interface ICategoryRoot {
  links: ICategoryLinks;
  total_items: number;
  total_pages: number;
  current_page: number;
  page_size: number;
  results: ICategoryResult[];
}

export interface ICategoryLinks {
  next: string;
  previous: string;
}

export interface ICategoryResult {
  id: string;
  name: string;
  description: string;
  image: string;
  created_at: string;
  updated_at: string;
  sub_intents: ICategorySubIntent[];
}

export interface ICategorySubIntent {
  id: string;
  name: string;
  description: string;
}
