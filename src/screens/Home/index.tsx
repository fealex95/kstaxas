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
    ComissionContainer,
    Comission,
    ResultContainer,
    Receive,
    ResultText,
    ResultValue,
    ComissionDiscount,
    NetValue,
    Discount
} from './styles';

export function Home() {
    const [debito, setDebito] = useState<boolean>(false);
    const [credito, setCredito] = useState<boolean>(false);
    const [dinheiro, setDinheiro] = useState<boolean>(false);
    const [isComission, setIsComission] = useState<boolean>(false);
    const theme = useTheme();

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

                <ComissionContainer>
                    <Title>Comissão</Title>
                    <Comission
                        trackColor={{ false: theme.colors.primaryColorDark, true: theme.colors.secondaryColor }}
                        thumbColor={isComission ? theme.colors.secondaryColorDark : theme.colors.secondaryColorLight}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={setIsComission}
                        value={isComission}
                    />
                </ComissionContainer>
                <ResultContainer>
                    <Receive>
                        <ResultText>Recebido: </ResultText>
                        <ResultValue>R$ 1000,00</ResultValue>
                    </Receive>
                    <Discount>
                        <ResultText>Desconto: </ResultText>
                        <ResultValue>- R$ 100,00</ResultValue>
                    </Discount>
                    <ComissionDiscount>
                        <ResultText>Comissão: </ResultText>
                        <ResultValue>- R$ 300,00</ResultValue>
                    </ComissionDiscount>
                    <NetValue>
                        <ResultText>Liquido: </ResultText>
                        <ResultValue>R$ 600,00</ResultValue>
                    </NetValue>
                </ResultContainer>
            </Content>
        </Container>
    )
}