import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {Box} from './styles';
import {useTheme} from 'styled-components';
import {TextBold, TextSemiBold} from '../../styles/components';

const CounterBox = ({
  value = 0,
  selected = false,
  index = 1,
  onPress = () => {},
}) => {
  return (
    <Box selected={selected} onPress={onPress}>
      <View
        style={{
          height: '30%',
          width: '100%',
          justifyContent: 'center',
          padding: 8,
        }}>
        <TextBold fontSize={20} style={{color: selected ? 'black' : '#BEBEBE'}}>
          Counter {index + 1}
        </TextBold>
      </View>
      <View
        style={{
          height: '70%',
          width: '100%',
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
          padding: 8,
        }}>
        <TextBold fontSize={60} style={{color: selected ? 'black' : '#BEBEBE'}}>
          {value}
        </TextBold>
      </View>
    </Box>
  );
};

export default CounterBox;
