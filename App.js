import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer, TabActions } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreenNavigator from './Components/HomeComponents/HomeScreenNavigator';
import ProfileNavigator from './Components/ProfileComponents/ProfileNavigator';
import MapView from './Components/MapViewComponents/MapView';
import SearchBarNavigator from './Components/SearchBarComponents/SearchBarNavigator';
import {
  ApolloClient,
  InMemoryCache,
  gql,
  ApolloProvider,
} from '@apollo/client';

const Tab = createBottomTabNavigator();

function App() {
  const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache(),
  });

  client.query({
    query: gql`
      {
        restaurants {
          name
          city {
            name
          }
        }
      }
    `,
  });
  // .then((result) => console.log(result));

  return (
    <>
      <ApolloProvider client={client}>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreenNavigator} />
            <Tab.Screen name="Search" component={SearchBarNavigator} />
            <Tab.Screen name="Map" component={MapView} />
            <Tab.Screen name="Profile" component={ProfileNavigator} />
          </Tab.Navigator>
        </NavigationContainer>
      </ApolloProvider>
    </>
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
