 import React, { useEffect, useState } from "react";
 import {
   BoldTitleText3,
   CategoriesContainer,
   CategoriesTilteContainer,
   CategoryTitle,
   Container,
   DeliveryCostContainer,
   DeliveryCostText,
   DeliveryTimeContainer,
   DeliveryTimeText,
   FlatlistContainer,
   HeaderContainer,
   ImageContainer,
   Logo2Container,
   OtherDetailsContainer,
   ProductsTitle,
   RatingText,
   RatingTextContainer,
   RestaurantsContainerImage,
   RestaurantsFlatlistContainer,
   RestaurantsImageContainer,
   RestaurantsSlideContainer,
   RestaurantTitleText,
   SearchField,
   SearchFieldContainer,
   SearchIconContainer,
   SeeAllContainer,
   SeeAllTitle,
   SlideContainer,
   SlideContainerImage,
   SlideTitle,
   SubTitleContainer,
   TextField,
   Titlecontainer,
   TitleText,
   TitleText2,
   TitleText2Container,
   TitleText3,
 } from "./style";
 import Ionicons from "@expo/vector-icons/Ionicons";
 import { FlatList } from "react-native";
 import { useNavigation } from "@react-navigation/native";
 import data from "@/data.json";
 import { BackPressableButton2 } from "@/components/common/Buttons/Button";
 import AsyncStorage from "@react-native-async-storage/async-storage";

 const slides = [
   {
     id: 1,
     name: "All",
     image_url:
       "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
   },
   {
     id: 2,
     name: "Pizza",
     image_url:
       "https://plus.unsplash.com/premium_photo-1673439304183-8840bd0dc1bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8UGl6emF8ZW58MHx8MHx8fDA%3D",
   },
   {
     id: 3,
     name: "Fried Chicken",
     image_url:
       "https://images.unsplash.com/photo-1627662236973-4fd8358fa206?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8RnJpZWQlMjBDaGlja2VufGVufDB8fDB8fHww",
   },
   {
     id: 4,
     name: "Sandwich",
     image_url:
       "https://images.unsplash.com/photo-1551183053-bf91a1d81141?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
   },
   {
     id: 5,
     name: "Taco",
     image_url:
       "https://images.unsplash.com/photo-1604467715878-83e57e8bc129?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VGFjb3xlbnwwfHwwfHx8MA%3D%3D",
   },
   {
     id: 6,
     name: "Burrito",
     image_url:
       "https://images.unsplash.com/photo-1647545401800-bd8f77e670ed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8QnVycml0b3xlbnwwfHwwfHx8MA%3D%3D",
   },
   {
     id: 7,
     name: "Hot Dog",
     image_url:
       "https://images.unsplash.com/photo-1551218808-94e220e084d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
   },
   {
     id: 8,
     name: "French Fries",
     image_url:
       "https://plus.unsplash.com/premium_photo-1683121324474-83460636b0ed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8RnJlbmNoJTIwRnJpZXN8ZW58MHx8MHx8fDA%3D",
   },
   {
     id: 9,
     name: "Milkshake",
     image_url:
       "https://images.unsplash.com/photo-1627328715728-7bcc1b5db87d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
   },
   {
     id: 10,
     name: "Nuggets",
     image_url:
       "https://images.unsplash.com/photo-1585325701172-fcb7d019242d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fE51Z2dldHN8ZW58MHx8MHx8fDA%3D",
   },
 ];

import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '@/types';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList>;

export const HomeScreen: React.FC = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const [address, setAddress] = useState("unknown address");
  async function getData(){
     const address = await AsyncStorage.getItem("location");
     setAddress(address ?? "unknown address");
  }
  useEffect(() => {
    getData();
  }, []);
 
   const handleSearchClick = () => {
    //  navigation.navigate("SearchScreen");
   };
   const renderSlide = ({ item }: { item: (typeof slides)[0] }) => (
     <SlideContainer>
       <ImageContainer>
         <SlideContainerImage
           source={{ uri: item.image_url }}
           resizeMode="cover"
         />
       </ImageContainer>
       <SlideTitle>{item.name}</SlideTitle>
     </SlideContainer>
   );

   const renderSlide2 = ({ item }: { item: (typeof data)[0] }) => (
     <RestaurantsSlideContainer
      //  onPress={() =>
      //   //  navigation.navigate("RestaurantDetails", { restaurant: item })  
      //  }
     >
       <RestaurantsImageContainer>
         <RestaurantsContainerImage
           source={{ uri: item.image_url }}
           resizeMode="cover"
         />
       </RestaurantsImageContainer>
       <RestaurantTitleText>{item.title}</RestaurantTitleText>
       <ProductsTitle>{item.products}</ProductsTitle>
       <OtherDetailsContainer>
         <RatingTextContainer>
           <Ionicons name="star-outline" size={16} color="#FF7622" />
           <RatingText>{item.rating}</RatingText>
         </RatingTextContainer>
         <DeliveryCostContainer>
           <Ionicons name="car-outline" size={16} color="#FF7622" />
           <DeliveryCostText>{item.deliveryFee}</DeliveryCostText>
         </DeliveryCostContainer>
         <DeliveryTimeContainer>
           <Ionicons name="time-outline" size={16} color="#FF7622" />
           <DeliveryTimeText>{item.deliveryTime}</DeliveryTimeText>
         </DeliveryTimeContainer>
       </OtherDetailsContainer>
     </RestaurantsSlideContainer>
   );
   return (
     <Container>
       <HeaderContainer>
         <Titlecontainer>
           <BackPressableButton2
             onPress={() => navigation.navigate("ProfileScreen")}
           >
             <Ionicons name="menu-outline" size={24} color="black" />
           </BackPressableButton2>
           <SubTitleContainer>
             <TitleText>DELIVER TO</TitleText>
             <TitleText2Container>
               <TitleText2>{address}</TitleText2>
               <Ionicons name="caret-down-outline" size={16} color="black" />
             </TitleText2Container>
           </SubTitleContainer>
         </Titlecontainer>
         <Logo2Container>
           <Ionicons name="bag-handle-outline" size={24} color="white" />
         </Logo2Container>
       </HeaderContainer>
       <SearchFieldContainer>
         <TitleText3>
           Hey Halal,
           <BoldTitleText3> Good Afternoon!</BoldTitleText3>
         </TitleText3>
         <SearchField>
           <SearchIconContainer>
             <Ionicons name="search-outline" size={24} color="#A0A5BA" />
           </SearchIconContainer>
           <TextField
             placeholder="Search for restaurants"
             onFocus={handleSearchClick}
           />
         </SearchField>
       </SearchFieldContainer>
       <CategoriesContainer>
         <CategoriesTilteContainer>
           <CategoryTitle>All Categories</CategoryTitle>
           <SeeAllContainer>
             <SeeAllTitle>See All</SeeAllTitle>
             <Ionicons
               name="chevron-forward-outline"
               size={16}
               color="#A0A5BA"
             />
           </SeeAllContainer>
         </CategoriesTilteContainer>
       </CategoriesContainer>
       <FlatlistContainer>
         <FlatList
           style={{ paddingLeft: 20, flex: 1 }}
           data={slides}
           renderItem={renderSlide}
           horizontal
           showsHorizontalScrollIndicator={false}
           overScrollMode="never"
         />
       </FlatlistContainer>
       <CategoriesContainer>
         <CategoriesTilteContainer>
           <CategoryTitle>Open Restaurants</CategoryTitle>
           <SeeAllContainer>
             <SeeAllTitle>See All</SeeAllTitle>
             <Ionicons
               name="chevron-forward-outline"
               size={16}
               color="#A0A5BA"
             />
           </SeeAllContainer>
         </CategoriesTilteContainer>
       </CategoriesContainer>
       <RestaurantsFlatlistContainer>
         <FlatList
           style={{ width: 350, paddingBottom: 100 }}
           data={data}
           renderItem={renderSlide2}
           showsVerticalScrollIndicator={false}
           overScrollMode="never"
         />
       </RestaurantsFlatlistContainer>
     </Container>
   );
 };

