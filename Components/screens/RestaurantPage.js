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
import ReviewList from '../common/ReviewList';
import { averageRatings } from '../../utils/utils';
import { Card, Button, ListItem, Icon } from "react-native-elements";
import styles from "../../Styling/global-style";
import Ionicons from 'react-native-vector-icons/Ionicons';

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
          {/* <ion-icon name="restaurant-outline"></ion-icon> */}
          
      </Card>
      <View style= {{backgroundColor: "white", margin: 15, padding: 8, borderRadius: 8}}>
        <ListItem>
          <ListItem.Content>
          <ListItem.Title>{description}</ListItem.Title>
          </ListItem.Content>
        </ListItem>
        <ListItem><Ionicons name="ios-restaurant" size={20}/>
          <ListItem.Content>
          <ListItem.Title>{cuisine}</ListItem.Title>
          </ListItem.Content>
        </ListItem>
        <ListItem><Ionicons name="ios-phone-portrait" size={20}/>
          <ListItem.Content>
          <ListItem.Title>{phone}</ListItem.Title>
          </ListItem.Content>
        </ListItem>
        <ListItem><Ionicons name="ios-compass" size={20}/>
          <ListItem.Content>
          <ListItem.Title>{address}</ListItem.Title>
          </ListItem.Content>
        </ListItem>
        <ListItem><Ionicons name="ios-calendar" size={20}/>
          <ListItem.Content>
          <ListItem.Title>{information}</ListItem.Title>
          </ListItem.Content>
        </ListItem>
        <ListItem>
          <ListItem.Content>
          <ListItem.Title>Average rating: {averageRatings(reviews)}  <Ionicons name="ios-star" size={20}/></ListItem.Title>
          </ListItem.Content>
        </ListItem>
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
