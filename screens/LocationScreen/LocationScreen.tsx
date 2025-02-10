import React, { useState } from "react";
import { Text, View } from "react-native";
import { PressableButtonNext } from "@/components/common/Buttons/Button";
import Ionicon from "@expo/vector-icons/Ionicons";
import LottieView from "lottie-react-native";
import locationAnimation from "@/assets/animations/Animation - 1738589669639.json";
import loadingAnimation from "@/assets/animations/Loading.json";
import {
  BottomContainer,
  Container,
  ImageConatiner,
  LogoContainer,
  TitleText,
} from "./style";
import { useNavigation } from "@react-navigation/native";
import * as Location from "expo-location";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Define navigation prop types
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/types/navigation";

type LocationScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "LocationScreen"
>;

const LocationScreen: React.FC = () => {
  const navigation = useNavigation<LocationScreenNavigationProp>();
  const [location, setLocation] = useState<Location.LocationObject | null>(
    null
  );
  const [address, setAddress] =
    useState<Location.LocationGeocodedAddress | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleAccessLocation = async () => {
    setLoading(true);

    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied.");
        setLoading(false);
        return;
      }

      let location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.High,
      });

      setLocation(location);

      let addressData = await Location.reverseGeocodeAsync(location.coords);
      setAddress(addressData[0]);

      if (addressData[0]) {
        const formattedAddress = `${addressData[0].city}, ${addressData[0].region}, ${addressData[0].country}`;

        // Store location access in AsyncStorage
        await AsyncStorage.setItem("location", formattedAddress);

        navigation.replace("Home")
      }
    } catch (error: any) {
      setErrorMsg(`Error retrieving location: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <ImageConatiner>
        <LottieView
          source={locationAnimation}
          style={{ width: "100%", height: "100%" }}
          autoPlay
          loop
        />
      </ImageConatiner>
      <BottomContainer>
        {errorMsg ? (
          <Text>{errorMsg}</Text>
        ) : location ? (
          <View style={{ marginBottom: 20 }}>
            {address && (
              <Text>
                {address.city}, {address.region}, {address.country}
                {address.postalCode ? ` (${address.postalCode})` : ""}
              </Text>
            )}
          </View>
        ) : loading ? (
          <LottieView
            source={loadingAnimation}
            style={{ width: 200, height: 100 }}
            autoPlay
            loop
          />
        ) : (
          <Text style={{ paddingHorizontal: 20 }}>
            Press the button to access location
          </Text>
        )}

        <PressableButtonNext onPress={handleAccessLocation}>
          <Text
            style={{
              fontSize: 18,
              color: "#FFFFFF",
              textAlign: "center",
            }}
          >
            ACCESS LOCATION
          </Text>
          <LogoContainer>
            <Ionicon name="location-outline" size={24} color="white" />
          </LogoContainer>
        </PressableButtonNext>
        <TitleText>
          DFOOD WILL ACCESS YOUR LOCATION ONLY WHILE USING THE APP
        </TitleText>
      </BottomContainer>
    </Container>
  );
};

export default LocationScreen;
