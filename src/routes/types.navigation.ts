import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {CompositeNavigationProp, NavigatorScreenParams} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
/*
 ** Bottom tab screen list
 */
export type BottomTabNavigatorParamList = {
  HomeScreen: undefined;
  ProfileScreen: undefined;
  WorkOutDetailsScreen: any;
};
/*
 **Root strack params list
 */
export type RootStackParamList = {
  HomeStackScreens: NavigatorScreenParams<HomeStackParamList>;
  AuthStackScreens: NavigatorScreenParams<AuthStackParamList>;
};
/*
 **  Auth screen parameters types
 */
export type AuthStackParamList = {
  WorkOutDetailsScreen: any;
  WorkOutScreen: any;
  SettingScreenTwo: undefined;
  ContactUs: undefined;
  TermsAndConditions: undefined;
  PrivacyPolicy: undefined;
  LocationScreen: undefined;
  ChatScreen: undefined;
  VideoScreen: undefined;
  MotivatorDescription: undefined;
  SettingScreen: undefined;
  onPressDescription: undefined;
  ProfileScreenTwo: undefined;
  ProfileScreen: undefined;
  SignupScreenOne: undefined;
  HomeScreenAlly: undefined;
  SignupScreenTwo: undefined;
  SignupScreenThree: undefined;
  SignupScreenFour: undefined;
  SignupScreenFive: undefined;
  SignupScreenSix: undefined;
  SignupScreenSeven: undefined;
  SignupScreenEight: undefined;
  SignupScreenNine: undefined;
  SignupScreenTen: undefined;
  SignUpCarousel: undefined;
  onBoardingScreen: undefined;
  LoginScreen: undefined;
  SignupScreen: undefined;
  ForgotPasswordScreen: undefined;
  ForgotChangePassScreenAlly: undefined;
  OtpVerificationScreen: undefined;
  NewPasswordScreen: undefined;
  ForgotChangePassScreen: {email: string};
  ContactScreen: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  };
  ConfirmSignupScreen: {email: string; password: string};
};
export type HomeStackParamList = {
  BottomTab: NavigatorScreenParams<BottomTabNavigatorParamList>;
};

export type HomeScreenNavigationProp = CompositeNavigationProp<
  NativeStackNavigationProp<HomeStackParamList>,
  BottomTabNavigationProp<BottomTabNavigatorParamList>
>;

export interface tabBarIconType {
  color: string;
  size: number;
  item: {
    name: string;
    component: () => React.JSX.Element;
    tabBarIcon: any;
    tabBarLabel: string;
  };
}
