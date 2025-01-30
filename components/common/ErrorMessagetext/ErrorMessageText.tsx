import { COLOR, FONT_SIZE } from "@/theme";
import styled from "styled-components/native";

export const ErrorText = styled.Text`
  color: ${COLOR.ERROR};
  font-size: ${FONT_SIZE.M};
  align-self: flex-end;
  margin-top: 5px;
  font-family: "Sen-Regular";
`;
