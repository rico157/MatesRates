import "react-native-gesture-handler";
import * as React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = () => {
  return <Text style={styles.Header}>Header: Mates Rates!</Text>;
};

const styles = StyleSheet.create({
  Header: {
    color: "red",
    display: "flex",
    fontSize: "28px",
    justifyContent: "center",
    alignContent: "center",
    padding: "15px",
    border: "solid black",
    margin: "10px"
  }
})

export default Header;
