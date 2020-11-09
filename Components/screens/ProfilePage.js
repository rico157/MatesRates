import 'react-native-gesture-handler';
import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import FriendForm from '../common/FriendAdder';

const ProfileScreen = ({ navigation, route }) => {
  return (
    <View>
      <Text>Profile Screen</Text>
      <Text>Image of user</Text>
      <Text>Number of reviews</Text>
      <FriendForm/>
      <Button
        style={styles.name}
        title="FriendList"
        onPress={() => {
          navigation.navigate('FriendList');
        }}
      >
        FriendList with preview BUTTON
      </Button>
      <Button
        style={styles.name}
        title="Wishlist"
        onPress={() => {
          navigation.navigate('WishList');
        }}
      >
        Wishlist with preview BUTTON
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  // card: {
  //   fontSize: '20px',
  //   display: 'flex',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   border: '1px solid darkblue',
  //   marginTop: '15px',
  //   borderLeft: '0.25',
  //   borderRight: '0.25'
  // },
  name: {
    // fontSize: 30
  }
});

export default ProfileScreen;
