import styled from 'styled-components/native';

export const ScrollView = styled.ScrollView`
  flex: 1;
  background: #eee;
`;

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 20;
`;

export const WrapperTextInput = styled.View`
  width: 90%;
  margin-bottom: 10;
`;

export const Text = styled.Text`
  font-size: 15;
  color: #000;
`;

export const Input = styled.TextInput`
  width: 100%;
  height: 50;
  background: #fff;
  font-size: 16;
  align-items: center;
  padding-left: 10;
  border-radius: 5;
`;

export const Picker = styled.Picker`
  width: 100%;
  height: 50;
  background: #fff;
  align-items: center;
  padding-left: 10;
  border-radius: 5;
`;

export const Button = styled.TouchableOpacity`
  border: none;
  height: 50;
  width: ${props => props.tamanho - 40};
  background-color: #000;
  margin-top: 10;
  margin-bottom: 20;
  border-radius: 5;
  justify-content: center;
  align-items: center;
`;

export const TextButton = styled.Text`
  font-size: 20;
  color: #fff;
`;


