import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const TopContainer = styled.View`
  width: 100%;
  height: 286px;
  background-color: #${({ theme }) => theme.colors.secondary};
  flex-direction: column;
  justify-content: space-between;
`;

export const BackPressableButtonContainer = styled.View`
  width: 100%;
  height: 20%;
  justify-content: flex-start;
  padding-left: 10px;
  padding-top: 20px;
`;

export const TextContainer = styled.View`
  width: 100%;
  height: 80%;
  justify-content: center;
  align-items: center;
  padding-bottom: 30px;
`;

export const ButtonContainer = styled.View`
  width: 100%;
  justify-content: space-around;
  background-color: ${({ theme }) => theme.colors.backgroundPrimary};
  border-top-left-radius: ${({ theme }) => theme.borderRadius.extraLarge};
  border-top-right-radius: ${({ theme }) => theme.borderRadius.extraLarge};
  align-items: center;
  padding-bottom: 30px;
  padding-top: 25px;
`;

export const InputContainer = styled.View`
  width: 327px;
  align-items: center;
  margin-bottom: 20px;
`;

export const SubInputContainer = styled.View`
  width: 100%;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
`;

export const PasswordInputContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  justify-content: space-between;
  padding-right: 10px;
  border-radius: ${({ theme }) => theme.borderRadius.mediumMidLarge};
  overflow: hidden;
`;
