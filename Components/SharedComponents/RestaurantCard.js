import 'react-native-gesture-handler';
import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';

const RestaurantCard = ({ route }) => {
  return (
    <View>
      <Text>{route.params.restaurantId}</Text>
    </View>
  );
};

export default RestaurantCard;
