import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { gql, useMutation, useQuery } from '@apollo/client';
import { ADD_FRIEND, GET_USERS } from '../../utils/queries';
import idLookup from '../../utils/utils';

const FriendForm = () => {
  const { loading, data } = useQuery(GET_USERS);
  const [username, setUsername] = useState('');
  const [friend_id, setFriend_id] = useState('');
  const [addFriend, { error }] = useMutation(ADD_FRIEND);
  // const [user_id] = useState("5fa28b052c117a5240501f6e")
  console.dir(error);

  return (
    <View>
      <Text>Add friend here</Text>
      <Input onChangeText={(value) => setUsername(value)} />
      <Button
        title="Add"
        onPress={() => {
          //const friend = idLookup(username, data.users);
          addFriend({
            variables: {
              user_id: '5fa91e3486083c1f16e6ffa7',
              friend_id: '5fa91e3486083c1f16e6ffa9'
            }
          }).catch((e) => console.dir(e.response));
        }}
      />
    </View>
  );
};
export default FriendForm;
