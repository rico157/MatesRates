import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Input, AirbnbRating, Button } from 'react-native-elements';
import { gql, useMutation } from '@apollo/client';

const ADD_REVIEW = gql`
  mutation AddReview(
    $rating: Int!
    $body: String!
    $user_id: String!
    $restaurant_id: String!
  ) {
    addReview(
      rating: $rating
      body: $body
      user_id: $user_id
      restaurant_id: $restaurant_id
    ) {
      rating
      body
    }
  }
`;

const ReviewForm = ({ navigation, route }) => {
  const { restaurant_id } = route.params;
  const [rating, setRating] = useState(3);
  const [body, setBody] = useState('');
  const [addReview] = useMutation(ADD_REVIEW);

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
            user_id: 'testing-react',
            restaurant_id
          };
          addReview({ variables: { ...finalState } });
        }}
      />
    </View>
  );
};

export default ReviewForm;
