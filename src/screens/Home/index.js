import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {useTheme} from 'styled-components';
import {TextBold, TextSemiBold} from '../../styles/components';
import CounterBox from '../../components/CounterBox';

const data = [
  {
    value: 0,
    id: 1,
    index: 1,
  },
  {
    value: 123,
    id: 2,
    index: 2,
  },
  {
    value: 313,
    id: 3,
    index: 3,
  },
  {
    value: 5345345343,
    id: 4,
    index: 3,
  },
  {
    value: 313,
    id: 5,
    index: 3,
  },
];

const Home = () => {
  const {colors} = useTheme();

  const renderItem = ({item}) => {
    return <CounterBox {...item} />;
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.secondary,
      }}>
      <FlatList
        style={{flex: 1}}
        contentContainerStyle={{
          flexgrow: 1,
          justifyContent: 'center',
          padding: 10,
        }}
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Home;
