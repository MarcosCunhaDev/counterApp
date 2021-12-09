import {View} from 'react-native';
import styled, {css} from 'styled-components/native';

export const SafeAreaViewContainer = styled.SafeAreaView`
  flex: 1;
  background: #fff;
  ${props =>
    props.center &&
    css`
      align-items: center;
      justify-content: center;
    `};
`;

export const KeyboardAvoidingViewContainer = styled.KeyboardAvoidingView.attrs(
  {},
)`
  flex: 1;
  background-color: #fff;
  ${(props: any) =>
    props.center &&
    css`
      align-items: center;
      justify-content: center;
    `};
`;

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  ${props =>
    props.center &&
    css`
      align-items: center;
      justify-content: center;
    `};
`;

export const MarginHorizontal = styled.View`
  margin: 0 ${({spacing = 32}) => spacing}px;
`;

export const Row = styled.View`
  flex-direction: row;
`;

export const Center = styled.View`
  align-items: center;
  justify-content: center;
`;

export const TextLight = styled.Text`
  color: ${({color, theme}) => color};
  font-family: ${({theme}) => theme.fontFamily.light};
  ${props =>
    props.fontSize &&
    css`
      font-size: ${props.fontSize}px;
    `};
`;

export const TextRegular = styled.Text`
  color: ${({color, theme}) => theme.colors.text};
  font-family: ${({theme}) => theme.fontFamily.regular};
  ${props =>
    props.fontSize &&
    css`
      font-size: ${props.fontSize}px;
    `};
`;

export const TextSemiBold = styled.Text`
  color: ${({color, theme}) => theme.colors.text};
  font-family: ${({theme}) => theme.fontFamily.semiBold};
  ${props =>
    props.fontSize &&
    css`
      font-size: ${props.fontSize}px;
    `};
`;

export const NoResults = styled.Text`
  margin-left: 20px;
  margin-right: 20px;
  color: ${({color, theme}) => color};
  font-family: ${({theme}) => theme.fontFamily.semiBold};
  ${props =>
    props.fontSize &&
    css`
      font-size: ${props.fontSize}px;
    `};
`;

export const TextBold = styled.Text`
  color: ${({color, theme}) => theme.colors.text};
  font-family: ${({theme}) => theme.fontFamily.bold};
  ${props =>
    props.fontSize &&
    css`
      font-size: ${props.fontSize}px;
    `};
`;

export const ItemSeparator = styled.View`
  width: 100%;
  border-bottom-width: 2px;
  border-bottom-color: white;
`;
