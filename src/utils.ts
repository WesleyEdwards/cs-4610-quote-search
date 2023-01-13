export interface Quote {
  _id: string;
  content: string;
  author: string;
  tags: string[];
  authorSlug: string;
  length: number;
  dateAdded: string;
  dateModified: string;
}

export interface QuotesResponse {
  count: number;
  totalCount: number;
  page: number;
  totalPages: number;
  lastItemIndex: number;
  results: Quote[];
}

export function fetchQuotes(authorName: string): Promise<QuotesResponse> {
  return fetch(
    `https://api.quotable.io/search/quotes?query==${authorName}&fields=author`
  ).then((res) => res.json());
}
