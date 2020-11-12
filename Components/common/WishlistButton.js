import { useMutation } from '@apollo/client';
import React from 'react';
import { Button, View } from 'react-native';
import { ADD_TO_WISHLIST } from '../../utils/queries';
import { CheckBox } from 'react-native-elements';

export default ({ restaurant_id }) => {
  const [addWishlist, data] = useMutation(ADD_TO_WISHLIST);

  return (
    <CheckBox
      containerStyle={{ alignContent: 'flex-end' }}
      iconType="ionicon"
      checkedIcon="ios-star"
      uncheckedIcon="ios-star-outline"
      checkedColor="#FF8C61"
      checked={true}
      onPress={() =>
        addWishlist({
          variables: { restaurant_id, user_id: '5fa91e3486083c1f16e6ffa4' }
        })
      }
    />
  );
};
