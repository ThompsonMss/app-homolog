import React from 'react';
import {View, Text, TouchableHighlight} from 'react-native';

// import { Container } from './styles';

export default function Login(props) {
  return (
    <View>
      <TouchableHighlight onClick={() => props.navigation.navigate('Splash')}>
        <Text>Splash</Text>
      </TouchableHighlight>
    </View>
  );
}
