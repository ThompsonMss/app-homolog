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
            <Input value="Thompson Matheus Soares da Silva" editable={false} />
          </WrapperTextInput>
          <WrapperTextInput>
            <Text>CPF</Text>
            <Input
              value="1111111111"
              editable={false}
              keyboardType="numeric"
              maxLength={11}
            />
          </WrapperTextInput>
          <WrapperTextInput>
            <Text>Email</Text>
            <Input value="teste@teste.com" keyboardType="email-address" />
          </WrapperTextInput>
          <WrapperTextInput>
            <Text>Senha</Text>
            <Input value="1234556" secureTextEntry={true} />
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
            <Input value="Ceidrogas" />
          </WrapperTextInput>
          <WrapperTextInput>
            <Text>Rua</Text>
            <Input value="Conjunto Z" />
          </WrapperTextInput>
          <WrapperTextInput>
            <Text>Número</Text>
            <Input value="105" />
          </WrapperTextInput>
          <WrapperTextInput>
            <Text>CEP</Text>
            <Input value="72210210" keyboardType="numeric" maxLength={8} />
          </WrapperTextInput>
          <WrapperButton>
            <Button activeOpacity={0.7} color="#000">
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

Config.navigationOptions = ({navigation}) => ({
  headerRight: (
    <ButtonSave activeOpacity={0.7} onPress={() => save(navigation)}>
      <Icon name="save" size={30} color="#000" />
    </ButtonSave>
  ),
});

function save(navigation) {
  alert('Salvando... Teste');
  setTimeout(() => navigation.navigate('Login'), 1000);
}

export default Config;
