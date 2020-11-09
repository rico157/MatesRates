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
  card: {
    fontSize: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid darkblue',
    marginTop: '15px',
    borderLeft: '0.25',
    borderRight: '0.25'
  },
  name: {
    fontSize: '30px'
  }
});

export default HomePage;
