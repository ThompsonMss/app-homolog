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
  margin-top: 10;
  margin-bottom: 10;
`;

export const WrapperInput = styled.View`
  border: none;
  width: 300;
  background-color: #fff;
  margin-top: 10;
  border-radius: 5;
  flex-direction: row;
  align-items: center;
  padding-left: 5;
  padding-right: 5;
`;

export const TextIcon = styled.Text`
  text-align: center;
`;

export const Input = styled.TextInput`
  border: none;
  flex: 1;
  background-color: transparent;
  border-radius: 5;
  font-size: 20;
`;

export const Button = styled.TouchableOpacity`
  border: none;
  height: 50;
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
