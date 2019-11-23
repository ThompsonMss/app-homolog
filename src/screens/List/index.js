import React, { useState, useEffect } from 'react';
import { Dimensions } from 'react-native';
import {
  Container,
  FlatList,
  BottomSheetContent,
  TextSheetContent,
  TextIcon,
  WrapperInput,
  Button,
  TextButton,
  BottomSheetHeader,
  SheetIndicator,
  Indicator,
  TextSheetHeader,
  Text
} from './styles';

import api from '../../services/api';
import { connect } from 'react-redux';

import BottomSheet from 'reanimated-bottom-sheet';
import { TextInputMask } from 'react-native-masked-text';

import Icon from 'react-native-vector-icons/Fontisto';

import Header from '../../components/Header';
import Box from '../../components/Box';
import EmptyList from '../../components/EmptyList';
import Initialized from '../../components/Initialized';


function List(props) {

  const [initialized, setInitialized] = useState(true);
  const [filter, setFilter] = useState('');

  const [listAtestados, setListAtestados] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  //Chamada API
  const getAtest = async () => {
    setInitialized(false);
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

  const handleFilter = () => {
    filterAtestados = listAtestados.filter(() => {
      const parseDateDe = dataDe;
      const parseDateAte = dataAte;
      console.tron.log('De: ', parseDateDe);
      console.tron.log('Ate: ', parseDateAte);
    });
  }

  const renderHeader = () => (
    /* render */
    <BottomSheetHeader>
      <SheetIndicator>
        <Indicator />
      </SheetIndicator>
      <TextSheetHeader>Filtrar por Data</TextSheetHeader>
    </BottomSheetHeader>
  );

  let { height, width } = Dimensions.get('window');

  const [dataDe, setDataDe] = React.useState('');
  const [dataAte, setDataAte] = React.useState('');

  const stylesInputMask = {
    height: 50,
    width: '93%',
    fontSize: 20,
    backgroundColor: '#fff',
    paddingLeft: 10,
  };

  const renderContent = () => (
    /* render */
    <BottomSheetContent>
      <TextSheetContent>De:</TextSheetContent>
      <WrapperInput tamanho={width}>
        <TextIcon>
          <Icon name="date" size={25} color="#000" />
        </TextIcon>
        <TextInputMask
          type={'custom'}
          options={{
            mask: '99-99-9999',
          }}
          placeholder="25-10-2019"
          value={dataDe}
          onChangeText={text => setDataDe(text)}
          style={stylesInputMask}
        />
      </WrapperInput>
      <TextSheetContent>Até:</TextSheetContent>
      <WrapperInput tamanho={width}>
        <TextIcon>
          <Icon name="date" size={25} color="#000" />
        </TextIcon>
        <TextInputMask
          type={'custom'}
          options={{
            mask: '99-99-9999',
          }}
          placeholder="26-10-2019"
          value={dataAte}
          onChangeText={text => setDataAte(text)}
          style={stylesInputMask}
        />
      </WrapperInput>
      <Button
        onPress={() => alert('Eu')}
        tamanho={width}
        activeOpacity={0.7}>
        <TextButton>Buscar</TextButton>
      </Button>
    </BottomSheetContent>
  );

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
        <BottomSheet
          snapPoints={[300, 60, 20]}
          initialSnap={[2]}
          renderContent={renderContent}
          renderHeader={renderHeader}
        />
      </>
    );
  }

}

const mapStateToProps = state => ({
  paciente: state.paciente,
});

export default connect(mapStateToProps)(List);
