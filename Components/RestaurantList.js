import "react-native-gesture-handler";
import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import RestaurantCard from "./RestaurantCard";

class RestaurantList extends Component {
  state = {
    isLoading: null,
    restaurants: [
      {
        name: "Slug & Lettuce",
        rating: 4.5,
        address: "123 Real Address Lane",
        id: 1,
      },
      {
        name: "Turtle Bay",
        rating: 3,
        address: "100 Oxford Street",
        id: 2
      }
    ],
  };

  render() {
    return <RestaurantCard restaurants={this.state.restaurants} />;
  }
}

export default RestaurantList;
