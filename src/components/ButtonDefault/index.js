import React from 'react';
import {useTheme} from 'styled-components';
import {TextBold} from '../../styles/components';
import {ButtonContainer} from './styles';

const CustomButton = ({onPress = () => {}, label = '', disabled}) => {
  const {colors} = useTheme();
  return (
    <ButtonContainer disabled={disabled} onPress={onPress}>
      <TextBold
        fontSize={18}
        style={{color: colors.primary, textAlign: 'center'}}>
        {label}
      </TextBold>
    </ButtonContainer>
  );
};

export default CustomButton;
