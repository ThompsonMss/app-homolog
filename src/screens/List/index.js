import React, { useState, useEffect } from 'react';
import { Dimensions, Alert } from 'react-native';

import {
  Container,
  FlatList,
  Text,
  ContentFilter,
  TextFilter,
  TextFilterInput,
  ContentInput,
  ContentUniqueInput,
  ButtonFilter,
  TextButton
} from './styles';

import api from '../../services/api';
import { connect } from 'react-redux';

import { invertingDate } from '../../utils/convertToDate';

import { TextInputMask } from 'react-native-masked-text';

import Header from '../../components/Header';
import Box from '../../components/Box';
import EmptyList from '../../components/EmptyList';
import Initialized from '../../components/Initialized';


function List(props) {

  const [initialized, setInitialized] = useState(true);
  const [filter, setFilter] = useState('Listando todos os atestados');

  const [listAtestados, setListAtestados] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  let { height, width } = Dimensions.get('window');

  const [dataDe, setDataDe] = React.useState('');
  const [dataAte, setDataAte] = React.useState('');

  //Chamada API
  const getAtest = async () => {
    setFilter('Listando todos os atestados');
    setInitialized(false);
    setDataDe('');
    setDataAte('');

    try {
      const dados = await api.post('/pacientes/atestados', {
        cpf: props.paciente.cpf,
      });

      setListAtestados(dados.data);
      setRefreshing(false);
    } catch (error) {
      alert(error);
      setRefreshing(false);
    }
  };

  const handleFilter = async () => {
    if (dataDe == '' || dataAte == '') {
      Alert.alert('Opa!', 'Por favor preencha os campos de data', [
        { text: 'OK', onPress: () => null }
      ]);
    } else {
      let dataini = new Date(invertingDate(dataDe)).getTime();
      let dataate = new Date(invertingDate(dataAte)).getTime();
      if (dataini > dataate) {
        Alert.alert('Opa!', 'A data inicial não pode ser maior que a data final', [
          { text: 'OK', onPress: () => null }
        ]);
      } else {
        //Recarregando Lista
        try {
          const dados = await api.post('/pacientes/atestados', {
            cpf: props.paciente.cpf,
          });

          setListAtestados(dados.data);
        } catch (error) {
          alert(error);
        }

        let filterAtestados = listAtestados.filter(atestados => {
          let data = new Date(atestados.timestamp).getTime();
          if (data >= dataini && data <= dataate) {
            return atestados;
          }
        });

        setListAtestados(filterAtestados);
        setFilter(`Período de ${dataDe} até ${dataAte} - Recarregue a página para usar o filtro novamente. Basta puxar para baixo.`);
      }
    }
  }

  const stylesInputMask = {
    height: 35,
    flex: 1,
    fontSize: 15,
    backgroundColor: '#fff',
    paddingLeft: 10,
    paddingTop: 0,
    paddingBottom: 0,
  };

  function handleToViewAtest(item) {
    props.navigation.navigate('Detail', { atestado: item });
  }

  const handleRefresh = () => {
    setRefreshing(true);
    getAtest();
  }

  if (initialized) {
    return (
      <>
        <Header
          click={() => props.navigation.navigate('Login')}
          text="Atestados"
          textButton="Sair"
        />
        <Container>
          <Initialized click={() => getAtest()} />
        </Container>
      </>
    );
  } else {
    return (
      <>
        <Header
          click={() => props.navigation.navigate('Login')}
          text="Atestados"
          textButton="Sair"
        />
        <Container>
          <ContentFilter>
            <TextFilter>Filtre por data</TextFilter>
            <ContentInput>
              <ContentUniqueInput left={0} right={5}>
                <TextFilterInput>De:</TextFilterInput>
                <TextInputMask
                  keyboardType="numeric"
                  type={'custom'}
                  options={{
                    mask: '99-99-9999',
                  }}
                  placeholder="26-10-2019"
                  value={dataDe}
                  onChangeText={text => setDataDe(text)}
                  style={stylesInputMask}
                />
              </ContentUniqueInput>
              <ContentUniqueInput left={5} right={5}>
                <TextFilterInput>Até:</TextFilterInput>
                <TextInputMask
                  keyboardType="numeric"
                  type={'custom'}
                  options={{
                    mask: '99-99-9999',
                  }}
                  placeholder="26-10-2019"
                  value={dataAte}
                  onChangeText={text => setDataAte(text)}
                  style={stylesInputMask}
                />
              </ContentUniqueInput>
            </ContentInput>
            <ButtonFilter onPress={() => handleFilter()}>
              <TextButton>Buscar</TextButton>
            </ButtonFilter>
          </ContentFilter>
          {filter != '' && <Text>{filter}</Text>}
          <FlatList
            ListEmptyComponent={() => (<EmptyList />)}
            data={listAtestados}
            renderItem={({ item }) => (
              <Box
                id={item.id}
                data={item.timestamp}
                cid={item.cid}
                crm={item.crm}
                medico={item.nome}
                click={() => handleToViewAtest(item)}
              />
            )}
            keyExtractor={item => item.id + ''}
            refreshing={refreshing}
            onRefresh={handleRefresh}
          />
        </Container>
      </>
    );
  }

}

const mapStateToProps = state => ({
  paciente: state.paciente,
});

export default connect(mapStateToProps)(List);
