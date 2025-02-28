import React, { useState } from "react";
import {
  Container,
  DetailsTitle,
  DetailsTitlesContainer,
  DetailsContainer,
  HeaderContainer,
  ImageConatiner,
  LogoContainer,
  ProfileContainer,
  ProfileSubtitle,
  ProfileTitle,
  ProfilTitleContainer,
  SubDetailsContainer,
  ArrowContainer,
  HeaderSubContainer1,
  Title,
  HeaderSubContainer2,
} from "./style";
import Ionicons from "@expo/vector-icons/Ionicons";
import { COLOR } from "@/theme";
import { BackPressableButton2 } from "@/components/common/Buttons/Button";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "@/types";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";
import { Image } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList>;
export const ProfileScreen = () => {
  const navigation = useNavigation<ProfileScreenNavigationProp>();
  const [userData, setUserData] = useState<{
    name?: string;
    bio?: string;
    image?: string;
    profilePic?: string;
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

  async function signOut() {
    try {
      await AsyncStorage.removeItem("token");
      await AsyncStorage.removeItem("isLoggedIn");
      await AsyncStorage.removeItem("savedEmail");
      await AsyncStorage.removeItem("savedPassword");
      navigation.replace("Login");
    } catch (error) {
      console.error("Error during sign out", error);
    }
  }

  return (
    <Container>
      <HeaderContainer>
        <HeaderSubContainer1>
          <BackPressableButton2 onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back-outline" size={28} color="#181C2E" />
          </BackPressableButton2>
          <Title>Profile</Title>
        </HeaderSubContainer1>
        <HeaderSubContainer2>
          <BackPressableButton2>
            <Ionicons name="ellipsis-horizontal" size={28} color="#181C2E" />
          </BackPressableButton2>
        </HeaderSubContainer2>
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
        <SubDetailsContainer
          onPress={() => navigation.navigate("PersonalInfoScreen")}
        >
          <DetailsTitlesContainer>
            <LogoContainer>
              <Ionicons
                name="person-outline"
                color="#FB6F3D"
                size={24}
              ></Ionicons>
            </LogoContainer>
            <DetailsTitle>Personal Info</DetailsTitle>
          </DetailsTitlesContainer>
          <ArrowContainer>
            <Ionicons
              name="chevron-forward-outline"
              color={`${COLOR.ARROW_LOGO}`}
              size={24}
            ></Ionicons>
          </ArrowContainer>
        </SubDetailsContainer>
        <SubDetailsContainer>
          <DetailsTitlesContainer>
            <LogoContainer>
              <Ionicons name="map-outline" color="#413DFB" size={24}></Ionicons>
            </LogoContainer>
            <DetailsTitle>Addresses</DetailsTitle>
          </DetailsTitlesContainer>
          <ArrowContainer>
            <Ionicons
              name="chevron-forward-outline"
              color={`${COLOR.ARROW_LOGO}`}
              size={24}
            ></Ionicons>
          </ArrowContainer>
        </SubDetailsContainer>
      </DetailsContainer>
      <DetailsContainer>
        <SubDetailsContainer>
          <DetailsTitlesContainer>
            <LogoContainer>
              <Ionicons
                name="bag-handle-outline"
                color="#369BFF"
                size={24}
              ></Ionicons>
            </LogoContainer>
            <DetailsTitle>Cart</DetailsTitle>
          </DetailsTitlesContainer>
          <ArrowContainer>
            <Ionicons
              name="chevron-forward-outline"
              color={`${COLOR.ARROW_LOGO}`}
              size={24}
            ></Ionicons>
          </ArrowContainer>
        </SubDetailsContainer>
        <SubDetailsContainer>
          <DetailsTitlesContainer>
            <LogoContainer>
              <Ionicons
                name="help-circle-outline"
                color="#FB6D3A"
                size={24}
              ></Ionicons>
            </LogoContainer>
            <DetailsTitle>FAQs</DetailsTitle>
          </DetailsTitlesContainer>
          <ArrowContainer>
            <Ionicons
              name="chevron-forward-outline"
              color={`${COLOR.ARROW_LOGO}`}
              size={24}
            ></Ionicons>
          </ArrowContainer>
        </SubDetailsContainer>
        <SubDetailsContainer>
          <DetailsTitlesContainer>
            <LogoContainer>
              <Ionicons
                name="settings-outline"
                color="#413DFB"
                size={24}
              ></Ionicons>
            </LogoContainer>
            <DetailsTitle>Settings</DetailsTitle>
          </DetailsTitlesContainer>
          <ArrowContainer>
            <Ionicons
              name="chevron-forward-outline"
              color={`${COLOR.ARROW_LOGO}`}
              size={24}
            ></Ionicons>
          </ArrowContainer>
        </SubDetailsContainer>
      </DetailsContainer>
      <DetailsContainer>
        <SubDetailsContainer onPress={() => signOut()}>
          <DetailsTitlesContainer>
            <LogoContainer>
              <Ionicons
                name="exit-outline"
                color="#FB4A59"
                size={24}
              ></Ionicons>
            </LogoContainer>
            <DetailsTitle>Log out</DetailsTitle>
          </DetailsTitlesContainer>
          <ArrowContainer>
            <Ionicons
              name="chevron-forward-outline"
              color={`${COLOR.ARROW_LOGO}`}
              size={24}
            ></Ionicons>
          </ArrowContainer>
        </SubDetailsContainer>
      </DetailsContainer>
    </Container>
  );
};
