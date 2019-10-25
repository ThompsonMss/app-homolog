import React from 'react';
import {Text, ActivityIndicator} from 'react-native';
import {Container} from './styles';

const Spinner = props => {
  let {colorBackground, color, text, textColor} = props;

  return (
    <Container colorBackground={colorBackground}>
      <ActivityIndicator size="large" color={color} />
      <Text style={{color: textColor}}>{text}</Text>
    </Container>
  );
};

export default Spinner;
