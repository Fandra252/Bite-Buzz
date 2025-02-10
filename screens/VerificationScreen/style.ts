import { Subtitle } from "@/components/common/Texts/Text";
import { BORDER_RADIOUS, COLOR, FONT_SIZE, FONT_WEIGHT } from "@/theme";
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
  padding-top: 30px;
`;

export const BackPressableButtonContainer = styled.View`
  width: 100%;
  height: 20%;
  justify-content: center;
  padding-left: 10px;
  padding-top: 20px;
`;

export const TextContainer = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  padding-bottom: 30px;
`;

export const Subtitle2 = styled(Subtitle)`
  font-weight: ${FONT_WEIGHT.bold};
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
  margin-top: 40px;
`;

export const SubInputContainer = styled.View`
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

export const MultiInputContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const LabelTextContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
`;
export const LabelText = styled.Text`
  color: ${COLOR.TEXT_PRIMARY};
  font-size: ${FONT_SIZE.h6};
  font-weight: ${FONT_WEIGHT.regular};
`;

export const ResendCodeText = styled.Text`
  color: ${COLOR.TEXT_PRIMARY};
  font-size: ${FONT_SIZE.h6};
  text-decoration: underline;
`;
