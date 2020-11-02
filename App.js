import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer, TabActions } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './Components/HomeScreen';
import ProfileScreen from './Components/ProfileScreen';
import { shouldUseActivityState } from 'react-native-screens';
import MapView from './Components/MapView';
import SearchBar from './Components/SearchBar';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="MapView" component={MapView} />
        <Tab.Screen name="SearchBar" component={SearchBar} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Header: {
    color: 'red',
  },
});

export default App;
