import { View, Text, Pressable, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import { Checkbox } from "react-native-paper";
import { PressableButtonNext } from "@/components/common/Buttons/Button";
import Ionicon from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  AppletContainer,
  ButtonContainer,
  Container,
  FacebookContainer,
  ForgotPasswordContainer,
  ForgotPasswordText,
  InputContainer,
  OrText,
  PasswordInputContainer,
  RememberMeContainer,
  SignupInnerText,
  SignupText,
  SocialIconContainer,
  SubInputContainer,
  TextContainer,
  TwitterContainer,
} from "./style";
import {
  LabelText,
  PressableButtonNextText,
  Subtitle,
  Title,
} from "@/components/common/Texts/Text";
import { ErrorText } from "@/components/common/ErrorMessagetext/ErrorMessageText";
import { Input, Input1 } from "@/components/common/Inputs/Inputs";

const LoginScreen = () => {
  const navigation = useNavigation();
  const [rememberMe, setRememberMe] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);

  const staticEmail = "abc@gmail.com";
  const staticPassword = "password123";

  useEffect(() => {
    const loadCredentials = async () => {
      try {
        const savedEmail = await AsyncStorage.getItem("savedEmail");
        const savedPassword = await AsyncStorage.getItem("savedPassword");
        if (savedEmail && savedPassword) {
          setEmail(savedEmail);
          setPassword(savedPassword);
          setRememberMe(true);
        }
      } catch (error) {
        console.error("Error loading saved credentials:", error);
      }
    };
    loadCredentials();
  }, []);

  const validateInputs = () => {
    let valid = true;

    if (!email) {
      setEmailError("Email is required");
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Please enter a valid email address");
      valid = false;
    } else {
      setEmailError(null);
    }

    const passwordRegex = /[A-Za-z\d@$!%*?&]{8,}$/;
    if (!password) {
      setPasswordError("Password is required");
      valid = false;
    } else if (!passwordRegex.test(password)) {
      setPasswordError("Password must be at least 8 characters long");
      valid = false;
    } else {
      setPasswordError(null);
    }

    return valid;
  };

  const handleLogin = async () => {
    if (!validateInputs()) return;

    if (email === staticEmail && password === staticPassword) {
      if (rememberMe) {
        try {
          await AsyncStorage.setItem("savedEmail", email);
          await AsyncStorage.setItem("savedPassword", password);
        } catch (error) {
          console.error("Error saving credentials:", error);
        }
      } else {
        await AsyncStorage.removeItem("savedEmail");
        await AsyncStorage.removeItem("savedPassword");
      }

      Alert.alert("Success", "Logged in successfully!");
      navigation.navigate("LocationScreen");
    } else {
      Alert.alert("Error", "Invalid email or password");
    }
  };

  const toggleCheckbox = () => setRememberMe(!rememberMe);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <Container>
      <TextContainer>
        <Title>Log In</Title>
        <Subtitle>Please sign in to your existing account</Subtitle>
      </TextContainer>
      <ButtonContainer>
        <InputContainer>
          <SubInputContainer>
            <View style={{ alignSelf: "flex-start" }}>
              <LabelText>EMAIL</LabelText>
            </View>
            <Input
              placeholder="email@example.com"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            {emailError && <ErrorText>{emailError}</ErrorText>}
          </SubInputContainer>
          <SubInputContainer>
            <View style={{ alignSelf: "flex-start" }}>
              <LabelText>PASSWORD</LabelText>
            </View>
            <PasswordInputContainer>
              <Input1
                placeholder="*  *  *  *  *  *  *  *  *"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
              />
              <Pressable
                onPress={togglePasswordVisibility}
                accessibilityLabel="Toggle password visibility"
                accessible={true}
              >
                <Ionicon
                  name={showPassword ? "eye-outline" : "eye-off-outline"}
                  size={24}
                  color="gray"
                />
              </Pressable>
            </PasswordInputContainer>
            {passwordError && <ErrorText>{passwordError}</ErrorText>}
          </SubInputContainer>
          <ForgotPasswordContainer>
            <RememberMeContainer>
              <Checkbox
                status={rememberMe ? "checked" : "unchecked"}
                onPress={toggleCheckbox}
              />
              <Text>Remember Me</Text>
            </RememberMeContainer>
            <Pressable
              onPress={() => navigation.navigate("ForgotPassword")}
              accessibilityLabel="Forgot Password"
              accessible={true}
            >
              <ForgotPasswordText>Forgot Password</ForgotPasswordText>
            </Pressable>
          </ForgotPasswordContainer>
        </InputContainer>
        <PressableButtonNext onPress={handleLogin}>
          <PressableButtonNextText>LOG IN</PressableButtonNextText>
        </PressableButtonNext>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: 20,
          }}
        >
          <SignupText>Don't have an account?</SignupText>
          <Pressable
            onPress={() => navigation.navigate("SignUp")}
            accessibilityLabel="Sign up for a new account"
            accessible={true}
          >
            <SignupInnerText>SIGN UP</SignupInnerText>
          </Pressable>
        </View>
        <OrText>Or</OrText>
        <SocialIconContainer>
          <FacebookContainer>
            <Ionicon name="logo-facebook" color={"white"} size={38}></Ionicon>
          </FacebookContainer>
          <TwitterContainer>
            <Ionicon name="logo-twitter" color={"white"} size={32}></Ionicon>
          </TwitterContainer>
          <AppletContainer>
            <Ionicon name="logo-apple" color={"white"} size={32}></Ionicon>
          </AppletContainer>
        </SocialIconContainer>
      </ButtonContainer>
    </Container>
  );
};

export default LoginScreen;
