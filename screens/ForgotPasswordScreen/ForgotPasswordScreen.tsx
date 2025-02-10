import {
  View,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  Alert,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import {
  BackPressableButton,
  PressableButtonNext,
} from "@/components/common/Buttons/Button";
import Ionicon from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import {
  BackPressableButtonContainer,
  ButtonContainer,
  Container,
  InputContainer,
  SubInputContainer,
  TextContainer,
  TopContainer,
} from "./style";
import {
  LabelText,
  PressableButtonNextText,
  Subtitle,
  Title,
} from "@/components/common/Texts/Text";
import { Input } from "@/components/common/Inputs/Inputs";
import axios from "axios";
import LottieView from "lottie-react-native";
import loadingAnimation from "@/assets/animations/CustomLoading.json";

const ForgotPasswordScreen = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  const sendOtp = async () => {
    setLoading(true);
    try {
      await axios.post("http://192.168.1.170:4000/forgot-password", {
        email,
      });
      Alert.alert("Success", "OTP sent to your email");
      navigation.navigate("VerificationScreen", { email });
    } catch (error: any) {
      Alert.alert(
        "Error",
        error.response?.data?.message || "Something went wrong"
      );
    } finally {
      setLoading(false); // Hide loading indicator
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 0}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Container>
          <TopContainer>
            <BackPressableButtonContainer>
              <BackPressableButton onPress={() => navigation.navigate("Login")}>
                <Ionicon name="chevron-back-outline" size={24} color="black" />
              </BackPressableButton>
            </BackPressableButtonContainer>
            <TextContainer>
              <Title>Forgot Password</Title>
              <Subtitle>Please sign in to your existing account</Subtitle>
            </TextContainer>
          </TopContainer>
          <ButtonContainer>
            <InputContainer>
              <SubInputContainer>
                <View style={{ alignSelf: "flex-start" }}>
                  <LabelText>EMAIL</LabelText>
                </View>
                <Input
                  placeholder="email@emaple.com"
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                />
              </SubInputContainer>
            </InputContainer>
            <PressableButtonNext onPress={sendOtp}>
              {loading ? (
                <LottieView
                  source={loadingAnimation}
                  style={{ width: "200%", height: "200%" }}
                  autoPlay
                  loop
                />
              ) : (
                <PressableButtonNextText>SEND CODE</PressableButtonNextText>
              )}
            </PressableButtonNext>
          </ButtonContainer>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default ForgotPasswordScreen;
