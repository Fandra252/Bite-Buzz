import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import "react-native-reanimated";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useColorScheme } from "@/hooks/useColorScheme";
import { StatusBar } from "react-native";
import { useEffect, useState } from "react";
import {
  SplashScreen,
  IntroScreen,
  LoginScreen,
  SignUpScreen,
  ForgotPasswordScreen,
  VerificationScreen,
  LocationScreen,
  HomeScreen,
  ResetPasswordScreen,
  ProfileScreen,
  PersonalInfoScreen,
  EditProfileScreen,
} from "@/screens";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    async function checkLoginStatus() {
      try {
        const loggedInStatus = await AsyncStorage.getItem("isLoggedIn");

        setIsLoggedIn(loggedInStatus === "true");
      } catch (e) {
        console.error("Error retrieving login status", e);
      }
    }
    checkLoginStatus();
  }, []);

  const [loaded] = useFonts({
    "Sen-Bold": require("@/assets/fonts/Sen-Bold.ttf"),
    "Sen-Regular": require("@/assets/fonts/Sen-Regular.ttf"),
    "Sen-SemiBold": require("@/assets/fonts/Sen-SemiBold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  const Stack = createStackNavigator();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack.Navigator initialRouteName={isLoggedIn ? "Home" : "Splash"}>
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="IntroScreen"
          component={IntroScreen}
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
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPasswordScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="VerificationScreen"
          component={VerificationScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ResetPassword"
          component={ResetPasswordScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LocationScreen"
          component={LocationScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PersonalInfoScreen"
          component={PersonalInfoScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EditProfileScreen"
          component={EditProfileScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
      <StatusBar backgroundColor="black" barStyle="light-content" />
    </ThemeProvider>
  );
}
