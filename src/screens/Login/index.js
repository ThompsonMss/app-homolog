import React from 'react';
import {
  Container,
  WrapperForm,
  WrapperRegister,
  ButtonRegister,
  TextRegister,
  Logo,
  Title,
  WrapperInput,
  TextIcon,
  Input,
  Button,
  TextButton,
} from './styles';

import Icon from 'react-native-vector-icons/AntDesign';
import Icone from 'react-native-vector-icons/Fontisto';

export default function Login(props) {
  return (
    <Container>
      <WrapperForm>
        <Icone name="doctor" size={60} color="#000" />
        <Logo>HOMOLOG</Logo>
        <Title>Login</Title>
        <WrapperInput>
          <TextIcon>
            <Icon name="user" size={30} color="#000" />
          </TextIcon>
          <Input />
        </WrapperInput>
        <WrapperInput>
          <TextIcon>
            <Icon name="key" size={30} color="#000" />
          </TextIcon>
          <Input secureTextEntry={true} />
        </WrapperInput>
        <Button activeOpacity={0.7}>
          <TextButton>Entrar</TextButton>
        </Button>
      </WrapperForm>
      <WrapperRegister>
        <ButtonRegister activeOpacity={0.2} >
          <TextRegister>Não tem cadastro?</TextRegister>
        </ButtonRegister>
      </WrapperRegister>
    </Container>
  );
}
