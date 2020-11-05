import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Image,
  Button,
} from 'react-native';
import mock from '../../mock';
import { useQuery, gql } from '@apollo/client';

const RestaurantListPage = () => {
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
      <FlatList
        data={data.restaurants}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Button
              style={styles.name}
              title={item.name}
              onPress={() => {
                this.props.navigation.navigate('RestaurantPage', {
                  item,
                });
              }}
            />
            <Text>{item.city.name}</Text>
            <Text>{item.cuisine}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
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
    borderRight: '0.25',
  },
  name: {
    fontSize: '30px',
  },
});

export default RestaurantListPage;
