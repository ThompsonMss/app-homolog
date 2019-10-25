import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #eee;
`;

export const WrapperForm = styled.View`
  flex: 9;
  justify-content: center;
  align-items: center;
`;

export const WrapperRegister = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ButtonRegister = styled.TouchableOpacity`
  height: 30;
`;

export const TextRegister = styled.Text`
  font-size: 20;
`;

export const Logo = styled.Text`
  font-size: 30;
`;

export const Title = styled.Text`
  font-size: 25;
  margin-top: 40;
  margin-bottom: 10;
`;

export const Input = styled.TextInput`
  border: none;
  height: 40;
  width: 300;
  background-color: #fff;
  margin-top: 10;
  border-radius: 5;
`;

export const Button = styled.TouchableOpacity`
  border: none;
  height: 40;
  width: 300;
  background-color: #000;
  margin-top: 10;
  border-radius: 5;
  justify-content: center;
  align-items: center;
`;

export const TextButton = styled.Text`
  font-size: 20;
  color: #fff;
`;
