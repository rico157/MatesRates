import "react-native-gesture-handler";
import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./Header";
import RestaurantList from "./RestaurantList";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Header />
      <RestaurantList />
      <Text>Home Screen</Text>
    </View>
  );
};

export default HomeScreen;
