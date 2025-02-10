import React, { useState } from "react";
import {
  View,
  Pressable,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Ionicon from "@expo/vector-icons/Ionicons";
import { Formik } from "formik";
import { ValidationSchema } from "@/validations/formValidation";
import {
  BackPressableButton,
  PressableButtonNext,
} from "@/components/common/Buttons/Button";
import {
  BackPressableButtonContainer,
  ButtonContainer,
  Container,
  InputContainer,
  PasswordInputContainer,
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
import { ErrorText } from "@/components/common/ErrorMessagetext/ErrorMessageText";
import { Input, Input1 } from "@/components/common/Inputs/Inputs";
import axios from "axios";

const SignUpScreen = () => {
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const togglePasswordVisibility2 = () => setShowRePassword(!showRePassword);

  const handleSignUp = async (values: any) => {
    try {
      const { name, email, password } = values;
      const response = await axios.post("http://192.168.1.170:4000/register", {
        name,
        email,
        password,
      });

      if (response.data.status === "ok") {
        Alert.alert("Registered successfully");
        navigation.navigate("Login");
      } else {
       const errorMessage =
         typeof response.data === "string"
           ? response.data
           : JSON.stringify(response.data);

       Alert.alert("Registration Failed", errorMessage);
      }
    } catch (error) {
      console.error("Sign Up Error", error);
      Alert.alert("Error", "An unexpected error occurred");
    }
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 80 : 0}
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          overScrollMode="never"
          showsVerticalScrollIndicator={false}
        >
          <Container>
            <TopContainer>
              <BackPressableButtonContainer>
                <BackPressableButton
                  onPress={() => navigation.navigate("Login")}
                >
                  <Ionicon
                    name="chevron-back-outline"
                    size={24}
                    color="black"
                  />
                </BackPressableButton>
              </BackPressableButtonContainer>
              <TextContainer>
                <Title>Sign Up</Title>
                <Subtitle>Please sign up to get started</Subtitle>
              </TextContainer>
            </TopContainer>
            <Formik
              initialValues={{
                name: "",
                email: "",
                password: "",
                confirmPassword: "",
              }}
              validationSchema={ValidationSchema}
              onSubmit={handleSignUp}
            >
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors,
                touched,
              }) => (
                <ButtonContainer>
                  {/* <View
                    style={{ paddingBottom: 20, width: "100%", height: "100%" }}
                  > */}
                  <InputContainer>
                    <SubInputContainer>
                      <LabelText>NAME</LabelText>
                      <Input
                        placeholder="John Doe"
                        onChangeText={handleChange("name")}
                        onBlur={handleBlur("name")}
                        value={values.name}
                      />
                      {touched.name && errors.name && (
                        <ErrorText>{errors.name}</ErrorText>
                      )}
                    </SubInputContainer>
                    <SubInputContainer>
                      <LabelText>EMAIL</LabelText>
                      <Input
                        placeholder="email@example.com"
                        onChangeText={handleChange("email")}
                        onBlur={handleBlur("email")}
                        value={values.email}
                        keyboardType="email-address"
                      />
                      {touched.email && errors.email && (
                        <ErrorText>{errors.email}</ErrorText>
                      )}
                    </SubInputContainer>
                    <SubInputContainer>
                      <LabelText>PASSWORD</LabelText>
                      <PasswordInputContainer>
                        <Input1
                          placeholder="*  *  *  *  *  *  *  *  *"
                          secureTextEntry={!showPassword}
                          onChangeText={handleChange("password")}
                          onBlur={handleBlur("password")}
                          value={values.password}
                        />
                        <Pressable onPress={togglePasswordVisibility}>
                          <Ionicon
                            name={
                              showPassword ? "eye-outline" : "eye-off-outline"
                            }
                            size={24}
                            color="gray"
                          />
                        </Pressable>
                      </PasswordInputContainer>
                      {touched.password && errors.password && (
                        <ErrorText>{errors.password}</ErrorText>
                      )}
                    </SubInputContainer>
                    <SubInputContainer>
                      <LabelText>RE-TYPE PASSWORD</LabelText>
                      <PasswordInputContainer>
                        <Input1
                          placeholder="*  *  *  *  *  *  *  *  *"
                          secureTextEntry={!showRePassword}
                          onChangeText={handleChange("confirmPassword")}
                          onBlur={handleBlur("confirmPassword")}
                          value={values.confirmPassword}
                        />
                        <Pressable onPress={togglePasswordVisibility2}>
                          <Ionicon
                            name={
                              showRePassword ? "eye-outline" : "eye-off-outline"
                            }
                            size={24}
                            color="gray"
                          />
                        </Pressable>
                      </PasswordInputContainer>
                      {touched.confirmPassword && errors.confirmPassword && (
                        <ErrorText>{errors.confirmPassword}</ErrorText>
                      )}
                    </SubInputContainer>
                  </InputContainer>
                  <PressableButtonNext onPress={handleSubmit}>
                    <PressableButtonNextText>SIGN UP</PressableButtonNextText>
                  </PressableButtonNext>
                  {/* </View> */}
                </ButtonContainer>
              )}
            </Formik>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default SignUpScreen;
