import { Image } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const ImageStyle = styled(Image)`
  width: 100%;
  height: 100%;
  resize-mode: stretch;
`;
