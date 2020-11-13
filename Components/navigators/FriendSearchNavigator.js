import 'react-native-gesture-handler';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Restaurant from '../screens/RestaurantPage';
import FriendSearchPage from '../screens/FriendSearchPage';

const Stack = createStackNavigator();

const SearchNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="FriendSearch"
        component={FriendSearchPage}
        options={{
          headerShown: false,
          cardStyle: { backgroundColor: '#5C374C' }
        }}
      ></Stack.Screen>
      <Stack.Screen name="Restaurant" component={Restaurant}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default SearchNavigator;
