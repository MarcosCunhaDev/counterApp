import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {useState} from 'react';
import {
  defaultScreenOptions,
  defaultUserScreensOptions,
} from './defaultScreenOptions';
import {Text} from 'react-native';
import Home from '../screens/Home';
import ConfigScreen from '../screens/ConfigScreen';
import {RouteNames} from './types';

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
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          return <Text style={{color: 'black'}}>Icon</Text>;
        },
      })}>
      <Tab.Screen
        options={{
          tabBarLabel: 'Início',
          title: 'Início',
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
