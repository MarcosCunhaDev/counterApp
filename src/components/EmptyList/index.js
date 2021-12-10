import React from 'react';
import {View, Text} from 'react-native';
import LottieView from 'lottie-react-native';
import {TextBold} from '../../styles/components';

const EmptyData = () => {
  return (
    <LottieView
      source={require('../../assets/animation.json')}
      autoPlay
      loop
      style={{height: 300, width: 300, alignSelf: 'center'}}
    />
  );
};

export default EmptyData;
