import React, { useEffect, useRef, useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TextInput,
  Alert,
} from "react-native";
import Ionicon from "@expo/vector-icons/Ionicons";
import { useNavigation, useRoute } from "@react-navigation/native";
import axios from "axios";
import {
  BackPressableButton,
  PressableButtonNext,
} from "@/components/common/Buttons/Button";
import {
  BackPressableButtonContainer,
  ButtonContainer,
  Container,
  InputContainer,
  LabelText,
  LabelTextContainer,
  MultiInputContainer,
  ResendCodeText,
  SubInputContainer,
  Subtitle2,
  TextContainer,
  TopContainer,
} from "./style";
import {
  PressableButtonNextText,
  Subtitle,
  Title,
} from "@/components/common/Texts/Text";
import { Input3 } from "@/components/common/Inputs/Inputs";

const VerificationScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { email } = route.params;

  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputRefs = useRef<TextInput[]>([]);
  const [timer, setTimer] = useState(50);
  const [canResend, setCanResend] = useState(false);

  const handleChange = (text : any, index : any) => {
    if (/^\d?$/.test(text)) {
      const updatedOtp = [...otp];
      updatedOtp[index] = text;
      setOtp(updatedOtp);
      if (text && index < 3) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyPress = (key: any, index: any) => {
    if (key === "Backspace" && otp[index] === "" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setCanResend(true);
    }
  }, [timer]);

  const handleResendCode = () => {
    if (canResend) {
      setTimer(50);
      setCanResend(false);
      Alert.alert("Info", "A new OTP has been sent!");
    }
  };

  const verifyOtp = async () => {
    const enteredOtp = otp.join("");
    if (enteredOtp.length !== 4) {
      Alert.alert("Error", "Please enter a valid 4-digit OTP.");
      return;
    }

    try {
      const response = await axios.post(
        "http://192.168.1.170:4000/verify-otp",
        { email, otp: enteredOtp }
      );
      if (response.data.success === true) {
        Alert.alert("Success", "OTP Verified!");
        navigation.navigate("ResetPassword", { email, otp });
      } else {
        Alert.alert("Error", response.data.message);
      }
    } catch (error: any) {
      Alert.alert(
        "Error",
        error.response?.data?.message || "Something went wrong"
      );
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
              <BackPressableButton
                onPress={() => navigation.navigate("ForgotPassword")}
              >
                <Ionicon name="chevron-back-outline" size={24} color="black" />
              </BackPressableButton>
            </BackPressableButtonContainer>
            <TextContainer>
              <Title>Verification</Title>
              <Subtitle>We have sent a code to your email</Subtitle>
              <Subtitle2>{email}</Subtitle2>
            </TextContainer>
          </TopContainer>
          <ButtonContainer>
            <InputContainer>
              <LabelTextContainer>
                <LabelText>CODE</LabelText>
                <ResendCodeText onPress={handleResendCode}>
                  {canResend ? "Resend" : `Resend in ${timer}s`}
                </ResendCodeText>
              </LabelTextContainer>
              <SubInputContainer>
                <MultiInputContainer>
                  {otp.map((value, index) => (
                    <Input3
                      key={index}
                      value={value}
                      onChangeText={(text) => handleChange(text, index)}
                      onKeyPress={({ nativeEvent }) =>
                        handleKeyPress(nativeEvent.key, index)
                      }
                      keyboardType="numeric"
                      maxLength={1}
                      ref={(ref) => {
                        if (ref) inputRefs.current[index] = ref;
                      }}
                    />
                  ))}
                </MultiInputContainer>
              </SubInputContainer>
            </InputContainer>
            <PressableButtonNext onPress={verifyOtp}>
              <PressableButtonNextText>VERIFY</PressableButtonNextText>
            </PressableButtonNext>
          </ButtonContainer>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default VerificationScreen;
