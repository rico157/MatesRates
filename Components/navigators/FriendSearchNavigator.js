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
        options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen
        name="Restaurant"
        component={Restaurant}
        options={{
          headerLayoutPreset: 'center',
          headerStyle: {
            backgroundColor: '#944D6F',
          },

          headerTitle: (props) => (
            <View
              style={{ flexDirection: 'row', justifyContent: 'flex-start' }}
            >
              <LogoTitle {...props} />
              <Text
                style={[
                  iOSUIKit.largeTitleEmphasized,
                  { color: iOSColors.white },
                ]}
              >
                Restaurant
              </Text>
            </View>
          ),
        }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

export default SearchNavigator;
