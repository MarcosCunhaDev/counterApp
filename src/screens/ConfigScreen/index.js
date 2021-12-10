import React from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import {useTheme} from 'styled-components';
import {TextSemiBold, TextBold} from '../../styles/components';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import ButtonDefault from '../../components/ButtonDefault';
import ButtonCustom from '../../components/ButtonCustom';
import {ButtonReset} from './styles';
import {useSelector, useDispatch} from 'react-redux';
import {
  decrement,
  increment,
  resetCounter,
  addCounter,
  removeCounter,
} from '../../redux/counter/counterSlice';

const ConfigScreen = () => {
  const {listCounters: counters, currentCounterIndex} = useSelector(
    state => state.counter,
  );
  const dispatch = useDispatch();
  const {colors} = useTheme();

  const openAlert = () =>
    Alert.alert('Atention', 'Confirm delete counter?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => dispatch(removeCounter(currentCounterIndex))},
    ]);

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
          onPress={() => dispatch(addCounter())}
          label={'Add Counter'}
        />
        <ButtonDefault onPress={openAlert} label={'Remove Counter'} />
      </View>
      <View style={{marginTop: 40}}>
        <TextBold fontSize={20}>Selected Counter</TextBold>
        {currentCounterIndex !== null ? (
          <>
            <View
              style={{
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
                  onPress={() => dispatch(decrement(currentCounterIndex))}
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
                    {counters[currentCounterIndex]?.value || 0}
                  </TextBold>
                </View>
                <ButtonCustom
                  type={'add'}
                  onPress={() => dispatch(increment(currentCounterIndex))}
                />
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginVertical: 10,
                }}>
                <ButtonReset
                  onPress={() => dispatch(resetCounter(currentCounterIndex))}>
                  <Feather
                    name={'refresh-ccw'}
                    style={{color: '#fff'}}
                    size={20}
                  />

                  <TextSemiBold style={{color: '#fff', textAlign: 'center'}}>
                    Reset {'\n'} Counter
                  </TextSemiBold>
                </ButtonReset>
              </View>
            </View>
          </>
        ) : (
          <View
            style={{
              backgroundColor: 'white',

              justifyContent: 'center',
              alignItems: 'center',
              paddingHorizontal: 100,
              marginVertical: 10,
              borderRadius: 4,
            }}>
            <TextBold
              style={{
                color: 'black',
                textAlign: 'center',
                fontSize: 20,
              }}>
              Adicione um contador para poder editá-lo!
            </TextBold>
          </View>
        )}
      </View>
    </View>
  );
};

export default ConfigScreen;
