import {
  View,
  Pressable,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";
import React, { useState } from "react";
import {
  BackPressableButton,
  PressableButtonNext,
} from "@/components/common/Buttons/Button";
import Ionicon from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import { ValidationSchema } from "@/validations/formValidation";
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

const SignUpScreen = () => {
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const togglePasswordVisibility2 = () => setShowRePassword(!showRePassword);

  const handleSignUp = (values: any) => {
    console.log("Form Submitted:", values);
  };

  return (
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 0}
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
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
                  <InputContainer>
                    <SubInputContainer>
                      <View style={{ alignSelf: "flex-start" }}>
                        <LabelText>NAME</LabelText>
                      </View>
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
                      <View style={{ alignSelf: "flex-start" }}>
                        <LabelText>EMAIL</LabelText>
                      </View>
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
                      <View style={{ alignSelf: "flex-start" }}>
                        <LabelText>PASSWORD</LabelText>
                      </View>
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
                      <View style={{ alignSelf: "flex-start" }}>
                        <LabelText>RE-TYPE PASSWORD</LabelText>
                      </View>
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
                </ButtonContainer>
              )}
            </Formik>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
  );
};

export default SignUpScreen;
