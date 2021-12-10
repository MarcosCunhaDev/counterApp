import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useTheme} from 'styled-components';

const ButtonCustom = ({type = 'add', onPress = () => {}, ...props}) => {
  const {colors} = useTheme();
  return (
    <TouchableOpacity
      style={{
        backgroundColor: 'white',
        width: 80,
        height: 80,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: type === 'right' ? 20 : 0,
      }}
      onPress={onPress}>
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
    </TouchableOpacity>
  );
};

export default ButtonCustom;
