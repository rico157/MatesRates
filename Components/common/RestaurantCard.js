import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';
import { wishlistCount } from '../../utils/utils';
import { iOSUIKit, iOSColors } from 'react-native-typography';

import WishlistButton from './WishlistButton';

export default ({ restaurant, wishlist, navigation }) => {
  const { name, city, logo, id } = restaurant;

  // const count = wishlistCount(wishlist, id);

  return (
    <Card
    // containerStyle={{ backgroundColor: '#FAA275' }}
    // wrapperStyle={{ backgroundColor: '#5C374C' }}
    >
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <Text style={[iOSUIKit.title3Emphasized, { color: iOSColors.black }]}>
          {name}
        </Text>

        <WishlistButton restaurant_id={id} />
      </View>
      <Card.Divider />
      <Card.Image
        source={{
          uri: logo
        }}
      />
      <Card.Divider />
      <Text style={{ marginBottom: 10, textAlign: 'center' }}>{city.name}</Text>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        {wishlist ? (
          <Text>Wished by: {wishlistCount(wishlist, id)}</Text>
        ) : (
          <Text></Text>
        )}
        {/* <WishlistButton restaurant_id={id} /> */}
      </View>
      <Button
        onPress={() => {
          navigation.navigate('Restaurant', {
            restaurant
          });
        }}
        // icon={<Icon name="code" color="#ffffff" />}
        buttonStyle={{
          borderRadius: 20,
          marginLeft: 0,
          marginRight: 0,
          marginBottom: 0,
          backgroundColor: '#FF8C61'
        }}
        title="VIEW NOW"
      />
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#5C374C'
    // fontSize: 20,
    // display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'center',
    // border: '1px solid darkblue',
    // marginTop: 15,
    // borderLeft: '0.25',
    // borderRight: '0.25',
    // width: '100'
  },
  name: {
    // fontSize: 30
  },
  image: {},
  users: {}
});
