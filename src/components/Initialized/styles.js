import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background: #eee;
    padding-left: 20;
    padding-right: 20;
    padding-top: 20;
    padding-bottom: 20;
`;

export const Image = styled.Image`
    width: 200;
    height: 200;
`;

export const Text = styled.Text`
    margin-top: 20; 
    font-size: 20;
    color: #999;
    text-align: center;
`;

export const Button = styled.TouchableOpacity`
    margin-top: 20;
    width: 200;
    height: 60;
    background: #000;
    justify-content: center;
    align-items: center;
`;

export const TextButton = styled.Text`
    font-size: 20;
    color: #fff;
`;