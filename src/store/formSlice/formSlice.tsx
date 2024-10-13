import {StateCreator} from 'zustand';
import {sliceResetFns} from '../utils';
import {saveStringStorage} from '../../utils/storage/storage';
import {ASYNC_TOKEN_KEY, ASYNC_USER_DATA_KEY} from '../../constants';
import {formSlice, authState} from './types';

const initialState: authState = {
  formData: {
    fulltName: '',
    emailAddress: '',
    equipment: '',
    password: '',
    gender: '',
    selectedAge: '',
    selectedCity: '',
    selectedHeight: '',
    selectedWeight: '',
    goal: '',
    fitness: '',
    currentIndex: '',
    selectedCountry: '',
    selectedState: '',
    userProfileImage: '',
  },
  tokens: {
    accessToken: '',
    refreshToken: '',
  },
};

export const createFormSlice: StateCreator<formSlice> = set => {
  sliceResetFns.add(() => set(initialState));
  return {
    ...initialState,
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
    updateFormData: user => {
      set(previousState => ({formData: {...previousState.formData, ...user}}));
      // saveStringStorage(ASYNC_USER_DATA_KEY, JSON.stringify(user));
    },
    updateUserDataToken(user, tokens) {
      console.log('🚀 ~ updateUserDataToken ~ tokens:', tokens);
      console.log('🚀 ~ updateUserDataToken ~ user:', user);
      set({formData: user, tokens});
      saveStringStorage(ASYNC_USER_DATA_KEY, JSON.stringify(user));
      saveStringStorage(ASYNC_TOKEN_KEY, JSON.stringify(tokens));
    },
  };
};
