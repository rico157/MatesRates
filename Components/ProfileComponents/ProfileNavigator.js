import 'react-native-gesture-handler';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../SharedComponents/Header';
import { NavigationContainer } from '@react-navigation/native';
import ProfilePage from './ProfilePage';
import WishList from './WishListPage';
import FriendList from './FriendListPage';
import User from '../SharedComponents/UserPage';
import RestaurantPage from '../SharedComponents/RestaurantPage';

const Stack = createStackNavigator();

const ProfileNavigator = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ProfilePage" component={ProfilePage}></Stack.Screen>
      <Stack.Screen
        name="RestaurantPage"
        component={RestaurantPage}
      ></Stack.Screen>
      <Stack.Screen name="WishList" component={WishList}></Stack.Screen>
      <Stack.Screen name="FriendList" component={FriendList}></Stack.Screen>
      <Stack.Screen name="User" component={User}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default ProfileNavigator;
