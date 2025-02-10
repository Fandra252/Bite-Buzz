import { BORDER_RADIOUS, COLOR, FONT_SIZE, FONT_WEIGHT } from "@/theme";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${COLOR.BACKGROUND_PRIMARY};
  padding: 20px;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const ImageConatiner = styled.View`
  width: 400px;
  height: 350px;
  border-radius: ${BORDER_RADIOUS.XXXL90};
`;

export const BottomContainer = styled.View`
  width: 323px;
  justify-content: center;
  align-items: center;
`;

export const TitleText = styled.Text`
  font-size: ${FONT_SIZE.XXL};
  color: ${COLOR.TEXT_PRIMARY};
  line-height: 24px;
  font-weight: ${FONT_WEIGHT.regular};
  text-align: center;
  margin-top: 30px;
  font-family: "Sen-Regular";
`;

export const LogoContainer = styled.View`
  width: 36px;
  height: 36px;
  background-color: ${COLOR.LOCATION_LOGO}; 
  border-radius: ${BORDER_RADIOUS.Round};
  justify-content: center;
  align-items: center;
  margin-left: 20px;
`;
