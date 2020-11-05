import React from 'react';
import { View } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import RestaurantCard from './RestaurantCard';

export default ({ restaurants, navigation }) => {
  return (
    <ScrollView>
      {restaurants.map((l, i) => (
        <RestaurantCard restaurant={l} navigation={navigation} />
      ))}
    </ScrollView>
  );
};
