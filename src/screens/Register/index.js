import React from 'react';
import {Dimensions, Alert} from 'react-native';
import {
  ScrollView,
  Container,
  WrapperTextInput,
  Text,
  Input,
  Picker,
  Button,
  TextButton,
} from './styles';

import api from '../../services/api';
import Spinner from '../../components/Spinner';

export default function Register(props) {
  const [indicator, setIndicator] = React.useState(false);

  const [language, setLanguage] = React.useState('Distrito Federal');

  //Inputs
  const [nome, setNome] = React.useState('');
  const [cpf, setCpf] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [senha, setSenha] = React.useState('');
  const [telefone, setTelefone] = React.useState('');
  const [cidade, setCidade] = React.useState('');
  const [rua, setRua] = React.useState('');
  const [numero, setNumero] = React.useState('');
  const [cep, setCep] = React.useState('');

  const estados = [
    'Acre',
    'Alagoas',
    'Amapá',
    'Amazonas',
    'Bahia',
    'Ceará',
    'Distrito Federal',
    'Espírito Santo',
    'Goiás',
    'Maranhão',
    'Mato Grosso',
    'Mato Grosso do Sul',
    'Minas Gerais',
    'Pará',
    'Paraíba',
    'Paraná',
    'Pernanbuco',
    'Piauí',
    'Rio de Janeiro',
    'Rio Grande do Norte',
    'Rio Grande do Sul',
    'Rondônia',
    'Roraima',
    'Santa Catarina',
    'São Paulo',
    'Sergipe',
    'Tocatins',
  ];

  let {height, width} = Dimensions.get('window');

  const salvarPaciente = async () => {
    if (
      nome == '' ||
      cpf == '' ||
      email == '' ||
      senha == '' ||
      telefone == '' ||
      cidade == '' ||
      rua == '' ||
      numero == '' ||
      cep == ''
    ) {
      alert('Preencha todos os campos.');
    } else {
      try {
        setIndicator(true);
        const response = await api.post('/pacientes/create', {
          nome,
          cpf,
          telefone,
          endereco: `Estado: ${language}, Cidade: ${cidade}, Rua: ${rua}, Número: ${numero}, CEP: ${cep}`,
          email,
          senha,
        });
        setIndicator(false);

        if (response.data == 'Erro - Email ja cadastrado - CRM ja cadastrado') {
          Alert.alert('Falha', 'Email ou CPF já cadastrado', [
            {text: 'OK', onPress: () => null},
          ]);
        } else {
          Alert.alert('Sucesso', 'Você foi cadastrado.', [
            {text: 'OK', onPress: () => props.navigation.goBack()},
          ]);
        }
      } catch (error) {
        setIndicator(false);
        alert(error);
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
    <ScrollView>
      {indicator === true && <Spinner {...spinner} />}
      <Container>
        <WrapperTextInput>
          <Text>Nome</Text>
          <Input value={nome} onChangeText={e => setNome(e)} />
        </WrapperTextInput>
        <WrapperTextInput>
          <Text>CPF</Text>
          <Input
            value={cpf}
            onChangeText={e => setCpf(e)}
            keyboardType="numeric"
            maxLength={11}
          />
        </WrapperTextInput>
        <WrapperTextInput>
          <Text>Email</Text>
          <Input
            value={email}
            onChangeText={e => setEmail(e)}
            keyboardType="email-address"
          />
        </WrapperTextInput>
        <WrapperTextInput>
          <Text>Senha</Text>
          <Input
            value={senha}
            onChangeText={e => setSenha(e)}
            secureTextEntry={true}
          />
        </WrapperTextInput>
        <WrapperTextInput>
          <Text>Telefone</Text>
          <Input
            value={telefone}
            onChangeText={e => setTelefone(e)}
            keyboardType="numeric"
            maxLength={11}
          />
        </WrapperTextInput>
        <WrapperTextInput>
          <Text>UF</Text>
          <Picker
            selectedValue={language}
            onValueChange={(itemValue, itemIndex) => setLanguage(itemValue)}>
            {estados.map(estado => (
              <Picker.Item key={estado} label={estado} value={estado} />
            ))}
          </Picker>
        </WrapperTextInput>
        <WrapperTextInput>
          <Text>Cidade</Text>
          <Input value={cidade} onChangeText={e => setCidade(e)} />
        </WrapperTextInput>
        <WrapperTextInput>
          <Text>Rua</Text>
          <Input value={rua} onChangeText={e => setRua(e)} />
        </WrapperTextInput>
        <WrapperTextInput>
          <Text>Número</Text>
          <Input value={numero} onChangeText={e => setNumero(e)} />
        </WrapperTextInput>
        <WrapperTextInput>
          <Text>CEP</Text>
          <Input
            value={cep}
            onChangeText={e => setCep(e)}
            keyboardType="numeric"
            maxLength={8}
          />
        </WrapperTextInput>
        <Button onPress={salvarPaciente} tamanho={width} activeOpacity={0.7}>
          <TextButton>Salvar</TextButton>
        </Button>
      </Container>
    </ScrollView>
  );
}
