import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {useState} from 'react';
import {
  defaultScreenOptions,
  defaultUserScreensOptions,
} from './defaultScreenOptions';
import Home from '../screens/Home/index.js';
import ConfigScreen from '../screens/ConfigScreen';
import {RouteNames} from './types';
import {useTheme} from 'styled-components';
import Entypo from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {TextSemiBold} from '../styles/components';

const Tab = createBottomTabNavigator();

const HomeTabs = () => {
  const {colors} = useTheme();

  const defaultOptions = {
    headerTitleAlign: 'flex-start',
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: colors.primary,
    },
    headerTitleStyle: {
      fontSize: 28,
    },
  };

  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: colors.orange,
        inactiveTintColor: 'gray',
        activeBackgroundColor: colors.primary,
        inactiveBackgroundColor: colors.primary,
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          if (route.name === RouteNames.HOME) {
            return <Entypo name={'home'} size={size} color={color} />;
          } else if (route.name === RouteNames.CONFIG_SCREEN) {
            return (
              <Fontisto name={'player-settings'} size={size} color={color} />
            );
          }
        },
        tabBarLabel: ({focused, color}) => {
          if (route.name === RouteNames.HOME) {
            return (
              <TextSemiBold
                style={{fontSize: 13, color: color, marginBottom: 3}}>
                Home
              </TextSemiBold>
            );
          } else if (route.name === RouteNames.CONFIG_SCREEN) {
            return (
              <TextSemiBold
                style={{fontSize: 13, color: color, marginBottom: 3}}>
                Config
              </TextSemiBold>
            );
          }
        },
      })}>
      <Tab.Screen
        options={{
          title: 'Counters',
          ...defaultOptions,
          tabBarLabelPosition: 'below-icon',
        }}
        name={RouteNames.HOME}
        component={Home}
      />
      <Tab.Screen
        options={{
          title: 'Config',
          ...defaultOptions,
          tabBarLabelPosition: 'below-icon',
        }}
        name={RouteNames.CONFIG_SCREEN}
        component={ConfigScreen}
      />
    </Tab.Navigator>
  );
};

export default HomeTabs;
