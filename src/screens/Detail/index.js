import React from 'react';
import {ScrollView} from 'react-native';
import { 
  Container,
  Wrapper, 
  TextInstituicao, 
  TextAtestado, 
  TextContent, 
  TextContentkey, 
  TextDeclaracao,
  ButtonLembrete,
  TextLembrete
} from './styles';

export default function Detail(props) {

  const atestado = props.navigation.state.params.atestado;

  return (
    <ScrollView style={{flex: 1, backgroundColor: '#eee'}}>
    <Container>
      <Wrapper>
        <TextInstituicao>
          {atestado.instituicao}
        </TextInstituicao>
        <TextAtestado>
          ATESTADO
        </TextAtestado>
        <TextDeclaracao align="right" marginbottom={12}>
          Atesto para os devidos fins, que o(a)
        </TextDeclaracao>
        <TextContent>
          Sr(a) Paciente X,
        </TextContent>
        <TextContent>
          portador do CPF 06320315115,
        </TextContent>
        <TextContent>
          residente em QNM 214656565656,
        </TextContent>
        <TextDeclaracao align="left" marginbottom={0}>
          esteve sob meus cuidados profissionais no período {atestado.data}.
          Necessitando o(a) mesmo(a) de 7 dias de convalescença.
        </TextDeclaracao>
        <TextContent>
          CID: {atestado.cid}
        </TextContent>
        <TextContentkey>
          Chave segura do Atestado: d3a2d645dada54d56a4d56
        </TextContentkey>
        <TextContent>
          Médico: Dr. {atestado.medico}
        </TextContent>
        <TextContent>
          CRM: {atestado.crm}
        </TextContent>
      </Wrapper>
      <ButtonLembrete onPress={() => props.navigation.navigate('Register')} activeOpacity={0.2} >
          <TextLembrete>LEMBRETES</TextLembrete>
      </ButtonLembrete>
    </Container>
    </ScrollView>
  );
}