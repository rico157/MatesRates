import { useMutation } from '@apollo/client';
import React from 'react';
import { Button, View } from 'react-native';
import { ADD_TO_WISHLIST } from '../../utils/queries';

export default ({restaurant_id}) => {
    const [addWishlist, data] = useMutation(ADD_TO_WISHLIST);

    return (
        <View>
            <Button title="ADD TO WISHLIST" onPress={() => {
                addWishlist({variables: {restaurant_id, user_id: "5fa91e3486083c1f16e6ffa4"}});
              }} 
              />
        </View>
    )
}