import styled from 'styled-components/native';

export const ButtonContainer = styled.TouchableOpacity`
  padding-horizontal: 25px;
  padding-vertical: 15px;
  background-color: ${({disabled, selected, theme, ...props}) =>
    disabled ? 'lightgray' : 'white'};
  border-radius: 10px;
  width: 40%;
  justify-content: center;
  align-items: center;
`;
