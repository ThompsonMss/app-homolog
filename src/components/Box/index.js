import React from 'react';
import { Container, Text, Button, TextButton } from './styles';

export default function Box(props) {
  return (
    <Container>
      <Text>Data: {props.data}</Text>
      <Text>CID: {props.cid}</Text>
      <Text>CRM: {props.crm}</Text>
      <Text>Médico: Dr. {props.medico}</Text>
      <Button onPress={props.click}>
        <TextButton>Visualizar Atestado</TextButton>
      </Button>
    </Container>
  );
}
