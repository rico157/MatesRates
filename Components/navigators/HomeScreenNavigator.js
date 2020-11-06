import 'react-native-gesture-handler';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Restaurant from '../screens/RestaurantPage';
import ReviewForm from '../screens/ReviewFormPage';
import Home from '../screens/HomePage';
import { useQuery, gql } from '@apollo/client';

const Stack = createStackNavigator();

const HomeScreenNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home}></Stack.Screen>
      <Stack.Screen name="Restaurant" component={Restaurant}></Stack.Screen>
      <Stack.Screen name="ReviewForm" component={ReviewForm}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default HomeScreenNavigator;
