export interface FavHeroItem {
  id: number;
  name?: string;
  image?: string;
}

export interface FavsState {
  items: FavHeroItem[];
}
