import "react-native-gesture-handler";
import * as React from "react";
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
import { averageRatings } from '../../utils/utils';

const RestaurantPage = ({ navigation, route }) => {
  console.log(route.params.restaurant);
  const { name, cuisine, city, id, reviews, logo } = route.params.restaurant;
  return (
    <View>
      <Text>{name}</Text>
      <Image source={{ uri: logo }} style={restaurant.logo} />
      <Text>{city.name}</Text>
      <Text>{cuisine}</Text>
      <Text>{averageRatings(reviews)}</Text>
      <Button
        onPress={() =>
          navigation.navigate('ReviewForm', {
            restaurant_id: id,
            restaurant_name: name
          })
        }
        title="Add Review"
      />
      <ReviewList reviews={reviews} />
    </View>
  );
};

const restaurant = StyleSheet.create({
  logo: {
    width: 100,
    height: 100,
  },
});

export default RestaurantPage;
