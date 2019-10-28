import React from 'react';
import {View, Text} from 'react-native';

export default function Detail(props) {
  return (
    <View>
      <Text>{props.navigation.state.params.atestado.medico}</Text>
    </View>
  );
}
