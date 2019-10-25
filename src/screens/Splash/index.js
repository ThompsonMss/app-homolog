import React from 'react';
import {Container, Title} from './styles';

import ResetActions from '../../utils/ResetActions';

import Icone from 'react-native-vector-icons/Fontisto';

export default function Splash(props) {
  function proxScreen() {
    setTimeout(() => {
      props.navigation.dispatch(ResetActions('Login'));
    }, 3000);
  }

  proxScreen();

  return (
    <Container>
      <Icone name="doctor" size={60} color="#000" />
      <Title>HOMOLOG</Title>
    </Container>
  );
}
