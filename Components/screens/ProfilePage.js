import 'react-native-gesture-handler';
// import * as React from 'react';
import React, {useState} from "react"
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import FriendForm from '../common/FriendAdder';
import {GET_USER} from "../../utils/queries"
import {useQuery} from "@apollo/client"
import { Avatar, Accessory } from 'react-native-elements'
import styles from "../../Styling/global-style"

const ProfileScreen = ({ navigation, route }) => {
  const { data, loading, error } = useQuery(GET_USER);
  console.log(data)
  if(loading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    )
  }
  if(error) {
    return (
      <View>
        <Text>error</Text>
      </View>
    )
  }
  //console.log("Avatar-->", data.user.avatarURL)
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.headerText}
      >{data.user.name}'s Profile</Text>
    
      <Avatar
        rounded
        size="large"
        source={{
          uri: data.user.avatarURL,
        }}
      />

      <Text style={styles.contentText}>Number of friends: {data.user.friends.length}</Text>

      <Button
        color= "#4E2D3E"
        title="FriendList"
        onPress={() => {
          navigation.navigate('FriendList');
        }}
      >
        FriendList with preview BUTTON
      </Button>
      <Button
        color= "#4E2D3E"
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

const avatar = StyleSheet.create({
  logo: {
    width: 50,
    height: 100
  }
});

export default ProfileScreen;
