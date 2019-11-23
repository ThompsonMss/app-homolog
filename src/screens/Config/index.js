import React from 'react';
import { Alert } from 'react-native';

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

import { connect } from 'react-redux';
import api from '../../services/api';

import Header from '../../components/Header';

function Config(props) {
  const [uf, setUf] = React.useState('Distrito Federal');
  //Inputs
  const [nome, setNome] = React.useState(props.paciente.nome);
  const [cpf, setCpf] = React.useState(props.paciente.cpf);
  const [email, setEmail] = React.useState(props.paciente.email);
  const [telefone, setTelefone] = React.useState(props.paciente.telefone);
  const [cidade, setCidade] = React.useState(props.paciente.cidade);
  const [rua, setRua] = React.useState(props.paciente.rua);
  const [numero, setNumero] = React.useState(props.paciente.numero);
  const [cep, setCep] = React.useState(props.paciente.cep);

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

  const salvar = async () => {
    if (
      nome == '' ||
      cpf == '' ||
      email == '' ||
      telefone == '' ||
      cidade == '' ||
      rua == '' ||
      numero == '' ||
      cep == ''
    ) {
      Alert.alert('Opa', 'Preencha todos os campos', [
        { text: 'OK', onPress: () => null }
      ]);
    } else {
      try {
        const response = await api.put('/pacientes/update', {
          id: props.paciente.id,
          telefone,
          cep,
          uf,
          cidade,
          rua,
          numero
        });

        Alert.alert('Sucesso', 'Dados atualizados com sucesso!', [
          { text: 'OK', onPress: () => null }
        ]);
      } catch (error) {
        alert(error);
      }
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
            <Text>UF</Text>
            <Picker
              selectedValue={uf}
              onValueChange={(itemValue, itemIndex) => setUf(itemValue)}>
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
        </Container>
      </ScrollView>
    </>
  );
}

const mapStateToProps = state => ({
  paciente: state.paciente,
});

export default connect(mapStateToProps)(Config);
