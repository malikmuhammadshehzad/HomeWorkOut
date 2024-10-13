// @types/favorites.ts
export interface FavoriteItemType {
    id: number;
    [key: string]: any; // You can add more fields depending on your data structure
  }
  
  export interface FavoritesSlice {
    favourites: FavoriteItemType[];
    addToFavourites: (item: FavoriteItemType) => void;
    removeFromFavourites: (id: number) => void;
    toggleFavourite: (item: FavoriteItemType) => void;
  }
  