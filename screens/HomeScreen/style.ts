import { BORDER_RADIOUS, COLOR, FONT_SIZE, FONT_WEIGHT } from "@/theme";
import { Image, Pressable, TextInput } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${COLOR.BACKGROUND_PRIMARY};
  align-items: center;
  padding: 50px 0px;
  height: 100%;
`;
export const HeaderContainer = styled.View`
  width: 85%;
  flex-direction: row;
  justify-content: space-between;
`;
export const Titlecontainer = styled.View`
  flex-direction: row;
`;

export const SubTitleContainer = styled.View`
  justify-content: center;
  margin-left: 20px;
  gap: 5px;
`;
export const TitleText = styled.Text`
  font-size: ${FONT_SIZE.M};
  color: ${COLOR.PRIMARY};
  font-weight: ${FONT_WEIGHT.bold};
  font-family: "Sen-Regular";
  line-height: 16px;
`;
export const TitleText2Container = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const TitleText2 = styled.Text`
  font-size: ${FONT_SIZE.h6};
  font-weight: ${FONT_WEIGHT.regular};
  font-family: "Sen-Regular";
`;
export const Logo2Container = styled(Pressable)`
  width: 45px;
  height: 45px;
  border-radius: ${BORDER_RADIOUS.Round};
  justify-content: center;
  align-items: center;
  background-color: ${COLOR.SECONDARY};
`;
export const SearchFieldContainer = styled.View`
  width: 85%;
  height: 62px;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 30px;
`;
export const SearchField = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${COLOR.BACKGROUND_LIGHT};
  flex-direction: row;
  padding-left: 10px;
  border-radius: ${BORDER_RADIOUS.M};
`;
export const TitleText3 = styled.Text`
  font-size: ${FONT_SIZE.h6};
  margin: 12px 0px;
`;
export const BoldTitleText3 = styled.Text`
  font-size: ${FONT_SIZE.XXL};
  font-weight: ${FONT_WEIGHT.bold};
`;
export const SearchIconContainer = styled.View`
  width: 10%;
  justify-content: center;
  align-items: center;
`;
export const TextField = styled(TextInput)`
  width: 90%;
  font-size: ${FONT_SIZE.h6};
  color: ${COLOR.TEXT_PLACEHOLDER};
`;
export const CategoriesContainer = styled.View`
  width: 85%;
  margin-top: 20px;
  flex-direction: column;
`;
export const CategoriesTilteContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;
export const CategoryTitle = styled.Text`
  font-size: ${FONT_SIZE.XXXL_20};
  font-weight: ${FONT_WEIGHT.bold};
  line-height: 24px;
  font-family: "Sen-Regular";
`;
export const SeeAllContainer = styled(Pressable)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;
export const SeeAllTitle = styled.Text`
  font-size: ${FONT_SIZE.XXL};
  font-weight: ${FONT_WEIGHT.regular};
  line-height: 19px;
  font-family: "Sen-Regular";
`;
export const FlatlistContainer = styled.View`
  width: 100%;
  height: 100px;
  margin-top: 20px;
  margin-bottom: 10px;
`;

export const SlideContainer = styled.View`
  width: auto;
  height: 72px;
  margin-top: 5px;
  margin-right: 20px;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  padding-left: 12px;
  padding-right: 16px;
  border-radius: 50px;
  background-color: white;
  elevation: 8;
`;

export const ImageContainer = styled.View`
  width: 50px;
  height: 50px;
  border-radius: ${BORDER_RADIOUS.Round};
  background-color: #f5f5f4;
  overflow: hidden;
  justify-content: center;
  align-items: center;
`;

export const SlideContainerImage = styled(Image)`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

export const SlideTitle = styled.Text`
  font-size: ${FONT_SIZE.h6};
  font-weight: ${FONT_WEIGHT.bold};
  line-height: 19px;
  color: ${COLOR.TEXT_PRIMARY};
  font-family: "Sen-Regular";
`;
export const RestaurantsFlatlistContainer = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
  padding-bottom: 360px;
  margin-top: 30px;
`;

export const RestaurantsSlideContainer = styled(Pressable)`
  width: 100%;
  border-radius: 15px;
  overflow: hidden;
  margin-bottom: 30px;
  gap: 8px;
`;

export const RestaurantsImageContainer = styled.View`
  width: 100%;
  height: 137px;
  background-color: #98a8b8;
  border-radius: 15px;
  overflow: hidden;
`;
export const RestaurantsContainerImage = styled(Image)`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;
export const RestaurantTitleText = styled.Text`
  font-size: ${FONT_SIZE.XXXL_20};
  font-weight: ${FONT_WEIGHT.regular};
  line-height: 24px;
  color: ${COLOR.TEXT_TERTIARY};
  font-family: "Sen-Regular";
`;

export const ProductsTitle = styled.Text`
  font-size: ${FONT_SIZE.h6};
  font-weight: ${FONT_WEIGHT.regular};
  color: ${COLOR.TEXT_QUATERNARY};
  line-height: 16px;
  font-family: "Sen-Regular";
`;
export const OtherDetailsContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  gap: 20px;
`;
export const RatingTextContainer = styled.View`
  align-items: center;
  flex-direction: row;
  gap: 5px;
`;

export const RatingText = styled.Text`
  font-size: ${FONT_SIZE.h6};
  font-weight: ${FONT_WEIGHT.bold};
  line-height: 19px;
  color: ${COLOR.TEXT_TERTIARY};
  font-family: "Sen-Regular";
`;
export const DeliveryCostContainer = styled.View`
  align-items: center;
  flex-direction: row;
  gap: 5px;
`;

export const DeliveryCostText = styled.Text`
  font-size: ${FONT_SIZE.h6};
  font-weight: ${FONT_WEIGHT.regular};
  line-height: 16px;
  color: ${COLOR.TEXT_TERTIARY};
  font-family: "Sen-Regular";
`;
export const DeliveryTimeContainer = styled.View`
  align-items: center;
  flex-direction: row;
  gap: 5px;
`;

export const DeliveryTimeText = styled.Text`
  font-size: ${FONT_SIZE.h6};
  font-weight: ${FONT_WEIGHT.regular};
  line-height: 19px;
  color: ${COLOR.TEXT_TERTIARY};
  font-family: "Sen-Regular";
`;
