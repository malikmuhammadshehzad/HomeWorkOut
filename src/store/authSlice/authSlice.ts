import {StateCreator} from 'zustand';
import {sliceResetFns} from '../utils';
import {saveStringStorage, loadStorage} from '../../utils/storage/storage'; // also import 'loadStorage' from the 'storage'
import {ASYNC_TOKEN_KEY, ASYNC_USER_DATA_KEY} from '../../constants';
import {authSlice, authState} from './types';

const initialState: authState = {
  userData: undefined,
  // userData: {
  //  name :'Muhammad Asif',
  //  gender :  'Male',
  //  age : '26',
  //  weight : '132.277',
  //  height : '5.7',
  //  goal : 'Muscle Gain',
  //  level : 'Beginner',
  //  workout : '4 Times in A Week'
  // },
  tokens: {
    accessToken: '',
    refreshToken: '',
  },
};

export const createAuthSlice: StateCreator<authSlice> = set => {
  sliceResetFns.add(() => set(initialState));
  return {
    ...initialState,


    // .......................... for local storage I did this ...................
    // Function to load stored data on app initialization
    loadStoredData: () => {
      const storedUserData = loadStorage(ASYNC_USER_DATA_KEY);
      const storedTokens = loadStorage(ASYNC_TOKEN_KEY);

      if (storedUserData) {
        set({ userData: storedUserData });
      }

      if (storedTokens) {
        set({ tokens: storedTokens });
      }
    },
    // .......................... for local storage I did this ...................
    /*
     ** update tokening state as well as async
     */
    updateToken: tokens => {
      set({tokens});
      saveStringStorage(ASYNC_TOKEN_KEY, JSON.stringify(tokens));
    },
    /*
     ** updating user data
     */
    updateUserData: user => {
      console.log('updateUserData ~ user:', user); // Add this to check user data
      set(state => ({userData: {...state.userData, ...user}}));
      saveStringStorage(ASYNC_USER_DATA_KEY, JSON.stringify(user));
    },
    updateUserDataToken(user, tokens) {
      console.log('🚀 ~ updateUserDataToken ~ tokens:', tokens);
      console.log('🚀 ~ updateUserDataToken ~ user:', user);
      set({userData: user, tokens});
      saveStringStorage(ASYNC_USER_DATA_KEY, JSON.stringify(user));
      saveStringStorage(ASYNC_TOKEN_KEY, JSON.stringify(tokens));
    },
  };
};
