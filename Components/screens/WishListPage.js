import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Image,
  Button
} from 'react-native';
import { useQuery, gql } from '@apollo/client';
import RestaurantList from '../common/RestaurantList';

export default function WishList(props) {
  const restaurants = gql`
    {
      user(id: "5fa91e3486083c1f16e6ffa4") {
        wishlist {
          id
          name
          cuisine
          logo
          city {
            name
          }
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(restaurants);

  console.log(data);

  if (loading) {
    return (
      <View>
        <Text>loading...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView>
      <Text>This is my WIshList</Text>
      <RestaurantList restaurants={data.user.wishlist} {...props} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  card: {
    // fontSize: 20,
    // display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'center',
    // border: '1px solid darkblue',
    // marginTop: '15px',
    // borderLeft: '0.25',
    // borderRight: '0.25'
  },
  name: {
    // fontSize: '30px'
  }
});
