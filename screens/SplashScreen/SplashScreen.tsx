import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Container, ImageStyle } from "./style";

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("OnBoardingScreen");
    }, 3000); // 3 seconds delay

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <Container>
      <ImageStyle source={require("@/assets/images/Food-image.png")} />
    </Container>
  );
};

export default SplashScreen;
