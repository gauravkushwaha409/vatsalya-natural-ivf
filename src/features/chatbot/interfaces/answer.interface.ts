export interface IAnswersRoot {
  links: IAnswersLinks;
  total_items: number;
  total_pages: number;
  current_page: number;
  page_size: number;
  results: IAnswersResult[];
}

export interface IAnswersLinks {
  next: string;
  previous: string;
}

export interface IAnswersResult {
  id: string;
  category: string;
  sub_category: string;
  child_category: string;
  question: string;
  answers: IAnswersAnswer[];
}

export interface IAnswersAnswer {
  answer: string;
  suggestions: IAnswersSuggestion[];
}

export interface IAnswersSuggestion {
  suggestion: string;
}
