import React from 'react';
import {View, Text} from 'react-native';

// import { Container } from './styles';

export default function Splash(props) {
  function proxScreen() {
    setTimeout(() => props.navigation.navigate('Login'), 3000);
  }

  proxScreen();

  return (
    <View>
      <Text>Splash</Text>
    </View>
  );
}
