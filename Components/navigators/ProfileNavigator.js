import 'react-native-gesture-handler';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import ProfilePage from '../screens/ProfilePage';
import WishList from '../screens/WishListPage';
import FriendList from '../screens/FriendListPage';
import User from '../screens//UserPage';
import Restaurant from '../screens/RestaurantPage';

const Stack = createStackNavigator();

const ProfileNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={ProfilePage}></Stack.Screen>
      <Stack.Screen name="Restaurant" component={Restaurant}></Stack.Screen>
      <Stack.Screen name="WishList" component={WishList}></Stack.Screen>
      <Stack.Screen name="FriendList" component={FriendList}></Stack.Screen>
      <Stack.Screen name="User" component={User}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default ProfileNavigator;
