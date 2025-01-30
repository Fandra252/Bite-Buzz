import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import { useColorScheme } from "@/hooks/useColorScheme";

import OnBoardingScreen from "@/screens/OnboardingScreen/OnboardingScreen";
import LoginScreen from "@/screens/LoginScreen/LoginScreen";
import SignUpScreen from "@/screens/SignupScreen/SignupScreen";
// import ForgotPasswordScreen from "./screens/ForgotPasswordScreen";
// import VerificationScreen from "./screens/VerificationScreen";
// import LocationScreen from "./screens/LocationScreen";
// import DrawerNavigator from "./navigators/DrawerNavigator";
// import RestaurantDetailsScreen from "./screens/RestaurantDetailsScreen";
// import DetailsScreen from "./screens/DetailsScreen";
import SearchScreen from "@/screens/SplashScreen/SplashScreen"; 


export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    "Sen-Bold": require("@/assets/fonts/Sen-Bold.ttf"),
    "Sen-Regular": require("@/assets/fonts/Sen-Regular.ttf"),
    "Sen-SemiBold": require("@/assets/fonts/Sen-SemiBold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack.Navigator initialRouteName="SignUp">
        <Stack.Screen
          name="Splash"
          component={SearchScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="OnBoardingScreen"
          component={OnBoardingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{ headerShown: false }}
        />
        {/* <Stack.Screen
          name="ForgotPassword"
          component={ForgotPasswordScreen}
          options={{ headerShown: false }}
        /> */}
        {/* <Stack.Screen
          name="VerificationScreen"
          component={VerificationScreen}
          options={{ headerShown: false }}
        /> */}
        {/* <Stack.Screen
          name="LocationScreen"
          component={LocationScreen}
          options={{ headerShown: false }}
        /> */}
        {/* <Stack.Screen
          name="Home"
          component={DrawerNavigator} // DrawerNavigator should be used here
          options={{ headerShown: false }}
        /> */}
        {/* <Stack.Screen
          name="RestaurantDetails"
          component={RestaurantDetailsScreen}
          options={{ title: "Restaurant Details", headerShown: false }}
        /> */}
        {/* <Stack.Screen
          name="DetailsScreen"
          component={DetailsScreen}
          options={{ headerShown: false }}
        /> */}
        {/* <Stack.Screen
          name="SearchScreen"
          component={SearchScreen}
          options={{ headerShown: false }}
        /> */}
        {/* <Stack.Screen name="(tabs)" options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name="+not-found" component={} options={{ headerShown: false }} /> */}
      </Stack.Navigator>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
