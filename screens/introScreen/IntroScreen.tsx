import { Dimensions, FlatList, StatusBar, View } from "react-native";
import React, { useRef, useState } from "react";
import styled from "styled-components/native";
import {
  PressableButtonNext,
  PressableButtonSkip,
} from "@/components/common/Buttons/Button";
import {
  ButtonViewContainer,
  GetStartedViewContainer,
  SlideContainerImage,
  SlideDescriptionText,
  SlideTitleText,
  SlideView,
  ViewContainer,
} from "./style";
import {
  PressableButtonNextText,
  PressableButtonSkipText,
} from "@/components/common/Texts/Text";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "@/types";

const { width, height } = Dimensions.get("window");

const slides = [
  {
    key: "slide1",
    title: "All your favorites",
    text: "Get all your loved foods in one once place you just place the orer we do the rest",
    image: require("@/assets/images/onBoarding.png"),
  },
  {
    key: "slide2",
    title: "All your favorites",
    text: "Get all your loved foods in one once place you just place the orer we do the rest",
    image: require("@/assets/images/Onboarding1.png"),
  },
  {
    key: "slide3",
    title: "Order from choosen chef",
    text: "Get all your loved foods in one once place, you just place the orer we do the rest",
    image: require("@/assets/images/Onboarding2.png"),
  },
  {
    key: "slide4",
    title: "Free delivery offers",
    text: "Get all your loved foods in one once place, you just place the orer we do the rest",
    image: require("@/assets/images/Onboarding3.png"),
  },
];

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList>;

export const IntroScreen = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const ref = useRef<FlatList>(null);
  const navigation = useNavigation<ProfileScreenNavigationProp>();

  interface UpdateCurrentSlideIndexEvent {
    nativeEvent: {
      contentOffset: {
        x: number;
      };
    };
  }

  const renderSlide = ({ item }: { item: (typeof slides)[0] }) => (
    <SlideContainer>
      <SlideContainerImage source={item.image} />
      <SlideTitleText>{item.title}</SlideTitleText>
      <SlideDescriptionText>{item.text}</SlideDescriptionText>
    </SlideContainer>
  );

  const Footer = () => {
    return (
      <View
        style={{
          width: "80%",
          height: height * 0.28,
          justifyContent: "space-between",
          paddingBottom: 30,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 0,
          }}
        >
          {slides.map((_, index) => (
            <SlideView
              key={index}
              style={[
                currentSlideIndex === index && {
                  backgroundColor: "#ff7622",
                  width: 10,
                },
              ]}
            />
          ))}
        </View>
        <ButtonViewContainer>
          {currentSlideIndex === slides.length - 1 ? (
            <GetStartedViewContainer>
              <PressableButtonNext onPress={() => navigation.replace("Login")}>
                <PressableButtonNextText>GET STARTED</PressableButtonNextText>
              </PressableButtonNext>
            </GetStartedViewContainer>
          ) : (
            <View
              style={{
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <PressableButtonNext onPress={goNextSlide}>
                <PressableButtonNextText>NEXT</PressableButtonNextText>
              </PressableButtonNext>
              <PressableButtonSkip onPress={goSkip}>
                <PressableButtonSkipText>Skip</PressableButtonSkipText>
              </PressableButtonSkip>
            </View>
          )}
        </ButtonViewContainer>
      </View>
    );
  };

  const updateCurrentSlideIndex = (e: UpdateCurrentSlideIndexEvent) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const goNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex != slides.length) {
      const offset = nextSlideIndex * width;
      ref?.current?.scrollToOffset({ offset });
      setCurrentSlideIndex(nextSlideIndex);
    }
  };
  const goSkip = () => {
    const lastSlideIndex = slides.length - 1;
    const offset = lastSlideIndex * width;
    ref?.current?.scrollToOffset({ offset });
    setCurrentSlideIndex(lastSlideIndex);
  };

  return (
    <ViewContainer>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <FlatList
        data={slides}
        contentContainerStyle={{ height: height * 0.8 }}
        renderItem={renderSlide}
        keyExtractor={(item) => item.key}
        horizontal
        pagingEnabled
        onMomentumScrollEnd={updateCurrentSlideIndex}
        ref={ref}
        showsHorizontalScrollIndicator={false}
        overScrollMode="never"
      />
      <Footer />
    </ViewContainer>
  );
};

const SlideContainer = styled.View`
  width: ${width}px;
  height: fit-content;
  justify-content: center;
  align-items: center;
  padding: 16px;
  margin-bottom: 0px;
`;
