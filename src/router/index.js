import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import TabRoutes from './tab.routes';

const AppRouter = () => {
  return (
    <NavigationContainer onStateChange={() => {}}>
      <TabRoutes />
    </NavigationContainer>
  );
};

export default AppRouter;
