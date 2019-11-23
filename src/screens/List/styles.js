import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding-left: 10;
  padding-right: 10;
  background: #eee;
  padding-top: 10;
  padding-bottom: 10;
`;


export const FlatList = styled.FlatList`
  width: 100%;
`;

export const Text = styled.Text`
  font-size: 14;
  margin-bottom: 10;
  color: #999;
  text-align: center;
`;

export const ContentFilter = styled.View`
  width: 100%;
  background: #ddd;
  border-radius: 5
  margin-bottom: 10;
  padding-top: 5;
  padding-bottom: 5;
  padding-right: 10;
  padding-left: 10;
`;

export const TextFilter = styled.Text`
  font-size: 15;
  margin-bottom: 5;
`;

export const TextFilterInput = styled.Text`
  font-size: 15;
`;

export const ContentInput = styled.View`
  flex-direction: row;
  width: 100%;
  align-items: center;
`;

export const ContentUniqueInput = styled.View`
  flex-direction: row;
  flex: 1;
  background: #fff;
  padding-left: 10;
  align-items: center;
  height: 40;
  border-radius: 5;
  margin-left: ${props => props.left}
  margin-right: ${props => props.right}
`;

export const ButtonFilter = styled.TouchableOpacity`
  height: 30;
  width: 100%;
  background: #000;
  margin-top: 5;
  border-radius: 5;
  justify-content: center;
  align-items: center;
`;

export const TextButton = styled.Text`
  font-size: 15;
  color: #fff;
`;