import React from 'react';
import {Text, View, StatusBar} from 'react-native';
import {useTheme} from 'styled-components';
import AppContextProvider from './src/providers';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import AppRouter from './src/router';

function App() {
  return (
    <SafeAreaProvider>
      <AppContextProvider>
        <StatusBar barStyle="light-content" translucent />
        <AppRouter />
      </AppContextProvider>
    </SafeAreaProvider>
  );
}

export default App;
