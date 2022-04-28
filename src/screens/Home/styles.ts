import styled from 'styled-components/native';
import { RFValue } from "react-native-responsive-fontsize";


export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.primaryColorDark};
`;

export const Header = styled.View`
    width: 100%;
    height: 80px;
    align-items: center;
    justify-content: flex-end;
    margin-bottom: 15px;
`;

export const Content = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.primaryColor};
    align-items: center;
    justify-content: center;
    padding: 10px 20px;
`;

export const InputValue = styled.TextInput`
    width: 100%;
    height: 60px;
    text-align: center;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.primaryColorLight};
    color: ${({ theme }) => theme.colors.fontColor};
    font-size: ${RFValue(25)}px;
    font-family: ${({ theme }) => theme.fonts.secondary};
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.primary};
    color: ${({ theme }) => theme.colors.fontColor};
    font-size: ${RFValue(14)}px;
    padding: 20px;
`;

export const ContainerType = styled.View``;

export const GroupButtons = styled.View``;

export const DebitButton = styled.View``;

export const CreditButto = styled.View``;
