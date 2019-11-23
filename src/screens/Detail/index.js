import React from 'react';
import { ScrollView } from 'react-native';
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
import { connect } from 'react-redux';

function Detail(props) {

  const atestado = props.navigation.state.params.atestado;

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#eee' }}>
      <Container>
        <Wrapper>
          <TextAtestado>
            ATESTADO
        </TextAtestado>
          <TextDeclaracao align="right" marginbottom={12}>
            Atesto para os devidos fins, que o(a)
        </TextDeclaracao>
          <TextContent>
            Sr(a) {props.paciente.nome},
        </TextContent>
          <TextContent>
            portador do CPF {props.paciente.cpf},
        </TextContent>
          <TextContent>
            residente em {props.paciente.cidade}, rua {props.paciente.rua} e número {props.paciente.numero} - {props.paciente.uf},
        </TextContent>
          <TextDeclaracao align="left" marginbottom={0}>
            esteve sob meus cuidados profissionais no período {atestado.timestamp}.
            Necessitando o(a) mesmo(a) de {atestado.dias} dia(s) de convalescença.
        </TextDeclaracao>
          <TextContent>
            CID: {atestado.cid}
          </TextContent>
          <TextContentkey>
            Chave segura do Atestado: {atestado.hash}
          </TextContentkey>
          <TextContent>
            Médico: Dr. {atestado.nome}
          </TextContent>
          <TextContent>
            CRM: {atestado.crm}
          </TextContent>
        </Wrapper>
        <ButtonLembrete onPress={() => props.navigation.navigate('Lembrete', { idAtestado: atestado.id })} activeOpacity={0.2} >
          <TextLembrete>LEMBRETES</TextLembrete>
        </ButtonLembrete>
      </Container>
    </ScrollView>
  );
}

const mapStateToProps = state => ({
  paciente: state.paciente,
});

export default connect(mapStateToProps)(Detail);