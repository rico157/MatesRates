import "react-native-gesture-handler";
// import * as React from 'react';
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
  Modal,
} from "react-native";
import FriendForm from "../common/FriendAdder";
import { GET_USER } from "../../utils/queries";
import { useQuery } from "@apollo/client";
import { Avatar, Card } from "react-native-elements";
import styles from "../../Styling/global-style";
import SearchFriendList from "../common/SearchFriendList";
import WishList from "../screens/WishListPage";

const ProfileScreen = ({ navigation, route }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [secondModalOpen, setSecondModalOpen] = useState(false);
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

      <Modal visible={modalOpen} animationType="slide">
        <View>
          <TouchableOpacity
            title="Hide Friends"
            color="#F8A677"
            style={avatar.modalToggle}
            onPress={() => setModalOpen(false)}
          >
            <Text style={{ color: "white" }}>Hide Friends</Text>
          </TouchableOpacity>
          <SearchFriendList
            users={data.user.friends}
            friends={data.user.friends}
          ></SearchFriendList>
        </View>
      </Modal>

      <TouchableOpacity
        backgroundColor="#F8A677"
        title="FriendList"
        color="#F8A677"
        style={avatar.modalToggle}
        onPress={() => setModalOpen(true)}
      >
        <Text style={{ color: "white" }}>Friends List</Text>
      </TouchableOpacity>

      <Modal visible={secondModalOpen} animationType="slide">
        <View>
          <TouchableOpacity
            title="Hide Wishlist"
            color="#F8A677"
            style={avatar.modalToggle}
            onPress={() => setSecondModalOpen(false)}
          >
            <Text style={{ color: "white" }}>Hide Wishlist</Text>
          </TouchableOpacity>
          <WishList></WishList>
        </View>
      </Modal>

      <TouchableOpacity
        backgroundColor="#F8A677"
        title="Wishlist"
        color="#F8A677"
        style={avatar.modalToggle}
        onPress={() => setSecondModalOpen(true)}
      >
        <Text style={{ color: "white" }}>Wishlist</Text>
      </TouchableOpacity>
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
  modalToggle: {
    backgroundColor: "#F8A677",
    marginTop: 30,
    marginBottom: 10,
    padding: 10,
    borderRadius: 40,
    alignSelf: "center",
  },
});

export default ProfileScreen;
