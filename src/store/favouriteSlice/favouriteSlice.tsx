// store/favoritesSlice.ts
import { StateCreator } from 'zustand';
import { FavoriteItemType, FavoritesSlice } from './types';

export const createFavoritesSlice: StateCreator<FavoritesSlice> = (set) => ({
  favourites: [],

  addToFavourites: (item: FavoriteItemType) => {
    set((state) => ({
      favourites: [...state.favourites, item],
    }));
  },

  removeFromFavourites: (id: number) => {
    set((state) => ({
      favourites: state.favourites.filter((item) => item.id !== id),
    }));
  },

  toggleFavourite: (item: FavoriteItemType) => {
    set((state) => {
      const isFavourite = state.favourites.some((fav) => fav.id === item.id);
      return {
        favourites: isFavourite
          ? state.favourites.filter((fav) => fav.id !== item.id)
          : [...state.favourites, item],
      };
    });
  },
});
