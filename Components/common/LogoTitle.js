import React from "react";
import { Image } from "react-native";

export default function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50, alignContent: "center", display: "flex" }}
      source={require("../../Styling/mates-rates-logo.png")}
    />
  );
}
