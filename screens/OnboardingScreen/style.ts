import { BORDER_RADIOUS, COLOR, FONT_SIZE, FONT_WEIGHT } from "@/theme";
import { Image, Text } from "react-native";
import styled from "styled-components/native";

export const ViewContainer = styled.View`
  flex: 1;
  background-color: ${COLOR.WHITE};
  flex-direction: column;
`;
export const SlideContainerImage = styled(Image)`
  width: 350px;
  height: 350px;
  margin-bottom: 20px;
  resize-mode: contain;
`;

export const SlideTitleText = styled(Text)`
  font-size: ${FONT_SIZE.XXXL_24};
  font-weight: ${FONT_WEIGHT.heavy};
  color: ${COLOR.TEXT_PRIMARY};
  flex-direction: column;
  text-align: center;
  margin-bottom: 10px;
  font-family: "Sen-Regular";
`;

export const SlideDescriptionText = styled(Text)`
  font-size: ${FONT_SIZE.XXL};
  color: ${COLOR.TEXT_SECONDARY};
  text-align: center;
  padding: 0 20px;
  font-family: "Sen-Regular";
`;
export const SlideView = styled.View`
  height: 10px;
  width: 10px;
  margin-top: 0;
  background-color: ${COLOR.TERTIARY};
  margin: 0 8px;
  border-radius: ${BORDER_RADIOUS.M};
`;

export const ButtonViewContainer = styled.View`
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const GetStartedViewContainer = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${COLOR.WHITE};
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
