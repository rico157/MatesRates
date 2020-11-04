import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Image,
  Button,
} from 'react-native';

class RestaurantList extends React.Component {
  state = {
    isLoading: null,
    restaurants: [
      {
        name: 'Slug & Lettuce',
        rating: 4.5,
        address: '123 Real Address Lane',
        id: 1,
        images: [
          'https://upload.wikimedia.org/wikipedia/en/8/80/Slug_%26_Lettuce_logo.png',
        ],
      },
      {
        name: 'Turtle Bay',
        rating: 3,
        address: '100 Oxford Street',
        id: 2,
        images: [
          'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pointfranchise.co.uk%2Farticles%2Fdoes-turtle-bay-franchise-in-the-uk-6115%2F&psig=AOvVaw2p_-iDsMpxMp9VCAy4bloi&ust=1604502525714000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLi2kevT5uwCFQAAAAAdAAAAABAD',
        ],
      },
      {
        name: 'Rudys Pizza',
        rating: 4.8,
        address: '25 Oxford Street',
        id: 3,
        images: [
          'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.rudyspizza.co.uk%2F&psig=AOvVaw1bymPnEf7Ln4G5EmFuEbjP&ust=1604502552549000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKD__vfT5uwCFQAAAAAdAAAAABAD',
        ],
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
              <Button
                style={styles.name}
                title={item.name}
                onPress={() => {
                  this.props.navigation.navigate('RestaurantCard', {
                    restaurantId: 1,
                  });
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
