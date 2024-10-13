import {create} from 'zustand';
import {authSlice} from './authSlice/types';
import {appSlice} from './appSlice/types';
import {userSlice} from './userSlice/types';
import { formSlice } from './formSlice/types';
import { FavoritesSlice } from './favouriteSlice/types';
import {createUserSlice} from './userSlice/userSlice';
import {createAuthSlice} from './authSlice/authSlice';
import {createAppSlice} from './appSlice/appSlice';
import {createFormSlice} from './formSlice/formSlice';
import {createFavoritesSlice} from './favouriteSlice/favouriteSlice';
/*
 ** Main zustand store
 */
export const useAppStore = create<authSlice & appSlice & userSlice & formSlice & FavoritesSlice>()((...a) => ({
  ...createUserSlice(...a),
  ...createAuthSlice(...a),
  ...createAppSlice(...a),
  ...createFormSlice(...a),
  ...createFavoritesSlice(...a),
}));
