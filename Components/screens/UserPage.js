import React from 'react';
import { Text, View } from 'react-native';
import { Image } from 'react-native-elements';

export default function UserPage({ route }) {
  console.log(route);
  const { name, review_count, avatar_url } = route.params;
  return (
    <View>
      <Text>{name}</Text>
      <Text>Reviews: {review_count}</Text>
      <Image source={{ uri: avatar_url }} style={{ width: 200, height: 200 }} />
      
    </View>
  );
}
