import React from 'react';
import { Container, Text } from './styles';

import Header from '../../components/Header';

export default function Config(props) {
  return (
    <>
      <Header click={() => props.navigation.navigate('Login')} text="Configurações" textButton="Sair" />
      <Container>
        <Text>Config</Text>
      </Container>
    </>
  );
}
