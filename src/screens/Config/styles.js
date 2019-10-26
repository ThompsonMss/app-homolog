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

export const ButtonSave = styled.TouchableOpacity`
  height: 40;
  width: 40;
  background: transparent;
  margin-right: 10;
  justify-content: center;
  align-items: center;
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

export const WrapperButton = styled.View`
  width: 90%;
  margin-bottom: 10;
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  height: 50;
  background: ${props => props.color};
  font-size: 16;
  align-items: center;
  padding-left: 10;
  border-radius: 5;
  justify-content: center;
`;

export const TextButton = styled.Text`
  color: #fff;
  font-size: 20;
`;
