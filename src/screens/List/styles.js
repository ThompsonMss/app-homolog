import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding-left: 10;
  padding-right: 10;
  background: #eee;
  padding-top: 20;
  padding-bottom: 30;
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
`;

export const BottomSheetContent = styled.View`
  background: rgba(0, 0, 0, 0.8);
  height: 100%;
  padding-left: 10;
  padding-top: 10;
  padding-bottom: 10;
  padding-right: 10;
`;

export const TextSheetContent = styled.Text`
  color: #fff;
  font-size: 20;
`;

export const WrapperInput = styled.View`
  border: none;
  width: ${props => props.tamanho - 20};
  background-color: #fff;
  margin-bottom: 10;
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
  width: ${props => props.tamanho - 20};
  background-color: #999;
  border-radius: 5;
  justify-content: center;
  align-items: center;
`;

export const TextButton = styled.Text`
  font-size: 20;
  color: #fff;
`;

export const BottomSheetHeader = styled.View`
  background: rgba(0, 0, 0, 0.8);
  height: 60;
  padding-left: 10;
  padding-right: 10;
  border-bottom-width: 1;
  border-color: #fff;
`;

export const SheetIndicator = styled.View`
  height: 20;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Indicator = styled.View`
  height: 8;
  width: 50;
  background: #999;
  border-radius: 25;
`;

export const TextSheetHeader = styled.Text`
  color: #fff;
  font-size: 20;
  margin-bottom: 10;
`;

export const Text = styled.Text`
  font-size: 14;
  margin-bottom: 10;
  color: #999;
  text-align: left;
`;
