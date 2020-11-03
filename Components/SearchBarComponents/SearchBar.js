import React from 'react';
import { View, TextInput } from 'react-native';

export default function SearchBar() {
  return (
    <View>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        // onChangeText={(text) => onChangeText(text)}
        // value={value}
      />
    </View>
  );
}
