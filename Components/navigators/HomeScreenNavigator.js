import 'react-native-gesture-handler';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Restaurant from '../screens/RestaurantPage';
import Home from '../screens/HomePage';
import { useQuery, gql } from '@apollo/client';

const Stack = createStackNavigator();

const HomeScreen = () => {
  const restaurantData = gql`
    {
      restaurants {
        name
        city {
          name
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(restaurantData);
  // console.log(data);
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home}></Stack.Screen>
      <Stack.Screen name="Restaurant" component={Restaurant}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default HomeScreen;
