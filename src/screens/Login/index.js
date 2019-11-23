import React from 'react';
import { Dimensions, Alert, AsyncStorage } from 'react-native';
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
import Spinner from '../../components/Spinner';

import api from '../../services/api';
import { connect } from 'react-redux';
import { setPaciente } from '../../store/actions/UserAction';

function Login(props) {
  const [indicator, setIndicator] = React.useState(false);
  const [email, setEmail] = React.useState('ronaldo@ronaldo.com');
  const [senha, setSenha] = React.useState('Ronaldo');

  let { height, width } = Dimensions.get('window');

  const logar = async () => {
    if (email == '' || senha == '') {
      alert('Preencha todos os campos');
    } else {
      try {
        setIndicator(true);
        const response = await api.post('/pacientes/login', {
          email,
          senha,
        });
        setIndicator(false);

        if (response.data != 'Login Incorreto') {
          props.setPaciente(
            response.data.Nome,
            response.data.CPF,
            response.data.Telefone,
            response.data.Cep,
            response.data.UF,
            response.data.Cidade,
            response.data.Rua,
            response.data.Numero,
            response.data.Usuario.id,
            response.data.Usuario.email,
          );

          props.navigation.navigate('Home');
        }
      } catch (error) {
        setIndicator(false);
        Alert.alert('Falha', 'Suas crendencias estão incorretas.', [
          { text: 'OK', onPress: () => null },
        ]);
      }
    }
  };

  let spinner = {
    colorBackground: 'rgba(0,0,0,0.4)',
    color: '#fff',
    text: 'Carregando',
    textColor: '#FFF',
  };

  return (
    <Container>
      {indicator === true && <Spinner {...spinner} />}
      <WrapperForm>
        <Icone name="doctor" size={60} color="#000" />
        <Logo>HOMOLOG</Logo>
        <Title>Login</Title>
        <WrapperInput tamanho={width}>
          <TextIcon>
            <Icon name="user" size={30} color="#000" />
          </TextIcon>
          <Input value={email} onChangeText={e => setEmail(e)} />
        </WrapperInput>
        <WrapperInput tamanho={width}>
          <TextIcon>
            <Icon name="key" size={30} color="#000" />
          </TextIcon>
          <Input
            value={senha}
            onChangeText={e => setSenha(e)}
            secureTextEntry={true}
          />
        </WrapperInput>
        <Button onPress={logar} tamanho={width} activeOpacity={0.7}>
          <TextButton>Entrar</TextButton>
        </Button>
      </WrapperForm>
      <WrapperRegister>
        <ButtonRegister
          onPress={() => props.navigation.navigate('Register')}
          activeOpacity={0.2}>
          <TextRegister>Não tem cadastro?</TextRegister>
        </ButtonRegister>
      </WrapperRegister>
    </Container>
  );
}

const mapStateToProps = state => ({
  paciente: state.paciente,
});

const mapDispatchToProps = {
  setPaciente,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
