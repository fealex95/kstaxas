import React, { useState } from 'react';
import { useTheme } from 'styled-components';

import KSTaxas from '../../assets/kstaxas.svg';

import {
    Container,
    Header,
    Content,
    InputValue,
    Title,
    ContainerType,
    GroupButtons,
    DebitButton,
    CreditButton,
    CashButton,
} from './styles';

export function Home() {
    const [debito, setDebito] = useState<boolean>(false);
    const [credito, setCredito] = useState<boolean>(false);
    const [dinheiro, setDinheiro] = useState<boolean>(false);

    function handleDebito() {
        setDebito(true);
        setCredito(false);
        setDinheiro(false);
    }

    function handleCredito() {
        setDebito(false);
        setCredito(true);
        setDinheiro(false);
    }

    function handleDinheiro() {
        setDebito(false);
        setCredito(false);
        setDinheiro(true);
    }

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
                        <DebitButton enable={debito} onPress={handleDebito}>
                            <Title> Débito </Title>
                        </DebitButton>
                        <CreditButton enable={credito} onPress={handleCredito}>
                            <Title> Crédito </Title>
                        </CreditButton>
                        <CashButton enable={dinheiro} onPress={handleDinheiro}>
                            <Title>Dinheiro</Title>
                        </CashButton>
                    </GroupButtons>
                </ContainerType>
            </Content>
        </Container>
    )
}