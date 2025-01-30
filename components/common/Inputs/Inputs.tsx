import { BORDER_RADIOUS, COLOR, FONT_SIZE } from "@/theme";
import { TextInput } from "react-native";
import styled from "styled-components/native";

export const Input = styled(TextInput)`
  width: 100%;
  height: 62px;
  font-size: ${FONT_SIZE.h6};
  line-height: 17px;
  background-color: ${COLOR.BACKGROUND_SECONDARY};
  border-radius: ${BORDER_RADIOUS.S};
  padding: 20px;
  font-family: "Sen-Regular";
`;
export const Input1 = styled(TextInput)`
  width: 90%;
  height: 62px;
  font-size: ${FONT_SIZE.h6};
  line-height: 17px;
  background-color: ${COLOR.BACKGROUND_SECONDARY};
  padding: 20px;
  font-family: "Sen-Regular";
`;
export const Input3 = styled(TextInput)`
  width: 20%;
  height: 62px;
  font-size: ${FONT_SIZE.XXXL};
  background-color: ${COLOR.BACKGROUND_SECONDARY};
  border-radius: ${BORDER_RADIOUS.S};
  text-align: center;
  font-family: "Sen-Regular";
`;
