import React from 'react';
import { View } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import ReviewCard from './ReviewCard';

export default ({ reviews, navigation }) => {
  return (
    <View>
      {reviews.map((review, i) => (
        <ListItem key={i} bottomDivider>
          <Avatar source={{ uri: review.user.avatar_url }} />
          <ListItem.Content>
            <ListItem.Title>{review.user.name}</ListItem.Title>
            <ListItem.Subtitle>{review.body}</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      ))}
    </View>
  );
};
