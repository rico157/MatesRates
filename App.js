import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer, TabActions } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreenNavigator from './Components/HomeComponents/HomeScreenNavigator';
import ProfileNavigator from './Components/ProfileComponents/ProfileNavigator';
import MapView from './Components/MapViewComponents/MapView';
import SearchBarNavigator from './Components/SearchBarComponents/SearchBarNavigator';
import Header from './Components/SharedComponents/Header';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreenNavigator} />
          <Tab.Screen name="Search" component={SearchBarNavigator} />
          <Tab.Screen name="Map" component={MapView} />
          <Tab.Screen name="Profile" component={ProfileNavigator} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  Header: {
    color: 'red'
  }
});

export default App;
