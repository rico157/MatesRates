import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';
import RestaurantCard from './RestaurantCard';

class RestaurantList extends Component {
  state = {
    isLoading: null,
    restaurants: [
      {
        name: 'Slug & Lettuce',
        rating: 4.5,
        address: '123 Real Address Lane',
        id: 1,
      },
      {
        name: 'Turtle Bay',
        rating: 3,
        address: '100 Oxford Street',
        id: 2,
      },
      {
        name: 'Rudys Pizza',
        rating: 4.8,
        address: '25 Oxford Street',
        id: 3,
      },
    ],
  };

  render() {
    return (
      <SafeAreaView>
        <FlatList
          data={this.state.restaurants}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text>{item.name}</Text>
              <Text>{item.address}</Text>
              <Text>{item.rating}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    fontSize: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid black',
    margin: '15px',
  },
});

export default RestaurantList;
