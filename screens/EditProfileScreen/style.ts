import {
  PressableButtonNext,
  PressableButtonSkip,
} from "@/components/common/Buttons/Button";
import { Input } from "@/components/common/Inputs/Inputs";
import {
  BORDER_RADIOUS,
  COLOR,
  FONT_SIZE,
  FONT_WEIGHT,
  LINE_HEIGHT,
  SIZE_PERCENT,
  SIZE_PX,
  SPACING,
} from "@/theme";
import { Image, Pressable } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  width: ${SIZE_PERCENT.P100};
  align-items: center;
  background-color: ${COLOR.BACKGROUND_PRIMARY};
  gap: ${SPACING.XXXL_30};
  padding-top: ${SPACING.XXXL_50};
`;
export const HeaderContainer = styled.View`
  width: ${SIZE_PERCENT.P85};
  height: ${SIZE_PX.PX_45};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const HeaderSubContainer1 = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const Title = styled.Text`
  font-size: 20px;
  color: ${COLOR.TEXT_TERTIARY};
  margin-left: 20px;
`;
export const ImageContainer = styled.View`
position: relative;
  width: ${SIZE_PX.PX_130};
  height: ${SIZE_PX.PX_130};
  border-radius: ${BORDER_RADIOUS.Round};
  background-color: ${COLOR.CIRCLE_BACKGROUND};
  /* overflow: hidden; */
`;
export const InnerImageContainer = styled.View`
 position: absolute;
  width: ${SIZE_PX.PX_130};
  height: ${SIZE_PX.PX_130};
  border-radius: ${BORDER_RADIOUS.Round};
`;
export const ProfileImage = styled(Image)`
  position: absolute;
  width: ${SIZE_PX.PX_130};
  height: ${SIZE_PX.PX_130};
  /* border-radius: ${BORDER_RADIOUS.Round}; */
`;
export const EditButton = styled(Pressable)`
  position: absolute;
  /* top: 10px; */
  bottom: 0px;
  right: 0px;
  width: ${SIZE_PX.PX_41};
  height: ${SIZE_PX.PX_41};
  border-radius: ${BORDER_RADIOUS.Round};
  justify-content: center;
  z-index: 2;
  align-items: center;
  background-color: ${COLOR.PRIMARY};
`;
export const InputContainer = styled.View`
  width: ${SIZE_PERCENT.P85};
  align-items: center;
  gap: ${SPACING.XXXL};
`;
export const SubInputContainer = styled.View`
  width: ${SIZE_PERCENT.P100};
  flex-direction: column;
  gap: ${SPACING.M};
`;
export const Label = styled.Text`
  font-size: ${FONT_SIZE.h6};
  font-weight: ${FONT_WEIGHT.regular};
  line-height: ${LINE_HEIGHT.extraTight};
  color: ${COLOR.TEXT_PRIMARY};
  font-family: "Sen-Regular";
`;
export const TextInput = styled(Input)`
  height: ${SIZE_PX.PX_100};
  text-align-vertical: top;
`;
export const PressableButton = styled(PressableButtonNext)`
  margin-top: ${SPACING.M};
`;
