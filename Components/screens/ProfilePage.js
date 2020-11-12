import "react-native-gesture-handler";
// import * as React from 'react';
import React, { useState } from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import FriendForm from "../common/FriendAdder";
import { GET_USER } from "../../utils/queries";
import { useQuery } from "@apollo/client";
import { Avatar, Card } from "react-native-elements";
import styles from "../../Styling/global-style";

const Separator = () => <View style={styles.separator} />;

const ProfileScreen = ({ navigation, route }) => {
  const { data, loading, error } = useQuery(GET_USER);
  console.log(data);
  if (loading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }
  if (error) {
    return (
      <View>
        <Text>error</Text>
      </View>
    );
  }
  //console.log("Avatar-->", data.user.avatarURL)
  return (
    <View style={styles.cardContainer}>
      <Card
        containerStyle={{
          backgroundColor: "#FFFFFF",
          borderColor: "black",
          borderRadius: 12,
        }}
      >
        <Card.Title style={styles.headerText}>
          {data.user.name}'s Profile
        </Card.Title>

        <Card.Image
          rounded
          size="large"
          source={{
            uri: data.user.avatarURL,
          }}
        />
        <Text style={styles.contentText}>{data.user.username}</Text>

        <Text style={styles.contentText}>
          Number of friends: {data.user.friends.length}
        </Text>
      </Card>

      <View style={avatar.borderButton}>
        <Button
          color="#F8A677"
          title="FriendList"
          onPress={() => {
            navigation.navigate("FriendList");
          }}
        >
          FriendList with preview BUTTON
        </Button>
        <Button
          color="#F8A677"
          title="Wishlist"
          onPress={() => {
            navigation.navigate("WishList");
          }}
        >
          Wishlist with preview BUTTON
        </Button>
      </View>
    </View>
  );
};

const avatar = StyleSheet.create({
  logo: {
    width: 50,
    height: 100,
  },
  borderButton: {
    flex: 0.5,
    justifyContent: "space-evenly",
  },
  card: {
    backgroundColor: "#4E2D3E",
  },
});

export default ProfileScreen;
