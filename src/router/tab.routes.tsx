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

const Tab = createBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'blue',
        inactiveTintColor: 'gray',
        activeBackgroundColor: 'white',
        inactiveBackgroundColor: 'white',
      }}
      screenOptions={({route}) => ({})}>
      <Tab.Screen
        options={{
          tabBarLabel: 'Início',
          title: 'Counters',
          headerTitleAlign: 'center',
        }}
        name={RouteNames.HOME}
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Configurações',
          title: 'Configurações',
          headerTitleAlign: 'center',
        }}
        name={RouteNames.CONFIG_SCREEN}
        component={ConfigScreen}
      />
    </Tab.Navigator>
  );
};

export default HomeTabs;
