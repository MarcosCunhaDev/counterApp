import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useTheme} from 'styled-components';
import {TextSemiBold, TextBold} from '../../styles/components';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import ButtonDefault from '../../components/ButtonDefault';
import ButtonCustom from '../../components/ButtonCustom';
import {ButtonReset} from './styles';
import {useSelector, useDispatch} from 'react-redux';
import {decrement, increment, reset} from '../../redux/counter/counterSlice';

const ConfigScreen = () => {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();
  const {colors} = useTheme();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.secondary,
        padding: 10,
      }}>
      <TextBold fontSize={20}>Counters</TextBold>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          padding: 10,
        }}>
        <ButtonDefault
          onPress={() => {
            console.log('marcos');
          }}
          label={'Add Counter'}
        />
        <ButtonDefault
          onPress={() => {
            console.log('marcos');
          }}
          label={'Remove Counter'}
        />
      </View>
      <View style={{marginTop: 40}}>
        <TextBold fontSize={20}>Selected Counter</TextBold>
        <View
          style={{
            // borderWidth: 1,
            // borderColor: 'white',
            justifyContent: 'center',
            marginVertical: 20,
            padding: 10,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}>
            <ButtonCustom
              type={'remove'}
              onPress={() => dispatch(decrement())}
            />
            <View
              style={{
                width: 100,
                height: 100,
                backgroundColor: 'white',
                borderRadius: 4,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <TextBold fontSize={40} style={{color: 'black'}}>
                {count}
              </TextBold>
            </View>
            <ButtonCustom type={'add'} onPress={() => dispatch(increment())} />
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginVertical: 10,
            }}>
            <ButtonReset onPress={() => dispatch(reset())}>
              <Feather name={'refresh-ccw'} style={{color: '#fff'}} size={20} />

              <TextSemiBold style={{color: '#fff', textAlign: 'center'}}>
                Reset {'\n'} Counter
              </TextSemiBold>
            </ButtonReset>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ConfigScreen;
