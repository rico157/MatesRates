import 'react-native-gesture-handler';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import RestaurantPage from '../SharedComponents/RestaurantPage';
import HomePage from './HomePage';
import { useQuery, gql } from '@apollo/client';

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
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
  console.log(data);
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomePage}></Stack.Screen>
      <Stack.Screen
        name="RestaurantPage"
        component={RestaurantPage}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

export default HomeScreen;
