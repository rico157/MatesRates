import 'react-native-gesture-handler';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Restaurant from '../screens/RestaurantPage';
import SearchPage from '../screens/SearchPage';

const Stack = createStackNavigator();

const SearchNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Search"
        component={SearchPage}
        options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen name="Restaurant" component={Restaurant}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default SearchNavigator;
