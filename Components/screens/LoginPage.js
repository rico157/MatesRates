import React, { Component } from 'react';
import Icon from 'react-native-vector-icons';
import { Button, Input, Card } from 'react-native-elements';
import { View, StyleSheet, Image, SafeAreaView } from 'react-native';
import pizza from '../../assets/pizza.png';

function LoginPage(props) {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={{
            alignSelf: 'center',
            height: '105%',
            width: '70%',
          }}
          source={pizza}
        />
      </View>
      <Card
        containerStyle={{
          borderRadius: 12,
          width: 300,
          marginTop: 10,
          marginBottom: 10,
        }}
      >
        <Input placeholder="Enter username here..." label="Username: " />
        <Input
          placeholder="Enter password here..."
          label="Password: "
          secureTextEntry={true}
        />
        <Button
          buttonStyle={{
            borderRadius: 20,
            padding: 10,
            backgroundColor: '#FF8C61',
          }}
          onPress={() => props.setUser(true)}
          title="LOG IN"
        />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#5C374C',
    flex: 1,
    alignItems: 'center',
  },
  imageContainer: {
    marginTop: 34,
    height: '30%',
    width: '95%',
    marginBottom: 10,
  },
});

export default LoginPage;
