import React, { useState } from "react";
import {
  Container,
  DetailsContainer,
  EditText,
  HeaderContainer,
  HeaderSubContainer1,
  ImageConatiner,
  InfoContainer,
  InfoSubText,
  InfoText,
  LogoContainer,
  ProfileContainer,
  ProfileSubtitle,
  ProfileTitle,
  ProfilTitleContainer,
  SubDetailsContainer,
  Title,
} from "./style";
import { BackPressableButton2 } from "@/components/common/Buttons/Button";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Image, Pressable } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "@/types";

type PersonalInfoScreenNavigationProp = StackNavigationProp<RootStackParamList>;

export const PersonalInfoScreen = () => {
  const navigation = useNavigation<PersonalInfoScreenNavigationProp>();
  const [userData, setUserData] = useState<{
    name?: string;
    bio?: string;
    profilePic?: string;
    email?: string;
    phone?: string;
  } | null>(null);

  async function getData() {
    try {
      const token = await AsyncStorage.getItem("token");
      if (token !== null) {
        console.log(token);
        axios
          .post("http://192.168.1.170:4000/userdata", { token: token })
          .then((res) => {
            console.log(res.data);
            if (res.data && res.data.data) {
              setUserData(res.data.data);
              console.log("Image URI:", userData?.profilePic);
            }
          })
          .catch((err) => console.log("Error fetching data: ", err));
      }
    } catch (e) {
      console.log("Error retrieving data" + e);
    }
  }
  useFocusEffect(
    useCallback(() => {
      getData();
    }, [])
  );

  return (
    <Container>
      <HeaderContainer>
        <HeaderSubContainer1>
          <BackPressableButton2 onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back-outline" size={28} color="#181C2E" />
          </BackPressableButton2>
          <Title>Personal Info</Title>
        </HeaderSubContainer1>
        <Pressable onPress={() => navigation.navigate("EditProfileScreen")}>
          <EditText>EDIT</EditText>
        </Pressable>
      </HeaderContainer>
      <ProfileContainer>
        <ImageConatiner>
          {userData?.profilePic ? (
            <Image
              source={{ uri: userData.profilePic }}
              style={{
                width: 100,
                height: 100,
                borderRadius: 50,
              }}
            />
          ) : (
            <Ionicons name="person-outline" size={64} color="#ffffff" />
          )}
        </ImageConatiner>
        <ProfilTitleContainer>
          <ProfileTitle>{userData?.name ?? "Name not available"}</ProfileTitle>
          <ProfileSubtitle>
            {userData?.bio ?? "I love fast food"}
          </ProfileSubtitle>
        </ProfilTitleContainer>
      </ProfileContainer>
      <DetailsContainer>
        <SubDetailsContainer>
          <LogoContainer>
            <Ionicons
              name="person-outline"
              color="#FB6F3D"
              size={24}
            ></Ionicons>
          </LogoContainer>
          <InfoContainer>
            <InfoText>FULL NAME</InfoText>
            <InfoSubText>{userData?.name ?? "Name not available"}</InfoSubText>
          </InfoContainer>
        </SubDetailsContainer>
        <SubDetailsContainer>
          <LogoContainer>
            <Ionicons name="mail-outline" color="#413DFB" size={24}></Ionicons>
          </LogoContainer>
          <InfoContainer>
            <InfoText>EMAIL</InfoText>
            <InfoSubText>
              {userData?.email ?? "Email not available"}
            </InfoSubText>
          </InfoContainer>
        </SubDetailsContainer>
        <SubDetailsContainer>
          <LogoContainer>
            <Ionicons name="call-outline" color="#369BFF" size={24}></Ionicons>
          </LogoContainer>
          <InfoContainer>
            <InfoText>PHONE NUMBER</InfoText>
            <InfoSubText>{userData?.phone ?? "000-000-0000"}</InfoSubText>
          </InfoContainer>
        </SubDetailsContainer>
      </DetailsContainer>
    </Container>
  );
};
