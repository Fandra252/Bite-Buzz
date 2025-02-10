import { BORDER_RADIOUS, COLOR, FONT_SIZE, FONT_WEIGHT } from "@/theme";
import { Pressable, Text, TextInput } from "react-native";
import styled from "styled-components/native";
import LottieView from "lottie-react-native";

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  background-color: ${COLOR.SECONDARY};
  position: relative;
`;

export const TextContainer = styled.View`
  width: 100%;
  height: 286px;
  background-color: ${COLOR.SECONDARY};
  justify-content: center;
  align-items: center;
`;

export const ButtonContainer = styled.View`
  flex: 1;
  width: 100%;
  height: 579px;
  justify-content: space-evenly;
  background-color: ${COLOR.WHITE};
  border-top-left-radius: ${BORDER_RADIOUS.MD};
  border-top-right-radius: ${BORDER_RADIOUS.MD};
  align-items: center;
`;

export const InputContainer = styled.View`
  width: 327px;
  align-items: center;
`;

export const SubInputContainer = styled.View`
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
`;

export const PasswordInputContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  background-color: ${COLOR.BACKGROUND_SECONDARY};
  justify-content: space-between;
  padding-right: 10px;
  border-radius: ${BORDER_RADIOUS.SM};
  overflow: hidden;
`;

export const ForgotPasswordContainer = styled.View`
  width: 327px;
  margin-top: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
`;

export const ForgotPasswordText = styled.Text`
  color: ${COLOR.PRIMARY};
  font-size: ${FONT_SIZE.h6};
  font-weight: ${FONT_WEIGHT.regular};
  font-family: "Sen-Regular";
`;

export const RememberMeContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const SignupText = styled.Text`
  color: ${COLOR.BLACK};
  font-size: ${FONT_SIZE.XXL};
  font-weight: ${FONT_WEIGHT.regular};
  justify-content: center;
  align-items: center;
  font-family: "Sen-Regular";
`;
export const SignupInnerText = styled.Text`
  color: ${COLOR.PRIMARY};
  font-size: ${FONT_SIZE.XXL};
  font-weight: ${FONT_WEIGHT.bold};
  padding-left: 15px;
  font-family: "Sen-Regular";
`;

export const OrText = styled.Text`
  color: ${COLOR.SECONDARY};
  font-size: ${FONT_SIZE.h6};
  font-weight: ${FONT_WEIGHT.regular};
  font-family: "Sen-Regular";
`;

export const SocialIconContainer = styled.View`
  width: 100%;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  gap: 30px;
  padding-bottom: 20px;
`;

export const FacebookContainer = styled(Pressable)`
  width: 62px;
  height: 62px;
  justify-content: center;
  align-items: center;
  background-color: ${COLOR.FACEBOOK};
  border-radius: ${BORDER_RADIOUS.Round};
  overflow: hidden;
`;

export const TwitterContainer = styled(FacebookContainer)`
  background-color: ${COLOR.TWITTER};
`;

export const AppletContainer = styled(FacebookContainer)`
  background-color: ${COLOR.APPLE_LOGO};
`;
