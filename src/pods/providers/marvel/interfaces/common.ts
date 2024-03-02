export interface MarvelResponse<T> {
  code: number;
  status: "Ok";
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  etag: string;
  data: T;
}

export interface MarvelPagination<T> {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: T;
}
