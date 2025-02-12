import styled from "styled-components/native";
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
import { Pressable, Text } from "react-native";

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
export const Title = styled(Text)`
  font-size: 20px;
  color: ${COLOR.TEXT_TERTIARY};
  margin-left: 20px;
`;
export const EditText = styled.Text`
  font-size: ${FONT_SIZE.h6};
  font-weight: ${FONT_WEIGHT.regular};
  line-height: ${LINE_HEIGHT.normal};
  text-decoration: underline;
  color: ${COLOR.PRIMARY};
`;
export const ProfileContainer = styled.View`
  width: ${SIZE_PERCENT.P85};
  height: ${SIZE_PX.PX_100};
  flex-direction: row;
`;
export const ImageConatiner = styled.View`
  width: ${SIZE_PX.PX_100};
  height: ${SIZE_PX.PX_100};
  justify-content: center;
  align-items: center;
  border-radius: ${BORDER_RADIOUS.Round};
  background-color: ${COLOR.CIRCLE_BACKGROUND};
`;
export const ProfilTitleContainer = styled.View`
  width: ${SIZE_PERCENT.P73};
  height: ${SIZE_PERCENT.P100};
  margin-left: ${SPACING.XXXL};
  flex-direction: column;
  gap: ${SPACING.M};
  justify-content: center;
`;

export const ProfileTitle = styled.Text`
  font-size: ${FONT_SIZE.XXXL_20};
  font-weight: ${FONT_WEIGHT.bold};
  line-height: ${LINE_HEIGHT.normal};
  color: ${COLOR.TEXT_PRIMARY};
  font-family: "Sen-Regular";
`;
export const ProfileSubtitle = styled(Text)`
  font-size: ${FONT_SIZE.h6};
  font-weight: ${FONT_WEIGHT.regular};
  line-height: ${LINE_HEIGHT.normal};
  color: ${COLOR.TEXT_QUATERNARY};
  font-family: "Sen-Regular";
`;
export const DetailsContainer = styled.View`
  width: ${SIZE_PERCENT.P85};
  border-radius: ${BORDER_RADIOUS.XMD};
  background-color: ${COLOR.BACKGROUND_TERTIARY};
  flex-direction: column;
  overflow: hidden;
`;
export const SubDetailsContainer = styled.View`
  width: ${SIZE_PERCENT.P100};
  height: ${SIZE_PX.PX_64};
  flex-direction: row;
  align-items: center;
  padding: 0px ${SPACING.XXXL};
  gap: ${SPACING.XXXL};
`;
export const LogoContainer = styled.View`
  width: ${SIZE_PX.PX_40};
  height: ${SIZE_PX.PX_40};
  justify-content: center;
  align-items: center;
  background-color: ${COLOR.BACKGROUND_PRIMARY};
  border-radius: ${BORDER_RADIOUS.Round};
`;
export const InfoContainer = styled.View`
  width: fit-content;
  flex-direction: column;
  justify-content: center;
`;
export const InfoText = styled.Text`
  font-size: ${FONT_SIZE.h6};
  font-weight: ${FONT_WEIGHT.regular};
  line-height: ${LINE_HEIGHT.extraTight};
  color: ${COLOR.TEXT_PRIMARY};
  font-family: "Sen-Regular";
`;
export const InfoSubText = styled.Text`
  font-size: ${FONT_SIZE.h6};
  font-weight: ${FONT_WEIGHT.regular};
  line-height: ${LINE_HEIGHT.extraTight};
  color: ${COLOR.TEXT_INFO};
  font-family: "Sen-Regular";
`;
