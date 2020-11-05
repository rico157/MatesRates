// HOMEPAGE FEATURES

// RECENT REVIEWED RESTAURANTS
//         CARD: WHO RATED / HOW LONG AGO
import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
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

const HomePage = (props) => {
  const [restaurants, setRestaurants] = useState('');

  useEffect(() => {
    setRestaurants(mock.restaurants);
  });

  return (
    <SafeAreaView>
      <FlatList
        data={restaurants}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Button
              style={styles.name}
              title={item.name}
              onPress={() => {
                props.navigation.navigate('RestaurantPage', {
                  item,
                });
              }}
            />
            <Text>{item.address}</Text>
            <Text>{item.rating}</Text>
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

export default HomePage;
