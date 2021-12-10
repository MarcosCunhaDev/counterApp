import React from 'react';
import {View, FlatList} from 'react-native';
import {useTheme} from 'styled-components';
import {TextBold} from '../../styles/components';
import CounterBox from '../../components/CounterBox';
import {useSelector, useDispatch} from 'react-redux';
import {setCurrentIndex} from '../../redux/counter/counterSlice';
import EmptyData from '../../components/EmptyList';
import ButtonCustom from '../../components/ButtonCustom';
import {RouteNames} from '../../router/types';

const Home = ({route, navigation}) => {
  const {colors} = useTheme();
  const {
    listCounters: counters,
    currentCounterIndex,
    value,
  } = useSelector(state => state.counter);
  const dispatch = useDispatch();

  const renderItem = ({item, index}) => {
    return (
      <CounterBox
        {...item}
        selected={currentCounterIndex === index}
        index={index}
        value={counters[index].value}
        onPress={() => dispatch(setCurrentIndex({index, id: item.id}))}
      />
    );
  };
  const renderEmptyList = () => {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <EmptyData />
        <View
          style={{
            // position: 'absolute',
            marginVertical: 20,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 10,
          }}>
          <TextBold style={{textAlign: 'center'}} fontSize={24}>
            We haven't found any counters yet. Add one to edit it.
          </TextBold>
        </View>
        <ButtonCustom
          type={'right'}
          onPress={() => {
            navigation.navigate(RouteNames.CONFIG_SCREEN);
          }}
        />
      </View>
    );
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.secondary,
      }}>
      {counters.length > 0 ? (
        <FlatList
          style={{flex: 1}}
          contentContainerStyle={{
            flexgrow: 1,
            justifyContent: 'center',
            padding: 10,
          }}
          data={counters}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      ) : (
        renderEmptyList()
      )}
    </View>
  );
};

export default Home;
