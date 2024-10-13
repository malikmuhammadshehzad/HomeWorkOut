import {API_KEY_DEV, API_KEY_PROD} from '@env';
export const API_KEY = process.env.NODE_ENV === 'development' ? API_KEY_DEV : API_KEY_PROD;
export const ASYNC_TOKEN_KEY = 'USER_TOKEN';
export const ASYNC_USER_DATA_KEY = 'USER_DATA';
export const USER_LANGUAGE = 'USER_LANGUAGE';
export const FALL_BACK_LANG = 'en-US';

export const bannerAddKey = 'ca-app-pub-6806642040204494/3806980772';
export const INTERTSIAL_KEY = 'ca-app-pub-6806642040204494/8268969965';
export const APP_ID = 'ca-app-pub-6806642040204494~8460541659';
