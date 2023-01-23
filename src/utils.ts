export interface Quote {
  _id: string;
  content: string;
  author: string;
  authorSlug: string;
  length: number;
  tags: string[];
}

export interface QuotesResponse {
  count: number;
  totalCount: number;
  page: number;
  totalPages: number;
  lastItemIndex: number;
  results: Quote[];
}

const baseUrl = "https://usu-quotes-mimic.vercel.app/api";

export function fetchQuotes(authorName: string): Promise<QuotesResponse> {
  return fetch(`${baseUrl}/search?query==${authorName}`).then((res) =>
    res.json()
  );
}

export function fetchRandomQuote(): Promise<Quote> {
  return fetch(`${baseUrl}/random`).then((res) => res.json());
}
