import { BORDER_RADIOUS, COLOR } from "@/theme";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  background-color: ${COLOR.SECONDARY};
`;

export const TopContainer = styled.View`
  width: 100%;
  height: 286px;
  background-color: ${COLOR.SECONDARY};
  flex-direction: column;
  justify-content: space-between;
`;

export const BackPressableButtonContainer = styled.View`
  width: 100%;
  height: 20%;
  justify-content: flex-start;
  padding-left: 10px;
  padding-top: 20px;
`;

export const TextContainer = styled.View`
  width: 100%;
  height: 80%;
  justify-content: center;
  align-items: center;
  padding-bottom: 30px;
`;

export const ButtonContainer = styled.View`
  width: 100%;
  justify-content: space-around;
  background-color: ${COLOR.BACKGROUND_PRIMARY};
  border-top-left-radius: ${BORDER_RADIOUS.M_M};
  border-top-right-radius: ${BORDER_RADIOUS.M_M};
  align-items: center;
  padding-bottom: 30px;
  padding-top: 25px;
`;

export const InputContainer = styled.View`
  width: 327px;
  align-items: center;
  margin-bottom: 20px;
`;

export const SubInputContainer = styled.View`
  width: 100%;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
`;

export const PasswordInputContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  background-color: ${COLOR.BACKGROUND_SECONDARY};
  justify-content: space-between;
  padding-right: 10px;
  border-radius: ${BORDER_RADIOUS.S};
  overflow: hidden;
`;
