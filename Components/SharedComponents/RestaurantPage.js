import 'react-native-gesture-handler';
import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Button
} from 'react-native';

const RestaurantPage = ({ navigation, route }) => {
  return (
    <View>
      <Button onPress={() => navigation.goBack()} title="Go back" />
      <Text>From route: --> {route.params.restaurantId}</Text>
    </View>
  );
};

export default RestaurantPage;
