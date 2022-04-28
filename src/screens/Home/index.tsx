import React from 'react';
import { useTheme } from 'styled-components';

import KSTaxas from '../../assets/kstaxas.svg';
import { Button } from '../../components/Button';

import {
    Container,
    Header,
    Content,
    InputValue,
    Title,
    ContainerType,
    GroupButtons,
    DebitButton,
    CreditButton
} from './styles';

export function Home() {
    const theme = useTheme();
    return (
        <Container>
            <Header>
                <KSTaxas width={120} height={40} />
            </Header>
            <Content>
                <Title>Coloque o valor para ser calculado</Title>
                <InputValue selectionColor={theme.colors.secondaryColor} keyboardType='number-pad' />
                <ContainerType>
                    <GroupButtons>
                        <Button title="debito" />
                    </GroupButtons>
                </ContainerType>
            </Content>
        </Container>
    )
}