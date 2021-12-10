import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useTheme} from 'styled-components';
import {ButtonContainer} from './styles';

const ButtonCustom = ({type = 'add', onPress = () => {}, ...props}) => {
  const {colors} = useTheme();
  return (
    <ButtonContainer onPress={onPress}>
      {type === 'add' || type === 'remove' ? (
        <AntDesign
          name={
            type === 'add'
              ? 'pluscircle'
              : type === 'remove'
              ? 'minuscircle'
              : ''
          }
          color={colors.orange}
          size={80}
        />
      ) : type === 'right' ? (
        <FontAwesome
          name={'chevron-circle-right'}
          color={colors.orange}
          size={80}
        />
      ) : null}
    </ButtonContainer>
  );
};

export default ButtonCustom;
