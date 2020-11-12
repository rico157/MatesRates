import { BottomSheet, SearchBar } from 'react-native-elements';
import React, { useEffect, useState, useRef } from 'react';
import RestaurantList from '../common/RestaurantList';
import { GET_USERS } from '../../utils/queries';
import { useQuery } from '@apollo/client';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';
import { StyleSheet, Text, View } from 'react-native';
import SearchFriendList from '../common/SearchFriendList';

export default function (props) {
  const [search, setSearch] = useState('');
  const { loading, error, data } = useQuery(GET_USERS);

  const [filteredUsers, setUsers] = useState([]);

  const updateSearch = (search) => {
    setSearch(search);
  };

  const prevRef = (value) => {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  };

  const prevSearch = prevRef(search);

  useEffect(() => {
    if (!loading) {
      const copyUsers = [...data.users];
      const newUsers = copyUsers.map((user) => {
        const copyUser = { ...user };
        return copyUser;
      });

      if (search !== prevSearch) {
        const filterUsers = newUsers.filter((user) => {
          return user.name.toLowerCase().includes(search.toLowerCase());
        });

        setUsers(filterUsers);
      }
    }
  });

  if (loading) {
    return (
      <View>
        <Text>loading...</Text>
      </View>
    );
  }

  return (
    <>
      <SearchBar
        placeholder="Type Here..."
        onChangeText={updateSearch}
        value={search}
      />
      <SearchFriendList users={filteredUsers} friends={data.users[0].friends} />
    </>
  );
}
