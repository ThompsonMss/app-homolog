import React from 'react';

import {
  Container,
  WrapperForm,
  WrapperRegister,
  ButtonRegister,
  TextRegister,
  Logo,
  Title,
  Input,
  Button,
  TextButton,
} from './styles';

export default function Login(props) {
  return (
    <Container>
      <WrapperForm>
        <Logo>HOMOLOG</Logo>
        <Title>Login</Title>
        <Input />
        <Input />
        <Button>
          <TextButton>Entrar</TextButton>
        </Button>
      </WrapperForm>
      <WrapperRegister>
        <ButtonRegister>
          <TextRegister>Não tem cadastro?</TextRegister>
        </ButtonRegister>
      </WrapperRegister>
    </Container>
  );
}
