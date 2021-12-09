import React from 'react';
import {ThemeProvider} from 'styled-components';
import theme from '../../styles/theme';

const AppThemeProvider = ({children}) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default AppThemeProvider;
