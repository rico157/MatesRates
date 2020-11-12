import React from "react";
import { View } from "react-native";
import { ListItem, Avatar } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import RestaurantCard from "./RestaurantCard";
import style from "../../Styling/global-style";

export default ({ restaurants, wishlist, navigation }) => {
  return (
    <ScrollView style={{ backgroundColor: "#F8A677" }}>
      {restaurants.map((restaurant) => (
        <RestaurantCard
          key={restaurant.id}
          wishlist={wishlist}
          restaurant={restaurant}
          navigation={navigation}
        />
      ))}
    </ScrollView>
  );
};
