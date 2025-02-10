import styled from "styled-components/native";
import { BORDER_RADIOUS, COLOR } from "@/theme";

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
  padding-top: 30px;
`;

export const BackPressableButtonContainer = styled.View`
  width: 100%;
  height: 45px;
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
  height: 579px;
  gap: 40px;
  background-color: ${COLOR.BACKGROUND_PRIMARY};
  border-top-left-radius: ${BORDER_RADIOUS.M_M};
  border-top-right-radius: ${BORDER_RADIOUS.M_M};
  align-items: center;
  padding-bottom: 20px;
`;

export const InputContainer = styled.View`
  width: 327px;
  align-items: center;
  margin-top: 20px;
`;

export const SubInputContainer = styled.View`
  width: 100%;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
`;
