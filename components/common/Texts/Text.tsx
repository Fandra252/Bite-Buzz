import { COLOR, FONT_SIZE, FONT_WEIGHT } from "@/theme";
import { Text } from "react-native";
import styled from "styled-components/native";

export const PressableButtonNextText = styled(Text)`
  font-size: ${FONT_SIZE.XXXL};
  color: ${COLOR.WHITE};
  font-family: "Sen-Regular";
`;

export const PressableButtonSkipText = styled(Text)`
  font-size: ${FONT_SIZE.XXXL};
  color: ${COLOR.BLACK};
  font-family: "Sen-Regular";
`;

export const LabelText = styled.Text`
  width: 100%;
  color: ${COLOR.PRIMARY};
  font-size: ${FONT_SIZE.h6};
  font-weight: ${FONT_WEIGHT.regular};
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: left;
  font-family: "Sen-Regular";
`;

export const Title = styled.Text`
  color: ${COLOR.WHITE};
  font-size: ${FONT_SIZE.XXXL_30};
  font-weight: ${FONT_WEIGHT.bold};
  line-height: 36px;
  margin-top: 30px;
  font-family: "Sen-Regular";
`;

export const Subtitle = styled.Text`
  color: ${COLOR.WHITE};
  font-size: ${FONT_SIZE.XXL};
  font-weight: ${FONT_WEIGHT.regular};
  line-height: 26px;
  margin-top: 10px;
  font-family: "Sen-Regular";
`;