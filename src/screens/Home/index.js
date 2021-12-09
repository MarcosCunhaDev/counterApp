import React from 'react';
import {View, Text} from 'react-native';
import {useTheme} from 'styled-components';

const Home = () => {
  const {colors} = useTheme();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.secondary,
      }}>
      <Text style={{color: 'black'}}>Teste</Text>
    </View>
  );
};

export default Home;
