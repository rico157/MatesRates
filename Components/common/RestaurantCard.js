import React from "react";
import { Text, StyleSheet } from "react-native";
import { Card, Button, Icon } from "react-native-elements";
import { wishlistCount } from "../../utils/utils";
import styles from "../../Styling/global-style";
import WishlistButton from "./WishlistButton";

export default ({ restaurant, wishlist, navigation }) => {
  const { name, city, logo, id } = restaurant;

  // const count = wishlistCount(wishlist, id);

  return (
    <Card style={{ backgroundColor: "#F8A677" }}>
      <Card.Title
        style={{
          fontFamily: "Change One",
          fontWeight: "bold",
          color: "0F0508",
        }}
      >
        {name}
      </Card.Title>
      <Card.Divider />
      <Card.Image
        source={{
          uri: logo,
        }}
      />
      <Text
        style={{
          fontFamily: "Changa One",
          marginBottom: 10,
          textAlign: "center",
        }}
      >
        {city.name}
      </Text>
      <Button
        onPress={() => {
          navigation.navigate("Restaurant", {
            restaurant,
          });
        }}
        icon={<Icon name="code" color="#ffffff" />}
        buttonStyle={{
          borderRadius: 0,
          marginLeft: 0,
          marginRight: 0,
          marginBottom: 0,
        }}
        title="VIEW NOW"
      />
      <WishlistButton restaurant_id={id} />
      {wishlist && <Text>Wished by: {wishlistCount(wishlist, id)}</Text>}
    </Card>
  );
};

// const styles = StyleSheet.create({
//   card: {
//     // fontSize: 20,
//     // display: 'flex',
//     // alignItems: 'center',
//     // justifyContent: 'center',
//     // border: '1px solid darkblue',
//     // marginTop: 15,
//     // borderLeft: '0.25',
//     // borderRight: '0.25',
//     // width: '100'
//   },
//   name: {
//     // fontSize: 30
//   },
//   image: {},
//   users: {},
// });
