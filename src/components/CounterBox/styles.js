import styled from 'styled-components/native';
import {TextRegular} from '../../styles/components';

export const Box = styled.TouchableOpacity`
  height: 180px;
  width: 100%;
  border-width: 4px;
  border-color: ${({color, selected, theme, ...props}) =>
    selected ? theme.colors.orange : 'white'};
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background-color: ${({color, selected, theme, ...props}) =>
    selected ? '#fff' : '#EDEDED'};
  margin-vertical: 10px;
`;
