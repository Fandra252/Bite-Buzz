import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Container, ImageStyle } from "./style";
import { RootStackParamList } from "@/types";
import { StackNavigationProp } from "@react-navigation/stack";

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList
>;
export const SplashScreen = () => {
const navigation = useNavigation<ProfileScreenNavigationProp>();


  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("IntroScreen");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <Container>
      <ImageStyle source={require("@/assets/images/Food-image.png")} />
    </Container>
  );
};

