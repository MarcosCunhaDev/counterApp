import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {useTheme} from 'styled-components';
import {TextBold, TextSemiBold} from '../../styles/components';
import CounterBox from '../../components/CounterBox';
import {useSelector, useDispatch} from 'react-redux';
import {
  decrement,
  increment,
  reset,
  addCounter,
  setCurrentIndex,
} from '../../redux/counter/counterSlice';

const Home = () => {
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
        onPress={() => dispatch(setCurrentIndex(index))}
      />
    );
  };
  const renderEmptyList = () => {
    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
        }}>
        <TextBold fontSize={24}>Nenhum contador adicionado!</TextBold>
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
