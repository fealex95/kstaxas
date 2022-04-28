import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { Container, Button, Text } from './styles';

interface ButtonProps {
    title: string;
}

export function Button({ title, ...rest }: ButtonProps) {
    return (
        <Container>
            <Button title='Texto'>

            </Button>
        </Container>
    )
}