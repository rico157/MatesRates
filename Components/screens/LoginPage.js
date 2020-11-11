import React, { Component } from 'react';
import Icon from 'react-native-vector-icons';
import { Input } from 'react-native-elements';
import { Button, View } from 'react-native';

function LoginPage(props) {

    console.log(props);

    return (
        <View>
            <Input 
            placeholder="Enter username here..."
            label="Username: "
            />
            <Input 
            placeholder="Enter password here..."
            label="Password: "
            secureTextEntry={true}
            />
            <Button onPress={() => props.setUser(true)} title="LOG IN"/>
        </View>
    )
   

}

export default LoginPage;