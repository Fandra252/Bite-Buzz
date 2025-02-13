export type RootStackParamList = {
  LoginScreen: undefined;
  Login: undefined;
  Profile: undefined;
  PersonalInfoScreen: undefined;
  LocationScreen: undefined;
  ForgotPassword: undefined;
  SignUp: undefined;
  IntroScreen: undefined;
  ResetPassword: { email: string; otp: any };
  VerificationScreen: { email: string };
  ProfileScreen: undefined;
  SearchScreen: undefined;
  RestaurantDetails: { restaurant: Item };
  EditProfileScreen: undefined;
  Home: undefined;
};

export type Item = {
  id: string;
  name: string;
  description: string;
  // add other properties as needed
};
