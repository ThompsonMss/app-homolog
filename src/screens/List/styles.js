import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding-left: 10;
  padding-right: 10;
  background: #eee;
  padding-top: 20;
`;

export const WrapperFilter = styled.View`
  height: 100;
  width: 95%;
  border-radius: 5;
  background-color: #999;
  margin-bottom: 10;
  padding-top: 10;
  padding-right: 10;
  padding-left: 10;
  padding-bottom: 10;
`;

export const TextFilter = styled.Text`
  color: white;
  font-size: 15;
`;

export const FlatList = styled.FlatList`
  width: 100%;
  padding-left: 10;
  padding-right: 10;
`;
