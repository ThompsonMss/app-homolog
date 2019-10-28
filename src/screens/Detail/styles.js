import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    align-items: center;
    background-color: #eee;
    padding-top: 10;
    padding-left: 10;
    padding-right: 10;
    padding-bottom: 10;
`;

export const Wrapper = styled.View`
    width: 100%;
    padding-top: 10;
    padding-left: 10;
    padding-right: 10;
    padding-bottom: 10;
    background-color: #fff;
    elevation: 3;
`;

export const TextInstituicao = styled.Text`
    text-align: center;
    color: #999;
    font-size: 25;
    font-weight: bold;
    border-bottom-width: 1;
    border-color: #999;
    margin-bottom: 10;
`;

export const TextAtestado = styled.Text`
    text-align: center;
    color: #000;
    font-size: 25;
    font-weight: bold;
    margin-bottom: 10;
`;

export const TextContent = styled.Text`
    font-size: 20;
    font-style: italic;
`;

export const TextDeclaracao = styled.Text`
    font-size: 20;
    font-style: italic;
    text-align: ${props => props.align};
    margin-bottom: ${props => props.marginbottom};
`;

export const TextContentkey = styled.Text`
    font-size: 20;
    color: red;
    margin-top: 15;
    margin-bottom: 10;
`;

export const ButtonLembrete = styled.TouchableOpacity`
  border: none;
  height: 50;
  width: 100%;
  background-color: #000;
  margin-top: 10;
  border-radius: 5;
  justify-content: center;
  align-items: center;
`;

export const TextLembrete = styled.Text`
  font-size: 20;
  color: #fff;
`;
