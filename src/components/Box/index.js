import React from 'react';
import {Container, Text, Button, TextButton} from './styles';

export default function Box(props) {
  return (
    <Container>
      <Text>Data: {props.data}</Text>
      <Text>CID: {props.cid}</Text>
      <Text>Causa Principal: {props.causa}</Text>
      <Text>Médico: Dr. {props.medico}</Text>
      <Text>Instituição: {props.instituicao}</Text>
      <Button>
        <TextButton>Visualizar Atestado</TextButton>
      </Button>
    </Container>
  );
}
