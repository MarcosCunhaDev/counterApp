import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
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
      }}
      onPress={onPress}>
      <AntDesign
        name={type === 'add' ? 'pluscircle' : 'minuscircle'}
        color={colors.orange}
        size={80}
      />
    </TouchableOpacity>
  );
};

export default ButtonCustom;
