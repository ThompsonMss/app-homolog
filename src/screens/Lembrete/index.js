import React from 'react';
import { AsyncStorage, ScrollView } from 'react-native';

import { Container, Box, Text, Button, TextButton, TextArea } from './styles';

export default function Lembrete(props) {
    const id = props.navigation.state.params.idAtestado;

    const [lembrete, setLembrete] = React.useState('');
    const [input, setInput] = React.useState('');

    const buscandoLembrete = async () => {
        try{
            let lembretes = await AsyncStorage.getItem(`lembrete${id}`);
            lembretes == null
                ? null
                : setLembrete(lembretes);

        }catch(e){
            alert(e);
        }
    };

    const salvarLembrete = async () => {
        if(input === ''){
            alert('Insira um texto.');
        }else{
            try {
                await AsyncStorage.setItem(`lembrete${id}`, input);
                alert('Lembrete Salvo com sucesso!');
                buscandoLembrete();
            } catch (error) {
                alert(error);
            }
        }
    };

    const excluirLembrete = async () => {
        try {
            await AsyncStorage.removeItem(`lembrete${id}`);
            setLembrete('');
        } catch (error) {
            alert(error);
        }
    };

    const temLembrete = () => (
        <>
            <Box>
                <Text>
                    {lembrete}
                </Text>
            </Box>
            <Button color="red"
                onPress={excluirLembrete} activeOpacity={0.2} >
                <TextButton>EXCLUIR</TextButton>
            </Button>
        </>
    );

    const naoLembrete = () => (
        <>
            <Text>Nenhum lembrete cadastrado.</Text>
            <TextArea 
                placeholder="Insira seu lembrete" 
                returnKeyType="send" 
                multiline={true} 
                numberOfLines={10} 
                value={input} 
                onChangeText={e => setInput(e)}
            />
            <Button color="black"
                onPress={salvarLembrete} activeOpacity={0.2} >
                <TextButton>SALVAR</TextButton>
            </Button>
        </>
    );

    buscandoLembrete();

    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#eee' }}>
        <Container>
           {lembrete == '' 
            ? naoLembrete()
            : temLembrete()
           }
        </Container>
        </ScrollView>
    );
}