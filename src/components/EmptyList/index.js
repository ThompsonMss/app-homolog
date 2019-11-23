import React from 'react';
import { Container, Text } from './styles';

import Icon from 'react-native-vector-icons/Entypo'

export default function EmptyList() {
    return (
        <Container>
            <Icon name="clipboard" color="#0f0f0" size={30} />
            <Text>Não existe atestados registrados no seu documento.</Text>
        </Container>
    );
};