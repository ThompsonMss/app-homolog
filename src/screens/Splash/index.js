import React, {useState} from 'react';
import {Container, Title} from './styles';

import ResetActions from '../../utils/ResetActions';

export default function Splash(props) {
  function proxScreen() {
    setTimeout(() => {
      props.navigation.dispatch(ResetActions('Login'));
    }, 3000);
  }

  proxScreen();

  return (
    <Container>
      <Title>HOMOLOG</Title>
    </Container>
  );
}
