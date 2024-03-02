export interface Hero {
  id: number;
  name: string;
  description: string;
  modified: string;
  thumbnail: HeroThumbnail;
  resourceURI: string;
  comics: HeroComics;
  series: HeroComics;
  stories: HeroStories;
  events: HeroComics;
  urls: URL[];
}

export interface HeroComics {
  available: number;
  collectionURI: string;
  items: ComicsItem[];
  returned: number;
}

export interface ComicsItem {
  resourceURI: string;
  name: string;
}

export interface HeroStories {
  available: number;
  collectionURI: string;
  items: StoriesItem[];
  returned: number;
}

export interface StoriesItem {
  resourceURI: string;
  name: string;
  type: ItemType;
}

export enum ItemType {
  Cover = "cover",
  Empty = "",
  InteriorStory = "interiorStory",
}

export interface HeroThumbnail {
  path: string;
  extension: Extension;
}

export enum Extension {
  GIF = "gif",
  Jpg = "jpg",
}

export interface URL {
  type: URLType;
  url: string;
}

export enum URLType {
  Comiclink = "comiclink",
  Detail = "detail",
  Wiki = "wiki",
}
