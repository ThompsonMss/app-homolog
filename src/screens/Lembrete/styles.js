import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: #eee;
  padding-top: 10;
  padding-right: 10;
  padding-left: 10;
  padding-bottom: 10;
`;

export const Box = styled.View`
    width: 100%;
    padding-top: 10;
    padding-right: 10;
    padding-left: 10;
    padding-bottom: 10;
    elevation: 3;
    background-color: #fff;
`;

export const Text = styled.Text`
    font-size: 20;
`;

export const Button = styled.TouchableOpacity`
  border: none;
  height: 50;
  width: 100%;
  background-color: ${props => props.color};
  margin-top: 10;
  border-radius: 5;
  justify-content: center;
  align-items: center;
`;

export const TextButton = styled.Text`
  font-size: 20;
  color: white;
`;

export const TextArea = styled.TextInput`
    margin-top: 10;
    border-width: 1;
    border-color: #999;
    width: 100%;
    padding-top: 10;
    padding-left: 10;
    padding-right: 10;
    padding-bottom: 10;
    background-color: #fff;
    font-size: 30;
`;

