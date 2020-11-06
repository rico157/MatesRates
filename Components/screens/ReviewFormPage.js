import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Input, Rating, AirbnbRating } from 'react-native-elements';

const ReviewForm = () => {
  const [rating, setRating] = useState(3);
  const [body, setBody] = useState('');
  console.log(rating, body);
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
    </View>
  );
};

export default ReviewForm;
