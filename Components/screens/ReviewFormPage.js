import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Input, AirbnbRating, Button } from 'react-native-elements';
import { gql, useMutation } from '@apollo/client';
import {ADD_REVIEW} from '../../utils/queries'

const ReviewForm = ({ navigation, route }) => {
  const { restaurant_id } = route.params;
  const [rating, setRating] = useState(3);
  const [body, setBody] = useState('');
  const [addReview] = useMutation(ADD_REVIEW);

  console.log(navigation);

  return (
    <View>
      <AirbnbRating
        count={5}
        reviews={['Bad', 'Poor', 'Average', 'Good', 'Excellent']}
        defaultRating={3}
        size={20}
        onFinishRating={(rating) => {
          setRating(rating);
        }}
      />

      <Input placeholder="Body..." onChangeText={(value) => setBody(value)} />
      <Button
        title="Submit"
        onPress={() => {
          const finalState = {
            rating,
            body,
            user_id: "5fa28b052c117a5240501f6e",
            restaurant_id
          };
          addReview({ variables: { ...finalState } });
          navigation.goBack()
        }}
      />
    </View>
  );
};

export default ReviewForm;
