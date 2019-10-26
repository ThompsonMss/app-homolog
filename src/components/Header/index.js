import React from 'react';
import {Container, Text, Button, TextButton} from './styles';

export default function Header(props){
    return(
        <Container>
            <Text>
                {props.text}       
            </Text>
            <Button onPress={props.click}>
                <TextButton>
                    {props.textButton}
                </TextButton>
            </Button>
        </Container>
    );
}