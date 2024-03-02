export interface Comic {
  id: number;
  digitalId: number;
  title: string;
  issueNumber: number;
  variantDescription: string;
  description: string;
  modified: string;
  isbn: string;
  upc: string;
  diamondCode: string;
  ean: string;
  issn: string;
  format: string;
  pageCount: number;
  textObjects: ComicTextObject[];
  resourceURI: string;
  urls: ComicUrl[];
  series: ComicSeries;
  variants: ComicVariant[];
  collections: any[];
  collectedIssues: any[];
  dates: ComicDate[];
  prices: ComicPrice[];
  thumbnail: ComicThumbnail;
  images: ComicImage[];
  creators: ComicCreators;
  Comiccharacters: ComicCharacters;
  ComicStories: ComicStories;
  events: Events;
}

export interface ComicTextObject {
  type: string;
  language: string;
  text: string;
}

export interface ComicUrl {
  type: string;
  url: string;
}

export interface ComicSeries {
  resourceURI: string;
  name: string;
}

export interface ComicVariant {
  resourceURI: string;
  name: string;
}

export interface ComicDate {
  type: "onsaleDate" | "focDate" | "unlimitedDate" | "digitalPurchaseDate";
  date: string;
}

export interface ComicPrice {
  type: string;
  price: number;
}

export interface ComicThumbnail {
  path: string;
  extension: string;
}

export interface ComicImage {
  path: string;
  extension: string;
}

export interface ComicCreators {
  available: number;
  collectionURI: string;
  items: ComicItem[];
  returned: number;
}

export interface ComicItem {
  resourceURI: string;
  name: string;
  role: string;
}

export interface ComicCharacters {
  available: number;
  collectionURI: string;
  items: ComicItem2[];
  returned: number;
}

export interface ComicItem2 {
  resourceURI: string;
  name: string;
}

export interface ComicStories {
  available: number;
  collectionURI: string;
  items: ComicItem3[];
  returned: number;
}

export interface ComicItem3 {
  resourceURI: string;
  name: string;
  type: string;
}

export interface Events {
  available: number;
  collectionURI: string;
  items: any[];
  returned: number;
}
