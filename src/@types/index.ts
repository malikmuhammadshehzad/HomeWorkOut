export type userDataType = {
  // PK: string;
  // SK: string;
  // city: string;
  // createdAt: string;
  currentIndex?: string;
  // deviceFCMToken: string;
  emailAddress?: string;
  equipment?: string;
  // firstName: string;
  fulltName?: string;
  fitness?: string;
  gender?: string;
  goal?: string;
  // isAdmin: boolean;
  // lastName: string;
  // listingStatus: string;
  password?: string;
  // phoneNumber: string;
  // state: string;
  selectedAge?: string;
  selectedCountry?: string;
  selectedCity?: string;
  selectedHeight?: string;
  selectedState?: string;
  selectedWeight?: string;
  // totalDogSold: number;
  // totalImages: number;
  // totalListing: number;
  // userAbuseReport: number;
  // userAccountStatus: string;
  // userBreederVerificationStatus: string;
  // userBuyerForm: string;
  // userLastSeen: string;
  userProfileImage?: string;
  // userRating: number;
};

export interface tokenType {
  accessToken: string;
  refreshToken: string;
}
