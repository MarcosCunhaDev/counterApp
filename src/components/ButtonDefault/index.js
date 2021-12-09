import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useTheme} from 'styled-components';
import {TextBold} from '../../styles/components';

const CustomButton = ({onPress = () => {}, label = ''}) => {
  const {colors} = useTheme();
  return (
    <TouchableOpacity
      style={{
        paddingHorizontal: 25,
        paddingVertical: 15,
        backgroundColor: 'white',
        borderRadius: 10,
        width: '40%',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onPress={onPress}>
      <TextBold
        fontSize={18}
        style={{color: colors.primary, textAlign: 'center'}}>
        {label}
      </TextBold>
    </TouchableOpacity>
  );
};

export default CustomButton;
