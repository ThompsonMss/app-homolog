import React from 'react';
import {Dimensions} from 'react-native';
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
} from './styles';

import BottomSheet from 'reanimated-bottom-sheet';
import {TextInputMask} from 'react-native-masked-text';

import Icon from 'react-native-vector-icons/Fontisto';

import Header from '../../components/Header';
import Box from '../../components/Box';

const listAtestados = {
  atestados: [
    {
      id: 1,
      data: '26/10/2019 11:55',
      cid: 'S34',
      crm: '123456',
      medico: 'Augusto',
      instituicao: 'Hospital Regional de Ceilândia',
    },
    {
      id: 2,
      data: '22/10/2019 13:55',
      cid: 'S43',
      crm: '654321',
      medico: 'Roger',
      instituicao: 'Hospital das Clínicas',
    },
  ],
};

export default function List(props) {
  const renderHeader = () => (
    /* render */
    <BottomSheetHeader>
      <SheetIndicator>
        <Indicator />
      </SheetIndicator>
      <TextSheetHeader>Filtrar por Data</TextSheetHeader>
    </BottomSheetHeader>
  );

  let {height, width} = Dimensions.get('window');

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
        onPress={() => props.navigation.navigate('Home')}
        tamanho={width}
        activeOpacity={0.7}>
        <TextButton>Buscar</TextButton>
      </Button>
    </BottomSheetContent>
  );

  function handleToViewAtest(item) {
    props.navigation.navigate('Detail', {atestado: item});
  }

  return (
    <>
      <Header
        click={() => props.navigation.navigate('Login')}
        text="Atestados"
        textButton="Sair"
      />
      <Container>
        <FlatList
          data={listAtestados.atestados}
          renderItem={({item}) => (
            <Box
              id={item.id}
              data={item.data}
              cid={item.cid}
              crm={item.crm}
              medico={item.medico}
              instituicao={item.instituicao}
              click={() => handleToViewAtest(item)}
            />
          )}
          keyExtractor={item => item.id + ''}
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
