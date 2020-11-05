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
import mock from '../../mock';
import RestaurantList from '../common/RestaurantList';
import { ScrollView } from 'react-native-gesture-handler';

const HomePage = (props) => {
  const restaurants = gql`
    {
      restaurants {
        name
        cuisine
        city {
          name
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(restaurants);
  // console.log(error, data);
  if (loading) {
    return (
      <View>
        <Text>loading...</Text>
      </View>
    );
  }

  return (
    <ScrollView>
      <RestaurantList restaurants={data.restaurants} {...props} />

      <FlatList
        data={data.restaurants}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Button
              style={styles.name}
              title={item.name}
              onPress={() => {
                props.navigation.navigate('Restaurant', {
                  restaurant: item
                });
              }}
            />
            <Text>{item.city.name}</Text>
            <Text>{item.cuisine}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
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
