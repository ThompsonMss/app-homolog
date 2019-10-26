import React from 'react';
import {Container, WrapperFilter, TextFilter, FlatList} from './styles';

import Header from '../../components/Header';
import Box from '../../components/Box';

const listAtestados = {
  atestados: [
    {
      id: 1,
      data: '26/10/2019 11:55',
      cid: 'S34',
      causa: 'Dor de Cabeça',
      medico: 'Augusto',
      instituicao: 'Hospital Regional de Ceilândia',
    },
    {
      id: 2,
      data: '22/10/2019 13:55',
      cid: 'S34',
      causa: 'Dor de Cabeça',
      medico: 'Augusto',
      instituicao: 'Hospital Regional de Ceilândia',
    },
    {
      id: 3,
      data: '26/10/2019 11:55',
      cid: 'S34',
      causa: 'Dor de Cabeça',
      medico: 'Augusto',
      instituicao: 'Hospital Regional de Ceilândia',
    },
    {
      id: 4,
      data: '26/10/2019 11:55',
      cid: 'S34',
      causa: 'Dor de Cabeça',
      medico: 'Augusto',
      instituicao: 'Hospital Regional de Ceilândia',
    },
    {
      id: 5,
      data: '26/10/2019 11:55',
      cid: 'S34',
      causa: 'Dor de Cabeça',
      medico: 'Augusto',
      instituicao: 'Hospital Regional de Ceilândia',
    },
  ],
};

export default function List(props) {
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
              data={item.data}
              cid={item.cid}
              causa={item.causa}
              medico={item.medico}
              instituicao={item.instituicao}
            />
          )}
          keyExtractor={item => item.id}
        />
      </Container>
    </>
  );
}
