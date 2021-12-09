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
  const [state, setState] = useState(false);

  return (
    <Box selected={state} onPress={() => setState(!state)}>
      <View
        style={{
          height: '30%',
          width: '100%',
          justifyContent: 'center',
          padding: 4,
        }}>
        <TextBold fontSize={20} style={{color: 'black'}}>
          Counter {index}
        </TextBold>
      </View>
      <View
        style={{
          height: '70%',
          width: '100%',
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
          padding: 4,
        }}>
        <TextBold fontSize={50} style={{color: 'black'}}>
          {value}
        </TextBold>
      </View>
    </Box>
  );
};

export default CounterBox;
