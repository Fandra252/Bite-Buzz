import {
  Text,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import * as ImagePicker from "expo-image-picker";
import axios from "axios";
import {
  Container,
  EditButton,
  HeaderContainer,
  HeaderSubContainer1,
  ImageContainer,
  InnerImageContainer,
  InputContainer,
  Label,
  PressableButton,
  SubInputContainer,
  TextInput,
  Title,
} from "./style";
import { BackPressableButton2 } from "@/components/common/Buttons/Button";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { Input } from "@/components/common/Inputs/Inputs";
import { PressableButtonNextText } from "@/components/common/Texts/Text";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "@/types";
import { EditProfileScreenValidationSchema } from "@/validations/formValidation";

type EditProfileScreenNavigationProp = StackNavigationProp<RootStackParamList>;

export const EditProfileScreen = () => {
  const navigation = useNavigation<EditProfileScreenNavigationProp>();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [initialValues, setInitialValues] = useState({
    name: "",
    email: "",
    phone: "",
    bio: "",
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = await AsyncStorage.getItem("token");
        if (!token) {
          alert("No token found. Please log in.");
          return;
        }
        axios
          .post("http://192.168.1.170:4000/userdata", { token: token })
          .then((res) => {
            if (res.data && res.data.data) {
              const userData = res.data.data;
              setInitialValues({
                name: userData.name || "",
                email: userData.email || "",
                phone: userData.phone || "",
                bio: userData.bio || "",
              });
              if (userData.profilePic) {
                setSelectedImage(userData.profilePic);
              }
            }
          })
          .catch((err) => console.log("Error fetching data: ", err));
      } catch (error) {
        console.error("Failed to fetch user data:", error);
        alert("Error fetching user details.");
      }
    };

    fetchUserData();
  }, []);

  const handleSubmitForm = async (values: any) => {
    try {
      const token = await AsyncStorage.getItem("token");
      if (!token) {
        alert("Authentication token is missing.");
        return;
      }

      const formData = new FormData();
      if (selectedImage) {
        formData.append("image", {
          uri: selectedImage,
          type: "image/jpeg",
          name: "photo.jpg",
        } as any);
      }
      formData.append("email", values.email);
      formData.append("name", values.name);
      formData.append("phone", values.phone);
      formData.append("bio", values.bio);

      try {
        await axios.put("http://192.168.1.170:4000/user", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        });
        Alert.alert("Success", "User details and image updated successfully");
        navigation.goBack();
      } catch (error) {
        console.error(error);
        Alert.alert("Error", "Failed to update user details or upload image");
      }
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "Failed to update user details.");
    }
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        overScrollMode="never"
        showsVerticalScrollIndicator={false}
      >
        <Container>
          <HeaderContainer>
            <HeaderSubContainer1>
              <BackPressableButton2 onPress={() => navigation.goBack()}>
                <Ionicons
                  name="chevron-back-outline"
                  size={28}
                  color="#181C2E"
                />
              </BackPressableButton2>
              <Title>Edit Profile</Title>
            </HeaderSubContainer1>
          </HeaderContainer>
          <ImageContainer>
            <InnerImageContainer>
              <EditButton onPress={pickImage}>
                <Ionicons name="camera-outline" size={24} color="white" />
              </EditButton>
              {selectedImage && (
                <Image
                  source={{ uri: selectedImage }}
                  style={{
                    width: "100%",
                    height: "100%",
                    resizeMode: "cover",
                    borderRadius: 100,
                  }}
                />
              )}
            </InnerImageContainer>
          </ImageContainer>

          <Formik
            initialValues={initialValues}
            enableReinitialize
            validationSchema={EditProfileScreenValidationSchema}
            onSubmit={handleSubmitForm}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
            }) => (
              <InputContainer>
                <SubInputContainer>
                  <Label>FULL NAME</Label>
                  <Input
                    placeholder="Enter your name"
                    onChangeText={handleChange("name")}
                    onBlur={handleBlur("name")}
                    value={values.name}
                  />
                  {touched.name && errors.name && (
                    <Text style={{ color: "red" }}>{errors.name}</Text>
                  )}
                </SubInputContainer>

                <SubInputContainer>
                  <Label>EMAIL</Label>
                  <Input
                    placeholder="Enter your email"
                    keyboardType="email-address"
                    onChangeText={handleChange("email")}
                    onBlur={handleBlur("email")}
                    value={values.email}
                  />
                  {touched.email && errors.email && (
                    <Text style={{ color: "red" }}>{errors.email}</Text>
                  )}
                </SubInputContainer>

                <SubInputContainer>
                  <Label>PHONE NUMBER</Label>
                  <Input
                    placeholder="Enter your phone number"
                    keyboardType="numeric"
                    onChangeText={handleChange("phone")}
                    onBlur={handleBlur("phone")}
                    value={values.phone}
                  />
                  {touched.phone && errors.phone && (
                    <Text style={{ color: "red" }}>{errors.phone}</Text>
                  )}
                </SubInputContainer>

                <SubInputContainer>
                  <Label>BIO</Label>
                  <TextInput
                    placeholder="Enter your bio"
                    multiline
                    numberOfLines={4}
                    onChangeText={handleChange("bio")}
                    onBlur={handleBlur("bio")}
                    value={values.bio}
                  />
                  {touched.bio && errors.bio && (
                    <Text style={{ color: "red" }}>{errors.bio}</Text>
                  )}
                </SubInputContainer>

                <PressableButton onPress={handleSubmit}>
                  <PressableButtonNextText>SAVE</PressableButtonNextText>
                </PressableButton>
              </InputContainer>
            )}
          </Formik>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
