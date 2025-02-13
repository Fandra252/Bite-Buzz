import { View, Text, Pressable, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import { Checkbox } from "react-native-paper";
import { PressableButtonNext } from "@/components/common/Buttons/Button";
import Ionicon from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Formik } from "formik";
import * as Yup from "yup";
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
import axios from "axios";
import { LoginScreenvalidationSchema } from "@/validations/formValidation";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "@/types";

type LoginScreenNavigationProp = StackNavigationProp<
  RootStackParamList
>;

 export const LoginScreen = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const toggleCheckbox = () => setRememberMe(!rememberMe);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const loadStoredCredentials = async (setFieldValue: any) => {
    try {
      const savedEmail = await AsyncStorage.getItem("savedEmail");
      const savedPassword = await AsyncStorage.getItem("savedPassword");
      if (savedEmail && savedPassword) {
        setRememberMe(true);
        setFieldValue("email", savedEmail);
        setFieldValue("password", savedPassword);
      }
    } catch (error) {
      console.error("Error loading saved credentials:", error);
    }
  };

  const handleLogin = async (values: any) => {
    const userData = {
      email: values.email,
      password: values.password,
    };

    try {
      console.log("Logging in with data: ", userData);

      const response = await axios.post(
        "http://192.168.1.170:4000/login",
        userData
      );

      if (response.data.status === "ok") {
        Alert.alert("Success", "Logged in successfully!");
        AsyncStorage.setItem("token", response.data.data);
        AsyncStorage.setItem("isLoggedIn", JSON.stringify(true));
        if (rememberMe) {
          await AsyncStorage.setItem("savedEmail", values.email);
          await AsyncStorage.setItem("savedPassword", values.password);
        } else {
          await AsyncStorage.removeItem("savedEmail");
          await AsyncStorage.removeItem("savedPassword");
        }

        navigation.replace("LocationScreen");
      } else {
        Alert.alert(
          "Error",
          response.data.data || "Invalid login credentials."
        );
      }
    } catch (error: any) {
      console.error(
        "Login error: ",
        error.response ? error.response.data : error.message
      );

      Alert.alert(
        "Error",
        error.response
          ? error.response.data
          : "Login failed. Please check your credentials."
      );
    }
  };

  return (
    <Container>
      <TextContainer>
        <Title>Log In</Title>
        <Subtitle>Please sign in to your existing account</Subtitle>
      </TextContainer>

      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={LoginScreenvalidationSchema}
        onSubmit={handleLogin}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          setFieldValue,
          values,
          errors,
          touched,
        }) => {
          useEffect(() => {
            loadStoredCredentials(setFieldValue);
          }, [setFieldValue]);

          return (
            <ButtonContainer>
              <InputContainer>
                <SubInputContainer>
                  <View style={{ alignSelf: "flex-start" }}>
                    <LabelText>EMAIL</LabelText>
                  </View>
                  <Input
                    placeholder="email@example.com"
                    value={values.email}
                    onChangeText={handleChange("email")}
                    onBlur={handleBlur("email")}
                    keyboardType="email-address"
                    autoCapitalize="none"
                  />
                  {errors.email && touched.email && (
                    <ErrorText>{errors.email}</ErrorText>
                  )}
                </SubInputContainer>

                <SubInputContainer>
                  <View style={{ alignSelf: "flex-start" }}>
                    <LabelText>PASSWORD</LabelText>
                  </View>
                  <PasswordInputContainer>
                    <Input1
                      placeholder="*  *  *  *  *  *  *  *  *"
                      value={values.password}
                      onChangeText={handleChange("password")}
                      onBlur={handleBlur("password")}
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
                  {errors.password && touched.password && (
                    <ErrorText>{errors.password}</ErrorText>
                  )}
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
              <View style={{ width: "80%" }}>
                <PressableButtonNext onPress={handleSubmit}>
                  <PressableButtonNextText>LOG IN</PressableButtonNextText>
                </PressableButtonNext>
              </View>

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
                  <Ionicon
                    name="logo-facebook"
                    color={"white"}
                    size={38}
                  ></Ionicon>
                </FacebookContainer>
                <TwitterContainer>
                  <Ionicon
                    name="logo-twitter"
                    color={"white"}
                    size={32}
                  ></Ionicon>
                </TwitterContainer>
                <AppletContainer>
                  <Ionicon
                    name="logo-apple"
                    color={"white"}
                    size={32}
                  ></Ionicon>
                </AppletContainer>
              </SocialIconContainer>
            </ButtonContainer>
          );
        }}
      </Formik>
    </Container>
  );
};

