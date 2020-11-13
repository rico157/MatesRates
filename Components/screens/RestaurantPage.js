import "react-native-gesture-handler";
import * as React from "react";
import { ScrollView } from "react-native-gesture-handler";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
} from 'react-native';
import { Image } from 'react-native-elements';
import ReviewList from '../common/ReviewList';
import { averageRatings } from '../../utils/utils';
import { Card, Tile, Button } from "react-native-elements";
import styles from "../../Styling/global-style";

const RestaurantPage = ({ navigation, route }) => {
  const { name, cuisine, city, id, reviews, logo, description, address, phone, information } = route.params.restaurant;
  return (
  <ScrollView>
    <View style={{backgroundColor: "#4E2D3E", flex: 1}}>

      <Card
        containerStyle={{
          backgroundColor: "#FFFFFF",
          borderColor: "black",
          borderRadius: 12,
        }}>

      <Card.Title style={styles.headerText}>
          {name}
        </Card.Title>
        <Card.Image
          rounded
          size="large"
          source={{uri: logo}}
          />
      </Card>
      <View style= {{backgroundColor: "white", margin: "15px", padding: "8px", borderRadius: 8}}>
        <Text style={{color: "0F0508", fontSize: "12pt"}}>City: {city.name}</Text>
        <Text style={{color: "0F0508", fontSize: "12pt"}}>Cuisine: {cuisine}</Text>
        <Text style={{color: "0F0508", fontSize: "12pt"}}>Average rating: {averageRatings(reviews)}</Text>    
        <Text> </Text>
        <Text style={{color: "0F0508", fontSize: "12pt"}}>{description}</Text>
        <Text> </Text>
        <Text style={{color: "0F0508", fontSize: "12pt", textDecorationLine: "underline"}}>Contact Us</Text>
        <Text style={{color: "0F0508", fontSize: "12pt"}}>Address: {address}</Text>
        <Text style={{color: "0F0508", fontSize: "12pt"}}>Phone: {phone}</Text>
        <Text> </Text>
        <Text style={{color: "0F0508", fontSize: "12pt"}}>Opening times: {information}</Text>
      </View>
      <Button
      buttonStyle={{
        borderRadius: 20,
        margin: 8,
        backgroundColor: '#FF8C61'
      }}
        onPress={() =>
          navigation.navigate('ReviewForm', {
            restaurant_id: id,
            restaurant_name: name
          })
        }
        title="Add Review"
        />
      <ReviewList reviews={reviews} />
    </View>
  </ScrollView>
  );
};

const restaurant = StyleSheet.create({
  logo: {
    width: 100,
    height: 100,
  },
});

export default RestaurantPage;
