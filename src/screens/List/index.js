import React from 'react';
import {Container, Text} from './styles';

import Header from '../../components/Header';

export default function List(props) {
  return (
    <>
      <Header click={() => props.navigation.navigate('Login')} text="Atestados" textButton="Sair" />
      <Container>
        <Text>List</Text>
      </Container>
    </>
  );
}
