import React from 'react';
import {View, Text} from 'react-native';
import {useTheme} from 'styled-components';
import {TextSemiBold} from '../../styles/components';
import Icon from 'react-native-vector-icons/FontAwesome';

const ConfigScreen = () => {
  const {colors} = useTheme();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.secondary,
      }}>
      <TextSemiBold fontSize={20}>Counters</TextSemiBold>
      <TextSemiBold fontSize={20}>Selected Counter</TextSemiBold>
    </View>
  );
};

export default ConfigScreen;
