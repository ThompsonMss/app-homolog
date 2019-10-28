import React from 'react';
import {
  ScrollView,
  Container,
  ButtonSave,
  WrapperTextInput,
  Text,
  Input,
  Picker,
  WrapperButton,
  Button,
  TextButton,
} from './styles';

import Icon from 'react-native-vector-icons/Feather';
import Header from '../../components/Header';

function Config(props) {
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

  const salvar = () => {
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
    }
  };

  return (
    <>
      <Header
        click={() => props.navigation.navigate('Login')}
        text="Meu Perfil"
        textButton="Sair"
      />
      <ScrollView>
        <Container>
          <WrapperTextInput>
            <Text>Nome</Text>
            <Input value={nome} editable={false} />
          </WrapperTextInput>
          <WrapperTextInput>
            <Text>CPF</Text>
            <Input
              value={cpf}
              editable={false}
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
            <Text>Telefone</Text>
            <Input
              value={telefone}
              onChangeText={e => setTelefone(e)}
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
          <WrapperButton>
            <Button onPress={salvar} activeOpacity={0.7} color="#000">
              <TextButton>Salvar</TextButton>
            </Button>
          </WrapperButton>
          <WrapperButton>
            <Button activeOpacity={0.7} color="red">
              <TextButton>Excluir Conta</TextButton>
            </Button>
          </WrapperButton>
        </Container>
      </ScrollView>
    </>
  );
}

export default Config;
