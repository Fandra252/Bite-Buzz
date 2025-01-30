import { BORDER_RADIOUS, COLOR } from "@/theme";
import { Pressable } from "react-native";
import styled from "styled-components/native";

export const PressableButtonNext = styled(Pressable)`
  width: 327px;
  height: 62px;
  background-color: ${COLOR.PRIMARY};
  padding: 10px;
  border-radius: ${BORDER_RADIOUS.SM};
  align-items: center;
  justify-content: center;
  flex-direction: row;
 
`;

export const PressableButtonSkip = styled(Pressable)`
  width: 327px;
  height: 62px;
  background-color: ${COLOR.WHITE};
  padding: 10px;
  border-radius: ${BORDER_RADIOUS.SM};
  justify-content: center;
  align-items: center;
`;

export const BackPressableButton = styled(Pressable)`
  width: 45px;
  height: 45px;
  justify-content: center;
  align-items: center;
  background-color: ${COLOR.WHITE};
  border-radius: ${BORDER_RADIOUS.Round};
`;

export const BackPressableButton2 = styled(Pressable)`
  width: 45px;
  height: 45px;
  justify-content: center;
  align-items: center;
  background-color: ${COLOR.BACKGROUND_ACCENT};
  border-radius: ${BORDER_RADIOUS.Round};
`;
