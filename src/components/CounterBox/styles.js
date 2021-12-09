import Icon from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styled from 'styled-components/native';
import {TextRegular} from '../../styles/components';

export const Box = styled.TouchableOpacity`
  height: 180px;
  width: 100%;
  border-width: 3px;
  border-color: ${({color, selected, theme, ...props}) =>
    selected ? 'black' : 'white'};
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background-color: #fff;
  margin-vertical: 10px;
`;
