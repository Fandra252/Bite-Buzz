import React, { useState } from "react";
import {
  View,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  Alert,
  Pressable,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import Ionicon from "@expo/vector-icons/Ionicons";
import axios from "axios";
import { Formik } from "formik";
import * as Yup from "yup";
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
  Subtitle2,
  TextContainer,
  TopContainer,
} from "./style";
import {
  LabelText,
  PressableButtonNextText,
  Subtitle,
  Title,
} from "@/components/common/Texts/Text";
import { Input1 } from "@/components/common/Inputs/Inputs";
import { ErrorText } from "@/components/common/ErrorMessagetext/ErrorMessageText";

const ResetPasswordScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { email } = route.params;

  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const togglePasswordVisibility2 = () => setShowRePassword(!showRePassword);

  const validationSchema = Yup.object().shape({
    password: Yup.string()
      .min(8, "Password must be at least 8 characters long")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const updatePassword = async (values: any) => {
    try {
      await axios.post("http://192.168.1.170:4000/reset-password", {
        email,
        newPassword: values.password,
      });
      Alert.alert("Success", "Password updated successfully!");
      navigation.replace("Login");
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
              <BackPressableButton onPress={() => navigation.goBack()}>
                <Ionicon name="chevron-back-outline" size={24} color="black" />
              </BackPressableButton>
            </BackPressableButtonContainer>
            <TextContainer>
              <Title>Reset Password</Title>
              <Subtitle>
                Securely update your password and regain access.
              </Subtitle>
              <Subtitle2>{email}</Subtitle2>
            </TextContainer>
          </TopContainer>

          <Formik
            initialValues={{ password: "", confirmPassword: "" }}
            validationSchema={validationSchema}
            onSubmit={updatePassword}
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
                          name={
                            showPassword ? "eye-outline" : "eye-off-outline"
                          }
                          size={24}
                          color="gray"
                        />
                      </Pressable>
                    </PasswordInputContainer>
                    {errors.password && touched.password && (
                      <ErrorText>{errors.password}</ErrorText>
                    )}

                    <View style={{ alignSelf: "flex-start" }}>
                      <LabelText>RE-TYPE PASSWORD</LabelText>
                    </View>
                    <PasswordInputContainer>
                      <Input1
                        placeholder="*  *  *  *  *  *  *  *  *"
                        value={values.confirmPassword}
                        onChangeText={handleChange("confirmPassword")}
                        onBlur={handleBlur("confirmPassword")}
                        secureTextEntry={!showRePassword}
                      />
                      <Pressable
                        onPress={togglePasswordVisibility2}
                        accessibilityLabel="Toggle password visibility"
                        accessible={true}
                      >
                        <Ionicon
                          name={
                            showRePassword ? "eye-outline" : "eye-off-outline"
                          }
                          size={24}
                          color="gray"
                        />
                      </Pressable>
                    </PasswordInputContainer>
                    {errors.confirmPassword && touched.confirmPassword && (
                      <ErrorText>{errors.confirmPassword}</ErrorText>
                    )}
                  </SubInputContainer>
                </InputContainer>
                <PressableButtonNext onPress={handleSubmit}>
                  <PressableButtonNextText>
                    RESET PASSWORD
                  </PressableButtonNextText>
                </PressableButtonNext>
              </ButtonContainer>
            )}
          </Formik>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default ResetPasswordScreen;
