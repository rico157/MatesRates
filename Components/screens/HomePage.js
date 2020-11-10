// HOMEPAGE FEATURES

// RECENT REVIEWED RESTAURANTS
//         CARD: WHO RATED / HOW LONG AGO
import 'react-native-gesture-handler';
import { useQuery, gql } from '@apollo/client';
import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Image,
  Button
} from 'react-native';
import RestaurantList from '../common/RestaurantList';
import { ScrollView } from 'react-native-gesture-handler';
import {RESTAURANTS} from "../../utils/queries"

const HomePage = (props) => {

  const { loading, error, data } = useQuery(RESTAURANTS);

  if (loading) {
    return (
      <View>
        <Text>loading...</Text>
      </View>
    );
  }

  if (error) {
    console.log(error);
    return (
      <View>
        <Text>error...</Text>
      </View>
    );
  }
console.log(data)
  return (
    <ScrollView>
      <RestaurantList restaurants={data.restaurants} {...props} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  
});

export default HomePage;
