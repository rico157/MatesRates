import React from 'react';
import { SearchBar } from 'react-native-elements';

export default function ({ search, updateSearch }) {
  return (
    <SearchBar
      containerStyle={{
        backgroundColor: '#944D6F'
      }}
      inputContainerStyle={{
        backgroundColor: '#944D6F'
      }}
      placeholderTextColor="white"
      placeholder="Type Here..."
      onChangeText={updateSearch}
      value={search}
    />
  );
}
