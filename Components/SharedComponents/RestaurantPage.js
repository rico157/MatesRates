import 'react-native-gesture-handler';
import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Button,
} from 'react-native';
import { Image } from 'react-native-elements';

const RestaurantPage = ({ navigation, route }) => {
  const { name, cuisine, city } = route.params.item;
  return (
    <View>
      <Button onPress={() => navigation.goBack()} title="Go back" />
      <Text>{name}</Text>
      <Text>{city.name}</Text>
      <Text>{cuisine}</Text>
    </View>
  );
};

export default RestaurantPage;
