import 'react-native-gesture-handler';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Restaurant from '../screens/RestaurantPage';
import SearchPage from '../screens/SearchPage';
import { View, Text } from 'react-native';
import LogoTitle from '../common/LogoTitle';
import { iOSUIKit, iOSColors } from 'react-native-typography';

const Stack = createStackNavigator();

const SearchNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Search"
        component={SearchPage}
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
