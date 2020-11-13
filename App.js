import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreenNavigator from './Components/navigators/HomeScreenNavigator';
import ProfileNavigator from './Components/navigators/ProfileNavigator';
import SearchBarNavigator from './Components/navigators/SearchBarNavigator';
import FriendSearch from './Components/navigators/FriendSearchNavigator';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

function App() {
  // maybe put this outside --> line 16
  const client = new ApolloClient({
    uri: 'https://matesrates.herokuapp.com/graphql',
    cache: new InMemoryCache(),
  });

  const [user, setUser] = useState(false);

  if (!user) {
    return <LoginPage setUser={setUser} />;
  } else {
    return (
      <>
        <ApolloProvider client={client}>
          <NavigationContainer>
            <Tab.Navigator
              screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;

                  if (route.name === 'Home') {
                    iconName = 'ios-pizza';
                  } else if (route.name === 'Search') {
                    iconName = focused ? 'ios-search' : 'ios-search';
                  } else if (route.name === 'FriendSearch') {
                    iconName = focused ? 'ios-person-add' : 'ios-person-add';
                  } else if (route.name === 'Profile') {
                    iconName = focused ? 'ios-person' : 'ios-person';
                  }

                  // You can return any component that you like here!
                  return <Ionicons name={iconName} size={size} color={color} />;
                },
              })}
              tabBarOptions={{
                activeTintColor: '#FF8C61',
                inactiveTintColor: 'gray',
              }}
            >
              <Tab.Screen name="Home" component={HomeScreenNavigator} />
              <Tab.Screen name="Search" component={SearchBarNavigator} />
              <Tab.Screen name="FriendSearch" component={FriendSearch} />
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
}

export default App;

//       } else {
//         return (
//           <>
//           <ApolloProvider client={client}>
//             <NavigationContainer>
//               <Tab.Navigator>
//                 <Tab.Screen name="Home" component={HomeScreenNavigator} />
//                 <Tab.Screen name="Search" component={SearchBarNavigator} />
//                 <Tab.Screen name="Map" component={MapView} />
//                 <Tab.Screen name="Profile" component={ProfileNavigator} />
//               </Tab.Navigator>
//             </NavigationContainer>
//           </ApolloProvider>
//           </>
//         )
//       }
// }
