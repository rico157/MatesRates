import "react-native-gesture-handler";
import React, { Component } from "react";
import { StyleSheet, Text, View, SafeAreaView, FlatList } from "react-native";
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
    return (
      <SafeAreaView>
      <FlatList
        data={this.state.restaurants}
        renderItem={({ item }) => (
          <>
          <Text>{item.name}</Text>
          <Text>{item.address}</Text>
          <Text>{item.rating}</Text>
          </>
        )}
        keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    )
  }
}

export default RestaurantList;
