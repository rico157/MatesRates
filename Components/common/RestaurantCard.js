import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Card, Button, Icon, ListItem, Avatar } from 'react-native-elements';

const users = [
  {
    name: 'brynn',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
  }
];

export default ({ restaurant, navigation }) => {
  const { name, img, city } = restaurant;
  return (
    <Card style={styles.card}>
      <Card.Title>{name}</Card.Title>
      <Card.Divider />
      <Card.Image
        source={{
          uri: img
        }}
      />
      <Text style={{ marginBottom: 10, textAlign: 'center' }}>{city.name}</Text>
      <Button
        onPress={() => {
          navigation.navigate('Restaurant', {
            restaurant
          });
        }}
        icon={<Icon name="code" color="#ffffff" />}
        buttonStyle={{
          borderRadius: 0,
          marginLeft: 0,
          marginRight: 0,
          marginBottom: 0
        }}
        title="VIEW NOW"
      />
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    fontSize: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid darkblue',
    marginTop: '15px',
    borderLeft: '0.25',
    borderRight: '0.25',
    width: '100'
  },
  name: {
    fontSize: '30px'
  },
  image: {},
  users: {}
});
