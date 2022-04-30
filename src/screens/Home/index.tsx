import React, { useEffect, useState } from 'react';
import { useTheme } from 'styled-components';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import KSTaxas from '../../assets/kstaxas.svg';
import { api } from '../../services/api';

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
    Discount,
    DividerContainer,
    CashierContainer,
    Amount,
    MoneyContainer
} from './styles';

interface ApiProps {
    debito: {
        type: string;
        tax: number;
    }
    credito: {
        type: string;
        taxes: [
            {
                type: string;
                tax: number;
            }
        ]
    },
    comission: {
        percent: number;
    },
    CashierPercent: number;
    MoneyPercent: number;
}

interface ResultsProps {
    recebido: number,
    recebidoFormatted: string;
    liquido: number,
    liquidoFormatted: string;
    desconto: number,
    descontoFormatted: string;
    comissao: number
    comissaoFormatted: string;
    caixa: number;
    caixaFormatted: string;
    salario: number;
    salarioFormatted: string;

}

export function Home() {
    const [debito, setDebito] = useState<boolean>(false);
    const [credito, setCredito] = useState<boolean>(false);
    const [dinheiro, setDinheiro] = useState<boolean>(false);
    const [isComission, setIsComission] = useState<boolean>(false);
    const [inputValue, setInputValue] = useState("");
    const [apiData, setApiData] = useState<ApiProps>({} as ApiProps);
    const [results, setResults] = useState<ResultsProps>({} as ResultsProps);

    const theme = useTheme();

    function handleDebito() {
        setDebito(true);
        setCredito(false);
        setDinheiro(false);

        setResults(getResults(apiData.debito.tax, isComission));
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

    function getResults(tax: number, comission: boolean) {
        const bruto = Number(inputValue);
        let liquido = 0;
        let comissao = 0;
        if (comission) {
            comissao = (bruto * (apiData.comission.percent / 100));
            liquido = (bruto * (-(tax / 100) + 1)) - (bruto * (apiData.comission.percent / 100));
        } else {
            liquido = (bruto * (-(tax / 100) + 1))
        }

        const desconto = bruto - liquido - comissao;

        const caixa = liquido * (apiData.CashierPercent / 100);

        const salario = liquido * (apiData.MoneyPercent / 100)

        const result = {
            recebido: bruto,
            recebidoFormatted: bruto.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }),
            liquido,
            liquidoFormatted: liquido.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }),
            desconto,
            descontoFormatted: desconto.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }),
            comissao,
            comissaoFormatted: comissao.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }),
            caixa,
            caixaFormatted: caixa.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }),
            salario,
            salarioFormatted: salario.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }),
        }

        return result;
    }

    async function fetchData() {
        const { data } = await api.get("/");
        setApiData(data);
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <Container>
            <Header>
                <KSTaxas width={120} height={40} />
            </Header>
            <Content>
                <Title>Coloque o valor para ser calculado</Title>
                <InputValue
                    selectionColor={theme.colors.secondaryColor}
                    keyboardType='number-pad'
                    value={inputValue}
                    onChangeText={setInputValue}
                />
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
                        <ResultValue>{results.recebidoFormatted}</ResultValue>
                    </Receive>
                    <Discount>
                        <ResultText>Desconto: </ResultText>
                        <ResultValue>{results.descontoFormatted}</ResultValue>
                    </Discount>
                    <ComissionDiscount>
                        <ResultText>Comissão: </ResultText>
                        <ResultValue>-{results.comissaoFormatted}</ResultValue>
                    </ComissionDiscount>
                    <NetValue>
                        <ResultText>Liquido: </ResultText>
                        <ResultValue>{results.liquidoFormatted}</ResultValue>
                    </NetValue>
                </ResultContainer>
                <DividerContainer>
                    <CashierContainer>
                        <MaterialCommunityIcons name="cash-register" size={48} color={theme.colors.fontColor} />
                        <Amount>{results.caixaFormatted}</Amount>
                    </CashierContainer>
                    <MoneyContainer>
                        <MaterialCommunityIcons name="cash" size={48} color={theme.colors.fontColor} />
                        <Amount>{results.salarioFormatted}</Amount>
                    </MoneyContainer>

                </DividerContainer>
            </Content>
        </Container>
    )
}