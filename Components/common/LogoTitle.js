import React from 'react';
import { Image } from 'react-native';

export default function LogoTitle() {
  return (
    <Image
      style={{
        width: 40,
        height: 40,
        marginRight: 25,
        marginLeft: 15
      }}
      source={require('../../Styling/pizza.svg')}
    />
  );
}
