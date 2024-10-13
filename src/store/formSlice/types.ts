import {tokenType, userDataType} from '../../@types';

export interface emailPassType {
  email: string;
  password: string;
}

export interface SignUpParams {
  emailAddress: string;
  password: string;
  fulltName: string;
  phoneNumber?: string;
  state?: string;
  city?: string;
}

/*
 ** Auth slice type
 */
export interface authState {
  formData: userDataType | undefined;
  tokens: tokenType;
}

export interface formSlice extends authState {
  updateToken: (tokens: tokenType) => void;
  updateFormData: (user: userDataType) => void;
  updateUserDataToken: (user: userDataType, tokens: tokenType) => void;
}
