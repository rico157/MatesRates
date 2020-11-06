import React, { useState } from 'react';
import { Text, View} from 'react-native';
import { Input, AirbnbRating, Button } from 'react-native-elements';
import {gql, useMutation} from "@apollo/client"

const ADD_REVIEW = gql`
  mutation{
    addReview(rating: ${rating}, body: ${body}, user_id: "1234", restaurant_id: "456") {
    body
    rating
    }
  }
`;

const ReviewForm = (props) => {
  console.log(props);
  const [rating, setRating] = useState(3);
  const [body, setBody] = useState('');
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
      <Button title="Submit" onPress={()=>{
        const finalState = {rating, body}

      }}/>
    </View>
  );
};

export default ReviewForm;
