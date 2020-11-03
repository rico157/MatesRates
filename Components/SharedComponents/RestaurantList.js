import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Button,
} from 'react-native';
import Header from './Header';

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
    const { navigation } = this.props;
    return (
      <SafeAreaView>
        <Header />
        <FlatList
          data={this.state.restaurants}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Button
                style={styles.name}
                title={item.name}
                onPress={() => {
                  navigation.navigate('RestaurantCard');
                }}
              />
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
    border: '1px solid darkblue',
    marginTop: '15px',
    borderLeft: '0.25',
    borderRight: '0.25',
  },
  name: {
    fontSize: '30px',
  },
});

export default RestaurantList;
