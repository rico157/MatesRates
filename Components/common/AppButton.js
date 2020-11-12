import React from "react";
import { View, Button, TouchableOpacity, Text } from "react-native";
import styles from "../../Styling/global-style";

TouchableOpacity.defaultProps = { activeOpacity: 0.8 };

const AppButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
    <Text style={styles.contentText}>{title}</Text>
  </TouchableOpacity>
);
