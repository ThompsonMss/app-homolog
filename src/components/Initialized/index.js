import React from 'react';
import { Container, Text, Image, Button, TextButton } from './styles';

import Logo from '../../assets/images/bem.png'

export default function Initialized(props) {
    return (
        <Container>
            <Image source={Logo} />
            <Text>Bem vindo ao Homolog!</Text>
            <Text>Aqui você encontra todos os seus atestados de rede pública e privada.</Text>
            <Button onPress={props.click}>
                <TextButton>Buscar</TextButton>
            </Button>
        </Container>
    );
};