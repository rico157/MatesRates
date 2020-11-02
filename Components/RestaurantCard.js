import "react-native-gesture-handler";
import * as React from "react";
import { StyleSheet, Text, View, SafeAreaView, FlatList } from "react-native";

const RestaurantCard = ({ restaurants }) => {
  const Item = ({ name, rating, address, id }) => (
    <View>
      <Text>{name}</Text>
      <Text>{rating}</Text>
      <Text>{address}</Text>
    </View>
  );

  const renderItem = ({ item }) => <Item title={restaurants.name} />;

  return (
    <SafeAreaView>
      <FlatList
        data={restaurants}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default RestaurantCard;
