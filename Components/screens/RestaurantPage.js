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
import { Image } from 'react-native-elements';
import mock from '../../mock';
import ReviewList from '../common/ReviewList';

const RestaurantPage = ({ navigation, route }) => {
  console.log(route);
  const { name, cuisine, city, id } = route.params.restaurant;
  const { reviews } = mock;
  return (
    <View>
      <Text>{name}</Text>
      <Text>{city.name}</Text>
      <Text>{cuisine}</Text>
      <Button
        onPress={() => navigation.navigate('ReviewForm', { restaurant_id: id })}
        title="Add Review"
      />
      <ReviewList reviews={reviews} />
    </View>
  );
};

export default RestaurantPage;
