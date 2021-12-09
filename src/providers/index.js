import React from 'react';
import AppThemeProvider from './theme';
// import AppDataProviders from '../contexts';

const mergeProviders =
  providers =>
  ({children}) =>
    providers
      .reverse()
      .reduce((tree, Provider) => <Provider>{tree}</Provider>, children);

const MergedProvider = mergeProviders([AppThemeProvider]);

const AppContextProvider = ({children}) => (
  <MergedProvider>{children}</MergedProvider>
);

export default AppContextProvider;
