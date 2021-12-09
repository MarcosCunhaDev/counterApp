import React from 'react';
import {Text, View} from 'react-native';
import AppContextProvider from './src/providers';

import AppRouter from './src/router';

function App() {
  return (
    <AppContextProvider>
      <AppRouter />
    </AppContextProvider>
  );
}

export default App;
