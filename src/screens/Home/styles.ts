import styled from 'styled-components/native';
import { RFValue } from "react-native-responsive-fontsize";
import { RectButton, NativeViewGestureHandler, RectButtonProps } from 'react-native-gesture-handler';

interface ButtonProps extends RectButtonProps {
    enable: boolean;
}

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

export const GroupButtons = styled.View`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.primaryColorLight};
    margin: 10px 0px;
    flex-direction: row;
    justify-content: space-between;
    border-radius: 5px;
`;

export const DebitButton = styled(RectButton) <ButtonProps>`
    flex: 1;
    background-color: ${({ theme, enable }) => enable ? theme.colors.secondaryColor : theme.colors.primaryColorLight};
    border-radius: 5px;
`;

export const CreditButton = styled(RectButton) <ButtonProps>`
    flex: 1;
    background-color: ${({ theme, enable }) => enable ? theme.colors.secondaryColor : theme.colors.primaryColorLight};
    border-radius: 5px;`;

export const CashButton = styled(RectButton) <ButtonProps>`
    flex: 1;
    background-color: ${({ theme, enable }) => enable ? theme.colors.secondaryColor : theme.colors.primaryColorLight};
    border-radius: 5px;
`;

export const ComissionContainer = styled.View`
    width: 100%;
    flex-direction: row;
    background-color: ${({ theme }) => theme.colors.primaryColorLight};
    border-radius: 5px;
    padding: 0 10px;
    align-items: center;
    justify-content: space-between;
`;

export const Comission = styled.Switch``;

export const ResultContainer = styled.View`
    width: 100%;
    margin-top: 10px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.primaryColorLight};
    padding-bottom: 20px;
`;

export const Receive = styled.View`
    flex-direction: row;
    justify-content: space-around;
`;

export const Discount = styled(Receive)``;

export const ComissionDiscount = styled(Receive)``;

export const NetValue = styled.View`
    flex-direction: row;
    justify-content: space-around;
`;

export const ResultText = styled.Text`
    font-family: ${({ theme }) => theme.fonts.primary};
    color: ${({ theme }) => theme.colors.fontColor};
    font-size: ${RFValue(16)}px;
    padding: 20px 0px 0px 10px;
`;

export const ResultValue = styled.Text`
    font-family: ${({ theme }) => theme.fonts.primary};
    color: ${({ theme }) => theme.colors.fontColor};
    font-size: ${RFValue(16)}px;
    padding: 20px 0px 0px 10px;
`;
