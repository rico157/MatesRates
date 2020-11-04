import 'react-native-gesture-handler';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../SharedComponents/Header';
import RestaurantList from '../SharedComponents/RestaurantList';
import { NavigationContainer } from '@react-navigation/native';
import RestaurantCard from '../SharedComponents/RestaurantCard';
import SearchBar from '../SearchBarComponents/SearchBar';

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SearchBar" component={SearchBar}></Stack.Screen>
      <Stack.Screen
        name="RestaurantCard"
        component={RestaurantCard}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

export default HomeScreen;
