import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Image,
  Button
} from 'react-native';
import mock from '../../mock';

export default function FriendList(props) {
  return (
    <SafeAreaView>
      <Text>This is my FriendList</Text>
      <FlatList
        data={mock.users}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Button
              style={styles.name}
              title={item.name}
              onPress={() => {
                props.navigation.navigate('User', {
                  ...item
                });
              }}
            />
            <Text>{item.address}</Text>
            <Text>{item.rating}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  card: {
    fontSize: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid darkblue',
    marginTop: '15px',
    borderLeft: '0.25',
    borderRight: '0.25'
  },
  name: {
    fontSize: '30px'
  }
});
