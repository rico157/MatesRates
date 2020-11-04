import React from 'react';
import { View } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';

export default ({ restaurants }) => {
  return (
    <View>
      {restaurants.map((l, i) => (
        <ListItem key={i} bottomDivider>
          <Avatar source={{ uri: l.images[0] }} />
          <ListItem.Content>
            <ListItem.Title onPress={console.log('pressed')}>
              {l.name}
            </ListItem.Title>
            <ListItem.Subtitle>{l.address}</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      ))}
    </View>
  );
};
